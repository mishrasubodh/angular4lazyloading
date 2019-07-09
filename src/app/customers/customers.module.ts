import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerListComponent} from './customer-list/customer-list.component'
import {CustomerRoutingModule} from './customer-routing.module';
import { OtherCustomerComponent } from './other-customer/other-customer.component'


@NgModule({
  declarations: [CustomerListComponent, OtherCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomersModule { }
