/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { BillingDocuments } from './BillingDocuments';

/**
 * Request builder class for operations supported on the [[BillingDocuments]] entity.
 */
export class BillingDocumentsRequestBuilder extends RequestBuilder<BillingDocuments> {
  /**
   * Returns a request builder for retrieving one `BillingDocuments` entity based on its keys.
   * @param billingDocument Key property. See [[BillingDocuments.billingDocument]].
   * @returns A request builder for creating requests to retrieve one `BillingDocuments` entity based on its keys.
   */
  getByKey(billingDocument: string): GetByKeyRequestBuilder<BillingDocuments> {
    return new GetByKeyRequestBuilder(BillingDocuments, { BillingDocument: billingDocument });
  }

  /**
   * Returns a request builder for querying all `BillingDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `BillingDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<BillingDocuments> {
    return new GetAllRequestBuilder(BillingDocuments);
  }
}
