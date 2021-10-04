import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc2';
  firstNumber = 0;
  secondNumber = 0;
  result = "";

  onCalc(value: string){

    switch(value) {
      case '+':
        this.result= (this.firstNumber+this.secondNumber).toString();
          break;
      case '-':
        this.result= (this.firstNumber-this.secondNumber).toString();
          break;
      case 'x':
        this.result= (this.firstNumber*this.secondNumber).toString();
          break;
      case '/':
        this.result= (this.firstNumber/this.secondNumber).toString();
          break;
      default:
          alert("Invalid");
           break;
  }
}

}
