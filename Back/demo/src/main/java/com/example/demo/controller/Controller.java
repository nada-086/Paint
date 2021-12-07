package com.example.demo.controller;
import com.example.demo.Shape;
import com.example.demo.ShapeFactory;
import com.example.demo.Storage;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/paintapp")

public class Controller {
    @GetMapping("/shape")
    @ResponseBody
    public ArrayList getInstances(@RequestParam(name = "type") String type, @RequestParam(name = "length") double length,
                                  @RequestParam(name = "width") double width, @RequestParam(name = "x") double posx,
                                  @RequestParam(name = "y") double posy, @RequestParam(name = "c") String color,
                                  @RequestParam(name = "id") int ID)
    {
        System.out.println(" Width is: "+ width +", Length is "+ length + ", Type is "+ type);

        return ShapeFactory.getShape(type, length, width, posx, posy, ID, color);

    }
    @GetMapping("/color")
    @ResponseBody
    public Shape changeColor(@RequestParam(name = "id") int ID, @RequestParam(name = "color") String color) {

        return Storage.changeColor(ID, color);
    }
    @GetMapping("/resize")
    @ResponseBody
    public Shape resize(@RequestParam(name = "id") int ID, @RequestParam(name = "length") double length,
                        @RequestParam(name = "width") double width) {
        return Storage.resize(ID, length, width);
    }
    @GetMapping("/move")
    @ResponseBody
    public Shape move(@RequestParam(name = "id") int ID, @RequestParam(name = "x") double x,
                      @RequestParam(name = "y") double y) {
        return Storage.move(ID, x, y);
    }
    @GetMapping("/delete")
    @ResponseBody
    public ArrayList delete(@RequestParam(name = "id") int ID) {
        return Storage.delete(ID);
    }
}

