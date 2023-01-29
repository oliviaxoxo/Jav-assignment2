Age = prompt("Enter an age less than 90:");

function LifeInWeeks(age){
    if (age > 90) {
       alert("The age you entered is higher than 90, please try again.");
    } else{
        let years = 90 - age;
        let months = years * 12;
        let weeks = months * 4;
        let days = years * 365;
        alert(`You have ${days} days, ${weeks} weeks and, ${months} months left till you are 90`)
    }
}
LifeInWeeks(Age);