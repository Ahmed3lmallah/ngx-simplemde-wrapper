import { NgModule, ModuleWithProviders } from '@angular/core';
import {SimpleMDEDirective} from './simpleMDE.directive';
import {SimpleMdEOptions} from './simpleMDE.types';

@NgModule({
  declarations: [SimpleMDEDirective],
  imports: [
  ],
  exports: [SimpleMDEDirective]
})
export class SimpleMDEModule {
  static initialize(config?: SimpleMdEOptions): ModuleWithProviders<SimpleMDEModule> {
    if (!config){
      // Default Configurations
      config = {};
    }
    return {
      ngModule: SimpleMDEModule,
      providers: [SimpleMDEDirective, {provide: 'config', useValue: config}]
    };
  }
}
