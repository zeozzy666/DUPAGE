{
  "ABC/Entity/Manager/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Individual License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Manager"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Entity/Manager/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Manager"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
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
          "notificationReport": [
            "Individual License Form"
          ],
          "reportParamContactType": "Manager",
          "notifyContactTypes": [
            "Manager"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Entity/Server/Permit": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Permitee"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Permitee"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Permitee"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Permit Status Email Template when Permit Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_PERMIT_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Permitee"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends PermitIssued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Individual License Form"
          ],
          "reportParamContactType": "Permitee",
          "notifyContactTypes": [
            "Permitee"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/LBD/*/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Amendment/*/*": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Lodging/*/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Retail/*/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Specialty/*/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Supplier/*/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Wholesaler/*/License": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Status Email Template when Licese Status is updated to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Status"
          ],
          "status": []
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_STATUS",
          "notificationReport": [],
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/LBD/*/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
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
          "notificationReport": [
            "Agency License Report"
          ],
          "reportParamContactType": "Business Entity",
          "notifyContactTypes": [
            "Business Entity",
            "Business Owner"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Retail/*/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
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
          "notificationReport": [
            "Agency License Report"
          ],
          "reportParamContactType": "Business Entity",
          "notifyContactTypes": [
            "Business Entity",
            "Business Owner"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Lodging/*/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
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
          "notificationReport": [
            "Agency License Report"
          ],
          "reportParamContactType": "Business Entity",
          "notifyContactTypes": [
            "Business Entity",
            "Business Owner"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Specialty/*/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
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
          "notificationReport": [
            "Agency License Report"
          ],
          "reportParamContactType": "Business Entity",
          "notifyContactTypes": [
            "Business Entity",
            "Business Owner"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Supplier/*/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
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
          "notificationReport": [
            "Agency License Report"
          ],
          "reportParamContactType": "Business Entity",
          "notifyContactTypes": [
            "Business Entity",
            "Business Owner"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Wholesaler/*/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Issued Email Template with attached Agency License Report to necessary Contact Types with available parameters",
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
          "notificationReport": [
            "Agency License Report"
          ],
          "reportParamContactType": "Business Entity",
          "notifyContactTypes": [
            "Business Entity",
            "Business Owner"
          ],
          "additionalEmailsTo": "",
          "url4ACA": "",
          "createFromParent": true,
          "reportingInfoStandards": ""
        },
        "postScript": ""
      }
    ]
  },
  "ABC/LBD/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Retail/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Lodging/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Specialty/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Supplier/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Wholesaler/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Additional Info Required Email Template with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Denied Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
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
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends License Renewal Email Template with updated Agency Licese Report to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "action": {
          "notificationTemplate": "SS_LICENSE_ISSUED_REPORT",
          "notificationReport": [
            "Agency License Report"
          ],
          "createFromParent": true,
          "notifyContactTypes": [
            "Business Owner",
            "Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  }
}