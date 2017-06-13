import { Component, Input } from '@angular/core';

import { Cheque } from './cheque';

@Component({
  selector: 'cheque-detail',
  templateUrl: './cheque-detail.component.html'
})

export class ChequeDetailComponent {
  @Input() cheque: Cheque;

public thousands = ['','thousand','million', 'billion','trillion'];
public digits = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
public tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
public twenties = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

getAmountInWords(amt: string){
  amt = amt.toString();
  let dollarAmt: string;
  let centAmt: string;

  var numArr = amt.split(".", 2);

  dollarAmt = numArr[0];
  centAmt = numArr[1];

  let dollarWords: string = this.toWords(dollarAmt);
  let centWords: string = this.toWords(centAmt);

  let result = (dollarWords + ' dollars and ' +centWords + ' cents');
  return result.toUpperCase();
}

toWords(num: string) {
    num = num.toString();
    var numLength = num.length;
    if (numLength > 15)
        return 'too big';
    var digitArr = num.split(''); 
    console.log(digitArr);
    var inWords = '';
    var flag = 0;
    for (var i=0;  i < numLength;  i++) {
        if ((numLength-i)%3==2) { 
            if (digitArr[i] == '1') {
                inWords += this.tens[Number(digitArr[i+1])] + ' ';
                i++;
                flag=1;
            } else if (digitArr[i] !== '0') {
                inWords += this.twenties[Number(digitArr[i])-2] + ' ';
                flag=1;
            }
        } else if (digitArr[i] !== '0') {
            inWords += this.digits[digitArr[i]] +' ';
            if ((numLength-i)%3==0) inWords += 'hundred ';
            flag=1;
        }

        if ((numLength-i)%3==1) {
            if (flag)
                inWords += this.thousands[(numLength-i-1)/3] + ' ';
            flag=0;
        }
    }

    return inWords;
}

}