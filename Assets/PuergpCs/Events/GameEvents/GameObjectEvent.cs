using System.Collections.Generic;
using UnityEngine;

namespace PuergpCs.Events
{
    [CreateAssetMenu(fileName = "GameObjectEvent.asset", menuName = "Puergp/GameEvents/GameObjectEvent")]
    public class GameObjectEvent : GameEvent<GameObject>
    {
    }
}