package com.ophone.ipenyes.server;

import javax.inject.Singleton;

import org.codehaus.jackson.jaxrs.JacksonJaxbJsonProvider;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.ophone.ipenyes.api.iPenyesResource;
import com.sun.jersey.guice.JerseyServletModule;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;

public class MyGuiceConfig extends GuiceServletContextListener {
	
	  @Override
	    protected Injector getInjector() {
	        return Guice.createInjector(new JerseyServletModule() {
	            @Override
	            protected void configureServlets() {
	                /* bind the REST resources */
	                bind(iPenyesResource.class);
	                bind(JacksonJaxbJsonProvider.class).in(Singleton.class);  

	                serve("/*").with(GuiceContainer.class);
	            }
	        });
	    }
}