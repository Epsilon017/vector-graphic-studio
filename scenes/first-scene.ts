import { C_Sprite } from "../components/sprite.js";
import { C_Transform } from "../components/transform.js";
import { E_Button } from "../entities/button.js";
import { E_TestHexagon } from "../entities/test-entity.js";
import { Entity } from "../scene system/entity.js";
import { Scene } from "../scene system/scene.js";
import { Vector2 } from "../vector2.js";

export class FirstScene extends Scene {


    protected requiredImages : string[] = [
        "test-hexagon.png"
    ];

    backgroundColor = "#212121";


    protected populateWithEntities() {
        
        let hexagon = new E_TestHexagon();
        this.entityCollection.add(hexagon);

        let button = new E_Button();
        button.getComponent(C_Transform).setPosition(new Vector2(100, 400));
        button.setDimensions(100, 100);
        this.entityCollection.add(button);

    };

};