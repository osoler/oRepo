package com.ophone.ipenyes.api;

public class FilterPenya {


	public FilterPenya(String area, int yearFrom, int yearTo, int numFansFrom, int numFansTo){
		this.area  = area;
		this.yearFrom  = yearFrom;
		this.yearTo  = yearTo;
		this.numFansFrom  = numFansFrom;
		this.numFansTo  = numFansTo;
	}
	
	public int yearFrom = 0;
	public int yearTo = 0;
	public int numFansFrom = 0;
	public int numFansTo = 0;	
	public String area = null;

	

}
