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
        public Vector3 rotation;
        public VariableEntry[] data;

        public BehaviourDescription(BehaviourInjector data)
        {
            this.type = data.type;
            this.name = data.behaviourName;
            this.rotation = new Vector3(10, 10, 10);
            this.data = data.data.variables;
        }
    }
 
    public class BehaviourInjector : MonoBehaviour
    {
        
        //TODO 内容表达方式
        public string type;
        public string behaviourName;
        public string rotation;

        public VariableCollection data;

    }

}

