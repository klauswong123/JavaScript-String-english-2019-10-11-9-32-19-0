// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
alert(name.toUpperCase())

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function capitalizeTheFirstLetterOfEachWord(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
}
alert(capitalizeTheFirstLetterOfEachWord(sentence))


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var numb = money.match(/\d/g);
numb = numb.join("");
alert(numb)
