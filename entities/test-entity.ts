import { C_Sprite } from "../components/sprite.js";
import { C_Transform } from "../components/transform.js";
import { Entity } from "../scene system/entity.js";
import { Vector2 } from "../vector2.js";

export class E_TestHexagon extends Entity {

    constructor() {

        super();

        let transformComponent = this.addComponent(C_Transform);
        transformComponent.setPosition(new Vector2(100, 100));
        let spriteComponent = this.addComponent(C_Sprite);
        spriteComponent.setImage("test-hexagon.png");

    };

};