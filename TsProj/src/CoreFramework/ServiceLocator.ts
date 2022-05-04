export class ServiceLocator {

    private static _services: Map<any, any> = new Map<any, any>();


    // create<T>(type: (new () => T)): T {
    //     return new type();
    // }


    public static Register(type:any, instance:any) {
        if (this._services.has(type)) {
            console.log(type + " already registered!");
            return;
        }

        this._services.set(type, instance);
    }

    public static Get<T>(type:any) : T {
        if (this._services.has(type) == false) {
            console.log(type + " does not registered!");
            return;
        }

        return this._services.get(type);
    }

}