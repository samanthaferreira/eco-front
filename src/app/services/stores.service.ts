import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class StoresService {

  private apiUrl = environment.apiUrl + '/stores';

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}`, options)
      .toPromise();
  }
  getOne(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}/${id}`, options)
      .toPromise();
  }

  create(stores) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.apiUrl}`, stores, options)
      .toPromise();
  }

}
