// $("#addTodo").click(function () {
//   const inputTodo = $("input").val();
//   $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
//   $("input").val("");
// });

document.getElementById("addTodo").onclick=function(){
    const inputTodo =document.querySelector("input").value;

    document.getElementById("todoList").insertAdjacentHTML("beforeend","<li><input type='checkbox'>" + inputTodo + "</li>");
    document.querySelector("input").value="";
}
