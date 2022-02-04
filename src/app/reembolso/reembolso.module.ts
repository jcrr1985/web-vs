import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReembolsoComponent } from './reembolso.component';
import { SharedsModule } from '../shareds/shareds.module';
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
    SharedsModule,
    RouterModule.forChild(route),
  ],
  exports: [
    CommonModule,
    ReembolsoComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReembolsoModule { }
