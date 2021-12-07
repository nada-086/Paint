import { circle, rectangle, verticalLine, horizontalLine, hexagon, pentagon, triangle, comment, heart, rightTriangle } from './shapes.component';
import { Shape } from "../shapes/Shape"

export class shapeFactory {
    constructor(private ctx: CanvasRenderingContext2D) {}
    getShape(shapeType: string){
        if (shapeType == null) {
            return null;
        }
        else if (shapeType == "rectangle") {
            return new rectangle(this.ctx);
        }
        else if (shapeType == 'circle') {
            return new circle(this.ctx);
        }
        else if (shapeType == "triangle") {
            return new triangle(this.ctx);
        }
        else if (shapeType == "rightTriangle") {
            return new rightTriangle(this.ctx);
        }
        else if (shapeType == "verticalLine") {
            return new verticalLine(this.ctx);
        }
        else if (shapeType == "horizontalLine") {
            return new horizontalLine(this.ctx);
        }
        else if (shapeType == "hexagon") {
            return new hexagon(this.ctx);
        }
        else if (shapeType == "pentagon") {
            return new pentagon(this.ctx);
        }
        else if (shapeType == "heart") {
            return new heart(this.ctx);
        }
        else if (shapeType == "comment") {
            return new comment(this.ctx);
        }
        return null;
    }
}

export interface shape{
    length: number;
    width: number;
    x: number; 
    y: number;
    color: string;
    id: number;
    draw(w: number, l: number);
    setColor(color: string);
    resize(w: number, l: number);
    move(x: number, y: number);
    clear();
}