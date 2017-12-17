import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongGroupListComponent } from './song-group-list/song-group-list.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { CreateSongComponent } from './create-song/create-song.component';

const routes: Routes = [
  { path: '', component: RepertoireComponent },
  { path: 'new-song', component: CreateSongComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SongListComponent,
    SongGroupListComponent,
    RepertoireComponent,
    CreateSongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
