package com.example.demo.controller;
import com.example.demo.IShape;
import com.example.demo.ShapeFactory;
import com.example.demo.operations.Operations;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.io.*;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/paintapp")

public class Controller {
    @GetMapping("/shape")
    @ResponseStatus(value = HttpStatus.OK)
    //@ResponseBody
    public void  getInstances(@RequestParam(name = "shape") String shape) {
       // System.out.println(shape);
        String[] s = shape.split(",");
        String type = s[0];
       ShapeFactory.createShape(type, s, shape);
    }

    @GetMapping("/color")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void changeColor(@RequestParam(name = "shape") String shape) {
        String[] temp = shape.split(",");
        int ID = Integer.parseInt(temp[0]);
        String newParameters = shape.substring(2);
        System.out.println(Operations.updateShapeStatus(ID, newParameters));
    }

    @GetMapping("/resize")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public ArrayList<IShape> resize(@RequestParam(name = "shape") String shape) {
        String[] temp = shape.split(",");
        int ID = Integer.parseInt(temp[0]);
        System.out.println(shape);
        String newParameters = shape.substring(2);
        System.out.println(Operations.updateShapeStatus(ID, newParameters));
        return null;
    }

    @GetMapping("/move")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void move(@RequestParam(name = "shape") String shape) {
        String[] temp = shape.split(",");
        int ID = Integer.parseInt(temp[0]);
        String newParameters = shape.substring(2);
        System.out.println(Operations.updateShapeStatus(ID, newParameters));
    }

    @GetMapping("/delete")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public ArrayList<IShape> delete(@RequestParam(name = "shape") String shape) {
        int ID = Integer.parseInt(shape);
        return Operations.delete(ID);
    }

    @GetMapping("/copy")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void copy(@RequestParam(name = "shape") String shape) {
        System.out.println(shape);
        String[] s = shape.split(",");
        String type = s[0];
        ShapeFactory.createShape(type, s, shape);
    }

    @GetMapping("/undo")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void undo(@RequestParam(name = "shape") String undo) {
        String[] temp = undo.split(",");
        String operation = temp[0];
        int ID = Integer.parseInt(temp[1]);
        int ind1 = undo.indexOf(",");
        int ind2 = undo.indexOf(",", ind1 + 1);
        String oldParameters= undo.substring(ind2+1);
        if(operation == "draw" || operation == "copy") {
            Operations.delete(ID);
        }
        else if(operation == "delete") {
            getInstances(oldParameters);
        }
        else {
            Operations.updateShapeStatus(ID, oldParameters);
        }
    }
    @GetMapping("/save")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void save(@RequestParam(name = "shape") String filePath) {
        if(filePath.contains(".xml")) {
            FilesController.saveXML(filePath);
        }
        else if(filePath.contains(".json")) {
            FilesController.saveJSON(filePath);
        }
    }

    @GetMapping("/load")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public String load(@RequestParam(name = "shape") String filePath) throws IOException {
        System.out.println("hena");
        if(filePath.contains(".xml")) {
           System.out.println(FilesController.loadXML(filePath));
           return FilesController.loadXML(filePath);
        }
        else if(filePath.contains(".json")) {
            System.out.println(FilesController.loadJSON(filePath));
            return FilesController.loadJSON(filePath);
        }
        return null;
    }

    @GetMapping("/new")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void newFile() {

        ShapeFactory.shapes.clear();
    }
}


