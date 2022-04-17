using UnityEngine;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "FloatVariable.asset", menuName = "Puergp/Variables/FloatVariable", order = 0)]
    public class FloatVariable : BaseVariable<float>
    {
        
        public float value
        {
            get => _value;
            set => _value = value;
        }
        
    }
}