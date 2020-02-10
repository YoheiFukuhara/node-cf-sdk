/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchChangeSet, ODataBatchRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { BillingDocuments, Contact_PersoNs, Customer_Bank_AccouNs, Customer_Comp_CodEs, Customer_Project_Hs, Customer_Sales_AreAs, Customers, SalesContracts, SalesGroupContracts, SalesOrders, SalesQuotations } from './index';
/**
 * Batch builder for operations supported on the Cb Customer Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadCbCustomerServiceRequestBuilder | ODataBatchChangeSet<WriteCbCustomerServiceRequestBuilder>>): ODataBatchRequestBuilder;
/**
 * Change set constructor consists of write operations supported on the Cb Customer Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: WriteCbCustomerServiceRequestBuilder[]): ODataBatchChangeSet<WriteCbCustomerServiceRequestBuilder>;
export declare const defaultCbCustomerServicePath = "/sap/opu/odata/sap/CB_CUSTOMER_SRV";
export declare type ReadCbCustomerServiceRequestBuilder = GetAllRequestBuilder<BillingDocuments> | GetAllRequestBuilder<Contact_PersoNs> | GetAllRequestBuilder<Customer_Bank_AccouNs> | GetAllRequestBuilder<Customer_Comp_CodEs> | GetAllRequestBuilder<Customer_Project_Hs> | GetAllRequestBuilder<Customer_Sales_AreAs> | GetAllRequestBuilder<Customers> | GetAllRequestBuilder<SalesContracts> | GetAllRequestBuilder<SalesGroupContracts> | GetAllRequestBuilder<SalesOrders> | GetAllRequestBuilder<SalesQuotations> | GetByKeyRequestBuilder<BillingDocuments> | GetByKeyRequestBuilder<Contact_PersoNs> | GetByKeyRequestBuilder<Customer_Bank_AccouNs> | GetByKeyRequestBuilder<Customer_Comp_CodEs> | GetByKeyRequestBuilder<Customer_Project_Hs> | GetByKeyRequestBuilder<Customer_Sales_AreAs> | GetByKeyRequestBuilder<Customers> | GetByKeyRequestBuilder<SalesContracts> | GetByKeyRequestBuilder<SalesGroupContracts> | GetByKeyRequestBuilder<SalesOrders> | GetByKeyRequestBuilder<SalesQuotations>;
export declare type WriteCbCustomerServiceRequestBuilder = CreateRequestBuilder<BillingDocuments> | UpdateRequestBuilder<BillingDocuments> | DeleteRequestBuilder<BillingDocuments> | CreateRequestBuilder<Contact_PersoNs> | UpdateRequestBuilder<Contact_PersoNs> | DeleteRequestBuilder<Contact_PersoNs> | CreateRequestBuilder<Customer_Bank_AccouNs> | UpdateRequestBuilder<Customer_Bank_AccouNs> | DeleteRequestBuilder<Customer_Bank_AccouNs> | CreateRequestBuilder<Customer_Comp_CodEs> | UpdateRequestBuilder<Customer_Comp_CodEs> | DeleteRequestBuilder<Customer_Comp_CodEs> | CreateRequestBuilder<Customer_Project_Hs> | UpdateRequestBuilder<Customer_Project_Hs> | DeleteRequestBuilder<Customer_Project_Hs> | CreateRequestBuilder<Customer_Sales_AreAs> | UpdateRequestBuilder<Customer_Sales_AreAs> | DeleteRequestBuilder<Customer_Sales_AreAs> | CreateRequestBuilder<Customers> | UpdateRequestBuilder<Customers> | DeleteRequestBuilder<Customers> | CreateRequestBuilder<SalesContracts> | UpdateRequestBuilder<SalesContracts> | DeleteRequestBuilder<SalesContracts> | CreateRequestBuilder<SalesGroupContracts> | UpdateRequestBuilder<SalesGroupContracts> | DeleteRequestBuilder<SalesGroupContracts> | CreateRequestBuilder<SalesOrders> | UpdateRequestBuilder<SalesOrders> | DeleteRequestBuilder<SalesOrders> | CreateRequestBuilder<SalesQuotations> | UpdateRequestBuilder<SalesQuotations> | DeleteRequestBuilder<SalesQuotations>;
//# sourceMappingURL=BatchRequest.d.ts.map