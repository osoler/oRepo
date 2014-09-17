package com.ophone.ipenyes.mock;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
 





import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.ophone.ipenyes.api.PenyaDetail;
 
public class XMLParser {
	
    public List<PenyaDetail> getAllUserNames(InputStream file) {
    	List<PenyaDetail> list = new ArrayList<>();
        try {

            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            if (file != null) {
                Document doc = db.parse(file);
                Element docEle = doc.getDocumentElement();
 
                // Print root element of the document
                System.out.println("Root element of the document: "
                        + docEle.getNodeName());
 
                NodeList placemarkList = docEle.getElementsByTagName("Placemark");
 
                // Print total student elements in document
                System.out
                        .println("Total Penyes: " + placemarkList.getLength());
 
                if (placemarkList != null && placemarkList.getLength() > 0) {
                    for (int i = 0; i < placemarkList.getLength(); i++) {
 
                        Node node = placemarkList.item(i);
 
                        if (node.getNodeType() == Node.ELEMENT_NODE) {
 
                            Element e = (Element) node;
                            PenyaDetail penya = new PenyaDetail();
                            NodeList nodeList = e.getElementsByTagName("name");

                            penya.name = nodeList.item(0).getChildNodes().item(0)
                                    .getNodeValue();
                            
                            penya.shortname = getShortName(penya.name);
                            nodeList = e.getElementsByTagName("coordinates");
                            String[] coordinates = nodeList.item(0).getChildNodes().item(0)
                                    .getNodeValue().split(",");
                            penya.x = new Double(coordinates[1]);
                            penya.y = new Double(coordinates[0]);
                            	
                            list.add(penya);
                        }
                    }
                } 
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return list;
    }
    private static String getShortName(String name){
    	if (name.length() < 30) return name;    	
    	name =  name.replaceAll("Penya ", "P.").replaceAll("Peña ", "P.").replaceAll("Agrupació", "A.");
    	if (name.length() < 30) return name;   			
    	name =  name.replaceAll("Barcelonista", "B");
    			if (name.length() < 30) return name;    	
    	name =  name.replaceAll("Blaugrana", "B");
    	if (name.length() < 30) return name;    	
    	name =  name.replaceAll("Barça", "B");
    	if (name.length() < 30) return name;    
    	name =  name.replaceAll("Blau-Grana", "B");
    	if (name.length() < 30) return name;    	
    	return name.substring(0,30) + " ...";
    }

}