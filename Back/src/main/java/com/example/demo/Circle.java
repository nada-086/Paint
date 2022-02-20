package com.example.demo;

public class Circle implements IShape {
    String type = "circle";
    String parameters;
    int radius;
    int posx;
    int posy;
    int ID;
    String color;
    String outline;
    public Circle(String s, int posx, int posy, int radius, int ID, String color, String outline) {
        this.parameters = s;
        this.posx = posx;
        this.posy = posy;
        this.radius = radius;
        this.ID = ID;
        this.color = color;
        this.outline = outline;
    }

    public Circle() {
        super();
    }

    @Override
    public String getAttributes() {
        return parameters;
    }

   @Override
   public void setAttributes(String attributes) {
        String[] temp = attributes.split(",");
        this.parameters = attributes;
        this.radius = Integer.parseInt(temp[1]);
        this.posx = Integer.parseInt(temp[2]);
        this.posy = Integer.parseInt(temp[3]);
        setID(Integer.parseInt(temp[4]));
        setColor(temp[5]);
        setOutline(temp[6]);
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
        return color;
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
        return ID;
    }

    @Override
    public void setID(int id) {
        this.ID = id;
    }

}