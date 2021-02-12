const analBtn = document.getElementById('analyze')
const firstStr = document.getElementById('formGroupExampleInput')
const secondStr = document.getElementById('formGroupExampleInput2')
const character = document.getElementById('formGroupExampleInput3')
const results = document.getElementById('results')



analBtn.addEventListener('click', (e) => {
	e.preventDefault()

	let str1 = firstStr.value
	let str2 = secondStr.value
	let char = character.value

	if(str1 === '' || str2 === '' || char === '') {
		showErrorMessage()
		return
	}
	
	let result = getRow(str1, str2, char)

	const output = `
	<div class="alert alert-success" role="alert">
				Analized successfully! ${result}
	</div>
	`

	results.innerHTML = output

	setInterval(() => results.innerHTML = '', 5000)

	const progressLeft = document.getElementById('progress-left')
	const progressRight = document.getElementById('progress-right')

	const str1Len = str1.split(char).length - 1
	const str2Len = str2.split(char).length - 1


	progressLeft.style.width = `${calculateRatio(str1Len, str2Len)[0]}%`
	progressRight.style.width = `${calculateRatio(str1Len, str2Len)[1]}%`

})


// utility functions
function getRow(first, second, character) {
	const foundInFirst = first.split(character).length - 1
	const foundInSecond = second.split(character).length - 1

	if (foundInFirst === foundInSecond) return 'Your strings contain equal amount of choosen character'

	if (foundInFirst > foundInSecond) return `String '${first}' contains more choosen characters`
	if (foundInFirst < foundInSecond) return `String '${second}' contains more choosen characters`
}

function showErrorMessage() {
	const alertOutput = `
		<div class="alert alert-danger" role="alert">
			Please fill in all required entry fields
		</div>
	`

	const alertContainer = document.getElementById('alert')
	alertContainer.innerHTML = alertOutput

	setInterval(() => alertContainer.innerHTML = '', 3000)
}


function calculateRatio(n1, n2) {
  return [
    n1 / ((n1 + n2) / 100),
    n2 / ((n1 + n2) / 100)
  ]
}




