package com.example.demo;

import java.util.ArrayList;
import java.util.Stack;
public class Storage {
    /**
     * 2 stacks for undo and redo.
     */
    private Stack<Shape> undo = new Stack<>();
    /**
     * this stack is cleared
     */
    private Stack<Shape> redo = new Stack<>();

    public static Shape changeColor(int ID, String color) {
        Shape temp = ShapeFactory.shapes.get(ID);
        temp.setColor(color);
        ShapeFactory.shapes.set(ID, temp);
        return ShapeFactory.shapes.get(ID);
    }
    public static Shape resize(int ID, double length, double width) {
        Shape temp = ShapeFactory.shapes.get(ID);
        temp.setLength(length);
        temp.setWidth(width);
        ShapeFactory.shapes.set(ID, temp);
        return ShapeFactory.shapes.get(ID);
    }
    public static Shape move(int ID, double x, double y) {
        Shape temp = ShapeFactory.shapes.get(ID);
        temp.setX(x);
        temp.setY(y);
        ShapeFactory.shapes.set(ID, temp);
        return ShapeFactory.shapes.get(ID);
    }
    public static ArrayList delete(int ID) {
        ShapeFactory.shapes.remove(ID);
        return ShapeFactory.shapes;
    }
}
