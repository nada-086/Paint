package com.example.demo.operations;

import com.example.demo.IShape;
import com.example.demo.ShapeFactory;

import java.util.ArrayList;

public class Operations {

    public static ArrayList<IShape> updateShapeStatus(int ID, String updatedParameters) {
        System.out.println("SIZE");
        System.out.println(ShapeFactory.shapes.size());
        for(int i = 0; i< ShapeFactory.shapes.size(); ++i) {
            IShape temp = ShapeFactory.shapes.get(i);
            if (temp.getID() == ID) {
              //  System.out.println("BEFORE");
               // System.out.println(ShapeFactory.shapes.get(i).getAttributes());
                ShapeFactory.shapes.get(i).setAttributes(updatedParameters);
              //  System.out.println("AFTRE");
             //   System.out.println(ShapeFactory.shapes.get(i).getAttributes());
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
              //  System.out.println("DELE");
                System.out.println(ShapeFactory.shapes.size());
            }
        }
        return null;
    }

    public static ArrayList<IShape> copy(int id1, int id2) {
        for (int i = 0; i < ShapeFactory.shapes.size(); ++i) {
            IShape temp = ShapeFactory.shapes.get(i);
            if (temp.getID() == id1) {
                temp.setID(id2);
                String[] s = temp.getAttributes().split(",");
                ShapeFactory.createShape(temp.getType(), s,temp.getAttributes());
            }
        }
        return null;
    }
/*
    public static int getLastID() {
        int id=0;
        for(int i=0; i<ShapeFactory.shapes.size(); i++) {
            if(ShapeFactory.shapes.get(i).getID() > id) {
                id = ShapeFactory.shapes.get(i).getID();
            }
        }
        return id;
    }*/
}