
export class Locator {
    private static serviceMap: Map<string, any>;
  
    private static init() {
      console.log('Locator -> init');
  
      Locator.serviceMap = new Map();
    }

    public static set<T>(fn: Function, inst: T): void {
        console.log(`get ${fn.name}`);
  
        if (Locator.serviceMap == undefined) {
          Locator.init();
        }

        Locator.serviceMap.set(fn.name, inst);
    }
  
    public static get<T>(fn: Function): T {
      console.log(`get ${fn.name}`);
  
      if (Locator.serviceMap == undefined) {
        Locator.init();
      }
  
      let service = Locator.serviceMap.get(fn.name);
      if (service == undefined) {
        throw Error("You must register the service before retrieving it.");
      }
  
      return service;
    }
  
  }