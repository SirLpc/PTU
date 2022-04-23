using UnityEngine;
using UnityEngine.Events;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "FloatVariable.asset", menuName = "Puergp/Variables/FloatVariable", order = 0)]
    public class FloatVariable : BaseVariable<float>
    {
        
        public float value
        {
            get => GetValue();
            set => SetValue(value);
        }
        
        public new void AddListener(UnityAction<float> action)
        {
            base.AddListener(action);
        }

        public new void RemoveListener(UnityAction<float> action)
        {
            base.RemoveListener(action);
        }

        public new void RemoveAllListeners()
        {
            base.RemoveAllListeners();
        }
    }
}