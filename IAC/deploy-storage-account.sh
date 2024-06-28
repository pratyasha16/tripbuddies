#!/bin/bash

# Variables
RESOURCE_GROUP="tripbuddies-sa-rg"
STORAGE_ACCOUNT_NAME="tripbuddies"
LOCATION="centralindia"
TEMPLATE_FILE="storage-account/sa.json"

# Check if resource group exists
echo "Checking if the resource group exists"
RESOURCE_GROUP_CHECK=$(az group exists -n $RESOURCE_GROUP)

if [ "$RESOURCE_GROUP_CHECK" == "false" ]; then
    echo "Resource group does not exist. Creating resource group..."
  
  # Create the resource group
  az group create --name $RESOURCE_GROUP --location $LOCATION
  
  echo "Resource group created."
else
  echo "Resource group already exists. No action needed."
fi

# Check if the storage account exists
echo "Checking if the storage account exists..."
STORAGE_ACCOUNT_CHECK=$(az storage account check-name --name $STORAGE_ACCOUNT_NAME --query "nameAvailable" --output tsv)

if [ "$STORAGE_ACCOUNT_CHECK" == "true" ]; then
  echo "Storage account does not exist. Proceeding with deployment..."
  
  # Deploy the ARM template
  az deployment group create \
    --resource-group $RESOURCE_GROUP \
    --template-file $TEMPLATE_FILE \

  echo "Storage account deployment initiated."
else
  echo "Storage account already exists. No deployment necessary."
fi
