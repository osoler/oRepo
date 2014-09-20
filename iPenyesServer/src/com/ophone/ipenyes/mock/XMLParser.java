package com.ophone.ipenyes.mock;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.google.common.primitives.Ints;
import com.ophone.ipenyes.api.PenyaDetail;
import org.w3c.dom.CharacterData; 

public class XMLParser {
	
    public List<PenyaDetail> getAllUserNames(InputStream file, String area) {
    	List<PenyaDetail> list = new ArrayList<>();
        try {

            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            if (file != null) {
                Document doc = db.parse(file);
                Element docEle = doc.getDocumentElement();
 
                // Print root element of the document
                System.out.println("Root element of the document: " + docEle.getNodeName());
 
                NodeList placemarkList = docEle.getElementsByTagName("penya");
 
                // Print total elements in document
                System.out.println("Total Penyes: " + placemarkList.getLength());
 
                if (placemarkList != null && placemarkList.getLength() > 0) {
                    for (int i = 0; i < placemarkList.getLength(); i++) {
 
                        Node node = placemarkList.item(i);
 
                        if (node.getNodeType() == Node.ELEMENT_NODE) {
 
                            Element e = (Element) node;
                            PenyaDetail penya = new PenyaDetail();
                            penya.name = getNodeValue(e, "name");                            
                            penya.shortname = getShortName(penya.name);
                            String[] coordinates = getNodeValue(e, "coordinates").split(",");
                            penya.x = new Double(coordinates[1]);
                            penya.y = new Double(coordinates[0]);
                           
                            penya.city = getNodeDivValue(e, "city"); 
                            penya.location = getNodeDivValue(e, "address"); 
                            penya.country = "undefined".equals(getNodeValue(e, "country"))?area:getNodeValue(e, "country");
                            penya.area = area;
                            String logo = "undefined".equals(getNodeValue(e, "logo"))?"blank.png":getNodeValue(e, "logo");
                            
                            penya.logo = "/iPenyesResources/images/escudos/" + logo;
                            
                        	penya.numAffiliates = getNodeIntValue(e, "numAffiliates")>0?getNodeIntValue(e, "numAffiliates"):1; 
                        	penya.fundationYear = getNodeIntValue(e, "fundationYear")>0?getNodeIntValue(e, "fundationYear"):1899; 

                        	NodeList infoList = e.getElementsByTagName("info");
                        	
                        	penya.info = new LinkedHashMap<String, String>();
                        	penya.info.put("address",penya.location +" , "+ penya.city + " , " + penya.country);
                        	penya.info.put("","");
                            if (infoList != null && infoList.getLength() > 0) {                            	 
                                 for (int i2 = 0; i2 < infoList.getLength(); i2++) {
                                	 Node node2 = infoList.item(i2);
                                	 
                                     if (node2.getNodeType() == Node.ELEMENT_NODE) {
                                    	 Element e2 = (Element) node2;
                                    	 penya.info.put(getNodeValue(e2, "title"), getNodeValue(e2, "desc"));                                         
                                     }
                                 }
                            }   
                           
                          	 NodeList socialNetList = e.getElementsByTagName("socialnet");
                             
                             if (socialNetList != null && socialNetList.getLength() > 0) {
                            	 penya.socialNetworks = new LinkedHashMap<String, String>();
                                 for (int i2 = 0; i2 < socialNetList.getLength(); i2++) {
                                	 Node node2 = socialNetList.item(i2);
                                	 String socialNetURL = node2.getTextContent();
                                     if (socialNetURL.toLowerCase().contains("facebook")) {
                                    	 penya.socialNetworks.put(socialNetURL, "facebook");                                       
                                     }else if (socialNetURL.toLowerCase().contains("twitter")) {
                                    	 penya.socialNetworks.put(socialNetURL, "twitter");                                       
                                     }else if (socialNetURL.toLowerCase().contains("youtube")) {
                                    	 penya.socialNetworks.put(socialNetURL, "youtube");                                       
                                     }
                                 }
                            }  
                            int indexText = 1;
                            int indexImg = 1;
                             NodeList descripcioNode = e.getElementsByTagName("description"); 
                             if (descripcioNode != null && descripcioNode.getLength() > 0) {
                            	 penya.description = new LinkedHashMap<String, Object>();
                            	 Node nodeDesc = descripcioNode.item(0);
                            	 NodeList descList = nodeDesc.getChildNodes();
                            	 for (int i2 = 0; i2 < descList.getLength(); i2++) {
                            		 Node node2 = descList.item(i2);
                            		 if ("texte".equals(node2.getNodeName())){
                            			 String descNode = getCharacterDataFromElement((Element)node2);
                            			 penya.description.put("text"+(indexText++), descNode);
                            		 }
                            		 if ("imatges".equals(node2.getNodeName())){
                            			 
                            			 Element e2 = (Element) node2;
                            			 NodeList imatgeList = e2.getElementsByTagName("imatge");                            			                             			 

                            			 if (imatgeList != null && imatgeList.getLength() > 0) {
                                			 LinkedHashMap<String, String> images =  new LinkedHashMap<>();
                                			 penya.description.put("images", images);
                                             for (int i3 = 0; i3 < imatgeList.getLength(); i3++) {
                                            	 Node node3 = imatgeList.item(i3);
                                            	 String imatgeURL = node3.getTextContent();
                                            	 images.put("item"+(indexImg++), imatgeURL);
                                             }
                            			 }    
                            			 
                            		 }
                            		 
                            		 
                            	 }
                            	 
                            	 
                            	 
                            	 
                             }                             
                             
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
    
    private static String getCharacterDataFromElement(Element e) {
        Node child = e.getFirstChild();
        if (child instanceof CharacterData) {
          CharacterData cd = (CharacterData) child;
          return cd.getData();
        }
        return "";
    }
    
    private static String getNodeDivValue(Element e, String key){
    	try{
	    	NodeList nodeList = e.getElementsByTagName(key);
	
	        String location = nodeList.item(0).getChildNodes().item(0).getTextContent();
	        return location.substring(location.indexOf(">")+1).replaceAll("</div>", ""); 
    	}catch(Exception ex){
    		return "undefined";
    	}
    	
    }
    
    private static String getNodeValue(Element e, String key){
    	try{
	    	NodeList nodeList = e.getElementsByTagName(key);
	
	        return  nodeList.item(0).getChildNodes().item(0).getTextContent();
    	}catch(Exception ex){
    		return "undefined";
    	}    	
    }
    private static int getNodeIntValue(Element e, String key){
    	try{
	    	NodeList nodeList = e.getElementsByTagName(key);
	
	        return  Ints.tryParse(nodeList.item(0).getChildNodes().item(0).getTextContent());
    	}catch(Exception ex){
    		return -1;
    	}
    	
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