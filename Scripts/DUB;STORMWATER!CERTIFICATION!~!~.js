if(publicUser && (capIDString.toString().substr(2, 3) != "TMP"))
{	
	sendNotificationEmailDUB(capIDString,"MESSAGE_ACA_DOCUMENT_UPLOAD");
}

function sendNotificationEmailDUB(acapIDString,templateName)
{
	var params = aa.util.newHashtable();	
	addParameter(params, "$$altID$$", acapIDString);	
	sendNotification("","","",templateName,params,new Array());	
}