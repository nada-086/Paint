import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class rectangle implements Shape {
    type = "rectangle";
    constructor(private renderer: Renderer2, private svg: any) { };
    private newRect: any;
    length: number = 0;
    width: number = 0;
    x: number = 0;
    y: number = 0;
    offsetX : number = 0;
    offsetY: number = 0;
    color: string = "#000000";
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
        this.renderer.setAttribute(this.newRect, "fill", "#000000");
        this.renderer.setAttribute(this.newRect, "x", this.x.toString());
        this.renderer.setAttribute(this.newRect, "y", this.y.toString());
        this.renderer.setAttribute(this.newRect, "width", "1");
        this.renderer.setAttribute(this.newRect, "height", "1");
        this.renderer.setAttribute(this.newRect, "id", this.id.toString());
    }
    set(){
        this.renderer.setAttribute(this.newRect, "id", this.id.toString());  
        this.renderer.setAttribute(this.newRect, "fill", "#000000");
        this.renderer.setAttribute(this.newRect, "x", this.x.toString());
        this.renderer.setAttribute(this.newRect, "y", this.y.toString());
        this.renderer.setAttribute(this.newRect, "width", this.width.toString());
        this.renderer.setAttribute(this.newRect, "height", this.length.toString());
        this.renderer.setAttribute(this.newRect, "id", this.id.toString());   
    }
    draw(event: MouseEvent) {
        this.width = (event.offsetX - this.x)
        this.length = (event.offsetY - this.y)
        if (this.length <= 0) this.length = 1 ;
        if(this.width <= 0) this.width  = 1;
        this.renderer.setAttribute(this.newRect, "width", this.width.toString());
        this.renderer.setAttribute(this.newRect, "height", this.length.toString());
        
    };
    resize(event: MouseEvent) {
        var shape = document.getElementById(this.id.toString());
        var length = this.length + event.offsetY - this.offsetY;
        var width = this.width + event.offsetX - this.offsetX;
        if (length <= 0) length = 1 ;
        if(width <= 0) width  = 1;
        this.length = length;
        this.width = width;
        shape.setAttribute("height", this.length.toString());
        shape.setAttribute("width", this.width.toString());
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
    };
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
        var x = array.map(function(e) { return e.id; }).indexOf(this.id);
        this.renderer.removeChild(this.svg.nativeElement, this.newRect);
    }
    select(x: number, y: number): boolean {
        console.log(this.length, this.width, this.x, this.y)
        if (x >= this.x && x <= this.width + this.x
            && y >= this.y && y <= this.length + this.y) {
            this.offsetX = x;
            this.offsetY = y;
            return true; 
        }
        return false
    }

    getAttributes():string{
        var attributes = this.x.toString()+ ","
                        +this.y.toString()+ "," 
                        +this.length.toString() +","
                        +this.width.toString() +","  
                        +this.id.toString() + ","
                        +this.color.toString();
        return attributes;
    }
    setAttributes(attributes : string){
        var data = attributes.split(",");
        this.x = parseInt(data[0]);
        this.y = parseInt(data[1]);
        this.length = parseInt(data[2]);
        this.width = parseInt(data[3]);
        this.id = parseInt(data[4]);
        this.color = data[5];
    }
    copy(operation : string){
        if(operation ==="copy"){
            this.x = this.x +20;
            this.y = this.y +20;
        }
        this.newRect = this.renderer.createElement('rect', 'svg');
        this.set()
        this.renderer.appendChild(this.svg.nativeElement, this.newRect);
    }
}