import { C_BoxCollider } from "../components/box-collider.js";
import { C_Mouse } from "../components/mouse.js";
import { C_Transform } from "../components/transform.js";
import { Entity } from "../scene system/entity.js";
import { SceneManager } from "../scene system/scene-manager.js";

export class E_Button extends Entity {


    private width : number;
    private height : number;


    constructor() {

        super();
        this.addComponent(C_Transform);
        this.addComponent(C_BoxCollider);
        this.addComponent(C_Mouse);

    };


    setDimensions(newWidth : number, newHeight : number) {

        this.width = newWidth;
        this.height = newHeight;

        let collider = this.getComponent(C_BoxCollider);
        collider.width = newWidth;
        collider.height = newHeight;

    };


    draw() {

        if (this.width === undefined) {
            throw new Error("Attempted to draw button with undefined dimensions. Have you used the setDimensions method?");
        };

        let ctx = SceneManager.getInstance().getCanvasContext();
        let position = this.getComponent(C_Transform).getPosition();
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(position.x, position.y, this.width, this.height);

        super.draw();

    };

};