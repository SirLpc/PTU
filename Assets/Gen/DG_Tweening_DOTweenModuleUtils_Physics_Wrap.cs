
using System;

namespace PuertsStaticWrap
{
    public static class DG_Tweening_DOTweenModuleUtils_Physics_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SetOrientationOnPath(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    {
                
                        var Arg0 = argHelper0.Get<DG.Tweening.Plugins.Options.PathOptions>(false);
                    
                        var Arg1 = argHelper1.Get<DG.Tweening.Tween>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Transform>(false);
                    
                        DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_HasRigidbody2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Component>(false);
                    
                        var result = DG.Tweening.DOTweenModuleUtils.Physics.HasRigidbody2D(Arg0);
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_HasRigidbody(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Component>(false);
                    
                        var result = DG.Tweening.DOTweenModuleUtils.Physics.HasRigidbody(Arg0);
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_CreateDOTweenPathTween(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.MonoBehaviour>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var Arg3 = argHelper3.Get<DG.Tweening.Plugins.Core.PathCore.Path>(false);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var Arg5 = (DG.Tweening.PathMode)argHelper5.GetInt32(false);
                    
                        var result = DG.Tweening.DOTweenModuleUtils.Physics.CreateDOTweenPathTween(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        public static Puerts.TypeRegisterInfo GetRegisterInfo()
        {
            return new Puerts.TypeRegisterInfo()
            {
                BlittableCopy = false,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {   
                    { new Puerts.MethodKey { Name = "SetOrientationOnPath", IsStatic = true}, F_SetOrientationOnPath },
                    { new Puerts.MethodKey { Name = "HasRigidbody2D", IsStatic = true}, F_HasRigidbody2D },
                    { new Puerts.MethodKey { Name = "HasRigidbody", IsStatic = true}, F_HasRigidbody },
                    { new Puerts.MethodKey { Name = "CreateDOTweenPathTween", IsStatic = true}, F_CreateDOTweenPathTween }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
    }
}
