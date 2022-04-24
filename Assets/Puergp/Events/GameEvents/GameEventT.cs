using System;
using System.Collections.Generic;
using UnityEngine;

namespace Puergp.Events
{
    public class GameEvent<T> : BaseGameEvent
    {
        [SerializeField]
        protected List<GameEventListener<T>> _listeners = new List<GameEventListener<T>>();
        protected readonly List<Action<T>> _actions = new List<Action<T>>();

        public void Dispatch(T value)
        {
            for (int i = _listeners.Count - 1; i >= 0; i--)
            {
                _listeners[i].OnEventDispatched(value);
            }
            
            for (int i = _actions.Count - 1; i >= 0; i--)
            {
                _actions[i].Invoke(value);
            }
        }

        public void Register(GameEventListener<T> listener)
        {
            if (_listeners.IndexOf(listener) < 0)
            {
                _listeners.Add(listener);
            }
        }

        public void Unregister(GameEventListener<T> listener)
        {
            if (_listeners.IndexOf(listener) >= 0)
            {
                _listeners.Remove(listener);
            }
        }

        public void Register(Action<T> action)
        {
            if (_actions.IndexOf(action) < 0)
            {
                _actions.Add(action);
            }
        }

        public void Unregister(Action<T> action)
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