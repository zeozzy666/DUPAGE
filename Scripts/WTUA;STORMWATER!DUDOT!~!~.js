try {

if(wfTask == "Review Coordination" && wfStatus == "Close")
{	
	var emailSendFrom = "noreply@accela.com";
	var params = aa.util.newHashtable();
	
	contactArray = getContactArray();
	var contactEmails = "";

	for(ca in contactArray) 
	{
		thisContact = contactArray[ca];
		//Send notification to contact if there is an email address
		if(thisContact["email"] != "")
		{	contactEmail = thisContact["email"];	
			addParameter(params, "$$recordId$$", capId.getCustomID());
			addParameter(params, "$$commTrackNumber$$", cap.specialText);
			addParameter(params, "$$applicationName$$", cap.getCapModel().getCapWorkDesModel().description);	
			addParameter(params, "$$submittalIntakeCompleted$$", taskStatusDate("Application Submittal"));
			sendNotification(emailSendFrom,contactEmail,"","AA_STRMWTR_DuDOT",params,null);
		}
	}
}
}catch (err) {
	logDebug("A JavaScript Error occurred: " + err.message + " In Line " + err.lineNumber + " of " + err.fileName + " Stack " + err.stack);
}