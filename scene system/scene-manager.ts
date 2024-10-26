export class SceneManager { // singleton for controlling operations the user can see


    private static instance : SceneManager;
    private canvas : HTMLCanvasElement;
    private canvasContext : CanvasRenderingContext2D;

    
    private constructor() {};

    
    static getInstance() : SceneManager {

        if (!this.instance) {
            this.instance = new SceneManager();
        };
        return this.instance;

    };


    setCanvas(newCanvas : HTMLCanvasElement) {

        this.canvas = newCanvas;
        this.canvasContext = newCanvas.getContext('2d');

    };


    getCanvas() {

        return this.canvas;

    };


    getCanvasContext() {

        return this.canvasContext;

    };


};