$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    var question1 = [];
    var question2 = [];
    var question3 = [];

    $("input:checkbox[name=warning]:checked").each(function(){
      question1.push($(this).val());
    });
    alert(question1);
  $("input:checkbox[name=symptoms]:checked").each(function(){
     question2.push($(this).val());
    });
    // alert(question2)
  //   $('#stress-test').hide();
  // });
  // $("#very-stressed").show();
$("input:checkbox[name=coping]:checked").each(function(){
  question3.push($(this).val());

});



//   //   var count = 0;
//   //   for (var i=0; i<inputElems.length; i++) {
//   //   if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
//   //  count++;
//   //  alert(count);
// $("#not-stressed").show();
//   }
//     alert(signs)
//     $('#work-responses').append(workTransportationMode + "<br>");
//   });
//   $("#handle").show();
//   $('#fun-responses').append(funTransportationMode + "<br>");
// });
  // $('#very-stressed').append(funTransportationMode + "<br>");
