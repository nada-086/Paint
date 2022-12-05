package com.example.demo;

public interface IShape {
        String getAttributes();
        void setAttributes(String s);

        String getType();
        void setType(String type);

        void setColor(String c);
        String getColor();

        void setOutline(String c);
        String getOutline();

        int getID();
        void setID(int id);
}
