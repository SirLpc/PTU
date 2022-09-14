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

        public BehaviourDescription(BehaviourInjector data)
        {
            this.type = data.type;
            this.name = data.name;
            this.rotation = new Vector3(10, 10, 10);
        }
    }
 
    public class BehaviourInjector : MonoBehaviour
    {
        
        //TODO 内容表达方式
        public string type;
        public string name;
        public string rotation;

        public VariableCollection data;

    }

}

