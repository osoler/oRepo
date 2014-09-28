package com.ophone.ipenyes.api;

public class FilterPenya {


	public FilterPenya(int lastPosition, String area, int yearFrom, int yearTo, String search){
		this.lastPosition  = lastPosition;
		this.area  = area;
		this.yearFrom  = yearFrom;
		this.yearTo  = yearTo;
		this.search  = search;
	}
	
	public int lastPosition = 0;
	public int yearFrom = 0;
	public int yearTo = 0;
	public String search = null;	
	public String area = null;

	

}
