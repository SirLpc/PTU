using System.Collections.Generic;
using UnityEngine;

namespace TSEngine
{
    public static class InstanceHUB
    {
        private static Dictionary<int, object> _objects = new Dictionary<int, object>();

        public static void AddObject(Object obj)
        {
            _objects[obj.GetInstanceID()] = obj;
        }
        
        public static void Add(int key, object obj)
        {
            _objects[key] = obj;
            Debug.Log("add " + key);
        }

        public static void RemoveObject(Object obj)
        {
            var instID = obj.GetInstanceID();
            if (_objects.ContainsKey(instID))
            {
                _objects.Remove(instID);
            }
        }
        
        public static void Remove(int key)
        {
            if (_objects.ContainsKey(key))
            {
                _objects.Remove(key);
            }
        }

        public static object Get(int key)
        {
            Debug.Log("Get " + key);
            if (_objects.ContainsKey(key))
            {
                return _objects[key];
            }

            return null;
        }
    }
}