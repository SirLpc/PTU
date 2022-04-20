using UnityEngine;

namespace Puergp.Variables
{
    public abstract class BaseVariable<T> : ScriptableObject
    {
        [SerializeField]
        protected T _value;

        [SerializeField]
        protected bool _readOnly;

        [SerializeField]
        protected bool _logWaringIfSetOnReadOnly;
        
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
                else if (_logWaringIfSetOnReadOnly)
                {
                    Debug.LogWarning("Tried to set read only variable on [" + name + "]!", this);
                }
            }
        }
        
    }
}