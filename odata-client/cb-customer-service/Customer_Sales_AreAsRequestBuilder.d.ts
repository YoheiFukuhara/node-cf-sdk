/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { Customer_Sales_AreAs } from './Customer_Sales_AreAs';
/**
 * Request builder class for operations supported on the [[Customer_Sales_AreAs]] entity.
 */
export declare class Customer_Sales_AreAsRequestBuilder extends RequestBuilder<Customer_Sales_AreAs> {
    /**
     * Returns a request builder for retrieving one `Customer_Sales_AreAs` entity based on its keys.
     * @param salesOrganization Key property. See [[Customer_Sales_AreAs.salesOrganization]].
     * @param distributionChannel Key property. See [[Customer_Sales_AreAs.distributionChannel]].
     * @param division Key property. See [[Customer_Sales_AreAs.division]].
     * @returns A request builder for creating requests to retrieve one `Customer_Sales_AreAs` entity based on its keys.
     */
    getByKey(salesOrganization: string, distributionChannel: string, division: string): GetByKeyRequestBuilder<Customer_Sales_AreAs>;
    /**
     * Returns a request builder for querying all `Customer_Sales_AreAs` entities.
     * @returns A request builder for creating requests to retrieve all `Customer_Sales_AreAs` entities.
     */
    getAll(): GetAllRequestBuilder<Customer_Sales_AreAs>;
}
//# sourceMappingURL=Customer_Sales_AreAsRequestBuilder.d.ts.map