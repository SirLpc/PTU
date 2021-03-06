using System;
using UnityEngine;

namespace Puergp
{
    public static class PuergpExtensions
    {
        public static bool IsNull(this UnityEngine.Object o) 
        {
            return o == null;
        }
        
        public static bool IsNotNull(this UnityEngine.Object o) 
        {
            return o != null;
        }

        public static Component GetOrAddComponent(this UnityEngine.GameObject o, Type type)
        {
            var comp = o.GetComponent(type);
            if (comp == null)
            {
                comp = o.AddComponent(type);
            }

            return comp;
        }
    }
}