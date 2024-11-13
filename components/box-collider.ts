import { Component } from "../scene system/component.js";
import { Entity } from "../scene system/entity.js";
import { C_Transform } from "./transform.js";

export class C_BoxCollider extends Component {


    width : number;
    height : number;


    constructor(owner : Entity) {

        super(owner);

        if (owner.getComponent(C_Transform) === null) {
            throw new Error("BoxCollider component created without transform component")
        };

    };

    
};