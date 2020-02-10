/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { Customers } from './Customers';
/**
 * Request builder class for operations supported on the [[Customers]] entity.
 */
export declare class CustomersRequestBuilder extends RequestBuilder<Customers> {
    /**
     * Returns a request builder for retrieving one `Customers` entity based on its keys.
     * @param customer Key property. See [[Customers.customer]].
     * @returns A request builder for creating requests to retrieve one `Customers` entity based on its keys.
     */
    getByKey(customer: string): GetByKeyRequestBuilder<Customers>;
    /**
     * Returns a request builder for querying all `Customers` entities.
     * @returns A request builder for creating requests to retrieve all `Customers` entities.
     */
    getAll(): GetAllRequestBuilder<Customers>;
}
//# sourceMappingURL=CustomersRequestBuilder.d.ts.map