import { GlobalService } from './../../Services/global/global.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  constructor(private global: GlobalService) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onClose() {
    this.global.modalDismiss();
  }
}
