package com.example.demo;

public class Square implements Shape {
    String type = "Square";
    double length;
    double width;
    double posx;
    double posy;
    int ID;
    String color;
    public Square(double width, double x, double y, int ID, String color){
        this.length = width;
        this.width = width;
        this.posx = x;
        this.posy = y;
        this.ID = ID;
        this.color=color;
    }
    @Override
    public String getType() {
        return this.type;
    }
    @Override
    public double getWidth() {
        return width;
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
    public int getID() {
        return ID;
    }
    @Override
    public String getColor() {
        return color;
    }
    @Override
    public void setWidth(double width) {
        this.width = width;
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
