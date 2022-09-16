import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { map, from, mergeMap } from 'rxjs';
import { repos } from './models/repos';
import { GitHubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  API!: string;
  Items: string = '';
  constructor(private service: GitHubService){
  }
  ngOnInit() {
    this.service.list().subscribe(Dados => this.API = Dados);
   }
   clicks(): void{
    this.Items = 'Dados disponíveis: |' + JSON.stringify(this.API) + '|' 
    console.log(this.Items);
    }
  }
  
  

