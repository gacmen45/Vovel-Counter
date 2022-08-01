const text = 'bread'

const vowels = ['a', 'e', 'i', 'o', 'u']
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'v', 'x', 'y', 'z']

let vowelsCount = 0
let consonantsCount = 0
const vovelsArray = []
const consonantsArray = []

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
			for (const letter of text) {
				const firstSyllab = text.slice(0, text.indexOf(letter) + 2)
				const secondSyllab = text.slice(text.indexOf(letter) + 2)
				if (vowels.includes(letter)) {
					return `${firstSyllab}|${secondSyllab}`
				}
			}
	}
}

console.log(vowelsCounter(text))

// text.indexOf(letter)+1
