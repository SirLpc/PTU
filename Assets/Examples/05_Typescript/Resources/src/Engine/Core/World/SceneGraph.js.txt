var NT;
(function (NT) {
    /**
     * A scene graph, which is responsible for managing the heirarchy of objects in a scene (essentially,
     * it is the scene itself).
     */
    class SceneGraph {
        _root;
        /** Creates a new SceneGraph */
        constructor() {
            this._root = new NT.TEntity("__ROOT__", this);
        }
        /** Returns the root object. */
        get root() {
            return this._root;
        }
        /** Indicates if this scene is loaded. */
        get isLoaded() {
            return this._root.isLoaded;
        }
        /**
         * Adds an entity to the root entity of this scene graph.
         * @param entity The entity to be added.
         */
        addObject(entity) {
            this._root.addChild(entity);
        }
        /**
         * Recursively searches this scene graph for an entity with the provided name.
         * @param name The name of the entity to retrieve.
         */
        getEntityByName(name) {
            return this._root.getEntityByName(name);
        }
        /** Loads this scene graph. */
        load() {
            this._root.load();
        }
        /**
         * Performs update procedures on this scene graph.
         * @param time The delta time in milliseconds since the last update.
         */
        update(time) {
            this._root.update(time);
        }
        /**
         * Renders this scene graph.
         */
        // public render( renderView: RenderView ): void {
        render() {
            this._root.render();
        }
    }
    NT.SceneGraph = SceneGraph;
})(NT || (NT = {}));
//# sourceMappingURL=SceneGraph.js.map