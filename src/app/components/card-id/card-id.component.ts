import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-card-id',
  templateUrl: './card-id.component.html',
  styleUrls: ['./card-id.component.css']
})
export class CardIdComponent implements OnInit {


  employee : any

  constructor(private dataStoreService:DataStoreService) {
   }

  ngOnInit(): void {
    this.employee =  this.dataStoreService.dataEmployees()
  }


  flip(){

    let card =document.querySelector('.card-id')

    let items :any =document.querySelectorAll('.item')
    

    card?.classList.toggle('flip')

    items.forEach((item:any) => {
      item.classList.toggle('flip')
    })
  }



}
