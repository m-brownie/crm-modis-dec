import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TemplateFullWidthComponent } from '../templates/template-full-width/template-full-width.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TextsModule } from '../texts/texts.module';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



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
    StateDirective]
})
export class SharedModule { }
