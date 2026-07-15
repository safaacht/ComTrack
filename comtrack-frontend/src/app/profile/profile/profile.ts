import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {

  constructor(private router: Router) {}

  isEditingProfile = false;
  userBackup: any = null;

  user = {
    firstName: 'Safaa',
    lastName: 'Chtaoui',
    email: 'safaa@comtrack.com',
    phone: '0612345678',
    role: 'ADMIN',
    fonction: 'Responsable Commercial'
  };

  password = {
    current: '',
    new: '',
    confirm: ''
  };

  updateProfile() {
    this.isEditingProfile = false;
    alert('Profile updated!');
  }

  enableEdit() {
    this.isEditingProfile = true;
    this.userBackup = { ...this.user };
  }

  cancelEdit() {
    this.isEditingProfile = false;
    if (this.userBackup) {
      this.user = { ...this.userBackup };
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  changePassword() {
    if (this.password.new !== this.password.confirm) {
      alert('Passwords do not match!');
      return;
    }

    alert('Password changed successfully!');
  }

}