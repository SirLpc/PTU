using System;
using System.Collections;
using System.Collections.Generic;
using ScriptableObjectArchitecture;
using UnityEngine;


namespace TSEngine
{
    
    [Serializable]
    public class ComponentDescription
    {
        public string type;
        public string name;
        public VariableEntry[] data;

        public ComponentDescription(ComponentInjector data)
        {
            this.type = data.type;
            this.name = data.componentName;
            this.data = data.data.variables;
        }
    }
 
    public class ComponentInjector : MonoBehaviour
    {
        
        public string type;
        public string componentName;

        public VariableCollection data;
    }

}

