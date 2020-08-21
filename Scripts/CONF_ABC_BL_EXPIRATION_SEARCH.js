{
  "aboutToExpireSearchRules": {
    "searchCriteria": {
      "searchByRecordGroup":"ABC",
      "searchByRecordType":"*",
      "searchByRecordSubType":"*",
      "searchByRecordCategory":"License",
      "searchStatus": "Active",
      "searchByDaysOut": 60,
      "searchByFromDate": false,
      "searchByToDate": false,
      "expiringInterval":"nextquarter",
      "notificationConfScript":"CONF_ABC_BL_EXPIRATION_NOTICE",
      "firstNotice": "60 Day Notice",
      "excludeRecordType": [{
          "type": "Licenses/Type/Subtype/Category"
        },
        {
          "type": "Licenses/Type/Subtype/Category"
        }
      ],
      "excludeRecordStatus": [{
          "status": "Revoked"
        },
        {
          "status": "Closed"
        }
      ],
      "adminEmail": "",
      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
    }
  },
  "expirationNoticeSearchRules": {
    "searchCriteria": {
      "searchByRecordGroup":"ABC",
      "searchByRecordType":"*",
      "searchByRecordSubType":"*",
      "searchByRecordCategory":"License",
      "searchByRecordStatus": "",
      "searchByDaysOut": 1,
      "searchByFromDate": false,
      "searchByToDate": false,
      "notificationConfScript": "CONF_ABC_BL_EXPIRATION_NOTICE",
      "excludeRecordType": [],
      "excludeRecordStatus": [
        {
          "status": "Revoked"
        },
        {
          "status": "Closed"
        }
      ],
      "adminEmail": "",
      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
    }
  }
}