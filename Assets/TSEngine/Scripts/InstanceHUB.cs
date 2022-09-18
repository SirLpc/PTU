using System.Collections.Generic;
using UnityEngine;

namespace TSEngine
{
    public static class InstanceHUB
    {
        private static Dictionary<int, Object> _objects = new Dictionary<int, Object>();

        public static void Add(Object obj)
        {
            _objects[obj.GetInstanceID()] = obj;
        }

        public static void Remove(Object obj)
        {
            var instID = obj.GetInstanceID();
            if (_objects.ContainsKey(instID))
            {
                _objects.Remove(instID);
            }
        }

        public static Object Get(int instanceID)
        {
            if (_objects.ContainsKey(instanceID))
            {
                return _objects[instanceID];
            }

            return null;
        }
    }
}