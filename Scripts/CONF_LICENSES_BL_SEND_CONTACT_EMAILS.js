{
  "Licenses/*/*/*": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Send notification when additional information is required",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": [
            "Additional Info Required"
          ]
        },
        "action": {
          "notificationTemplate": "SS_ADDITIONAL_INFO_REQD",
          "notificationReport": [],
          "notifyContactTypes": [
            "Applicant"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": false
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Send notification when application is denied",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": [
            "Denied"
          ]
        },
        "action": {
          "notificationTemplate": "SS_APP_DENIED",
          "notificationReport": [],
          "notifyContactTypes": [
            "Applicant"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": false,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Send notification when application is withdrawn",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": [
            "Withdrawn"
          ]
        },
        "action": {
          "notificationTemplate": "SS_APP_WITHDRAWAL",
          "notificationReport": [],
          "notifyContactTypes": [
            "Applicant"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": false,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Send notification when license is issued, with license form attached",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "reportParamContactType": "Applicant",
          "notificationReport": [
            "BL_Business License Form"
          ],
          "notifyContactTypes": [
            "Applicant"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ],
    "ConvertToRealCAPAfter": [
      {
        "metadata": {
          "description": "Email is sent after application is successfully submitted",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_APP_SUBMITTAL",
          "notificationReport": [],
          "notifyContactTypes": [
            "Applicant"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": false,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  }
}