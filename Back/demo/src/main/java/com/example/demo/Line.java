package com.example.demo;

import com.example.demo.Shape;

public class Line implements Shape {
    String type = "Line";
    double posx;
    double posy;
    //double x2;
    //double y2;
    int ID;
    String color;

    public Line(double posx, double posy, int ID, String color) {
       // this.x1 = length;
       // this.y1 = width;
        this.posx = posx;
        this.posy = posy;
        this.ID = ID;
        this.color = color;
    }

    public String getType() {
        return type;
    }
   /* public double getLength() {
        return x1;
    } */

    public double getWidth() {
        return posx;
    }

    @Override
    public void setLength(double l) {

    }

    @Override
    public double getX() {
        return posx;
    }
    @Override
    public double getY() {
        return posy;
    }
    @Override
    public String getColor() {
        return color;
    }

    @Override
    public int getID() {
        return ID;
    }
/*
    public void setLength(double length) {
        this.x1 = length;
    }
*/
    public void setWidth(double width) {
        this.posx = width;
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public void setX(double x) {
        this.posx = x;
    }
    @Override
    public void setY(double y) {
        this.posy = y;
    }

}
