using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace TSEngine
{
    
    [Serializable]
    public class BehaviourDescription
    {
        public string type;
        public string name;
        public VariableEntry[] data;

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

        public VariableCollection data;

    }

}

