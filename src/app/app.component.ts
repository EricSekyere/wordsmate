import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpService } from './http.service';
import { KeysPipe } from './pipe';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService, KeysPipe]
})
export class AppComponent implements OnInit {
  letters;
  perms;
  showResult = false;
  baseURL = environment.domain;
  breakpoint: number;
  constructor(private http: HttpService) { }

  private fetchData(url) {
    return this.http.fetchData(url);
  }

  make_request() {
    /*console.log(`${this.baseURL}/data?let=${this.letters}`);
    this.fetchData(`${this.baseURL}/data?let=${this.letters}`)
    .subscribe(data => this.perms = data);*/
    this.perms = {
      '3': ['ert', 'eru', 'ery', 'etr', 'ety',
      'eur', 'eyr', 'ret', 'rey', 'rte', 'rtu',
      'rue', 'rut', 'ruy', 'rye', 'ter', 'try', 'tue', 'tur', 'tuy', 'tye', 'tyr', 'ure', 'ury', 'ute', 'utr', 'yer', 'yet'],
      '4': ['trey', 'tyre', 'uret', 'urey', 'yurt'], '5': ['tuyer'] } ;
    this.showResult = true;
  }

  ngOnInit(): void {
    this.showResult = false;
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
