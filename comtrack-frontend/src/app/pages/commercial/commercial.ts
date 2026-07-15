import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/clients';

@Component({
  selector: 'app-commercial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commercial.html',
  styleUrls: ['./commercial.css']
})
export class Commercial implements OnInit {
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

  /* =======================
      SEARCH
  ======================= */

  search = '';
  dateFilter = '';

  /* =======================
      MODALS
  ======================= */

  showClientModal = false;

  /* =======================
      CLIENT SEARCH
  ======================= */

  clientSearch = '';

  clients: Client[] = [];

  /* =======================
      SELECTED CLIENT
  ======================= */

  selectedClient: any = null;

  /* =======================
      NEW CLIENT
  ======================= */

  newClient = {
    firstName: '',
    lastName: '',
    company: '',
    city: '',
    email: '',
    phone: '',
    status: 'Active'
  };

  /* =======================
      ACTIVITY FORM
  ======================= */

  activity = {
    client: '',
    type: '',
    statut: '',
    date: '',
    description: ''
  };

  /* =======================
      TABLE
  ======================= */

  activities = [
    {
      date: '2026-07-08',
      client: 'Ali Benali',
      societe: 'Orange Maroc',
      type: 'Visite',
      statut: 'Terminée'
    },
    {
      date: '2026-07-07',
      client: 'Sara Amrani',
      societe: 'MicroData',
      type: 'Appel',
      statut: 'En cours'
    },
    {
      date: '2026-07-06',
      client: 'Ahmed Alaoui',
      societe: 'Inwi',
      type: 'Email',
      statut: 'Terminée'
    }
  ];

  filteredActivities = [...this.activities];

  searchActivities() {
    this.filteredActivities = this.activities.filter(a => {
      const matchCompany = a.societe.toLowerCase().includes(this.search.toLowerCase());
      const matchDate = this.dateFilter ? a.date === this.dateFilter : true;
      return matchCompany && matchDate;
    });
  }

  /* =======================
      CLIENT SEARCH
  ======================= */

  filteredClients() {
    return this.clients.filter(c =>
      c.nomContact.toLowerCase().includes(this.clientSearch.toLowerCase()) ||
      c.societe.toLowerCase().includes(this.clientSearch.toLowerCase())
    );
  }

  selectClient(client: any) {
    this.selectedClient = client;
    this.activity.client = client.nomContact;
    this.clientSearch = client.nomContact;
  }

  /* =======================
      ADD CLIENT
  ======================= */

  get isEmailValid(): boolean {
    if (!this.newClient.email) return true; // allow empty if not strictly required, or we can make it false to require it
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.newClient.email);
  }

  saveClient() {
    if (this.newClient.email && !this.isEmailValid) {
      alert('Please enter a valid email address');
      return;
    }

    const nameParts = this.newClient.firstName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const newClientData: Client = {
      nomContact: `${this.newClient.firstName} ${this.newClient.lastName}`.trim(),
      email: this.newClient.email,
      phone: this.newClient.phone,
      societe: this.newClient.company
    };

    this.clientService.create(newClientData).subscribe({
      next: (createdClient) => {
        this.clients.push(createdClient);
        this.selectClient(createdClient);
        this.newClient = {
          firstName: '',
          lastName: '',
          company: '',
          city: '',
          email: '',
          phone: '',
          status: 'Active'
        };
        this.showClientModal = false;
      },
      error: (err) => {
        console.error('Error creating client', err);
        alert('Failed to save client');
      }
    });
  }

  /* =======================
      SAVE ACTIVITY
  ======================= */

  saveActivity() {

    if (!this.selectedClient) {

      alert('Select a client');

      return;

    }

    this.activities.unshift({
      date: this.activity.date,
      client: this.selectedClient.nomContact,
      societe: this.selectedClient.societe,
      type: this.activity.type,
      statut: this.activity.statut
    });

    this.searchActivities();

    this.activity = {

      client: '',
      type: '',
      statut: '',
      date: '',
      description: ''

    };

    this.clientSearch = '';

    this.selectedClient = null;

  }

}