using System.Collections.Generic;
using UnityEngine;

namespace Puergp.Events
{
    [CreateAssetMenu(fileName = "GameEvent.asset", menuName = "Puergp/GameEvents/GameEvent")]
    public class GameEvent : BaseGameEvent
    {
        protected List<GameEventListener> _listeners = new List<GameEventListener>();

        public void Dispatch()
        {
            for (int i = _listeners.Count - 1; i >= 0; i--)
            {
                _listeners[i].OnEventDispatched();
            }
        }

        public void Register(GameEventListener listener)
        {
            if (_listeners.IndexOf(listener) < 0)
            {
                _listeners.Add(listener);
            }
        }

        public void Unregister(GameEventListener listener)
        {
            if (_listeners.IndexOf(listener) >= 0)
            {
                _listeners.Remove(listener);
            }
        }

        public void UnregisterAll()
        {
            _listeners.Clear();
        }
    }
}