import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/showcase/service/productservice';

@Component({
  selector: 'app-shopping-example',
  templateUrl: './shopping-example.component.html',
  styleUrls: ['./shopping-example.component.scss']
})
export class ShoppingExampleComponent implements OnInit{
  constructor(public products: ProductService, public messageService : MessageService){}

  //general variabels
  filteredRating: any = 5; 
  yourCart: any[] = [];  
  //boolean variables
  cartVisible: boolean = false; 
  loading: boolean = true; 
  stockToggleBool: boolean; 
  //table variables
  tableData: any[] = []; 
  tableHeaders: any[] = [
    // {label: 'Category', class: '', frozen: false, filter: false, filterField: 'category', sort: false},
    {label: 'ID', class: '', frozen: false, filter: true, customFilter: false, filterType : 'text', filterField: 'id', sort: false},
    {label: 'Name', class: '', frozen: false, filter: true, customFilter: false, filterType : 'text', filterField: 'name', sort: false},
    {label: 'Price', class: '', frozen: false, filter: true, customFilter: false, filterType : 'numeric', filterField: 'price', sort: false},
    {label: 'Quantity', class: '', frozen: false, filter: true, customFilter: false, filterType : 'numeric', filterField: 'quantity', sort: false},
    {label: 'Inventory Status', class: '', frozen: false, filter: true, customFilter: false, filterType: 'boolean', filterField: 'inStock', sort: false},
    {label: 'Rating', class: '', frozen: false, filter: true, customFilter: true, filterType: 'text', filterField: 'rating', sort: false}
  ]; 
  pinnedTotalRow: any;
  paginationOptions: any = [10]; 
  //carousel variables
  relatedItems: any[] = []; 
  responsiveOptions: any[] = [
    {breakpoint: '1200px', numVisible: 3, numScroll: 3},
    {breakpoint: '1024px', numVisible: 3, numScroll: 3},
    {breakpoint: '992px', numVisible: 2, numScroll: 2},
    {breakpoint: '768px', numVisible: 2, numScroll: 2},
    {breakpoint: '560px', numVisible: 1, numScroll: 1},
  ]

  ngOnInit(): void {
    this.getTableData(); 
  }
  //table functions
  clear(table: Table) {
    table.clear();
    this.getTableData(); 
  }
  filterRating() {
    this.getTableData();
    let tempData : any = [];
    for(let row of this.tableData){
      if(row.rating == this.filteredRating){
        tempData.push(row); 
      }
    }
    this.tableData = tempData; 
    this.setPaginationOptions(this.tableData); 
  }
  setPaginationOptions(data : any) {
    this.paginationOptions = [10];
    for(let i = 11; i <= data.length; i++){
      if(i%5 == 0){
        this.paginationOptions.push(i); 
      }
    } 
  }
  getTableData() {
    this.tableData = this.products.getProductsWithOrdersData();
    this.modifyTableData();
    this.setPaginationOptions(this.tableData); 
    this.loading = false; 
  }
  modifyTableData() {
    //set tooltip source here as well as category count
    this.tableData.forEach((row : any) => {
      row.inStock = row.inventoryStatus == 'OUTOFSTOCK' ? false : true; 
      row.src = 'https://primefaces.org/cdn/primeng/images/demo/product/' + row.image;
    });
  }
  stockToggle() {
    this.getTableData(); 
    let tempData: any[] = []; 
    if(this.stockToggleBool !== null) {
      for(let row of this.tableData) {
        if(row.inStock == this.stockToggleBool){
          tempData.push(row); 
        }
      }
      this.tableData = tempData; 
    }
  }
  calculateCategoryFooter(category : any) {
    let obj : any = {count : 0, inventory : 0, revenue: 0, totalRating : 0}
    this.tableData.forEach((row : any, index : any) => {
      if(row.category == category){
        obj.count++; 
        obj.inventory += row.quantity; 
        obj.totalRating += row.rating; 
        obj.revenue += (row.quantity * row.price); 
      }
    });
    obj.averageRating = Math.round(obj.totalRating/obj.count); 
    return obj; 
  }
  //you have to use this function instead of [ngClass] to dynamically set the class with more than one condition
  setInventoryStatusClass(status: any) {
    switch (status) {
      case 'INSTOCK': {
        return 'badge success'; 
      }
      case 'LOWSTOCK': {
        return 'badge warn'; 
      }
      case 'OUTOFSTOCK': {
        return 'badge fail'; 
      }
    }
  }
  //cart functions
  addToCart(row : any){
    row.quantity--; 
    if(row.quantity == 0){row.inventoryStatus='OUTOFSTOCK'}
    if(this.yourCart.some((item : any) => {return item.name == row.name})){
      this.yourCart.find((item : any) => {return item.name == row.name}).cartQuantity++; 
      this.yourCart.find((item : any) => {return item.name == row.name}).itemSubTotal += row.price; 
    }else {
      row.cartQuantity = 1; 
      row.itemSubTotal = row.price; 
      this.yourCart.push(row); 
    }
    this.calculateCategoryFooter(row.category); 
    this.messageService.clear(); 
    this.messageService.add({
      key: 'toastMessage',
      severity: 'success', 
      summary: 'ADDED', 
      detail: row.name + ' was successfully added to your cart', 
      life: 3000
    })
  }
  addItemQuantity(item : any){
    item.cartQuantity++; 
    item.itemSubTotal += item.price; 
    this.calculateCartTotal(); 
  }
  subtractItemQuantity(item : any){
    item.cartQuantity--; 
    item.itemSubTotal -= item.price; 
    this.calculateCartTotal(); 
  }
  openCart() {
    this.cartVisible = this.yourCart.length > 0 ? true : false; 
    this.getRelatedItems(); 
  }
  emptyCart(){
    this.yourCart = []; 
    this.calculateCartTotal(); 
  }
  removeItem(item : any, index : any){
    this.tableData.find((entry : any) => {return entry.name == item.name}).quantity += item.cartQuantity; 
    this.calculateCategoryFooter(item.category); 
    this.yourCart.splice(index, 1); 
    this.calculateCartTotal(); 
  }
  getRelatedItems(){
    this.relatedItems = [];
    let categoryArray: any = this.products.getCategoryArrays();
    for(let item of this.yourCart) {
      let randNum: any = this.randomIntFromInterval(0, categoryArray[item.category].length);
      this.relatedItems.push(categoryArray[item.category][randNum]);
    }
    for(let i = this.relatedItems.length; i <=6; i++) {
      let randNum: any = this.randomIntFromInterval(0, this.tableData.length);
      if(!this.relatedItems.some((item: any) => {return item.name == this.tableData[randNum].name}) && this.tableData[randNum].inventoryStatus != 'OUTOFSTOCK'){
        this.relatedItems.push(this.tableData[randNum]);
      }
    }
  }
  addRelatedItem(item: any){
    item.cartQuantity = 1; 
    item.itemSubTotal = item.price; 
    this.yourCart.push(item); 
    this.getRelatedItems(); 
    this.calculateCartTotal(); 
  }
  calculateCartTotal() {
    let total: number = 0;
    for(let item of this.yourCart) {
      total += (item.cartQuantity * item.price); 
    }
    return total; 
  }
  //etc functions
  randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
