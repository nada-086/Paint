package com.example.demo;


public class Rectangle implements IShape {
    String type = "rectangle";
    String parameters;
    int posx;
    int posy;
    int width;
    int length;
    int ID;
    String color;
    String outline;

    public Rectangle(String s, int posx, int posy, int length, int width, int ID, String color, String outline) {
        this.parameters = s;
        this.posx = posx;
        this.posy = posy;
        this.length = length;
        this.width = width;
        this.ID = ID;
        this.color = color;
        this.outline = outline;
    }

    public Rectangle() {
        super();
    }

    @Override
    public String getAttributes() {
        return parameters;
    }

    @Override
    public void setAttributes(String s) {
        this.parameters = s;
        String[] temp = s.split(",");
        this.posx = Integer.parseInt(temp[1]);
        this.posy = Integer.parseInt(temp[2]);
        this.length = Integer.parseInt(temp[3]);
        this.width = Integer.parseInt(temp[4]);
        setID(Integer.parseInt(temp[5]));
        setColor(temp[6]);
        setOutline(temp[7]);
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
    public void setColor(String c) {
        this.color = c;
    }
    @Override
    public String getColor() {
        return this.color+"";
    }

    @Override
    public void setOutline(String c) {
        this.outline = c;
    }

    @Override
    public String getOutline() {
        return outline;
    }

    @Override
    public int getID() {
        return this.ID;
    }

    @Override
    public void setID(int id) {
        this.ID = id;
    }


}