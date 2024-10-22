import { Component } from "./component.js";
import { Vector2 } from "./vector2.js";

export class C_Transform extends Component {


    private position = new Vector2(0, 0);


    getPosition() {

        return this.position.clone();

    };


    setPosition(newPosition : Vector2) {

        this.position = newPosition.clone();

    };


};