import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  createSongForm: FormGroup;
  nameControl: AbstractControl;

  constructor(fb: FormBuilder) {
    this.createSongForm = fb.group({
      'name': [null, Validators.required],
      'artistName': [null, Validators.required]
    });

    this.nameControl = this.createSongForm.controls['name'];
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('you submitted value:', form);
  }

}
