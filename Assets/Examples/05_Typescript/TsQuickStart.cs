using UnityEngine;
using Puerts;
using System;
using System.IO;

//typescript工程在TsProj，在该目录执行npm run build即可编译并把js文件拷贝进unity工程

namespace PuertsTest
{
    public class TsQuickStart : MonoBehaviour
    {
        public bool debug;
        JsEnv jsEnv;

        void Start()
        {
            if (debug)
            {
                var dir = new DirectoryInfo(Application.dataPath);
                var path = Path.Combine(dir.Parent.FullName, "TsProj/output/");
                Debug.Log(path);
                jsEnv = new JsEnv(new DefaultLoader(path), 8080);
                jsEnv.WaitDebugger();
            }
            else
            {
                jsEnv = new JsEnv();
            }


            jsEnv.UsingAction<int>();
            jsEnv.UsingAction<float>();
            jsEnv.UsingAction<GameObject>();
            
            
            //jsEnv = new JsEnv(new DefaultLoader(UnityEngine.Application.dataPath + "../TsProj/output/"), 8080);
            //jsEnv.WaitDebugger();
            jsEnv.Eval("require('QuickStart')");
        }

        private void Update()
        {
            jsEnv.Tick();
        }

        void OnDestroy()
        {
            jsEnv.Dispose();
        }
    }
}
