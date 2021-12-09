package com.example.demo;

public class Square implements IShape {
    String type = "Square";
    int length;
    int width;
    int posx;
    int posy;
    int ID;
    String color;
    public Square(int width, int x, int y, int ID, String color){
        this.length = width;
        this.width = width;
        this.posx = x;
        this.posy = y;
        this.ID = ID;
        this.color=color;
    }

    public Square() {
        super();
    }

    @Override
    public String getType() {
        return this.type;
    }

    @Override
    public void setType(String type) {
        this.type = type;
    }

    @Override
    public int getWidth() {
        return width;
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
    public int getID() {
        return ID;
    }

    @Override
    public void setID(int id) {
        this.ID = id;
    }

    @Override
    public String getColor() {
        return color;
    }
    @Override
    public void setWidth(int width) {
        this.width = width;
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
