{
  "ABC/Entity/Server/Permit": {
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Issues a Permit with the expirations date set to 3 years from the current date",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "issuedStatus": "Active",
          "expirationStatus": "Active",
          "expirationDaysOut": 1095
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Specialty/Art Gallery/Permit": {
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Issues a Permit with the expirations date set to 180 days from the current date",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "issuedStatus": "Active",
          "expirationStatus": "Active",
          "expirationDaysOut": 180
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Specialty/On-Site Sale and Consumption/Permit": {
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Issues a Permit with the expirations date set to 180 days from the current date",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "issuedStatus": "Active",
          "expirationStatus": "Active",
          "expirationDaysOut": 180
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Specialty/Special Event/Permit": {
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Issues a Permit with the expirations date set to 180 days from the current date",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "issuedStatus": "Active",
          "expirationStatus": "Active",
          "expirationDaysOut": 180
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Temporary/Establishment/Permit": {
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Issues a Permit with the expirations date set to 180 days from the current date",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "issuedStatus": "Active",
          "expirationStatus": "Active",
          "expirationDaysOut": 180
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Retail/Tasting/Permit": {
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Issues a Permit with the expirations date set to 180 days from the current date",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "issuedStatus": "Active",
          "expirationStatus": "Active",
          "expirationDaysOut": 180
        },
        "postScript": ""
      }
    ]
  }
}