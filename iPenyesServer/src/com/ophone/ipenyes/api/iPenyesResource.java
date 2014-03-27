package com.ophone.ipenyes.api;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.inject.Inject;
import com.google.inject.Singleton;

@Path("/getPenyes")
@Produces(MediaType.APPLICATION_JSON)
@Singleton  
public class iPenyesResource {

    @Inject
    public iPenyesResource() {

    }

    @GET 
    @Produces(MediaType.APPLICATION_JSON)
    public List<Penya> getJSONMsg() {
    	ArrayList<Penya> listPenyes = new ArrayList<Penya>();
    	for (int x=0;x<20;x++){
    		listPenyes.add(Utils.randomPenya());
    	}    		
        return listPenyes;
    }

}