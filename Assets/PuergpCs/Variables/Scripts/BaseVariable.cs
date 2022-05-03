using UnityEngine;
using UnityEngine.Events;

namespace PuergpCs.Variables
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
        protected UnityEvent<T> _onValueChanged;

        public T value
        {
            get => GetValue();
            set => SetValue(value);
        }

        public virtual T GetValue()
        {
            return _value;
        }
        
        public virtual void SetValue(T　value)
        {
            if (_readOnly == false)
            {
                _value = value;
                _onValueChanged?.Invoke(_value);
                return;
            }
            
            if (_logWaringWhenSetOnReadOnly)
            {
                Debug.LogWarning("Tried to set read only variable on [" + name + "]!", this);
            }
        }

        public virtual void AddListener(UnityAction<T> action)
        {
            _onValueChanged.AddListener(action);
        }

        public virtual void RemoveListener(UnityAction<T> action)
        {
            _onValueChanged.RemoveListener(action);
        }

        public virtual void RemoveAllListeners()
        {
            _onValueChanged.RemoveAllListeners();
        }
        
    }
}