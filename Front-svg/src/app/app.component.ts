import { HttpClient } from '@angular/common/http';
//import { ReturnStatement } from '@angular/compiler';
import { Component, Renderer2, ViewChild, ElementRef, OnInit, Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { shapeFactory } from './ShapeFactory';
import { Shape } from './Shape/Shape';
import { catchError, OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = "Paint";

  constructor(
    private renderer: Renderer2, private _httpClient:HttpClient ) {
  }
  @ViewChild('svg', { static: true }) svg: ElementRef;
  //operations flags
  isDrawing: boolean = false;
  isDown: boolean = false;
  isMoving = false;
  isRemove = false;
  isResize = false;
  isCopy = false;
  id: number = 0;
  Shapes: Shape[] = [];
  Shape = new Shape();
  selectedShape = null;
  color : boolean = false;
  isClick = false;
  undo = [];
  redo = [];
  indx = -1;
  counter = 0;
  undoFlag = false;
  fill ="#000000";
  stroke ="#000000" ;
  expression = null;
  path: string = '';
  name: string = '';
  xml: string = '';
  json: string = '';
  operation = "";

  open() {
    document.getElementById('form1').style.display = 'block';
    this.operation = 'load';
  }

  save() {
    document.getElementById('form1').style.display = 'block';
    this.operation = 'save';
  }

  submit() {
    if (this.name !== '' && this.path !== '' && (this.xml === 'true' || this.json === 'false')) {
      document.getElementById('form1').style.display = 'none';
      if (this.xml == "true") {
        this.sendData(this.operation, `${this.path}/${this.name}.xml`);
      }
      else if (this.json == 'false') {
        this.sendData(this.operation, `${this.path}/${this.name}.json`);
      }
    }
  }

  cancel() {
    document.getElementById('form1').style.display = 'none';
  }

  clear() {
    this.sendData('new', ``);
    for (let i = 0; i < this.Shapes.length; i++){
      if(this.Shapes[i].status === "removed") continue;
    this.Shapes[i].set();
    this.Shapes[i].remove();
    }
    
    this.isDrawing = false;
    this.isDown = false;
    this.isMoving = false;
    this.isRemove = false;
    this.isResize = false;
    this.isCopy = false;
    this.id = 0;
    this.Shapes = [];
    this.Shape = new Shape();
    this.selectedShape = null;
    this.color = false;
    this.isClick = false;
    this.undo = [];
    this.redo = [];
    this.indx = -1;
    this.counter = 0;
    this.undoFlag = false;
    this.fill ="#000000";
    this.stroke = "#000000";
    
  }

  new() {
    this.clear();
    this.sendData('new', ``);
  }

  sendData(operation: string = '', param) {
    if (operation !== 'load') {
      this._httpClient.get(`http://localhost:8080/paintapp/${operation}`, {
        responseType: 'text',
        params: {
          shape: param
        },
        observe: 'response'
      },) .pipe(catchError((err) => {
        console.error(err);
        throw err;
      })).subscribe(response => {
        this.expression = response.body
      
      },
      );
     
    }
    else {
      this._httpClient.get(`http://localhost:8080/paintapp/${operation}`, {
        responseType: 'text',
        params: {
          shape: param
        },
        observe: 'response'
      },) .pipe(catchError((err) => {
        console.error(err);
        throw err;
      })) .subscribe(response => {
        this.expression = response.body

        this.clear();
        var array = this.expression.split(",");
        var attr = [];
       const factory = new shapeFactory(this.renderer, this.svg);
        
        for (var i = 0; i < array.length; i++){
          var Shape = new shapeFactory(this.renderer, this.svg);
       
        if (array[i] == 'rectangle') {
          var shape = Shape.getShape('rectangle');
          attr = array.splice(i, 8);
         
          shape.setAttributes(attr.join(","));
       
          shape.copy("l");
          this.Shapes.push(shape);
         
          i = i-1;
        }
        else if (array[i] == 'square') {
          var shape = Shape.getShape('square');
          attr = array.splice(i, 8);
          
          shape.setAttributes(attr.join(","));
       
          shape.copy("l");
          this.Shapes.push(shape);
        
          i = i-1;
        }
        else if (array[i] == 'triangle') {
         
          var shape = Shape.getShape('triangle');
         // this.Shape = factory.getShape('triangle');
          attr = array.splice(i, 10);
         
          shape.setAttributes(attr.join(","));
          shape.copy("lfds");
          this.Shapes.push(shape);
          i = i-1;
        }
        else if (array[i] == 'circle') {
          var shape = Shape.getShape('circle');
         // shape = factory.getShape('circle');
          //this.Shape = factory.getShape('circle');
          attr = array.splice(i, 7);
          
          shape.setAttributes(attr.join(","));
          
          shape.copy("lfds");
          this.Shapes.push(shape);
          i = i-1;
        }
        else if (array[i] == 'ellipse') {
          var shape = Shape.getShape('ellipse');
         // this.Shape = factory.getShape('ellipse');
          attr = array.splice(i, 8);
          shape.setAttributes(attr.join(","));
          shape.copy("lfds");
          this.Shapes.push(shape);
          i = i-1;
        }
        else if (array[i] == 'line') {
          var shape = Shape.getShape('line');
        //  this.Shape = factory.getShape('line');
          attr = array.splice(i, 7);
          shape.setAttributes(attr.join(","));
          shape.copy("lfds");
          this.Shapes.push(shape);
          i = i-1;
        }
        
      }
      },);
      
      
    }
  }


  
  colorButton(){
    this.selectStart();
    this.color = true;
    this.isDrawing = false;
    this.isMoving = false;
    this.isRemove = false;
    this.isCopy = false;
    this.isResize = false;
    this.redo = [];
  }


  drawButton(shape: string) {
    const factory = new shapeFactory(this.renderer, this.svg);
    this.Shape = factory.getShape(shape);
    this.isDrawing = true;
    this.color = false;
    this.isMoving = false;
    this.isRemove = false;
    this.isCopy = false;
    this.isResize = false;
  }

  ngAfterViewInit() {
  }
  undoButton(){
    if(this.undo.length === 0) return;
    this.undoFlag = true;
    var shape = this.undo.pop();
   
    if(shape[1] === "draw" || shape[1] === "copy"){
      var remove = document.getElementById(shape[0].id.toString())
      this.renderer.removeChild(this.svg.nativeElement, remove);
      this.Shapes[shape[2]].status = "removed";
      this.sendData("delete", shape[0].id);
    }
    else if(shape[1] === "move"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.redo.push([undoShape, shape[1], shape[2]]);
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      this.sendData("move", shape[0].id + ","+shape[0].getAttributes());
      return;

    }
    else if(shape[1] === "resize"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.redo.push([undoShape, shape[1], shape[2]]);
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      this.sendData("resize", shape[0].id + ","+shape[0].getAttributes());
      return;
    }
    else if(shape[1] === "remove"){
      shape[0].copy("L");
      this.Shapes[shape[2]].status = "";
      this.sendData("shape", shape[0].getAttributes());
    }
    else if(shape[1] === "color"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.redo.push([undoShape, shape[1], shape[2]]);
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      this.sendData("color", shape[0].id + ","+shape[0].getAttributes());
      return;
    }
    const factory = new shapeFactory(this.renderer, this.svg);
    var undoShape = factory.getShape(shape[0].type);
    undoShape.setAttributes(shape[0].getAttributes())
    this.redo.push([undoShape, shape[1], shape[2]]);
  
  }
  selectStart(){
    for(let i = 0; i < this.Shapes.length; i++){
      if(this.Shapes[i].getType() === "line" || this.Shapes[i].getType() === "triangle"){
        this.Shapes[i].startSelect();
      }
    }
  }

  moveButton() {
    if(this.isMoving) return;
    this.isMoving = true;
    this.selectStart();
    this.redo = [];
    
    this.isDrawing = false;
    this.color = false;
    this.isRemove = false;
    this.isCopy = false;
    this.isResize = false;
  }
  resizeButton() {
    this.isResize = true;
    this.selectStart();
    this.redo = [];
    this.isDrawing = false;
    this.color = false;
    this.isMoving = false;
    this.isRemove = false;
    this.isCopy = false;
  }

  redoButton(){
    if(this.redo.length === 0) return;
    var shape = this.redo.pop();
    if(shape[1] === "draw" || shape[1] === "copy"){
      shape[0].copy("L");
      this.Shapes[shape[2]].status = "";
      this.sendData("shape", shape[0].getAttributes());
  
    }
    else if(shape[1] === "move"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.undo.push([undoShape, shape[1], shape[2]]);
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      this.sendData("move", shape[0].id + ","+shape[0].getAttributes());
      return;
    }
    else if(shape[1] === "resize"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.undo.push([undoShape, shape[1], shape[2]]);
      shape[0].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      this.sendData("resize", shape[0].id + ","+shape[0].getAttributes());
      return
    }
    else if(shape[1] === "remove"){
      var remove = document.getElementById(shape[0].id.toString())
      this.renderer.removeChild(this.svg.nativeElement, remove);
      this.Shapes[shape[2]].status = "removed";
      this.sendData("delete", shape[0].id);
    }
    else if(shape[1] === "color"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.undo.push([undoShape, shape[1], shape[2]]);
      shape[0].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      this.sendData("color", shape[0].id + ","+shape[0].getAttributes());
      return
    }
    this.undo.push(shape);
    
  }
  select(event: MouseEvent, operation : string) {
    var x = event.offsetX;
    var y = event.offsetY;
    for (var i = 0; i < this.Shapes.length; i++){
      if (this.Shapes[i].select(x, y) == true && this.Shapes[i].status !== "removed") {
        this.selectedShape = this.Shapes[i];
        this.indx = i;      
      }}
      if(this.selectedShape !== null && operation !== "copy"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var shape = factory.getShape(this.selectedShape.type);
      shape.setAttributes(this.selectedShape.getAttributes());
      this.undo.push([shape, operation, this.selectedShape.id]);
      //this.undoFlag = true

    }


  }
  copyButton() {
    this.isCopy = true;
    this.selectStart();
    this.redo = [];
  }

  removeButton() {
    this.isRemove = true;
    this.selectStart();
    this.redo = [];
  }
  onClick(event: MouseEvent){
    if(this.counter === 2) return;
    if(this.isDrawing && this.Shape.type == "triangle"){
      this.Shape.id = this.id;
        this.Shape.startDraw(event);
        this.counter++;
        this.isClick = true;   
    }
    this.redo = [];
  }

  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    if (this.isDrawing && this.Shape.type !== "triangle") {
        this.Shape.id = this.id;   
        this.id++;
        this.Shape.startDraw(event);
        this.counter++;
        this.redo = [];
    }
    else if (this.isMoving) {
      this.select(event , "move");
    }
    else if (this.isRemove) {
      this.select(event , "remove");
      if(this.selectedShape === null) return;
      this.selectedShape.remove();
      this.selectedShape.status = "removed";
    }
    else if (this.isCopy) {
      this.select(event, "copy");
      if(this.selectedShape === null) return;
      const factory = new shapeFactory(this.renderer, this.svg);
      var shape = factory.getShape(this.selectedShape.type);
      var shape2 = factory.getShape(this.selectedShape.type);
      shape.setAttributes(this.selectedShape.getAttributes());
      shape.id = this.id;
      this.id++;
      this.Shapes.push(shape);
      shape.copy("copy");
      shape2.setAttributes(shape.getAttributes());
      this.undo.push([shape2, "copy", this.indx]);
      this.sendData("shape", shape.getAttributes()); 
    }
    else if (this.isResize) {
      this.select(event, "resize");
    }
    else if(this.color){
      this.select(event, "color");
      if(this.selectedShape === null) return;
      this.selectedShape.setColor(this.fill, this.stroke); 
      this.sendData("color", this.selectedShape.id + ","+ this.selectedShape.getAttributes());
    }
    this.isDown = true;
  }
  onMouseMove(event: MouseEvent) {
    if (this.isDrawing && this.isDown) {
        if(this.Shape.type === "triangle" && !this.isClick) return;
        this.Shape.draw(event);
    }
    if(this.selectedShape === null) return;
    if (this.isMoving && this.isDown ) {
      if(this.selectedShape === null){
        this.isMoving = false;
        return;
      }
      this.selectedShape.move(event,this.selectedShape.id);
    }
    if (this.isResize && this.isDown ) {
      this.selectedShape.resize(event);
    }


  }
  onMouseUp(event: MouseEvent) {
    if (this.isDrawing) {
      if(this.Shape.type === "triangle"){
        if(this.counter < 2) return
        this.id++;
      }
      this.isDrawing = false;
      this.isDown = false;
      this.Shapes.push(this.Shape);
      this.undo.push([this.Shape, "draw", this.id-1])
      this.sendData("shape", this.Shape.getAttributes())
    }
    if(this.selectedShape === null ){
      this.resetFlags();
      return;
    }
    if(this.isMoving){
      this.sendData("move",this.selectedShape.id+ "," +this.selectedShape.getAttributes())
    }
    if(this.isResize){
      this.sendData("resize",+this.selectedShape.id+ "," +this.selectedShape.getAttributes())
    }
    if(this.isRemove){
      this.sendData("delete", this.selectedShape.id)
    }
    this.resetFlags();
    for(let i = 0; i < this.Shapes.length ; i++){
        this.Shapes[i].endSelect();
    }  
  }
  resetFlags(){
    this.isMoving = false;
    this.isDown = false;
    this.isRemove = false;
    this.isResize = false;
    this.isCopy = false;
    this.selectedShape = null;
    this.counter = 0;
    this.color = false;
    this.undoFlag = false;
    this.isClick = false;

  }
}

