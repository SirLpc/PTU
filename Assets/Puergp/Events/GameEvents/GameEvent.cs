using System;
using System.Collections.Generic;
using UnityEngine;

namespace Puergp.Events
{
    [CreateAssetMenu(fileName = "GameEvent.asset", menuName = "Puergp/GameEvents/GameEvent")]
    public class GameEvent : BaseGameEvent
    {
        [SerializeField]
        protected List<GameEventListener> _listeners = new List<GameEventListener>();
        protected readonly List<Action> _actions = new List<Action>();

        public void Dispatch()
        {
            for (int i = _listeners.Count - 1; i >= 0; i--)
            {
                _listeners[i].OnEventDispatched();
            }

            for (int i = _actions.Count - 1; i >= 0; i--)
            {
                _actions[i].Invoke();
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
        
        public void Register(Action action)
        {
            if (_actions.IndexOf(action) < 0)
            {
                _actions.Add(action);
            }
        }

        public void Unregister(Action action)
        {
            if (_actions.IndexOf(action) >= 0)
            {
                _actions.Remove(action);
            }
        }

        public void UnregisterAll()
        {
            _listeners.Clear();
            _actions.Clear();
        }
    }
}