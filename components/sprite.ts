import { Component } from "../scene system/component.js";
import { Entity } from "../scene system/entity.js";
import { SceneManager } from "../scene system/scene-manager.js";
import { C_Transform } from "./transform.js";

export class C_Sprite extends Component {


    private image : HTMLCanvasElement;
    

    constructor(owner : Entity) {

        super(owner);

        if (owner.getComponent(C_Transform) === null) {
            throw new Error("Sprite component created without transform component");
        };

    };


    setImage(imagePath : string) {

        let currentScene = SceneManager.getInstance().currentScene;
        this.image = currentScene.imageCollection.get(imagePath);

    };


    draw() {

        if (this.image === undefined) {
            throw new Error("Attempted to draw undefined image. Have you properly set the sprite component's image?");
        };

        let position = this.owner.getComponent(C_Transform).getPosition();
        SceneManager.getInstance().getCanvasContext().drawImage(this.image, position.x, position.y);
        
    };


};