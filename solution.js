function LongestWord(sen) { 

  // turn words to array and split on empty space
  let array = sen.split(" ");

  // clean array to push words to that have been stripped of special chars
  let clean_array = [];


  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
  // loop through array and try to find
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    
    // check to see if any special chars exist within the word
    if (specialChar.test(word)) {

      // if special chars exist then remove it from the word
      word = word.replace(/[^a-zA-Z ]/g, "");
    }
     clean_array.push(word);
  }

  let longWord = "";

  // loop through new array and check for longest length and the word
  for (let i = 0; i < clean_array.length; i++) {  

    if (clean_array[i].length > longWord.length) {
      longWord = clean_array[i];
    }

  }



  return longWord; 

}
   
// keep this function call here 
console.log(LongestWord("Hello world123 567"));
