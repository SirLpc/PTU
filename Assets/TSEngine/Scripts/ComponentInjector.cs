using System;
using System.Collections;
using System.Collections.Generic;
using ScriptableObjectArchitecture;
using UnityEditor;
using UnityEngine;


namespace TSEngine
{
    
    [Serializable]
    public class ComponentDescription
    {
        public string type;
        public string name;
        public BaseVariableReference[] data;

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

        public VariableReferenceCollection data;

        private void Awake()
        {
            foreach (var variableReference in data.variables)
            {
                variableReference.refID = GUID.Generate().GetHashCode();
                InstanceHUB.Add(variableReference.refID, variableReference.variable);
            }
        }
    }

}

