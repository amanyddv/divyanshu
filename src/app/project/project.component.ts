import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects=[
   
    {
    title:"Social Med",
    image:"social med.png"
  },
  {
    title:"AR CAR",
    image:"arcar.png"
  }, {
    title:"Music Player",
    image:"music player.png"
  }
 ]

}
