import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public titleTag: String;
  public metaKeywords: String;

  constructor() { }

  ngOnInit(): void {
    this.titleTag = 'GIVING AWAY FREE KNOWLEDGE BASE THAT HELPED ME TO QUIT MY BORING JOB AND BUILD BUSINESS ONLINE WITH A HIGH SOURCE OF INCOME.';
    this.metaKeywords = 'earn money online free, earn money online from home, earn money online without investment for students, earn money online fast, make money online free, make 100 a day online free, how to make $100 a day from home, online earn money, earn money online now, earn money online today, earn money online without investment, how to make 500 in one day, secret ways to make money online, make money online today, secrets to making money online, how to make 500 dollars in a day online free, how to make $100 in a day, how to make 5000 dollars in a day, how to make 200 dollars a day online, earn money online free fast and easy, how to make 100 a day, how to earn money online with google, make 1000 dollars a day online free, how to make 100 dollars a day online, how to make extra money online without paying anything, how to make 100 dollars a day online for free, earn money online apps, steps to earn money online, how do i make an extra $1000 a month?, earn fast money online, work online earn money, best way to earn money online, how to make money online quora, affiliate marketing, affiliate marketing software, affiliate marketing tools, affiliate marketing system';
  }

}
