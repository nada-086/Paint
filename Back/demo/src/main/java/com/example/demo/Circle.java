package com.example.demo;

public class Circle implements Shape {
    String type = "Cricle";
    double radius;
    double posx;
    double posy;
    int ID;
    String color;
    public Circle(double radius, double posx, double posy, int ID, String color) {
        this.radius = radius;
        this.posx = posx;
        this.posy = posy;
        this.ID = ID;
        this.color = color;
    }


    @Override
    public void setWidth(double r) {
        this.radius = r;
    }

    @Override
    public double getWidth() {
        return radius;
    }

    @Override
    public void setLength(double l) {

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
        return color;
    }

    @Override
    public int getID() {
        return ID;
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
