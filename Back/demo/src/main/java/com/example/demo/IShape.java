package com.example.demo;

public interface IShape {

    String getAttributes();
    void setAttributes(String s);

    String getType();
    void setType(String type);

    void setColor(String c);
    String getColor();

    int getID();
    void setID(int id);
}
