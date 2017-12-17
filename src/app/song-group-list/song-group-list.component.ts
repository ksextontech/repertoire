import { Component, OnInit } from '@angular/core';
import { SongGroup } from './song-group.model';

@Component({
  selector: 'app-song-group-list',
  templateUrl: './song-group-list.component.html',
  styleUrls: ['./song-group-list.component.css']
})
export class SongGroupListComponent implements OnInit {

  songGroups: Array<SongGroup> = [];

  constructor() {
    this.songGroups = [
      new SongGroup('Courtney\'s Songs', true),
      new SongGroup('Currently Learning', true)
    ];
  }

  ngOnInit() {
  }

}
