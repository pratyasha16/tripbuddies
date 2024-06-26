module "resource_group" {
  source              = "../modules/resource-group"
  resource_group_name = var.resource_group_name
  location            = var.resource_group_location
}

module "postgres" {
  source                  = "../modules/postgres"
  postgres_name           = var.postgres_name
  resource_group_name     = module.resource_group.rg_name
  resource_group_location = module.resource_group.rg_location
  postgres_username       = var.postgres_username
  postgres_password       = var.postgres_password
}

module "databases" {
  source       = "../modules/postgres_database"
  for_each     = var.postgres_database
  postgres_id  = module.postgres.postgres_id
  pg_databases = [each.value]
}

module "acr" {
  source              = "../modules/acr"
  resource_group_name = module.resource_group.rg_name
  location            = module.resource_group.rg_location
  acr_name            = var.acr_name
}

module "aks" {
  source              = "../modules/aks"
  cluster_name        = var.cluster_name
  location            = module.resource_group.rg_location
  resource_group_name = module.resource_group.rg_name
  node_resource_group = var.node_resource_group
  system_node_count   = var.system_node_count

  depends_on = [
    module.acr
  ]
}

//assign acrpull role to aks cluster
resource "azurerm_role_assignment" "acr_role_assignment" {
   principal_id                     = module.aks.aks_principal_id
   role_definition_name             = "AcrPull"
   scope                            = module.acr.acr_id
    skip_service_principal_aad_check = false
}