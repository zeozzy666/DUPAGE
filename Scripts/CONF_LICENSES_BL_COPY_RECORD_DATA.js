{
  "Licenses/*/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Copy data from Renewal record to License",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ],
          "recordType": "Licenses/*/*/License"
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
          "ASSETS": [
            "ALL"
           ],
          "ADDRESS": [],
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
        "preScript": "",
        "criteria": {
          "recordType": "Licenses/*/*/License"
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
          "ASSETS": [
            "ALL"
          ],
          "ADDRESS": [ "ALL"],
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
          "recordType": "Licenses/*/*/License"
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
          "ASSETS": [
            "ALL"
          ],
          "ADDRESS": [ "ALL"],
          "Renewal": true,
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