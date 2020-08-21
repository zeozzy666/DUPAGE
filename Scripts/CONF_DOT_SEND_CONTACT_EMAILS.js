{
  "DOT/Highway Permit/NA/NA": {
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
          "description": "Send notification when permit is issued, with permit form attached",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            ""
          ],
          "status": [
            ""
          ]
        },
        "action": {
          "notificationTemplate": "",
          "notificationReport": [
            "PublicWorks Permit no Address"
          ],
          "reportParamContactType": "Applicant",
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
    ],
    "InspectionScheduleAfter": [
      {
        "metadata": {
          "description": "Send notification when inspection is scheduled",
          "operators": {}
        },
        "preScript": "",
        "criteria": {},
        "action": {
          "notificationTemplate": "SS_INSPECTION_SCHEDULED",
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
    ],
    "InspectionResultSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Send notification when an inspection is resulted",
          "operators": {}
        },
        "criteria": {
          "inspectionTypePerformed": [],
          "inspectionResult": []
        },
        "action": {
          "notificationTemplate": "SS_INSPECTION_RESULTED",
          "notificationReport": [
            "Inspection Result Ticket"
          ],
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
  },
  "DOT/Special Event/NA/NA": {
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
            "Applicant",
            "Authorized Agent"
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
            "Applicant",
            "Authorized Agent"
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
            "Applicant",
            "Authorized Agent"
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
          "description": "Send notification when permit is issued, with permit form attached",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            ""
          ],
          "status": [
            ""
          ]
        },
        "action": {
          "notificationTemplate": "",
          "notificationReport": [
            "PublicWorks Permit no Address"
          ],
          "reportParamContactType": "Applicant",
          "notifyContactTypes": [
            "Applicant",
            "Authorized Agent"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": false,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ],
    "InspectionScheduleAfter": [
      {
        "metadata": {
          "description": "Send notification when inspection is scheduled",
          "operators": {}
        },
        "preScript": "",
        "criteria": {},
        "action": {
          "notificationTemplate": "SS_INSPECTION_SCHEDULED",
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
    ],
    "InspectionResultSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Send notification when an inspection is resulted",
          "operators": {}
        },
        "criteria": {
          "inspectionTypePerformed": [],
          "inspectionResult": []
        },
        "action": {
          "notificationTemplate": "SS_INSPECTION_RESULTED",
          "notificationReport": [
            "Inspection Result Ticket"
          ],
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