import { EntityCollection } from "./entity-collection.js";
import { ImageCollection } from "./image-collection.js";
import { SceneManager } from "./scene-manager.js";

export class Scene {


    entityCollection : EntityCollection = new EntityCollection();
    imageCollection : ImageCollection = new ImageCollection();


    update() {

        this.entityCollection.updateAll();

    };


    draw() {

        let sceneManager = SceneManager.getInstance();
        let canvas = sceneManager.getCanvas();
        let ctx = sceneManager.getCanvasContext();

        this.entityCollection.drawAll();

    }
};