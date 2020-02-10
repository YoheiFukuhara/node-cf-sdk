/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { Customer_Bank_AccouNs } from './Customer_Bank_AccouNs';

/**
 * Request builder class for operations supported on the [[Customer_Bank_AccouNs]] entity.
 */
export class Customer_Bank_AccouNsRequestBuilder extends RequestBuilder<Customer_Bank_AccouNs> {
  /**
   * Returns a request builder for retrieving one `Customer_Bank_AccouNs` entity based on its keys.
   * @param country Key property. See [[Customer_Bank_AccouNs.country]].
   * @param bankNumber Key property. See [[Customer_Bank_AccouNs.bankNumber]].
   * @param bankAccount Key property. See [[Customer_Bank_AccouNs.bankAccount]].
   * @returns A request builder for creating requests to retrieve one `Customer_Bank_AccouNs` entity based on its keys.
   */
  getByKey(country: string, bankNumber: string, bankAccount: string): GetByKeyRequestBuilder<Customer_Bank_AccouNs> {
    return new GetByKeyRequestBuilder(Customer_Bank_AccouNs, {
      Country: country,
      BankNumber: bankNumber,
      BankAccount: bankAccount
    });
  }

  /**
   * Returns a request builder for querying all `Customer_Bank_AccouNs` entities.
   * @returns A request builder for creating requests to retrieve all `Customer_Bank_AccouNs` entities.
   */
  getAll(): GetAllRequestBuilder<Customer_Bank_AccouNs> {
    return new GetAllRequestBuilder(Customer_Bank_AccouNs);
  }
}
