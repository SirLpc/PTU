using UnityEngine;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "IntVariable.asset", menuName = "Puergp/Variables/IntVariable", order = 0)]
    public class IntVariable : BaseVariable<int>
    {

        public new int value
        {
            get => base.value;
            set => base.value = value;
        }

    }
}