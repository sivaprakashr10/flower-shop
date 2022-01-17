import { ProfileEditPage } from './../../pages/profile-edit/profile-edit.page';
import { GlobalService } from './../../Services/global/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private global: GlobalService) {}

  ngOnInit() {}

  onEdit() {
    const options = {
      component: ProfileEditPage,
      swipeToclose: true,
    };
    const modal = this.global.createModal(options);
  }
}
