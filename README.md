#### Have you ever wanted to verify that a mobile number belongs to a given mobile carrier in your system ??

#### This is a simple module which includes functionalities such as -->  getting mobile phone number operator, check validity of the phone number and also check against a desired mobile phone operator e.g SAFARICOM, TELKOM, AIRTEL, EQUITEL e.t.c

#### NOTE: only applicable in Kenya

#### can be used along anything e.g. expressjs, koajs e.t.c

```javascript
const { isOperator,getOperator,isValidKenyanNumber, operators } = require('kenyan-phone-numbers');

// checking if the number falls under the given operator
isOperator("+254771245240",operators.SAFARICOM)
	.then(({ status, error }) => {
		if (status){
			console.log("Valid safaricom number");
		}else{
			console.log(error);
		}
	})
	.catch(console.log)

// getting the operator
getOperator("+254771245240")
	.then(({ status, operator, error }) => {
		if (status){
			console.log(operator);
		}else{
			console.log(error);
		}
	})
	.catch(console.log)

// checking if its a valid Kenyan Mobile Phone Number
isValidKenyanNumber("+254771245240")
	.then(({ status, error }) => {
		if (status){
			console.log("Valid Phone Number");
		}else{
			console.log(error);
		}
	})
	.catch(console.log)

```