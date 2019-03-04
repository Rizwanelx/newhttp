import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
myComment: Comment;
commentForm: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.showComment();
  }
showComment() {
  this.apiService.getComment().subscribe(args => this.myComment = args)
}
onFormSubmit(){

}
}
