{
  "ABC/*/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Copy data from Renewal record to Permit",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Permit Renewal"
          ],
          "status": [
            "Renewed"
          ],
          "recordType": "ABC/*/*/Permit"
        },
        "action": {
          "usageType": "copyToParent",
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [],
          "ASSETS": [
            "ALL"
          ],
          "ADDRESS": [
            "ALL"
          ],
          "Renewal": false,
          "keepExistingAPO": false,
          "RECORDDETAILS": true,
          "RECORDNAME": false,
          "PARCEL": true,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "ApplicationSubmitAfter": [
      {
        "metadata": {
          "description": "Copy data from License to Renewal",
          "operators": {}
        },
        "preScript": "PRE_SCRIPT_VALIDATE_COPY_DATA",
        "criteria": {
          "recordType": "ABC/*/*/License"
        },
        "action": {
          "usageType": "copyFromParent",
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [],
          "ASSETS": [
            "ALL"
          ],
          "ADDRESS": [
            "ALL"
          ],
          "Renewal": true,
          "keepExistingAPO": false,
          "RECORDDETAILS": true,
          "RECORDNAME": false,
          "PARCEL": true,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "Pageflow": [
      {
        "metadata": {
          "description": "Copy data from License to Renewal in Pageflow",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "recordType": "ABC/*/*/License"
        },
        "action": {
          "usageType": "copyFromParent",
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [],
          "ASSETS": [
            "ALL"
          ],
          "ADDRESS": [
            "ALL"
          ],
          "Renewal": true,
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": false,
          "PARCEL": true,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Amendment/*/*": {
	  
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Copy data from Amendment record",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Reviews"
          ],
          "status": [
            "Modification Request Approved"
          ],
          "recordType": "ABC/*/*/*"
        },
        "action": {
          "usageType": "copyToParent",
          "CONTACTS": [
            "ALL"
          ]
        },
        "postScript": ""
      }
    ],
    "Pageflow": [
      {
        "metadata": {
          "description": "Copy data from Amendment in Pageflow",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "recordType": "ABC/*/*/*"
        },
        "action": {
          "usageType": "copyFromParent",
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [
            "ALL"
          ],
          "ADDRESS": [],
          "Renewal": false,
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": false,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  },
  "ABC/*/*/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Copy data from Amendment record to license",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Modification Review"
          ],
          "status": [
            "Modification Request Approved"
          ],
          "recordType": "ABC/*/*/License"
        },
        "action": {
          "usageType": "copyToParent",
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [
            "ALL"
          ],
          "ADDRESS": [],
          "Renewal": false,
          "keepExistingAPO": false,
          "RECORDDETAILS": true,
          "RECORDNAME": false,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "Pageflow": [
      {
        "metadata": {
          "description": "Copy data from main record to Amendment in Pageflow",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "recordType": "ABC/*/*/*"
        },
        "action": {
          "usageType": "copyFromParent",
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [
            "ALL"
          ],
          "ADDRESS": [],
          "Renewal": false,
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": false,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  }
}