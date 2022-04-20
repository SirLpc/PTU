using UnityEngine;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "GameObjectVariable.asset", menuName = "Puergp/Variables/GameObjectVariable", order = 0)]
    public class GameObjectVariable : BaseVariable<GameObject>
    {

        public new GameObject value
        {
            get => base.value;
            set => base.value = value;
        }

    }
}