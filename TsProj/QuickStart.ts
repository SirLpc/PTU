/// <reference path="src/Engine/Core/Engine.ts" />

//部署:npm run build

import { UnityEngine, PuertsTest, System, Puergp } from 'csharp'
import { $ref, $unref, $generic, $promise, $typeof } from 'puerts'
import './ExtensionDecl'
import { App } from './src/CoreFramework/App'
import { GameApp } from './src/GameApp'
import { UIFrame as UIFrame } from './src/UIFramework/UIFrames/UIFrame'
import { ECS as ECS } from './src/ECS/ECS'
import { UISystem } from './src/UIFramework/UISystem'
import {TSComponentHub} from "./src/CoreFramework/TSComponentHub";
import {TestTSComponent} from "./src/TestTSComponent";
import { Logger } from './src/CoreFramework/Logger'
import { UnityDebugLogger } from './src/UnityDebugLogger'
import { DIC as DIC } from './src/CoreFramework/DIC'
import { CubeGO } from './src/CubeGO'
import { TSScene } from './src/CoreFramework/TSScene'
import { UnityGameObjectComponent } from './src/CoreFramework/UnityGameObjectComponent'
import { Engine } from './src/Engine/Core/Engine'
import { TestGame } from './src/Sample/TestNewEngine/TestGame'
import { IGame, IGameKey } from './src/Engine/Game/IGame'
import { UnityJsonAssetLoader } from './src/Engine/CoreUnity/Assets/UnityJsonAssetLoader'
import { IAssetLoader } from './src/CoreFramework/IAssetLoader'
import { UnityLevelToJsonAssetLoader } from './src/Engine/CoreUnity/Assets/UnityLevelToJsonAssetLoader'
import { AssetManager } from './src/Engine/Core/Assets/AssetManager'
import { LevelManager } from './src/Engine/Core/World/LevelManager'
import { ComponentManager } from './src/Engine/Core/Components/ComponentManager'
import { UnityObjectComponent, UnityObjectComponentBuilder } from './src/Engine/CoreUnity/Components/UnityObjectComponent'
import { Level } from './src/Engine/Core/World/Level'
import { SceneGraph } from './src/Engine/Core/World/SceneGraph'
import { BehaviorManager } from './src/Engine/Core/Behaviors/BehaviorManager'
import { RotationBehavior, RotationBehaviorBuilder, RotationBehaviorData } from './src/Engine/Core/Behaviors/RotationBehavior'
import { UnityVector3VariableRef as UnityVector3VariableRef } from './src/Engine/CoreUnity/VariableReferences/UnityVector3VariableRef'
import { Vector3VariableRef } from './src/Engine/Core/VariableReferences/Vector3VariableRef'
import { Vector3 } from './src/Engine/Core/Math/Vector3'
import { IVariableRef } from './src/Engine/Core/VariableReferences/IVariableRef'
import { MoveBehaviorBuilder, MoveBehaviour } from './src/Engine/Core/Behaviors/MoveBehaviour'
import { CommonBehaviorData } from './src/Engine/Core/Behaviors/CommonBehavior'
import { CommonComponentBuilder, CommonComponentData } from './src/Engine/Core/Components/CommonComponent'
import { EUIFrame, EUIFrameBuilder } from './src/UIFramework/UIFrames/EUIFrame'
import { BoolVariableRef } from './src/Engine/Core/VariableReferences/BoolVariableRef'
import { UnityBoolVariableRef } from './src/Engine/CoreUnity/VariableReferences/UnityBoolVariableRef'


// let ecs : ECS = new ECS();
// ecs.addSystem(new UISystem())
//
// setInterval(()=>
// {
//     ecs.update();
// }, 1000);

// --------------My component system test
// DIC.Register(Logger, function():Logger { return new UnityDebugLogger(); });
// DIC.Register(TSComponentHub, function():TSComponentHub { return new TSComponentHub(); });
// DIC.Register(CubeGO, function():CubeGO { return new CubeGO(DIC.Make(UnityGameObjectComponent), DIC.Make(Logger)); })
// DIC.Register(TSScene, function():TSScene { return new TSScene(); })
// DIC.Register(UnityGameObjectComponent, function():UnityGameObjectComponent {
//         let go = UnityEngine.GameObject.CreatePrimitive(UnityEngine.PrimitiveType.Cube);
//         return new UnityGameObjectComponent(go);
//     })
// DIC.Register(App, function():App {
//     return new GameApp(DIC.Make<TSComponentHub>(TSComponentHub), DIC.Make<TSScene>(TSScene), DIC.Make<CubeGO>(CubeGO));
//  });
// DIC.Make<App>(App).Start();

// ---------------TSEngine test

// register services in dic
DIC.RegisterSingleton(Engine, function():Engine {return new Engine(DIC.Make(IGameKey), DIC.Make(LevelManager))});
DIC.RegisterTransient(SceneGraph, function():SceneGraph{return new SceneGraph()});
DIC.RegisterTransient(Level, function():Level{return new Level(DIC.Make(ComponentManager), DIC.Make(BehaviorManager), DIC.Make(SceneGraph))});
DIC.RegisterSingleton(LevelManager, function():LevelManager{return new LevelManager(DIC.Make(AssetManager), DIC.GetResolver(Level))});
DIC.RegisterSingleton(IGameKey, function():IGame {return new TestGame(DIC.Make(LevelManager))});

DIC.RegisterSingleton<UnityJsonAssetLoader>(UnityJsonAssetLoader, function():UnityJsonAssetLoader {return new UnityJsonAssetLoader(DIC.Make(AssetManager))});
DIC.RegisterSingleton<UnityLevelToJsonAssetLoader>(UnityLevelToJsonAssetLoader, function():UnityLevelToJsonAssetLoader {return new UnityLevelToJsonAssetLoader(DIC.Make(AssetManager))});
DIC.RegisterSingleton(AssetManager, function():AssetManager{return new AssetManager()});

DIC.RegisterTransient(Vector3VariableRef, function():IVariableRef<Vector3>{return new UnityVector3VariableRef()});
DIC.RegisterTransient(BoolVariableRef, function():IVariableRef<boolean>{return new UnityBoolVariableRef()});



DIC.RegisterSingleton(BehaviorManager, function():BehaviorManager {return new BehaviorManager()});

DIC.RegisterTransient(CommonBehaviorData, function (): CommonBehaviorData{return new CommonBehaviorData()});


DIC.RegisterTransient(MoveBehaviour, function():MoveBehaviour{return new MoveBehaviour(DIC.Make(Vector3VariableRef))});
DIC.RegisterSingleton(MoveBehaviorBuilder, function():MoveBehaviorBuilder{return new MoveBehaviorBuilder(
    DIC.GetResolver(CommonComponentData), DIC.GetResolver(MoveBehaviour), DIC.Make(ComponentManager))
});


DIC.RegisterTransient(EUIFrame, function():EUIFrame{return new EUIFrame(DIC.Make(BoolVariableRef))});
DIC.RegisterSingleton(EUIFrameBuilder, function():EUIFrameBuilder{return new EUIFrameBuilder(
    DIC.GetResolver(CommonComponentData), DIC.GetResolver(EUIFrame), DIC.Make(ComponentManager))
});



DIC.RegisterTransient(RotationBehaviorData, function():RotationBehaviorData{return new RotationBehaviorData(DIC.Make(Vector3VariableRef))});
DIC.RegisterTransient(RotationBehavior, function():RotationBehavior{return new RotationBehavior()});
DIC.RegisterSingleton(RotationBehaviorBuilder, function():RotationBehaviorBuilder{
    return new RotationBehaviorBuilder(
        DIC.GetResolver(RotationBehaviorData), DIC.GetResolver(RotationBehavior), DIC.Make(BehaviorManager)
    )
});



DIC.RegisterSingleton(ComponentManager, function():ComponentManager {return new ComponentManager()});

DIC.RegisterTransient(CommonComponentData, function (): CommonComponentData{return new CommonComponentData()});

DIC.RegisterTransient(UnityObjectComponent, function():UnityObjectComponent {return new UnityObjectComponent()});
DIC.RegisterSingleton(UnityObjectComponentBuilder, function():UnityObjectComponentBuilder {
    return new UnityObjectComponentBuilder(
        DIC.GetResolver(CommonComponentData), DIC.GetResolver(UnityObjectComponent), DIC.Make(ComponentManager)
    )
});


// premake required services in dic
DIC.Make(UnityJsonAssetLoader);
DIC.Make(UnityLevelToJsonAssetLoader);

DIC.Make(UnityObjectComponentBuilder);
DIC.Make(RotationBehaviorBuilder);

DIC.Make(MoveBehaviorBuilder);
DIC.Make(EUIFrameBuilder);


let engine = DIC.Make<Engine>(Engine);
engine.start();



// let iv : Puergp.Variables.IntVariable = UnityEngine.Resources.Load("IntVariable") as  Puergp.Variables.IntVariable;

// let fv :  Puergp.Variables.FloatVariable = UnityEngine.Resources.Load("FloatVariable") as  Puergp.Variables.FloatVariable;

// let evt : Puergp.Events.FloatGameEvent = UnityEngine.Resources.Load("FloatGameEvent") as Puergp.Events.FloatGameEvent;

// let goPref : Puergp.Variables.GameObjectVariable = UnityEngine.Resources.Load("GameObjectVariable") as Puergp.Variables.GameObjectVariable;
// let col : Puergp.Collections.GameObjectCollection = UnityEngine.Resources.Load("GameObjectCollection") as Puergp.Collections.GameObjectCollection;

// function onValueChanged(now:number):void
// {
//     UnityEngine.Debug.Log("changed " + now);
// }
// // fv.AddListener(onValueChanged);


// evt.Register(onValueChanged);

// for (let index = 0; index < 4; index++) {
//     const element = UnityEngine.GameObject.Instantiate(goPref.value) as UnityEngine.GameObject;
//     col.Add(element);
// }



// fv.AddListener((b) => {
//     UnityEngine.Debug.Log("toggle.value=" + b);
// });


// setInterval(()=>{
//     fv.value += 1;
// }, 1000);

/*  
//静态函数
UnityEngine.Debug.Log('hello worl2223333322d');

//对象构造
let obj = new PuertsTest.DerivedClass();

//实例成员访问
obj.BMFunc();//父类方法
obj.DMFunc(PuertsTest.MyEnum.E1);//子类方法
console.log(obj.BMF, obj.DMF);
obj.BMF = 10;//父类属性
obj.DMF = 30;//子类属性
console.log(obj.BMF, obj.DMF);

//静态成员
console.log(PuertsTest.BaseClass.BSF, PuertsTest.DerivedClass.DSF, PuertsTest.DerivedClass.BSF);

//委托，事件
//如果你后续不需要-=，可以像这样直接传函数当delegate
obj.MyCallback = msg => console.log("do not need remove, msg=" + msg);
//通过new构建的delegate，后续可以拿这个引用去-=
let delegate = new PuertsTest.MyCallback(msg => console.log('can be removed, msg=' + msg));
//由于ts不支持操作符重载，Delegate.Combine相当于C#里头的obj.myCallback += delegate;
obj.MyCallback = System.Delegate.Combine(obj.MyCallback, delegate) as PuertsTest.MyCallback;
obj.Trigger();
//Delegate.Remove相当于C#里头的obj.myCallback -= delegate;
obj.MyCallback = System.Delegate.Remove(obj.MyCallback, delegate) as PuertsTest.MyCallback;
obj.Trigger();
//事件
obj.add_MyEvent(delegate);
obj.Trigger();
obj.remove_MyEvent(delegate);
obj.Trigger();
//静态事件
PuertsTest.DerivedClass.add_MyStaticEvent(delegate);
obj.Trigger();
PuertsTest.DerivedClass.remove_MyStaticEvent(delegate);
obj.Trigger();

//可变参数
obj.ParamsFunc(1024, 'haha', 'hehe', 'heihei');

//in out 参数
let p1 = $ref(1);
let p2 = $ref(10);
let ret = obj.InOutArgFunc(100, p1, p2);
console.log('ret=' + ret + ', out=' + $unref(p1) + ', ref=' + $unref(p2));

//泛型
//先通过$generic实例化泛型参数
let List = $generic(System.Collections.Generic.List$1, System.Int32);//$generic调用性能不会太好，同样泛型参数建议整个工程，至少一个文件内只做一次
let Dictionary = $generic(System.Collections.Generic.Dictionary$2, System.String, List);

let lst = new List<number>();
lst.Add(1);
lst.Add(0);
lst.Add(2);
lst.Add(4);
obj.PrintList(lst);
let dic = new Dictionary<string, System.Collections.Generic.List$1<number>>();
dic.Add("aaa", lst)
obj.PrintList(dic.get_Item("aaa"));

//arraybuffer
let ab = obj.GetAb(5);
let u8a0 = new Uint8Array(ab);
console.log(obj.SumOfAb(u8a0));
let u8a1 = new Uint8Array(2);
u8a1[0] = 123;
u8a1[1] = 101;
console.log(obj.SumOfAb(u8a1));

//引擎api
let go = new UnityEngine.GameObject("testObject");
go.AddComponent($typeof(UnityEngine.ParticleSystem));
go.transform.position = new UnityEngine.Vector3(7, 8, 9);

//extension methods
obj.PlainExtension();
obj.Extension1();
obj.Extension2(go);
let obj1 = new PuertsTest.BaseClass1();
obj.Extension2(obj1);

*/


//typescript和c#的async，await联动，为了不在低版本的Unity下报错，先注释，c#7.3以上版本可以打开这些注释
/*async function asyncCall() {
    let task = obj.GetFileLength("Assets/Examples/05_Typescript/TsQuickStart.cs");
    let result = await $promise(task);
    console.log('file length is ' + result);
    let task2 = obj.GetFileLength("notexistedfile");//这个会抛文件找不到异常，被catch
    let result2 = await $promise(task2);
    console.log('file length is ,' + result2);
}
asyncCall().catch(e => console.error("catch:" + e));*/
