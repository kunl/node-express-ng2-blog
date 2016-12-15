import { Component } from '@angular/core';

@Component({
    selector: 'Post',
    templateUrl: 'post.component.html'
})
export  class PostComponent {
    title: string;
    content: string;

    submit(){
        console.log(this)
    }
}