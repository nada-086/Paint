package com.example.demo.controller;
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
    public ArrayList getInstances(@RequestParam(name = "parameters") String paramters) {

        String[] s = paramters.split(",");
        String type = s[0];
        return ShapeFactory.createShape(type, s, paramters);
    }

    @GetMapping("/color")
    @ResponseBody
    public ArrayList<IShape> changeColor(@RequestParam(name = "id") int ID,
                                         @RequestParam(name = "parameters") String newParameters) {
        return Operations.updateShapeStatus(ID, newParameters);
    }

    @GetMapping("/resize")
    @ResponseBody
    public ArrayList<IShape> resize(@RequestParam(name = "id") int ID,
                                    @RequestParam(name = "parameters") String newParameters) {
        return Operations.updateShapeStatus(ID, newParameters);
    }

    @GetMapping("/move")
    @ResponseBody
    public ArrayList<IShape> move(@RequestParam(name = "id") int ID,
                                  @RequestParam(name = "parameters") String newParameters) {
        return Operations.updateShapeStatus(ID, newParameters);
    }

    @GetMapping("/delete")
    @ResponseBody
    public ArrayList<IShape> delete(@RequestParam(name = "id") int ID) {
        return Operations.delete(ID);
    }

    @GetMapping("/copy")
    @ResponseBody
    public ArrayList<IShape> copy(@RequestParam(name = "id1") int id1, @RequestParam(name = "id2") int id2) {
        return Operations.copy(id1, id2);
    }

    @GetMapping("/undo")
    @ResponseBody
    public void undo(@RequestParam(name = "undo") String undo) {
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
    public void save(@RequestParam(name = "path") String filePath) {
        if(filePath.contains(".xml")) {
            FilesController.saveXML(filePath);
        }
        else if(filePath.contains(".json")) {
            FilesController.saveJSON(filePath);
        }
    }

    @GetMapping("/load")
    @ResponseBody
    public void load(@RequestParam(name = "path") String filePath) throws IOException {
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


