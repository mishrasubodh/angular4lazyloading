import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent} from './customer-list/customer-list.component'
import {OtherCustomerComponent} from './other-customer/other-customer.component'
const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'othercustomer',
    component: OtherCustomerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
