/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { Contact_PersoNsRequestBuilder } from './Contact_PersoNsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CONTACT_PERSONs" of service "CB_CUSTOMER_SRV".
 */
export class Contact_PersoNs extends Entity implements Contact_PersoNsType {
  /**
   * Technical entity name for Contact_PersoNs.
   */
  static _entityName = 'CONTACT_PERSONs';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Contact_PersoNs.
   */
  static _serviceName = 'CB_CUSTOMER_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
  /**
   * First Name.
   * Maximum length: 35.
   * @nullable
   */
  contactPersonFirstName?: string;
  /**
   * Partner.
   * Maximum length: 10.
   */
  contactPersonNumber!: string;
  /**
   * Last Name.
   * Maximum length: 35.
   * @nullable
   */
  contactPersonLastName?: string;
  /**
   * Department.
   * Maximum length: 60.
   * @nullable
   */
  contactPersonDepartment2?: string;
  /**
   * Job Title.
   * Maximum length: 60.
   * @nullable
   */
  contactPersonFunction2?: string;
  /**
   * Email.
   * Maximum length: 241.
   * @nullable
   */
  contactPersonEmail?: string;
  /**
   * Phone.
   * Maximum length: 30.
   * @nullable
   */
  contactPersonPhone?: string;
  /**
   * Street.
   * Maximum length: 60.
   * @nullable
   */
  contactPersonStreet?: string;
  /**
   * House Number.
   * Maximum length: 10.
   * @nullable
   */
  contactPersonHouseNumber?: string;
  /**
   * Mobile.
   * Maximum length: 30.
   * @nullable
   */
  contactPersonMobile?: string;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  contactPersonCity?: string;
  /**
   * Contact Person Region.
   * Maximum length: 20.
   * @nullable
   */
  contactPersonRegion?: string;
  /**
   * Contact Person Country.
   * Maximum length: 60.
   * @nullable
   */
  contactPersonCountry?: string;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  contactPersonPostalCode?: string;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  contactPersonFullName?: string;

  /**
   * Returns an entity builder to construct instances `Contact_PersoNs`.
   * @returns A builder that constructs instances of entity type `Contact_PersoNs`.
   */
  static builder(): EntityBuilderType<Contact_PersoNs, Contact_PersoNsTypeForceMandatory> {
    return Entity.entityBuilder(Contact_PersoNs);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Contact_PersoNs` entity type.
   * @returns A `Contact_PersoNs` request builder.
   */
  static requestBuilder(): Contact_PersoNsRequestBuilder {
    return new Contact_PersoNsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Contact_PersoNs`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Contact_PersoNs`.
   */
  static customField(fieldName: string): CustomField<Contact_PersoNs> {
    return Entity.customFieldSelector(fieldName, Contact_PersoNs);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Contact_PersoNsType {
  contactPersonFirstName?: string;
  contactPersonNumber: string;
  contactPersonLastName?: string;
  contactPersonDepartment2?: string;
  contactPersonFunction2?: string;
  contactPersonEmail?: string;
  contactPersonPhone?: string;
  contactPersonStreet?: string;
  contactPersonHouseNumber?: string;
  contactPersonMobile?: string;
  contactPersonCity?: string;
  contactPersonRegion?: string;
  contactPersonCountry?: string;
  contactPersonPostalCode?: string;
  contactPersonFullName?: string;
}

export interface Contact_PersoNsTypeForceMandatory {
  contactPersonFirstName: string;
  contactPersonNumber: string;
  contactPersonLastName: string;
  contactPersonDepartment2: string;
  contactPersonFunction2: string;
  contactPersonEmail: string;
  contactPersonPhone: string;
  contactPersonStreet: string;
  contactPersonHouseNumber: string;
  contactPersonMobile: string;
  contactPersonCity: string;
  contactPersonRegion: string;
  contactPersonCountry: string;
  contactPersonPostalCode: string;
  contactPersonFullName: string;
}

export namespace Contact_PersoNs {
  /**
   * Static representation of the [[contactPersonFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_FIRST_NAME: StringField<Contact_PersoNs> = new StringField('ContactPersonFirstName', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_NUMBER: StringField<Contact_PersoNs> = new StringField('ContactPersonNumber', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_LAST_NAME: StringField<Contact_PersoNs> = new StringField('ContactPersonLastName', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonDepartment2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_DEPARTMENT_2: StringField<Contact_PersoNs> = new StringField('ContactPersonDepartment2', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonFunction2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_FUNCTION_2: StringField<Contact_PersoNs> = new StringField('ContactPersonFunction2', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_EMAIL: StringField<Contact_PersoNs> = new StringField('ContactPersonEmail', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_PHONE: StringField<Contact_PersoNs> = new StringField('ContactPersonPhone', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonStreet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_STREET: StringField<Contact_PersoNs> = new StringField('ContactPersonStreet', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonHouseNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_HOUSE_NUMBER: StringField<Contact_PersoNs> = new StringField('ContactPersonHouseNumber', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonMobile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_MOBILE: StringField<Contact_PersoNs> = new StringField('ContactPersonMobile', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CITY: StringField<Contact_PersoNs> = new StringField('ContactPersonCity', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_REGION: StringField<Contact_PersoNs> = new StringField('ContactPersonRegion', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_COUNTRY: StringField<Contact_PersoNs> = new StringField('ContactPersonCountry', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonPostalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_POSTAL_CODE: StringField<Contact_PersoNs> = new StringField('ContactPersonPostalCode', Contact_PersoNs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_FULL_NAME: StringField<Contact_PersoNs> = new StringField('ContactPersonFullName', Contact_PersoNs, 'Edm.String');
  /**
   * All fields of the Contact_PersoNs entity.
   */
  export const _allFields: Array<StringField<Contact_PersoNs>> = [
    Contact_PersoNs.CONTACT_PERSON_FIRST_NAME,
    Contact_PersoNs.CONTACT_PERSON_NUMBER,
    Contact_PersoNs.CONTACT_PERSON_LAST_NAME,
    Contact_PersoNs.CONTACT_PERSON_DEPARTMENT_2,
    Contact_PersoNs.CONTACT_PERSON_FUNCTION_2,
    Contact_PersoNs.CONTACT_PERSON_EMAIL,
    Contact_PersoNs.CONTACT_PERSON_PHONE,
    Contact_PersoNs.CONTACT_PERSON_STREET,
    Contact_PersoNs.CONTACT_PERSON_HOUSE_NUMBER,
    Contact_PersoNs.CONTACT_PERSON_MOBILE,
    Contact_PersoNs.CONTACT_PERSON_CITY,
    Contact_PersoNs.CONTACT_PERSON_REGION,
    Contact_PersoNs.CONTACT_PERSON_COUNTRY,
    Contact_PersoNs.CONTACT_PERSON_POSTAL_CODE,
    Contact_PersoNs.CONTACT_PERSON_FULL_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Contact_PersoNs> = new AllFields('*', Contact_PersoNs);
  /**
   * All key fields of the Contact_PersoNs entity.
   */
  export const _keyFields: Array<Selectable<Contact_PersoNs>> = [Contact_PersoNs.CONTACT_PERSON_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property Contact_PersoNs.
   */
  export const _keys: { [keys: string]: Selectable<Contact_PersoNs> } = Contact_PersoNs._keyFields.reduce((acc: { [keys: string]: Selectable<Contact_PersoNs> }, field: Selectable<Contact_PersoNs>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
