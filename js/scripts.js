$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let input1 = $("#Input1").val();
    let input2 = $("#Input2").val();
    let input3 = $("#Input3").val();
    let input4 = $("#Input4").val();
    alert(input1 + input2 + input3 + input4);
  });

});