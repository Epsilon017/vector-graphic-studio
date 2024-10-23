import { Component } from "./component.js";
import { Entity } from "./entity.js";
import { C_Transform } from "./transform.js";

export class C_Sprite extends Component {


    private image : HTMLCanvasElement;
    

    constructor(owner : Entity) {

        super(owner);

        if (owner.getComponent(C_Transform) === null) {
            throw new Error("Sprite component created without transform component");
        };

    };


    setImage(newImage : HTMLCanvasElement) {

        this.image = newImage;

    };


    draw() {

        if (this.image === undefined) {
            throw new Error("Attempted to draw undefined image. Have you properly set the sprite component's image?");
        };

        let position = this.owner.getComponent(C_Transform).getPosition();
        //// draw with canvas context
        
    };


};