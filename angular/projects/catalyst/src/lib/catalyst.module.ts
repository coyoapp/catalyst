import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { catI18nRegistry, CatI18nRegistry, catIconRegistry, CatIconRegistry, CatNotificationService, catNotificationService } from '@haiilo/catalyst';
import { defineCustomElements } from '@haiilo/catalyst/loader';
import log, { RootLogger } from 'loglevel';
import { BooleanValueAccessor } from "./directives/boolean-value-accessor";
import * as Components from './directives/proxies';
import { RadioValueAccessor } from "./directives/radio-value-accessor";
import { SelectValueAccessor } from "./directives/select-value-accessor";
import { TextValueAccessor } from "./directives/text-value-accessor";

const CatComponents = [
  Components.CatAlert,
  Components.CatAvatar,
  Components.CatBadge,
  Components.CatButton,
  Components.CatCard,
  Components.CatCheckbox,
  Components.CatDropdown,
  Components.CatFormGroup,
  Components.CatIcon,
  Components.CatInput,
  Components.CatLabel,
  Components.CatModal,
  Components.CatRadio,
  Components.CatRadioGroup,
  Components.CatScrollable,
  Components.CatSelect,
  Components.CatSkeleton,
  Components.CatSpinner,
  Components.CatTab,
  Components.CatTabs,
  Components.CatTextarea,
  Components.CatToggle,
  Components.CatTooltip
];

const CatDirectives = [
  TextValueAccessor,
  SelectValueAccessor,
  RadioValueAccessor,
  BooleanValueAccessor
]

export const CAT_LOG_TOKEN = new InjectionToken<RootLogger>('CAT_LOG', {
  providedIn: 'root',
  factory: () => log,
});

export const CAT_I18N_REGISTRY_TOKEN = new InjectionToken<CatI18nRegistry>('CAT_I18N_REGISTRY', {
  providedIn: 'root',
  factory: () => catI18nRegistry,
});

export const CAT_ICON_REGISTRY_TOKEN = new InjectionToken<CatIconRegistry>('CAT_ICON_REGISTRY', {
  providedIn: 'root',
  factory: () => catIconRegistry,
});

export const CAT_NOTIFICATION_SERVICE_TOKEN = new InjectionToken<CatNotificationService>('CAT_NOTIFICATION_SERVICE', {
  providedIn: 'root',
  factory: () => catNotificationService,
});

@NgModule({
  imports: [],
  declarations: [...CatComponents, ...CatDirectives],
  exports: [...CatComponents, ...CatDirectives],
  providers: []
})
export class CatalystModule {

  static forRoot(): ModuleWithProviders<CatalystModule> {
    defineCustomElements();
    return {
      ngModule: CatalystModule
    };
  }
}
