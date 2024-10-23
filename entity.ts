import { Component } from "./component.js";

export class Entity {


    private components : Array<Component> = [];


    addComponent<T extends Component>(componentClass : new (owner : Entity) => T) : T {

        // return existing component if one was already added
        let existingComponent = this.getComponent(componentClass);
        if (existingComponent !== null) { return existingComponent; };

        let newComponent = new componentClass(this);
        this.components.push(newComponent);
        return newComponent as T;

    };


    getComponent<T extends Component>(componentClass : new (owner : Entity) => T) : T | null {

        for (let component of this.components) {
            if (component instanceof componentClass) {
                return component as T;
            };
        };

        // return null if no component of that class was found
        return null;

    };


    update() {

        for (let component of this.components) {
            component.update();
        };

    };


    draw() {

        for (let component of this.components) {
            component.draw();
        };

    };

    
};