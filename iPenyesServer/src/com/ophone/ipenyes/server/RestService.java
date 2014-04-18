package com.ophone.ipenyes.server;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Singleton;

import org.codehaus.jackson.jaxrs.JacksonJaxbJsonProvider;

import com.google.common.base.Function;
import com.google.common.base.Joiner;
import com.google.common.collect.Lists;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.ophone.ipenyes.api.iPenyesResource;
import com.sun.jersey.api.core.ResourceConfig;
import com.sun.jersey.guice.JerseyServletModule;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;
import com.sun.jersey.spi.container.ContainerResponseFilter;

public class RestService extends GuiceServletContextListener {
	 private final Function<Class<?>, String> fnClassName = new Function<Class<?>, String>() {
		    @Override
		    public String apply(Class<?> input) {
		      return input.getName();
		    }
		  };
		  
	  @Override
	    protected Injector getInjector() {
	        return Guice.createInjector(new JerseyServletModule() {
	            @Override
	            protected void configureServlets() {
	                /* bind the REST resources */
	                bind(iPenyesResource.class);
	                bind(JacksonJaxbJsonProvider.class).in(Singleton.class);  

	                // response filters
	                List<Class<? extends ContainerResponseFilter>> respFilters = Lists.newArrayList();
	                respFilters.add(CrossDomainResponseFilter.class);
	                
	                Map<String, String> params = new HashMap<String, String>(5);
	                params.put(ResourceConfig.PROPERTY_CONTAINER_RESPONSE_FILTERS, Joiner.on(";").join(Lists.transform(respFilters, fnClassName)));
	                
	                
	                serve("/*").with(GuiceContainer.class, params);
	            }
	        });
	    }
}