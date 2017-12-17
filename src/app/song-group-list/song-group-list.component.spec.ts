import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongGroupListComponent } from './song-group-list.component';

describe('SongGroupListComponent', () => {
  let component: SongGroupListComponent;
  let fixture: ComponentFixture<SongGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
