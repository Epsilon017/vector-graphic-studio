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


    handleMouseDown(event : MouseEvent) {};


};