import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../_service/country.service';
import { IndicatorsService } from '../_service/indicators.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Array<Country> = [];
  country: any = {};
  indicators: any = [];
  isLoading: boolean = false;

  constructor(private countryService: CountryService, private indicatorsService: IndicatorsService) { }

  ngOnInit(): void {
    this.countryService.getListCountries().subscribe({
      next: (data) => {
        this.countries = data[1];
        console.log(this.countries);
       },
      error: (e) => {
        console.error("Erro: ", e);
      }
    });
  }

  loadIndicatorsByCountry(e: any): void{
    console.log(e);
    this.indicatorsService.getListIndicators(e.target.value).subscribe({
      next: (data) => {
        console.log("Loading...");
        this.isLoading = true;
        this.indicators = data[1];
        console.log(this.indicators.length);
        console.log(this.indicators);
      },
      error: (e) => {
        console.error("Erro: ", e);
      },
      complete: () => {
        console.log("Loaded");
        this.isLoading = false;
      }
    });
  }
}
