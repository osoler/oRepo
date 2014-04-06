package com.ophone.ipenyes.api;

public class FilterPenya {


	public FilterPenya(String area, int yearFrom, int yearTo, int numFansFrom, int numFansTo){
		this.area  = area;
		this.yearFrom  = yearFrom;
		this.yearTo  = yearTo;
		this.numFansFrom  = numFansFrom;
		this.numFansTo  = numFansTo;
	}
	
	public int yearFrom = -1;
	public int yearTo = -1;
	public int numFansFrom = -1;
	public int numFansTo = -1;	
	public String area = null;

	

}
