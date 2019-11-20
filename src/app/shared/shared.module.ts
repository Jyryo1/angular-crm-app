import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { ClientStateDirective } from './directives/client-state.directive';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, ClientStateDirective],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, ClientStateDirective]
})
export class SharedModule { }
