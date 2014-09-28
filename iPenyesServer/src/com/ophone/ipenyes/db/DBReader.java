package com.ophone.ipenyes.db;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import com.google.common.primitives.Longs;
import com.ophone.ipenyes.api.FilterPenya;
import com.ophone.ipenyes.api.Penya;
import com.ophone.ipenyes.api.PenyaDetail;

public class DBReader {
	private static LinkedHashMap<Long, PenyaDetail> dbPenyas;
	private final static String CATALONIA = "Catalonia";
	private final static String SPAIN = "Spain";
	private final static String WORLD = "World";

    private static int maxPenyes = 100;    
    static{
    	dbPenyas = new LinkedHashMap<Long, PenyaDetail>();
    	
    	XMLParser parser = new XMLParser();
    	InputStream p1 = DBReader.class.getClassLoader().getResourceAsStream("PenyesCAT.xml");
    	List<PenyaDetail> listPenyas = parser.getAllUserNames(p1, CATALONIA);
    	
    	for (int x=0;x<listPenyas.size();x++){
    		listPenyas.get(x).id = x;
    		dbPenyas.put(listPenyas.get(x).id, listPenyas.get(x));
    	}   	
    	InputStream p2 = DBReader.class.getClassLoader().getResourceAsStream("PenyesESP.xml");
    	List<PenyaDetail> listPenyas2 = parser.getAllUserNames(p2, SPAIN);
    	for (int x=0;x<listPenyas2.size();x++){
    		listPenyas2.get(x).id =listPenyas.size()+x;
    		dbPenyas.put(listPenyas2.get(x).id, listPenyas2.get(x));
    	} 
    	InputStream p3 = DBReader.class.getClassLoader().getResourceAsStream("PenyesWORLD.xml");
    	List<PenyaDetail> listPenyas3 = parser.getAllUserNames(p3, WORLD);

    	for (int x=0;x<listPenyas3.size();x++){
    		listPenyas3.get(x).id =listPenyas.size()+listPenyas2.size()+ x;
    		dbPenyas.put(listPenyas3.get(x).id, listPenyas3.get(x));
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
    		
    		if (filter != null && filter.search !=null && !"undefined".equals(filter.search) && !"".equals(filter.search)){
    			if (!penya.name.toLowerCase().contains(filter.search.toLowerCase())){
    				continue;
    			}
    		}

    		if (filter != null && filter.area !=null){
    			if (!filter.area.toLowerCase().equals(penya.area.toLowerCase())){
    				continue;
    			}
    		}
    		if (filter != null && filter.yearFrom !=0 && penya.fundationYear < filter.yearFrom){
    			continue;
    		}
    		if (filter != null && filter.yearTo !=0 && penya.fundationYear > filter.yearTo){
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
    
    public static String getUpdate(){
    	return "1";
    }
	
}
