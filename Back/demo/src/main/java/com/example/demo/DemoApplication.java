package com.example.demo;
import com.example.demo.controller.TestDOM;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.*;
import java.nio.charset.StandardCharsets;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) throws javax.xml.parsers.ParserConfigurationException,
			javax.xml.transform.TransformerException,
			javax.xml.transform.TransformerConfigurationException, FileNotFoundException {
		SpringApplication.run(DemoApplication.class, args);
	//	System.out.println(new TestDOM().serialise(););
		Writer out = new BufferedWriter(new OutputStreamWriter(
				new FileOutputStream("outfilename.xml"), StandardCharsets.ISO_8859_1));
		System.out.println("HI");
	}

}
