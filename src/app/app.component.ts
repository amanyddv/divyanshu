import { Component, Sanitizer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  song=['Gulabi','chitta','uff teri ada']
  cur_song="funnky.mp3"
  nxtsong="funnky.mp3"

  i=0;
  nextsong(){
    this.i=this.i+1;
    if(this.i>=this.song.length) this.i=0
    console.log(this.song[this.i])
    this.cur_song=this.song[this.i]+'.mp3';
  }
  ngDoCheck(){
    this.nxtsong=this.cur_song
    console.log(this.nxtsong)
  }

  footer:boolean=true
  toggle(){
    if(this.footer) this.footer=false
    else this.footer=true
  }
}
