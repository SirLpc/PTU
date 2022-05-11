using System.Collections.Generic;
using UnityEngine;

namespace Puergp.Events
{
    [CreateAssetMenu(fileName = "GameObjectEvent.asset", menuName = "Puergp/GameEvents/GameObjectEvent")]
    public class GameObjectEvent : GameEvent<GameObject>
    {
    }
}