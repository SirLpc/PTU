import { GameApp } from "../GameApp";
import { UnityDebugLogger } from "../UnityDebugLogger";
import { App } from "./App";
import { Logger } from "./Logger";
import { TSComponentHub } from "./TSComponentHub";


class ServiceEntry {

  private _service: any;

  public get service() {
    if (!this.singleton) {
      return this.resolver();
    }

    if (this._service != undefined) {
      return this._service;
    }

    this._service = this.resolver();
    return this._service;
  }

  public constructor(private key: string, public resolver: ()=>any, public singleton: boolean) {
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
        throw Error("You must register the service before retrieving it instance." + fn.name);
      }

      return service.service;
    }

    public static GetResolver(fn: Function): ()=>any {
      let service = DIC.serviceMap.get(fn.name);

      if (service == undefined) {
        throw Error("You must register the service before retrieving it provider, named: " + fn.name);
      }

      if (service.singleton) {
        throw Error("You can`t require a singleton provider, named: " + fn.name);
      }

      return service.resolver;
    }
  
  }