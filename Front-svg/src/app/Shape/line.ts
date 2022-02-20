import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class line implements Shape{
    type = "line";
    status = "";
    constructor(private renderer: Renderer2, private svg: any) { };
    private line: any;
    x1: number = 0; 
    y1: number = 0;
    x2: number = 0;
    y2: number = 0;
    c1: boolean = false;
    c2:boolean = false;
    offsetX : number = 0;
    offsetY : number = 0;
    color = "";
    fill = "#fffffff";
    stroke = "#000000";
    id: number = 0;
    getType():string{
        return this.type;
      }
    startDraw(event: MouseEvent) {
        this.x1 = event.offsetX;
        this.y1 = event.offsetY;
        this.line = this.renderer.createElement('line', 'svg');
        this.line.setAttribute("stroke", this.stroke.toString());
        this.line.setAttribute("x1", this.x1.toString());
        this.line.setAttribute("y1", this.y1.toString());
        this.line.setAttribute("x2", this.x1.toString());
        this.line.setAttribute("y2", this.y1.toString());
        this.line.setAttribute("id", this.id.toString());
        this.line.setAttribute("stroke-width", "3");
        this.renderer.appendChild(this.svg.nativeElement, this.line);
    }
    draw(event: MouseEvent) {
        this.x2= event.offsetX;
        this.y2 = event.offsetY; 
        this.line.setAttribute("x2", this.x2.toString());
        this.line.setAttribute("y2", this.y2.toString());
    }
    setColor(fill : string, stroke: string){
        this.stroke = fill;
        this.line.setAttribute("stroke", this.stroke)
    }
    resize(event: MouseEvent) {
        if(this.c1){
        this.x1= event.offsetX;
        this.y1 = event.offsetY;
        this.line.setAttribute("x1", this.x1.toString());
        this.line.setAttribute("y1", this.y1.toString());
        }
        if(this.c2){
        this.x2= event.offsetX;
        this.y2 = event.offsetY;
        this.line.setAttribute("x2", this.x2.toString());
        this.line.setAttribute("y2", this.y2.toString());
        }
     }
    startSelect(){
        if(document.getElementById(this.id.toString()) === null) return;
        var circle1 = this.renderer.createElement('circle', 'svg');
        var circle2 = this.renderer.createElement('circle', 'svg');
        circle1.setAttribute("r", "8");
        circle2.setAttribute("r", "8");
        circle1.setAttribute("cx", this.x1.toString());
        circle1.setAttribute("cy", this.y1.toString());
        circle2.setAttribute("cx", this.x2.toString());
        circle2.setAttribute("cy", this.y2.toString());
        circle1.setAttribute("fill", "rgba(192,192,192,0.3)");
        circle2.setAttribute("fill", "rgba(192,192,192,0.3)");
        circle1.setAttribute("stroke", "black");
        circle2.setAttribute("stroke", "black");
        circle1.setAttribute("id", "c1");
        circle2.setAttribute("id", "c1");
        this.renderer.appendChild(this.svg.nativeElement, circle1);
        this.renderer.appendChild(this.svg.nativeElement, circle2);
    }
    move(event: MouseEvent) {
        this.x1 = this.x1 + event.offsetX - this.offsetX;
        this.y1 = this.y1 + event.offsetY - this.offsetY;
        this.x2 = this.x2 + event.offsetX - this.offsetX;
        this.y2 = this.y2 + event.offsetY - this.offsetY;
        this.line = document.getElementById(this.id.toString());
        this.line.setAttribute("x1", this.x1.toString());
        this.line.setAttribute("y1", this.y1.toString());
        this.line.setAttribute("x2", this.x2.toString());
        this.line.setAttribute("y2", this.y2.toString());
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
     }
    endSelect(){
        this.c1 = false;
        this.c2 = false;
        var circles = document.querySelectorAll("[id='c1']")
            for(let i = 0; i < circles.length; i++){
                    this.renderer.removeChild(this.svg.nativeElement, circles[i]);
                }
    }
    remove(array: Shape[] = []) { 
        this.line = document.getElementById(this.id.toString());
        this.renderer.removeChild(this.svg.nativeElement, this.line);
    }
    select( x: number, y: number): boolean {
        this.c1 = (this.x1 - x) * (this.x1 - x) + (this.y1 - y) * (this.y1 - y) < 64;
        this.c2 = (this.x2 - x) * (this.x2 - x) + (this.y2 -y) * (this.y2 -y) < 64;
        if(this.c1 || this.c2){
            this.offsetX = x;
            this.offsetY = y;
            var circles = document.querySelectorAll("[id='c1']")
            for(let i = 0; i < circles.length; i++){
                    this.renderer.removeChild(this.svg.nativeElement, circles[i]);
                }
            return true;
        }
        return false
    }
    getAttributes():string{
        return this.type +","
              +this.x1.toString() + "," 
              +this.y1.toString() + ","
              +this.x2.toString() + ","
              +this.y2.toString() + "," 
              +this.id.toString() + "," 
              +this.stroke.toString();
                     
    }
    setAttributes(attributes: string){
        var data = attributes.split(",");
        this.x1 = parseInt(data[1]);
        this.y1 = parseInt(data[2]);
        this.x2 = parseInt(data[3]);
        this.y2 = parseInt(data[4]);
        this.id = parseInt(data[5]);
        this.stroke = data[6];
    };
    copy(operation : string){
    if(operation === "copy"){
    this.x1 = this.x1 + 50;
    this.x2 = this.x2 + 50;
    }
    this.line = this.renderer.createElement('line', 'svg');
    this.renderer.appendChild(this.svg.nativeElement, this.line);
    this.line.setAttribute("id", this.id.toString());
    this.set();
    
    }
 
    set(){
    this.line = document.getElementById(this.id.toString());
    this.line.setAttribute("x1", this.x1.toString());
    this.line.setAttribute("y1", this.y1.toString());
    this.line.setAttribute("x2", this.x2.toString());
    this.line.setAttribute("y2", this.y2.toString());
    this.line.setAttribute("id", this.id.toString());
    this.line.setAttribute("stroke", this.stroke.toString());
    this.line.setAttribute("stroke-width", "3");

    }
}