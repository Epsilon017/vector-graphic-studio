import { Entity } from "./entity.js";

export class Component {


    protected owner : Entity;


    constructor(owner : Entity) {

        this.owner = owner;

    };


    update() {};


    draw() {};


};