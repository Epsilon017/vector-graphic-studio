import { EntityCollection } from "./scene system/entity-collection.js"
import { ImageCollection } from "./scene system/image-collection.js";
import { SceneManager } from "./scene system/scene-manager.js";
import { Scene } from "./scene system/scene.js";

// setup main display canvas that covers the whole body
const canvas = document.getElementById('onscreenCanvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const sceneManager = SceneManager.getInstance()
sceneManager.setCanvas(canvas);


// main loop that ticks the program
function mainLoop(timestamp : DOMHighResTimeStamp) {

    // queue next tick
    window.requestAnimationFrame(mainLoop);

    // run a tick
    sceneManager.tick();
    
};


// start main loop
window.requestAnimationFrame(mainLoop)