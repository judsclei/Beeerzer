import { AdmClienteComponent } from './admCliente/admCliente.component';
import { FormsModule } from '@angular/forms';
import { ClienteRoutingModule } from './cliente-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


@NgModule({
  declarations: [
     ClienteFormComponent,
     AdmClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ]
})
export class ClienteModule { }
