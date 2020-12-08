import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconNavComponent } from './icon-nav/icon-nav.component';


@NgModule({
  declarations: [IconNavComponent, IconCloseComponent, IconDeleteComponent, IconEditComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconCloseComponent, IconDeleteComponent, IconEditComponent]
})
export class IconsModule { }
