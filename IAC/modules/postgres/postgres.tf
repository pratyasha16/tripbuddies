resource "azurerm_postgresql_flexible_server" "postgres" {
  name                          = var.postgres_name
  resource_group_name           = var.resource_group_name
  location                      = var.resource_group_location
  version                       = "16"
  public_network_access_enabled = true
  administrator_login           = var.postgres_username
  administrator_password        = var.postgres_password

  storage_mb   = 32768
  storage_tier = "P4"

  sku_name   = "B_Standard_B1ms"

}

resource "azurerm_postgresql_flexible_server_firewall_rule" "open_to_all" {
  name             = "open_to_all"
  server_id        = azurerm_postgresql_flexible_server.postgres.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "255.255.255.255"
}

output "postgres_id" {
  value = azurerm_postgresql_flexible_server.postgres.id
}