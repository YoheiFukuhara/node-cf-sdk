/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { Customer_Comp_CodEs } from './Customer_Comp_CodEs';
/**
 * Request builder class for operations supported on the [[Customer_Comp_CodEs]] entity.
 */
export declare class Customer_Comp_CodEsRequestBuilder extends RequestBuilder<Customer_Comp_CodEs> {
    /**
     * Returns a request builder for retrieving one `Customer_Comp_CodEs` entity based on its keys.
     * @param customerCc Key property. See [[Customer_Comp_CodEs.customerCc]].
     * @param companyCode Key property. See [[Customer_Comp_CodEs.companyCode]].
     * @returns A request builder for creating requests to retrieve one `Customer_Comp_CodEs` entity based on its keys.
     */
    getByKey(customerCc: string, companyCode: string): GetByKeyRequestBuilder<Customer_Comp_CodEs>;
    /**
     * Returns a request builder for querying all `Customer_Comp_CodEs` entities.
     * @returns A request builder for creating requests to retrieve all `Customer_Comp_CodEs` entities.
     */
    getAll(): GetAllRequestBuilder<Customer_Comp_CodEs>;
}
//# sourceMappingURL=Customer_Comp_CodEsRequestBuilder.d.ts.map