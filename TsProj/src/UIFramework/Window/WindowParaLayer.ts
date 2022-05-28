import { Puergp, UnityEngine } from "csharp";
import { ATSComponent } from "../../CoreFramework/TSComponentHub";

export class WindowParaLayer extends ATSComponent {
    public enableUpdate: boolean;
    private darkenBgObject: Puergp.Variables.GameObjectVariable;

    private containedScreens: UnityEngine.GameObject[] = [];

    public AddScreen(screenRectTransform: UnityEngine.Transform): void {
        screenRectTransform.SetParent(this.gameObject.transform, false);
        this.containedScreens.push(screenRectTransform.gameObject);
    }

    public RefreshDarken(): void {
        for (const iterator of this.containedScreens) {
            if (iterator.IsNull() == false) {
                if (iterator.activeSelf) {
                    this.darkenBgObject.value.SetActive(true);
                    return;
                }
            }
        }

        this.darkenBgObject.value.SetActive(false);
    }

    public DarkenBG(): void {
        this.darkenBgObject.value.SetActive(true);
        this.darkenBgObject.value.transform.SetAsLastSibling();
    }
}