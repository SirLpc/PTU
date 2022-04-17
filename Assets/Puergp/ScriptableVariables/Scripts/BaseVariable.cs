using UnityEngine;

namespace Puergp.Variables
{
    public abstract class BaseVariable<T> : ScriptableObject
    {
        [SerializeField]
        protected T _value;
    }
}