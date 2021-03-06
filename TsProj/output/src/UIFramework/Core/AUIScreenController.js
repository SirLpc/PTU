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
    constructor(unityGo) {
        super(unityGo);
        this.inTransitionFinished = this.binder.Get("inTransitionFinished");
        this.outTransitionFinished = this.binder.Get("outTransitionFinished");
        this.closeRequest = this.binder.Get("closeRequest");
        this.screenDestroyed = this.binder.Get("screenDestroyed");
    }
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
        if (this.gameObject.activeSelf == false) {
            this.DoAnimation(this.animIn, this.OnTransitionInFinished.bind(this), true);
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
                if (isVisible && this.gameObject.activeSelf == false) {
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