import { Controller, Get, HttpException } from '@nestjs/common';
import { Customers } from '../odata-client/cb-customer-service';


@Controller()
export class CustomerController {
  @Get('customer')
  getCustomer() {
    return getAllCustomers()
    .catch(error => {
      throw new HttpException(`Failed to get business partners - ${error.mssage} ${error.stack}`, 500);
    });
  }
}

function getAllCustomers(): Promise<Customers[]> {
  return Customers.requestBuilder()
    .getAll()
    .top(10) // look at the top 10 customers only
    .select(Customers.CUSTOMER_NAME)
    .execute({
      url: 'http://<host>:50000/',
      username: '<user>',
      password: '<password>'
    });
}