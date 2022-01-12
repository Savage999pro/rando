//we are creating an empty array to store the name of the students
display_names_array=[];
function submit(){
//we will create four variables to pick up the values of the text inputs
name1= document.getElementById("student1").value;
name2= document.getElementById("student2").value;
name3= document.getElementById("student3").value;
name4= document.getElementById("student4").value;

//we will push the variables into the array one by one
display_names_array.push(name1);
display_names_array.push(name2);
display_names_array.push(name3);
display_names_array.push(name4);
console.log(display_names_array)

// we will show the array on the div id created
document.getElementById("listlabel").innerHTML=display_names_array;
document.getElementById("sortingpoop").style.display="inline-block";
document.getElementById("submitingoreos").style.display="none"

}
function sorting() {
     display_names_array.sort();
      console.log(display_names_array);
       document.getElementById("listlabel").innerHTML = display_names_array; }