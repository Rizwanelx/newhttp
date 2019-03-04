import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Post } from '../post';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posts;
postForm: FormGroup;
postiToUpdate: Post;


constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.showPost();
    this.postForm = this.fb.group({
      title  : ['', Validators.required],
      author : ['', Validators.required],
    });
  }
showPost() {
  this.apiService.getPost()
    .subscribe(args => this.posts = args);
}
onSubmit() {
  this.apiService.sendPost(this.postForm.value).subscribe(
    response => {
      this.posts.push(response);
    }
  );
}
postToEdit(postid: any) {
// this.apiService.getPostbyId(postid).subscribe(Post => {
//   this.postiToUpdate = postid;
//   this.postForm.controls['title'].setValue(Post.title);
//   this.postForm.controls['author'].setValue(Post.author);
// });
}
}
