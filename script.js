const text = 'Azerbejdżan'

const vowels = ['a', 'e', 'i', 'o', 'u']
let count = 0

const vowelsCounter = text => {
	

	for (const letter of text.toLowerCase()){
        if(vowels.includes(letter)){
            count++
            console.log(letter);
            console.log(count);
        }
    }
}
console.log(vowelsCounter(text))
