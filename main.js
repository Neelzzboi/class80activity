var name_of_the_student = [];
function submit(){
  
    for (var x = 1; x <= 4; x++){
        var name = document.getElementById("name_of_the_student_"+x).value;
        console.log(name);
        name_of_the_student.push(name);
    }
        console.log(name_of_the_student);
        document.getElementById("display_name_with_commas").innerHTML = name_of_the_student;

        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";
    
}

function sorting(){
    name_of_the_student.sort();
    console.log(name_of_the_student);
    document.getElementById("display_name_without_commas").innerHTML = name_of_the_student;
}


