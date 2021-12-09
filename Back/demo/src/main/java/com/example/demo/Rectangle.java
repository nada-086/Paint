package com.example.demo;


public class Rectangle implements IShape {
    String type = "Rectangle";
    int width;
    int length;
    int height;
    String color;
    int posx;
    int posy;
    int ID;
    public Rectangle(int width, int length, int posx, int posy, int ID, String color) {
        this.length = length;
        this.width = width;
        this.posx = posx;
        this.posy = posy;
        this.ID = ID;
        this.color = color;

    }

    public Rectangle() {
        super();
    }

    @Override
    public void setWidth(int w) {
        this.width = w;
    }

    @Override
    public int getWidth() {
        return width;
    }


    public void setLength(int l) {
        this.length = l;
    }


    public int getLength() {
        return length;
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
        return this.color+"";
    }

    @Override
    public int getID() {
        return this.ID;
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
