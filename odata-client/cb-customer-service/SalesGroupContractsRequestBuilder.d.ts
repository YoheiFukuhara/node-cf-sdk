/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { SalesGroupContracts } from './SalesGroupContracts';
/**
 * Request builder class for operations supported on the [[SalesGroupContracts]] entity.
 */
export declare class SalesGroupContractsRequestBuilder extends RequestBuilder<SalesGroupContracts> {
    /**
     * Returns a request builder for retrieving one `SalesGroupContracts` entity based on its keys.
     * @param salesGroupContract Key property. See [[SalesGroupContracts.salesGroupContract]].
     * @returns A request builder for creating requests to retrieve one `SalesGroupContracts` entity based on its keys.
     */
    getByKey(salesGroupContract: string): GetByKeyRequestBuilder<SalesGroupContracts>;
    /**
     * Returns a request builder for querying all `SalesGroupContracts` entities.
     * @returns A request builder for creating requests to retrieve all `SalesGroupContracts` entities.
     */
    getAll(): GetAllRequestBuilder<SalesGroupContracts>;
}
//# sourceMappingURL=SalesGroupContractsRequestBuilder.d.ts.map