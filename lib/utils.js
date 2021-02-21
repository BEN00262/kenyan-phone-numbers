const formatPhoneNumber = (phoneNumber) => {
	if (/^(\+254)[17]\d{8}$/.test(phoneNumber)){
		return phoneNumber;
	}else if (/^(0)[17]\d{8}$/.test(phoneNumber)){
		return `+254${phoneNumber.substring(1, phoneNumber.length)}`
	}
	throw new Error("Invalid Kenyan Phone Number");
}

module.exports = formatPhoneNumber;