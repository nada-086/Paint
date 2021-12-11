import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class ellipse implements Shape{
    type = "ellipse";
    getType():string{
        return this.type;
      }
    constructor(private renderer: Renderer2, private svg: any) { };
    private ellipse: any;
    rx: number = 0; // rx
    ry: number = 0; // ry
    x: number = 0; 
    y: number = 0;
    offsetX: number = 0;
    offsetY: number = 0;
    color: string = "#000000";
    id: number = 0;
    startDraw(event: MouseEvent) {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.ellipse = this.renderer.createElement('ellipse', 'svg');
        this.ellipse.setAttribute("cx", this.x.toString());
        this.ellipse.setAttribute("cy", this.y.toString());
        this.ellipse.setAttribute("id", this.id.toString());
        this.renderer.appendChild(this.svg.nativeElement, this.ellipse);
    }

    draw(event: MouseEvent) {
        this.rx = event.offsetX - this.x;
        this.ry = event.offsetY - this.y;
        if(this.rx < 0 || this.ry < 0) return;
        this.ellipse.setAttribute("rx", this.rx.toString());
        this.ellipse.setAttribute("ry", this.ry.toString());
    }

    resize(event: MouseEvent) { 
        this.rx = event.offsetX - this.x;
        this.ry = event.offsetY - this.y;
        if(this.rx < 0 || this.ry < 0) return;
        this.ellipse.setAttribute("rx", this.rx.toString());
        this.ellipse.setAttribute("ry", this.ry.toString());
    }

    startSelect(){}

    endSelect() { };

    move(event: MouseEvent) {
        this.ellipse= document.getElementById(this.id.toString());
        this.x = this.x - this.offsetX +  event.offsetX;
        this.y = this.y - this.offsetY +  event.offsetY;
        this.ellipse.setAttribute("cx", this.x.toString());
        this.ellipse.setAttribute("cy", this.y.toString());
        this.offsetX = event.offsetX;
        this.offsetY= event.offsetY;
    }

    remove(array: Shape[] = []) {
        this.renderer.removeChild(this.svg.nativeElement, this.ellipse);
    };

    select( x: number, y: number): boolean { 
        var equation = (Math.pow(this.x - x, 2) / Math.pow(this.rx, 2)) +
            (Math.pow(this.y - y, 2)) / Math.pow(this.ry, 2);
        if (equation <= 1) {
            this.offsetX = x;
            this.offsetY = y;
            return true;
        }
        return false
    }

    getAttributes():string{
        return this.x.toString() + ","
        +this.y.toString() + ","
        +this.rx.toString()+","
        +this.ry.toString() + ","
        +this.id.toString()+ ","
        +this.color.toString();
    }

    setAttributes(attributes: string){
        var data = attributes.split(",");
        this.x = parseInt(data[0]);
        this.y = parseInt(data[1]);
        this.rx = parseInt(data[2]);
        this.ry = parseInt(data[3]);
        this.id = parseInt(data[4]);
        this.color = data[5];
    }

    copy(operation : string){
        if(operation == "copy"){
            this.x = this.x +20;
            this.y = this.y + 20;
        }
        this.set();
        this.ellipse = this.renderer.createElement('ellipse', 'svg');
        this.renderer.appendChild(this.svg.nativeElement, this.ellipse);
    }

    set(){
        this.ellipse.setAttribute("cx", this.x.toString());
        this.ellipse.setAttribute("cy", this.y.toString());
        this.ellipse.setAttribute("rx", this.rx.toString());
        this.ellipse.setAttribute("ry", this.ry.toString());
        this.ellipse.setAttribute("id", this.id.toString());
    }
}