










const text = 'pimpek'

const vowels = ['a', 'e', 'i', 'o', 'u','y']


let vowelsCount = 0
let consonantsCount = 0
const vovelsArray = []
const consonantsArray = []
const array = []

const vowelsCounter = text => {
	for (const letter of text) {
		const numberOfLetters = vowels.includes(letter) ? vowelsCount++ : consonantsCount++
		const pushLetters = vowels.includes(letter) ? vovelsArray.push(letter) : consonantsArray.push(letter)
	}
	console.log(`Numbers of vowels =  ${vowelsCount} || ${vovelsArray.join(',')}`)
	console.log(`Numbers of consonants = ${consonantsCount} || ${consonantsArray.join(',')}`)

	switch (vowelsCount) {
		case 1:
			return text
		case 2:
			case 2:
			for (const letter of text) {
				if (vowels.includes(letter)) {
						return `${text.slice(0, text.indexOf(letter) + 2)}|${text.slice(text.indexOf(letter) + 2)}`
					}
				}
			}
	}
	

console.log(vowelsCounter(text))

