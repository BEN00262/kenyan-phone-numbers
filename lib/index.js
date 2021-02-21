const axios = require("axios");
const formatPhoneNumber = require("./utils.js");

axios.defaults.baseURL = "https://tranquil-harbor-36904.herokuapp.com";

const isValidKenyanNumber = (phoneNumber) => new Promise(async (resolve,reject) => {
	try{
		let results = await axios.get(`/is-valid-kenya-number/${formatPhoneNumber(phoneNumber)}`);
		resolve(results.data);
	}catch(error){
		reject(error);
	}
})

const getOperator = (phoneNumber) => new Promise(async (resolve,reject) => {
	try{
		let results = await axios.get(`/get-operator/${formatPhoneNumber(phoneNumber)}`);
		resolve(results.data);
	}catch(error){
		reject(error);
	}
})

const isOperator = (phonenumber,expectedOperator) => new Promise(async (resolve,reject) => {
	try{
		let results = await axios.get(`/check-phone-number-operator`,{
			params:{
				phonenumber: formatPhoneNumber(phonenumber),
				operator: expectedOperator
			}
		});
		resolve(results.data);
	}catch(error){
		reject(error);
	}
})

module.exports = {
	isValidKenyanNumber,
	getOperator,
	isOperator
}