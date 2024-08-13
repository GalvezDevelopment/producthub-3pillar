import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CoreState } from './store/states/core.state';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isLoggedIn$: Observable<string | null>;
  constructor(private _store: Store) {
    this.isLoggedIn$ = this._store.select(CoreState.getToken);
   }
}
