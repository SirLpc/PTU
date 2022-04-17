
using System;

namespace PuertsStaticWrap
{
    public static class deVoid_UIFramework_WindowProperties_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 0)
                
                {
            
                    {
                
                        var result = new deVoid.UIFramework.WindowProperties();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(deVoid.UIFramework.WindowProperties), result);
                    
                    }
                
                }
            
                if (paramLen == 1)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var result = new deVoid.UIFramework.WindowProperties(Arg0);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(deVoid.UIFramework.WindowProperties), result);
                    
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (deVoid.UIFramework.WindowPriority)argHelper0.GetInt32(false);
                    
                        var result = new deVoid.UIFramework.WindowProperties(Arg0);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(deVoid.UIFramework.WindowProperties), result);
                    
                    }
                
                }
            
                if (paramLen == 3)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = (deVoid.UIFramework.WindowPriority)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var result = new deVoid.UIFramework.WindowProperties(Arg0, Arg1, Arg2);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(deVoid.UIFramework.WindowProperties), result);
                    
                    }
                
                }
            
                if (paramLen == 2)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = (deVoid.UIFramework.WindowPriority)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = new deVoid.UIFramework.WindowProperties(Arg0, Arg1);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(deVoid.UIFramework.WindowProperties), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to deVoid.UIFramework.WindowProperties constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_WindowQueuePriority(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var result = obj.WindowQueuePriority;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, (int)result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_WindowQueuePriority(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.WindowQueuePriority = (deVoid.UIFramework.WindowPriority)argHelper.GetInt32(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_HideOnForegroundLost(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var result = obj.HideOnForegroundLost;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_HideOnForegroundLost(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.HideOnForegroundLost = argHelper.GetBoolean(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_SuppressPrefabProperties(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var result = obj.SuppressPrefabProperties;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_SuppressPrefabProperties(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.SuppressPrefabProperties = argHelper.GetBoolean(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_IsPopup(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var result = obj.IsPopup;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_IsPopup(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as deVoid.UIFramework.WindowProperties;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.IsPopup = argHelper.GetBoolean(false);
                
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
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                    {"WindowQueuePriority", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_WindowQueuePriority, Setter = S_WindowQueuePriority} },

                    {"HideOnForegroundLost", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_HideOnForegroundLost, Setter = S_HideOnForegroundLost} },

                    {"SuppressPrefabProperties", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_SuppressPrefabProperties, Setter = S_SuppressPrefabProperties} },

                    {"IsPopup", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_IsPopup, Setter = S_IsPopup} }
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
    }
}
