{
  "aboutToExpireSearchRules": {
    "searchCriteria": {
      "searchByRecordGroup": "ABC",
      "searchByRecordType": "",
      "searchByRecordSubType": "",
      "searchByRecordCategory": "License",
      "searchStatus": "Active",
      "searchByDaysOut": -1,
      "searchByFromDate": false,
      "searchByToDate": false,
      "expiringInterval": "nextquarter",
      "notificationConfScript": "CONF_ABC_LICENSE_EXPIRATION_NOTICE",
      "firstNotice": "60 Day Notice",
      "excludeRecordType": [],
      "excludeRecordStatus": [
        {
          "status": "Revoked"
        },
       {
          "status": "Expired"
        },
        {
          "status": "Closed"
        }
      ],
      "adminEmail": "mwright@accela.com",
      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
    }
  },
  "expirationNoticeSearchRules": {
    "searchCriteria": {
      "searchByRecordGroup": "ABC",
      "searchByRecordType": "",
      "searchByRecordSubType": "",
      "searchByRecordCategory": "License",
      "searchByRecordStatus": "",
      "searchByDaysOut": 1,
      "searchByFromDate": false,
      "searchByToDate": false,
      "notificationConfScript": "CONF_ABC_LICENSE_EXPIRATION_NOTICE",
      "excludeRecordType": [],
      "excludeRecordStatus": [
        {
          "status": "Revoked"
        },
      {
          "status": "Expired"
        },
        {
          "status": "Closed"
        }
      ],
      "adminEmail": "mwright@accela.com",
      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
    }
  }
}