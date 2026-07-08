import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private router: Router) {}

  // Commercials data
  commercials = [
    { id: 1, firstName: 'Ahmed', lastName: 'Bennani', email: 'ahmed@test.com', phone: '0600000000', status: 'Active' },
    { id: 2, firstName: 'Sara', lastName: 'Alaoui', email: 'sara@test.com', phone: '0611111111', status: 'Inactive' },
    { id: 3, firstName: 'Youssef', lastName: 'Naciri', email: 'youssef@test.com', phone: '0622222222', status: 'Active' },
    { id: 4, firstName: 'Kenza', lastName: 'Idrissi', email: 'kenza@test.com', phone: '0633333333', status: 'Active' },
    { id: 5, firstName: 'Leila', lastName: 'Radi', email: 'leila@test.com', phone: '0644444444', status: 'Active' }
  ];

  // Activities data
  activities = [
    { id: 1, client: 'Sarah', society: 'Tesla', type: 'Call', date: '2026-06-22', status: 'Done', statusClass: 'done' },
    { id: 2, client: 'Yassine', society: 'Samsung', type: 'Visit', date: '2026-06-21', status: 'Pending', statusClass: 'pending' },
    { id: 3, client: 'Hamza', society: 'Marjane', type: 'Visit', date: '2026-06-21', status: 'Canceled', statusClass: 'canceled' },
    { id: 4, client: 'Fatima', society: 'Apple', type: 'Email', date: '2026-06-20', status: 'Done', statusClass: 'done' },
    { id: 5, client: 'Ali', society: 'Google', type: 'Call', date: '2026-06-19', status: 'Pending', statusClass: 'pending' }
  ];

  selectedCommercial: any = null;
  isEditOpen = false;
  isAddOpen = false;

  newCommercial = { id: 0, firstName: '', lastName: '', email: '', phone: '', status: 'Active' };

  // Commercials Pagination
  currentPage = 1;
  pageSize = 10;

  // Activities Pagination
  activityPage = 1;
  activityPageSize = 10;

  get paginatedActivities() {
    const startIndex = (this.activityPage - 1) * this.activityPageSize;
    return this.activities.slice(startIndex, startIndex + this.activityPageSize);
  }

  get activityTotalPages() {
    return Math.ceil(this.activities.length / this.activityPageSize);
  }

  nextActivityPage() {
    if (this.activityPage < this.activityTotalPages) this.activityPage++;
  }

  prevActivityPage() {
    if (this.activityPage > 1) this.activityPage--;
  }

  get paginatedCommercials() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.commercials.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.commercials.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  openAdd() {
    this.isAddOpen = true;
    this.newCommercial = { id: 0, firstName: '', lastName: '', email: '', phone: '', status: 'Active' };
  }

  addCommercial() {
    const newId = this.commercials.length
      ? Math.max(...this.commercials.map(c => c.id)) + 1
      : 1;

    this.commercials.unshift({ ...this.newCommercial, id: newId });
    this.isAddOpen = false;
    this.newCommercial = { id: 0, firstName: '', lastName: '', email: '', phone: '', status: 'Active' };
  }

  openEdit(commercial: any) {
    this.selectedCommercial = { ...commercial };
    this.isEditOpen = true;
  }

  saveEdit() {
    const index = this.commercials.findIndex(c => c.id === this.selectedCommercial.id);
    if (index !== -1) {
      this.commercials[index] = this.selectedCommercial;
    }
    this.isEditOpen = false;
  }

  deleteCommercial(id: number) {
    this.commercials = this.commercials.filter(c => c.id !== id);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
  }

  // Quick Actions
  isActivityAddOpen = false;
  newActivity = { id: 0, client: '', society: '', type: 'Call', date: '', status: 'Pending', statusClass: 'pending' };

  goToClients() {
    this.router.navigate(['/clients']);
  }

  viewReports() {
    alert('Reports module is coming soon!');
  }

  openAddActivity() {
    this.isActivityAddOpen = true;
    this.newActivity = { 
      id: 0, 
      client: '', 
      society: '', 
      type: 'Call', 
      date: new Date().toISOString().split('T')[0], 
      status: 'Pending', 
      statusClass: 'pending' 
    };
  }

  updateActivityStatusClass() {
    if (this.newActivity.status === 'Done') this.newActivity.statusClass = 'done';
    else if (this.newActivity.status === 'Canceled') this.newActivity.statusClass = 'canceled';
    else this.newActivity.statusClass = 'pending';
  }

  addActivity() {
    const newId = this.activities.length
      ? Math.max(...this.activities.map(a => a.id)) + 1
      : 1;
    this.activities.unshift({ ...this.newActivity, id: newId });
    this.isActivityAddOpen = false;
  }
}
