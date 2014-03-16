package com.ophone;

import java.util.Random;

public class Utils {
    private static int index = 1; 
    private static int index2 = 1; 
    private static String[] list = {"Barcelona", "Badalona", "Vallirana", "Lleida", "Tarragona", "Girona", "Vilafranca", "Cervelló", "Vic", "Palma de Mallorca"};
    private static String[] listCountry = {"Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "España"};
    private static String[] listEscudos = {"http://www.geneaid.com/sites/default/files/imagecache/product_full/protein%20loading%20dye.JPG", "/images/escudos/0001.ABPenyaAnguera-icon.png","/images/escudos/0003.PBSantFruitosBages-icon.png", "/images/escudos/0004.PBBarcino-icon.png", "/images/escudos/0006.PBRipollet-icon.png", "/images/escudos/0008.PBCincCopes-icon.png", "/images/escudos/0007.UBCatalonia-icon.png", "/images/escudos/0010.ADBCollblanc-icon.png", "/images/escudos/0983.PBSuecia-icon.png"};
    
    public static Penya randomPenya(){
    	Penya penya = new Penya();
    	penya.id = index++;
    	penya.name = "P.B Random " + penya.id;
    	penya.location = randomCity();
    	penya.country = randomCountry();
    	penya.logo = randomLogo();
    	penya.numAffiliates = randomSocios();
    	penya.fundationYear = randomYear();
    	
    	return penya;
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
