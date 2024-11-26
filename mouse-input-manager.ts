import { isPointInBox } from "./collision.js";
import { C_BoxCollider } from "./components/box-collider.js";
import { C_Mouse } from "./components/mouse.js";
import { Entity } from "./scene system/entity.js";
import { SceneManager } from "./scene system/scene-manager.js";
import { Vector2 } from "./vector2.js";

export class MouseInputManager { // singleton for handling and broadcasting the user's mouse inputs
    

    private static instance : MouseInputManager;


    private constructor() {

        // attach listeners with bind to preserve "this"
        window.addEventListener("mousedown", this.handleMouseDown.bind(this));

    };


    static getInstance() : MouseInputManager {

        if (!this.instance) {
            this.instance = new MouseInputManager();
        };
        return this.instance;

    };


    handleMouseDown(event : MouseEvent) {

        let mouseDownPosition = new Vector2(event.clientX, event.clientY);
        let mouseEntities = this.getMouseEntities();

        let clickedEntity = null;
        for (let ent of mouseEntities) {

            let entBoxCollider = ent.getComponent(C_BoxCollider);
            if (entBoxCollider !== null && isPointInBox(mouseDownPosition, entBoxCollider)) {
                clickedEntity = ent;
                break;
            };

        };

        if (clickedEntity !== null) {

            let mouseComp = clickedEntity.getComponent(C_Mouse);
            mouseComp.leftClick();

        };

    };

    private getMouseEntities() {

        let mouseEntities : Array<Entity> = [];
        let entities = SceneManager.getInstance().currentScene.entityCollection.getEntities();

        for (let ent of entities) {

            if (ent.getComponent(C_Mouse) !== null) {
                mouseEntities.push(ent);
            };

        };

        return mouseEntities;

    };


};