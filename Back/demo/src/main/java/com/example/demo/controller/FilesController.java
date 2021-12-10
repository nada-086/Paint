package com.example.demo.controller;
import com.example.demo.ShapeFactory;
import com.example.demo.operations.Operations;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class FilesController {
    public static List<String> loadShapes = new ArrayList<String>();

    public static void saveXML(String filePath) {
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder;
        try {
            dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.newDocument();
            Element rootElement = doc.createElementNS(null,"Shapes");
            //append root element to document
            doc.appendChild(rootElement);
            for(int i=0; i<ShapeFactory.shapes.size(); i++) {
                Element root = doc.createElement("shapes");
                    //create name element
                root.appendChild(getEmployeeElements(doc, root, "Attributes", ShapeFactory.shapes.get(i).getAttributes()));
                //append children element to root element
                rootElement.appendChild(getNodes(doc, ShapeFactory.shapes.get(i).getAttributes(), "shapes"));
            }
            //for output to file, console
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            //for pretty print
            transformer.setOutputProperty(OutputKeys.ENCODING, "ISO-8859-1");
            transformer.setOutputProperty(OutputKeys.INDENT, "yes");
            DOMSource source = new DOMSource(doc);
            //write to console or file
            StreamResult console = new StreamResult(System.out);
            StreamResult file = new StreamResult(new File(filePath));
            //write data
            transformer.transform(source, console);
            transformer.transform(source, file);
            System.out.println("DONE");
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static Node getNodes(Document doc, String attributes, String type) {
        // , String name, String age, String role, String gender)

        Element employee = doc.createElement(type);
        //create attributes element
        employee.appendChild(getEmployeeElements(doc, employee, "Attributes", attributes));
        return employee;
    }
    //utility method to create text node
    private static Node getEmployeeElements(Document doc, Element element, String name, String value) {
        Element node = doc.createElement(name);
        node.appendChild(doc.createTextNode(value));
        return node;
    }

    public static List<String> loadXML(String filePath) throws IOException {
        ShapeFactory.shapes.clear();
        loadShapes.clear();
        //String filePath = "./shapes.xml";
        File xmlFile = new File(filePath);
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder;
        try {
            dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(xmlFile);
            doc.getDocumentElement().normalize();
            System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
            NodeList nodeList = doc.getElementsByTagName("shapes");
            //now XML is loaded as Document in memory, lets convert it to Object List
            // List<Object> empList = new ArrayList<Object>();
            for (int i = 0; i < nodeList.getLength(); i++) {
               // empList.add(
                        getTagInfo(nodeList.item(i));
            }
            int lastid = Operations.getLastID();
            System.out.println("last id is " +lastid);
        }
        catch (ParserConfigurationException | IOException | SAXException e1) {
                    e1.printStackTrace();
        }
        return loadShapes;
    }

    private static void getTagInfo(Node node) {
        //XMLReaderDOM domReader = new XMLReaderDOM();
        Object emp = new Object();
        if (node.getNodeType() == Node.ELEMENT_NODE) {
            Element element = (Element) node;
            String str = getTagValue("Attributes", element);
            loadShapes.add(str);
            String separator =",";
            int sepPos = str.indexOf(separator);
            String attributes = str.substring(sepPos + separator.length());
            String types = str.substring(0, str.indexOf(separator));
            String[] s = str.split(",");
            ShapeFactory.createShape(types, s, str);
            System.out.println(str);
        }
        // return emp;
    }
    private static String getTagValue(String tag, Element element) {
        NodeList nodeList = element.getElementsByTagName(tag).item(0).getChildNodes();
        Node node = (Node) nodeList.item(0);
        return node.getNodeValue();
    }

////////JSON
    public static void saveJSON(String filePath) {
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        //    jsonObject.put("LastID", 432);
        try (FileWriter file = new FileWriter(filePath)) {
            //  jsonObject.put("Shapes",null);
            for(int i=0; i<ShapeFactory.shapes.size(); i++) {
                JSONObject type = new JSONObject();
                //   type.put("Type",ShapeFactory.shapes.get(i).getType());
                // JSONObject attribute = new JSONObject();
                type.put("Attributes",ShapeFactory.shapes.get(i).getAttributes());
                jsonArray.add(type);
            }
            jsonObject.put("Shapes",jsonArray);
            jsonObject.put("Shapes", jsonArray);
            file.write(jsonObject.toJSONString());
            file.flush();
            // file.close();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static List<String> loadJSON(String filePath) {
        List<String> objects = new ArrayList<String>();
        JSONParser parser = new JSONParser();
        JSONObject jsonObject;
        try {
            ShapeFactory.shapes.clear();
            JSONArray jsonArray = new JSONArray();
            jsonObject = (JSONObject) parser.parse(new FileReader(filePath));
            JSONArray shapes = (JSONArray) jsonObject.get("Shapes");
            for (Object o : shapes) {
                JSONObject person = (JSONObject) o;
                String param = (String) person.get("Attributes");
                objects.add(param);
                String separator =",";
                int sepPos = param.indexOf(separator);
                String attributes = param.substring(sepPos + separator.length());
                String types = param.substring(0, param.indexOf(separator));
                String[] s = param.split(",");
                ShapeFactory.createShape(types, s, param);
                System.out.println(types);
                System.out.println(attributes);
            }
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        catch (ParseException e) {
            e.printStackTrace();
        }
        return objects;
    }
}
