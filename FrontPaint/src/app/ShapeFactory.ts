import { Renderer2 } from '@angular/core';
import { circle } from './Shape/circle';
import { ellipse } from './Shape/ellipse';
import { line } from './Shape/line';
import { rectangle } from './Shape/rectangle';
import { square } from './Shape/square';
import { triangle } from './Shape/triangle';
export class shapeFactory {
    constructor(private renderer: Renderer2, private svg: any) { };
    getShape(shapeType: string) {
        if (shapeType == null) {
            return null;
        }
        else if (shapeType == "rectangle") {
            return new rectangle(this.renderer, this.svg);
        }
        else if (shapeType == "square") {
            return new square(this.renderer, this.svg);
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