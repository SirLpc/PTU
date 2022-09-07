using UnityEditor;
using UnityEngine;

public enum TypeScriptIDEType
{
    IDEA = 0,
    VSCode
}

public class TypeScriptIDESetting : EditorWindow
{
    [MenuItem("程序工具/TypeScript/TypeScriptIDE路径配置")]
    public static void SetIDEPath()
    {
        TypeScriptIDESetting editor = CreateInstance<TypeScriptIDESetting>();
        editor.Show();
    }

    public string[] TypeScriptIDETypes = new string[] { "IDEA", "VSCode" };

    void OnGUI()
    {
        int typeScriptIDETypeIndex = EditorPrefs.GetInt("TYPESCRIPT_IDE_TYPE");
        typeScriptIDETypeIndex = EditorGUILayout.Popup(typeScriptIDETypeIndex, TypeScriptIDETypes);
        EditorPrefs.SetInt("TYPESCRIPT_IDE_TYPE", typeScriptIDETypeIndex);

        TypeScriptIDEType typeScriptIDEType = (TypeScriptIDEType)typeScriptIDETypeIndex;

        if (typeScriptIDEType == TypeScriptIDEType.IDEA)
        {

            GUILayout.Label("IDEA IDE路径:");
            string ideaPath = EditorPrefs.GetString("IDEA_IDE_Path");
            GUILayout.TextField(ideaPath);
            if (GUILayout.Button("Browse"))
            {
                ideaPath = UnityEditor.EditorUtility.OpenFilePanel("选择路径", "", "exe");
                EditorPrefs.SetString("IDEA_IDE_Path", ideaPath);
            }
        }
        else if (typeScriptIDEType == TypeScriptIDEType.VSCode)
        {
            GUILayout.Label("VSCode IDE路径:");
            string vscodePath = EditorPrefs.GetString("VSCode_IDE_Path");
            GUILayout.TextField(vscodePath);
            if (GUILayout.Button("Browse"))
            {
                vscodePath = UnityEditor.EditorUtility.OpenFilePanel("选择路径", "", "exe");
                EditorPrefs.SetString("VSCode_IDE_Path", vscodePath);
            }
        }
    }
}

