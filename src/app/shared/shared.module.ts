import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
