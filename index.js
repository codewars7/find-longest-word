let findLongestWordLength = (str) => {
  let newStr = str.split(' ')
  let longestWord = 0;
  for(let word of newStr) {
    if (word.length > longestWord) {
      longestWord = word.length
    }
  }
  console.log('the number of the longest word is ' + longestWord)
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
