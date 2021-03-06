import {
  Pipe,
  PipeTransform,
  Inject,
  InjectionToken,
  Optional,
} from '@angular/core';
import gravatarUrl, { Options } from 'gravatar-url';

export const GRAVATAR_OPTIONS = new InjectionToken<Options>('GRAVATAR_OPTIONS');

@Pipe({
  name: 'gravatarUrl',
})
export class GravatarUrlPipe implements PipeTransform {
  constructor(
    @Optional() @Inject(GRAVATAR_OPTIONS) public defaultOptions: Options
  ) {}

  transform(email: string | null, options?: Options): string | null {
    if (email === null || email.length === 0) {
      return null;
    }

    return gravatarUrl(email, { ...this.defaultOptions, ...options });
  }
}
