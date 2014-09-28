package com.ophone.ipenyes.api;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import com.ophone.ipenyes.db.DBReader;

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
    public List<Penya> getJSONMsg(@QueryParam("lastPosition") int lastPosition, @QueryParam("area") String area, @QueryParam("yearFrom") int yearFrom, @QueryParam("yearTo") int yearTo, @QueryParam("search") String search) {   	
    	FilterPenya filter = new FilterPenya(lastPosition, area, yearFrom, yearTo, search);
        return DBReader.getPenyas(filter);
    }
    
    @GET 
    @Path("/loadDetailPenya")
    @Produces(MediaType.APPLICATION_JSON)
    public PenyaDetail loadDetailPenya(@QueryParam("penyaId") String penyaId) {  		 	
        return DBReader.getPenyaDetail(penyaId);
    }

}