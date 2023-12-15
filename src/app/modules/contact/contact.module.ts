import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from "./pages/contact.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ContactComponent
  ]
})
export class ContactModule { }
