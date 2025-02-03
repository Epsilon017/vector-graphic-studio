import { C_Mouse } from "../components/mouse.js";
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
        
        let testHexagon = new E_TestHexagon();
        this.entityCollection.add(testHexagon);

        let testButton = new E_Button();
        let transComp = testButton.getComponent(C_Transform);
        transComp.setPosition(new Vector2(100, 400));
        testButton.getComponent(C_Mouse).leftClick = () => {
            let position = transComp.getPosition();
            position.add(new Vector2(20, 0))
            transComp.setPosition(position);
        }
        let spriteComp = testButton.addComponent(C_Sprite);
        spriteComp.setImage("test-hexagon.png");
        testButton.setDimensions(100, 100);
        testButton.fillColor = "#FFCCCC";
        testButton.borderColor = "#FF0000";
        this.entityCollection.add(testButton);

    };

};