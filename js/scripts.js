$(document).ready(function(){
  $("form").submit(function(event) {
    var inputs = $("input#word").val().split("");
    var reverseInputs = inputs.slice().reverse();

    var counter = 0;
    for (var i = 0; i < inputs.length; i += 1) {
      if (inputs[i] === reverseInputs[i]) {
        counter += 1;
      }
    }
    if (counter === inputs.length) {
        alert("this is a palindrome!");
      } else {
        alert("this is NOT a palindrome!");
      }
    event.preventDefault;
  });

});




//
// reverseInputs.join("");
// if (reverseString == stringInput) {
//
//   console.log(reverseString);



//     event.preventDefault();
//     var vowells =["a","e","i","o","u"];
//     var letters = $("input#sentence").val().split("");
//     debugger;
//     for (var i = 0; i < 5; i += 1) {
//       for (var il = 0; il < letters.length; il += 1) {
//         if (vowells[i] === letters[il]) {
//           letters.splice(il, 1, "-");
//         }
//       };
//     };
//     var results = letters.join("");
//     $("#result").text(results);
//   });
// });
