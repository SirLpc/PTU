using UnityEngine;
using UnityEngine.Events;

namespace Puergp.Variables
{
    public abstract class BaseVariable<T> : ScriptableObject
    {
        [SerializeField]
        protected T _value;

        [SerializeField]
        protected bool _readOnly;

        [SerializeField]
        protected bool _logWaringWhenSetOnReadOnly;

        [SerializeField]
        protected UnityEvent<T> _event;
        
        protected T value
        {
            get
            {
                return _value;
            }
            set
            {
                if (_readOnly == false)
                {
                    _value = value;
                }
                else if (_logWaringWhenSetOnReadOnly)
                {
                    Debug.LogWarning("Tried to set read only variable on [" + name + "]!", this);
                }
            }
        }
        
    }
}