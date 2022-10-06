using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TSEngine;

public class EntityInjector : MonoBehaviour
{
	public string ToJsonDescription()
	{
		EntityDescription root = new EntityDescription(transform);
		root.name = gameObject.name;
		var json = JsonUtility.ToJson(root);
		Debug.Log(json);
		return json;
	}
}
