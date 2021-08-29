import { AppConfig } from './app-config';
import { InjectionToken, ValueProvider } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('grailed.config');

export const getAppConfigProvider = (value: AppConfig): ValueProvider => ({
  provide: APP_CONFIG,
  useValue: value,
});
