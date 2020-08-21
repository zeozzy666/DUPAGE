//crb/mas - Sidwell - 1/30/18
// Added logic to handle Opt-Out communitities per issue tracker #26

if(AInfo["Communities"]=="Bartlett - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Burr Ridge - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Bensenville - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Clarendon Hills - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Darien - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Elmhurst - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Glendale Heights - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Hanover Park - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Itasca - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Lisle - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Lombard - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Naperville - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Oakbrook Terrace - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Roselle - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Wayne - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="West Chicago - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Westmont - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Wheaton - Partial") 
  deleteTask(capId,"SESC/Grading Review");

if(AInfo["Communities"]=="Winfield - Partial") 
  deleteTask(capId,"SESC/Grading Review");


//this is edits due date from review type ASI  

if(AInfo["Wetland Bank Fee-in-Lieu"] > 0)
{
	var value = AInfo["Wetland Bank Fee-in-Lieu"];
	addFee("STR_023", "STRMWTR_PERMIT", "FINAL", value, "N");
} 
 
//Opt-Out Waiver Communities

if(AInfo["Communities"] == "Aurora - Opt-Out")
{
	deleteTask(capId,"Engineering Review");
	deleteTask(capId,"SESC/Grading Review");
	deleteTask(capId,"Wetland Review");
	deleteTask(capId,"Wetland Coordination");
	deleteTask(capId,"Administrative Review");
	deleteTask(capId,"Additional Information Request");
	deleteTask(capId,"Certification or Authorization");
	deleteTask(capId,"Rejection Notification");
	deleteTask(capId,"Swap-Out Meeting");
	deleteTask(capId,"Stormwater Review Meeting");
	deleteTask(capId,"Resubmittal Meeting");
	deleteTask(capId,"Engineering Coordination");
}

if(AInfo["Communities"] == "St. Charles - Opt-Out")
{
	deleteTask(capId,"Engineering Review");
	deleteTask(capId,"SESC/Grading Review");
	deleteTask(capId,"Wetland Review");
	deleteTask(capId,"Wetland Coordination");
	deleteTask(capId,"Administrative Review");
	deleteTask(capId,"Additional Information Request");
	deleteTask(capId,"Certification or Authorization");
	deleteTask(capId,"Rejection Notification");
	deleteTask(capId,"Swap-Out Meeting");
	deleteTask(capId,"Stormwater Review Meeting");
	deleteTask(capId,"Resubmittal Meeting");
	deleteTask(capId,"Engineering Coordination");
}
