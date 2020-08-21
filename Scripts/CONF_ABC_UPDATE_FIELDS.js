{
  "ABC/Entity/Manager/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the Managers Name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Manager",
            "includeContactName": true,
            "includeBusinessName": false,
            "includeDBATradeName": false
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Entity/Server/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the Servers name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Permitee",
            "includeContactName": true,
            "includeBusinessName": false,
            "includeDBATradeName": false
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/LBD/*/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the business entity's business name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Business Entity",
            "includeContactName": false,
            "includeBusinessName": true,
            "includeDBATradeName": true
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Retail/*/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the business entity's business name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Business Entity",
            "includeContactName": false,
            "includeBusinessName": true,
            "includeDBATradeName": true
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Lodging/*/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the business entity's business name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Business Entity",
            "includeContactName": false,
            "includeBusinessName": true,
            "includeDBATradeName": true
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Specialty/*/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the business entity's business name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Business Entity",
            "includeContactName": false,
            "includeBusinessName": true,
            "includeDBATradeName": true
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Supplier/*/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the business entity's business name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Business Entity",
            "includeContactName": false,
            "includeBusinessName": true,
            "includeDBATradeName": true
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Wholesaler/*/Application": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the business entity's business name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": false,
            "addressType": "",
            "contactType": "Business Entity",
            "includeContactName": false,
            "includeBusinessName": true,
            "includeDBATradeName": true
          }
        },
        "postScript": ""
      }
    ]
  },
  "ABC/Enforcement/*/*": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the business entity's business name",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "updateAppName": {
            "includeAddress": true,
            "addressType": "",
            "contactType": "Complainant",
            "includeContactName": true,
            "includeBusinessName": true,
            "includeDBATradeName": false
          }
        },
        "postScript": ""
      }
    ]
  }
}