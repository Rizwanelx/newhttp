import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { Comment } from './comments';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl: any = 'http://localhost:3000/';


  constructor(private http: HttpClient) { }
getPost(): Observable <any> {
    return this.http.get(this.apiUrl + 'posts/' );
     }
sendPost(posts: Post): Observable <any> {
    return this.http.post(this.apiUrl + 'posts/', posts);
    }
editPost(posts: Post): Observable <any> {
    return this.http.put<any>(this.apiUrl + 'posts/' + posts.id , posts);
    }


getComment(comment: Comment): Observable <Comment> {
  const httpheaders = new HttpHeaders()
  .set('Content-Type', 'application/json');
  const options = {
    headers: httpheaders
  };
  return this.http.post<Comment>(this.apiUrl + 'comments/', comment, options );
}
}
