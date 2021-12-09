package com.example.demo;

public class Circle implements IShape {
    String type = "Circle";
    int radius;
    int posx;
    int posy;
    int ID;
    String color;
    public Circle(int radius, int posx, int posy, int ID, String color) {
        this.radius = radius;
        this.posx = posx;
        this.posy = posy;
        this.ID = ID;
        this.color = color;
    }

    public Circle() {
        super();
    }

    @Override
    public void setWidth(int r) {
        this.radius = r;
    }

    @Override
    public int getWidth() {
        return radius;
    }

    @Override
    public int getLength() {
        return 0;
    }

    @Override
    public void setLength(int l) {

    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public void setType(String type) {
        this.type = type;
    }

    @Override
    public void setX(int x) {
        this.posx = x;
    }

    @Override
    public void setY(int y) {
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
    public void setID(int id) {
        this.ID = id;
    }

    @Override
    public int getX() {
        return posx;
    }

    @Override
    public int getY() {
        return posy;
    }
}
