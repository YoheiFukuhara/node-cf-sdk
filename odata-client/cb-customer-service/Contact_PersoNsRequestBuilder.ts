/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { Contact_PersoNs } from './Contact_PersoNs';

/**
 * Request builder class for operations supported on the [[Contact_PersoNs]] entity.
 */
export class Contact_PersoNsRequestBuilder extends RequestBuilder<Contact_PersoNs> {
  /**
   * Returns a request builder for retrieving one `Contact_PersoNs` entity based on its keys.
   * @param contactPersonNumber Key property. See [[Contact_PersoNs.contactPersonNumber]].
   * @returns A request builder for creating requests to retrieve one `Contact_PersoNs` entity based on its keys.
   */
  getByKey(contactPersonNumber: string): GetByKeyRequestBuilder<Contact_PersoNs> {
    return new GetByKeyRequestBuilder(Contact_PersoNs, { ContactPersonNumber: contactPersonNumber });
  }

  /**
   * Returns a request builder for querying all `Contact_PersoNs` entities.
   * @returns A request builder for creating requests to retrieve all `Contact_PersoNs` entities.
   */
  getAll(): GetAllRequestBuilder<Contact_PersoNs> {
    return new GetAllRequestBuilder(Contact_PersoNs);
  }
}
