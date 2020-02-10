/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { SalesGroupContractsRequestBuilder } from './SalesGroupContractsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField, Time, TimeField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "SalesGroupContracts" of service "CB_CUSTOMER_SRV".
 */
export class SalesGroupContracts extends Entity implements SalesGroupContractsType {
  /**
   * Technical entity name for SalesGroupContracts.
   */
  static _entityName = 'SalesGroupContracts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesGroupContracts.
   */
  static _serviceName = 'CB_CUSTOMER_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
  /**
   * Sales Document Type.
   * Maximum length: 4.
   * @nullable
   */
  salesGroupContractType?: string;
  /**
   * Document Description.
   * Maximum length: 60.
   * @nullable
   */
  vbelnDescr?: string;
  /**
   * Sales Document Type.
   * Maximum length: 60.
   * @nullable
   */
  salesGroupContractTypeName?: string;
  /**
   * Customer Group Contract.
   * Maximum length: 10.
   */
  salesGroupContract!: string;
  /**
   * Sold-To Party.
   * Maximum length: 10.
   * @nullable
   */
  soldToParty?: string;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyCityName?: string;
  /**
   * Country.
   * Maximum length: 3.
   * @nullable
   */
  soldToPartyCountry?: string;
  /**
   * Description.
   * Maximum length: 40.
   * @nullable
   */
  salesContractName?: string;
  /**
   * Customer Name.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyName?: string;
  /**
   * Document Date.
   * @nullable
   */
  salesGroupContractDate?: Moment;
  /**
   * Valid From.
   * @nullable
   */
  salesGrpContrValdtyStartDate?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  salesGrpContrValdtyEndDate?: Moment;
  /**
   * Customer.
   * Maximum length: 10.
   * @nullable
   */
  contactPerson?: string;
  /**
   * Additional Customer Name.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyAdditionalName?: string;
  /**
   * First Name.
   * Maximum length: 35.
   * @nullable
   */
  contactPersonFirstName?: string;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: string;
  /**
   * Customer Name.
   * Maximum length: 40.
   * @nullable
   */
  shipToPartyName?: string;
  /**
   * Additional Customer Name.
   * Maximum length: 40.
   * @nullable
   */
  shipToPartyAdditionalName?: string;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  shipToPartyCityName?: string;
  /**
   * Country.
   * Maximum length: 3.
   * @nullable
   */
  shipToPartyCountry?: string;
  /**
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  salesOrganization?: string;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  distributionChannel?: string;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: string;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  division?: string;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  salesGroup?: string;
  /**
   * Sales Organization.
   * Maximum length: 60.
   * @nullable
   */
  salesOrganizationName?: string;
  /**
   * Distribution Channel.
   * Maximum length: 60.
   * @nullable
   */
  distributionChannelName?: string;
  /**
   * Sales Group.
   * Maximum length: 60.
   * @nullable
   */
  salesGroupName?: string;
  /**
   * Sales Office.
   * Maximum length: 60.
   * @nullable
   */
  salesOfficeName?: string;
  /**
   * Division.
   * Maximum length: 60.
   * @nullable
   */
  divisionName?: string;
  /**
   * Created On.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Time.
   * @nullable
   */
  creationTime?: Time;
  /**
   * Created By.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Title.
   * Maximum length: 60.
   * @nullable
   */
  academicTitleName?: string;
  /**
   * Last Name.
   * Maximum length: 35.
   * @nullable
   */
  contactPersonLastName?: string;
  /**
   * City.
   * Maximum length: 35.
   * @nullable
   */
  contactPersonCityName?: string;
  /**
   * Telephone.
   * Maximum length: 16.
   * @nullable
   */
  contactPersonPhoneNumber?: string;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  createdByUserFirstName?: string;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  createdByUserLastName?: string;

  /**
   * Returns an entity builder to construct instances `SalesGroupContracts`.
   * @returns A builder that constructs instances of entity type `SalesGroupContracts`.
   */
  static builder(): EntityBuilderType<SalesGroupContracts, SalesGroupContractsTypeForceMandatory> {
    return Entity.entityBuilder(SalesGroupContracts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesGroupContracts` entity type.
   * @returns A `SalesGroupContracts` request builder.
   */
  static requestBuilder(): SalesGroupContractsRequestBuilder {
    return new SalesGroupContractsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesGroupContracts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesGroupContracts`.
   */
  static customField(fieldName: string): CustomField<SalesGroupContracts> {
    return Entity.customFieldSelector(fieldName, SalesGroupContracts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SalesGroupContractsType {
  salesGroupContractType?: string;
  vbelnDescr?: string;
  salesGroupContractTypeName?: string;
  salesGroupContract: string;
  soldToParty?: string;
  soldToPartyCityName?: string;
  soldToPartyCountry?: string;
  salesContractName?: string;
  soldToPartyName?: string;
  salesGroupContractDate?: Moment;
  salesGrpContrValdtyStartDate?: Moment;
  salesGrpContrValdtyEndDate?: Moment;
  contactPerson?: string;
  soldToPartyAdditionalName?: string;
  contactPersonFirstName?: string;
  shipToParty?: string;
  shipToPartyName?: string;
  shipToPartyAdditionalName?: string;
  shipToPartyCityName?: string;
  shipToPartyCountry?: string;
  salesOrganization?: string;
  distributionChannel?: string;
  salesOffice?: string;
  division?: string;
  salesGroup?: string;
  salesOrganizationName?: string;
  distributionChannelName?: string;
  salesGroupName?: string;
  salesOfficeName?: string;
  divisionName?: string;
  creationDate?: Moment;
  creationTime?: Time;
  createdByUser?: string;
  academicTitleName?: string;
  contactPersonLastName?: string;
  contactPersonCityName?: string;
  contactPersonPhoneNumber?: string;
  createdByUserFirstName?: string;
  createdByUserLastName?: string;
}

export interface SalesGroupContractsTypeForceMandatory {
  salesGroupContractType: string;
  vbelnDescr: string;
  salesGroupContractTypeName: string;
  salesGroupContract: string;
  soldToParty: string;
  soldToPartyCityName: string;
  soldToPartyCountry: string;
  salesContractName: string;
  soldToPartyName: string;
  salesGroupContractDate: Moment;
  salesGrpContrValdtyStartDate: Moment;
  salesGrpContrValdtyEndDate: Moment;
  contactPerson: string;
  soldToPartyAdditionalName: string;
  contactPersonFirstName: string;
  shipToParty: string;
  shipToPartyName: string;
  shipToPartyAdditionalName: string;
  shipToPartyCityName: string;
  shipToPartyCountry: string;
  salesOrganization: string;
  distributionChannel: string;
  salesOffice: string;
  division: string;
  salesGroup: string;
  salesOrganizationName: string;
  distributionChannelName: string;
  salesGroupName: string;
  salesOfficeName: string;
  divisionName: string;
  creationDate: Moment;
  creationTime: Time;
  createdByUser: string;
  academicTitleName: string;
  contactPersonLastName: string;
  contactPersonCityName: string;
  contactPersonPhoneNumber: string;
  createdByUserFirstName: string;
  createdByUserLastName: string;
}

export namespace SalesGroupContracts {
  /**
   * Static representation of the [[salesGroupContractType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP_CONTRACT_TYPE: StringField<SalesGroupContracts> = new StringField('SalesGroupContractType', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[vbelnDescr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VBELN_DESCR: StringField<SalesGroupContracts> = new StringField('VBELN_DESCR', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesGroupContractTypeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP_CONTRACT_TYPE_NAME: StringField<SalesGroupContracts> = new StringField('SalesGroupContractTypeName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesGroupContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP_CONTRACT: StringField<SalesGroupContracts> = new StringField('SalesGroupContract', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY: StringField<SalesGroupContracts> = new StringField('SoldToParty', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyCityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_CITY_NAME: StringField<SalesGroupContracts> = new StringField('SoldToPartyCityName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_COUNTRY: StringField<SalesGroupContracts> = new StringField('SoldToPartyCountry', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesContractName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CONTRACT_NAME: StringField<SalesGroupContracts> = new StringField('SalesContractName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_NAME: StringField<SalesGroupContracts> = new StringField('SoldToPartyName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesGroupContractDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP_CONTRACT_DATE: DateField<SalesGroupContracts> = new DateField('SalesGroupContractDate', SalesGroupContracts, 'Edm.DateTime');
  /**
   * Static representation of the [[salesGrpContrValdtyStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GRP_CONTR_VALDTY_START_DATE: DateField<SalesGroupContracts> = new DateField('SalesGrpContrValdtyStartDate', SalesGroupContracts, 'Edm.DateTime');
  /**
   * Static representation of the [[salesGrpContrValdtyEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GRP_CONTR_VALDTY_END_DATE: DateField<SalesGroupContracts> = new DateField('SalesGrpContrValdtyEndDate', SalesGroupContracts, 'Edm.DateTime');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: StringField<SalesGroupContracts> = new StringField('ContactPerson', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_ADDITIONAL_NAME: StringField<SalesGroupContracts> = new StringField('SoldToPartyAdditionalName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[contactPersonFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_FIRST_NAME: StringField<SalesGroupContracts> = new StringField('ContactPersonFirstName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[shipToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY: StringField<SalesGroupContracts> = new StringField('ShipToParty', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_NAME: StringField<SalesGroupContracts> = new StringField('ShipToPartyName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_ADDITIONAL_NAME: StringField<SalesGroupContracts> = new StringField('ShipToPartyAdditionalName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyCityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_CITY_NAME: StringField<SalesGroupContracts> = new StringField('ShipToPartyCityName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_COUNTRY: StringField<SalesGroupContracts> = new StringField('ShipToPartyCountry', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<SalesGroupContracts> = new StringField('SalesOrganization', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<SalesGroupContracts> = new StringField('DistributionChannel', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OFFICE: StringField<SalesGroupContracts> = new StringField('SalesOffice', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<SalesGroupContracts> = new StringField('Division', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP: StringField<SalesGroupContracts> = new StringField('SalesGroup', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesOrganizationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION_NAME: StringField<SalesGroupContracts> = new StringField('SalesOrganizationName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[distributionChannelName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL_NAME: StringField<SalesGroupContracts> = new StringField('DistributionChannelName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP_NAME: StringField<SalesGroupContracts> = new StringField('SalesGroupName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[salesOfficeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OFFICE_NAME: StringField<SalesGroupContracts> = new StringField('SalesOfficeName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[divisionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAME: StringField<SalesGroupContracts> = new StringField('DivisionName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<SalesGroupContracts> = new DateField('CreationDate', SalesGroupContracts, 'Edm.DateTime');
  /**
   * Static representation of the [[creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_TIME: TimeField<SalesGroupContracts> = new TimeField('CreationTime', SalesGroupContracts, 'Edm.Time');
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<SalesGroupContracts> = new StringField('CreatedByUser', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[academicTitleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACADEMIC_TITLE_NAME: StringField<SalesGroupContracts> = new StringField('AcademicTitleName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[contactPersonLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_LAST_NAME: StringField<SalesGroupContracts> = new StringField('ContactPersonLastName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[contactPersonCityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CITY_NAME: StringField<SalesGroupContracts> = new StringField('ContactPersonCityName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[contactPersonPhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_PHONE_NUMBER: StringField<SalesGroupContracts> = new StringField('ContactPersonPhoneNumber', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[createdByUserFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_FIRST_NAME: StringField<SalesGroupContracts> = new StringField('CreatedByUserFirstName', SalesGroupContracts, 'Edm.String');
  /**
   * Static representation of the [[createdByUserLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_LAST_NAME: StringField<SalesGroupContracts> = new StringField('CreatedByUserLastName', SalesGroupContracts, 'Edm.String');
  /**
   * All fields of the SalesGroupContracts entity.
   */
  export const _allFields: Array<StringField<SalesGroupContracts> | DateField<SalesGroupContracts> | TimeField<SalesGroupContracts>> = [
    SalesGroupContracts.SALES_GROUP_CONTRACT_TYPE,
    SalesGroupContracts.VBELN_DESCR,
    SalesGroupContracts.SALES_GROUP_CONTRACT_TYPE_NAME,
    SalesGroupContracts.SALES_GROUP_CONTRACT,
    SalesGroupContracts.SOLD_TO_PARTY,
    SalesGroupContracts.SOLD_TO_PARTY_CITY_NAME,
    SalesGroupContracts.SOLD_TO_PARTY_COUNTRY,
    SalesGroupContracts.SALES_CONTRACT_NAME,
    SalesGroupContracts.SOLD_TO_PARTY_NAME,
    SalesGroupContracts.SALES_GROUP_CONTRACT_DATE,
    SalesGroupContracts.SALES_GRP_CONTR_VALDTY_START_DATE,
    SalesGroupContracts.SALES_GRP_CONTR_VALDTY_END_DATE,
    SalesGroupContracts.CONTACT_PERSON,
    SalesGroupContracts.SOLD_TO_PARTY_ADDITIONAL_NAME,
    SalesGroupContracts.CONTACT_PERSON_FIRST_NAME,
    SalesGroupContracts.SHIP_TO_PARTY,
    SalesGroupContracts.SHIP_TO_PARTY_NAME,
    SalesGroupContracts.SHIP_TO_PARTY_ADDITIONAL_NAME,
    SalesGroupContracts.SHIP_TO_PARTY_CITY_NAME,
    SalesGroupContracts.SHIP_TO_PARTY_COUNTRY,
    SalesGroupContracts.SALES_ORGANIZATION,
    SalesGroupContracts.DISTRIBUTION_CHANNEL,
    SalesGroupContracts.SALES_OFFICE,
    SalesGroupContracts.DIVISION,
    SalesGroupContracts.SALES_GROUP,
    SalesGroupContracts.SALES_ORGANIZATION_NAME,
    SalesGroupContracts.DISTRIBUTION_CHANNEL_NAME,
    SalesGroupContracts.SALES_GROUP_NAME,
    SalesGroupContracts.SALES_OFFICE_NAME,
    SalesGroupContracts.DIVISION_NAME,
    SalesGroupContracts.CREATION_DATE,
    SalesGroupContracts.CREATION_TIME,
    SalesGroupContracts.CREATED_BY_USER,
    SalesGroupContracts.ACADEMIC_TITLE_NAME,
    SalesGroupContracts.CONTACT_PERSON_LAST_NAME,
    SalesGroupContracts.CONTACT_PERSON_CITY_NAME,
    SalesGroupContracts.CONTACT_PERSON_PHONE_NUMBER,
    SalesGroupContracts.CREATED_BY_USER_FIRST_NAME,
    SalesGroupContracts.CREATED_BY_USER_LAST_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesGroupContracts> = new AllFields('*', SalesGroupContracts);
  /**
   * All key fields of the SalesGroupContracts entity.
   */
  export const _keyFields: Array<Selectable<SalesGroupContracts>> = [SalesGroupContracts.SALES_GROUP_CONTRACT];
  /**
   * Mapping of all key field names to the respective static field property SalesGroupContracts.
   */
  export const _keys: { [keys: string]: Selectable<SalesGroupContracts> } = SalesGroupContracts._keyFields.reduce((acc: { [keys: string]: Selectable<SalesGroupContracts> }, field: Selectable<SalesGroupContracts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
