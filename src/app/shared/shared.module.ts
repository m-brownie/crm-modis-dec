import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TemplateFullWidthComponent } from '../templates/template-full-width/template-full-width.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TextsModule } from '../texts/texts.module';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe]
})
export class SharedModule { }
