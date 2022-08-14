import { GameApp } from "../GameApp";
import { UnityDebugLogger } from "../UnityDebugLogger";
import { App } from "./App";
import { Logger } from "./Logger";
import { TSComponentHub } from "./TSComponentHub";


export class DIC {
    private static serviceMap: Map<string, any>;
    private static resolverMap: Map<string, any>;
  
    private static init() {
      console.log('Locator -> init');
  
      DIC.serviceMap = new Map();
      DIC.resolverMap = new Map();
    }

    public static Register<T>(fn: Function, inst: ()=>T): void {
        console.log(`set ${fn.name}`);
  
        if (DIC.resolverMap == undefined) {
          DIC.init();
        }

        DIC.resolverMap.set(fn.name, inst);
    }
  
    public static Make<T>(fn: Function): T {
      console.log(`get ${fn.name}`);
  
      if (DIC.serviceMap == undefined) {
        DIC.init();
      }
  
      let service = DIC.serviceMap.get(fn.name);
      if (service != undefined) {
          return service;
      }

      let resolver = DIC.resolverMap.get(fn.name);
      if (resolver == undefined) {
        throw Error("You must register the service before retrieving it.");
      }

      service = resolver();
      if (service == undefined) {
        throw Error("Invalid resolver to retrieving service.");
      }

      return service;
    }
  
  }