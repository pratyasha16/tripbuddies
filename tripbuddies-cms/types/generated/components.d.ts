import type { Schema, Attribute } from '@strapi/strapi';

export interface RegusersRegisteredusers extends Schema.Component {
  collectionName: 'components_regusers_registeredusers';
  info: {
    displayName: 'TripUsers';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'regusers.registeredusers': RegusersRegisteredusers;
    }
  }
}
