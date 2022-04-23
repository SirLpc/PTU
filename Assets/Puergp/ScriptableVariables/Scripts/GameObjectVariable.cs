using UnityEngine;
using UnityEngine.Events;

namespace Puergp.Variables
{
    [CreateAssetMenu(fileName = "GameObjectVariable.asset", menuName = "Puergp/Variables/GameObjectVariable", order = 0)]
    public class GameObjectVariable : BaseVariable<GameObject>
    {

        public GameObject value
        {
            get => GetValue();
            set => SetValue(value);
        }
        
        public new void AddListener(UnityAction<GameObject> action)
        {
            base.AddListener(action);
        }

        public new void RemoveListener(UnityAction<GameObject> action)
        {
            base.RemoveListener(action);
        }

        public new void RemoveAllListeners()
        {
            base.RemoveAllListeners();
        }

    }
}