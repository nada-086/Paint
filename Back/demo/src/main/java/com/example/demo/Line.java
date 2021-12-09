package com.example.demo;

public class Line implements IShape {
    String type = "Line";
    int posx;
    int posy;
    //int x2;
    //int y2;
    int ID;
    String color;

    public Line(int posx, int posy, int ID, String color) {
       // this.x1 = length;
       // this.y1 = width;
        this.posx = posx;
        this.posy = posy;
        this.ID = ID;
        this.color = color;
    }

    public Line() {
        super();
    }

    public String getType() {
        return type;
    }

    @Override
    public void setType(String type) {
        this.type = type;
    }
   /* public int getLength() {
        return x1;
    } */

    public int getWidth() {
        return posx;
    }

    @Override
    public int getLength() {
        return 0;
    }

    @Override
    public void setLength(int l) {

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

    public void setWidth(int width) {
        this.posx = width;
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public void setX(int x) {
        this.posx = x;
    }
    @Override
    public void setY(int y) {
        this.posy = y;
    }

}
