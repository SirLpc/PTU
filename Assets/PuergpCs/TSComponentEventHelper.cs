using System;
using UnityEngine;

namespace PuergpCs
{
    public class TSComponentEventHelper : MonoBehaviour
    {

        private PuergpCs.Events.GameObjectEvent _onEnableEvent = null;
        private PuergpCs.Events.GameObjectEvent _onDisableEvent = null;
        private PuergpCs.Events.GameObjectEvent _onDestroyEvent = null;
        
        private void Awake()
        {
            _onEnableEvent = Resources.Load<PuergpCs.Events.GameObjectEvent>("BuiltIn/GameObjectOnEnableEvent");
            _onDisableEvent = Resources.Load<PuergpCs.Events.GameObjectEvent>("BuiltIn/GameObjectOnDisableEvent");
            _onDestroyEvent = Resources.Load<PuergpCs.Events.GameObjectEvent>("BuiltIn/GameObjectOnDestroyEvent");
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