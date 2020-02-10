/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { Customer_Comp_CodEsRequestBuilder } from './Customer_Comp_CodEsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CUSTOMER_COMP_CODEs" of service "CB_CUSTOMER_SRV".
 */
export class Customer_Comp_CodEs extends Entity implements Customer_Comp_CodEsType {
  /**
   * Technical entity name for Customer_Comp_CodEs.
   */
  static _entityName = 'CUSTOMER_COMP_CODEs';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Customer_Comp_CodEs.
   */
  static _serviceName = 'CB_CUSTOMER_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
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
  customerCc!: string;
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
  companyCode!: string;
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
  static builder(): EntityBuilderType<Customer_Comp_CodEs, Customer_Comp_CodEsTypeForceMandatory> {
    return Entity.entityBuilder(Customer_Comp_CodEs);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Customer_Comp_CodEs` entity type.
   * @returns A `Customer_Comp_CodEs` request builder.
   */
  static requestBuilder(): Customer_Comp_CodEsRequestBuilder {
    return new Customer_Comp_CodEsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Comp_CodEs`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Customer_Comp_CodEs`.
   */
  static customField(fieldName: string): CustomField<Customer_Comp_CodEs> {
    return Entity.customFieldSelector(fieldName, Customer_Comp_CodEs);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Customer_Comp_CodEs {
  /**
   * Static representation of the [[formOfAddressCc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_OF_ADDRESS_CC: StringField<Customer_Comp_CodEs> = new StringField('FormOfAddressCC', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[customerCc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CC: StringField<Customer_Comp_CodEs> = new StringField('CustomerCC', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[contactPersonLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_LAST_NAME: StringField<Customer_Comp_CodEs> = new StringField('ContactPersonLastName', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<Customer_Comp_CodEs> = new StringField('CompanyCode', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[dunningProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_PROCEDURE: StringField<Customer_Comp_CodEs> = new StringField('DunningProcedure', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[dunnigBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNIG_BLOCK: StringField<Customer_Comp_CodEs> = new StringField('DunnigBlock', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[lastDunnedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_DUNNED_ON: DateField<Customer_Comp_CodEs> = new DateField('LastDunnedOn', Customer_Comp_CodEs, 'Edm.DateTime');
  /**
   * Static representation of the [[dunningLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_LEVEL: StringField<Customer_Comp_CodEs> = new StringField('DunningLevel', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[dunningRecipient]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_RECIPIENT: StringField<Customer_Comp_CodEs> = new StringField('DunningRecipient', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[legDunningProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEG_DUNNING_PROCEDURE: DateField<Customer_Comp_CodEs> = new DateField('LegDunningProcedure', Customer_Comp_CodEs, 'Edm.DateTime');
  /**
   * Static representation of the [[companyCodeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE_NAME: StringField<Customer_Comp_CodEs> = new StringField('CompanyCodeName', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[accountingClerk2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK_2: StringField<Customer_Comp_CodEs> = new StringField('AccountingClerk2', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[accountingClerk]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK: StringField<Customer_Comp_CodEs> = new StringField('AccountingClerk', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[accountingClerkName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK_NAME: StringField<Customer_Comp_CodEs> = new StringField('AccountingClerkName', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[reconciliationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECONCILIATION_ACCOUNT: StringField<Customer_Comp_CodEs> = new StringField('ReconciliationAccount', Customer_Comp_CodEs, 'Edm.String');
  /**
   * Static representation of the [[blockingIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCKING_INDICATOR: StringField<Customer_Comp_CodEs> = new StringField('BlockingIndicator', Customer_Comp_CodEs, 'Edm.String');
  /**
   * All fields of the Customer_Comp_CodEs entity.
   */
  export const _allFields: Array<StringField<Customer_Comp_CodEs> | DateField<Customer_Comp_CodEs>> = [
    Customer_Comp_CodEs.FORM_OF_ADDRESS_CC,
    Customer_Comp_CodEs.CUSTOMER_CC,
    Customer_Comp_CodEs.CONTACT_PERSON_LAST_NAME,
    Customer_Comp_CodEs.COMPANY_CODE,
    Customer_Comp_CodEs.DUNNING_PROCEDURE,
    Customer_Comp_CodEs.DUNNIG_BLOCK,
    Customer_Comp_CodEs.LAST_DUNNED_ON,
    Customer_Comp_CodEs.DUNNING_LEVEL,
    Customer_Comp_CodEs.DUNNING_RECIPIENT,
    Customer_Comp_CodEs.LEG_DUNNING_PROCEDURE,
    Customer_Comp_CodEs.COMPANY_CODE_NAME,
    Customer_Comp_CodEs.ACCOUNTING_CLERK_2,
    Customer_Comp_CodEs.ACCOUNTING_CLERK,
    Customer_Comp_CodEs.ACCOUNTING_CLERK_NAME,
    Customer_Comp_CodEs.RECONCILIATION_ACCOUNT,
    Customer_Comp_CodEs.BLOCKING_INDICATOR
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Customer_Comp_CodEs> = new AllFields('*', Customer_Comp_CodEs);
  /**
   * All key fields of the Customer_Comp_CodEs entity.
   */
  export const _keyFields: Array<Selectable<Customer_Comp_CodEs>> = [Customer_Comp_CodEs.CUSTOMER_CC, Customer_Comp_CodEs.COMPANY_CODE];
  /**
   * Mapping of all key field names to the respective static field property Customer_Comp_CodEs.
   */
  export const _keys: { [keys: string]: Selectable<Customer_Comp_CodEs> } = Customer_Comp_CodEs._keyFields.reduce((acc: { [keys: string]: Selectable<Customer_Comp_CodEs> }, field: Selectable<Customer_Comp_CodEs>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
