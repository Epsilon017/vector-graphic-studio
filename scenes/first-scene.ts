import { C_Sprite } from "../components/sprite.js";
import { C_Transform } from "../components/transform.js";
import { E_TestHexagon } from "../entities/test-entity.js";
import { Entity } from "../scene system/entity.js";
import { Scene } from "../scene system/scene.js";
import { Vector2 } from "../vector2.js";

export class FirstScene extends Scene {


    protected requiredImages : string[] = [
        "test-hexagon.png"
    ];


    protected populateWithEntities() {
        
        let hexagon = new E_TestHexagon();

        this.entityCollection.add(hexagon);

    };

};