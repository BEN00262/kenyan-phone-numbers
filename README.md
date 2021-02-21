#### Have you ever wanted to verify that a mobile number belongs to a given mobile carrier in your system ??

#### This is a simple module which includes functionalities such as -->  getting mobile phone number operator, check validity of the phone number and also check against a desired mobile phone operator e.g SAFARICOM, TELKOM, AIRTEL, EQUITEL e.t.c

#### NOTE: only applicable in Kenya

#### can be used along anything e.g. expressjs, koajs e.t.c

```javascript
// supported operators include
SAFARICOM
TELKOM
AIRTEL 
SEMA_MOBILE
EQUITEL
EFERIO 
FAIBA_4G
HOMELANDS_MEDIA
```
```javascript
isOperator("< phone number formatted into +254???? >",operator) => Promise
getOperator("< phone number formatted into +254???? >") => Promise
isValidKenyanNumber("< phone number formatted into +254???? >") => Promise

// for examples continue reading
```

```javascript
const { isOperator,getOperator,isValidKenyanNumber, operators } = require('kenyan-phone-numbers');

// checking if the number falls under the given operator
isOperator("+254771235260",operators.TELKOM)
	.then(({ status, error }) => {
		if (status){
			console.log("Valid safaricom number");
		}else{
			console.log(error);
		}
	})
	.catch(console.log)

// getting the operator
getOperator("+254771235260")
	.then(({ status, operator, error }) => {
		if (status){
			console.log(operator);
		}else{
			console.log(error);
		}
	})
	.catch(console.log)

// checking if its a valid Kenyan Mobile Phone Number
isValidKenyanNumber("+254771235260")
	.then(({ status, error }) => {
		if (status){
			console.log("Valid Phone Number");
		}else{
			console.log(error);
		}
	})
	.catch(console.log)

```