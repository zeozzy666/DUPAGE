if(wfTask == "Submittal Intake" && wfStatus == "Completed")
{
	var submittalRound = parseInt(AInfo["Submittal Round"]);
	submittalRound += 1;
	editAppSpecific("Submittal Round", submittalRound);
	
	var engReviewDate; 
	var adminReviewDate;
	//this changes the workflow review task due date
	if(AInfo["Review Type"]=="10 Day")
	{
		editTaskDueDate("Wetland Review",dateAdd(null,7,"Y"));
		editTaskDueDate("Wetland Coordination", dateAdd(null,7,"Y"));
		engReviewDate = dateAdd(null,7,"Y");
		editTaskDueDate("Engineering Review",engReviewDate);	
		editTaskDueDate("Engineering Coordination", dateAdd(null,7,"Y"));
		editTaskDueDate("SESC/Grading Review",dateAdd(null,7,"Y"));
		adminReviewDate = dateAdd(null,10,"Y");
		editTaskDueDate("Administrative Review",dateAdd(null,10,"Y"));
	}

	if(AInfo["Review Type"]=="20 Day")
	{
		editTaskDueDate("Wetland Review",dateAdd(null,17,"Y"));
		editTaskDueDate("Wetland Coordination", dateAdd(null,17,"Y"));
		engReviewDate = dateAdd(null,17,"Y");
		editTaskDueDate("Engineering Review",engReviewDate);
		editTaskDueDate("Engineering Coordination", dateAdd(null,17,"Y"));
		editTaskDueDate("SESC/Grading Review",dateAdd(null,17,"Y"));
		adminReviewDate = dateAdd(null,20,"Y");
		editTaskDueDate("Administrative Review",dateAdd(null,20,"Y"));
	}		

	if(AInfo["Review Type"]=="40 Day")
	{
		editTaskDueDate("Wetland Review",dateAdd(null,37,"Y"));		
		editTaskDueDate("Wetland Coordination", dateAdd(null,37,"Y"));
		engReviewDate = dateAdd(null,37,"Y");
		editTaskDueDate("Engineering Review",engReviewDate);
		editTaskDueDate("Engineering Coordination", dateAdd(null,37,"Y"));
		editTaskDueDate("SESC/Grading Review",dateAdd(null,37,"Y"));
		adminReviewDate = dateAdd(null,40,"Y");
		editTaskDueDate("Administrative Review",dateAdd(null,40,"Y"));
	}
	
	//Send notification to applicant
	SubmittalIntakeNotification(adminReviewDate);		
}

//This needs to be here (again) because for some reason it removes the date on the coordination tasks. 
if(wfTask == "Wetland Review" && (wfStatus == "Approved" || wfStatus == "Additional Information Needed" || wfStatus == "Rejected" ))
{
	var reviewDate = getTaskDueDate("Wetland Review");
	reviewDate = (reviewDate.getMonth() + 1) + "/" + (reviewDate.getDate() + 1)+ "/" + reviewDate.getFullYear();	
	editTaskDueDate("Wetland Coordination", reviewDate);
}

if(wfTask == "Engineering Review" && (wfStatus == "Approved" || wfStatus == "Additional Information Needed" || wfStatus == "Rejected" ))
{
	var reviewDate = getTaskDueDate("Engineering Review");
	reviewDate = (reviewDate.getMonth() + 1) + "/" + (reviewDate.getDate() + 1)+ "/" + reviewDate.getFullYear();	
	editTaskDueDate("Engineering Coordination", reviewDate);
}

//EMAILS....

if(wfTask == "Certification or Authorization" && (wfStatus == "Approved" || wfStatus == "Approved with Conditions"))
{
	var params = aa.util.newHashtable();
	getAllContactsEmailAddressess(params);
	addParameter(params, "$$recordId$$", capId.getCustomID());
	addParameter(params, "$$commTrackNumber$$", cap.specialText);	
	addParameter(params, "$$applicationName$$", cap.getCapModel().getCapWorkDesModel().description);
	addParameter(params, "$$submittalIntakeCompleted$$", taskStatusDate("Submittal Intake"));
	sendNotification("","","","AA_STRMWTR_CERTIFICATION_LETTER",params,null);	
}

if(wfTask == "Rejection Notification" && wfStatus == "Notification Sent No Review Meeting")
{	
	var params = aa.util.newHashtable();
	getAllContactsEmailAddressess(params);
	addParameter(params, "$$recordId$$", capId.getCustomID());
	addParameter(params, "$$commTrackNumber$$", cap.specialText);
	addParameter(params, "$$applicationName$$", cap.getCapModel().getCapWorkDesModel().description);	
	addParameter(params, "$$submittalIntakeCompleted$$", taskStatusDate("Submittal Intake"));
	sendNotification("","","","AA_STRMWTR_RENEW_LETTER",params,null);
}


function SubmittalIntakeNotification(adminReviewDate)
{
	var params = aa.util.newHashtable(); 
	getAllContactsEmailAddressess(params);
	addParameter(params, "$$recordId$$", capId.getCustomID());
	addParameter(params, "$$commTrackNumber$$", cap.specialText);
	addParameter(params, "$$applicationName$$", cap.getCapModel().getCapWorkDesModel().description);
	addParameter(params, "$$currentDate$$", sysDateMMDDYYYY);
	addParameter(params, "$$adminReviewDate$$", adminReviewDate);
	sendNotification("","","","AA_STRMWTR_SUBMITTAL_INTAKE_COMPLETE",params,null);
}

//END EMAILS...

if(wfTask == "SESC/Grading Review" && (wfStatus == "Approved" || wfStatus == "Additional Information Needed" || wfStatus == "Rejected" ))
{
	setTask("SESC/Grading Review","N","Y");
	
	var gradingRound = parseInt(AInfo["Grading Review Round"]);
	//aa.print("Old grading round: " + gradingRound);
	gradingRound += 1;
	//aa.print("New grading round: " + gradingRound);
	editAppSpecific("Grading Review Round", gradingRound);	
	
	var wetlandRound = parseInt(AInfo["Wetland Coordination Round"]);
	//aa.print("Wetland round: " + wetlandRound);
	var engRound = parseInt(AInfo["Eng Coordination Round"]);
	//aa.print("Eng round: " + engRound);
	
	
	if((isTaskStatus("Engineering Coordination", "Additional Information Needed") || 
		isTaskStatus("Engineering Coordination", "Approved") || 
		isTaskStatus("Engineering Coordination", "Rejected")) &&
		(isTaskStatus("Wetland Coordination", "Additional Information Needed") || 
		isTaskStatus("Wetland Coordination", "Approved") || 
		isTaskStatus("Wetland Coordination", "Rejected")))
	{
		if(gradingRound == engRound && gradingRound == wetlandRound)
		{
			activateTask("Administrative Review");
			setAdminReviewDueDate();
		}			
	}	
}

if(wfTask == "Engineering Coordination" && (wfStatus == "Approved" || wfStatus == "Additional Information Needed" || wfStatus == "Rejected" ))
{	
	var engRound = parseInt(AInfo["Eng Coordination Round"]);
	//aa.print("Old eng round: " + engRound);
	engRound += 1;
	//aa.print("New eng round: " + engRound);
	editAppSpecific("Eng Coordination Round", engRound);	
	
	var wetlandRound = parseInt(AInfo["Wetland Coordination Round"]);
	//aa.print("Wetland round: " + wetlandRound);
	var gradingRound = parseInt(AInfo["Grading Review Round"]);
	//aa.print("Grading round: " + gradingRound);
	
	setTask("Engineering Coordination","N","Y");
	//Assigning again Due Date... Function above deletes it. 
	var reviewDate = getTaskDueDate("Engineering Review");
	reviewDate = (reviewDate.getMonth() + 1) + "/" + (reviewDate.getDate() + 1)+ "/" + reviewDate.getFullYear();	
	editTaskDueDate("Engineering Coordination", reviewDate);	
	
	if((isTaskStatus("Wetland Coordination", "Additional Information Needed") || 
		isTaskStatus("Wetland Coordination", "Approved") || 
		isTaskStatus("Wetland Coordination", "Rejected")) &&
		(isTaskStatus("SESC/Grading Review", "Additional Information Needed") || 
		isTaskStatus("SESC/Grading Review", "Approved") || 
		isTaskStatus("SESC/Grading Review", "Rejected")))
	{
		//Check if they are in same round before activating admin review. 
		if(engRound == wetlandRound && engRound == gradingRound)
		{			
			activateTask("Administrative Review");	
			setAdminReviewDueDate();
		}
	}
	//This is for partial waiver type(s)
	else if((isTaskStatus("Wetland Coordination", "Additional Information Needed") || 
		isTaskStatus("Wetland Coordination", "Approved") || 
		isTaskStatus("Wetland Coordination", "Rejected")) &&
		(!isTaskActive("SESC/Grading Review")))
		{
			if(engRound == wetlandRound)
			{				
				activateTask("Administrative Review");
				setAdminReviewDueDate();
			}				
		}			
	
	//Only Engineering Review - Complete waiver community
	if(!isTaskActive("Wetland Review") && !isTaskActive("Wetland Coordination") && !isTaskActive("SESC/Grading Review"))
	{
		//aa.print("en03");
		activateTask("Administrative Review");
		setAdminReviewDueDate();
	}
}

if(wfTask == "Wetland Coordination" && (wfStatus == "Approved" || wfStatus == "Additional Information Needed" || wfStatus == "Rejected" ))
{	
	var wetlandRound = parseInt(AInfo["Wetland Coordination Round"]);
	//aa.print("Old Wetland round: " + wetlandRound);
	wetlandRound += 1;
	//aa.print("New Wetland round: " + wetlandRound);
	editAppSpecific("Wetland Coordination Round", wetlandRound);
	
	var engRound = parseInt(AInfo["Eng Coordination Round"]);
	aa.print("Eng round: " + engRound);
	var gradingRound = parseInt(AInfo["Grading Review Round"]);
	aa.print("Grading round: " + gradingRound);
	
	setTask("Wetland Coordination","N","Y");
	//Assigning again Due Date... Function above deletes it. 
	var reviewDate = getTaskDueDate("Wetland Review");
	reviewDate = (reviewDate.getMonth() + 1) + "/" + (reviewDate.getDate() + 1)+ "/" + reviewDate.getFullYear();	
	editTaskDueDate("Wetland Coordination", reviewDate);
	
	if((isTaskStatus("Engineering Coordination", "Additional Information Needed") || 
		isTaskStatus("Engineering Coordination", "Approved") || 
		isTaskStatus("Engineering Coordination", "Rejected")) &&
		(isTaskStatus("SESC/Grading Review", "Additional Information Needed") || 
		isTaskStatus("SESC/Grading Review", "Approved") || 
		isTaskStatus("SESC/Grading Review", "Rejected")))
	{
		if(wetlandRound == engRound && wetlandRound == gradingRound)
		{
			activateTask("Administrative Review");
			setAdminReviewDueDate();
		}			
	}
	//This is for partial waiver type(s)
	else if((isTaskStatus("Engineering Coordination", "Additional Information Needed") || 
		isTaskStatus("Engineering Coordination", "Approved") || 
		isTaskStatus("Engineering Coordination", "Rejected")) &&
		(!isTaskActive("SESC/Grading Review")))
		{
			if(wetlandRound == engRound)
			{
				activateTask("Administrative Review");	
				setAdminReviewDueDate();
			}				
		}
	
	//Only Wetland Review - Complete waiver community
	if(!isTaskActive("Engineering Review") && !isTaskActive("Engineering Coordination") && !isTaskActive("SESC/Grading Review"))
	{
		activateTask("Administrative Review");
		setAdminReviewDueDate();
	}	
}


function setAdminReviewDueDate(){
	if(getTaskDueDate("Wetland Review") != "" || getTaskDueDate("Wetland Review") != null){
		var reviewDate = getTaskDueDate("Wetland Review");
		reviewDate = (reviewDate.getMonth() + 1) + "/" + (reviewDate.getDate() + 1)+ "/" + reviewDate.getFullYear();	
		editTaskDueDate("Administrative Review", reviewDate);
	}
	else if(getTaskDueDate("Engineering Review") != "" || getTaskDueDate("Engineering Review") != null){
		var reviewDate = getTaskDueDate("Engineering Review");
		reviewDate = (reviewDate.getMonth() + 1) + "/" + (reviewDate.getDate() + 1)+ "/" + reviewDate.getFullYear();	
		editTaskDueDate("Administrative Review", reviewDate);
	}	
}

if(wfTask == "Certification or Authorization" && wfStatus == "Approved")
{
    var currentDate = new Date();
    var expResult = aa.expiration.getLicensesByCapID(capId);
    var x = expResult.getOutput();
    var b1License = expResult.getOutput().b1Expiration;
    var currentDate = new Date();
    //Setting expiration date to 12/31/yyyy + 3
    dDate = new Date(currentDate.getFullYear() + 3,11,31);
    b1License.setExpDate(dDate);
    aa.expiration.editB1Expiration(x.getB1Expiration());
    aa.print(x.getExpDateString());
}
