package com.example.demo.controller;
import com.example.demo.IShape;
import com.example.demo.ShapeFactory;
import com.example.demo.Storage;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.json.JSONArray;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.*;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.awt.*;
import java.beans.XMLEncoder;
import java.beans.XMLDecoder;
import java.io.*;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
////////
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.FactoryConfigurationError;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.dom.DOMSource; import javax.xml.transform.stream.StreamResult;
@RestController
@CrossOrigin
@RequestMapping("/paintapp")

public class Controller {
    @GetMapping("/shape")
    @ResponseBody
    public ArrayList getInstances(@RequestParam(name = "type") String type, @RequestParam(name = "length") int length,
                                  @RequestParam(name = "width") int width, @RequestParam(name = "x") int posx,
                                  @RequestParam(name = "y") int posy, @RequestParam(name = "c") String color,
                                  @RequestParam(name = "id") int ID)
    {
        System.out.println(" Width is: "+ width +", Length is "+ length + ", Type is "+ type);

        return ShapeFactory.createShape(type, length, width, posx, posy, ID, color);

    }
    @GetMapping("/color")
    @ResponseBody
    public ArrayList<IShape> changeColor(@RequestParam(name = "id") int ID, @RequestParam(name = "color") String color) {

        return Storage.changeColor(ID, color);
    }
    @GetMapping("/resize")
    @ResponseBody
    public ArrayList<IShape> resize(@RequestParam(name = "id") int ID, @RequestParam(name = "length") int length,
                                    @RequestParam(name = "width") int width) {
        return Storage.resize(ID, length, width);
    }
    @GetMapping("/move")
    @ResponseBody
    public ArrayList<IShape> move(@RequestParam(name = "id") int ID, @RequestParam(name = "x") int x,
                                  @RequestParam(name = "y") int y) {
        return Storage.move(ID, x, y);
    }
    @GetMapping("/delete")
    @ResponseBody
    public ArrayList<IShape> delete(@RequestParam(name = "id") int ID) {
        return Storage.delete(ID);

    }
    @GetMapping("/copy")
    @ResponseBody
    public ArrayList<IShape> copy(@RequestParam(name = "id1") int id1, @RequestParam(name = "id2") int id2) {
        return Storage.copy(id1, id2);
    }


    @GetMapping("/loadXML")
    @ResponseBody
    public ArrayList<IShape> loadXML() {
        try{
            FileInputStream fis = new FileInputStream("./paint.xml");
            XMLDecoder decoder = new XMLDecoder(fis);
            ShapeFactory.shapes = (ArrayList<IShape>) decoder.readObject();
            decoder.close();
            fis.close();
            System.out.println(ShapeFactory.shapes);

        }
        catch (IOException ex){
            ex.printStackTrace();
        }
        return ShapeFactory.shapes;
    }
    @GetMapping("/new")
    @ResponseBody
    public void newFile() {

    }
}


