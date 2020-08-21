{
"Licenses/*/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Updates parent License record",
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
		  "expirationType":"Expiration Code",
          "expirationPeriod": "LIC_GENERAL",
          "customExpirationFunction": "",
          "copyComponents": []
        },
        "postScript": ""
      }
    ]
  }
}