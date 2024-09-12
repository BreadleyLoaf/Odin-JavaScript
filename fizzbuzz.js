function fizzbuzz(){
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    if (answer == 0){
        console.log(`ok`);
    }
    for (let i = 0; i < answer; i++){
        let print = "";
        if((i % 3) == 0){
            print += "fizz";
        }
        if((i & 5 ==0)){
            print += "buzz";
        }
        if (print === ""){
            print = i;
        }
        console.log(print);
    }
}

fizzbuzz;