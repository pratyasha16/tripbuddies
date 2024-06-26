# Resource Group
resource_group_name     = "tripbuddies-new-rg"
resource_group_location = "Central India"

# Virtual Network
vnet_name = "tripbuddies_vnet"

# Subnet
subnet_name                    = "postgres"
subnet_address_prefix          = ["10.0.2.0/24"]
subnet_delegation_name         = "database"
subnet_service_delegation_name = "Microsoft.DBforPostgreSQL/flexibleServers"

# postgres
postgres_name     = "tripbudpg"
postgres_username = "tripbuddies"
postgres_password = "BeCreative@2024"

#postgres databases
postgres_database = ["tripbuddies", "trip", "accounts", "user_credentials"]

# ACR
acr_name = "tripbuddies"

# AKS
cluster_name        = "tripbuddies-aks"
system_node_count   = 1
node_resource_group = "tripbuddies-aks-resources"