package com.example.demo;

public class Square implements IShape {
    String type = "square";
    String parameters;
    int length;
    int width;
    int posx;
    int posy;
    int ID;
    String color;
    String outline;
    public Square(String s, int x, int y, int width, int ID, String color, String outline){
        this.parameters = s;
        this.posx = x;
        this.posy = y;
        this.width = width;
        this.ID = ID;
        this.color=color;
        this.outline = outline;
    }

    public Square() {
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
        this.width = Integer.parseInt(temp[3]);
        setID(Integer.parseInt(temp[4]));
        setColor(temp[5]);
        setOutline(temp[6]);
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
    public void setOutline(String c) {
        this.outline = c;
    }

    @Override
    public String getOutline() {
        return outline;
    }


    @Override
    public void setColor(String color) {
        this.color = color;
    }

}
