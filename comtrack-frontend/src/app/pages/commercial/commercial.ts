import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commercial',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './commercial.html',
  styleUrl: './commercial.css',
})
export class Commercial {

  commercials = [
    {
      id: 1,
      firstName: 'Ahmed',
      lastName: 'Bennani',
      email: 'ahmed@test.com',
      phone: '0600000000'
    },
    {
      id: 2,
      firstName: 'Sara',
      lastName: 'Alaoui',
      email: 'sara@test.com',
      phone: '0611111111'
    }
  ];

  selectedCommercial: any = null;
  isEditOpen = false;
  isAddOpen = false;

  newCommercial = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  openAdd() {
    this.isAddOpen = true;

    this.newCommercial = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }

  addCommercial() {
    const newId = this.commercials.length
      ? Math.max(...this.commercials.map(c => c.id)) + 1
      : 1;

    this.commercials.push({
      ...this.newCommercial,
      id: newId
    });

    this.isAddOpen = false;
  }

  openEdit(commercial: any) {
    this.selectedCommercial = { ...commercial };
    this.isEditOpen = true;
  }

  saveEdit() {
    const index = this.commercials.findIndex(
      c => c.id === this.selectedCommercial.id
    );

    if (index !== -1) {
      this.commercials[index] = this.selectedCommercial;
    }

    this.isEditOpen = false;
  }

  deleteCommercial(id: number) {
    this.commercials = this.commercials.filter(c => c.id !== id);
  }
}