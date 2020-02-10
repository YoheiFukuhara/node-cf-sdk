/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { SalesGroupContractsRequestBuilder } from './SalesGroupContractsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField, Time, TimeField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "SalesGroupContracts" of service "CB_CUSTOMER_SRV".
 */
export declare class SalesGroupContracts extends Entity implements SalesGroupContractsType {
    /**
     * Technical entity name for SalesGroupContracts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesGroupContracts.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    salesGroupContract: string;
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
    static builder(): EntityBuilderType<SalesGroupContracts, SalesGroupContractsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesGroupContracts` entity type.
     * @returns A `SalesGroupContracts` request builder.
     */
    static requestBuilder(): SalesGroupContractsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesGroupContracts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesGroupContracts`.
     */
    static customField(fieldName: string): CustomField<SalesGroupContracts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace SalesGroupContracts {
    /**
     * Static representation of the [[salesGroupContractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP_CONTRACT_TYPE: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[vbelnDescr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VBELN_DESCR: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesGroupContractTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP_CONTRACT_TYPE_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesGroupContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP_CONTRACT: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[soldToPartyCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_CITY_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[soldToPartyCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_COUNTRY: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesContractName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CONTRACT_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[soldToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesGroupContractDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP_CONTRACT_DATE: DateField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesGrpContrValdtyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GRP_CONTR_VALDTY_START_DATE: DateField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesGrpContrValdtyEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GRP_CONTR_VALDTY_END_DATE: DateField<SalesGroupContracts>;
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_ADDITIONAL_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[contactPersonFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_FIRST_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[shipToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_ADDITIONAL_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[shipToPartyCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_CITY_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[shipToPartyCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_COUNTRY: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OFFICE: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[salesOfficeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OFFICE_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<SalesGroupContracts>;
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_TIME: TimeField<SalesGroupContracts>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[academicTitleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACADEMIC_TITLE_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[contactPersonLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_LAST_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[contactPersonCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CITY_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[contactPersonPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_PHONE_NUMBER: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[createdByUserFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_FIRST_NAME: StringField<SalesGroupContracts>;
    /**
     * Static representation of the [[createdByUserLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_LAST_NAME: StringField<SalesGroupContracts>;
    /**
     * All fields of the SalesGroupContracts entity.
     */
    const _allFields: Array<StringField<SalesGroupContracts> | DateField<SalesGroupContracts> | TimeField<SalesGroupContracts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesGroupContracts>;
    /**
     * All key fields of the SalesGroupContracts entity.
     */
    const _keyFields: Array<Selectable<SalesGroupContracts>>;
    /**
     * Mapping of all key field names to the respective static field property SalesGroupContracts.
     */
    const _keys: {
        [keys: string]: Selectable<SalesGroupContracts>;
    };
}
//# sourceMappingURL=SalesGroupContracts.d.ts.map