export class Vector2 {


    x : number;
    y : number;


    constructor(x : number, y : number) {

        this.x = x;
        this.y = y;

    };
    

    toString() {

        return `(${this.x}, ${this.y})`;

    };


    add(otherVector : Vector2) {

        this.x += otherVector.x;
        this.y += otherVector.y;

    };


    sub(otherVector : Vector2) {

        this.x -= otherVector.x;
        this.y -= otherVector.y;

    };


    mult(otherVector : Vector2) {

        this.x *= otherVector.x;
        this.y *= otherVector.y;

    };


    div(otherVector : Vector2) {

        this.x /= otherVector.x;
        this.y /= otherVector.y;

    };


    clone() {

        return new Vector2(this.x, this.y);

    };

};