import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReembolsoComponent } from './reembolso.component';
import { sharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [{
  path: '',
  component: ReembolsoComponent
}]


@NgModule({
  declarations: [
    ReembolsoComponent,
  ],
  imports: [
    CommonModule,
    sharedModule,
    RouterModule.forChild(route),
  ],
  exports: [
    CommonModule,
    ReembolsoComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReembolsoModule { }
