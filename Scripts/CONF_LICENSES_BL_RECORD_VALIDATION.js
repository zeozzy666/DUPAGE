{
  "Licenses/*/*/Application": {
    "WorkflowTaskUpdateBefore": [
      {
        "metadata": {
          "description": "Rule for all Licenses issuance",
          "operator": ""
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Issuance"
          ],
          "status": [
            "Issued"
          ],
          "allowBalance": false
        },
        "action": {
          "validationMessage": "This action cannot be taken until all outstanding fees are paid in full."
        },
        "postScript": ""
      }
    ]
  },
  "Licenses/*/*/Renewal": {
    "WorkflowTaskUpdateBefore": [
      {
        "metadata": {
          "description": "Rule for all Licenses renewal",
          "operator": ""
        },
        "preScript": "",
        "criteria": {
          "task": [
            "License Renewal"
          ],
          "status": [
            "Renewed"
          ],
          "allowBalance": false
        },
        "action": {
          "validationMessage": "This action cannot be taken until all outstanding fees are paid in full."
        },
        "postScript": ""
      } 
    ]
  }
}