/*Title : Address Validation
Purpose : TO validate related Address based on the provided JSON 
Author: Haetham Eleisah
Functional Area : AV , ACA before Events
Description : JSON Example :
{
  "Building/Commercial/New Construction/NA": {
    "ApplicationSpecificInfoUpdateBefore": [
      {
        "metadata": {
          "description": "To validate related Address based on the provided JSON",
          "operators": {
            
          }
        },
        "criteria": {
          
        },
        "preScript": " ",
        "action": {
          "recordTypeCheck": [
            {
              "type": "Building/Projects/Project Creation Request3/BPROJ",
              "status": "Submitted"
            },
            {
              "type": "Building/Commercial/New Construction/NA33",
              "status": "Issued"
            }
          ],
          "recordTypeRequired": [
            {
              "type": "Building/Projects/Project Creation Request3/BPROJ",
              "status": "Submitted"
            },
            {
              "type": "Building/Commercial/New Construction/NA33",
              "status": "Issued"
            }
          ],
          "fieldValidation": {
            "streetName": "Street abc"
          },
          "bufferCheck": [
            {
              "service": "GIS_SVC_NAME",
              "layer": "Historical",
              "distance": "1000"
            },
            {
              "service": "GIS_SVC_NAME",
              "layer": "School",
              "distance": "500"
            }
          ]
        },
        "postScript": ""
      }
    ]
  }
}
		
Available Attributes for the Address: 
- - Address: All Custom Attributes, (primaryFlag,houseNumberStart,streetDirection,streetName,streetSuffix,city,state,zip,addressStatus,county,country,addressDescription,xCoordinate,yCoordinate)
 */

try {
	eval(getScriptText("CONFIGURABLE_SCRIPTS_COMMON"));
	var settingsArray = [];
	var scriptSuffix = "RECORD_ADDRESS_VALIDATION";
	isConfigurableScript(settingsArray, scriptSuffix);

	for (s in settingsArray) {

		var rules = settingsArray[s];
		var RecordsString = ""
		// run preScript
		if (!matches(rules.preScript, null, "")) {
			eval(getScriptText(rules.preScript, null, false));
		}

		if (cancelCfgExecution) {
			logDebug("**WARN STDBASE Script [" + scriptSuffix + "] canceled by cancelCfgExecution");
			cancelCfgExecution = false;
			continue;
		}

		/// this to get the related addresses 
		var addrArray = new Array();
		getAddress(addrArray);
		//
		// this variables to be used in the comparing functions
		var RecordTypeString = "";
		var RecordTypeStatus = "";
		var ValidationMessage = "";
		// this function to validate Address
		ValidateAddress(rules);

		/// run post script
		if (!matches(rules.postScript, null, "")) {
			eval(getScriptText(rules.postScript, null, false));
		}

	}

} catch (ex) {
	logDebug("**ERROR: Exception while verification the rules for " + scriptSuffix + ". Error: " + ex);
}

/**
 * this function will validate the JSON rules in order to check if its passed or not 
 * @param rules is the JSON abject that provided from the JSON File CONF_"SOLUTION"_Address_VALIDATION
 * 
 */
function ValidateAddress(rules) {
	if (!isEmptyOrNull(rules.action.recordTypeCheck)) {
		if (checkRecords(rules.action.recordTypeCheck)) {
			ValidationMessage += "these records should not be linked to the address that already linked to this record </br> " + RecordTypeString + "</br>";
			ValidationMessage += " with these statuses " + RecordTypeStatus + "</br>";
		}
	}
	if (!isEmptyOrNull(rules.action.recordTypeRequired)) {
		if (!checkRequiredRecords(rules.action.recordTypeRequired)) {
			ValidationMessage += "</br> these records should be linked to the address that already linked  to this record   </br>" + RecordTypeString + "</br>";
			ValidationMessage += " with these statuses " + RecordTypeStatus + "</br>";
		}
	}

	if (!isEmptyOrNull(rules.action.fieldValidation)) {
		//make sure it has fields to check, and those fields matches address values 
		//common function will return true if this json object is empty, that's why Object.keys().length was used
		if (Object.keys(rules.action.fieldValidation).length > 0 && isAddressMatchRules(rules.action.fieldValidation)) {
			ValidationMessage += '<br> ' + getValidationMessage(rules.action.fieldValidation);
		}
	}

	if (!isEmptyOrNull(rules.action.bufferCheck)) {
		checkGISFeilds(rules.action.bufferCheck);
	}

	if (ValidationMessage != "") {
		cancel = true;
		showMessage = true;
		aa.env.setValue("ErrorCode", "1");
		aa.env.setValue("ErrorMessage", ValidationMessage);
		comment(ValidationMessage);
	}
}

/**
 * this function will check the record type check from the JSON  
 * @param recordTypeCheck that provided from the JSON.
 * @returns true if the records is matched else returns false;
 */
function checkRecords(recordTypeCheck) {
	var isMatched = false;
	if (addrArray.length == 0)
		return false;

	for (pa in addrArray) {
		var capIdsArray = getRelatedCapsByAddressAttributes(addrArray[pa]["streetName"], addrArray[pa]["houseNumberStart"], addrArray[pa]["streetSuffix"],
				addrArray[pa]["streetDirection"]);
		for ( var ci in capIdsArray) {
			var CurrentCap = aa.cap.getCap(capIdsArray[ci].getCapID()).getOutput();
			var CurrentCapType = CurrentCap.getCapType().toString();
			var CurrentCapStatus = CurrentCap.getCapStatus();
			for ( var r in recordTypeCheck) {
				var recordItem = recordTypeCheck[r];
				if (CurrentCapType == recordItem.type && recordItem.status == CurrentCapStatus) {
					RecordTypeString += recordItem.type + ',';
					RecordTypeStatus += recordItem.status + ',';
					isMatched = true;
					break;
				}
			}
			if (isMatched)
				break;
		}
		if (isMatched)
			break;
	}
	return isMatched;
}

/**
 * this function will check the recordTypeRequired from the JSON  
 * @param recordTypeRequired
 * @returns true if the records is exists otherwise will returns false
 */
function checkRequiredRecords(recordTypeRequired) {
	RecordTypeString = "";
	RecordTypeStatus = "";

	var isMatched = true;
	if (addrArray.length == 0)
		return true;

	for (pa in addrArray) {
		var capIdsArray = getRelatedCapsByAddressAttributes(addrArray[pa]["streetName"], addrArray[pa]["houseNumberStart"], addrArray[pa]["streetSuffix"],
				addrArray[pa]["streetDirection"]);

		for ( var r in recordTypeRequired) {
			var recordItem = recordTypeRequired[r];

			RecordTypeString += recordItem.type + ',';
			RecordTypeStatus += recordItem.status + ',';
			for ( var ci in capIdsArray) {
				var CurrentCap = aa.cap.getCap(capIdsArray[ci].getCapID()).getOutput();
				var CurrentCapType = CurrentCap.getCapType().toString();
				var CurrentCapStatus = CurrentCap.getCapStatus();
				if (CurrentCapType == recordItem.type && recordItem.status == CurrentCapStatus) {
					isMatched = true;
					break;
				} else {
					isMatched = false;
				}
			}
		}
	}
	return isMatched;
}

/**
 * this function will check the bufferCheck that provided from the JSON is exists in the GIS .
 * @param bufferCheck is the JOSN paramter to be checked
 */

//Important Note : proximityForGISObject will not work with javascript JS . only with Silverlight and USE_GIS_REST_API should be NO or disabled
function checkGISFeilds(bufferCheck) {
	for ( var obj in bufferCheck) {
		var bufChkItem = bufferCheck[obj];

		if (proximityForGISObject(bufChkItem.service, bufChkItem.layer, bufChkItem.distance, "Address")) {
			ValidationMessage += " </br> you cant add this record because there is another record in this location  " + bufChkItem.service + " - " + bufChkItem.layer + " - "
					+ bufChkItem.distance;

		}

	}
}

/**
 * this function will return the validation message for the validation fields thats provided from the JSON.
 * @param addressJson
 * @returns {String}
 */
function getValidationMessage(address) {
	var message = "The below fields need to be changed in order to complete the record </br>";
	for ( var ct in address) {
		message += ct + " should not be " + address[ct] + "</br>";

	}
	return message;
}

/**
 * this function has been added because the current script will work on ACA.
 * @param vScriptName
 * @param servProvCode
 * @param useProductScripts
 * @returns {String}
 */
function getScriptText(vScriptName, servProvCode, useProductScripts) {
	if (!servProvCode)
		servProvCode = aa.getServiceProviderCode();
	vScriptName = vScriptName.toUpperCase();
	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
	try {
		if (useProductScripts) {
			var emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(), vScriptName);
		} else {
			var emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");
		}
		return emseScript.getScriptText() + "";
	} catch (err) {
		return "";
	}
}
