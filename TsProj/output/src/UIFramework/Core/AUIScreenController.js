"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUIScreenController = void 0;
const BaseBehaviorComponent_1 = require("../../Engine/Core/Behaviors/BaseBehaviorComponent");
class AUIScreenController extends BaseBehaviorComponent_1.BaseBehaviorComponent {
    screenId;
    isVisible;
    inTransitionFinished;
    outTransitionFinished;
    closeRequest;
    screenDestroyed;
    animIn;
    animOut;
    properties;
    // constructor(unityGo : UnityEngine.GameObject){
    //     super(unityGo);
    //     this.inTransitionFinished = this.binder.Get("inTransitionFinished") as Puergp.Events.GameObjectEvent;
    //     this.outTransitionFinished = this.binder.Get("outTransitionFinished") as Puergp.Events.GameObjectEvent;
    //     this.closeRequest = this.binder.Get("closeRequest") as Puergp.Events.GameObjectEvent;
    //     this.screenDestroyed = this.binder.Get("screenDestroyed") as Puergp.Events.GameObjectEvent;
    // }
    load() {
        this.AddListeners();
    }
    unload() {
        if (this.screenDestroyed.IsNull() == false) {
            // this.screenDestroyed.Dispatch(this.gameObject);
        }
        this.inTransitionFinished = null;
        this.outTransitionFinished = null;
        this.closeRequest = null;
        this.RemoveListeners();
    }
    AddListeners() { }
    RemoveListeners() { }
    OnPropertiesSet() { }
    WhileHiding() { }
    SetProperties(props) {
        this.properties = props;
    }
    HierarchyFixOnShow() { }
    Hide(animate = true) {
        this.DoAnimation(animate ? this.animOut : null, this.OnTransitionOutFinished.bind(this), false);
        this.WhileHiding();
    }
    Show(props = null) {
        if (props != null) {
            this.SetProperties(props);
        }
        this.HierarchyFixOnShow();
        this.OnPropertiesSet();
        if (this.owner.isActive == false) {
            this.DoAnimation(this.animIn, this.OnTransitionInFinished.bind(this), true);
        }
        else {
            if (this.inTransitionFinished.IsNull() == false) {
                // this.inTransitionFinished.Dispatch(this.gameObject);
            }
        }
    }
    DoAnimation(caller, callWhenFinished, isVisible) {
        if (caller == null) {
            this.owner.isActive = isVisible;
            if (callWhenFinished != null) {
                callWhenFinished();
            }
            else {
                if (isVisible && this.owner.isActive == false) {
                    this.owner.isActive = true;
                }
                // caller.Animate(this.gameObject.transform, callWhenFinished);
            }
        }
    }
    OnTransitionInFinished() {
        this.isVisible = true;
        if (this.inTransitionFinished.IsNull() == false) {
            // this.inTransitionFinished.Dispatch(this.gameObject);
        }
    }
    OnTransitionOutFinished() {
        this.isVisible = false;
        this.owner.isActive = false;
        if (this.outTransitionFinished.IsNull() == false) {
            // this.outTransitionFinished.Dispatch(this.gameObject);
        }
    }
}
exports.AUIScreenController = AUIScreenController;
//# sourceMappingURL=AUIScreenController.js.map