import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service';
import { Router } from '@angular/router';


export interface country{
     name: any,
     flags: any,
     population: number,
     region: string,
     capital: string,
}

@Component({
  selector: 'app-countries',
  templateUrl: './listOfCountries.component.html',
  styleUrls:["./listOfCountries.component.css"]
})

export class CountriesComponent implements OnInit {

 public countryList: country[];
        isFetching = false;
   
  constructor(private cntryList: HomeService, private router:Router){}
  
  onSelected(country: any){
    this.router.navigate(['/country_details_page', country.name.common]);
   }

  ngOnInit(){ 
      this.cntryList.fetchCountries().subscribe( resData => {
        this.countryList = resData;
        this.isFetching = false; 
        console.log(resData)
    }) 
    
    this.isFetching = true ; 
  }   
}
