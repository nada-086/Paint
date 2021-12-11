import { Renderer2 } from "@angular/core";

import { Shape } from "./Shape";

export class triangle implements Shape {
    constructor(private renderer: Renderer2, private svg: any) { };
    private triangle: any;
    type = "triangle";
    counter: number = 0;
    color: string = "#000000";
    id: number = 0;
    x1: number = 0; y1: number = 0;
    x2: number = 0; y2: number = 0;
    x3: number = 0; y3: number = 0;
    c1: boolean = false; c2: boolean = false; c3: boolean = false;
    offsetX: number = 0;
    offsetY: number = 0;
    getType():string{
        return this.type;
    }
    startDraw(event: MouseEvent) {
        var x = event.offsetX;
        var y = event.offsetY;
        if (this.counter === 0) {
            this.x1 = x;
            this.y1 = y;
            this.triangle = this.renderer.createElement('polygon', 'svg');
            this.renderer.appendChild(this.svg.nativeElement, this.triangle);
            var point = x.toString() + "," + y.toString() + " ";
            this.triangle.setAttribute("points", point);
            this.triangle.setAttribute("stroke", "black");
            this.triangle.setAttribute("id", this.id.toString());
            this.counter++;
            return;
        }
        point = this.triangle.getAttribute("points");
        point = this.adjustPoints(point, x, y);
        this.triangle.setAttribute("points", point);
        this.counter++;
    }
    draw(event: MouseEvent) {
        var x = event.offsetX;
        var y = event.offsetY;
        var point = this.triangle.getAttribute("points");
        point = this.adjustPoints(point, x, y);
        this.triangle.setAttribute("points", point);
    }

    adjustPoints(point: string, x: number, y: number): string {
        var points = point.split(" ");
        if (this.counter === 1) {
            if (points.length === 2) {
                point = point + x.toString() + "," + y.toString() + " ";
            }
            else {
                point = points[0] + " " + x.toString() + "," + y.toString() + " ";
            }
            this.x2 = x;
            this.y2 = y;
            return point;
        }
        if (this.counter === 2) {
            if (points.length === 3) {
                point = point + x.toString() + "," + y.toString() + " ";
            }
            else {
                point = points[0] + " " + points[1] + " " + x.toString() + "," + y.toString() + " ";
            }
            this.x3 = x;
            this.y3 = y;
            return point;
        }
        return null;
    }
    move(event: MouseEvent) {
        this.x1 = this.x1 + event.offsetX - this.offsetX;
        this.y1 = this.y1 + event.offsetY - this.offsetY;
        this.x2 = this.x2 + event.offsetX - this.offsetX;
        this.y2 = this.y2 + event.offsetY - this.offsetY;
        this.x3 = this.x3 + event.offsetX - this.offsetX;
        this.y3 = this.y3 + event.offsetY - this.offsetY;
        var point = this.x1.toString() + "," + this.y1.toString() + " "
        + this.x2.toString() + "," + this.y2.toString() + " "
        + this.x3.toString() + "," + this.y3.toString() + " ";
        this.triangle.setAttribute("points", point);
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
    }
    resize(event: MouseEvent) {
        if(this.c1){
            this.x1 = this.x1 + event.offsetX - this.offsetX;
            this.y1 = this.y1 + event.offsetY - this.offsetY;
            var point = this.changePoint(0,1, this.x1, this.y1);
            this.triangle.setAttribute("points", point);
            this.offsetX = event.offsetX;
            this.offsetY = event.offsetY;
        }
        else if(this.c2){
            this.x2 = this.x2 + event.offsetX - this.offsetX;
            this.y2 = this.y2 + event.offsetY - this.offsetY;
            var point = this.changePoint(2,3, this.x2, this.y2);
            this.triangle.setAttribute("points", point);
            this.offsetX = event.offsetX;
            this.offsetY = event.offsetY;
        }
        this.x3 = this.x3 + event.offsetX - this.offsetX;
        this.y3 = this.y3 + event.offsetY - this.offsetY;
        var point = this.changePoint(4,5, this.x3, this.y3);
        this.triangle.setAttribute("points", point);
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
    }
    startSelect() {
        if(document.getElementById(this.id.toString()) === null) return;
        var circle1 = this.renderer.createElement('circle', 'svg');
        var circle2 = this.renderer.createElement('circle', 'svg');
        var circle3 = this.renderer.createElement('circle', 'svg');
        circle1.setAttribute("r", "8");
        circle2.setAttribute("r", "8");
        circle3.setAttribute("r", "8");
        circle1.setAttribute("cx", this.x1.toString());
        circle1.setAttribute("cy", this.y1.toString());
        circle2.setAttribute("cx", this.x2.toString());
        circle2.setAttribute("cy", this.y2.toString());
        circle3.setAttribute("cx", this.x3.toString());
        circle3.setAttribute("cy", this.y3.toString());
        circle1.setAttribute("fill", "rgba(192,192,192,0.3)");
        circle2.setAttribute("fill", "rgba(192,192,192,0.3)");
        circle3.setAttribute("fill", "rgba(192,192,192,0.3)");
        circle1.setAttribute("stroke", "black");
        circle2.setAttribute("stroke", "black");
        circle3.setAttribute("stroke", "black");
        circle1.setAttribute("id", "c1");
        circle2.setAttribute("id", "c1");
        circle3.setAttribute("id", "c1");
        this.renderer.appendChild(this.svg.nativeElement, circle1);
        this.renderer.appendChild(this.svg.nativeElement, circle2);
        this.renderer.appendChild(this.svg.nativeElement, circle3);
    }
    endSelect() {
        this.c1 = false;
        this.c2 = false;
        this.c3 = false;
        var circles = document.querySelectorAll("[id='c1']");
        for (let i = 0; i < circles.length; i++) {
        this.renderer.removeChild(this.svg.nativeElement, circles[i]);
        }
    }

    changePoint(indx1: number, indx2:number, x: number,y:number): string {
        var points = this.triangle.getAttribute("points").replaceAll(' ', ",");
        var pointsArr = points.split(",");
        pointsArr[indx1] = x.toString();
        pointsArr[indx2] = y.toString();
        return  pointsArr[0] + "," + pointsArr[1] + " "
        + pointsArr[2] + "," + pointsArr[3] + " "
        + pointsArr[4] + "," + pointsArr[5] + " ";
    }
    remove(array: Shape[] = []) {
        this.renderer.removeChild(this.svg.nativeElement, this.triangle);    // array.splice(this.id, 1);
    }
    select(x: number, y: number): boolean {
        this.c1 = (this.x1 - x) * (this.x1 - x) + (this.y1 - y) * (this.y1 - y) < 64;
        this.c2 = (this.x2 - x) * (this.x2 - x) + (this.y2 - y) * (this.y2 - y) < 64;
        this.c3 = (this.x3 - x) * (this.x3 - x) + (this.y3 - y) * (this.y3 - y) < 64;
        if (this.c1 || this.c2 || this.c3) {
        this.offsetX = x;
        this.offsetY = y;
        var circles = document.querySelectorAll("[id='c1']");
        for (let i = 0; i < circles.length; i++) {
            this.renderer.removeChild(this.svg.nativeElement, circles[i]);
        }
        return true;
    }
    return false
    }
    getAttributes():string{
    return this.x1.toString() + "," 
            +this.y1.toString() + ","
            +this.x2.toString() + ","
            +this.y2.toString() + "," 
            +this.x3.toString() + ","
            +this.y3.toString() + "," 
            +this.id.toString() + "," 
            +this.color.toString();
    }
    setAttributes(attributes: string){
        var data = attributes.split(",");
        this.x1 = parseInt(data[0]);
        this.y1 = parseInt(data[1]);
        this.x2 = parseInt(data[2]);
        this.y2 = parseInt(data[3]);
        this.x3 = parseInt(data[4]);
        this.y3 = parseInt(data[5]);
        this.id = parseInt(data[6])
        this.color = data[7];   
    }
    copy(operation : string){
        if(operation === "copy"){
            this.x1 = this.x1 + 50;
            this.x2 = this.x2 + 50;
            this.x3 = this.x3 + 50;
        }
        var points = this.x1.toString() + "," + this.y1.toString() + " "
                    + this.x2.toString() + "," + this.y2.toString() + " "
                    + this.x3.toString() + "," + this.y3.toString() + " ";
        this.triangle = this.renderer.createElement('polygon', 'svg');
        this.triangle.setAttribute("points", points);
        this.triangle.setAttribute("id", this.id.toString());
        this.renderer.appendChild(this.svg.nativeElement, this.triangle);
    }
    set(){
        var points = this.x1.toString() + "," + this.y1.toString() + " "
                    + this.x2.toString() + "," + this.y2.toString() + " "
                    + this.x3.toString() + "," + this.y3.toString() + " ";
        this.triangle.setAttribute("points", points);
        this.triangle.setAttribute("id", this.id.toString());
    }
}
