package com.ophone.ipenyes.api;

public class FilterPenya {


	public FilterPenya(int lastPosition, String area, int yearFrom, int yearTo, int numFansFrom, int numFansTo){
		this.lastPosition  = lastPosition;
		this.area  = area;
		this.yearFrom  = yearFrom;
		this.yearTo  = yearTo;
		this.numFansFrom  = numFansFrom;
		this.numFansTo  = numFansTo;
	}
	
	public int lastPosition = 0;
	public int yearFrom = 0;
	public int yearTo = 0;
	public int numFansFrom = 0;
	public int numFansTo = 0;	
	public String area = null;

	

}
