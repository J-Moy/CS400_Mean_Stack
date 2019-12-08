import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // This is the parent
  data: any;
  display = false;

  constructor(private http: HttpClient) { }

  contactFormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),

    }
  );


  ngOnInit() {
  }


  onSubmit() {
    console.log(`Sending ${this.contactFormGroup.value}`);
  }

  getData(name: string) {
    // const headers = new HttpHeaders().set('Access-Control-Allow-Methods', '*')
    // const params = new HttpParams().set('Access-Control-Allow-Methods', '*')
    // for testing w/o having to start backend + mongo servers
    // const url = 'https://jsonplaceholder.typicode.com';
    // this.data = this.http.get(url + '/posts?userId=1');
    // this.data = this.http.get(url + '/posts/1/');
    // this.data = this.http.get('https://pokeapi.co/api/v2/pokemon/bulbasaur/');
    this.data = this.http.get('http://localhost:3000/ps6/' + name);
    this.display = true;
    console.log('==============================');
    console.log(this.data);
    console.log(name);
    console.log('==============================');


  }

}
