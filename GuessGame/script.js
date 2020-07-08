//var task=["take out garbage","read a book","write javascript","go to work","dancing"];
/*var progress=["done","in progress","to do"];
var question1=prompt("which task 1-"+task.length+"?");
var question2=prompt("status 1=done 2=in progress 3=to do");
console.log("today you will"+" "+task[question1-1]+" "+"status of task="+progress[question2-1]);
*/
/*task[3]="value"
console.log(task[3])*/
var animals=["cat","dog","lion","goat","cow"];
var randomIndex=Math.floor(Math.random()*animals.length);
var randomAnimal=animals[randomIndex];
var message=prompt("The index value is"+" "+randomAnimal);
var response=(message==randomIndex?'Correct':'Wrong It was'+" "+randomIndex);
alert(response);
                