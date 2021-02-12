function formattedPhone(phone) {

	let format = 'xx (xxx) xxx-xx-xx'
	let i = 0

	if (phone.length < 10 || phone.length > 12) {
		return 'invalid phone number'
	}

	if (phone.length === 10) {
		format = '+7 (xxx) xxx-xx-xx'
	}

	if (phone.length === 11 && phone[0] == 8) {
		format = '+7 (xxx) xxx-xx-xx'
		i = 1
	}


	for (i; i < phone.length; i++) {
		format = format.replace('x', phone[i])
	}

	return format

}

// simple tests
console.log(formattedPhone('81234567890'))
console.log(formattedPhone('+71234567890'))
console.log(formattedPhone('1234567890'))
console.log(formattedPhone('not a phone number'))