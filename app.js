 $("#addTodo").click(function () {
   const inputTodo = $("input").val();
   $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
   $("input").val("");
 });

 $(document).on("change","input[type=checkbox]",function(){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration","line-through");
        $(this).parent().css("color","#ccc");
    }else{
        $(this).parent().css("text-decoration","none");
        $(this).parent().css("color","#000000");
    }
 });

// document.getElementById("addTodo").onclick=function(){
//     const inputTodo =document.querySelector("input").value;

//     document.getElementById("todoList").insertAdjacentHTML("beforeend","<li><input type='checkbox'>" + inputTodo + "</li>");
//     document.querySelector("input").value="";
// }
