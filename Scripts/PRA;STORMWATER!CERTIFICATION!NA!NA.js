if(publicUser && (capIDString.toString().substr(2, 3) != "TMP"))
{	
	sendNotificationEmailPayment(capIDString,"MESSAGE_ACA_PAYMENT_RECEIVED");
}

function sendNotificationEmailPayment(acapIDString,templateName)
{
	var params = aa.util.newHashtable();	
	addParameter(params, "$$altID$$", acapIDString);	
	sendNotification("","","",templateName,params,new Array());	
}