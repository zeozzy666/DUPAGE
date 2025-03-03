{
  "ABC/Entity/Manager/License": {
    "60 Day Notice": {
      "notificationTemplate": "SS_LICENSE_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Manager",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Manager",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Manager",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "License Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Entity/Server/Permit": {
    "60 Day Notice": {
      "notificationTemplate": "SS_PERMIT_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Employee",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Employee",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Employee",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "Permit Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Temporary/*/Permit": {
    "60 Day Notice": {
      "notificationTemplate": "SS_PERMIT_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "Permit Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Retail/*/License": {
    "60 Day Notice": {
      "notificationTemplate": "SS_LICENSE_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "License Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Retail/*/Permit": {
    "60 Day Notice": {
      "notificationTemplate": "SS_PERMIT_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "Permit Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/LBD/*/License": {
    "60 Day Notice": {
      "notificationTemplate": "SS_LICENSE_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "License Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Lodging/*/License": {
    "60 Day Notice": {
      "notificationTemplate": "SS_LICENSE_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "License Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Specialty/*/License": {
    "60 Day Notice": {
      "notificationTemplate": "SS_LICENSE_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "License Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Specialty/*/Permit": {
    "60 Day Notice": {
      "notificationTemplate": "SS_PERMIT_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "Permit Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Supplier/*/License": {
    "60 Day Notice": {
      "notificationTemplate": "SS_LICENSE_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_PERMIT_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "Permit Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  },
  "ABC/Wholesaler/*/License": {
    "60 Day Notice": {
      "notificationTemplate": "SS_LICENSE_ABOUT_TO_EXPIRE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LICENSE_ABOUT_TO_EXPIRE",
      "updateExpirationStatus": "About to Expire",
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "30 Day Notice"
    },
    "30 Day Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_30_DAY_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXP_30_DAY_NOTICE",
      "updateExpirationStatus": false,
      "updateRecordStatus": false,
      "updateWorkflowTask": false,
      "updateWorkflowStatus": false,
      "nextNotificationDays": 30,
      "nextNotification": "Expiration Notice"
    },
    "Expiration Notice": {
      "notificationTemplate": "SS_LIC_EXPIRATION_FINAL_NOTICE",
      "notificationReport": false,
      "notifyContactTypes": "Business Entity, Business Owner",
      "mailerSetType": "Renewal",
      "mailerSetStatus": "Open",
      "mailerSetPrefix": "LIC_EXPIRATION_FINAL_NOTICE",
      "updateExpirationStatus": "Expired",
      "updateRecordStatus": "Expired",
      "updateWorkflowTask": "License Status",
      "updateWorkflowStatus": "Expired",
      "nextNotificationDays": "60",
      "nextNotification": "",
      "inspectionType": "",
      "scheduleOutDays": ""
    }
  }
}