package com.ophone.ipenyes.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Random;

import com.google.common.primitives.Longs;

public class Utils {
	private static HashMap<Long, PenyaDetail> dbPenyas;
    private static int index = 1; 
    private static int index2 = 1; 
    private static String[] list = {"Beijing", "Tokio", "Vallirana", "Lleida", "Castell�n", "Girona", "Vilafranca", "Cervell�", "Vic", "Stockholm"};
    private static String[] listCountry = {"China", "Japan", "Catalonia", "Catalonia", "Spain", "Catalonia", "Spain", "Catalonia", "Catalonia", "Sweden"};
    private static String[] listEscudos = {"/images/escudos/0002.LaGranada-icon.png", "/images/escudos/0001.ABPenyaAnguera-icon.png","/images/escudos/0003.PBSantFruitosBages-icon.png", "/images/escudos/0004.PBBarcino-icon.png", "/images/escudos/0006.PBRipollet-icon.png", "/images/escudos/0008.PBCincCopes-icon.png", "/images/escudos/0007.UBCatalonia-icon.png", "/images/escudos/0010.ADBCollblanc-icon.png", "/images/escudos/0983.PBSuecia-icon.png"};
    
    static{
    	dbPenyas = new HashMap<Long, PenyaDetail>();
    	
    	for (int x=0;x<20;x++){
    		PenyaDetail penyaDetail = Utils.randomPenyaDetail();
    		dbPenyas.put(penyaDetail.id, penyaDetail);
    	} 
    }
    public static List<Penya> getPenyas(FilterPenya filter){   
    	List<Penya> listPenyes = new ArrayList<Penya>();
    	for(Penya penya: dbPenyas.values()){
    		if (filter != null && filter.area !=null){
    			if (filter.area.equals("europe")){
    				if (!penya.country.equals("Catalonia")&&!penya.country.equals("Spain")&&!penya.country.equals("Sweden")){
    					continue;
    				}
    			}else if (filter.area.equals("spain")){
    				if (!penya.country.equals("Catalonia")&&!penya.country.equals("Spain")){
    					continue;
    				}	
    			}else if (filter.area.equals("catalonia")){
    				if (!penya.country.equals("Catalonia")){
    					continue;
    				}	
    			}
    		}
    		if (filter != null && (filter.yearFrom !=-1 || filter.yearTo !=-1)){
    			
    		}
    		if (filter != null && (filter.numFansFrom !=-1 || filter.numFansTo !=-1)){
    			
    		} 		
    		listPenyes.add(penya);
    	}
    	return listPenyes;
    }
    public static PenyaDetail getPenyaDetail(String penyaId){
    	return dbPenyas.get(Longs.tryParse(penyaId));
    }
    
    public static PenyaDetail randomPenyaDetail(){
    	PenyaDetail penya = new PenyaDetail();
    	penya.id = index++;
    	penya.name = "P.B Random " + penya.id;
    	penya.location = randomCity();
    	penya.country = randomCountry();
    	penya.logo = "/iPenyesResources/" + randomLogo();
    	penya.numAffiliates = randomSocios();
    	penya.fundationYear = randomYear();
    	
    	double randX = Math.random();
 	    double randY = Math.random();
 	    randX *= (randX * 1000000) % 2 == 0 ? 1 : -1;
 	    randY *= (randY * 1000000) % 2 == 0 ? 1 : -1;	
 	    penya.x = 60 + (randX * 0.5);
 	    penya.y = 17 + (randY * 0.5); 
 	    
 	    penya.info = new LinkedHashMap<String, String>();
 	    penya.info.put("President", "Rafael Escofet");
 	    penya.info.put("Vice president", "Maurici Llad�");
 	   	penya.info.put("Phone", "077 43"+ Math.random());
 	   	penya.info.put("Website", "http://www.miamiblaugrana.org");
 	   	
 	    penya.socialNetworks = new LinkedHashMap<String, String>();
	    penya.socialNetworks.put("mailto:fcb@ipenyes.com", "../images/20-social-media-icons/57x57/email.png");
	    penya.socialNetworks.put("http://www.facebook.com", "../images/20-social-media-icons/57x57/facebook.png");
	    penya.socialNetworks.put("http://www.twitter.com", "../images/20-social-media-icons/57x57/twitter.png");
	    penya.socialNetworks.put("http://www.youtube.com", "../images/20-social-media-icons/57x57/youtube.png");
	    
	    penya.description = new LinkedHashMap<String, Object>();
	    penya.description.put("text1", "<br/><b>The FC Barcelona Supporters Club Miami</b> (Penya Barcelonista de Miami by its Catalan name) is officially authorized by FC Barcelona as a fan club dedicated to promote FC Barcelona name and brand in South Florida.<br/><br/>The Barcelona Supporters Club of Miami (Penya Barcelonista de Miami) was established on June 9, 2003. What began as an occasional get together by a group of Catalan friends (residing in Miami) to watch televised Bar�a games, became an official and organized Club.<br/><br/>");
	    HashMap<String, String> images =  new HashMap<>();
	    penya.description.put("images", images);
	    images.put("item1", "/iPenyesResources/images/photosPenyes/PBSuecia/25674_375479747599_1075420_n.jpg");
	    images.put("item2", "/iPenyesResources/images/photosPenyes/PBSuecia/26194_374642007599_7429551_n.jpg");
	    images.put("item3", "/iPenyesResources/images/photosPenyes/PBSuecia/525863_10150878688002600_479399075_n.jpg");
	    images.put("item4", "/iPenyesResources/images/photosPenyes/PBSuecia/579861_10150878690297600_1131012138_n.jpg");	    
	    penya.description.put("text2", "<br/><b>The Barcelona Fan Club of Miami, officially recognized by F.C. Barcelona</b> on February 2004 and assigned as the Penya #1588, was created by Pepe Mart�, Ricard Mateu, Llu�s Sandoval, Rafael Escofet, Toni Pich, Gregori Dolz and Gen�s S�nchez.<br/><br/>On a weekly basis, as long as games are televised, members of the Club gather to watch Bar�a play at Franz & Fritz Bierhaus in Coral Gables. We also have other activities, which we hope to increment with the help and cooperation of the members and followers, in order to become a reference for all FC Barcelona fans in the South Florida and the US.<br/><br/><b>You can request a membership</b> form in our web site filling out the contact us form in this web site. We hope you enjoy our web site and that you will become a member.<br/><br/>For�a Bar�a!!! (Go Bar�a!)<br/><br/>");
	    
        return penya;
    }
   
    public static Penya randomPenya(){    	
    	return (Penya)randomPenyaDetail();
    }
    
    private static String randomCity(){
        Random r = new Random();
        index2 = r.nextInt(list.length);
        return list[index2];
    } 
    
    private static String randomCountry(){
        return listCountry[index2];
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
