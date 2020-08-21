{
  "ABC/*/*/Application": {
    "WorkflowTaskUpdateBefore": [
      {
        "metadata": {
          "description": "All invoiced fees must be paid before license issuance",
          "operator": ""
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Issuance"
          ],
          "status": [
            "Issued"
          ],
          "allowBalance": false
        },
        "action": {
          "validationMessage": "This action cannot be taken until all outstanding fees are paid in full."
        },
        "postScript": ""
      }
    ]
  },
 "ABC/*/*/Permit": {
    "WorkflowTaskUpdateBefore": [
      {
        "metadata": {
          "description": "All invoiced fees must be paid before a permit can be issued.",
          "operator": ""
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ],
          "allowBalance": false
        },
        "action": {
          "validationMessage": "This action cannot be taken until all invoiced fees are paid in full."
        },
        "postScript": ""
      }
    ]
  } ,
  "ABC/*/*/Renewal": {
	    "WorkflowTaskUpdateBefore": [
	      {
	        "metadata": {
	          "description": "All invoiced fees must be paid before a permit can be renewed.",
	          "operator": ""
	        },
	        "preScript": "",
	        "criteria": {
	          "task": [
	            "License Renewal"
	          ],
	          "status": [
	            "Renewed"
	          ],
	          "allowBalance": false
	        },
	        "action": {
	          "validationMessage": "This action cannot be taken until all invoiced fees are paid in full."
	        },
	        "postScript": ""
	      }
	    ]
	  }
}