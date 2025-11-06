function calculateGrade(marks){
    let sum = 0;
    for (let i = 0; i < marks.length; i++){
        sum = sum + marks[i];
    }
    let average = sum / marks.length;
    if (average >= 90 && average <= 100){
        console.log("The Grade is A and the average marks is : " + average);
    }
    else if(average >= 80 && average < 90){
        console.log("The Grade is B and the average marks is : " + average);
    }
    else if(average >= 70 && average <80){
        console.log("The Grade is C and the average marks is : " + average);
    }
    else if(average >= 60 && average <70){
        console.log("The Grade is D and the average marks is : " + average);
    }
    else if(average <= 60 && average >= 0){
        console.log("The Grade is F and the average marks is : " + average);
    }
    else{
        console.log("You have entered the invalid marks");
    }
}


calculateGrade([23,44,55,34,77]);
calculateGrade([55,77,86,99,10]);
calculateGrade([1000,3000,4000,5000]);
