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
  domain = environment.production ?
  'https://localhost:5000' :
  'https://wordsmateserver.herokuapp.com';

  constructor(private http: HttpService) {}

  private fetchData(url) {
   return this.http.fetchData(url);
  }

  make_request() {
    console.log(this.letters);
    this.fetchData(`${this.domain}/data?let=${this.letters}`)
    .subscribe(data => this.perms = data);
    console.log(this.perms);
    this.showResult = true;
  }

  ngOnInit(): void {
    this.showResult = false;
  }
}
