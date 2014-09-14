package com.ophone.ipenyes.mock;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Random;
import com.google.common.primitives.Longs;
import com.ophone.ipenyes.api.FilterPenya;
import com.ophone.ipenyes.api.Penya;
import com.ophone.ipenyes.api.PenyaDetail;

public class Utils {
	private static LinkedHashMap<Long, PenyaDetail> dbPenyas;

    private static int index = 1; 
    private static int maxPenyes = 100; 
    private static String[] europe = {"Sweden", "France", "Italy", "UK", "Finland", "Portugal"};
    private static String[] world = {"China","USA","Thailand"};


    private static String[] listEscudos = {"/images/escudos/0002.LaGranada-icon.png", "/images/escudos/0001.ABPenyaAnguera-icon.png","/images/escudos/0003.PBSantFruitosBages-icon.png", "/images/escudos/0004.PBBarcino-icon.png", "/images/escudos/0006.PBRipollet-icon.png", "/images/escudos/0008.PBCincCopes-icon.png", "/images/escudos/0007.UBCatalonia-icon.png", "/images/escudos/0010.ADBCollblanc-icon.png", "/images/escudos/0983.PBSuecia-icon.png"};
    
    static{
    	dbPenyas = new LinkedHashMap<Long, PenyaDetail>();
    	
    	XMLParser parser = new XMLParser();
    	InputStream p1 = Utils.class.getClassLoader().getResourceAsStream("Penyes1.xml");
    	List<PenyaDetail> listPenyas = parser.getAllUserNames(p1);
    	
    	for (int x=0;x<listPenyas.size();x++){
    		PenyaDetail penyaDetail = Utils.randomPenyaDetail(x, listPenyas.get(x), "Catalonia");
    		dbPenyas.put(penyaDetail.id, penyaDetail);
    	}   	
    	InputStream p2 = Utils.class.getClassLoader().getResourceAsStream("Penyes2.xml");
    	List<PenyaDetail> listPenyas2 = parser.getAllUserNames(p2);
    	for (int x=0;x<listPenyas2.size();x++){
    		PenyaDetail penyaDetail = Utils.randomPenyaDetail(listPenyas.size()+x, listPenyas2.get(x), "Spain");
    		dbPenyas.put(penyaDetail.id, penyaDetail);
    	} 
    	InputStream p3 = Utils.class.getClassLoader().getResourceAsStream("Penyes3.xml");
    	List<PenyaDetail> listPenyas3 = parser.getAllUserNames(p3);
    	
    	for (int x=0;x<listPenyas3.size();x++){
    		PenyaDetail penyaDetail = Utils.randomPenyaDetail(listPenyas.size()+listPenyas2.size()+ x, listPenyas3.get(x), (new Random()).nextBoolean()?"World":"Europe");
    		dbPenyas.put(penyaDetail.id, penyaDetail);
    	} 
    	
    }
    public static void sleep(long time){
    	try {
			Thread.sleep(time);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
    }
    
    public static List<Penya> getPenyas(FilterPenya filter){   
    	List<Penya> listPenyes = new ArrayList<Penya>();
    	int i = 0;
    	for(Penya penya: dbPenyas.values()){
    		if (listPenyes.size() >= maxPenyes ){
    			break;
    		}

    		if (filter != null && filter.area !=null){
    			if (filter.area.equals("world")){
    				if (!penya.country.equals("China")&&!penya.country.equals("USA")&&!penya.country.equals("Thailand")){
    					continue;
    				}
    			}else if (filter.area.equals("europe")){
    				if (!penya.country.equals("Sweden")
    						&&!penya.country.equals("France")&&!penya.country.equals("Italy")&&!penya.country.equals("UK")&&!penya.country.equals("Finland")&&!penya.country.equals("Portugal")){
    					continue;
    				}
    			}else if (filter.area.equals("spain")){
    				if (!penya.country.equals("Spain")){
    					continue;
    				}	
    			}else if (filter.area.equals("catalonia")){
    				if (!penya.country.equals("Catalonia")){
    					continue;
    				}	
    			}
    		}
    		if (filter != null && filter.yearFrom !=0 && penya.fundationYear < filter.yearFrom){
    			continue;
    		}
    		if (filter != null && filter.yearTo !=0 && penya.fundationYear > filter.yearTo){
    			continue;
    		}
    		if (filter != null && filter.numFansFrom !=0 && penya.numAffiliates < filter.numFansFrom){
    			continue;
    		}
    		if (filter != null && filter.numFansTo !=0 && penya.numAffiliates > filter.numFansTo){
    			continue;
    		}
    		if (i >= filter.lastPosition){
        		listPenyes.add(penya);	        		
    		}
    		i++;

    	}
    	return listPenyes;
    }
    public static PenyaDetail getPenyaDetail(String penyaId){
    	return dbPenyas.get(Longs.tryParse(penyaId));
    }
    
    public static PenyaDetail randomPenyaDetail(int id, PenyaDetail penya, String area){

    	penya.id = id;

    	penya.location = "undefined";
    	penya.country = randomCountry(area);
    	penya.logo = "/iPenyesResources/" + randomLogo();
    	penya.numAffiliates = randomSocios();
    	penya.fundationYear = randomYear();
    
 	    
 	    penya.info = new LinkedHashMap<String, String>();
 	    penya.info.put("President", "Rafael Escofet");
 	    penya.info.put("Vice president", "Maurici Lladó");
 	   	penya.info.put("Phone", "077 43"+ Math.random());
 	   	penya.info.put("Website", "http://www.miamiblaugrana.org");
 	    penya.info.put("email", "miamiblaugrana@ipenyes.com");
 	   	
 	    penya.socialNetworks = new LinkedHashMap<String, String>();
	    penya.socialNetworks.put("http://www.facebook.com", "../images/socialicons/facebook.png");
	    penya.socialNetworks.put("http://www.twitter.com", "../images/socialicons/twitter.png");
	    penya.socialNetworks.put("http://www.youtube.com", "../images/socialicons/youtube.png");
	    
	    penya.description = new LinkedHashMap<String, Object>();
	    penya.description.put("text1", "<br/><b>The FC Barcelona Supporters Club Miami</b> (Penya Barcelonista de Miami by its Catalan name) is officially authorized by FC Barcelona as a fan club dedicated to promote FC Barcelona name and brand in South Florida.<br/><br/>The Barcelona Supporters Club of Miami (Penya Barcelonista de Miami) was established on June 9, 2003. What began as an occasional get together by a group of Catalan friends (residing in Miami) to watch televised Barça games, became an official and organized Club.<br/><br/>");
	    LinkedHashMap<String, String> images =  new LinkedHashMap<>();
	    penya.description.put("images", images);
	    images.put("item1", "/iPenyesResources/images/photosPenyes/PBSuecia/25674_375479747599_1075420_n.jpg");
	    images.put("item2", "/iPenyesResources/images/photosPenyes/PBSuecia/26194_374642007599_7429551_n.jpg");
	    images.put("item3", "/iPenyesResources/images/photosPenyes/PBSuecia/525863_10150878688002600_479399075_n.jpg");
	    images.put("item4", "/iPenyesResources/images/photosPenyes/PBSuecia/579861_10150878690297600_1131012138_n.jpg");	    
	    penya.description.put("text2", "<br/><b>The Barcelona Fan Club of Miami, officially recognized by F.C. Barcelona</b> on February 2004 and assigned as the Penya #1588, was created by Pepe Martí, Ricard Mateu, Lluís Sandoval, Rafael Escofet, Toni Pich, Gregori Dolz and Genís Sànchez.<br/><br/>On a weekly basis, as long as games are televised, members of the Club gather to watch Barça play at Franz & Fritz Bierhaus in Coral Gables. We also have other activities, which we hope to increment with the help and cooperation of the members and followers, in order to become a reference for all FC Barcelona fans in the South Florida and the US.<br/><br/><b>You can request a membership</b> form in our web site filling out the contact us form in this web site. We hope you enjoy our web site and that you will become a member.<br/><br/>Força Barça!!! (Go Barça!)<br/><br/>");
	    
        return penya;
    }
       
    private static String randomCountry(String area){
        Random r = new Random();
        if (area.equals("Catalonia")){
        	return "Catalonia";
        }
        if (area.equals("Spain")){
        	return "Spain";
        }
        if (area.equals("Europe")){
            index = r.nextInt(europe.length);
            return europe[index];
        }
        if (area.equals("World")){
            index = r.nextInt(world.length);
            return world[index];
        }
        return "";
    } 
    
    private static String randomLogo(){
        Random r = new Random();
        return listEscudos[r.nextInt(listEscudos.length)];
    }  
    
    private static int randomYear(){

        int year = randBetween(1899, 2014);

        return year;
    }
    
	public static int randBetween(int start, int end) {
	    return start + (int)Math.round(Math.random() * (end - start));
	}   
	
    public static int randomSocios(){

        int nsocios = randBetween(1, 1000);

        return nsocios;
    }	
}
