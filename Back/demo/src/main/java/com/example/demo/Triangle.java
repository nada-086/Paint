package com.example.demo;

public class Triangle implements IShape {
    String type = "triangle";
    String parameters;
    String color;
    int posx1;
    int posy1;
    int posx2;
    int posy2;
    int posx3;
    int posy3;
    int ID;
    String outline;
    public Triangle(String s, int posx1, int posy1, int posx2, int posy2, int posx3, int posy3,
                    int ID, String color, String outline) {
        this.parameters = s;
        this.posx1 = posx1;
        this.posy1= posy1;
        this.posx2 = posx2;
        this.posy2= posy2;
        this.posx3 = posx3;
        this.posy3= posy3;
        this.ID = ID;
        this.color = color;
        this.outline = outline;
    }

    /*public Triangle() {
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
        this.posx3 = Integer.parseInt(temp[5]);
        this.posy3 = Integer.parseInt(temp[6]);
        setID(Integer.parseInt(temp[7]));
        setColor(temp[8]);
        setOutline(temp[9]);
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
