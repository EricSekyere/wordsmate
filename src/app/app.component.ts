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
  constructor(private http: HttpService) {}

  private fetchData(url) {
   return this.http.fetchData(url);
  }

  make_request() {
    /*console.log(`${this.baseURL}/data?let=${this.letters}`);
    this.fetchData(`${this.baseURL}/data?let=${this.letters}`)
    .subscribe(data => this.perms = data);*/
    this.perms = { '3': ['ott', 'tot', 'toy', 'tty', 'tyt', 'yot'], '4': ['toty', 'tyto'] }
    this.showResult = true;
  }

  ngOnInit(): void {
    this.showResult = false;
  }
}
