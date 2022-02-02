
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }

  private userName = new BehaviorSubject<string>('john');
  getName = this.userName.asObservable(); // subscribe to this method

  storeName(name: any) {
    this.userName.next(name);
  }
}

