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
  color: string = "#FFFFFF";
  id: number = 0;
  draw(w: number, l: number) {
    this.ctx.fillStyle = this.color;
    this.length = l;
    this.width = w;
    this.ctx.strokeRect(this.x, this.y, this.length, this.width);
    this.ctx.fillRect(this.x, this.y, this.width, this.length);
  };
  setColor(color: string) {
    this.clear();
    this.color = color;
    this.draw(this.width, this.length);
  };
  resize(w: number, l: number) {
    this.clear();
    this.length = l;
    this.width = w;
    this.draw(w, l);
  };
  move(x: number, y: number) {
    this.clear();
    this.x = x;
    this.y = y;
    this.draw(this.width, this.length);
  };
  // It can remove the color only not the stroke
  clear() {
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'white';
    this.ctx.fill();
    this.ctx.stroke();
  };
}

export class circle implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = "#FFFFFF";
  id: number = 0;
  draw(w: number, l: number = 0) {
    this.ctx.fillStyle = this.color;
    this.width = w;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  };
  setColor(color: string) {
    this.clear()
    this.color = color;
    this.draw(this.width);
  };
  resize(w: number, l: number = 0) {
    this.clear();
    this.width = w;
    this.draw(this.width);
  };
  move(x: number, y: number) {
    this.clear();
    this.x = x;
    this.y = y;
    this.draw(this.width);
  };
  clear() {
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'white';
    this.ctx.fill();
    this.ctx.stroke();
  };
}

export class triangle implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = '#FFFFFF';
  id: number = 0;
  draw(base: number, height: number) {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + height, this.y + base / 2);
    this.ctx.lineTo(this.x + height, this.y - base / 2);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
    this.width = base;
    this.length = height;
  };
  setColor(color: string) {
    this.clear();
    this.color = color;
    this.draw(this.width, this.length);
  };
  resize(w: number, l: number) {
    this.clear();
    this.length = l;
    this.width = w;
    this.draw(w, l);
  };
  move(x: number, y: number) {
    this.clear();
    this.x = x;
    this.y = y;
    this.draw(this.width, this.length);
  };
  clear(){};
}

export class horizontalLine implements Shape{
  constructor(protected ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = "#000000";
  id: number = 0;
  draw(w: number = 0, l: number) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + l, this.y);
    this.ctx.stroke();
    this.length = l;
    this.ctx.closePath();
  };
  setColor(color: string) {
    this.clear();
    this.color = color;
    this.draw(this.width = 0, this.length);
  };
  resize(w: number, l: number) {
    this.clear();
    this.length = l;
    this.draw(this.width, this.length);
  };
  move(x: number, y: number) {
    this.clear();
    this.x = x;
    this.y = y;
    this.draw(this.width, this.length);
  };
  clear(){};
}

export class verticalLine implements Shape{
  constructor(protected ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = "#000000";
  id: number = 0;
  draw(w: number = 0, l: number) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x, this.y + l);
    this.ctx.stroke();
    this.length = l;
    this.ctx.closePath();
  };
  setColor(color: string) {
    this.clear();
    this.color = color;
    this.draw(this.width = 0, this.length);
  };
  resize(w: number, l: number) {
    this.clear();
    this.length = l;
    this.draw(this.width, this.length);
  };
  move(x: number, y: number) {
    this.clear();
    this.x = x;
    this.y = y;
    this.draw(this.width, this.length);
  };
  clear(){};
}

export class rhombus implements Shape{
  length: number;
    width: number;
    x: number; 
    y: number;
    color: string = "#FFFFFF";
    id: number;
    draw(w: number, l: number){};
    setColor(color: string){};
    resize(w: number, l: number){};
    move(x: number, y: number){};
    clear(){};
}

export class pentagon implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = "#FFFFFF";
  id: number = 0;
  draw(w: number, l: number) {
    this.ctx.beginPath();
    this.length = l;
    this.ctx.fillStyle = this.color;
    this.ctx.moveTo (this.x +  l, this.y);          
    for (var i = 1; i <= 5;i += 1) {
      this.ctx.lineTo (this.x + l * Math.cos(i * 2 * Math.PI / 5), this.y + l * Math.sin(i * 2 * Math.PI / 5));
    }
    this.ctx.stroke();
    this.ctx.fill()
    this.ctx.closePath();
  };
  setColor(color: string) {
    this.color = color;
    this.clear();
    this.draw(this.width, this.length);
  };
  resize(w: number = 0, l: number) {
    this.width = 0;
    this.length = l;
    this.clear();
    this.draw(this.width, this.length);
  };
  move(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.clear();
    this.draw(this.width, this.length);
  };
  clear(){};
}

export class hexagon implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = "#FFFFFF";
  id: number = 0;
  draw(w: number = 0, l: number) {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.moveTo (this.x +  l, this.y);          
    for (var i = 1; i <= 6; i += 1) {
      this.ctx.lineTo (this.x + l * Math.cos(i * 2 * Math.PI / 6), this.y + l * Math.sin(i * 2 * Math.PI / 6));
    }
    this.length = l;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
  };
  setColor(color: string) {
    this.clear();
    this.color = color;
    this.draw(this.width, this.length);
  };
  resize(w: number = 0, l: number) {
    this.clear();
    this.length = l;
    this.draw(w, l);
  };
  move(x: number, y: number) {
    this.clear();
    this.x = x;
    this.y = y;
    this.draw(this.width, this.length);
  };
  clear(){};
}

export class comment implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  color: string = "white";
  id: number = 0;
  draw(w: number, l: number) {};
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
