import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoMarketModel } from '../models/crypto-market.model';

const api_base_url: string = 'https://api.coingecko.com/api/v3/'

@Injectable({
  providedIn: 'root'
})
export class CryptoMarketsService {

  constructor(private http: HttpClient) { }

  getMarkets(numberMarkets: number = 5, currency:string = 'usd'): Observable<CryptoMarketModel[]> {
    return this.http.get<CryptoMarketModel[]>(`${api_base_url}coins/markets`, { params: {
      'vs_currency': currency,
      'per_page': numberMarkets,
      'page': 1
    }});
  }

}
