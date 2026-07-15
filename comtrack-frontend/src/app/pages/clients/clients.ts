import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFilter } from '../../shared/search-filter/search-filter';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilter],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css'],
})
export class Clients {
  clients = [
    {
      id: 1,
      firstName: 'Sara',
      lastName: 'Alaoui',
      company: 'ABC Ltd',
      city: 'Rabat',
      email: 'sara@test.com',
      phone: '0612345678',
      status: 'Active',
      history: [
        { date: '20/06/2026', activity: 'Phone Call' },
        { date: '18/06/2026', activity: 'Client Visit' },
        { date: '15/06/2026', activity: 'Email Sent' }
      ]
    },
    {
      id: 2,
      firstName: 'Ahmed',
      lastName: 'Bennani',
      company: 'XYZ SA',
      city: 'Casablanca',
      email: 'ahmed@test.com',
      phone: '0623456789',
      status: 'Inactive',
      history: [
        { date: '10/06/2026', activity: 'Meeting' }
      ]
    }
  ];

  statusFilters = ['All Status', 'Active', 'Inactive'];
  searchFilters = ['Name', 'Email', 'Company', 'City'];
  isDetailsOpen = true;

  searchQuery = '';
  selectedStatus = 'All Status';
  selectedCategory = '';

  onSearchChange(query: string) {
    this.searchQuery = query;
  }

  onStatusChange(status: string) {
    this.selectedStatus = status;
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }

  get filteredClients() {
    return this.clients.filter(c => {
      // 1. Search Query
      const query = this.searchQuery.toLowerCase();
      let matchQuery = true;
      if (query) {
         if (this.selectedCategory === 'Name') {
           matchQuery = c.firstName.toLowerCase().includes(query) || c.lastName.toLowerCase().includes(query);
         } else if (this.selectedCategory === 'Email') {
           matchQuery = c.email.toLowerCase().includes(query);
         } else if (this.selectedCategory === 'Company') {
           matchQuery = c.company.toLowerCase().includes(query);
         } else if (this.selectedCategory === 'City') {
           matchQuery = c.city.toLowerCase().includes(query);
         } else {
           matchQuery = c.firstName.toLowerCase().includes(query) || 
                        c.lastName.toLowerCase().includes(query) || 
                        c.company.toLowerCase().includes(query) ||
                        c.email.toLowerCase().includes(query) ||
                        c.phone.includes(query);
         }
      }

      // 2. Status
      let matchStatus = true;
      if (this.selectedStatus !== 'All Status' && this.selectedStatus !== '') {
        matchStatus = c.status === this.selectedStatus;
      }

      return matchQuery && matchStatus;
    });
  }

  newClient = {
    fullName: '',
    email: '',
    phone: '',
    company: ''
  };

  get isEmailValid(): boolean {
    if (!this.newClient.email) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.newClient.email);
  }

  get isFormValid(): boolean {
    return this.newClient.fullName.trim().length > 0 && 
           this.newClient.email.trim().length > 0 && this.isEmailValid &&
           this.newClient.phone.trim().length > 0 &&
           this.newClient.company.trim().length > 0;
  }

  saveClient() {
    if (!this.newClient.fullName) return;

    // Split full name into first and last
    const nameParts = this.newClient.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    this.clients.unshift({
      id: this.clients.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: this.newClient.email,
      phone: this.newClient.phone,
      company: this.newClient.company,
      city: '',
      status: 'Active',
      history: []
    });

    this.newClient = { fullName: '', email: '', phone: '', company: '' };
  }
}
