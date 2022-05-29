export class TSHelpers {
    public static Cast<T>(instance: any, targetType: any): T {
        if (instance instanceof targetType) {
            return instance as T;
        }

        return null;
    }
}