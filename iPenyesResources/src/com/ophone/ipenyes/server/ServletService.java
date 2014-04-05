package com.ophone.ipenyes.server;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;

public class ServletService extends GuiceServletContextListener {
	
	  @Override
	    protected Injector getInjector() {
	        return Guice.createInjector(new ServletModule());
	    }
}