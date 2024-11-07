export class ImageCollection {


    private images : Map<string, HTMLCanvasElement> = new Map();


    load(path : string) : Promise<void> {

        return new Promise((resolve, reject) => {

            var image = new Image();
            image.src = "Images/" + path;

            image.onload = () => {

                // draw image onto canvas
                let canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;

                let ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0);

                this.images.set(path, canvas);

                resolve();

            };

            image.onerror = () => {
                reject(new Error(`Failed to load image at path: Images/${path}`));
            };

        });

    };


    get(path : string) : HTMLCanvasElement {

        if (this.images.has(path)) {
            return this.images.get(path);
        } else {
            throw new Error(`Unable to find image ${path}. Has it been loaded?`);
        };

    };


};