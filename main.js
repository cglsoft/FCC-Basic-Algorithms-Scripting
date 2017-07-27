var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
var i = 0;

while (i < contacts.length) {
  if (contacts[i].firstName === firstName){
    if ( typeof contacts[i][prop] != "undefined"  ) {
       result = contacts[i][prop]; 
       break;
    }  else {
       result =  "No such property";
       break;
       } 
  } else {
    result =  "No such contact";
  }
  i++;
}

 console.log(result);
 return result;

// Only change code above this line
}
// lookUpProfile("Akira", "likes");
// lookUpProfile("Bob", "number");
// lookUpProfile("Akira", "address");
// "Bob", "number" should return "No such contact"
// "Akira", "address" should return "No such property"


function factorialize(num) {
 if (num === 0) { return 1; }
   console.log("2x :" + num);
  return ( num * factorialize(num-1));
}

// factorialize(5);

function showName(num){
    if (num===0){
        return 1;
    }
    console.log(num);
    return ( num + showName(num - 1));
}

// showName(30);



function palindrome(str) {
    var alphaLower = str.replace(/[^0-9A-Z]+/gi,"").toLowerCase();
    var inverter   = alphaLower.split('').reverse().join('');
    
    if (alphaLower !== inverter) {
        console.log('False :' + inverter);
        return false;
    }
    console.log(alphaLower);
  return true;
}



// palindrome("Eye_23   4234_#_2");
// palindrome("Eye");
// palindrome("_eye")


function findLongestWord(str) {
  var news = str.split(' ');
  var newsArr = [];
 
  for ( var i = 0; i < news.length; i++){
      newsArr.push(news[i].length);   
      console.log(newsArr[i]);
  }

  arrLen = newsArr.sort( (a,b)=> a-b );
  console.log(arrLen);
  console.log(arrLen[news.length-1]);
  return arrLen[news.length-1];
}

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //19


function titleCase(str) {
    var newStr = str.split(" ").map( function( currentValue,  index, array){
    var newsUpperLetter = currentValue.substring(0,1).toUpperCase() + currentValue.substring(1).toLowerCase(); 
      console.log(newsUpperLetter);
      return newsUpperLetter;
  });
  console.log(newStr.join(" "));
  return newStr.join(" ");
}

// titleCase("I'm a little tea pot");


function largestOfFour(arr) {
    var newArr = [];
    var newArrGreat = [];

    arr.forEach(function(currentValue,index, array) {
        newArr.push([currentValue.sort( (a,b)=> b-a )]);

        newArrGreat.push(newArr[index][0][0]);

        console.log('Aqui : ' + newArr[index][0][0]);
        console.log(currentValue + ' - ' + index );
        
    }, this);

  console.log(this);
  console.log(newArrGreat);
  // You can do this!
  return newArrGreat;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor4

     console.log( str + ': ' + target + ' - ' +  str.substr(str.length - target.length));
     console.log( str.length );
     console.log( target.length);

     console.log( "Claudio Gervasio".substr(7) + 'CLAUDIO GERVASIO');

     console.log( target === str.substr(str.length - target.length));
     return target === str.substr(str.length - target.length);
 
}

// confirmEnding("Bastian", "n"); // should return true.
// confirmEnding("Connor", "n"); // should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");  //should return false.
// confirmEnding("He has to give me a new name", "name"); // should return true.
// confirmEnding("Open sesame", "same"); // should return true.
// confirmEnding("Open sesame", "pen"); // should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // should return false.


function repeatStringNumTimes(str, num) {
   // repeat after me
  return ( num > 0 ) ? str.repeat(num) : "";
}

// repeatStringNumTimes("*", 3); // should return "***"
// repeatStringNumTimes("abc", 3);
// repeatStringNumTimes("abc", -2); // should return "".



function truncateString(str, num) {
  // Clear out that junk in your trunk
 // Another way 1  
 console.log( str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str );
 

 // Another way 2
 if (str.length <= num) {
     console.log(str);
    return str;
  } else {
      console.log(str.slice(0, num > 3 ? num - 3 : num) + '...');
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }

  
}

// truncateString("A-tisket a-tasket A green and yellow basket", 11);
// truncateString("Peter Piper picked a peck of pickled peppers", 14);
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
// truncateString("A-", 1);
// truncateString("Absolutely Longer", 2);



function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tempArr = [];
  var sliced;

  for (var i = 0; i < arr.length; i += size ){
      sliced = arr.slice(i,i+size);
      tempArr.push(sliced);
      console.log( 's: ' + sliced);
      console.log( 'a: ' + tempArr);
  }
  console.log(tempArr);


  return tempArr;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


function slasher(arr, howMany) {
     // it doesn't always pay to be first
    var tempArr = [];
  
    tempArr = arr.slice(howMany);
    console.log(tempArr);


  return tempArr;
}

// slasher([1, 2, 3], 2); // should return [3].
// slasher([1, 2, 3], 0); //  should return [1, 2, 3].
// slasher([1, 2, 3], 9); // should return [].
// slasher([1, 2, 3], 4); // should return [].
// slasher(["burgers", "fries", "shake"], 1); // should return ["fries", "shake"].
// slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // should return ["cheese", 4].


function mutation(arr) {
 var result =  arr[1].split("").every( (element, index, array ) => {
     if ( arr[0].toUpperCase().indexOf(element.toUpperCase(),0)  < 0 ) {
          return false;
      } else { 
          return true;
      }
  } );
  console.log( 'Teste : '+ result );
  return result;
}

/*mutation(["hello", "hey"]); // should return false.
mutation(["hello", "Hello"]); // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
mutation(["Mary", "Army"]); // should return true.
mutation(["Mary", "Aarmy"]); // should return true.
mutation(["Alien", "line"]); // should return true.
mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // should return false.
mutation(["voodoo", "no"]); // should return false.
*/


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter( (element, index, array ) => {
      console.log( element + '-' + Boolean(element));
      return( Boolean(element));

  });
}

//bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
// bouncer(["a", "b", "c"]); // should return ["a", "b", "c"].
//bouncer([false, null, 0, NaN, undefined, ""]); // should return [].
//bouncer([1, null, NaN, 2, undefined]); // should return [1, 2].

function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments).slice(1);

  var arrFiltro = arr.filter((element)=>{

      return args.every( (everyElement) =>{
          return element != everyElement;
      });
    }
  );
   console.log( arrFiltro );
  return arrFiltro;
}

/*destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"]. */



function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
    let ord = arr.sort( (a,b) => a-b).
        findIndex( (element ) => ( element >= num ) );

    console.log(( ord === -1 ) ? arr.length : ord);
    return ( ord === -1 ) ? arr.length : ord;
} 

// getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2.
// getIndexToIns([40, 60], 50); // should return 1.
//  getIndexToIns([3, 10, 5], 3); // should return 0.
//  getIndexToIns([5, 3, 20, 3], 5); // should return 2.
// getIndexToIns([2, 20, 10], 19); // should return 2.
 // getIndexToIns([2, 5, 10], 15); // should return 3

/* Referência :
 https://en.wikipedia.org/wiki/ROT13

*/

function rot13(str) { // LBH QVQ VG!
  
  let strNew = str.split("").map( (element ) => 
       String.fromCharCode(                              
                            ( element.charCodeAt() >= 65 &&  element.charCodeAt() <= 77 ) ? element.charCodeAt() + 13 : 
                            ( element.charCodeAt() >= 78 &&  element.charCodeAt() <= 90 ) ? element.charCodeAt() - 13 : element.charCodeAt()
                             ) ).join("");
  
  console.log(strNew);
 
  return strNew;
}


// abcdefghijklmnopqrstuvwxyz
// NOPQRSTUVWXYZABCDEFGHIJKLM


// Change the inputs below to test
rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

