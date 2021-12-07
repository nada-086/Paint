package com.example.demo;


import com.example.demo.Shape;

public class Rectangle implements Shape {
    String type = "Rectangle";
    double width;
    double length;
    double height;
    String color;
    double posx;
    double posy;
    int ID;
    public Rectangle(double width, double length, double posx, double posy, int ID, String color) {
        this.length = length;
        this.width = width;
        this.posx = posx;
        this.posy = posy;
        this.ID = ID;
        this.color = color;

    }

    @Override
    public void setWidth(double w) {
        this.width = w;
    }

    @Override
    public double getWidth() {
        return width;
    }


    public void setLength(double l) {
        this.length = l;
    }


    public double getLength() {
        return length;
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public void setX(double x) {
        this.posx = x;
    }

    @Override
    public void setY(double y) {
        this.posy = y;
    }

    @Override
    public void setColor(String c) {
        this.color = c;
    }
    @Override
    public String getColor() {
        return this.color+"";
    }

    @Override
    public int getID() {
        return this.ID;
    }

    @Override
    public double getX() {
        return posx;
    }

    @Override
    public double getY() {
        return posy;
    }

}
