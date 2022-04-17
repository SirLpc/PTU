using UnityEngine;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "IntVariable.asset", menuName = "Puergp/Variables/IntVariable", order = 0)]
    public class IntVariable : BaseVariable<int>
    {

        public int value
        {
            get => _value;
            set => _value = value;
        }

    }
}