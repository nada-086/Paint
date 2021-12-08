import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class ellipse implements Shape{
    constructor(private renderer: Renderer2, private svg: any) { };
    private newRect: any;
    rx: number = 0; // rx
    ry: number = 0; // ry
    x: number = 0; 
    y: number = 0;
    color: string = "";
    id: number = 0;
    startDraw(event: MouseEvent) {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.newRect = this.renderer.createElement('ellipse', 'svg');
        this.newRect.setAttribute("cx", this.x.toString());
        this.newRect.setAttribute("cy", this.y.toString());
        this.renderer.appendChild(this.svg.nativeElement, this.newRect);
    };
    draw(event: MouseEvent) {
        this.rx = event.offsetX - this.x;
        this.ry = event.offsetY - this.y;
        this.newRect.setAttribute("rx", this.rx.toString());
        this.newRect.setAttribute("ry", this.ry.toString());
    };
    setColor(){};
    resize(event: MouseEvent) { };
    startMove(event: MouseEvent){};
    move(event: MouseEvent) { };
    remove(array: Shape[] = []) { };
    select(x: number, y: number): boolean { 
        var equation = (Math.pow(this.x - x, 2) / Math.pow(this.rx, 2)) +
            (Math.pow(this.y - y, 2)) / Math.pow(this.ry, 2);
        if (equation <= 1) {
            return true;
        }
        return false
    };
}