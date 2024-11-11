import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDrawer,
    MatDrawerContainer,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDrawer,
    MatDrawerContainer,
    MatListModule
  ]
})
export class MaterialModule { }
