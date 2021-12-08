import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class line implements Shape{
    constructor(private renderer: Renderer2, private svg: any) { };
    private newRect: any;
    length: number = 0;
    x: number = 0; 
    y: number = 0;
    color: string = "";
    id: number = 0;
    startDraw(event: MouseEvent) {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.newRect = this.renderer.createElement('line', 'svg');
        this.newRect.setAttribute("stroke", "black");
        this.newRect.setAttribute("x1", this.x.toString());
        this.newRect.setAttribute("y1", this.y.toString());
        this.newRect.setAttribute("x2", this.x.toString());
        this.newRect.setAttribute("y2", this.y.toString());
        this.renderer.appendChild(this.svg.nativeElement, this.newRect);
    };
    draw(event: MouseEvent) {
        var x = event.offsetX;
        var y = event.offsetY;
        this.newRect.setAttribute("x2", x.toString());
        this.newRect.setAttribute("y2", y.toString());
        this.length = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    };
    setColor(){};
    resize(event: MouseEvent) { };
    startMove(event: MouseEvent){};
    move(event: MouseEvent) { };
    remove(array: Shape[] = []) { };
    select(x: number, y: number): boolean { 
        var equation = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
        if (equation <= 1) {
            return true;
        }
        return false
    };
}