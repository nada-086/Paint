import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class square implements Shape {
    type = "square";
    constructor(private renderer: Renderer2, private svg: any) { };
    private newRect: any;
    status = "";
    length: number = 0;
    width: number = 0;
    x: number = 0;
    y: number = 0;
    offsetX : number = 0;
    offsetY: number = 0;
    color = "";
    fill: string = "#ffffff";
    stroke = "#000000"
    id: number = 0;

    getType():string{
        return this.type;
      }
    startDraw(event: MouseEvent) {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.newRect = this.renderer.createElement('rect', 'svg');
        this.renderer.appendChild(this.svg.nativeElement, this.newRect);
        this.renderer.setAttribute(this.newRect, "id", this.id.toString());  
        this.renderer.setAttribute(this.newRect, "fill", this.fill);
        this.renderer.setAttribute(this.newRect, "stroke", this.stroke);
        this.renderer.setAttribute(this.newRect, "stroke-width", "3");
        this.renderer.setAttribute(this.newRect, "x", this.x.toString());
        this.renderer.setAttribute(this.newRect, "y", this.y.toString());
        this.renderer.setAttribute(this.newRect, "width", "1");
        this.renderer.setAttribute(this.newRect, "height", "1");
        this.renderer.setAttribute(this.newRect, "id", this.id.toString());
    }
    set(){
        this.newRect = document.getElementById(this.id.toString());
        this.renderer.setAttribute(this.newRect, "id", this.id.toString());  
        this.renderer.setAttribute(this.newRect, "x", this.x.toString());
        this.renderer.setAttribute(this.newRect, "y", this.y.toString());
        this.renderer.setAttribute(this.newRect, "width", this.length.toString());
        this.renderer.setAttribute(this.newRect, "height", this.length.toString());
        this.renderer.setAttribute(this.newRect, "fill", this.fill);
        this.renderer.setAttribute(this.newRect, "stroke", this.stroke);
        this.renderer.setAttribute(this.newRect, "stroke-width", "3"); 
    }
    draw(event: MouseEvent) {
        this.length = (event.offsetY - this.y)
        this.width = this.length;
        if (this.length <= 0) this.length = 1 ;
        if(this.width <= 0) this.width  = 1;
        this.renderer.setAttribute(this.newRect, "width", this.length.toString());
        this.renderer.setAttribute(this.newRect, "height", this.length.toString());
        
    }
    setColor(fill : string, stroke: string) {
        this.fill = fill;
        this.stroke = stroke;
        this.renderer.setAttribute(this.newRect, "fill", this.fill);
        this.renderer.setAttribute(this.newRect, "stroke", this.stroke);
     }
    resize(event: MouseEvent) {
        var shape = document.getElementById(this.id.toString());
        var length = this.length + event.offsetY - this.offsetY;
        if (length <= 0) length = 1 ;
        this.length = length;
        this.width = this.length;
        shape.setAttribute("height", this.length.toString());
        shape.setAttribute("width", this.length.toString());
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
    }
    startSelect() {
    }
    endSelect(){};
    move(event: MouseEvent, id: number) {
        var rectangle = document.getElementById(id.toString());
        this.x = this.x - this.offsetX + event.offsetX;
        this.y = this.y - this.offsetY + event.offsetY;
        rectangle.setAttribute("x", this.x.toString());
        rectangle.setAttribute("y", this.y.toString());
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
    }
    remove(array: Shape[] = []) {
        this.newRect = document.getElementById(this.id.toString())
        this.renderer.removeChild(this.svg.nativeElement, this.newRect);
     }
    select(x: number, y: number): boolean {
        if (x >= this.x && x <= this.width + this.x
            && y >= this.y && y <= this.length + this.y) {
            this.offsetX = x;
            this.offsetY = y;
            return true; 
        }
        return false
    }

    getAttributes():string{
        var attributes = this.type +","
                        +this.x.toString()+ ","
                        +this.y.toString()+ "," 
                        +this.length.toString() +","
                        +this.width.toString() +","  
                        +this.id.toString() + ","
                        +this.fill + ","
                        +this.stroke;
        console.log(attributes, 'sq')
        return attributes;
    }
    setAttributes(attributes : string){
        var data = attributes.split(",");
        this.x = parseInt(data[1]);
        this.y = parseInt(data[2]);
        this.length = parseInt(data[3]);
        this.width = parseInt(data[4]);
        this.id = parseInt(data[5]); 
        this.fill = data[6];
        this.stroke = data[7];   
    }
    copy(operation : string){
     if(operation ==="copy"){
            this.x = this.x +20;
            this.y = this.y +20;
        }
    this.newRect = this.renderer.createElement('rect', 'svg');
    this.renderer.setAttribute(this.newRect, "id", this.id.toString()); 
    this.renderer.appendChild(this.svg.nativeElement, this.newRect);
    this.set()
    
    }
    
}