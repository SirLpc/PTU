"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUIScreenController = void 0;
const TSComponentHub_1 = require("../../CoreFramework/TSComponentHub");
class AUIScreenController extends TSComponentHub_1.ATSComponent {
    screenId;
    isVisible;
    inTransitionFinished;
    outTransitionFinished;
    closeRequest;
    screenDestroyed;
    animIn;
    animOut;
    properties;
    Awake() {
        this.AddListeners();
    }
    OnDestroy() {
        if (this.screenDestroyed.IsNull() == false) {
            this.screenDestroyed.Dispatch(this.gameObject);
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
    Hide(animate) {
        this.DoAnimation(animate ? this.animOut : null, this.OnTransitionOutFinished.bind(this), false);
        this.WhileHiding();
    }
    Show(props = null) {
        if (props != null) {
            this.SetProperties(props);
        }
        this.HierarchyFixOnShow();
        this.OnPropertiesSet();
        if (this.gameObject.activeSelf == false) {
            this.DoAnimation(this.animIn, this.OnTransitionOutFinished.bind(this), true);
        }
        else {
            if (this.inTransitionFinished.IsNull() == false) {
                this.inTransitionFinished.Dispatch(this.gameObject);
            }
        }
    }
    DoAnimation(caller, callWhenFinished, isVisible) {
        if (caller == null) {
            this.gameObject.SetActive(isVisible);
            if (callWhenFinished != null) {
                callWhenFinished();
            }
            else {
                if (isVisible && this.gameObject.activeSelf) {
                    this.gameObject.SetActive(true);
                }
                caller.Animate(this.gameObject.transform, callWhenFinished);
            }
        }
    }
    OnTransitionInFinished() {
        this.isVisible = true;
        if (this.inTransitionFinished.IsNull() == false) {
            this.inTransitionFinished.Dispatch(this.gameObject);
        }
    }
    OnTransitionOutFinished() {
        this.isVisible = false;
        this.gameObject.SetActive(false);
        if (this.outTransitionFinished.IsNull() == false) {
            this.outTransitionFinished.Dispatch(this.gameObject);
        }
    }
}
exports.AUIScreenController = AUIScreenController;
//# sourceMappingURL=AUIScreenController.js.map