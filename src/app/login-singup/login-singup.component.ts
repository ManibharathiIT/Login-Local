import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrls: ['./login-singup.component.css']
})
export class LoginSingupComponent implements OnInit{
  signUpObj:any[]=[];

  obj:any={
    userName:'',
    email:'',
    password:'',
  }   
localData:any;
localObj:any;

  loginObj:any={
    email:'',
    password:''
  }

      constructor(){
      }
      ngOnInit(): void {
        this.localData=localStorage.getItem('signUpObj')
        if(this.signUpObj!=null){
          this.localObj=JSON.parse(this.localData);
        }
      }

      signUp(){
        if(this.signUpObj.length==-1){
         this.signUpObj.push(this.obj);
         localStorage.setItem("signUpObj",JSON.stringify(this.signUpObj))
        }
        else{
          for(let i=0;i<=this.signUpObj.length;i++){
            if(this.signUpObj[i].email!=this.obj.email && this.signUpObj[i].password!=this.obj.password){
              this.signUpObj.push(this.obj);
              localStorage.setItem("signUpObj",JSON.stringify(this.signUpObj))
            }
          }
        }
    }
  

      login(){
        for(let i=0;i<this.signUpObj.length;i++){
        if(this.loginObj.email===this.signUpObj[i].email && this.loginObj.password===this.signUpObj[i].password){
          alert("login Successfully");
        }
        else{
          alert("wrong credentials");
        }
      }
    }
}
