variable "resource_group_name" {
  type = string
}

variable "resource_group_location" {
  type = string
}

variable "vnet_name" {
  type = string
}

variable "subnet_name" {
  type = string
}

variable "subnet_address_prefix" {
  type = list(string)
}

variable "subnet_delegation_name" {
  type = string
}

variable "subnet_service_delegation_name" {
  type = string
}

variable "postgres_name" {
  type = string
}

variable "postgres_username" {
  type = string
}

variable "postgres_password" {
  type = string
}

variable "acr_name" {
  type        = string
  description = "ACR name"
}

variable "postgres_database" {
  type = set(string)
}

variable "cluster_name" {
  type        = string
  description = "AKS name in Azure"
}

variable "system_node_count" {
  type        = number
  description = "Number of AKS worker nodes"
}

variable "node_resource_group" {
  type        = string
  description = "RG name for cluster resources in Azure"
}
