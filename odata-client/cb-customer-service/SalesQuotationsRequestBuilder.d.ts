/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { SalesQuotations } from './SalesQuotations';
/**
 * Request builder class for operations supported on the [[SalesQuotations]] entity.
 */
export declare class SalesQuotationsRequestBuilder extends RequestBuilder<SalesQuotations> {
    /**
     * Returns a request builder for retrieving one `SalesQuotations` entity based on its keys.
     * @param salesQuotation Key property. See [[SalesQuotations.salesQuotation]].
     * @returns A request builder for creating requests to retrieve one `SalesQuotations` entity based on its keys.
     */
    getByKey(salesQuotation: string): GetByKeyRequestBuilder<SalesQuotations>;
    /**
     * Returns a request builder for querying all `SalesQuotations` entities.
     * @returns A request builder for creating requests to retrieve all `SalesQuotations` entities.
     */
    getAll(): GetAllRequestBuilder<SalesQuotations>;
}
//# sourceMappingURL=SalesQuotationsRequestBuilder.d.ts.map