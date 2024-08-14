import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngxs/store';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { LogoutAction } from '../../../store/actions/core.actions';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterLink, ImageModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Usuarios',
        route: '/users'
      },
      {
        label: 'Categorias',
        route: '/categories'
      },
      {
        label: 'Productos',
        route: '/'
      },
      {
        separator: true
      },
      {
        label: 'Salir',
        command: () => this.logout()
      }
    ];
  }

  logout(): void {
    this._store.dispatch(new LogoutAction());
  }
}
