using UnityEngine;
using UnityEngine.Events;

namespace Puergp.Events
{
    public class GameEventListener : BaseGameEventListener
    {
        public GameEvent gameEvent;
        public UnityEvent response;

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

        public void OnEventDispatched()
        {
            response?.Invoke();
        }
    }
}