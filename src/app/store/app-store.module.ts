import { EnvironmentProviders } from '@angular/core';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';
import { CategoryState } from './states/category.state';
import { ProductState } from './states/product.state';
import { UserState } from './states/user.state';
import { CoreState } from './states/core.state';

export function provideCustomStore(): EnvironmentProviders {
  return provideStore(
    [CoreState, UserState, ProductState, CategoryState],
    withNgxsStoragePlugin({ keys: '*' }),
    withNgxsReduxDevtoolsPlugin({ trace: true })
  );
}
