import { EntityCollection } from "./entity-collection.js";
import { ImageCollection } from "./image-collection.js";
import { SceneManager } from "./scene-manager.js";

export abstract class Scene {


    entityCollection : EntityCollection = new EntityCollection();
    imageCollection : ImageCollection = new ImageCollection();
    private ready : boolean = false;
    protected abstract requiredImages : Array<string>;


    constructor() {

        this.setup();

    };


    private async setup() {

        console.log(`Started loading scene: ${this.constructor.name}`);
        await this.preloadImages(this.requiredImages);
        this.populateWithEntities();
        this.ready = true;
        console.log(`Finished loading scene: ${this.constructor.name}`);

    };


    async preloadImages(imagePaths : string[]) {

        let loadPromises = imagePaths.map((path) => this.imageCollection.load(path));
        await Promise.all(loadPromises);

    };


    protected abstract populateWithEntities();


    isReady() {

        return this.ready;

    };


    update() {

        this.entityCollection.updateAll();

    };


    draw() {

        let sceneManager = SceneManager.getInstance();
        let canvas = sceneManager.getCanvas();
        let ctx = sceneManager.getCanvasContext();

        this.entityCollection.drawAll();

    };

    
};