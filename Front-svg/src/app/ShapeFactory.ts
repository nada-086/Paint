import { Renderer2 } from '@angular/core';
import { circle } from './Shapes/circle';
import { ellipse } from './Shapes/ellipse';
import { line } from './Shapes/line';
import { rectangle } from './Shapes/rectangle';
import { triangle } from './Shapes/triangle';
export class shapeFactory {
    constructor(private renderer: Renderer2, private svg: any) { };
    getShape(shapeType: string) {
        if (shapeType == null) {
            return null;
        }
        else if (shapeType == "rectangle") {
            return new rectangle(this.renderer, this.svg);
        }
        else if (shapeType == 'circle') {
            return new circle(this.renderer, this.svg);
        }
        else if (shapeType == "triangle") {
            return new triangle(this.renderer, this.svg);
        }
        else if (shapeType == "line") {
            return new line(this.renderer, this.svg);
        }
        else if (shapeType == "ellipse") {
            return new ellipse(this.renderer, this.svg);
        }
        return null;
    }
}