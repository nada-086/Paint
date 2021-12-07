import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Shape } from './Shape';
import { operations } from './operations';



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
  constructor(private ctx: CanvasRenderingContext2D, private array: Shape[] = []) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  id: number = 0
  shapeType: string = "rectangle";
  color: string = "#FFFFFF";
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
    this.array.splice(this.id, 0, )
  };
  clear() {
    this.array.splice(this.id, 1);
    
  };
}

export class circle implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  id: number = 0;
  shapeType: string = "circle";
  color: string = "#FFFFFF";
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
  id: number = 0;
  shapeType: string = "triangle";
  color: string = '#FFFFFF';
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

export class rightTriangle implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  id: number = 0;
  shapeType: string = "rightTriangle";
  color: string = "#FFFFFF";
  draw(w: number, l: number) {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + w, this.y);
    this.ctx.lineTo(this.x + w, this.y + l);
    this.ctx.closePath()
    this.ctx.stroke();
    this.ctx.fill();
  };
  setColor(color: string) {
    this.color = color;
    this.clear();
    this.draw(this.width, this.length);
  };
  resize(w: number, l: number) {
    this.length = l;
    this.width = w;
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

export class horizontalLine implements Shape{
  constructor(protected ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  id: number = 0;
  shapeType: string = "horizontalLine";
  color: string = "#000000";
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
  id: number = 0;
  shapeType: string = "verticalLine";
  color: string = "#000000";
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

export class pentagon implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  id: number = 0;
  shapeType: string = "pentagon";
  color: string = "#FFFFFF";
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
  id: number = 0;
  shapeType: string = "hexagon";
  color: string = "#FFFFFF";
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
  id: number = 0;
  shapeType: string = "comment";
  color: string = "#FFFFFF";
  draw(w: number, l: number) {
    var radius = 20;
    this.length = l;
    this.width = w;
    this.ctx.fillStyle = this.color;
    var r = this.x + w;
    var b = this.y + l;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + radius, this.y);
    this.ctx.lineTo(this.x + radius/2, this.y - 10);
    this.ctx.lineTo(this.x + radius * 2, this.y);
    this.ctx.lineTo(r - radius, this.y);
    this.ctx.quadraticCurveTo(r, this.y, r, this.y + radius);
    this.ctx.lineTo(r, this.y + l - radius);
    this.ctx.quadraticCurveTo(r, b, r-radius, b);
    this.ctx.lineTo(this.x + radius, b);
    this.ctx.quadraticCurveTo(this.x, b, this.x, b - radius);
    this.ctx.lineTo(this.x, this.y + radius);
    this.ctx.quadraticCurveTo(this.x, this.y, this.x + radius, this.y);
    this.ctx.stroke();
  };
  setColor(color: string) {
    this.clear()
    this.color = color;
    this.draw(this.width, this.length);
  };
  resize(w: number, l: number) {
    this.length = l;
    this.width = w;
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

export class heart implements Shape{
  constructor(private ctx: CanvasRenderingContext2D) {}
  length: number = 0;
  width: number = 0;
  x: number = 0; 
  y: number = 0;
  id: number = 0;
  shapeType: string = "heart";
  color: string = "#FFFFFF";
  draw(w: number, l: number) {
    this.length = l;
    this.width = w;
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    var topCurveHeight = this.length * 0.3;
    this.ctx.moveTo(this.x, this.y + topCurveHeight);
    // top left curve
    this.ctx.bezierCurveTo(
      this.x, this.y, 
      this.x - this.width / 2, this.y, 
      this.x - this.width / 2, this.y + topCurveHeight,
    );
  
    // bottom left curve
    this.ctx.bezierCurveTo(
      this.x - this.width / 2, this.y + (this.length + topCurveHeight) / 2, 
      this.x, this.y + (this.length + topCurveHeight) / 2, 
      this.x, this.y + this.length
    );
  
    // bottom right curve
    this.ctx.bezierCurveTo(
      this.x, this.y + (this.length + topCurveHeight) / 2, 
      this.x + this.width / 2, this.y + (this.length + topCurveHeight) / 2, 
      this.x + this.width / 2, this.y + topCurveHeight
    );
  
    // top right curve
    this.ctx.bezierCurveTo(
      this.x + this.width / 2, this.y, 
      this.x, this.y, 
      this.x, this.y + topCurveHeight
    );
  
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
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
