import { C_BoxCollider } from "./components/box-collider.js";
import { C_Transform } from "./components/transform.js";
import { Vector2 } from "./vector2.js";

export function isPointInBox(point : Vector2, box : C_BoxCollider) {

    let boxPosition = box.getOwner().getComponent(C_Transform).getPosition();

    return (
        point.x >= boxPosition.x &&
        point.y >= boxPosition.y &&
        point.x <= boxPosition.x + box.width &&
        point.y <= boxPosition.y + box.height
    );

};