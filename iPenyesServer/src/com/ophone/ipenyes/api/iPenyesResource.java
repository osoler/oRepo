package com.ophone.ipenyes.api;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.google.inject.Inject;
import com.google.inject.Singleton;

@Path("/")
@Produces(MediaType.APPLICATION_JSON)
@Singleton  
public class iPenyesResource {

    @Inject
    public iPenyesResource() {

    }

    @GET 
    @Path("/getPenyes")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Penya> getJSONMsg() {   		
        return Utils.getPenyas();
    }
    
    @GET 
    @Path("/loadDetailPenya")
    @Produces(MediaType.APPLICATION_JSON)
    public PenyaDetail loadDetailPenya(@QueryParam("penyaId") String penyaId) {  		 	
        return Utils.getPenyaDetail(penyaId);
    }

}