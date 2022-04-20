using UnityEngine;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "FloatVariable.asset", menuName = "Puergp/Variables/FloatVariable", order = 0)]
    public class FloatVariable : BaseVariable<float>
    {
        
        public new float value
        {
            get => base.value;
            set => base.value = value;
        }
        
    }
}