using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace PuergpCs.Collections
{
    public class BaseCollection<T> : ScriptableObject, IEnumerable<T>
    {

        [SerializeField]
        protected List<T> _list = new List<T>();

        [SerializeField] 
        protected bool _distinct = false;
        
        public T this[int index]
        {
            get
            {
                return _list[index];
            }
            set
            {
                _list[index] = value;
            }
        }

        public virtual void Add(T item)
        {
            if (!_distinct || _list.IndexOf(item) < 0)
            {
                _list.Add(item);
            }
        }
        
        public virtual void Remove(T item)
        {
            if (_list.IndexOf(item) >= 0)
            {
                _list.Remove(item);
            }
        }
        
        public virtual void Clear()
        {
            _list.Clear();
        }
        
        public virtual bool Contains(T item)
        {
            return _list.IndexOf(item) >= 0;
        }
        
        public virtual int IndexOf(T item)
        {
            return _list.IndexOf(item);
        }
        
        public virtual void RemoveAt(int index)
        {
            _list.RemoveAt(index);
        }
        
        public virtual void Insert(int index, T item)
        {
            if (!_distinct || _list.IndexOf(item) < 0)
            {
                _list.Insert(index, item);
            }
        }

        public IEnumerator<T> GetEnumerator()
        {
            return _list.GetEnumerator();
        }
 
        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
       
        public override string ToString()
        {
            return "Collection<" + typeof(T) + ">(" + _list.Count + ")";
        }
        
        public T[] ToArray()
        {
            return _list.ToArray();
        }
    }
}