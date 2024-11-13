import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { KitchenOrderTicketsComponent } from './pages/kitchen-order-tickets/kitchen-order-tickets.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path : 'dashboard', component : DashboardComponent},
  {path : 'orders', component : OrdersComponent},
  {path : 'kitchen-order-tickets', component : KitchenOrderTicketsComponent},
  {path : 'reservation', component : ReservationComponent},
  {path : 'customer', component : CustomerComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'supplier', component : SupplierComponent},
  {path : 'inventory', component : InventoryComponent},
  {path : 'settings', component : SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
