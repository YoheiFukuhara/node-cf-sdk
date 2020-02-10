/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { Customer_Comp_CodEsRequestBuilder } from './Customer_Comp_CodEsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "CUSTOMER_COMP_CODEs" of service "CB_CUSTOMER_SRV".
 */
export declare class Customer_Comp_CodEs extends Entity implements Customer_Comp_CodEsType {
    /**
     * Technical entity name for Customer_Comp_CodEs.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer_Comp_CodEs.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Title.
     * Maximum length: 15.
     * @nullable
     */
    formOfAddressCc?: string;
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customerCc: string;
    /**
     * Customer Name.
     * Maximum length: 35.
     * @nullable
     */
    contactPersonLastName?: string;
    /**
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Dunning Procedure.
     * Maximum length: 4.
     * @nullable
     */
    dunningProcedure?: string;
    /**
     * Dunning Block.
     * Maximum length: 1.
     * @nullable
     */
    dunnigBlock?: string;
    /**
     * Last Dunned On.
     * @nullable
     */
    lastDunnedOn?: Moment;
    /**
     * Dunning Level.
     * Maximum length: 1.
     * @nullable
     */
    dunningLevel?: string;
    /**
     * Dunning Recipient.
     * Maximum length: 10.
     * @nullable
     */
    dunningRecipient?: string;
    /**
     * Leg Dunning Procedure On.
     * @nullable
     */
    legDunningProcedure?: Moment;
    /**
     * Company Code Name.
     * Maximum length: 25.
     * @nullable
     */
    companyCodeName?: string;
    /**
     * Accounting Clerk 2.
     * Maximum length: 2.
     * @nullable
     */
    accountingClerk2?: string;
    /**
     * Accounting Clerk.
     * Maximum length: 2.
     * @nullable
     */
    accountingClerk?: string;
    /**
     * Accounting Clerk Name.
     * Maximum length: 30.
     * @nullable
     */
    accountingClerkName?: string;
    /**
     * Reconciliation Account In General Ledger.
     * Maximum length: 10.
     * @nullable
     */
    reconciliationAccount?: string;
    /**
     * Block Ind.
     * Maximum length: 1.
     * @nullable
     */
    blockingIndicator?: string;
    /**
     * Returns an entity builder to construct instances `Customer_Comp_CodEs`.
     * @returns A builder that constructs instances of entity type `Customer_Comp_CodEs`.
     */
    static builder(): EntityBuilderType<Customer_Comp_CodEs, Customer_Comp_CodEsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Customer_Comp_CodEs` entity type.
     * @returns A `Customer_Comp_CodEs` request builder.
     */
    static requestBuilder(): Customer_Comp_CodEsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Comp_CodEs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer_Comp_CodEs`.
     */
    static customField(fieldName: string): CustomField<Customer_Comp_CodEs>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Customer_Comp_CodEsType {
    formOfAddressCc?: string;
    customerCc: string;
    contactPersonLastName?: string;
    companyCode: string;
    dunningProcedure?: string;
    dunnigBlock?: string;
    lastDunnedOn?: Moment;
    dunningLevel?: string;
    dunningRecipient?: string;
    legDunningProcedure?: Moment;
    companyCodeName?: string;
    accountingClerk2?: string;
    accountingClerk?: string;
    accountingClerkName?: string;
    reconciliationAccount?: string;
    blockingIndicator?: string;
}
export interface Customer_Comp_CodEsTypeForceMandatory {
    formOfAddressCc: string;
    customerCc: string;
    contactPersonLastName: string;
    companyCode: string;
    dunningProcedure: string;
    dunnigBlock: string;
    lastDunnedOn: Moment;
    dunningLevel: string;
    dunningRecipient: string;
    legDunningProcedure: Moment;
    companyCodeName: string;
    accountingClerk2: string;
    accountingClerk: string;
    accountingClerkName: string;
    reconciliationAccount: string;
    blockingIndicator: string;
}
export declare namespace Customer_Comp_CodEs {
    /**
     * Static representation of the [[formOfAddressCc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_OF_ADDRESS_CC: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[customerCc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CC: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[contactPersonLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_LAST_NAME: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[dunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_PROCEDURE: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[dunnigBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNIG_BLOCK: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[lastDunnedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_DUNNED_ON: DateField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_LEVEL: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[dunningRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_RECIPIENT: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[legDunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEG_DUNNING_PROCEDURE: DateField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[companyCodeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE_NAME: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[accountingClerk2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_2: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[accountingClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[accountingClerkName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_NAME: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[reconciliationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECONCILIATION_ACCOUNT: StringField<Customer_Comp_CodEs>;
    /**
     * Static representation of the [[blockingIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCKING_INDICATOR: StringField<Customer_Comp_CodEs>;
    /**
     * All fields of the Customer_Comp_CodEs entity.
     */
    const _allFields: Array<StringField<Customer_Comp_CodEs> | DateField<Customer_Comp_CodEs>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Customer_Comp_CodEs>;
    /**
     * All key fields of the Customer_Comp_CodEs entity.
     */
    const _keyFields: Array<Selectable<Customer_Comp_CodEs>>;
    /**
     * Mapping of all key field names to the respective static field property Customer_Comp_CodEs.
     */
    const _keys: {
        [keys: string]: Selectable<Customer_Comp_CodEs>;
    };
}
//# sourceMappingURL=Customer_Comp_CodEs.d.ts.map