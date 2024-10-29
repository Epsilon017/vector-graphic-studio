import { EntityCollection } from "./entity-collection.js";
import { ImageCollection } from "./image-collection.js";
import { SceneManager } from "./scene-manager.js";

export class Scene {


    entityCollection : EntityCollection = new EntityCollection();
    imageCollection : ImageCollection = new ImageCollection();
    private ready : boolean = false;


    async preloadImages(imagePaths : string[]) {

        let loadPromises = imagePaths.map((path) => this.imageCollection.load(path));
        await Promise.all(loadPromises);
        this.flagAsReady();

    };


    isReady() {

        return this.ready;

    };


    flagAsReady() {

        console.log(`Finished loading scene ${this.constructor.name}`);
        this.ready = true;

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