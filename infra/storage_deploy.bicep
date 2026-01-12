//  Storage Account for Cloud Resume Challenge Web Site
param storageAccounts_name string = 'escloudresumewebstorage'

resource storageAccounts_resource 'Microsoft.Storage/storageAccounts@2025-01-01' = {
  name: storageAccounts_name
  location: 'eastus'
  tags: {
    project: 'CloudResumeChallenge'
    Environment: 'Prod'
  }
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    dnsEndpointType: 'Standard'
    defaultToOAuthAuthentication: false
    publicNetworkAccess: 'Enabled'
    allowCrossTenantReplication: false
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    networkAcls: {
      bypass: 'AzureServices'
      virtualNetworkRules: []
      ipRules: []
      defaultAction: 'Allow'
    }
    supportsHttpsTrafficOnly: true
    encryption: {
      requireInfrastructureEncryption: false
      services: {
        file: {
          keyType: 'Account'
          enabled: true
        }
        blob: {
          keyType: 'Account'
          enabled: true
        }
      }
      keySource: 'Microsoft.Storage'
    }
    accessTier: 'Cool'
  }
}

resource storageAccounts_default 'Microsoft.Storage/storageAccounts/blobServices@2025-01-01' = {
  parent: storageAccounts_resource
  name: 'default'
  properties: {
    containerDeleteRetentionPolicy: {
      enabled: true
      days: 7
    }
    cors: {
      corsRules: []
    }
    deleteRetentionPolicy: {
      allowPermanentDelete: false
      enabled: true
      days: 7
    }
  }
}

resource Microsoft_Storage_storageAccounts_fileServices_default 'Microsoft.Storage/storageAccounts/fileServices@2025-01-01' = {
  parent: storageAccounts_resource
  name: 'default'
  properties: {
    protocolSettings: {
      smb: {}
    }
    cors: {
      corsRules: []
    }
    shareDeleteRetentionPolicy: {
      enabled: true
      days: 7
    }
  }
}

resource Microsoft_Storage_storageAccounts_queueServices_default 'Microsoft.Storage/storageAccounts/queueServices@2025-01-01' = {
  parent: storageAccounts_resource
  name: 'default'
  properties: {
    cors: {
      corsRules: []
    }
  }
}

resource Microsoft_Storage_storageAccounts_tableServices_default 'Microsoft.Storage/storageAccounts/tableServices@2025-01-01' = {
  parent: storageAccounts_resource
  name: 'default'
  properties: {
    cors: {
      corsRules: []
    }
  }
}

resource storageAccounts_default_web 'Microsoft.Storage/storageAccounts/blobServices/containers@2025-01-01' = {
  parent: storageAccounts_default
  name: '$web'
  properties: {
    immutableStorageWithVersioning: {
      enabled: false
    }
    defaultEncryptionScope: '$account-encryption-key'
    denyEncryptionScopeOverride: false
    publicAccess: 'None'
  }
}
