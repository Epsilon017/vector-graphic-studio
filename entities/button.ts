import { C_BoxCollider } from "../components/box-collider.js";
import { C_Mouse } from "../components/mouse.js";
import { C_Sprite } from "../components/sprite.js";
import { C_Transform } from "../components/transform.js";
import { Entity } from "../scene system/entity.js";
import { SceneManager } from "../scene system/scene-manager.js";

export class E_Button extends Entity {


    private width : number;
    private height : number;
    fillColor : string;
    borderColor : string;


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

        let spriteComp = this.getComponent(C_Sprite);
        if (spriteComp !== null) {
            spriteComp.width = newWidth;
            spriteComp.height = newHeight;
        };

    };


    draw() {

        if (this.width === undefined) {
            throw new Error("Attempted to draw button with undefined dimensions. Have you used the setDimensions method?");
        };

        if (this.fillColor === undefined || this.borderColor === undefined) {
            throw new Error("Attempted to draw button with undefined dimensions. Have you set fillColor and borderColor?");
        }

        let ctx = SceneManager.getInstance().getCanvasContext();
        let position = this.getComponent(C_Transform).getPosition();

        ctx.fillStyle = this.fillColor;
        ctx.fillRect(position.x, position.y, this.width, this.height);
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = 3;
        ctx.strokeRect(position.x, position.y, this.width, this.height);
        ctx.lineWidth = 1;

        super.draw();

    };

};