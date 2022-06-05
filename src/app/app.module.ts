import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
      path: ':side',
      component: ListComponent
      }
    ]
  },
  {
    path: 'new-character',
    component: CreateCharacterComponent
  },
  {
    path: '**',
    redirectTo: '/characters'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
