import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { KitchenOrderTicketsComponent } from './pages/kitchen-order-tickets/kitchen-order-tickets.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SettingsComponent } from './pages/settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DashboardComponent,
    OrdersComponent,
    KitchenOrderTicketsComponent,
    ReservationComponent,
    CustomerComponent,
    MenuComponent,
    SupplierComponent,
    InventoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
