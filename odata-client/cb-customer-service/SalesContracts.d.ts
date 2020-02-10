/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { SalesContractsRequestBuilder } from './SalesContractsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "SalesContracts" of service "CB_CUSTOMER_SRV".
 */
export declare class SalesContracts extends Entity implements SalesContractsType {
    /**
     * Technical entity name for SalesContracts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesContracts.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Sales Document Type.
     * Maximum length: 60.
     * @nullable
     */
    vbelnDescr?: string;
    /**
     * Sales Contract.
     * Maximum length: 10.
     */
    salesContract: string;
    /**
     * Sold-To Party.
     * Maximum length: 10.
     * @nullable
     */
    soldToParty?: string;
    /**
     * Customer Reference.
     * Maximum length: 35.
     * @nullable
     */
    purchaseOrderByCustomer?: string;
    /**
     * Net Value.
     * @nullable
     */
    netAmount?: BigNumber;
    /**
     * Document Date.
     * @nullable
     */
    salesContractDate?: Moment;
    /**
     * Ship-To Party.
     * Maximum length: 10.
     * @nullable
     */
    shipToParty?: string;
    /**
     * Valid From.
     * @nullable
     */
    salesContractValidityStartDate?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    salesContractValidityEndDate?: Moment;
    /**
     * Overall Status.
     * Maximum length: 20.
     * @nullable
     */
    overallSdProcessStatusDesc?: string;
    /**
     * Rejection Status.
     * Maximum length: 20.
     * @nullable
     */
    abstkText?: string;
    /**
     * Sales Document Category.
     * Maximum length: 1.
     * @nullable
     */
    vbtyp?: string;
    /**
     * Sold-To Party Name.
     * Maximum length: 40.
     * @nullable
     */
    soldToPartyName?: string;
    /**
     * Name.
     * Maximum length: 40.
     * @nullable
     */
    shipToPartyName?: string;
    /**
     * Name 2.
     * Maximum length: 40.
     * @nullable
     */
    shipToPartyAdditionalName?: string;
    /**
     * Name 2.
     * Maximum length: 40.
     * @nullable
     */
    soldToPartyAdditionalName?: string;
    /**
     * Sales Organization.
     * Maximum length: 4.
     * @nullable
     */
    salesOrganization?: string;
    /**
     * Sales Organization.
     * Maximum length: 60.
     * @nullable
     */
    salesOrganizationName?: string;
    /**
     * Currency.
     * Maximum length: 5.
     * @nullable
     */
    netAmountCurrency?: string;
    /**
     * Distribution Channel.
     * Maximum length: 2.
     * @nullable
     */
    distributionChannel?: string;
    /**
     * Distribution Channel.
     * Maximum length: 60.
     * @nullable
     */
    distributionChannelName?: string;
    /**
     * Division.
     * Maximum length: 2.
     * @nullable
     */
    division?: string;
    /**
     * Division.
     * Maximum length: 60.
     * @nullable
     */
    divisionName?: string;
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
     * Group Contract.
     * Maximum length: 10.
     * @nullable
     */
    vbelnGrp?: string;
    /**
     * Returns an entity builder to construct instances `SalesContracts`.
     * @returns A builder that constructs instances of entity type `SalesContracts`.
     */
    static builder(): EntityBuilderType<SalesContracts, SalesContractsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesContracts` entity type.
     * @returns A `SalesContracts` request builder.
     */
    static requestBuilder(): SalesContractsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesContracts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesContracts`.
     */
    static customField(fieldName: string): CustomField<SalesContracts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SalesContractsType {
    vbelnDescr?: string;
    salesContract: string;
    soldToParty?: string;
    purchaseOrderByCustomer?: string;
    netAmount?: BigNumber;
    salesContractDate?: Moment;
    shipToParty?: string;
    salesContractValidityStartDate?: Moment;
    salesContractValidityEndDate?: Moment;
    overallSdProcessStatusDesc?: string;
    abstkText?: string;
    vbtyp?: string;
    soldToPartyName?: string;
    shipToPartyName?: string;
    shipToPartyAdditionalName?: string;
    soldToPartyAdditionalName?: string;
    salesOrganization?: string;
    salesOrganizationName?: string;
    netAmountCurrency?: string;
    distributionChannel?: string;
    distributionChannelName?: string;
    division?: string;
    divisionName?: string;
    createdByUser?: string;
    academicTitleName?: string;
    createdByUserFirstName?: string;
    createdByUserLastName?: string;
    vbelnGrp?: string;
}
export interface SalesContractsTypeForceMandatory {
    vbelnDescr: string;
    salesContract: string;
    soldToParty: string;
    purchaseOrderByCustomer: string;
    netAmount: BigNumber;
    salesContractDate: Moment;
    shipToParty: string;
    salesContractValidityStartDate: Moment;
    salesContractValidityEndDate: Moment;
    overallSdProcessStatusDesc: string;
    abstkText: string;
    vbtyp: string;
    soldToPartyName: string;
    shipToPartyName: string;
    shipToPartyAdditionalName: string;
    soldToPartyAdditionalName: string;
    salesOrganization: string;
    salesOrganizationName: string;
    netAmountCurrency: string;
    distributionChannel: string;
    distributionChannelName: string;
    division: string;
    divisionName: string;
    createdByUser: string;
    academicTitleName: string;
    createdByUserFirstName: string;
    createdByUserLastName: string;
    vbelnGrp: string;
}
export declare namespace SalesContracts {
    /**
     * Static representation of the [[vbelnDescr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VBELN_DESCR: StringField<SalesContracts>;
    /**
     * Static representation of the [[salesContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CONTRACT: StringField<SalesContracts>;
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY: StringField<SalesContracts>;
    /**
     * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDER_BY_CUSTOMER: StringField<SalesContracts>;
    /**
     * Static representation of the [[netAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_AMOUNT: BigNumberField<SalesContracts>;
    /**
     * Static representation of the [[salesContractDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CONTRACT_DATE: DateField<SalesContracts>;
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY: StringField<SalesContracts>;
    /**
     * Static representation of the [[salesContractValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CONTRACT_VALIDITY_START_DATE: DateField<SalesContracts>;
    /**
     * Static representation of the [[salesContractValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CONTRACT_VALIDITY_END_DATE: DateField<SalesContracts>;
    /**
     * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_SD_PROCESS_STATUS_DESC: StringField<SalesContracts>;
    /**
     * Static representation of the [[abstkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSTK_TEXT: StringField<SalesContracts>;
    /**
     * Static representation of the [[vbtyp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VBTYP: StringField<SalesContracts>;
    /**
     * Static representation of the [[soldToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[shipToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_ADDITIONAL_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_ADDITIONAL_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: StringField<SalesContracts>;
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[netAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_AMOUNT_CURRENCY: StringField<SalesContracts>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: StringField<SalesContracts>;
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<SalesContracts>;
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<SalesContracts>;
    /**
     * Static representation of the [[academicTitleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACADEMIC_TITLE_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[createdByUserFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_FIRST_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[createdByUserLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_LAST_NAME: StringField<SalesContracts>;
    /**
     * Static representation of the [[vbelnGrp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VBELN_GRP: StringField<SalesContracts>;
    /**
     * All fields of the SalesContracts entity.
     */
    const _allFields: Array<StringField<SalesContracts> | BigNumberField<SalesContracts> | DateField<SalesContracts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesContracts>;
    /**
     * All key fields of the SalesContracts entity.
     */
    const _keyFields: Array<Selectable<SalesContracts>>;
    /**
     * Mapping of all key field names to the respective static field property SalesContracts.
     */
    const _keys: {
        [keys: string]: Selectable<SalesContracts>;
    };
}
//# sourceMappingURL=SalesContracts.d.ts.map