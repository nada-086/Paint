import { Renderer2 } from "@angular/core";
import { Shape } from "./Shape";

export class triangle implements Shape{
    constructor(private renderer: Renderer2, private svg: any) { };
    private newRect: any;
    counter: number = 0;
    color: string = "";
    id: number = 0;
    points: any = [[], [], []];
    startDraw(event: MouseEvent) {
        this.points.push([event.offsetX, event.offsetY]);
        if(this.counter === 0){
            this.newRect = this.renderer.createElement('polygon', 'svg');
            this.renderer.appendChild(this.svg.nativeElement, this.newRect);
            var point = this.points[0][0].toString() + "," + this.points[0][1].toString() + " ";
            this.newRect.setAttribute("points", point);
            this.newRect.setAttribute("stroke", "black");
            this.counter++;
            return;
        }
        point = this.newRect.getAttribute("points");
        point = this.adjustPoints(point, this.points[0][0], this.points[0][1]);
        this.newRect.setAttribute("points", point);
    
        this.counter++;
    };
    draw(event: MouseEvent) {
        this.points[0].push(this.points[0][0], this.points[0][1]);
        var x = event.offsetX;
        var y = event.offsetY;
        var point = this.newRect.getAttribute("points");
        point = this.adjustPoints(point, x, y);
        this.newRect.setAttribute("points", point);
    };
    adjustPoints(point: string, x : number, y:number): string {
        var points = point.split(" ");
        if(this.counter === 1){
            if (points.length === 2) {
                this.points[1].push(x, y);
                return point = point + x.toString() + "," + y.toString() + " ";
            }
            this.points[1].push(x, y);
            return point = points[0] + " "+ x.toString() + "," + y.toString() + " "; 
        }
        if(this.counter === 2){
            if (points.length === 3) {
                this.points[2].push(x, y);
                return point = point + x.toString() + "," + y.toString() + " ";
            }
            else{
                point = points[0] + " " + points[1] + " " + x.toString() + "," + y.toString() + " ";
                this.points[2].push(x, y);
                return point;
            }
        }
        return null;
    } 
    setColor(){};
    resize(event: MouseEvent) { };
    startMove(event: MouseEvent){};
    move(event: MouseEvent) {};
    remove(array: Shape[] = []) {
        // this.renderer.removeChild(this.svg.nativeElement, document.getElementById(this.selectedObject.toString()));
        // array.splice(this.id, 1);
    }
    select(x: number, y: number): boolean {
        let p: any = [x, y];
        p.push(x);
        p.push(y);
        var d1 = this.sign(p, this.points[0], this.points[1]);
        var d2 = this.sign(p, this.points[1], this.points[2]);
        var d3 = this.sign(p, this.points[2], this.points[0]);
        if (!((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0))) {
            return true
        }
        return false
    };
    sign(p1: number, p2: number, p3: number) {
        // calculating area
        return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] * p3[1]);
    }
}