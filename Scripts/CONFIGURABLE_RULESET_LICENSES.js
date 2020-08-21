{
  "ApplicationSubmitAfter": {
    "StandardScripts": [
      "STDBASE_RECORD_AUTOMATION",
      "STDBASE_PEOPLE_AUTOMATION",
      "STDBASE_COPY_RECORD_DATA",
      "STDBASE_UPDATE_FIELDS"
    ]
  },
  "ConvertToRealCAPAfter": {
    "StandardScripts": [
      "STDBASE_PEOPLE_AUTOMATION",
      "STDBASE_COPY_RECORD_DATA",
      "STDBASE_SEND_CONTACT_EMAILS"
    ]
  },
  "InvoiceFeeAfter": {
    "StandardScripts": [
      "STDBASE_COPY_RECORD_DATA",
      "STDBASE_SEND_CONTACT_EMAILS"
    ]
  },
  "WorkflowTaskUpdateBefore": {
    "StandardScripts": [
      "STDBASE_RECORD_AUTOMATION",
      "STDBASE_RECORD_VALIDATION",
      "STDBASE_LICENSE_RENEWAL_ISSUANCE",
      "STDBASE_LICENSE_ISSUANCE",
      "STDBASE_SEND_CONTACT_EMAILS"
    ]
  },
  "WorkflowTaskUpdateAfter": {
    "StandardScripts": [
      "STDBASE_RECORD_AUTOMATION",
      "STDBASE_RECORD_VALIDATION",
      "STDBASE_COPY_RECORD_DATA",
      "STDBASE_LICENSE_ISSUANCE",
      "STDBASE_LICENSE_RENEWAL_ISSUANCE",
      "STDBASE_SEND_CONTACT_EMAILS"
    ]
  },
  "InspectionResultSubmitAfter": {
    "StandardScripts": [
      "STDBASE_INSPECTION_AUTOMATION",
      "STDBASE_RECORD_AUTOMATION",
      "STDBASE_SEND_CONTACT_EMAILS"
    ]
  },
  "InspectionScheduleAfter": {
    "StandardScripts": [
      "STDBASE_INSPECTION_SCHEDULING",
      "STDBASE_INSPECTION_AUTOMATION",
      "STDBASE_RECORD_AUTOMATION",
      "STDBASE_SEND_CONTACT_EMAILS"
    ]
  },
  "V360InspectionResultSubmitAfter": {
    "StandardScripts": [
      "STDBASE_INSPECTION_AUTOMATION",
      "STDBASE_RECORD_AUTOMATION",
      "STDBASE_SEND_CONTACT_EMAILS"
    ]
  }
}