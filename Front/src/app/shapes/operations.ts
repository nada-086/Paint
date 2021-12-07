import { Shape } from "./Shape";

export class operations{
    constructor(private ctx: CanvasRenderingContext2D) {}
    array: Shape[] = [];
    index: number = 0;
    clear(id: number = 0) {
        this.ctx.clearRect(0, 0, 955, 500);
        this.array.splice(id, 1);
        this.array.forEach(object => object.draw(object.width, object.length));
    }
    move(object: Shape, x: number = 0, y: number = 0) {
        this.clear(object.id);
        object.x = x;
        object.y = y;
        object.draw(object.length, object.width);
        this.array.splice(object.id, 0, object);
    }
    resize(object: Shape, width: number = 0, y: number = 0) {
        this.clear(object.id);
        object.width = width;
        object.length = length;
        object.draw(object.width, object.length);
    }
    setColor(object: Shape, color: string) {
        this.clear(object.id);
        object.color = color;
        object.draw(object.width, object.length);
    }
}