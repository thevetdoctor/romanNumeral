  const convert = document.getElementById("btn");
  const result = document.getElementById("result");
  const numb = document.getElementById("number");
  const regexAlph = /[mdclxvi]/i;
  const regexNum = /[0-9]/;

  let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let a = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];


  const formula = (b) => {
let box = [];

              for(let i = 0; i < b.length; i++){

                if(i == (b.length - 1) && b[i] == 'I') {
                  box.push('I');
                  break;
                }

                if(b[i+1] !== undefined) {

                  if(a.indexOf(b[i]) > a.indexOf(b[i+1])) {

                      box.push(b[i]+b[i+1]);

                      i++;

                      continue;
                    }
                }
                    box.push(b[i]);
              }
              console.log(box)
              return box;
          }


  const convertToRoman = (num) => {
                result.style.display = 'block';
                // Derive the value of input from the input element
                      num = numb.value;
                      console.log(num);

                // Validate that input is not empty
                      if(num == '') {
                        result.innerHTML = '<h3>Please enter a number or roman numeral!</h3>';
                        return;
                      }

                // Validate that input is either a valid number or roman numeral
                  if(regexAlph.test(num) || regexNum.test(num)){

                        // Check if input is a valid number
                        if(regexNum.test(num)) {
                          console.log(regexNum.test(num))

                          // Check if number is pure
                          if(!isNaN(num)) {

                            if(Number(num) > 13000) {
                               result.innerHTML = "<h3>Number higher than set limit</h3>";
                               return;
                            }

                            let roman = "";

                            for (var i = 0; i < numbers.length; i++) {
                              while(num >= numbers[i]) {
                                roman += numerals[i];
                                num -= numbers[i];
                              }
                            }

                            // Display result
                            console.log(roman);
                            result.innerHTML = "<h3>" + roman + "</h3>";

                          } else {

                            // check if input is a valid number

                            result.innerHTML = "<h3>Please check your input - invalid</h3>";
                          }


                        } else {

                            // check if input is a valid roman numeral
                          console.log(regexAlph.test(num))

                            num = num.toUpperCase();

                            console.log(num);

                                  let val = 0;

                                 console.log(formula(num))

                                 let numberEquiv = (formula(num)).map(x => numbers[numerals.indexOf(x)]);
                                  console.log(numberEquiv);

                                  for(i = 0; i < numberEquiv.length; i++) {
                                   if(numberEquiv[i] < numberEquiv[i+1]) {
                                   result.innerHTML = "<h3>Please check your input - invalid</h3>";
                                    return;
                                   }

                                   let specialArray = [500, 50 , 5];

                                   if( (specialArray.includes(numberEquiv[i]) ) && (numberEquiv[i] === numberEquiv[i+1]) ) {
                                    result.innerHTML = "<h3>Please check your input - invalid ( D, L, V can't follow each other) </h3>";
                                    return;
                                   }

                                   if(specialArray.includes(undefined)) {
                                    result.innerHTML = "<h3>Please check your input - invalid </h3>";
                                    return;
                                   }

                                  }

                                  let sum = numberEquiv.reduce((a, b) => a + b)

                                  console.log(sum);

                                  val += sum;

                                   if(isNaN(val)) {
                                    result.innerHTML = "<h3>Please check your input - invalid </h3>";
                                    return;
                                   }


                            result.innerHTML = `<h3> ${val} </h3>`;

            ///////////////////////////////////////////////////////////////////////////////////////
                          for(let i = 0; i < num.length; i++){
                            if(regexAlph.test(num[i])) {

                          } else {
                            // Invalid roman numeral
                              result.innerHTML = "<h3>Invalid character present</h3>";
                            }

                          }

           ////////////////////////////////////////////////////////////////////////////////////////
                        }

                  } else {
                              // if input is neither valid number or roman numeral

                                  result.innerHTML = `<h3>Please enter a valid number or roman numeral</h3>`;
                  }
                              // End of conversion
             }

// Make use of event listeners to call the function with the required parameters


    convert.style.backgroundColor = '#361';
    convert.addEventListener('click', (num) => convertToRoman(num));
    numb.addEventListener('change', (num) => convertToRoman(num));

    const para = document.querySelector('.left');
    const timeIn = () => {
    let period = new Date().toLocaleTimeString();
    para.innerHTML = '<h1>' + period + '</h1>';
      };

    setInterval(timeIn, 1000);
