import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
  ],
  exports: [HomeRoutingModule],
})
export class HomeModule {}
