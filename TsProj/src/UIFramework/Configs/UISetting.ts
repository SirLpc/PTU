import { UnityEngine, PuertsTest, System, Puergp } from 'csharp'
import { IBaseConfig as IBaseConfig } from '../../CoreFramework/IBaseConfig';



export class UISetting implements IBaseConfig
{
    location: string;

    uiFrameTemplate : Puergp.Variables.GameObjectVariable;

}