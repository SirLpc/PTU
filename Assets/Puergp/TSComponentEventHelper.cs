using System;
using UnityEngine;

namespace Puergp
{
    public class TSComponentEventHelper : MonoBehaviour
    {

        private Puergp.Events.GameObjectEvent _onEnableEvent = null;
        private Puergp.Events.GameObjectEvent _onDisableEvent = null;
        private Puergp.Events.GameObjectEvent _onDestroyEvent = null;
        
        private void Awake()
        {
            _onEnableEvent = Resources.Load<Puergp.Events.GameObjectEvent>("BuiltIn/GameObjectOnEnableEvent");
            _onDisableEvent = Resources.Load<Puergp.Events.GameObjectEvent>("BuiltIn/GameObjectOnDisableEvent");
            _onDestroyEvent = Resources.Load<Puergp.Events.GameObjectEvent>("BuiltIn/GameObjectOnDestroyEvent");
        }

        private void OnEnable()
        {
            _onEnableEvent.Dispatch(gameObject);
        }

        private void OnDisable()
        {
            _onDisableEvent.Dispatch(gameObject);
        }

        private void OnDestroy()
        {
            _onDestroyEvent.Dispatch(gameObject);
        }
    }
}