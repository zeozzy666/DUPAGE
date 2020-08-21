/*#########################################################
#####	Script: ASA:Stormwater!~!~!~
#####	Author: Jose L Yanez
#####	Date  : 02/13/2019 
#####	Notes : 
#########################################################*/
if(matches(currentUserID,'ADMIN'))
{
	showDebug = 3; 
	showMessage= true;
}

aa.print("GIS DATA LOG");

if(	appTypeString == 'Stormwater/Certification/NA/NA'	|| 
	appTypeString == 'Stormwater/Drainage Review/NA/NA'	|| 
	appTypeString == 'Stormwater/PCBMP for Incorporated/NA/NA')
{
	var GISRiverBasin01	= getGISInfo("Accela/AccelaServiceData","ParcelsCurrent_RealEstateCurrent","River_Basin1");
	var GISRiverBasin02	= getGISInfo("Accela/AccelaServiceData","ParcelsCurrent_RealEstateCurrent","River_Basin2");
	var GISRiverBasin03	= getGISInfo("Accela/AccelaServiceData","ParcelsCurrent_RealEstateCurrent","River_Basin3");
	var GISRiverBasin04	= getGISInfo("Accela/AccelaServiceData","ParcelsCurrent_RealEstateCurrent","River_Basin4");

if(GISRiverBasin01)
{
	editAppSpecific('River Basin 1', GISRiverBasin01.toString());
}
else
{
	editAppSpecific('River Basin 1', 'N/A');
}

if(GISRiverBasin02)
{
	editAppSpecific('River Basin 2', GISRiverBasin02.toString());
}
else
{
	editAppSpecific('River Basin 2', 'N/A');
}

if(GISRiverBasin03)
{
	editAppSpecific('River Basin 3', GISRiverBasin03.toString());
}
else
{
	editAppSpecific('River Basin 3', 'N/A');
}

if(GISRiverBasin04)
{
	editAppSpecific('River Basin 4', GISRiverBasin04.toString());
}
else
{
	editAppSpecific('River Basin 4', 'N/A');
}

aa.print("River Basin 1: " + AInfo['River Basin 1'] + " | " + GISRiverBasin01);
aa.print("River Basin 2: " + AInfo['River Basin 2'] + " | " + GISRiverBasin02);
aa.print("River Basin 3: " + AInfo['River Basin 3'] + " | " + GISRiverBasin03);
aa.print("River Basin 4: " + AInfo['River Basin 4'] + " | " + GISRiverBasin04);
}
