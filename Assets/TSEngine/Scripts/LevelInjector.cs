using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace TSEngine
{
    
    [Serializable]
    public class TransformDescription
    {
        public Vector3 position;
        public Vector3 rotation;
        public Vector3 scale;

        public TransformDescription(Transform tr)
        {
            this.position = tr.localPosition;
            this.rotation = tr.localEulerAngles;
            this.scale = tr.localScale;
        }
    }
    
    [Serializable]
    public class EntityDescription
    {
        public string name;
        public TransformDescription transform;
        public EntityDescription[] children;

        public EntityDescription(Transform tr)
        {
            name = tr.name;
            transform = new TransformDescription(tr);
            children = new EntityDescription[tr.childCount];
            for (int i = 0; i < tr.childCount; i++)
            {
                children[i] = new EntityDescription(tr.GetChild(i));
            }
        }
    }

    public class LevelDescription
    {
        public string name;
        public EntityDescription[] objects;

        public LevelDescription(EntityDescription root)
        {
            this.name = root.name;
            this.objects = new[] { root };
        }
    }

    public class LevelInjector : MonoBehaviour
    {

        public string ToJsonDescription()
        {
            EntityDescription root = new EntityDescription(transform);
            root.name = gameObject.name;
            LevelDescription level = new LevelDescription(root);
            return JsonUtility.ToJson(level);
        }
        
    }

}

