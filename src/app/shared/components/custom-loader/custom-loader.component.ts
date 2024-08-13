import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CoreState } from '../../../store/states/core.state';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrl: './custom-loader.component.css'
})
export class CustomLoaderComponent {
  isLoading$: Observable<boolean>;
  constructor(private _store: Store) { 
    this.isLoading$ = this._store.select(CoreState.getIsLoading);
  }
}
