import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class circle implements Shape{
    constructor(private renderer: Renderer2, private svg: any) { };
    private newRect: any;
    type: string = "circle";
    radius: number = 0; // radius
    x: number = 0; 
    y: number = 0;
    color: string = "";
    id: number = 0;
    startDraw(event: MouseEvent) {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.newRect = this.renderer.createElement('circle', 'svg');
        this.newRect.setAttribute("cx", this.x.toString());
        this.newRect.setAttribute("cy", this.y.toString());
        this.renderer.appendChild(this.svg.nativeElement, this.newRect);
    };
    draw(event: MouseEvent) {
        var x = event.offsetX - this.x;
        var y = event.offsetY - this.y;
        if(x < 0 || y < 0) return;
        this.radius = Math.trunc(Math.hypot(x, y));
        this.newRect.setAttribute("r", this.radius.toString());
    };
    setColor(){};
    resize(event: MouseEvent) { };
    startMove(event: MouseEvent){};
    move(event: MouseEvent) { };
    remove(array: Shape[] = []) { };
    select(x: number, y: number): boolean { 
        var equation = Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2);
        if (equation < Math.pow(this.radius, 2)) {
            return true;
        }
        return false
    };
}