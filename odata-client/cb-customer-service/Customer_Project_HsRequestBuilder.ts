/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { Customer_Project_Hs } from './Customer_Project_Hs';

/**
 * Request builder class for operations supported on the [[Customer_Project_Hs]] entity.
 */
export class Customer_Project_HsRequestBuilder extends RequestBuilder<Customer_Project_Hs> {
  /**
   * Returns a request builder for retrieving one `Customer_Project_Hs` entity based on its keys.
   * @param customerProjectUuid Key property. See [[Customer_Project_Hs.customerProjectUuid]].
   * @returns A request builder for creating requests to retrieve one `Customer_Project_Hs` entity based on its keys.
   */
  getByKey(customerProjectUuid: string): GetByKeyRequestBuilder<Customer_Project_Hs> {
    return new GetByKeyRequestBuilder(Customer_Project_Hs, { CustomerProjectUUID: customerProjectUuid });
  }

  /**
   * Returns a request builder for querying all `Customer_Project_Hs` entities.
   * @returns A request builder for creating requests to retrieve all `Customer_Project_Hs` entities.
   */
  getAll(): GetAllRequestBuilder<Customer_Project_Hs> {
    return new GetAllRequestBuilder(Customer_Project_Hs);
  }
}
