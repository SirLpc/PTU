export class JsonUtility {
    public static TryGetArrayItmeByName(jsonObj: any, name: string) : any {
        for (const iterator of jsonObj) {
            if (iterator.name == name) {
                return iterator;
            }
        }

        return undefined;
    }
}