using System;
using UnityEngine;

namespace Puergp.Variables
{
    
    [Serializable]
    public class EnumItem
    {
        public int key;
        public string name;
    }

    [Serializable]
    public class EnumDefine
    {
        public EnumItem[] items = new EnumItem[0];
    }
    
    [CreateAssetMenu(fileName = "EnumVariable.asset", menuName = "Puergp/Variables/EnumVariable")]
    public class EnumVariable : BaseVariable<EnumDefine>
    {
        
    }
}