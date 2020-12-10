import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TemplateFullWidthComponent } from '../templates/template-full-width/template-full-width.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [TableLightComponent, BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    TableLightComponent,
    BtnComponent]
})
export class SharedModule { }
