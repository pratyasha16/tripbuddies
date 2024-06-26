resource "azurerm_container_registry" "acr" {
  name                = var.acr_name
  resource_group_name = var.resource_group_name
  location            = var.location
  sku                 = "Basic"
  admin_enabled = true

  tags = {
    managed_by = "Terraform"
  }
}

output "acr_id" {
  value = azurerm_container_registry.acr.id
}