import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  pic=""
  image(event:any){
    this.pic=event.target.files[0]
  }
  name=""
  email=""
  file=""
  message=""
  send(contact:any){
    
    const formdata =new FormData()
    formdata.append('file',this.pic);
    formdata.append('name',contact.name);
    formdata.append('email',contact.email)
    formdata.append('message',contact.message)
    
    alert("Please wait untill you receive a successfull message")

    this.service.send(formdata).subscribe((res)=>{
     
        this.name =""
        this.email =""
        this.message =""
        this.file =""
      
      alert(res)
    })
   
    
    

    console.log(contact)
  }

}
