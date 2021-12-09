package com.example.demo;

import java.util.ArrayList;

public class ShapeFactory {
    String shapeType;
    public static ArrayList<IShape> shapes = new ArrayList<>(100);

    public void setShape(String type) {
        shapeType = type;
    }

    public  static ArrayList createShape(String shapeType, int width, int length, int x, int y, int ID, String color) {
        System.out.println("type is" + shapeType);
        if(shapeType == null) {
            return null;
        }

        if(shapeType.equalsIgnoreCase("Rectangle")) {
            IShape newShape = new Rectangle(width, length, x, y, ID, color);
            shapes.add(newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Circle")) {
            System.out.println("HERE");
            IShape newShape = new Circle(width, x, y, ID, color);
            shapes.add(newShape);
            System.out.println("AYO");
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Ellipse")) {
            IShape newShape = new Ellipse(width, length, x, y, ID, color);
            shapes.add(newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Triangle")) {
            IShape newShape = new Triangle(width, length, x, y, ID, color);
            shapes.add(newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Square")) {
            IShape newShape = new Square(width, x, y, ID, color);
            shapes.add(newShape);
            return shapes;
        }
        else if(shapeType.equalsIgnoreCase("Line")) {
            IShape newShape = new Line(x, y, ID, color);
            shapes.add(newShape);
            System.out.println("size is " + shapes.size());
            return shapes;
        }
        return null;
    }
}
