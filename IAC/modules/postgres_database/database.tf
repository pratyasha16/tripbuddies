resource "azurerm_postgresql_flexible_server_database" "pg_db" {
  for_each = var.pg_databases
  name      = each.value
  server_id = var.postgres_id
  collation = "en_US.utf8"
  charset   = "utf8"

  # prevent the possibility of accidental data loss
  lifecycle {
    prevent_destroy = false
  }
}