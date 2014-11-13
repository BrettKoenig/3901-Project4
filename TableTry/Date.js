/*
Took html from existing site using the console and copied that into ShareefSite.html, 
Added a javascript link in the html file to this js file and then very simple html for a place to add the link for the next meeting
Added the collapse, expand button in the html document and a js function is called when that button is pressed in the html doc
Added an id to each row of the table in the html doc
Extended links that shareef had in html so that externally loaded resources would load from their internet locations (i.e. in front of all links to /~paolo we added cse.ohio-state.edu) in html
All other added code in this file
*/


//make a date object for each meeting to compare to todays date
var d1 = Date.parse("January 6, 2014");
var d2 = Date.parse("January 8, 2014");
var d3 = Date.parse("January 10, 2014");
var d4 = Date.parse("January 13, 2014");
var d5 = Date.parse("January 15, 2014");
var d6 = Date.parse("January 17, 2014");
var d7 = Date.parse("January 20, 2014");
var d8 = Date.parse("January 22, 2014");
var d9 = Date.parse("January 24, 2014");
var d10 = Date.parse("January 27, 2014");
var d11 = Date.parse("January 29, 2014");
var d12 = Date.parse("January 31, 2014");
var d13 = Date.parse("February 3, 2014");
var d14 = Date.parse("February 5, 2014");
var d15 = Date.parse("February 7, 2014");
var d16 = Date.parse("February 10, 2014");
var d17 = Date.parse("February 12, 2014");
var d18 = Date.parse("February 14, 2014");
var d19 = Date.parse("February 17, 2014");
var d20 = Date.parse("February 19, 2014");
var d21 = Date.parse("February 21, 2014");
var d22 = Date.parse("February 24, 2014");
var d23 = Date.parse("February 26, 2014");
var d24 = Date.parse("February 28, 2014");
var d25 = Date.parse("March 3, 2014");
var d26 = Date.parse("March 5, 2014");
var d27 = Date.parse("March 7, 2014");
var d28 = Date.parse("March 10, 2014");
var d29 = Date.parse("March 12, 2014");
var d30 = Date.parse("March 14, 2014");
var d31 = Date.parse("March 17, 2014");
var d32 = Date.parse("March 19, 2014");
var d33 = Date.parse("March 21, 2014");
var d34 = Date.parse("March 24, 2014");
var d35 = Date.parse("March 26, 2014");
var d36 = Date.parse("March 28, 2014");
var d37 = Date.parse("March 31, 2014");
var d38 = Date.parse("April 2, 2014");
var d39 = Date.parse("April 4, 2014");
var d40 = Date.parse("April 7, 2014");
var d41 = Date.parse("April 9, 2014");
var d42 = Date.parse("April 11, 2014");
var d43 = Date.parse("April 14, 2014");
var d44 = Date.parse("April 16, 2014");
var d45 = Date.parse("April 18, 2014");
var d46 = Date.parse("April 21, 2014");

//make a date object for todays date and make correct conversion
var today = new Date();
var todayFormat = Date.parse(today);
//make array with all class meeting dates to iterate through
var DateArray = new Array(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31, d32, d33, d34, d35, d36, d37, d38, d39, d40, d41, d42, d43, d44, d45, d46);

window.onload=function(){
	
	//on window load add find the next class meeting in the array
	var i = 0;
	while(todayFormat > DateArray[i])
	{
		i++;
	}
	//add html to link text to the next meeting date in table
	document.getElementById("addHere").innerHTML="<a href=\"#" + i + "\">Next Meeting</a>";
};

function toggleTable(link)
{
	
	var iTwo = 0;
	//iterate through array of all meeting dates to find the next one and hide all previous meetings if currently showing, if currently hidden show all previous meetings
	while(todayFormat > DateArray[iTwo])
	{
		//get document element and if it's current display style is none, change it to empty show it shows, if it's not 'none' make it 'none' so that it doesn't show
		document.getElementById(iTwo).style.display = document.getElementById(iTwo).style.display == "none" ? "" : "none";
		iTwo++;
	}
	//toggle button to say collapse or expand based on what needs to happen with table
  document.getElementById(link).value = document.getElementById(link).value == "[+] Expand" ? "[-] Collapse" : "[+] Expand";
};
