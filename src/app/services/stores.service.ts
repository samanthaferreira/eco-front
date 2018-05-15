import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoresService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/stores`, options)
      .toPromise();
  }
  getOne(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/stores/${id}`, options)
      .toPromise();
  }

  create(stores) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/stores`, stores, options)
      .toPromise();
  }

}
