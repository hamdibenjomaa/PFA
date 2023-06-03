import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r:Router) { }
  
  ngOnInit(): void {
  }

  tr=false;
  async connect()
  {
  var email = (<HTMLInputElement>document.getElementById("email")).value 
 var pw = (<HTMLInputElement>document.getElementById("pw")).value
var body = {"email":email,"pw":pw}
const endpoint = 'http://127.0.0.1:8000/signin';
fetch(endpoint, {
method: 'POST',
body: JSON.stringify(body)
})
.then((resp) => resp.json())
.then((response) => {
  let js = JSON.parse(response)
if (js[0][0] == 'chef de projet'){
  this.r.navigate(['/Reclamations'])
}else if (js[0][0] == 'intervenant'){
  this.r.navigate(['/TraiterReclamation'])
}else{
  this.tr=true;
}
}).catch( (error)=> console.log(error))
if(this.tr==true){
  const endpoint = 'http://127.0.0.1:8000/signin_client';
  fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(body)
    })
    .then((resp) => resp.json())
    .then((response) => {
      let js = JSON.parse(response)
      //if (js[0][0] != null){
        this.r.navigate(['/EnvoyerReclamation'])
      //}
    })
}
  }
}
