/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { SalesContracts } from './SalesContracts';

/**
 * Request builder class for operations supported on the [[SalesContracts]] entity.
 */
export class SalesContractsRequestBuilder extends RequestBuilder<SalesContracts> {
  /**
   * Returns a request builder for retrieving one `SalesContracts` entity based on its keys.
   * @param salesContract Key property. See [[SalesContracts.salesContract]].
   * @returns A request builder for creating requests to retrieve one `SalesContracts` entity based on its keys.
   */
  getByKey(salesContract: string): GetByKeyRequestBuilder<SalesContracts> {
    return new GetByKeyRequestBuilder(SalesContracts, { SalesContract: salesContract });
  }

  /**
   * Returns a request builder for querying all `SalesContracts` entities.
   * @returns A request builder for creating requests to retrieve all `SalesContracts` entities.
   */
  getAll(): GetAllRequestBuilder<SalesContracts> {
    return new GetAllRequestBuilder(SalesContracts);
  }
}
