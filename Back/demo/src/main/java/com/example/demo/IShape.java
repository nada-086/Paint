package com.example.demo;

public interface IShape {

    void setWidth(int w);
    int getWidth();

    int getLength();
    void setLength(int l);

    String getType();
    void setType(String type);

    void setX(int x);
    void setY(int y);

    int getX();
    int getY();

    void setColor(String c);
    String getColor();

    int getID();
    void setID(int id);
}
