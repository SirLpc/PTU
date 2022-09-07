using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Text.RegularExpressions;
using UnityEditor;

public class TypeScriptLogLocation
{
    [UnityEditor.Callbacks.OnOpenAssetAttribute(0)]
    static bool OnOpenAsset(int instanceID, int line)
    {
        string stackTrace = GetStackTrace();
        // 正则匹配
        MatchCollection matches = Regex.Matches(stackTrace, "at(.*?.js:\\d+:\\d+)");
        if (matches != null && matches.Count >= 1)
        {
            Match match = matches[0];
            // puerts 需要跳转到堆栈第二条（这里需要根据项目内容具体调整）
            if (match.Groups[1].Value.Contains("console.log"))
            {
                return (matches.Count >= 2 && OpenTypeScriptLocation(matches[1]));
            }
            else
            {
                return OpenTypeScriptLocation(matches[0]);
            }
        }
        return false;
    }

    // 获取输出堆栈
    static string GetStackTrace()
    {
        System.Type consoleWindowType = typeof(EditorWindow).Assembly.GetType("UnityEditor.ConsoleWindow");
        FieldInfo ms_ConsoleWindow_fieldInfo = consoleWindowType.GetField("ms_ConsoleWindow", BindingFlags.Static | BindingFlags.NonPublic);
        EditorWindow consoleWindowInstance = ms_ConsoleWindow_fieldInfo.GetValue(null) as EditorWindow;
        if (null != consoleWindowInstance)
        {
            if (EditorWindow.focusedWindow == consoleWindowInstance)
            {
                FieldInfo m_ActiveText_fieldInfo = consoleWindowType.GetField("m_ActiveText", BindingFlags.Instance | BindingFlags.NonPublic);
                return m_ActiveText_fieldInfo.GetValue(consoleWindowInstance).ToString();
            }
        }
        return string.Empty;
    }

    static bool OpenTypeScriptLocation(Match match)
    {
        if (!match.Success)
            return false;

        string resPath;
        string resLine;
        string resColumn;
        DealMatch(match, out resPath, out resLine, out resColumn);
        OpenIDE(resPath, System.Convert.ToInt32(resLine), System.Convert.ToInt32(resColumn));
        return true;
    }

    static void DealMatch(Match match, out string resPath, out string resLine, out string resColumn)
    {
        //字符串解析获取对应js文件名，行数，列数
        string pathLine = match.Groups[1].Value;
        int colomnIndex = pathLine.LastIndexOf(':');
        int colomn = System.Convert.ToInt32(pathLine.Substring(colomnIndex + 1)); // js列数
        pathLine = pathLine.Substring(0, colomnIndex);
        int lineIndex = pathLine.LastIndexOf(':');
        int line = System.Convert.ToInt32(pathLine.Substring(lineIndex + 1)); // js行号
        int pathIndex = pathLine.LastIndexOf("(");
        string path = pathLine.Substring(pathIndex + 1, lineIndex - pathIndex - 1); // js文件名

        Process process = new Process();
        ProcessStartInfo startInfo = new ProcessStartInfo();
        startInfo.FileName = "node";
        // 对应sourcemap解析工具函数（注意路径为windows下路径）
        var topDir = System.Environment.CurrentDirectory.Replace("\\", "/");
        startInfo.Arguments = topDir + string.Format("/log.js {0} {1} {2}", topDir + "/TsProj/output/" + path.Replace("\\", "/"), line, colomn);
        startInfo.UseShellExecute = false;
        startInfo.CreateNoWindow = true;
        startInfo.RedirectStandardOutput = true;
        startInfo.RedirectStandardInput = true;
        process.StartInfo = startInfo;
        process.Start();
        StreamReader reader = process.StandardOutput; //截取输出流 每次读取一行
        resPath = reader.ReadLine(); // ts文件名
        resLine = reader.ReadLine(); // ts行数
        resColumn = reader.ReadLine(); // ts列数
        process.WaitForExit(); // 等待程序执行完退出进程
        process.Close(); // 关闭进程
        reader.Close(); // 关闭流
    }

    // 打开IDE
    static void OpenIDE(string path, int line, int column)
    {
        int typeScriptIDETypeIndex = EditorPrefs.GetInt("TYPESCRIPT_IDE_TYPE");
        TypeScriptIDEType typeScriptIDEType = (TypeScriptIDEType)typeScriptIDETypeIndex;

        string idePath = string.Empty;
        if (typeScriptIDEType == TypeScriptIDEType.IDEA)
        {
            idePath = EditorPrefs.GetString("IDEA_IDE_Path");
        }
        else if (typeScriptIDEType == TypeScriptIDEType.VSCode)
        {
            idePath = EditorPrefs.GetString("VSCode_IDE_Path");
        }

        if (string.IsNullOrEmpty(idePath) || !System.IO.File.Exists(idePath))
        {
            return;
        }

        string args = string.Empty;
        if (typeScriptIDEType == TypeScriptIDEType.IDEA)
        {
            args = $"--line {line} {path.Replace("\\", "/")}";
        }
        else if (typeScriptIDEType == TypeScriptIDEType.VSCode)
        {
            args = string.Format("-g {0}:{1}", path.Replace("\\", "/"), line);
        }
        Process process = new Process();
        ProcessStartInfo startInfo = new ProcessStartInfo();
        startInfo.FileName = idePath;
        startInfo.Arguments = args;
        startInfo.UseShellExecute = false;
        startInfo.CreateNoWindow = false;
        startInfo.RedirectStandardOutput = false;
        process.StartInfo = startInfo;
        process.Start();
        return;
    }
}
