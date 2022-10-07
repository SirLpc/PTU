using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;


namespace TSEngine
{
    
    [Serializable]
    public class BehaviourDescription
    {
        public string type;
        public string name;
        public BaseVariableReference[] data;

        public BehaviourDescription(BehaviourInjector data)
        {
            this.type = data.type;
            this.name = data.behaviourName;
            this.data = data.data.variables;
        }
    }
 
    public class BehaviourInjector : MonoBehaviour
    {
        
        public string type;
        public string behaviourName;

        public VariableReferenceCollection data;

	    public void RegisterVariables()
        {
            foreach (var variableReference in data.variables)
            {
                variableReference.refID = GUID.Generate().GetHashCode();
                InstanceHUB.Add(variableReference.refID, variableReference.variable);
            }
        }
    }

}

