//Get capIDScriptModel and patient email address for notifications
//showDebug = true; 
 
 var d = new Date();
d.setFullYear(d.getFullYear());
var thisDate = jsDateToMMDDYYYY(d);
//aa.print(d); 
 var n = new Date();
n.setFullYear(n.getFullYear() + 1);
var futureDate = jsDateToMMDDYYYY(n);


    var itemCap = capId;
    var id1 = itemCap.ID1;
    var id2 = itemCap.ID2;
    var id3 = itemCap.ID3;
    //get capIDScriptModel to pass into aa.document.sendEmailAndSaveAsDocument
    var capIDScriptModel = aa.cap.createCapIDScriptModel(id1, id2, id3);

	stormContact = getContactArray();
	for(ca in stormContact) {
		sContact = stormContact[ca];
		
		var contactFirstName = sContact["firstName"];
        var contactLastName = sContact["lastName"];
		if (sContact["contactType"] == "Applicant") {
			logDebug("DOT Contact: ");
			//conType = conType.toLowerCase();
            var stormContactEmail = sContact["email"];
            logDebug("DOT Contact Email = " + stormContactEmail);
        }
    }
     var emailParameters = aa.util.newHashtable();
	 var reportParameters = aa.util.newHashMap();
    reportParameters.put("Record_ID", capId.getCustomID());
	 var reportAttach = true;
    var capIDString = capId.getCustomID();
	
     var acaUrl = "https://aca-supp.accela.com/DUPAGE"
				var acaPaymentUrl = getACARecordURL3(acaUrl);
                var capIDScriptModel = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var altId = capId.getCustomID();
                var cap = aa.cap.getCap(capId).getOutput();
                var recordAlias = cap.getCapType().getAlias();
                var contactFullName = contactFirstName + " " + contactLastName;
				emailFrom = "";
                emailParameters.put("$$altID$$", altId);
		        emailParameters.put("$$recordAlias$$", recordAlias);
                //emailParameters.put("$$contactFirstName$$", contactFirstName);
                //emailParameters.put("$$contactLastName$$", contactLastName);
				emailParameters.put("$$ContactFullName$$", contactFullName);
                
				emailParameters.put("$$acaRecordUrl$$", acaPaymentUrl);
    

	getContactParams4Notification2(emailParameters,"Applicant");
	getDepartmentParams4Notification(emailParameters, "DOT");
try{
if(appStatus == "Permit Issued"){
    editAppSpecific("Permit Issued Date", thisDate); 
    editAppSpecific("Permit Expiration Date", futureDate); 
    var sysDateYYYYMMDD = dateFormatted(sysDate.getMonth(),sysDate.getDayOfMonth(),sysDate.getYear(),"YYYY-MM-DD");
    
    var attachPermitResult = runReportAndSendAsync("DOT Permit", "DOT", capId, reportParameters, "AUTO_SENDER@accela.com", stormContactEmail,"SS_PERMIT_ISSUANCE", emailParameters, reportAttach);
    logDebug("Permit report for " + capIDString + " : " + attachPermitResult)
    }
    
}

catch(err){
	logDebug("An error has occurred in ASUA:DOT: Test result failed to send: " + err.message);
	logDebug(err.stack);
}

function getContactParams4Notification2(params,conType) {
	// pass in a hashtable and it will add the additional parameters to the table
	// pass in contact type to retrieve

	contactArray = getContactArray();
	for(ca in contactArray) {
		thisContact = contactArray[ca];
		if (thisContact["contactType"] == conType) {
			logDebug("IN CONPARAM: ");
			conType = conType.toLowerCase();
            var thisContactEmail = thisContact["email"];
			addParameter(params, "$$" + conType + "LastName$$", thisContact["lastName"]);
			addParameter(params, "$$" + conType + "FirstName$$", thisContact["firstName"]);
			addParameter(params, "$$" + conType + "MiddleName$$", thisContact["middleName"]);
			addParameter(params, "$$" + conType + "BusinesName$$", thisContact["businessName"]);
			addParameter(params, "$$" + conType + "ContactSeqNumber$$", thisContact["contactSeqNumber"]);
			addParameter(params, "$$" + conType + "$$", thisContact["contactType"]);
			addParameter(params, "$$" + conType + "Relation$$", thisContact["relation"]);
			addParameter(params, "$$" + conType + "Phone1$$", thisContact["phone1"]);
			addParameter(params, "$$" + conType + "Phone2$$", thisContact["phone2"]);
			addParameter(params, "$$" + conType + "Email$$", thisContact["email"]);
			addParameter(params, "$$" + conType + "City$$", thisContact["city"]);
			addParameter(params, "$$" + conType + "State$$", thisContact["state"]);
			addParameter(params, "$$" + conType + "Zip$$", thisContact["zip"]);
			addParameter(params, "$$" + conType + "Fax$$", thisContact["fax"]);
			addParameter(params, "$$" + conType + "Notes$$", thisContact["notes"]);
			addParameter(params, "$$" + conType + "FullName$$", thisContact["fullName"]);
		}
	}
	return params;	
}

function getACARecordParam4Notification2(params,acaUrl) {

	itemCap = (arguments.length == 3) ? arguments[2] : capId;

	addParameter(params, "$$acaRecordUrl$$", getACARecordURL2(acaUrl,itemCap));

	return params;	

}

function getACARecordURL2(acaUrl) {
	itemCap = (arguments.length == 2) ? arguments[1] : capId;
	var enableCustomWrapper = lookup("ACA_CONFIGS","ENABLE_CUSTOMIZATION_PER_PAGE");
	var acaRecordUrl = "";
	var id1 = itemCap.ID1;
 	var id2 = itemCap.ID2;
 	var id3 = itemCap.ID3;
 	var itemCapModel = aa.cap.getCap(itemCap).getOutput().getCapModel();

   	acaRecordUrl = acaUrl + "/urlrouting.ashx?type=1000";   
	acaRecordUrl += "&Module=" + itemCapModel.getModuleName();
	acaRecordUrl += "&capID1=" + id1 + "&capID2=" + id2 + "&capID3=" + id3;
	acaRecordUrl += "&agencyCode=" + aa.getServiceProviderCode();
	if(matches(enableCustomWrapper,"Yes","YES")) acaRecordUrl += "&FromACA=Y";

   	return acaRecordUrl;

} 

function getACARecordURL3(acaUrl) {
	itemCap = (arguments.length == 2) ? arguments[1] : capId;
	var enableCustomWrapper = lookup("ACA_CONFIGS","ENABLE_CUSTOMIZATION_PER_PAGE");
	var acaRecordUrl = "";
	var id1 = itemCap.ID1;
 	var id2 = itemCap.ID2;
 	var id3 = itemCap.ID3;
 	var itemCapModel = aa.cap.getCap(itemCap).getOutput().getCapModel();

   	acaRecordUrl = acaUrl + "/urlrouting.ashx?type=1000";   
	acaRecordUrl += "&Module=" + itemCapModel.getModuleName();
	acaRecordUrl += "&capID1=" + id1 + "&capID2=" + id2 + "&capID3=" + id3;
	acaRecordUrl += "&agencyCode=" + aa.getServiceProviderCode();
	if(matches(enableCustomWrapper,"Yes","YES")) acaRecordUrl += "&FromACA=Y";

   	return acaRecordUrl;

}
   


function getDepartmentParams4Notification(eParamsHash, deptName) {
	if (deptName == null) {
		return eParamsHash;
	}
	var rptInfoStdArray = getStandardChoiceArray("DEPARTMENT_INFORMATION");
	var foundDept = false;

	var valDesc = null;
	var defaultDeptValDesc = null;
	for (s in rptInfoStdArray) {
		if (rptInfoStdArray[s]["active"] == "A" && String(rptInfoStdArray[s]["value"]).toUpperCase() == String(deptName).toUpperCase()) {
			valDesc = rptInfoStdArray[s]["valueDesc"];
			if (isEmptyOrNull(valDesc)) {
				return eParamsHash;
			}
			valDesc = String(valDesc).split("|");
			foundDept = true;
			break;
		}//active and name match
		if (rptInfoStdArray[s]["active"] == "A" && String(rptInfoStdArray[s]["value"]).toUpperCase() == "DEFAULT") {
			defaultDeptValDesc = rptInfoStdArray[s]["valueDesc"];
			if (isEmptyOrNull(valDesc)) {
				return eParamsHash;
			}
			defaultDeptValDesc = String(defaultDeptValDesc).split("|");
		}
	}//all std-choice rows

	if (!foundDept) {
		// No department found, use default values
		valDesc = defaultDeptValDesc;
	}

	if (!isEmptyOrNull(valDesc)) {
		for (e in valDesc) {
			var parameterName = "";
			var tmpParam = valDesc[e].split(":");
			if (tmpParam[0].indexOf("$$") < 0)
				parameterName = "$$" + tmpParam[0].replace(/\s+/g, '') + "$$";
			else
				parameterName = tmpParam[0];

			addParameter(eParamsHash, parameterName, tmpParam[1]);
		}//for all parameters in each row
	}//has email parameters

	return eParamsHash;
}

function getStandardChoiceArray(stdChoice) {
	var cntItems = 0;
	var stdChoiceArray = new Array();
	var bizDomScriptResult = aa.bizDomain.getBizDomain(stdChoice);
	if (bizDomScriptResult.getSuccess()) {
		var bizDomScriptObj = bizDomScriptResult.getOutput();
		if (bizDomScriptObj != null) {
			cntItems = bizDomScriptObj.size();
			logDebug("getStdChoiceArray: " + stdChoice + " size = " + cntItems);
			if (cntItems > 0) {
				var bizDomScriptItr = bizDomScriptObj.iterator();
				while (bizDomScriptItr.hasNext()) {
					var bizBomScriptItem = bizDomScriptItr.next();
					var stdChoiceArrayItem = new Array();
					stdChoiceArrayItem["value"] = bizBomScriptItem.getBizdomainValue();
					stdChoiceArrayItem["valueDesc"] = bizBomScriptItem.getDescription();
					stdChoiceArrayItem["active"] = bizBomScriptItem.getAuditStatus();
					stdChoiceArray.push(stdChoiceArrayItem);
				}
			}
		} else {
			logDebug("getStdChoiceArray: WARNING stdChoice not found - " + stdChoice);
		}

	}
	return stdChoiceArray;
}

function isEmptyOrNull(value) {
	return value == null || value === undefined || String(value) == "";
}
function createPublicUserFromPrimaryContact() // optional: Contact Type, default Applicant
{
    var contactType = "Patient";
    var contact;
    var refContactNum;
    var userModel;
    if (arguments.length > 0) contactType = arguments[0]; // use contact type specified

    var capContactResult = aa.people.getCapContactByCapID(capId);
    if (capContactResult.getSuccess()) {
        var Contacts = capContactResult.getOutput();
        for (yy in Contacts) {
            if (contactType.equals(Contacts[yy].getCapContactModel().getPeople().getContactType()))
                contact = Contacts[yy];
        }
    }

    if (!contact) {
        logDebug("Couldn't create public user for " + contactType + ", no such contact");
        return false;
    }

    if (!contact.getEmail()) {
        logDebug("Couldn't create public user for " + contactType + ", no email address");
        return false;
    }

    //	if (contact.getPeople().getContactTypeFlag().equals("organization"))
    //	{ logDebug("Couldn't create public user for " + contactType + ", the contact is an organization"); return false; }

    // get the reference contact ID.   We will use to connect to the new public user
    refContactNum = contact.getCapContactModel().getRefContactNumber();

    // check to see if public user exists already based on email address
    var getUserResult = aa.publicUser.getPublicUserByEmail(contact.getEmail())
    if (getUserResult.getSuccess() && getUserResult.getOutput()) {
        userModel = getUserResult.getOutput();
        logDebug("CreatePublicUserFromContact: Found an existing public user: " + userModel.getUserID());
    }

    if (!userModel) // create one
    {
        logDebug("CreatePublicUserFromContact: creating new user based on email address: " + contact.getEmail());
        var publicUser = aa.publicUser.getPublicUserModel();
        publicUser.setFirstName(contact.getFirstName());
        publicUser.setLastName(contact.getLastName());
        publicUser.setEmail(contact.getEmail());
        publicUser.setUserID(contact.getEmail());
        publicUser.setPassword("e8248cbe79a288ffec75d7300ad2e07172f487f6"); //password : 1111111111
        publicUser.setAuditID("PublicUser");
        publicUser.setAuditStatus("A");
        publicUser.setCellPhone(contact.getCapContactModel().getPeople().getPhone2());

        var result = aa.publicUser.createPublicUser(publicUser);
        if (result.getSuccess()) {

            logDebug("Created public user " + contact.getEmail() + "  sucessfully.");
            var userSeqNum = result.getOutput();
            var userModel = aa.publicUser.getPublicUser(userSeqNum).getOutput()

            // create for agency
            aa.publicUser.createPublicUserForAgency(userModel);

            // activate for agency
            var userPinBiz = aa.proxyInvoker.newInstance("com.accela.pa.pin.UserPINBusiness").getOutput()
            userPinBiz.updateActiveStatusAndLicenseIssueDate4PublicUser(servProvCode, userSeqNum, "ADMIN");

            // reset password
            var resetPasswordResult = aa.publicUser.resetPassword(contact.getEmail());
            if (resetPasswordResult.getSuccess()) {
                var resetPassword = resetPasswordResult.getOutput();
                userModel.setPassword(resetPassword);
                logDebug("Reset password for " + contact.getEmail() + "  sucessfully.");
            } else {
                logDebug("**ERROR: Reset password for  " + contact.getEmail() + "  failure:" + resetPasswordResult.getErrorMessage());
            }

            // send Activate email
            //aa.publicUser.sendActivateEmail(userModel, true, true);

            // send another email
            //aa.publicUser.sendPasswordEmail(userModel);
            
            // send Activate email with link
            aa.publicUser.sendHyperlinkActivateEmail(userModel);
        } else {
            logDebug("**Warning creating public user " + contact.getEmail() + "  failure: " + result.getErrorMessage());
            return null;
        }
    }

    //  Now that we have a public user let's connect to the reference contact		

    if (refContactNum) {
        logDebug("CreatePublicUserFromContact: Linking this public user with reference contact : " + refContactNum);
        aa.licenseScript.associateContactWithPublicUser(userModel.getUserSeqNum(), refContactNum);
    }


    return userModel; // send back the new or existing public user
}



function runReportAndSendAsync(reportName, module, itemCap, reportParameters, emailFrom, emailTo,emailTemplate, emailParameters, emailCC, reportAttach) {
	var scriptName = "RUNREPORTANDSENDASYNC";
	var errorEmailTo = "cgutierrez@accela.com";
	var debugEmailTo = "cgutierrez@accela.com";
    var vReportAttach = matches(reportAttach, "false", false) ? false : true;

	logDebug("Setting environment variables.");
	var envParameters = aa.util.newHashMap();
	envParameters.put("ReportName",reportName);
	envParameters.put("ReportParameters",reportParameters);
    envParameters.put("ReportAttach", vReportAttach);
	envParameters.put("Module",module);
	envParameters.put("CustomCapId",itemCap.getCustomID());
	envParameters.put("CapID",itemCap);
	envParameters.put("ReportUser",currentUserID);
	envParameters.put("ServProvCode",servProvCode);
	envParameters.put("EmailFrom",emailFrom);
	envParameters.put("EmailTo", emailTo);
	envParameters.put("EmailCC", emailCC);
	envParameters.put("EmailTemplate",emailTemplate);
	envParameters.put("EmailParameters",emailParameters);	
	envParameters.put("ErrorEmailTo",errorEmailTo);	
	envParameters.put("DebugEmailTo",debugEmailTo);

	aa.runAsyncScript(scriptName, envParameters);
    logDebug("(runReportAndSendAsync) Calling runAsyncScript for " + emailTemplate);
}