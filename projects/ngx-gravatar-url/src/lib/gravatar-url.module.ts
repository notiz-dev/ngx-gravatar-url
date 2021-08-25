import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravatarUrlPipe, GRAVATAR_OPTIONS } from './gravatar-url.pipe';
import { Options } from 'gravatar-url';

export const USER_OPTIONS = new InjectionToken<Options>('USER_OPTIONS');

export function gravatarUrlOptionsFactory(options: Options): Options {
  const defaultOptions: Options = {
    default: 'identicon',
  };

  return { ...defaultOptions, ...options };
}

@NgModule({
  declarations: [GravatarUrlPipe],
  exports: [GravatarUrlPipe],
  providers: [GravatarUrlPipe],
  imports: [CommonModule],
})
export class GravatarUrlPipeModule {
  static forRoot(
    options?: Options,
  ): ModuleWithProviders<GravatarUrlPipeModule> {
    return {
      ngModule: GravatarUrlPipeModule,
      providers: [
        { provide: USER_OPTIONS, useValue: options },
        {
          provide: GRAVATAR_OPTIONS,
          useFactory: gravatarUrlOptionsFactory,
          deps: [USER_OPTIONS],
        },
      ],
    };
  }
  
  static forChild(
    options?: Options,
  ): ModuleWithProviders<GravatarUrlPipeModule> {
    return {
      ngModule: GravatarUrlPipeModule,
      providers: [
        { provide: USER_OPTIONS, useValue: options },
        {
          provide: GRAVATAR_OPTIONS,
          useFactory: gravatarUrlOptionsFactory,
          deps: [USER_OPTIONS],
        },
      ],
    };
  }
}
