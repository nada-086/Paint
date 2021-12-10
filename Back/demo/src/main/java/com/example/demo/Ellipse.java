package com.example.demo;

public class Ellipse implements IShape {
    String type = "ellipse";
    String parameters;
    int r1;
    int r2;
    int posx;
    int posy;
    int ID;
    String color;
    public Ellipse(String s, int r1, int r2, int posx, int posy, int id, String color) {
        this.parameters = s;
        this.ID = id;
        this.posx = posx;
        this.posy = posy;
        this.r1 = r1;
        this.r2 = r2;
        this.color = color;
    }
   /* public Ellipse() {
        super();
    }
*/
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
        this.r1 = Integer.parseInt(temp[3]);
        this.r2 = Integer.parseInt(temp[4]);
        setID(Integer.parseInt(temp[5]));
        setColor(temp[6]);
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
    public int getID() {
        return ID;
    }

    @Override
    public void setID(int id) {
        this.ID = id;
    }
}
