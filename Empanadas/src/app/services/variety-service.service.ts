import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarietyServiceService {

  private varieties: string[] = ['Carne', 'Pollo', 'Jamón y Queso'];
  private order: { [variety: string]: number } = {};


  getVarieties() {
    return this.varieties;
  }

  getOrder() {
    return this.order;
  }

  addVarietyToOrder(variety: string) {
    if (this.order[variety]) {
      this.order[variety]++;
    } else {
      this.order[variety] = 1;
    }
  }

  removeVarietyFromOrder(variety: string) {
    if (this.order[variety]) {
      this.order[variety]--;
      if (this.order[variety] === 0) {
        delete this.order[variety];
      }
    }
  }


  constructor() { }
}
