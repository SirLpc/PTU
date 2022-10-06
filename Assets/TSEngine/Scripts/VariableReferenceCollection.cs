﻿using System;
using ScriptableObjectArchitecture;
using UnityEditor;
using UnityEngine;

namespace TSEngine
{

    [Serializable]
    public class BaseVariableReference
    {
        public string name;
        [HideInInspector]
        public int refID;
        public virtual object variable { get; }
    }
    
    [Serializable]
    public class BaseVariableReference<T> : BaseVariableReference
    {
        public T _variable;
        public override object variable => _variable;
    }

    [Serializable]
    public class BaseVariableReference<TBase, TVariable> : BaseVariableReference<BaseReference<TBase, TVariable>> where TVariable : BaseVariable<TBase>
    {
    }
    
    [Serializable]
    public class BaseVariableCollection<T> : BaseVariableReference<Collection<T>>
    {
    }

    public class FloatVariableReference : BaseVariableReference<float, FloatVariable> {}
    public class Vector3VariableReference : BaseVariableReference<Vector3, Vector3Variable> {}
	public class GameObjectVariableReference : BaseVariableReference<GameObject, GameObjectVariable> {}
	public class BoolVariableReference : BaseVariableReference<bool, BoolVariable> {}

    public class FloatVariableCollection : BaseVariableCollection<float> {}
    
    [Serializable]
    public class VariableReferenceCollection
    {
        [ReorderableList()]
        [SerializeReference, ReferencePicker]
        public BaseVariableReference[] variables;
    }
    
    
}