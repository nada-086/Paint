package com.example.demo;

import java.util.ArrayList;

public class ShapeFactory {
  /**  double w;
    double l;
    double h;
    String c;*/
    String shapeType;
    public static ArrayList<Shape> shapes = new ArrayList<>(100);

    public void setShape(String type) {
        shapeType = type;
    }

    public  static ArrayList getShape(String shapeType, double width, double length, double x, double y, int ID, String color) {
        if(shapeType == null) {
            return null;
        }

        if(shapeType.equalsIgnoreCase("Rectangle")) {
            Shape newShape = new Rectangle(width, length, x, y, ID, color);
            shapes.add(ID, newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Circle")) {
            Shape newShape = new Circle(width, x, y, ID, color);
            shapes.add(ID, newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Triangle")) {
            Shape newShape = new Triangle(width, length, x, y, ID, color);
            shapes.add(ID, newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Square")) {
            Shape newShape = new Square(width, x, y, ID, color);
            shapes.add(ID, newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Line")) {
            Shape newShape = new Line(x, y, ID, color);
            shapes.add(ID, newShape);
            System.out.println("size is " + shapes.size());
            return shapes;
        }
        return null;
    }
}
