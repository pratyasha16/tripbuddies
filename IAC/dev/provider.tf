provider "azurerm" {
  features {}
}



terraform {

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.109.0"
    }
  }


  backend "azurerm" {
    resource_group_name  = "tripbuddies-sa-rg"
    storage_account_name = "tripbuddies"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}
