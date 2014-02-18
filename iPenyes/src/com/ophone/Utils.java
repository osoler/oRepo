package com.ophone;

import java.util.Random;

public class Utils {
    private static int index = 1; 
    private static int index2 = 1; 
    private static String[] list = {"Barcelona", "Badalona", "Vallirana", "Lleida", "Tarragona", "Girona", "Vilafranca", "Cervelló", "Vic", "Palma de Mallorca"};
    private static String[] listCountry = {"Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "Catalunya", "España"};
    private static String[] listEscudos = {"0002.LaGranada-icon.png", "0001.ABPenyaAnguera-icon.png","0003.PBSantFruitosBages-icon.png", "0004.PBBarcino-icon.png", "0006.PBRipollet-icon.png", "0008.PBCincCopes-icon.png", "0007.UBCatalonia-icon.png", "0010.ADBCollblanc-icon.png", "0983.PBSuecia-icon.png"};
    
    public static String randomName(){
        return "P.B Random " + index++;
    }
    
    public static String randomCity(){
        Random r = new Random();
        index2 = r.nextInt(list.length);
        return list[index2];
    }    
    public static String randomCountry(){
        return listCountry[index2];
    }  
    public static String randomEscudo(){
        Random r = new Random();
        return listEscudos[r.nextInt(listEscudos.length)];
    }  
    public static int randomYear(){

        int year = randBetween(1899, 2013);

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
