import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commercial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commercial.html',
  styleUrls: ['./commercial.css']
})
export class Commercial {

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

  clients = [
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Benali',
      company: 'Orange Maroc',
      city: 'Casablanca',
      email: 'ali@orange.ma',
      phone: '0611111111',
      status: 'Active'
    },
    {
      id: 2,
      firstName: 'Sara',
      lastName: 'Amrani',
      company: 'MicroData',
      city: 'Rabat',
      email: 'sara@microdata.ma',
      phone: '0622222222',
      status: 'Active'
    },
    {
      id: 3,
      firstName: 'Ahmed',
      lastName: 'Alaoui',
      company: 'Inwi',
      city: 'Marrakech',
      email: 'ahmed@inwi.ma',
      phone: '0633333333',
      status: 'Inactive'
    }
  ];

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
      c.firstName.toLowerCase().includes(this.clientSearch.toLowerCase()) ||
      c.lastName.toLowerCase().includes(this.clientSearch.toLowerCase()) ||
      c.company.toLowerCase().includes(this.clientSearch.toLowerCase())
    );
  }

  selectClient(client: any) {
    this.selectedClient = client;
    this.activity.client = `${client.firstName} ${client.lastName}`;
    this.clientSearch = `${client.firstName} ${client.lastName}`;
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

    const client = {
      id: this.clients.length + 1,
      ...this.newClient
    };

    this.clients.push(client);
    this.selectClient(client);

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
      client: `${this.selectedClient.firstName} ${this.selectedClient.lastName}`,
      societe: this.selectedClient.company,
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