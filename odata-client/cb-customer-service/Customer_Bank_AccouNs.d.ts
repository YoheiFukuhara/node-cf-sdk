/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { Customer_Bank_AccouNsRequestBuilder } from './Customer_Bank_AccouNsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "CUSTOMER_BANK_ACCOUNs" of service "CB_CUSTOMER_SRV".
 */
export declare class Customer_Bank_AccouNs extends Entity implements Customer_Bank_AccouNsType {
    /**
     * Technical entity name for Customer_Bank_AccouNs.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer_Bank_AccouNs.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Country Code.
     * Maximum length: 3.
     */
    country: string;
    /**
     * Customer Number.
     * Maximum length: 10.
     * @nullable
     */
    kunnr1?: string;
    /**
     * Country Name.
     * Maximum length: 60.
     * @nullable
     */
    countryName?: string;
    /**
     * Bank Key.
     * Maximum length: 15.
     */
    bankNumber: string;
    /**
     * Bank Account.
     * Maximum length: 18.
     */
    bankAccount: string;
    /**
     * Bank Name.
     * Maximum length: 60.
     * @nullable
     */
    bankName?: string;
    /**
     * Account Holder.
     * Maximum length: 60.
     * @nullable
     */
    accountHolder?: string;
    /**
     * City.
     * Maximum length: 35.
     * @nullable
     */
    cityName?: string;
    /**
     * SWIFT Code.
     * Maximum length: 11.
     * @nullable
     */
    swift?: string;
    /**
     * Address Number.
     * Maximum length: 10.
     * @nullable
     */
    addressNumber?: string;
    /**
     * Returns an entity builder to construct instances `Customer_Bank_AccouNs`.
     * @returns A builder that constructs instances of entity type `Customer_Bank_AccouNs`.
     */
    static builder(): EntityBuilderType<Customer_Bank_AccouNs, Customer_Bank_AccouNsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Customer_Bank_AccouNs` entity type.
     * @returns A `Customer_Bank_AccouNs` request builder.
     */
    static requestBuilder(): Customer_Bank_AccouNsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Bank_AccouNs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer_Bank_AccouNs`.
     */
    static customField(fieldName: string): CustomField<Customer_Bank_AccouNs>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Customer_Bank_AccouNsType {
    country: string;
    kunnr1?: string;
    countryName?: string;
    bankNumber: string;
    bankAccount: string;
    bankName?: string;
    accountHolder?: string;
    cityName?: string;
    swift?: string;
    addressNumber?: string;
}
export interface Customer_Bank_AccouNsTypeForceMandatory {
    country: string;
    kunnr1: string;
    countryName: string;
    bankNumber: string;
    bankAccount: string;
    bankName: string;
    accountHolder: string;
    cityName: string;
    swift: string;
    addressNumber: string;
}
export declare namespace Customer_Bank_AccouNs {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[kunnr1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KUNNR_1: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[countryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAME: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[bankNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NUMBER: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NAME: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[accountHolder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_HOLDER: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[swift]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SWIFT: StringField<Customer_Bank_AccouNs>;
    /**
     * Static representation of the [[addressNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NUMBER: StringField<Customer_Bank_AccouNs>;
    /**
     * All fields of the Customer_Bank_AccouNs entity.
     */
    const _allFields: Array<StringField<Customer_Bank_AccouNs>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Customer_Bank_AccouNs>;
    /**
     * All key fields of the Customer_Bank_AccouNs entity.
     */
    const _keyFields: Array<Selectable<Customer_Bank_AccouNs>>;
    /**
     * Mapping of all key field names to the respective static field property Customer_Bank_AccouNs.
     */
    const _keys: {
        [keys: string]: Selectable<Customer_Bank_AccouNs>;
    };
}
//# sourceMappingURL=Customer_Bank_AccouNs.d.ts.map