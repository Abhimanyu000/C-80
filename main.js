var namearray = [];

function submit() {
    var displaystudent = [];
    
    for (var j = 1; j <= 4; j++) {
         var nameofstudent = document.getElementById("name_of_the_student_"+j).value;
         console.log(nameofstudent);
         namearray.push(nameofstudent);
    }

    console.log(namearray);

    var arraylength = namearray.length;

    console.log(arraylength);


    for (var k = 0; k < arraylength; k++) {
        displaystudent.push("<h4>Name - "+namearray[k]+"</h4>");

        console.log(displaystudent);
    }
    console.log(displaystudent);

    document.getElementById("display_name_with_commas").innerHTML=displaystudent;

    var less = displaystudent.join("");

    console.log(less);

    document.getElementById("display_name_without_commas").innerHTML=less;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";
};

function sorting() {
    namearray.sort();

    console.log(namearray);

    displaystudentsort = [];

    var arraylength = namearray.length;

    console.log(arraylength);

    for (var k = 0; k < arraylength; k++) {
        displaystudentsort.push("<h4>Name - "+namearray[k]+"</h4>");

        console.log(displaystudentsort);
    }
    console.log(displaystudentsort);

    var less = displaystudentsort.join(" ");

    console.log(less);

    document.getElementById("display_name_without_commas").innerHTML=less;
};