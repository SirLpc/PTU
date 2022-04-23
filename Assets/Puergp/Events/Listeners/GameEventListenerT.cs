using UnityEngine.Events;

namespace Puergp.Events
{
    public class GameEventListener<T> : BaseGameEventListener
    {
        public GameEvent<T> gameEvent;
        public UnityEvent<T> response;

        private void OnEnable()
        {
            if (gameEvent != null)
            {
                gameEvent.Register(this);
            }
        }

        private void OnDisable()
        {
            if (gameEvent != null)
            {
                gameEvent.Unregister(this);
            }
        }

        public void OnEventDispatched(T value)
        {
            response?.Invoke(value);
        }
        
        
    }
}