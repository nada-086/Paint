package com.example.demo;

public class Line implements IShape {
    String type = "line";
    String parameters;
    int posx1;
    int posy1;
    int posx2;
    int posy2;
    int ID;
    String color;

    public Line(String s, int posx1, int posy1, int posx2, int posy2, int ID, String color) {
        this.parameters = s;
        this.posx1 = posx1;
        this.posy1 = posy1;
        this.posx2 = posx2;
        this.posy2 = posy2;
        this.ID = ID;
        this.color = color;
    }

    /*public Line() {
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
        this.posx1 = Integer.parseInt(temp[1]);
        this.posy1 = Integer.parseInt(temp[2]);
        this.posx2 = Integer.parseInt(temp[3]);
        this.posy2 = Integer.parseInt(temp[4]);
        setID(Integer.parseInt(temp[5]));
        setColor(temp[6]);
    }
    public String getType() {
        return type;
    }

    @Override
    public void setType(String type) {
        this.type = type;
    }

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
        this.posx1 = width;
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }


}
