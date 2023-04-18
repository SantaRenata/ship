import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  ships:any = [];
  shipForm !: FormGroup

  constructor(
    private api:ApiService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.getShips();
    this.shipForm = this.formBuilder.group({
      name: " ",
      length: " ",
      price: " ",
      person: " ",
      trailer:" "
    })
  }

  getShips(){
    this.api.getShips().subscribe({
      next:(ships) => {this.ships = ships},
      error: (error) => {console.log('Hiba! A RestApi elérése sikertelen!')}
    });
  }

  onClickAddButton(){
    let ship = {
      name: this.shipForm.value.name,
      length: this.shipForm.value.length,
      price: this.shipForm.value.price,
      person: this.shipForm.value.person,
      trailer: this.shipForm.value.trailer,
    }
    this.api.addShips(ship).subscribe({
      next:(response:any) => {
        console.log(response);
      },
      error: () => {}
    });
  }
}
