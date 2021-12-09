package com.example.demo;

public class Ellipse implements IShape {
    String type = "Ellipse";
    int r1;
    int r2;
    int posx;
    int posy;
    int ID;
    String color;
    public Ellipse(int r1, int r2, int posx, int posy, int id, String color) {
        this.ID = id;
        this.posx = posx;
        this.posy = posy;
        this.r1 = r1;
        this.r2 = r2;
        this.color = color;
    }
    public Ellipse() {
        super();
    }

    @Override
    public void setWidth(int r1) {
        this.r1 =r1;
    }

    @Override
    public int getWidth() {
        return r1;
    }

    @Override
    public int getLength() {
        return r2;
    }

    @Override
    public void setLength(int r2) {
        this.r2 = r2;
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
    public int getX() {
        return posx;
    }

    @Override
    public int getY() {
        return posy;
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
}
