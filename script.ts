import { EntityCollection } from "./scene system/entity-collection.js"
import { ImageCollection } from "./scene system/image-collection.js";
import { SceneManager } from "./scene system/scene-manager.js";

// setup main display canvas that covers the whole body
const canvas = document.getElementById('onscreenCanvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const sceneManager = SceneManager.getInstance()
sceneManager.setCanvas(canvas);


const allEntities = new EntityCollection();


const allImages = new ImageCollection();
let imagesToLoad : Array<String> = [
    "test-hexagon.png"
];
for (let image of imagesToLoad) {
    allImages.load(image);
};


// main loop that ticks the program
function mainLoop(timestamp : DOMHighResTimeStamp) {

    // queue next tick
    window.requestAnimationFrame(mainLoop);

    // run a tick
    allEntities.updateAll();
    
};


// start main loop
window.requestAnimationFrame(mainLoop)