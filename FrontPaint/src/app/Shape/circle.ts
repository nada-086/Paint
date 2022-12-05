import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class circle implements Shape{
    type = "circle";
    status = "";
    getType():string{
        return this.type;
      }
    constructor(private renderer: Renderer2, private svg: any) { };
    private circle: any;
    radius: number = 0; // radius
    x: number = 0; 
    y: number = 0;
    offsetX: number = 0;
    offsetY: number = 0;
    fill = "#ffffff";
    stroke = "#000000";
    color: string = "";
    id: number = 0;
    startDraw(event: MouseEvent) {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.circle = this.renderer.createElement('circle', 'svg');
        this.circle.setAttribute("cx", this.x.toString());
        this.circle.setAttribute("cy", this.y.toString());
        this.circle.setAttribute("id", this.id.toString());
        this.renderer.setAttribute(this.circle, "stroke", this.stroke.toString());
        this.renderer.setAttribute(this.circle, "fill", this.fill.toString());
        this.renderer.setAttribute(this.circle, "stroke-width", "4");
        this.renderer.appendChild(this.svg.nativeElement, this.circle);
    };
    draw(event: MouseEvent) {
        var x = event.offsetX - this.x;
        var y = event.offsetY - this.y;
        if(x < 0 || y < 0) return;
        this.radius = Math.trunc(Math.hypot(x, y));
        this.circle.setAttribute("r", this.radius.toString());
    };
    setColor(fill : string, stroke: string){
        this.fill = fill;
        this.stroke = stroke;
        this.renderer.setAttribute(this.circle, "stroke", this.stroke.toString());
        this.renderer.setAttribute(this.circle, "fill", this.fill.toString());
    };
    resize(event: MouseEvent) { 
    this.circle=  document.getElementById(this.id.toString());
    var x = event.offsetX - this.x;
    var y = event.offsetY -this.y;
    if(x < 0 || y < 0) return;
    this.radius = Math.trunc(Math.hypot(x, y));
    this.circle.setAttribute("r", this.radius.toString());
    };
    startSelect(){};
    endSelect(){};
    move(event: MouseEvent) { 
        var shape = document.getElementById(this.id.toString());
        this.x = this.x - this.offsetX +  event.offsetX;
        this.y = this.y - this.offsetY +  event.offsetY;
        shape.setAttribute("cx", this.x.toString());
        shape.setAttribute("cy", this.y.toString());
        this.offsetX = event.offsetX;
        this.offsetY= event.offsetY;
    };
    remove(array: Shape[] = []) {
        this.circle = document.getElementById(this.id.toString());
        console.log(this.circle)
        this.renderer.removeChild(this.svg.nativeElement, this.circle);
     };
    select( x: number, y: number): boolean { 
        var equation = Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2);
        if (equation < Math.pow(this.radius, 2)) {
            this.offsetX = x;
            this.offsetY = y;
            return true;
        }
        return false
    }
    getAttributes():string{
        return this.type + ","
              +this.x.toString() + ","
              +this.y.toString() + ","
              +this.radius.toString()+","
              +this.id.toString()+ ","
              +this.fill + ","
              +this.stroke;
    }
    setAttributes(attributes: string){
        var data = attributes.split(",");
        this.x = parseInt(data[1]);
        this.y = parseInt(data[2]);
        this.radius = parseInt(data[3]);
        this.id = parseInt(data[4])
        this.fill = data[5] ;
        this.stroke = data[6];
    }
    set(){
        this.circle.setAttribute("id", this.id.toString());
        this.circle = document.getElementById(this.id.toString());
        this.circle.setAttribute("cx", this.x.toString());
        this.circle.setAttribute("cy", this.y.toString());
        this.circle.setAttribute("r", this.radius.toString());
        this.renderer.setAttribute(this.circle, "stroke", this.stroke);
        this.renderer.setAttribute(this.circle, "fill", this.fill);
        this.renderer.setAttribute(this.circle, "stroke-width", "4");
    }
    copy(operation : string){
        if(operation == "copy"){
            this.x = this.x +20;
            this.y = this.y + 20;
        }
    this.circle = this.renderer.createElement('circle', 'svg');
    this.circle.setAttribute("id", this.id.toString())
    
    this.renderer.appendChild(this.svg.nativeElement, this.circle);  
    this.set();
    
    }

}