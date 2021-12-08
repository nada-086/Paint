import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Renderer2, ViewChild, ElementRef, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { shapeFactory } from './ShapeFactory';
import { rectangle } from './Shapes/rectangle';
import { Shape } from './Shapes/Shape';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = "Paint";

  constructor(
    private renderer: Renderer2) {
  }
  @ViewChild('svg', { static: true }) svg: ElementRef;
  id: number = 0;
  flag: boolean = false;
  isDrawing: boolean = false;
  x: number = 0;
  y: number = 0;
  selectShape: string = "";
  newRect: any;
  isDown: boolean = false;
  isMoving = false;
  isRemove = false;
  isResize = false;
  isCopy = false;
  selectedObject = -1;
  
  Shapes: Shape[] = [];
  Shape = new Shape();
  color: string = "#000000";



  counter = 0;

  indx = -1;
  drawButton(shape: string) {
    const factory = new shapeFactory(this.renderer, this.svg);
    this.Shape = factory.getShape(shape);
    this.Shapes.push(this.Shape);
    this.isDrawing = true;
    this.selectShape = "rect"
    console.log(this.Shapes);


  }

  ngAfterViewInit() {

  }

  moveButton() {
    this.isMoving = true;
    console.log(this.isMoving);
  }
  resizeButton() {
    this.isResize = true;
  }

  select(event: MouseEvent) {
    var x = event.offsetX;
    var y = event.offsetY;
    var id = -1;
    for (var i = 0; i < this.Shapes.length; i++){
      if (this.Shapes[i].select(x, y) == true) {
        id = this.Shapes[i].id;
      }
    }
    console.log(id);
  }

  resize(event: MouseEvent) {
    var shape = document.getElementById(this.selectedObject.toString());
    var length = parseInt(shape.getAttribute("height"));
    var width = parseInt(shape.getAttribute("width"));
    length = length + event.offsetY - this.y;
    width = width + event.offsetX - this.x;
    if (length <= 0 || width <= 0) return;
    shape.setAttribute("height", length.toString());
    shape.setAttribute("width", width.toString());
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  copyButton() {
    this.isCopy = true;
    console.log("Copy");
  }
  copy() {
    var shape = <HTMLElement>document.getElementById(this.selectedObject.toString()).cloneNode(true);
    shape.setAttribute("id", this.id.toString());
    shape.setAttribute("x", "8");
    shape.setAttribute("y", "8");
    this.renderer.appendChild(this.svg.nativeElement, shape);
    this.id++;
  
  }



  startMove(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
    this.select(event);
  }

  move(event: MouseEvent, id: number) {
    // even = null;
    // if (id === -1 || !this.isMoving) return;
    // this.Shape.move(even, id);
    // var shape = document.getElementById(id.toString());
    // var x = parseInt(shape.getAttribute("x"));
    // var y = parseInt(shape.getAttribute("y"));
    // x = x - this.x + event.offsetX;
    // y = y - this.y + event.offsetY;
    // shape.setAttribute("x", x.toString());
    // shape.setAttribute("y", y.toString());
    // this.x = event.offsetX;
    // this.y = event.offsetY;
    // this.arr[this.indx].x = x;
    // this.arr[this.indx].y = y;
  }


  removeButton() {
    this.isRemove = true;
    console.log("REMOVE");

  }

  // select(event: MouseEvent) {
  //   this.x = event.offsetX;
  //   this.y = event.offsetY;
  //   for (let i = 0; i < this.arr.length; i++) {
  //     if (this.x >= this.arr[i].x && this.x <= this.arr[i].width + this.arr[i].x
  //       && this.y >= this.arr[i].y && this.y <= this.arr[i].length + this.arr[i].y) {
  //       this.selectedObject = this.arr[i].id;
  //       this.indx = i;
  //     }
  //   }

  // }

  remove() {
    this.renderer.removeChild(this.svg.nativeElement, document.getElementById(this.selectedObject.toString()));
    // this.arr.splice(this.indx, 1);
  }

  onMouseDown(event: MouseEvent) {
    if (this.isDrawing) {
      if (this.selectShape === "rect") {
        this.Shape.startDraw(event);
      }
    }
    else if (this.isMoving) {
      this.startMove(event);
    }
    else if (this.isRemove) {
      this.select(event);
      this.remove();
    }
    else if (this.isCopy) {
      this.select(event);
      this.copy();
    }
    else if (this.isResize) {
      this.select(event);
    

    }
    this.isDown = true;
  }
  onMouseMove(event: MouseEvent) {
    if (this.isDrawing && this.isDown) {
      if (this.selectShape === "rect") this.Shape.draw(event);
    }
    if (this.isMoving && this.isDown) {
      this.move(event, this.selectedObject);
    }
    if (this.isResize && this.isDown) {
      this.resize(event);
    }
  }
  onMouseUp(event: MouseEvent) {
    if (this.isDrawing) {
      this.isDrawing = false;
      this.isDown = false;
      var rectangle = new rectangle(this.renderer, this.svg);
      // rectangle.x = this.Shape.x;
      // rectangle.y = this.Shape.y;
      // rectangle.id = this.Shape.id;
      // rectangle.width = this.Shape.width;
      // rectangle.length = this.Shape.length;
      console.log(this.Shape);
      // this.arr.push(this.Shape);
      // console.log(this.arr);
    }
    this.isMoving = false;
    this.selectedObject = -1;
    this.isDown = false;
    this.isRemove = false;
    this.isResize = false;
    this.counter = 0;

  }

  

}

