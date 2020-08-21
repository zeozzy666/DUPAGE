{
    "ABC/Amendment/Change of Ownership/NA": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Organizational Chart",
                        "Stock Sale/Transfer Agreement or Merger"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "Articles of Incorporation/Organization required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Entity Legal Structure": [
                            "Corporation",
                            "LLC",
                            "Limited Liability Company (LLC)",
                            "Limited Liability Limited Partnership (LLLP)",
                            "Limited Liability Partnership (LLP)"
                        ]
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Articles of Incorporation/Organization"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "Partnership Agreement required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Entity Legal Structure": "General Partnership"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Partnership Agreement"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "Certificate of Limited Partnership required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Entity Legal Structure": "Limited Partnership"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Certificate of Limited Partnership"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "Certificate of Registration required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Entity Legal Structure": "Nonprofit Corporation"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Certificate of Registration"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "Business Structure Documents required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Entity Legal Structure": "Other Legal Entity"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Business Structure Documents"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Amendment/License Modification/NA": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Copy of Valid Form of ID"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Amendment/Modification of Premises/NA": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                  "description": "Required documents",
                  "operators": {}
                },
                "criteria": {},
                "action": {
                  "requiredDocuments": [
                    "Photo",
                    "Plan - Floor Plan"
                  ],
                  "requirementType": "CONDITION",
                  "validationMessage": "Documents are Required",
                  "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
              }
        ]
    },
    "ABC/Entity/Individual/Registration": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Copy of Valid Form of ID",
                        "Proof of Background Check"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Conviction/Criminal Violation in defined period": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "List and Explanation of Offense(s) "
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant had a privileged license revoked or suspended": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information "
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant delinquent in payment(s)": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Details of Delinquent payment(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Entity/Manager/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant or other key persons filed bankruptcy in defined timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Financial Document(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant or other key persons filed bankruptcy in defined timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Financial Document(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Denial of  a privileged license in defined period": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Served a sentence or parole": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Completed training program in defined timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Certificate of Completion "
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Permit previously denied or revoked": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Conviction/Criminal Violation in defined period": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "List and Explanation of Offense(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant had a privileged license revoked or suspended": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant delinquent in payment(s)": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Details of Delinquent payment(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Entity/Manager/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant or other key persons filed bankruptcy in defined timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Financial Document(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant or other key persons filed bankruptcy in defined timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Financial Document(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Denial of  a privileged license in defined period": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Order to Show Cause in Defined Timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Administrative Hold in Defined Timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Summary Suspension in Defined Timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Served a sentence or parole": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Completed training program in defined timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Certificate of Completion"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Permit previously denied or revoked": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Statement of Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Conviction/Criminal Violation in defined period": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "List and Explanation of Offense(s)"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Entity/Server/Permit": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Copy of Valid Form of ID",
                        "Proof of Background Check"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Completed training program in defined timeframe": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Certificate of Completion"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/Caterer/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/Caterer/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/On Premise/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/On Premise/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/Private Club/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Or agree to submit a  Sales Tax Exemption Letter": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Sales Tax Exemption Letter"
                    ],
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Or agree to submit a  Sales Tax Exemption Letter": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Sales Tax Exemption Letter"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Lease or Option Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/Private Club/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/Restaurant/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/LBD/Restaurant/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Lodging/Bed and Breakfast Inn/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Plan - Inventory Management",
                        "Insurance Information",
                        "Safety & Security Reporting Document"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Lodging/Bed and Breakfast Inn/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Lodging/Hotel Motel/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Lodging/Hotel Motel/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Brew Pub/Permit": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Delivery Service/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Delivery Service/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Distillery Pub/Permit": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Fermented Malt Beverage/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Fermented Malt Beverage/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Plan - Inventory Management"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Liquor Store/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Liquor Store/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Off Premise/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Operating Agreement",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Off Premise/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Optional Premises/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Operating Agreement",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Optional Premises/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Package Store/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Package Store/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Retail/Tasting/Permit": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Specialty/Arts Liquor/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Or agree to submit a  Sales Tax Exemption Letter": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Sales Tax Exemption Letter"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Specialty/Arts Liquor/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Specialty/On-Site Sale and Consumption/Permit": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Insurance Information",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Specialty/Race Track/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Specialty/Race Track/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Specialty/Special Event/Permit": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Or agree to submit a  Sales Tax Exemption Letter": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Sales Tax Exemption Letter"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Supplier/Manufacturer/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Federal License",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License",
                        "Plan - Waste Management Plan"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Supplier/Manufacturer/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Federal License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Supplier/Winery/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Menu and Prices",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Supplier/Winery/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information",
                        "Menu and Prices"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Temporary/Establishment/Permit": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Or agree to submit a  Sales Tax Exemption Letter": "Yes"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Sales Tax Exemption Letter"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Wholesaler/Warehousing/Application": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Advertisement",
                        "Certificate of Good Standing",
                        "Insurance Information",
                        "Management Agreement",
                        "Operating Agreement",
                        "Plan - Floor Plan",
                        "Plan - Inventory Management",
                        "Safety & Security Reporting Document",
                        "State Business License"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Owned"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Title or Deed"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    },
    "ABC/Wholesaler/Warehousing/Renewal": {
        "Pageflow": [
            {
                "preScript": " ",
                "metadata": {
                    "description": "Required documents",
                    "operators": {}
                },
                "criteria": {},
                "action": {
                    "requiredDocuments": [
                        "Insurance Information"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Leased"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Purchase"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Owned, Leased, or Optioned": "Option to Lease"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Lease or Option"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            },
            {
                "preScript": " ",
                "metadata": {
                    "description": "required document",
                    "operators": {}
                },
                "criteria": {
                    "customFields": {
                        "Applicant has legal possession of the premises": "No"
                    }
                },
                "action": {
                    "requiredDocuments": [
                        "Property Owner Consent Form"
                    ],
                    "requirementType": "CONDITION",
                    "validationMessage": "Documents are Required",
                    "conditionType": "ABC Required Doc"
                },
                "postScript ": " "
            }
        ]
    }
}