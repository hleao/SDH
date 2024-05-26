import { Injectable } from '@angular/core';

const LAST_ENTRY_KEY = "lastEntry";
@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor() { }

  public saveEntry(data: any) {
    localStorage.setItem(LAST_ENTRY_KEY, JSON.stringify(data));
  }

  public getLastEntry(): any {
    return JSON.parse(localStorage.getItem(LAST_ENTRY_KEY) || "");
  }
}
