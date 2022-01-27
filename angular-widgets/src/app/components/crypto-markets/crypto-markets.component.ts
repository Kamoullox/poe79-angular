import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CryptoMarketModel } from 'src/app/models/crypto-market.model';
import { CryptoMarketsService } from 'src/app/services/crypto-markets.service';

@Component({
  selector: 'aw-crypto-markets',
  templateUrl: './crypto-markets.component.html',
  styleUrls: ['./crypto-markets.component.scss']
})
export class CryptoMarketsComponent implements OnInit {
  @Input() numberCrypto: number = 5;
  @Input() currency: string = 'usd';

  markets: CryptoMarketModel[] = [];

  constructor(private cryptoMarketsService: CryptoMarketsService) { }

  ngOnInit(): void { 
    this.fetchMarkets();

    interval(20000).subscribe((time) =>  {
      this.fetchMarkets(); 
      console.log(time)
    }
    );
  }

  private fetchMarkets() {
    this.cryptoMarketsService.getMarkets(this.numberCrypto, this.currency).subscribe(
      (markets: CryptoMarketModel[]) => this.markets = markets)
  }

}
