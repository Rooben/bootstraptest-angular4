import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { BottomHeaderComponent } from './components/bottom-header/bottom-header.component';
import { ContentsComponent } from './components/contents/contents.component';
import { LeftSidebarComponent } from './components/contents/left-sidebar/left-sidebar.component';
import { MainContentsComponent } from './components/contents/main-contents/main-contents.component';
import { SolidBoderedCardComponent } from './components/contents/solid-bodered-card/solid-bodered-card.component';
import { DottedBoderedCardComponent } from './components/contents/dotted-bodered-card/dotted-bodered-card.component';
import { AddButtonCardComponent } from './components/contents/add-button-card/add-button-card.component';
import { MainContentsColumnComponent } from './components/contents/main-contents-column/main-contents-column.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    ContentsComponent,
    LeftSidebarComponent,
    MainContentsComponent,
    SolidBoderedCardComponent,
    DottedBoderedCardComponent,
    AddButtonCardComponent,
    MainContentsColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
