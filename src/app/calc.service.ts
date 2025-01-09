import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedService: SharedService,private http: HttpClient) { }

  multiply(a: number, b: number): number {
    this.sharedService.mySharedFunction();
    return a * b;
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(      
      map(data => data.map(item => Object.assign(new Post(), item))
    ));
  }  
}
