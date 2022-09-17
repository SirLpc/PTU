import { GameApp } from "../GameApp";
import { UnityDebugLogger } from "../UnityDebugLogger";
import { App } from "./App";
import { Logger } from "./Logger";
import { TSComponentHub } from "./TSComponentHub";


class ServiceEntry {

  private _service: any;

  public get service() {
    if (!this._singleton) {
      return this._resolver();
    }

    if (this._service != undefined) {
      return this._service;
    }

    this._service = this._resolver();
    return this._service;
  }

  public constructor(private key: string, private _resolver: ()=>any, private _singleton: boolean) {
  }
}

export class DIC {
    private static serviceMap: Map<string, ServiceEntry> = new Map<string, ServiceEntry>();

    public static RegisterSingleton<T>(fn: Function, resolver: ()=>T): void {
        //console.log(`set ${fn.name}`);

        if (DIC.serviceMap.has(fn.name)) {
          throw Error(`Service named : ${fn.name}  has already registered!`);
        }
  
        DIC.serviceMap.set(fn.name, new ServiceEntry(fn.name, resolver, true));
    }

    public static RegisterTransient<T>(fn: Function, resolver: ()=>T): void {
      //console.log(`set ${fn.name}`);

      if (DIC.serviceMap.has(fn.name)) {
        throw Error(`Service named : ${fn.name}  has already registered!`);
      }

      DIC.serviceMap.set(fn.name, new ServiceEntry(fn.name, resolver, false));
  }
  
    public static Make<T>(fn: Function): T {
      //console.log(`get ${fn.name}`);
  
      let service = DIC.serviceMap.get(fn.name);

      if (service == undefined) {
        throw Error("You must register the service before retrieving it.");
      }

      return service.service;
    }
  
  }