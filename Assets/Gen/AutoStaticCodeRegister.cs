﻿namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Debug), UnityEngine_Debug_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.TestClass), PuertsTest_TestClass_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3), UnityEngine_Vector3_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Collections.Generic.List<int>), System_Collections_Generic_List_1_System_Int32__Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Collections.Generic.Dictionary<string, System.Collections.Generic.List<int>>), System_Collections_Generic_Dictionary_2_System_String_System_Collections_Generic_List_1_System_Int32___Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.BaseClass), PuertsTest_BaseClass_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.DerivedClass), PuertsTest_DerivedClass_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.BaseClassExtension), PuertsTest_BaseClassExtension_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Time), UnityEngine_Time_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Transform), UnityEngine_Transform_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Component), UnityEngine_Component_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GameObject), UnityEngine_GameObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Object), UnityEngine_Object_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Delegate), System_Delegate_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Object), System_Object_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Type), System_Type_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem), UnityEngine_ParticleSystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Canvas), UnityEngine_Canvas_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Behaviour), UnityEngine_Behaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MonoBehaviour), UnityEngine_MonoBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.EventSystems.UIBehaviour), UnityEngine_EventSystems_UIBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Selectable), UnityEngine_UI_Selectable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button), UnityEngine_UI_Button_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button.ButtonClickedEvent), UnityEngine_UI_Button_ButtonClickedEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Events.UnityEvent), UnityEngine_Events_UnityEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField), UnityEngine_UI_InputField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle), UnityEngine_UI_Toggle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle.ToggleEvent), UnityEngine_UI_Toggle_ToggleEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Events.UnityEvent<bool>), UnityEngine_Events_UnityEvent_1_System_Boolean__Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsDeclareTest.Plants.pumkinPeaShooter), PuertsDeclareTest_Plants_pumkinPeaShooter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsDeclareTest.Plants.Shootable), PuertsDeclareTest_Plants_Shootable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsDeclareTest.Zombies.Walkable), PuertsDeclareTest_Zombies_Walkable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsDeclareTest.Zombies.Flyable), PuertsDeclareTest_Zombies_Flyable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsDeclareTest.Zombies.BalloonZombie), PuertsDeclareTest_Zombies_BalloonZombie_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AndroidJavaException), UnityEngine_AndroidJavaException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AndroidJavaObject), UnityEngine_AndroidJavaObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AndroidJavaClass), UnityEngine_AndroidJavaClass_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.jvalue), UnityEngine_jvalue_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AndroidJNIHelper), UnityEngine_AndroidJNIHelper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AndroidJNI), UnityEngine_AndroidJNI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Animator), UnityEngine_Animator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IAnimationClipSource), UnityEngine_IAnimationClipSource_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SharedBetweenAnimatorsAttribute), UnityEngine_SharedBetweenAnimatorsAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StateMachineBehaviour), UnityEngine_StateMachineBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Animation), UnityEngine_Animation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationState), UnityEngine_AnimationState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationEvent), UnityEngine_AnimationEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationClip), UnityEngine_AnimationClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorClipInfo), UnityEngine_AnimatorClipInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorStateInfo), UnityEngine_AnimatorStateInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorTransitionInfo), UnityEngine_AnimatorTransitionInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MatchTargetWeightMask), UnityEngine_MatchTargetWeightMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorControllerParameter), UnityEngine_AnimatorControllerParameter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorOverrideController), UnityEngine_AnimatorOverrideController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorUtility), UnityEngine_AnimatorUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Avatar), UnityEngine_Avatar_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SkeletonBone), UnityEngine_SkeletonBone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanLimit), UnityEngine_HumanLimit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanBone), UnityEngine_HumanBone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanDescription), UnityEngine_HumanDescription_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AvatarBuilder), UnityEngine_AvatarBuilder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AvatarMask), UnityEngine_AvatarMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanPose), UnityEngine_HumanPose_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanPoseHandler), UnityEngine_HumanPoseHandler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanTrait), UnityEngine_HumanTrait_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Motion), UnityEngine_Motion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RuntimeAnimatorController), UnityEngine_RuntimeAnimatorController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundle), UnityEngine_AssetBundle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleCreateRequest), UnityEngine_AssetBundleCreateRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleManifest), UnityEngine_AssetBundleManifest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleRecompressOperation), UnityEngine_AssetBundleRecompressOperation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleRequest), UnityEngine_AssetBundleRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BuildCompression), UnityEngine_BuildCompression_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSettings), UnityEngine_AudioSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSettings.Mobile), UnityEngine_AudioSettings_Mobile_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSource), UnityEngine_AudioSource_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioLowPassFilter), UnityEngine_AudioLowPassFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioHighPassFilter), UnityEngine_AudioHighPassFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioReverbFilter), UnityEngine_AudioReverbFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioConfiguration), UnityEngine_AudioConfiguration_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioClip), UnityEngine_AudioClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioBehaviour), UnityEngine_AudioBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioListener), UnityEngine_AudioListener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioReverbZone), UnityEngine_AudioReverbZone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioDistortionFilter), UnityEngine_AudioDistortionFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioEchoFilter), UnityEngine_AudioEchoFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioChorusFilter), UnityEngine_AudioChorusFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Microphone), UnityEngine_Microphone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioRenderer), UnityEngine_AudioRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WebCamDevice), UnityEngine_WebCamDevice_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WebCamTexture), UnityEngine_WebCamTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ClothSphereColliderPair), UnityEngine_ClothSphereColliderPair_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ClothSkinningCoefficient), UnityEngine_ClothSkinningCoefficient_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Cloth), UnityEngine_Cloth_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ClusterSerialization), UnityEngine_ClusterSerialization_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SortingLayer), UnityEngine_SortingLayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Keyframe), UnityEngine_Keyframe_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationCurve), UnityEngine_AnimationCurve_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Application), UnityEngine_Application_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CachedAssetBundle), UnityEngine_CachedAssetBundle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Cache), UnityEngine_Cache_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Camera), UnityEngine_Camera_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Camera.GateFitParameters), UnityEngine_Camera_GateFitParameters_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Camera.RenderRequest), UnityEngine_Camera_RenderRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoundingSphere), UnityEngine_BoundingSphere_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CullingGroupEvent), UnityEngine_CullingGroupEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CullingGroup), UnityEngine_CullingGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FlareLayer), UnityEngine_FlareLayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ReflectionProbe), UnityEngine_ReflectionProbe_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CrashReport), UnityEngine_CrashReport_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExposedPropertyResolver), UnityEngine_ExposedPropertyResolver_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IExposedPropertyTable), UnityEngine_IExposedPropertyTable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Bounds), UnityEngine_Bounds_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoundsInt), UnityEngine_BoundsInt_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoundsInt.PositionEnumerator), UnityEngine_BoundsInt_PositionEnumerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GeometryUtility), UnityEngine_GeometryUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Plane), UnityEngine_Plane_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ray), UnityEngine_Ray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ray2D), UnityEngine_Ray2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rect), UnityEngine_Rect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectInt), UnityEngine_RectInt_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectInt.PositionEnumerator), UnityEngine_RectInt_PositionEnumerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectOffset), UnityEngine_RectOffset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DynamicGI), UnityEngine_DynamicGI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightingSettings), UnityEngine_LightingSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Gizmos), UnityEngine_Gizmos_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BeforeRenderOrderAttribute), UnityEngine_BeforeRenderOrderAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BillboardAsset), UnityEngine_BillboardAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BillboardRenderer), UnityEngine_BillboardRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomRenderTextureManager), UnityEngine_CustomRenderTextureManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Display), UnityEngine_Display_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SleepTimeout), UnityEngine_SleepTimeout_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Screen), UnityEngine_Screen_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderBuffer), UnityEngine_RenderBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Graphics), UnityEngine_Graphics_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GL), UnityEngine_GL_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ScalableBufferManager), UnityEngine_ScalableBufferManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrameTiming), UnityEngine_FrameTiming_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrameTimingManager), UnityEngine_FrameTimingManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightmapData), UnityEngine_LightmapData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightmapSettings), UnityEngine_LightmapSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightProbes), UnityEngine_LightProbes_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HDROutputSettings), UnityEngine_HDROutputSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resolution), UnityEngine_Resolution_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderTargetSetup), UnityEngine_RenderTargetSetup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.QualitySettings), UnityEngine_QualitySettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RendererExtensions), UnityEngine_RendererExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectTransformsToLDR), UnityEngine_ImageEffectTransformsToLDR_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectAllowedInSceneView), UnityEngine_ImageEffectAllowedInSceneView_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectOpaque), UnityEngine_ImageEffectOpaque_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectAfterScale), UnityEngine_ImageEffectAfterScale_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectUsesCommandBuffer), UnityEngine_ImageEffectUsesCommandBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mesh), UnityEngine_Mesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mesh.MeshData), UnityEngine_Mesh_MeshData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mesh.MeshDataArray), UnityEngine_Mesh_MeshDataArray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Renderer), UnityEngine_Renderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Projector), UnityEngine_Projector_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Shader), UnityEngine_Shader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TrailRenderer), UnityEngine_TrailRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LineRenderer), UnityEngine_LineRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MaterialPropertyBlock), UnityEngine_MaterialPropertyBlock_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderSettings), UnityEngine_RenderSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Material), UnityEngine_Material_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GraphicsBuffer), UnityEngine_GraphicsBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.OcclusionPortal), UnityEngine_OcclusionPortal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.OcclusionArea), UnityEngine_OcclusionArea_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Flare), UnityEngine_Flare_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LensFlare), UnityEngine_LensFlare_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightBakingOutput), UnityEngine_LightBakingOutput_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Light), UnityEngine_Light_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Skybox), UnityEngine_Skybox_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MeshFilter), UnityEngine_MeshFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightProbeProxyVolume), UnityEngine_LightProbeProxyVolume_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SkinnedMeshRenderer), UnityEngine_SkinnedMeshRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightProbeGroup), UnityEngine_LightProbeGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LineUtility), UnityEngine_LineUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LOD), UnityEngine_LOD_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LODGroup), UnityEngine_LODGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoneWeight), UnityEngine_BoneWeight_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoneWeight1), UnityEngine_BoneWeight1_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CombineInstance), UnityEngine_CombineInstance_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture), UnityEngine_Texture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture2D), UnityEngine_Texture2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Cubemap), UnityEngine_Cubemap_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture3D), UnityEngine_Texture3D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture2DArray), UnityEngine_Texture2DArray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CubemapArray), UnityEngine_CubemapArray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SparseTexture), UnityEngine_SparseTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderTexture), UnityEngine_RenderTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomRenderTextureUpdateZone), UnityEngine_CustomRenderTextureUpdateZone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomRenderTexture), UnityEngine_CustomRenderTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderTextureDescriptor), UnityEngine_RenderTextureDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Hash128), UnityEngine_Hash128_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HashUtilities), UnityEngine_HashUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HashUnsafeUtilities), UnityEngine_HashUnsafeUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Cursor), UnityEngine_Cursor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ILogger), UnityEngine_ILogger_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ILogHandler), UnityEngine_ILogHandler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Logger), UnityEngine_Logger_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Color), UnityEngine_Color_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Color32), UnityEngine_Color32_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ColorUtility), UnityEngine_ColorUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GradientColorKey), UnityEngine_GradientColorKey_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GradientAlphaKey), UnityEngine_GradientAlphaKey_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Gradient), UnityEngine_Gradient_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrustumPlanes), UnityEngine_FrustumPlanes_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Matrix4x4), UnityEngine_Matrix4x4_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Quaternion), UnityEngine_Quaternion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mathf), UnityEngine_Mathf_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector2), UnityEngine_Vector2_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector2Int), UnityEngine_Vector2Int_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3Int), UnityEngine_Vector3Int_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector4), UnityEngine_Vector4_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ping), UnityEngine_Ping_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PlayerPrefsException), UnityEngine_PlayerPrefsException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PlayerPrefs), UnityEngine_PlayerPrefs_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PropertyAttribute), UnityEngine_PropertyAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContextMenuItemAttribute), UnityEngine_ContextMenuItemAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.InspectorNameAttribute), UnityEngine_InspectorNameAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TooltipAttribute), UnityEngine_TooltipAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpaceAttribute), UnityEngine_SpaceAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HeaderAttribute), UnityEngine_HeaderAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RangeAttribute), UnityEngine_RangeAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MinAttribute), UnityEngine_MinAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MultilineAttribute), UnityEngine_MultilineAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextAreaAttribute), UnityEngine_TextAreaAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ColorUsageAttribute), UnityEngine_ColorUsageAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GradientUsageAttribute), UnityEngine_GradientUsageAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DelayedAttribute), UnityEngine_DelayedAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.NonReorderableAttribute), UnityEngine_NonReorderableAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PropertyName), UnityEngine_PropertyName_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Random), UnityEngine_Random_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Random.State), UnityEngine_Random_State_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ResourceRequest), UnityEngine_ResourceRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ResourcesAPI), UnityEngine_ResourcesAPI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resources), UnityEngine_Resources_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AsyncOperation), UnityEngine_AsyncOperation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DisallowMultipleComponent), UnityEngine_DisallowMultipleComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RequireComponent), UnityEngine_RequireComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AddComponentMenu), UnityEngine_AddComponentMenu_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CreateAssetMenuAttribute), UnityEngine_CreateAssetMenuAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContextMenu), UnityEngine_ContextMenu_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExecuteInEditMode), UnityEngine_ExecuteInEditMode_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExecuteAlways), UnityEngine_ExecuteAlways_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HideInInspector), UnityEngine_HideInInspector_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HelpURLAttribute), UnityEngine_HelpURLAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DefaultExecutionOrder), UnityEngine_DefaultExecutionOrder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssemblyIsEditorAssembly), UnityEngine_AssemblyIsEditorAssembly_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExcludeFromPresetAttribute), UnityEngine_ExcludeFromPresetAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Coroutine), UnityEngine_Coroutine_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomYieldInstruction), UnityEngine_CustomYieldInstruction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExcludeFromObjectFactoryAttribute), UnityEngine_ExcludeFromObjectFactoryAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LayerMask), UnityEngine_LayerMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RangeInt), UnityEngine_RangeInt_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RuntimeInitializeOnLoadMethodAttribute), UnityEngine_RuntimeInitializeOnLoadMethodAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ScriptableObject), UnityEngine_ScriptableObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SelectionBaseAttribute), UnityEngine_SelectionBaseAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StackTraceUtility), UnityEngine_StackTraceUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnityException), UnityEngine_UnityException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MissingComponentException), UnityEngine_MissingComponentException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnassignedReferenceException), UnityEngine_UnassignedReferenceException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MissingReferenceException), UnityEngine_MissingReferenceException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextAsset), UnityEngine_TextAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TrackedReference), UnityEngine_TrackedReference_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnityAPICompatibilityVersionAttribute), UnityEngine_UnityAPICompatibilityVersionAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForEndOfFrame), UnityEngine_WaitForEndOfFrame_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForFixedUpdate), UnityEngine_WaitForFixedUpdate_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForSeconds), UnityEngine_WaitForSeconds_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForSecondsRealtime), UnityEngine_WaitForSecondsRealtime_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitUntil), UnityEngine_WaitUntil_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitWhile), UnityEngine_WaitWhile_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.YieldInstruction), UnityEngine_YieldInstruction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Security), UnityEngine_Security_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Types), UnityEngine_Types_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SerializeField), UnityEngine_SerializeField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SerializeReference), UnityEngine_SerializeReference_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PreferBinarySerialization), UnityEngine_PreferBinarySerialization_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ISerializationCallbackReceiver), UnityEngine_ISerializationCallbackReceiver_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ComputeBuffer), UnityEngine_ComputeBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ShaderVariantCollection), UnityEngine_ShaderVariantCollection_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ShaderVariantCollection.ShaderVariant), UnityEngine_ShaderVariantCollection_ShaderVariant_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ComputeShader), UnityEngine_ComputeShader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Snapping), UnityEngine_Snapping_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StaticBatchingUtility), UnityEngine_StaticBatchingUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SystemInfo), UnityEngine_SystemInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TouchScreenKeyboard), UnityEngine_TouchScreenKeyboard_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnityEventQueueSystem), UnityEngine_UnityEventQueueSystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Pose), UnityEngine_Pose_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DrivenRectTransformTracker), UnityEngine_DrivenRectTransformTracker_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectTransform), UnityEngine_RectTransform_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpriteRenderer), UnityEngine_SpriteRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SecondarySpriteTexture), UnityEngine_SecondarySpriteTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Sprite), UnityEngine_Sprite_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Social), UnityEngine_Social_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Grid), UnityEngine_Grid_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GridLayout), UnityEngine_GridLayout_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Event), UnityEngine_Event_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUI), UnityEngine_GUI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUI.Scope), UnityEngine_GUI_Scope_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIContent), UnityEngine_GUIContent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUILayout), UnityEngine_GUILayout_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUILayoutOption), UnityEngine_GUILayoutOption_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUILayoutUtility), UnityEngine_GUILayoutUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUISettings), UnityEngine_GUISettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUISkin), UnityEngine_GUISkin_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIStyleState), UnityEngine_GUIStyleState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIStyle), UnityEngine_GUIStyle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUITargetAttribute), UnityEngine_GUITargetAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIUtility), UnityEngine_GUIUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExitGUIException), UnityEngine_ExitGUIException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextEditor), UnityEngine_TextEditor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageConversion), UnityEngine_ImageConversion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Touch), UnityEngine_Touch_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AccelerationEvent), UnityEngine_AccelerationEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Gyroscope), UnityEngine_Gyroscope_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LocationInfo), UnityEngine_LocationInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LocationService), UnityEngine_LocationService_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Compass), UnityEngine_Compass_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Input), UnityEngine_Input_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JsonUtility), UnityEngine_JsonUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LocalizationAsset), UnityEngine_LocalizationAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.MinMaxCurve), UnityEngine_ParticleSystem_MinMaxCurve_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.MainModule), UnityEngine_ParticleSystem_MainModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.EmissionModule), UnityEngine_ParticleSystem_EmissionModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ShapeModule), UnityEngine_ParticleSystem_ShapeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.CollisionModule), UnityEngine_ParticleSystem_CollisionModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.TriggerModule), UnityEngine_ParticleSystem_TriggerModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.SubEmittersModule), UnityEngine_ParticleSystem_SubEmittersModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.TextureSheetAnimationModule), UnityEngine_ParticleSystem_TextureSheetAnimationModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.Particle), UnityEngine_ParticleSystem_Particle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.Burst), UnityEngine_ParticleSystem_Burst_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.MinMaxGradient), UnityEngine_ParticleSystem_MinMaxGradient_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.EmitParams), UnityEngine_ParticleSystem_EmitParams_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.PlaybackState), UnityEngine_ParticleSystem_PlaybackState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.Trails), UnityEngine_ParticleSystem_Trails_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ColliderData), UnityEngine_ParticleSystem_ColliderData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.VelocityOverLifetimeModule), UnityEngine_ParticleSystem_VelocityOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule), UnityEngine_ParticleSystem_LimitVelocityOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.InheritVelocityModule), UnityEngine_ParticleSystem_InheritVelocityModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule), UnityEngine_ParticleSystem_LifetimeByEmitterSpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ForceOverLifetimeModule), UnityEngine_ParticleSystem_ForceOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ColorOverLifetimeModule), UnityEngine_ParticleSystem_ColorOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ColorBySpeedModule), UnityEngine_ParticleSystem_ColorBySpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.SizeOverLifetimeModule), UnityEngine_ParticleSystem_SizeOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.SizeBySpeedModule), UnityEngine_ParticleSystem_SizeBySpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.RotationOverLifetimeModule), UnityEngine_ParticleSystem_RotationOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.RotationBySpeedModule), UnityEngine_ParticleSystem_RotationBySpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ExternalForcesModule), UnityEngine_ParticleSystem_ExternalForcesModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.NoiseModule), UnityEngine_ParticleSystem_NoiseModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.LightsModule), UnityEngine_ParticleSystem_LightsModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.TrailModule), UnityEngine_ParticleSystem_TrailModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.CustomDataModule), UnityEngine_ParticleSystem_CustomDataModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticlePhysicsExtensions), UnityEngine_ParticlePhysicsExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleCollisionEvent), UnityEngine_ParticleCollisionEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystemForceField), UnityEngine_ParticleSystemForceField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WheelFrictionCurve), UnityEngine_WheelFrictionCurve_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SoftJointLimit), UnityEngine_SoftJointLimit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SoftJointLimitSpring), UnityEngine_SoftJointLimitSpring_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointDrive), UnityEngine_JointDrive_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointMotor), UnityEngine_JointMotor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointSpring), UnityEngine_JointSpring_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointLimits), UnityEngine_JointLimits_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ControllerColliderHit), UnityEngine_ControllerColliderHit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collision), UnityEngine_Collision_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicMaterial), UnityEngine_PhysicMaterial_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RaycastHit), UnityEngine_RaycastHit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rigidbody), UnityEngine_Rigidbody_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collider), UnityEngine_Collider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CharacterController), UnityEngine_CharacterController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MeshCollider), UnityEngine_MeshCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CapsuleCollider), UnityEngine_CapsuleCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxCollider), UnityEngine_BoxCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SphereCollider), UnityEngine_SphereCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ConstantForce), UnityEngine_ConstantForce_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Joint), UnityEngine_Joint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HingeJoint), UnityEngine_HingeJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpringJoint), UnityEngine_SpringJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FixedJoint), UnityEngine_FixedJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CharacterJoint), UnityEngine_CharacterJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ConfigurableJoint), UnityEngine_ConfigurableJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContactPoint), UnityEngine_ContactPoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsScene), UnityEngine_PhysicsScene_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsSceneExtensions), UnityEngine_PhysicsSceneExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationDrive), UnityEngine_ArticulationDrive_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationReducedSpace), UnityEngine_ArticulationReducedSpace_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationJacobian), UnityEngine_ArticulationJacobian_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationBody), UnityEngine_ArticulationBody_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Physics), UnityEngine_Physics_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RaycastCommand), UnityEngine_RaycastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpherecastCommand), UnityEngine_SpherecastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CapsulecastCommand), UnityEngine_CapsulecastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxcastCommand), UnityEngine_BoxcastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsScene2D), UnityEngine_PhysicsScene2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsSceneExtensions2D), UnityEngine_PhysicsSceneExtensions2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Physics2D), UnityEngine_Physics2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ColliderDistance2D), UnityEngine_ColliderDistance2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContactFilter2D), UnityEngine_ContactFilter2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collision2D), UnityEngine_Collision2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContactPoint2D), UnityEngine_ContactPoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointAngleLimits2D), UnityEngine_JointAngleLimits2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointTranslationLimits2D), UnityEngine_JointTranslationLimits2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointMotor2D), UnityEngine_JointMotor2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointSuspension2D), UnityEngine_JointSuspension2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RaycastHit2D), UnityEngine_RaycastHit2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsJobOptions2D), UnityEngine_PhysicsJobOptions2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rigidbody2D), UnityEngine_Rigidbody2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collider2D), UnityEngine_Collider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CircleCollider2D), UnityEngine_CircleCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CapsuleCollider2D), UnityEngine_CapsuleCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.EdgeCollider2D), UnityEngine_EdgeCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxCollider2D), UnityEngine_BoxCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PolygonCollider2D), UnityEngine_PolygonCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CompositeCollider2D), UnityEngine_CompositeCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Joint2D), UnityEngine_Joint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnchoredJoint2D), UnityEngine_AnchoredJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpringJoint2D), UnityEngine_SpringJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DistanceJoint2D), UnityEngine_DistanceJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrictionJoint2D), UnityEngine_FrictionJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HingeJoint2D), UnityEngine_HingeJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RelativeJoint2D), UnityEngine_RelativeJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SliderJoint2D), UnityEngine_SliderJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TargetJoint2D), UnityEngine_TargetJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FixedJoint2D), UnityEngine_FixedJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WheelJoint2D), UnityEngine_WheelJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Effector2D), UnityEngine_Effector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AreaEffector2D), UnityEngine_AreaEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BuoyancyEffector2D), UnityEngine_BuoyancyEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PointEffector2D), UnityEngine_PointEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PlatformEffector2D), UnityEngine_PlatformEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SurfaceEffector2D), UnityEngine_SurfaceEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsUpdateBehaviour2D), UnityEngine_PhysicsUpdateBehaviour2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ConstantForce2D), UnityEngine_ConstantForce2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsMaterial2D), UnityEngine_PhysicsMaterial2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ScreenCapture), UnityEngine_ScreenCapture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpriteMask), UnityEngine_SpriteMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StreamingController), UnityEngine_StreamingController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IntegratedSubsystem), UnityEngine_IntegratedSubsystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IntegratedSubsystemDescriptor), UnityEngine_IntegratedSubsystemDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ISubsystem), UnityEngine_ISubsystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ISubsystemDescriptor), UnityEngine_ISubsystemDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Subsystem), UnityEngine_Subsystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SubsystemDescriptor), UnityEngine_SubsystemDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SubsystemManager), UnityEngine_SubsystemManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Terrain), UnityEngine_Terrain_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TerrainExtensions), UnityEngine_TerrainExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Tree), UnityEngine_Tree_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TreePrototype), UnityEngine_TreePrototype_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DetailPrototype), UnityEngine_DetailPrototype_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SplatPrototype), UnityEngine_SplatPrototype_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TreeInstance), UnityEngine_TreeInstance_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PatchExtents), UnityEngine_PatchExtents_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TerrainLayer), UnityEngine_TerrainLayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TerrainCollider), UnityEngine_TerrainCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextGenerationSettings), UnityEngine_TextGenerationSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextGenerator), UnityEngine_TextGenerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextMesh), UnityEngine_TextMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CharacterInfo), UnityEngine_CharacterInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UICharInfo), UnityEngine_UICharInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UILineInfo), UnityEngine_UILineInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UIVertex), UnityEngine_UIVertex_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Font), UnityEngine_Font_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomGridBrushAttribute), UnityEngine_CustomGridBrushAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GridBrushBase), UnityEngine_GridBrushBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ICanvasRaycastFilter), UnityEngine_ICanvasRaycastFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CanvasGroup), UnityEngine_CanvasGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CanvasRenderer), UnityEngine_CanvasRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectTransformUtility), UnityEngine_RectTransformUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UISystemProfilerApi), UnityEngine_UISystemProfilerApi_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RemoteSettings), UnityEngine_RemoteSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RemoteConfigSettings), UnityEngine_RemoteConfigSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WWWForm), UnityEngine_WWWForm_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WWWAudioExtensions), UnityEngine_WWWAudioExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WheelHit), UnityEngine_WheelHit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WheelCollider), UnityEngine_WheelCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WindZone), UnityEngine_WindZone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Variables.FloatVariable), Puergp_Variables_FloatVariable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Variables.GameObjectVariable), Puergp_Variables_GameObjectVariable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Variables.IntVariable), Puergp_Variables_IntVariable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.AnimationTriggers), UnityEngine_UI_AnimationTriggers_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ICanvasElement), UnityEngine_UI_ICanvasElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.CanvasUpdateRegistry), UnityEngine_UI_CanvasUpdateRegistry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ColorBlock), UnityEngine_UI_ColorBlock_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ClipperRegistry), UnityEngine_UI_ClipperRegistry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Clipping), UnityEngine_UI_Clipping_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IClipper), UnityEngine_UI_IClipper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IClippable), UnityEngine_UI_IClippable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown), UnityEngine_UI_Dropdown_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.FontData), UnityEngine_UI_FontData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.FontUpdateTracker), UnityEngine_UI_FontUpdateTracker_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Graphic), UnityEngine_UI_Graphic_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.GraphicRaycaster), UnityEngine_UI_GraphicRaycaster_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.GraphicRegistry), UnityEngine_UI_GraphicRegistry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IMaskable), UnityEngine_UI_IMaskable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Image), UnityEngine_UI_Image_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.AspectRatioFitter), UnityEngine_UI_AspectRatioFitter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.CanvasScaler), UnityEngine_UI_CanvasScaler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ContentSizeFitter), UnityEngine_UI_ContentSizeFitter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.GridLayoutGroup), UnityEngine_UI_GridLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.HorizontalLayoutGroup), UnityEngine_UI_HorizontalLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.HorizontalOrVerticalLayoutGroup), UnityEngine_UI_HorizontalOrVerticalLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutElement), UnityEngine_UI_ILayoutElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutController), UnityEngine_UI_ILayoutController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutGroup), UnityEngine_UI_ILayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutSelfController), UnityEngine_UI_ILayoutSelfController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutIgnorer), UnityEngine_UI_ILayoutIgnorer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutElement), UnityEngine_UI_LayoutElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutGroup), UnityEngine_UI_LayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutRebuilder), UnityEngine_UI_LayoutRebuilder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutUtility), UnityEngine_UI_LayoutUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.VerticalLayoutGroup), UnityEngine_UI_VerticalLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Mask), UnityEngine_UI_Mask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.MaskUtilities), UnityEngine_UI_MaskUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.MaskableGraphic), UnityEngine_UI_MaskableGraphic_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IMaterialModifier), UnityEngine_UI_IMaterialModifier_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Navigation), UnityEngine_UI_Navigation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.RawImage), UnityEngine_UI_RawImage_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.RectMask2D), UnityEngine_UI_RectMask2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ScrollRect), UnityEngine_UI_ScrollRect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Scrollbar), UnityEngine_UI_Scrollbar_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Slider), UnityEngine_UI_Slider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.SpriteState), UnityEngine_UI_SpriteState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.StencilMaterial), UnityEngine_UI_StencilMaterial_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Text), UnityEngine_UI_Text_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ToggleGroup), UnityEngine_UI_ToggleGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.VertexHelper), UnityEngine_UI_VertexHelper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.BaseMeshEffect), UnityEngine_UI_BaseMeshEffect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IMeshModifier), UnityEngine_UI_IMeshModifier_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Outline), UnityEngine_UI_Outline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.PositionAsUV1), UnityEngine_UI_PositionAsUV1_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Shadow), UnityEngine_UI_Shadow_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.DefaultControls.IFactoryControls), UnityEngine_UI_DefaultControls_IFactoryControls_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.DefaultControls.Resources), UnityEngine_UI_DefaultControls_Resources_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown.OptionData), UnityEngine_UI_Dropdown_OptionData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown.OptionDataList), UnityEngine_UI_Dropdown_OptionDataList_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown.DropdownEvent), UnityEngine_UI_Dropdown_DropdownEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField.SubmitEvent), UnityEngine_UI_InputField_SubmitEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField.OnChangeEvent), UnityEngine_UI_InputField_OnChangeEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.MaskableGraphic.CullStateChangedEvent), UnityEngine_UI_MaskableGraphic_CullStateChangedEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ScrollRect.ScrollRectEvent), UnityEngine_UI_ScrollRect_ScrollRectEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Scrollbar.ScrollEvent), UnityEngine_UI_Scrollbar_ScrollEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Slider.SliderEvent), UnityEngine_UI_Slider_SliderEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UIEvent), UIEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Node), Node_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(NavigationPanelEntry), NavigationPanelEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(NavigateToWindowSignal), NavigateToWindowSignal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(NavigationPanelController), NavigationPanelController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Events.BaseGameEvent), Puergp_Events_BaseGameEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Events.FloatGameEvent), Puergp_Events_FloatGameEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Events.GameEvent), Puergp_Events_GameEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Events.BaseGameEventListener), Puergp_Events_BaseGameEventListener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Events.FloatGameEventListener), Puergp_Events_FloatGameEventListener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Events.GameEventListener), Puergp_Events_GameEventListener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.IUIScreenController), deVoid_UIFramework_IUIScreenController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.IWindowController), deVoid_UIFramework_IWindowController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.IPanelController), deVoid_UIFramework_IPanelController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.IScreenProperties), deVoid_UIFramework_IScreenProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.IPanelProperties), deVoid_UIFramework_IPanelProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.IWindowProperties), deVoid_UIFramework_IWindowProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.APanelController), deVoid_UIFramework_APanelController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.PanelPriorityLayerListEntry), deVoid_UIFramework_PanelPriorityLayerListEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.PanelPriorityLayerList), deVoid_UIFramework_PanelPriorityLayerList_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.PanelProperties), deVoid_UIFramework_PanelProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.PanelUILayer), deVoid_UIFramework_PanelUILayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.ATransitionComponent), deVoid_UIFramework_ATransitionComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.SimpleFadeTransition), deVoid_UIFramework_SimpleFadeTransition_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.UIFrame), deVoid_UIFramework_UIFrame_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.UISettings), deVoid_UIFramework_UISettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.AWindowController), deVoid_UIFramework_AWindowController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.WindowHistoryEntry), deVoid_UIFramework_WindowHistoryEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.WindowParaLayer), deVoid_UIFramework_WindowParaLayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.WindowProperties), deVoid_UIFramework_WindowProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.WindowUILayer), deVoid_UIFramework_WindowUILayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.LegacyAnimationScreenTransition), deVoid_UIFramework_Examples_LegacyAnimationScreenTransition_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.PlayerDataUpdatedSignal), deVoid_UIFramework_Examples_PlayerDataUpdatedSignal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.PlayerDataEntry), deVoid_UIFramework_Examples_PlayerDataEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.FakePlayerData), deVoid_UIFramework_Examples_FakePlayerData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.CameraProjectionWindowProperties), deVoid_UIFramework_Examples_CameraProjectionWindowProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.CameraProjectionWindowController), deVoid_UIFramework_Examples_CameraProjectionWindowController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.ShowConfirmationPopupSignal), deVoid_UIFramework_Examples_ShowConfirmationPopupSignal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.ConfirmationPopupController), deVoid_UIFramework_Examples_ConfirmationPopupController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.ConfirmationPopupProperties), deVoid_UIFramework_Examples_ConfirmationPopupProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.EmptyWindowController), deVoid_UIFramework_Examples_EmptyWindowController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.PlayerWindowProperties), deVoid_UIFramework_Examples_PlayerWindowProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.PlayerWindowController), deVoid_UIFramework_Examples_PlayerWindowController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.PopupExampleWindowController), deVoid_UIFramework_Examples_PopupExampleWindowController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.StartDemoSignal), deVoid_UIFramework_Examples_StartDemoSignal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.StartWindowController), deVoid_UIFramework_Examples_StartWindowController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.ToastPanelController), deVoid_UIFramework_Examples_ToastPanelController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.ScreenIds), deVoid_UIFramework_Examples_ScreenIds_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.ScaleScreenTransition), deVoid_UIFramework_Examples_ScaleScreenTransition_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.SlideScreenTransition), deVoid_UIFramework_Examples_SlideScreenTransition_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.UIDemoController), deVoid_UIFramework_Examples_UIDemoController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.AutoMove), deVoid_UIFramework_Examples_AutoMove_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.LevelProgressComponent), deVoid_UIFramework_Examples_LevelProgressComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.NavigationPanelButton), deVoid_UIFramework_Examples_NavigationPanelButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.UIFramework.Examples.UIFollowComponent), deVoid_UIFramework_Examples_UIFollowComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.Utils.ISignal), deVoid_Utils_ISignal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.Utils.Signals), deVoid_Utils_Signals_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.Utils.SignalHub), deVoid_Utils_SignalHub_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.Utils.ABaseSignal), deVoid_Utils_ABaseSignal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(deVoid.Utils.ASignal), deVoid_Utils_ASignal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenModuleSprite), DG_Tweening_DOTweenModuleSprite_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenModuleUI), DG_Tweening_DOTweenModuleUI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenModuleUnityVersion), DG_Tweening_DOTweenModuleUnityVersion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenCYInstruction), DG_Tweening_DOTweenCYInstruction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenModuleUtils), DG_Tweening_DOTweenModuleUtils_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Js.JsBinding), Js_JsBinding_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Js.JsArg), Js_JsArg_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Js.JsBindingEditor), Js_JsBindingEditor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenModuleUI.Utils), DG_Tweening_DOTweenModuleUI_Utils_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenCYInstruction.WaitForCompletion), DG_Tweening_DOTweenCYInstruction_WaitForCompletion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenCYInstruction.WaitForRewind), DG_Tweening_DOTweenCYInstruction_WaitForRewind_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenCYInstruction.WaitForKill), DG_Tweening_DOTweenCYInstruction_WaitForKill_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops), DG_Tweening_DOTweenCYInstruction_WaitForElapsedLoops_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenCYInstruction.WaitForPosition), DG_Tweening_DOTweenCYInstruction_WaitForPosition_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenCYInstruction.WaitForStart), DG_Tweening_DOTweenCYInstruction_WaitForStart_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DG.Tweening.DOTweenModuleUtils.Physics), DG_Tweening_DOTweenModuleUtils_Physics_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puerts.JsEnv), Puerts_JsEnv_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puerts.ILoader), Puerts_ILoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Events.GameEventListener<float>), Puergp_Events_GameEventListener_1_System_Single__Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Variables.BaseVariable<int>), Puergp_Variables_BaseVariable_1_System_Int32__Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Variables.BaseVariable<float>), Puergp_Variables_BaseVariable_1_System_Single__Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puergp.Variables.BaseVariable<UnityEngine.GameObject>), Puergp_Variables_BaseVariable_1_UnityEngine_GameObject__Wrap.GetRegisterInfo);
                
        }
    }
}