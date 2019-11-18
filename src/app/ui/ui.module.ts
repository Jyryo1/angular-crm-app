import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoderbaseUiModule } from '@coderbase/ui';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';



@NgModule({
  declarations: [UiComponent, NavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule, CoderbaseUiModule
  ],
  exports: [UiComponent]
})
export class UiModule { }
