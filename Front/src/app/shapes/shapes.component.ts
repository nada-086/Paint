import { Component, OnInit } from '@angular/core';
import { Shape } from './shapeFactory';



@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}

export class rectangle implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = "black";
  id: number = 0;
  draw(w: number, l: number) {
    this.ctx.strokeRect(this.x, this.y, w, l);
    this.length = l;
    this.width = w;
  };
  setColor(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.length);
    this.color = color;
  };
  resize(w: number, l: number) {
    this.ctx.clearRect(this.x, this.y, this.width, this.length);
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, w, l);
    this.length = l;
    this.width = w;
  };
  move(x: number, y: number) { };
  // It can remove the color only not the stroke
  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.length);
  };
}

export class circle implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number;
  width: number;
  x: number; 
  y: number;
  color: string;
  id: number;
  draw(w: number, l: number) {
    
  };
  setColor(color: string){};
  resize(w: number, l: number){};
  move(x: number, y: number){};
  clear(){};
}

export class triangle implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number;
  width: number;
  x: number; 
  y: number;
  color: string;
  id: number;
  draw(base: number, height: number) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(height, this.y + base / 2);
    this.ctx.lineTo(height, this.y - base / 2);
    this.ctx.closePath();
    this.ctx.stroke();
    this.width = base;
    this.length = height;
  };
  setColor(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fill();
  };
  resize(w: number, l: number) {
    
  };
  move(x: number, y: number){};
  clear(){};
}

export class line implements Shape{
  length: number;
  width: number;
  x: number; 
  y: number;
  color: string;
  id: number;
  draw(w: number, l: number){};
  setColor(color: string){};
  resize(w: number, l: number){};
  move(x: number, y: number){};
  clear(){};
}

export class comment implements Shape{
  length: number;
  width: number;
  x: number; 
  y: number;
  color: string;
  id: number;
  draw(w: number, l: number){};
  setColor(color: string){};
  resize(w: number, l: number){};
  move(x: number, y: number){};
  clear(){};
}

export class heart implements Shape{
  length: number;
  width: number;
  x: number; 
  y: number;
  color: string;
  id: number;
  draw(w: number, l: number){};
  setColor(color: string){};
  resize(w: number, l: number){};
  move(x: number, y: number){};
  clear(){};
}

export class rhombus implements Shape{
  length: number;
    width: number;
    x: number; 
    y: number;
    color: string;
    id: number;
    draw(w: number, l: number){};
    setColor(color: string){};
    resize(w: number, l: number){};
    move(x: number, y: number){};
    clear(){};
}

export class pentagon implements Shape{
  length: number;
  width: number;
  x: number; 
  y: number;
  color: string;
  id: number;
  draw(w: number, l: number){};
  setColor(color: string){};
  resize(w: number, l: number){};
  move(x: number, y: number){};
  clear(){};
}

export class hexagon implements Shape{
  length: number;
  width: number;
  x: number; 
  y: number;
  color: string;
  id: number;
  draw(w: number, l: number){};
  setColor(color: string){};
  resize(w: number, l: number){};
  move(x: number, y: number){};
  clear(){};
}