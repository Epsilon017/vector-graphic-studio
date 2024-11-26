import { Entity } from "./entity.js";

export class EntityCollection {

    
    private entities : Array<Entity> = [];


    add(entity : Entity) {

        this.entities.push(entity);

    };


    remove(entity : Entity) {

        let entityIndex = this.entities.indexOf(entity);
        if (entityIndex > -1) {
            this.entities.splice(entityIndex, 1);
        };

    };


    getEntities() {

        return this.entities.slice();

    };


    updateAll() {

        for (let entity of this.entities) {

            try {
                entity.update();
            } catch (err) {
                console.error(err);
            };
            
        };

    };


    drawAll() {

        for (let entity of this.entities) {

            try {
                entity.draw();
            } catch (err) {
                console.error(err);
            };

        };

    };


};