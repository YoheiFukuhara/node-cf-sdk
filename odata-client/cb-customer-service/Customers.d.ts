/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CustomersRequestBuilder } from './CustomersRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "Customers" of service "CB_CUSTOMER_SRV".
 */
export declare class Customers extends Entity implements CustomersType {
    /**
     * Technical entity name for Customers.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customers.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Form Of Address.
     * Maximum length: 15.
     * @nullable
     */
    formOfAddress?: string;
    /**
     * Business Partner.
     * Maximum length: 10.
     * @nullable
     */
    partner?: string;
    /**
     * Customer Name.
     * Maximum length: 35.
     * @nullable
     */
    customerName?: string;
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Central Delivery Block.
     * Maximum length: 20.
     * @nullable
     */
    centralDeliveryBlockDescription?: string;
    /**
     * Billing Block.
     * Maximum length: 20.
     * @nullable
     */
    billingBlockDescription?: string;
    /**
     * Blocking Reason.
     * Maximum length: 20.
     * @nullable
     */
    blockingReasonDescription?: string;
    /**
     * Additional Name.
     * Maximum length: 35.
     * @nullable
     */
    customerAdditionalName?: string;
    /**
     * Address.
     * Maximum length: 35.
     * @nullable
     */
    streetAddressName?: string;
    /**
     * City.
     * Maximum length: 35.
     * @nullable
     */
    cityName?: string;
    /**
     * Region.
     * Maximum length: 20.
     * @nullable
     */
    regionName?: string;
    /**
     * Country.
     * Maximum length: 60.
     * @nullable
     */
    countryName?: string;
    /**
     * Fax.
     * Maximum length: 30.
     * @nullable
     */
    fax?: string;
    /**
     * Mobile.
     * Maximum length: 30.
     * @nullable
     */
    mobile?: string;
    /**
     * Phone.
     * Maximum length: 30.
     * @nullable
     */
    phone?: string;
    /**
     * Postal Code.
     * Maximum length: 10.
     * @nullable
     */
    postalCode?: string;
    /**
     * Email.
     * Maximum length: 241.
     * @nullable
     */
    emailAddress?: string;
    /**
     * Fax Extension.
     * Maximum length: 2.
     * @nullable
     */
    orderBlock?: string;
    /**
     * Address ID.
     * Maximum length: 10.
     * @nullable
     */
    addressId?: string;
    /**
     * Search Term.
     * Maximum length: 10.
     * @nullable
     */
    searchTerm?: string;
    /**
     * Account Group.
     * Maximum length: 4.
     * @nullable
     */
    customerAccountGroup?: string;
    /**
     * International Location Number.
     * Maximum length: 7.
     * @nullable
     */
    internationalLocationNumber?: string;
    /**
     * International Location Number 1.
     * Maximum length: 5.
     * @nullable
     */
    internationalLocationNumber2?: string;
    /**
     * Central Delivery Block Code.
     * Maximum length: 2.
     * @nullable
     */
    deliveryBlock?: string;
    /**
     * Central Billinb Block Code.
     * Maximum length: 2.
     * @nullable
     */
    billingBlock?: string;
    /**
     * International Location Number 2.
     * Maximum length: 1.
     * @nullable
     */
    internationalLocationNumber3?: string;
    /**
     * Posting block.
     * Maximum length: 1.
     * @nullable
     */
    postingBlock?: string;
    /**
     * Industry.
     * Maximum length: 4.
     * @nullable
     */
    industryCode?: string;
    /**
     * Created by.
     * Maximum length: 12.
     * @nullable
     */
    createdBy?: string;
    /**
     * Language.
     * Maximum length: 1.
     * @nullable
     */
    language?: string;
    /**
     * Tax Number.
     * Maximum length: 16.
     * @nullable
     */
    taxId1?: string;
    /**
     * URL.
     * Maximum length: 132.
     * @nullable
     */
    customerHomepage?: string;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * One-to-many navigation property to the [[Customer_Sales_AreAs]] entity.
     */
    snavCustomerSalesArea: Customer_Sales_AreAs[];
    /**
     * One-to-many navigation property to the [[Customer_Comp_CodEs]] entity.
     */
    snavCustomerCompCode: Customer_Comp_CodEs[];
    /**
     * One-to-many navigation property to the [[Customer_Bank_AccouNs]] entity.
     */
    snavCustomerBankAccoun: Customer_Bank_AccouNs[];
    /**
     * One-to-many navigation property to the [[Contact_PersoNs]] entity.
     */
    snavContactPerson: Contact_PersoNs[];
    /**
     * One-to-many navigation property to the [[SalesOrders]] entity.
     */
    csalesOrders: SalesOrders[];
    /**
     * One-to-many navigation property to the [[SalesQuotations]] entity.
     */
    csalesQuotations: SalesQuotations[];
    /**
     * One-to-many navigation property to the [[SalesContracts]] entity.
     */
    csalesContracts: SalesContracts[];
    /**
     * One-to-many navigation property to the [[BillingDocuments]] entity.
     */
    ccustBillDocs: BillingDocuments[];
    /**
     * One-to-many navigation property to the [[SalesGroupContracts]] entity.
     */
    csalesGpContracts: SalesGroupContracts[];
    /**
     * One-to-many navigation property to the [[Customer_Project_Hs]] entity.
     */
    ccustomerProjects: Customer_Project_Hs[];
    /**
     * Returns an entity builder to construct instances `Customers`.
     * @returns A builder that constructs instances of entity type `Customers`.
     */
    static builder(): EntityBuilderType<Customers, CustomersTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Customers` entity type.
     * @returns A `Customers` request builder.
     */
    static requestBuilder(): CustomersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customers`.
     */
    static customField(fieldName: string): CustomField<Customers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Customer_Sales_AreAs, Customer_Sales_AreAsType } from './Customer_Sales_AreAs';
import { Customer_Comp_CodEs, Customer_Comp_CodEsType } from './Customer_Comp_CodEs';
import { Customer_Bank_AccouNs, Customer_Bank_AccouNsType } from './Customer_Bank_AccouNs';
import { Contact_PersoNs, Contact_PersoNsType } from './Contact_PersoNs';
import { SalesOrders, SalesOrdersType } from './SalesOrders';
import { SalesQuotations, SalesQuotationsType } from './SalesQuotations';
import { SalesContracts, SalesContractsType } from './SalesContracts';
import { BillingDocuments, BillingDocumentsType } from './BillingDocuments';
import { SalesGroupContracts, SalesGroupContractsType } from './SalesGroupContracts';
import { Customer_Project_Hs, Customer_Project_HsType } from './Customer_Project_Hs';
export interface CustomersType {
    formOfAddress?: string;
    partner?: string;
    customerName?: string;
    customer: string;
    centralDeliveryBlockDescription?: string;
    billingBlockDescription?: string;
    blockingReasonDescription?: string;
    customerAdditionalName?: string;
    streetAddressName?: string;
    cityName?: string;
    regionName?: string;
    countryName?: string;
    fax?: string;
    mobile?: string;
    phone?: string;
    postalCode?: string;
    emailAddress?: string;
    orderBlock?: string;
    addressId?: string;
    searchTerm?: string;
    customerAccountGroup?: string;
    internationalLocationNumber?: string;
    internationalLocationNumber2?: string;
    deliveryBlock?: string;
    billingBlock?: string;
    internationalLocationNumber3?: string;
    postingBlock?: string;
    industryCode?: string;
    createdBy?: string;
    language?: string;
    taxId1?: string;
    customerHomepage?: string;
    address?: string;
    snavCustomerSalesArea: Customer_Sales_AreAsType[];
    snavCustomerCompCode: Customer_Comp_CodEsType[];
    snavCustomerBankAccoun: Customer_Bank_AccouNsType[];
    snavContactPerson: Contact_PersoNsType[];
    csalesOrders: SalesOrdersType[];
    csalesQuotations: SalesQuotationsType[];
    csalesContracts: SalesContractsType[];
    ccustBillDocs: BillingDocumentsType[];
    csalesGpContracts: SalesGroupContractsType[];
    ccustomerProjects: Customer_Project_HsType[];
}
export interface CustomersTypeForceMandatory {
    formOfAddress: string;
    partner: string;
    customerName: string;
    customer: string;
    centralDeliveryBlockDescription: string;
    billingBlockDescription: string;
    blockingReasonDescription: string;
    customerAdditionalName: string;
    streetAddressName: string;
    cityName: string;
    regionName: string;
    countryName: string;
    fax: string;
    mobile: string;
    phone: string;
    postalCode: string;
    emailAddress: string;
    orderBlock: string;
    addressId: string;
    searchTerm: string;
    customerAccountGroup: string;
    internationalLocationNumber: string;
    internationalLocationNumber2: string;
    deliveryBlock: string;
    billingBlock: string;
    internationalLocationNumber3: string;
    postingBlock: string;
    industryCode: string;
    createdBy: string;
    language: string;
    taxId1: string;
    customerHomepage: string;
    address: string;
    snavCustomerSalesArea: Customer_Sales_AreAsType[];
    snavCustomerCompCode: Customer_Comp_CodEsType[];
    snavCustomerBankAccoun: Customer_Bank_AccouNsType[];
    snavContactPerson: Contact_PersoNsType[];
    csalesOrders: SalesOrdersType[];
    csalesQuotations: SalesQuotationsType[];
    csalesContracts: SalesContractsType[];
    ccustBillDocs: BillingDocumentsType[];
    csalesGpContracts: SalesGroupContractsType[];
    ccustomerProjects: Customer_Project_HsType[];
}
export declare namespace Customers {
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_OF_ADDRESS: StringField<Customers>;
    /**
     * Static representation of the [[partner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER: StringField<Customers>;
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NAME: StringField<Customers>;
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<Customers>;
    /**
     * Static representation of the [[centralDeliveryBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CENTRAL_DELIVERY_BLOCK_DESCRIPTION: StringField<Customers>;
    /**
     * Static representation of the [[billingBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_BLOCK_DESCRIPTION: StringField<Customers>;
    /**
     * Static representation of the [[blockingReasonDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCKING_REASON_DESCRIPTION: StringField<Customers>;
    /**
     * Static representation of the [[customerAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ADDITIONAL_NAME: StringField<Customers>;
    /**
     * Static representation of the [[streetAddressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_ADDRESS_NAME: StringField<Customers>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: StringField<Customers>;
    /**
     * Static representation of the [[regionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGION_NAME: StringField<Customers>;
    /**
     * Static representation of the [[countryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAME: StringField<Customers>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: StringField<Customers>;
    /**
     * Static representation of the [[mobile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILE: StringField<Customers>;
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE: StringField<Customers>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: StringField<Customers>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<Customers>;
    /**
     * Static representation of the [[orderBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_BLOCK: StringField<Customers>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: StringField<Customers>;
    /**
     * Static representation of the [[searchTerm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_TERM: StringField<Customers>;
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_GROUP: StringField<Customers>;
    /**
     * Static representation of the [[internationalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER: StringField<Customers>;
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_2: StringField<Customers>;
    /**
     * Static representation of the [[deliveryBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_BLOCK: StringField<Customers>;
    /**
     * Static representation of the [[billingBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_BLOCK: StringField<Customers>;
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_3: StringField<Customers>;
    /**
     * Static representation of the [[postingBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_BLOCK: StringField<Customers>;
    /**
     * Static representation of the [[industryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE: StringField<Customers>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Customers>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<Customers>;
    /**
     * Static representation of the [[taxId1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_ID_1: StringField<Customers>;
    /**
     * Static representation of the [[customerHomepage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_HOMEPAGE: StringField<Customers>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<Customers>;
    /**
     * Static representation of the one-to-many navigation property [[snavCustomerSalesArea]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAV_CUSTOMER_SALES_AREA: Link<Customers, Customer_Sales_AreAs>;
    /**
     * Static representation of the one-to-many navigation property [[snavCustomerCompCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAV_CUSTOMER_COMP_CODE: Link<Customers, Customer_Comp_CodEs>;
    /**
     * Static representation of the one-to-many navigation property [[snavCustomerBankAccoun]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAV_CUSTOMER_BANK_ACCOUN: Link<Customers, Customer_Bank_AccouNs>;
    /**
     * Static representation of the one-to-many navigation property [[snavContactPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAV_CONTACT_PERSON: Link<Customers, Contact_PersoNs>;
    /**
     * Static representation of the one-to-many navigation property [[csalesOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CSALES_ORDERS: Link<Customers, SalesOrders>;
    /**
     * Static representation of the one-to-many navigation property [[csalesQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CSALES_QUOTATIONS: Link<Customers, SalesQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[csalesContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CSALES_CONTRACTS: Link<Customers, SalesContracts>;
    /**
     * Static representation of the one-to-many navigation property [[ccustBillDocs]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CCUST_BILL_DOCS: Link<Customers, BillingDocuments>;
    /**
     * Static representation of the one-to-many navigation property [[csalesGpContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CSALES_GP_CONTRACTS: Link<Customers, SalesGroupContracts>;
    /**
     * Static representation of the one-to-many navigation property [[ccustomerProjects]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CCUSTOMER_PROJECTS: Link<Customers, Customer_Project_Hs>;
    /**
     * All fields of the Customers entity.
     */
    const _allFields: Array<StringField<Customers> | Link<Customers, Customer_Sales_AreAs> | Link<Customers, Customer_Comp_CodEs> | Link<Customers, Customer_Bank_AccouNs> | Link<Customers, Contact_PersoNs> | Link<Customers, SalesOrders> | Link<Customers, SalesQuotations> | Link<Customers, SalesContracts> | Link<Customers, BillingDocuments> | Link<Customers, SalesGroupContracts> | Link<Customers, Customer_Project_Hs>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Customers>;
    /**
     * All key fields of the Customers entity.
     */
    const _keyFields: Array<Selectable<Customers>>;
    /**
     * Mapping of all key field names to the respective static field property Customers.
     */
    const _keys: {
        [keys: string]: Selectable<Customers>;
    };
}
//# sourceMappingURL=Customers.d.ts.map