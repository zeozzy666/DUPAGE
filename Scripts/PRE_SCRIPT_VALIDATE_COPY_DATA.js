/*------------------------------------------------------------------------------------------------------/
| Program		: PRE_SCRIPT_VALIDATE_COPY_DATA.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: ADMIN
| Created at	: 21/11/2019 09:01:38
|
/------------------------------------------------------------------------------------------------------*/


var _cap = aa.env.getValue("CapModel");
var _capid = cap.getCapID();

var _Contact = aa.people.getCapContactByCapID(_capid);
if (_Contact.getSuccess()) {
	capPeopleArr = _Contact.getOutput();		
	if(capPeopleArr.length > 0)
	{
		cancelCfgExecution = true;
	}
}
