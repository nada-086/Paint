import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class rectangle implements Shape{
    [x: string]: any;
    constructor(private renderer: Renderer2, private svg: any) {};
    private newRect: any;
    length: number = 0;
    width: number = 0;
    x: number = 0; 
    y: number = 0;
    color: string = "#000000";
    id: number = 0;
    startDraw(event: MouseEvent) {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.newRect = this.renderer.createElement('rect', 'svg');
        this.renderer.appendChild(this.svg.nativeElement, this.newRect);
        this.renderer.setAttribute(this.newRect, "fill", "#000000");
        this.renderer.setAttribute(this.newRect, "x", this.x.toString());
        this.renderer.setAttribute(this.newRect, "y", this.y.toString());
        this.renderer.setAttribute(this.newRect, "width", "1");
        this.renderer.setAttribute(this.newRect, "height", "1");
        this.renderer.setAttribute(this.newRect, "id", this.id.toString());
    };
    draw(event: MouseEvent) {
        var width = (event.offsetX - this.x).toString();
        var length = (event.offsetY - this.y).toString();
        this.renderer.setAttribute(this.newRect, "width", width);
        this.renderer.setAttribute(this.newRect, "height", length);
    };
    setColor(){};
    resize() {
        // var shape = document.getElementById(this.selectedObject.toString());
        // var length = parseInt(shape.getAttribute("height"));
        // var width = parseInt(shape.getAttribute("width"));
        // length = length + event.offsetY - this.y;
        // width = width + event.offsetX - this.x;
        // if (length <= 0 || width <= 0) return;
        // shape.setAttribute("height", length.toString());
        // shape.setAttribute("width", width.toString());
        // this.x = event.offsetX;
        // this.y = event.offsetY;
    };
    startMove(event: MouseEvent) {
        // this.x = event.offsetX;
        // this.y = event.offsetY;
        // this.select(event);
    }
    move(event: MouseEvent, id: number = 0) {
    //     if (id === -1 || !this.isMoving) return;
        var shape = document.getElementById(id.toString());
        var x = parseInt(shape.getAttribute("x"));
        var y = parseInt(shape.getAttribute("y"));
        x = x - this.x + event.offsetX;
        y = y - this.y + event.offsetY;
        shape.setAttribute("x", x.toString());
        shape.setAttribute("y", y.toString());
        this.x = event.offsetX;
        this.y = event.offsetY;
    //     this.x = x;
    //     this.y = y;
    };
    remove(array: Shape[] = []) { };
    select(x: number, y: number): boolean { 
        if (x >= this.x && x <= this.width + this.x
            && y >= this.y && y <= this.length + this.y) {
            return true;
        }
        return false
    };
}