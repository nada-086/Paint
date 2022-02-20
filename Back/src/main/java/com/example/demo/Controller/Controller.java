package com.example.demo.Controller;
import com.example.demo.IShape;
import com.example.demo.ShapeFactory;
import com.example.demo.operations.Operations;
import org.springframework.web.bind.annotation.*;
import java.io.*;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/paintapp")

public class Controller {
    @GetMapping("/shape")
    @ResponseBody
    public ArrayList getInstances(@RequestParam(name = "shape") String paramters) {
        String[] s = paramters.split(",");
        String type = s[0];
        return ShapeFactory.createShape(type, s, paramters);
    }

    @GetMapping("/color")
    @ResponseBody
    public ArrayList<IShape> changeColor(@RequestParam(name = "shape") String shape) {
        String[] temp = shape.split(",");
        int ID = Integer.parseInt(temp[0]);
        String newParameters = temp[1];
        return Operations.updateShapeStatus(ID, newParameters);
    }

    @GetMapping("/resize")
    @ResponseBody
    public ArrayList<IShape> resize(@RequestParam(name = "shape") String shape) {
        String[] temp = shape.split(",");
        int ID = Integer.parseInt(temp[0]);
        String newParameters = temp[1];
        return Operations.updateShapeStatus(ID, newParameters);
    }

    @GetMapping("/move")
    @ResponseBody
    public ArrayList<IShape> move(@RequestParam(name = "shape") String shape) {
        String[] temp = shape.split(",");
        int ID = Integer.parseInt(temp[0]);
        String newParameters = temp[1];
        return Operations.updateShapeStatus(ID, newParameters);
    }

    @GetMapping("/delete")
    @ResponseBody
    public ArrayList<IShape> delete(@RequestParam(name = "shape") String shape) {
        int ID = Integer.parseInt(shape);
        return Operations.delete(ID);
    }

    @GetMapping("/copy")
    @ResponseBody
    public ArrayList<IShape> copy(@RequestParam(name = "shape") String shape) {
        String[] temp = shape.split(",");
        int id1 = Integer.parseInt(temp[0]);
        int id2 = Integer.parseInt(temp[1]);
        return Operations.copy(id1, id2);
    }

    @GetMapping("/undo")
    @ResponseBody
    public void undo(@RequestParam(name = "shape") String undo) {
        String[] temp = undo.split(",");
        String operation = temp[0];
        int ID = Integer.parseInt(temp[1]);
        int ind1 = undo.indexOf(",");
        int ind2 = undo.indexOf(",", ind1 + 1);
        String oldParameters= undo.substring(ind2+1);
        System.out.println("undoOLD"+ oldParameters);
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
    @ResponseBody
    public void load(@RequestParam(name = "shape") String filePath) throws IOException {
        if(filePath.contains(".xml")) {
            FilesController.loadXML(filePath);
        }
        else if(filePath.contains(".json")) {
            FilesController.loadJSON(filePath);
        }
    }

    @GetMapping("/new")
    @ResponseBody
    public void newFile() {
        ShapeFactory.shapes.clear();
    }
}

