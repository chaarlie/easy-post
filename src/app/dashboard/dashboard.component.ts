import { Component, OnInit } from '@angular/core';

import {Tag} from '../tag/tag.model';
import {TagService} from '../tag/tag.service';

import {Post} from '../post/post.model';
import {PostService} from '../post/post.service';

import {SearchPipe} from './search.pipe';

@Component({
  templateUrl: './dashboard.html',
})

export class DashboardComponent implements OnInit {
  private tags: Tag[];
  private selectedTags: Tag[] = [];
  private post: Post = new Post();
  private response = '';

  constructor(
    private tagService: TagService,
    private postService: PostService
  ){}

  addTag(tag: Tag){
    this.selectedTags.push(tag);
    this.selectedTags.reverse();
  }
  ngOnInit(){
    this.tagService.getTags().subscribe((tags) => this.tags = tags);
  }
  savePost(){
    this.post.tags = this.selectedTags;
    this.postService.createPost(this.post).subscribe((msg) => this.response = msg );
  }
}