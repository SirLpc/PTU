var NT;
(function (NT) {
    /**
     * Represents a text file asset.
     */
    class TextAsset {
        /** The name of this asset. */
        Name;
        /** The content of this asset. */
        Data;
        /**
         * Creates a new text asset.
         * @param name The name of this asset.
         * @param data The content of this asset.
         */
        constructor(name, data) {
            this.Name = name;
            this.Data = data;
        }
    }
    NT.TextAsset = TextAsset;
    /**
     * The loader for a text asset.
     */
    class TextAssetLoader {
        /**
         * The list of supported file extensions.
         */
        get supportedExtensions() {
            return ["txt"];
        }
        /**
         * Loads a text asset with the provided name.
         * @param assetName The asset to be loaded.
         */
        LoadAsset(assetName) {
            let request = new XMLHttpRequest();
            request.open("GET", assetName);
            request.addEventListener("load", this.onTextLoaded.bind(this, assetName, request));
            request.send();
        }
        /**
         * Fired when a text asset has loaded.
         * @param assetName The name of the asset.
         * @param request The request object.
         */
        onTextLoaded(assetName, request) {
            console.debug("onTextLoaded: assetName/request", assetName, request);
            if (request.readyState === request.DONE) {
                let asset = new TextAsset(assetName, request.responseText);
                NT.AssetManager.onAssetLoaded(asset);
            }
        }
    }
    NT.TextAssetLoader = TextAssetLoader;
})(NT || (NT = {}));
//# sourceMappingURL=TestAssetLoader.js.map