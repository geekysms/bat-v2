import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    public storageSrv: Storage
  ) { }

  set(key: string, value: string) {
    this.storageSrv.set(key, value).then( data => {
      console.log('Item set properly', data);
    });
  }

  get(key: string) {
    this.storageSrv.get(key).then( data => {
      return data;
    });
  }

  remove(key: string) {
    this.storageSrv.remove(key).then( data => {
      console.log('removed key', data);
    });
  }

  clear() {
    this.storageSrv.clear().then( data => {
      console.log('cleared successfully', data);
    });
  }
}
