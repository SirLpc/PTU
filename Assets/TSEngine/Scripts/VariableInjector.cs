using System;
using UnityEngine;

namespace TSEngine
{
    [Serializable]
    public class VariableEntry
    {
        public string name;
        public ScriptableObject variable;
    }
    
    [Serializable]
    public class VariableCollection
    {
        public VariableEntry[] variables;
    }
}