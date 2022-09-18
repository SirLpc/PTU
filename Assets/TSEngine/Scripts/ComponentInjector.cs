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

        public ComponentDescription(ComponentInjector data)
        {
            this.type = data.type;
            this.name = data.componentName;
        }
    }
 
    public class ComponentInjector : MonoBehaviour
    {
        
        //TODO 内容表达方式
        public string type;
        public string componentName;

    }

}

