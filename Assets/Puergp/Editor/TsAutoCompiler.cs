using System;
using System.Diagnostics;
using System.IO;
using UnityEditor;
using UnityEngine;
using Debug = UnityEngine.Debug;

[InitializeOnLoad]
sealed class TsAutoCompiler : MonoBehaviour
{
    private static FileSystemWatcher _watcher;
    private static bool _shouldBuild = false;

    static TsAutoCompiler()
    {
        _watcher = new FileSystemWatcher("./TsProj/src", "*.ts");
        _watcher.Created += OnChanged;
        _watcher.Changed += OnChanged;
        _watcher.Deleted += OnChanged;
        _watcher.Renamed += OnChanged;
        _watcher.IncludeSubdirectories = true;
        _watcher.EnableRaisingEvents = true;
        _shouldBuild = false;
        
        EditorApplication.update += Update;
    }

    ~TsAutoCompiler()
    {
        _watcher.Created -= OnChanged;
        _watcher.Changed -= OnChanged;
        _watcher.Deleted -= OnChanged;
        _watcher.Renamed -= OnChanged;
        _watcher.EnableRaisingEvents = false;
        _watcher = null;
        
        EditorApplication.update -= Update;
    }

    private static void OnChanged(object sender, FileSystemEventArgs e)
    {
        _shouldBuild = true;
    }
    
    private static void Update()
    {
        if (!_shouldBuild) 
            return;
        _shouldBuild = false;

        Process p = new Process();
        p.StartInfo = new ProcessStartInfo("npm");
        p.StartInfo.Arguments = "run build";
        p.StartInfo.WorkingDirectory = "./TsProj";
        p.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
        p.Start();
        p.WaitForExit();
        AssetDatabase.Refresh();
        if (p.ExitCode == 0)
        {
            Debug.Log("Ts compile done! result code : " + p.ExitCode);
        }
        else 
        {
            Debug.LogError("Ts compile done! result code : " + p.ExitCode);
        }
    }

}
