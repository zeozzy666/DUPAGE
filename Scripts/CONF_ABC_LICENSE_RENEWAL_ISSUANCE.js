{
  "ABC/Entity/Manager/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Renews Manager License",
          "operators": {}
        },
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "",
          "expirationType": "Days",
          "originationDate": "Expiration Date",
          "expirationPeriod": 1095,
          "customExpirationFunction": "",
          "copyComponents": [
            "Custom Fields"
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
          "description": "Renews Specialty license types",
          "operators": {}
        },
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Days",
          "originationDate": "Expiration Date",
          "expirationPeriod": 365,
          "customExpirationFunction": "",
          "copyComponents": [
            "Custom Fields"
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
          "description": "Renews ABC lodging license types",
          "operators": {}
        },
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Days",
          "originationDate": "Expiration Date",
          "expirationPeriod": 365,
          "customExpirationFunction": "",
          "copyComponents": [
            "Custom Fields"
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
          "description": "Renews retail liquor license types",
          "operators": {}
        },
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Days",
          "originationDate": "Expiration Date",
          "expirationPeriod": 365,
          "customExpirationFunction": "",
          "copyComponents": [
            "Custom Fields"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "ABC/LBD/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Renews LBD liquor license types",
          "operators": {}
        },
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Days",
          "originationDate": "Expiration Date",
          "expirationPeriod": 365,
          "customExpirationFunction": "",
          "copyComponents": [
            "Custom Fields"
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
          "description": "Renews supplier license types",
          "operators": {}
        },
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Days",
          "originationDate": "Expiration Date",
          "expirationPeriod": 365,
          "customExpirationFunction": "",
          "copyComponents": [
            "Custom Fields"
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
          "description": "Renews wholesaler license types",
          "operators": {}
        },
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Days",
          "originationDate": "Expiration Date",
          "expirationPeriod": 365,
          "customExpirationFunction": "",
          "copyComponents": [
            "Custom Fields"
          ]
        },
        "postScript": ""
      }
    ]
  }
}