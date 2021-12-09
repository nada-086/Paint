package com.example.demo;

import java.util.ArrayList;

public class Storage {

    public static ArrayList<IShape> changeColor(int ID, String color) {
        for (int i = 0; i < ShapeFactory.shapes.size(); ++i) {
            IShape temp = ShapeFactory.shapes.get(ID);
            if (temp.getID() == ID) {
                temp.setColor(color);
                ShapeFactory.shapes.set(i, temp);
                return ShapeFactory.shapes;
            }
        }
        return null;
    }


    public static ArrayList<IShape> resize(int ID, int length, int width) {
        for(int i=0; i<ShapeFactory.shapes.size(); i++) {
            IShape temp = ShapeFactory.shapes.get(i);
            if (temp.getID() == ID) {
                temp.setLength(length);
                temp.setWidth(width);
                ShapeFactory.shapes.set(i, temp);
                return ShapeFactory.shapes;
            }
        }
        return null;
    }
    public static ArrayList<IShape> move(int ID, int x, int y) {
        for(int i=0; i<ShapeFactory.shapes.size(); ++i) {
            IShape temp = ShapeFactory.shapes.get(i);
            if (temp.getID() == ID) {
                temp.setX(x);
                temp.setY(y);
                ShapeFactory.shapes.set(i, temp);
                return ShapeFactory.shapes;
            }
        }
        return null;
    }
    public static ArrayList<IShape> delete(int ID) {
        for(int i=0; i<ShapeFactory.shapes.size(); ++i) {
            IShape temp = ShapeFactory.shapes.get(i);
            if(temp.getID() == ID) {
                ShapeFactory.shapes.remove(i);
                return ShapeFactory.shapes;
            }
        }
        return null;
    }
    public static ArrayList<IShape> copy(int id1, int id2) {
        for (int i = 0; i < ShapeFactory.shapes.size(); ++i) {
            IShape temp = ShapeFactory.shapes.get(i);
            if (temp.getID() == id1) {
                return ShapeFactory.createShape(temp.getType(), temp.getWidth(), temp.getLength(),
                        temp.getX(), temp.getY(), id2, temp.getColor());
            }
        }
        return null;
    }
}