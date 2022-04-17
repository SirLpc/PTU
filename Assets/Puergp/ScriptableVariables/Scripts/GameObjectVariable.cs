using UnityEngine;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "GameObjectVariable.asset", menuName = "Puergp/Variables/GameObjectVariable", order = 0)]
    public class GameObjectVariable : BaseVariable<GameObject>
    {

        public GameObject value
        {
            get => _value;
            set => _value = value;
        }

    }
}