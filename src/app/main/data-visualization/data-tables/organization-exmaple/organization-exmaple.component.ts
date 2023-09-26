import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { CustomerService } from 'src/app/showcase/service/customerservice';
import { ProductService } from 'src/app/showcase/service/productservice';

@Component({
  selector: 'app-organization-exmaple',
  templateUrl: './organization-exmaple.component.html',
  styleUrls: ['./organization-exmaple.component.scss']
})
export class OrganizationExmapleComponent {
  constructor(public customers: CustomerService){}

  //general variabels
  filteredRating: any = 5; 
  verifiedToggleBool: boolean; 
  statuses : any[] = []; 
  selectedStatus: any; 

  //table variables
  tableData: any[] = []; 
  tableHeaders: any[] = [
    {label: 'Country', class: 'hidden', frozen: false, filter: true, filterType: 'text', filterField: 'country', sort: false},
    {label: 'ID', class: '', frozen: false, filter: true, customFilter: false, filterType : 'text', filterField: 'id', sort: false},
    {label: 'Name', class: '', frozen: false, filter: true, customFilter: false, filterType : 'text', filterField: 'name', sort: false},
    {label: 'Company', class: '', frozen: false, filter: true, customFilter: false, filterType : 'text', filterField: 'company', sort: false},
    {label: 'Date', class: '', frozen: false, filter: false, customFilter: false, filterType : 'date', filterField: 'date', sort: false},
    {label: 'Status', class: '', frozen: false, filter: true, customFilter: true, filterType: 'boolean', filterField: 'status', sort: false},
    {label: 'Verified', class: '', frozen: false, filter: true, customFilter: true, filterType: 'boolean', filterField: 'verified', sort: false},
    {label: 'Activity', class: '', frozen: false, filter: false, customFilter: false, filterType: 'numeric', filterField: 'activity', sort: false},
    {label: 'Balance', class: '', frozen: false, filter: true, customFilter: false, filterType: 'numeric', filterField: 'balance', sort: false}
  ]; 
  pinnedTotalRow: any;
  paginationOptions: any = [10]; 
  groupingTypes: any[] = [{type: 'subheader',  label: 'Row Header/Footer', dataKey: 'representative.name'}, {type: 'rowspan', label: 'Row Spanning', dataKey: 'country.name'}];
  selectedGrouping: any = this.groupingTypes[0];
  //boolean variables 
  loading: boolean = true; 

  ngOnInit(): void {
    this.getTableData(); 
  }
  //table functions
  clear(table: Table) {
    table.clear();
    this.selectedStatus =[];
    this.tableData = this.customers.getData();  
  }
  setPaginationOptions(data : any) {
    this.paginationOptions = [10];
    for(let i = 11; i <= data.length; i++){
      if(i%25 == 0){
        this.paginationOptions.push(i); 
      }
    } 
  }
  getTableData() {
    this.tableData = this.customers.getData(); 
    for(let i = 0; i < this.tableData.length; i++) {
      let statusObj : any = {status : this.tableData[i].status};
      if(!this.statuses.some((st : any) => {return st.status == this.tableData[i].status})){
        this.statuses.push(statusObj); 
      }
    }
    this.setPaginationOptions(this.tableData); 
    this.loading = false; 
  }
  verifiedToggle() {
    this.getTableData(); 
    let tempData: any[] = []; 
    if(this.verifiedToggleBool !== null) {
      for(let row of this.tableData) {
        if(row.verified == this.verifiedToggleBool){
          tempData.push(row); 
        }
      }
      this.tableData = tempData; 
    }
  }
  calculateCategoryFooter(name : any) {
    let obj : any = {count: 0, unqualified: 0, balance: 0, verified: 0}
    this.tableData.forEach((row : any, index : any) => {
      if(row.representative.name == name){
        obj.count++;
        obj.balance += row.balance; 
        if(row.status == 'unqualified'){obj.unqualified++};
        if(row.verified){obj.verified++};
      }
    });
    obj.verifiedPerc = obj.verified/obj.count * 100; 
    return obj; 
  }
  changeGrouping() {
    this.tableHeaders.find((header : any) => {return header.label == 'Country'}).class = (this.selectedGrouping.type == 'rowspan' ? '' : 'hidden'); 
    this.tableData = [];
    this.getTableData(); 
  }
  //filter functions
  filterStatus() {
    this.tableData = this.customers.getData(); 
    console.log(this.selectedStatus); 
    if(this.selectedStatus.length > 0) {
      let tempData : any = [];
      for(let i = 0; i < this.tableData.length; i++) {
        if(this.selectedStatus.some((st : any) => {return st.status == this.tableData[i].status})){
          tempData.push(this.tableData[i]);
        }
      }
      this.tableData = tempData; 
    }
  }
  //you have to use this function instead of [ngClass] to dynamically set the class with more than one condition
  setStatusClass(status: any) {
    switch (status) {
      case 'qalified': {
        return 'badge success'; 
      }
      case 'proposal': {
        return 'badge warn'; 
      }
      case 'negotiation': {
        return 'badge info'; 
      }
      case 'qualified': {
        return 'badge pending'; 
      }
      case 'renewal': {
        return 'badge renew'; 
      }
      case 'new': {
        return 'badge new'; 
      }
      case 'unqualified': {
        return 'badge fail'; 
      }
    }
  }
}
