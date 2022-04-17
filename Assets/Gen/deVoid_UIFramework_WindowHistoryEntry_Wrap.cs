
using System;

namespace PuertsStaticWrap
{
    public static class deVoid_UIFramework_WindowHistoryEntry_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 2)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(deVoid.UIFramework.IWindowController), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(deVoid.UIFramework.IWindowProperties), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<deVoid.UIFramework.IWindowController>(false);
                    
                        var Arg1 = argHelper1.Get<deVoid.UIFramework.IWindowProperties>(false);
                    
                        var result = new deVoid.UIFramework.WindowHistoryEntry(Arg0, Arg1);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(deVoid.UIFramework.WindowHistoryEntry), result);
                    
                    }
                
                }
            
                if (paramLen == 0)
                
                {
            
                    {
                
                        var result = new deVoid.UIFramework.WindowHistoryEntry();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(deVoid.UIFramework.WindowHistoryEntry), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to deVoid.UIFramework.WindowHistoryEntry constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Show(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (deVoid.UIFramework.WindowHistoryEntry)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    {
                
                        obj.Show();
                
                        
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Screen(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (deVoid.UIFramework.WindowHistoryEntry)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Screen;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Properties(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (deVoid.UIFramework.WindowHistoryEntry)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Properties;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
                    { new Puerts.MethodKey { Name = "Show", IsStatic = false}, M_Show }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                    {"Screen", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Screen, Setter = null} },

                    {"Properties", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Properties, Setter = null} }
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
    }
}
