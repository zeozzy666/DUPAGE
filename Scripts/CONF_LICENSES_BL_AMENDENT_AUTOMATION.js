{
  " Licenses/Amendment/Change of Ownership/NA": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Pageflow copy amendment details",
          "operators": {
            "usageType": "copyFromParent"
          }
        },
        "criteria": {
          "recordType": "Licenses/*/*/License"
        },
        "action": {
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [],
          "ADDRESS": [
            "ALL"
          ],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
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
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy License Amendment details on Workflow Task Modification Review - Status Modification Request Approved",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Modification Review"
          ],
          "status": [
            "Approved"
          ],
          "recordType": "Licenses/*/*/License"
        },
        "action": {
          "usageType": "copyToParent",
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [],
          "ADDRESS": []	
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": false,
          "RECORDDETAILS": false,
          "RECORDNAME": false,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": true,	
        },
        "postScript": ""
      }
    ]
  },
  " licenses/Amendment/Modification/NA”: {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Pageflow copy License Amendment Details Info",
          "operators": {
            "usageType": "copyFromParent"
          }
        },
        "criteria": {
          "recordType": "Licenses/*/*/License"
        },
        "action": {
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": ["ALL"],
          "ADDRESS": [
            "ALL"
          ],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
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
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy License Amendment Details Info on Workflow Task Modification Review - Status Modification Request Approved",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Modification Review"
          ],
          "status": [
            "Approved"
          ],
          "recordType": "Licenses/*/*/License"
        },
        "action": {
          "usageType": "copyToParent",
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [],
          "ADDRESS": [],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": false,
          "RECORDDETAILS": false,
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