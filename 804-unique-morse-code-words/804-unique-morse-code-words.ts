function uniqueMorseRepresentations(words: string[]): number {
 const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 let transformations: string[] = [], uniqueWords: string[] = []
 
 words.forEach((word, index) => {
     let morseWord;
     for(let i=0; i<word.length; i++){
         morseWord = morseWord ? morseWord+morseCodes[getCharacterNumber(word[i])] : morseCodes[getCharacterNumber(word[i])]
     }
     
     if(!uniqueWords.includes(morseWord)) {
         uniqueWords.push(morseWord)
     }
 })
 
 return uniqueWords.length
}

function getCharacterNumber(char: string){
    char = char.toLowerCase()
    return char.charCodeAt(0) - 97
}