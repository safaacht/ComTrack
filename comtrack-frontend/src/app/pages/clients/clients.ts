import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFilter } from '../../shared/search-filter/search-filter';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/clients';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilter],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css'],
})
export class Clients implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAll().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => console.error('Error fetching clients', err)
    });
  }

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
      const query = this.searchQuery.toLowerCase();
      let matchQuery = true;
      if (query) {
         if (this.selectedCategory === 'Name') {
           matchQuery = c.nomContact.toLowerCase().includes(query);
         } else if (this.selectedCategory === 'Email') {
           matchQuery = c.email.toLowerCase().includes(query);
         } else if (this.selectedCategory === 'Company') {
           matchQuery = c.societe.toLowerCase().includes(query);
         } else {
           matchQuery = c.nomContact.toLowerCase().includes(query) || 
                        c.societe.toLowerCase().includes(query) ||
                        c.email.toLowerCase().includes(query) ||
                        c.phone.includes(query);
         }
      }
      return matchQuery;
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

    const newClientData: Client = {
      nomContact: this.newClient.fullName.trim(),
      email: this.newClient.email,
      phone: this.newClient.phone,
      societe: this.newClient.company
    };

    this.clientService.create(newClientData).subscribe({
      next: (createdClient) => {
        this.clients.unshift(createdClient);
        this.newClient = { fullName: '', email: '', phone: '', company: '' };
      },
      error: (err) => {
        console.error('Error creating client', err);
        alert('Failed to save client');
      }
    });
  }
}
