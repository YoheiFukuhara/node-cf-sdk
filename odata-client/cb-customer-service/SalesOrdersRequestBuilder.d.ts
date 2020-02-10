/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { SalesOrders } from './SalesOrders';
/**
 * Request builder class for operations supported on the [[SalesOrders]] entity.
 */
export declare class SalesOrdersRequestBuilder extends RequestBuilder<SalesOrders> {
    /**
     * Returns a request builder for retrieving one `SalesOrders` entity based on its keys.
     * @param salesOrder Key property. See [[SalesOrders.salesOrder]].
     * @returns A request builder for creating requests to retrieve one `SalesOrders` entity based on its keys.
     */
    getByKey(salesOrder: string): GetByKeyRequestBuilder<SalesOrders>;
    /**
     * Returns a request builder for querying all `SalesOrders` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrders` entities.
     */
    getAll(): GetAllRequestBuilder<SalesOrders>;
}
//# sourceMappingURL=SalesOrdersRequestBuilder.d.ts.map