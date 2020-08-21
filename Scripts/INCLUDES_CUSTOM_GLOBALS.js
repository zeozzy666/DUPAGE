/*------------------------------------------------------------------------------------------------------/
| Program : INCLUDES_CUSTOM_GLOBALS.js
| Event   : N/A
|
| Usage   : Accela Custom Includes.  Required for all Custom Parameters
|
| Notes   : 
|
/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| Custom Parameters
|	Ifchanges are made, please add notes above.
/------------------------------------------------------------------------------------------------------*/
feeEstimate=false;
if(vEventName.equals("FeeEstimateAfter4ACA")) 
	feeEstimate=true;

//added by Sidwell to allow debug messaging for admins
//comment this out to remove...
if (matches(currentUserID,"ADMIN", "AACMAT")) {
    showDebug = 3;
    showMessage = true;
}

/*------------------------------------------------------------------------------------------------------/
| END Custom Parameters
/------------------------------------------------------------------------------------------------------*/