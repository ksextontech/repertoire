import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongGroupListComponent } from './song-group-list/song-group-list.component';
import { RepertoireComponent } from './repertoire/repertoire.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SongListComponent,
    SongGroupListComponent,
    RepertoireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
