using UnityEngine;
using UnityEngine.Events;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "IntVariable.asset", menuName = "Puergp/Variables/IntVariable", order = 0)]
    public class IntVariable : BaseVariable<int>
    {

        public int value
        {
            get => GetValue();
            set => SetValue(value);
        }

        public new void AddListener(UnityAction<int> action)
        {
            base.AddListener(action);
        }

        public new void RemoveListener(UnityAction<int> action)
        {
            base.RemoveListener(action);
        }

        public new void RemoveAllListeners()
        {
            base.RemoveAllListeners();
        }
        
    }
}