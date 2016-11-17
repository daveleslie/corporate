/**
 * Created by David on 2016/09/29.
 */
// JQuery(document).ready(function() {
//     JQuery('.ani').addClass("hidden").viewportChecker({
//         classToAdd: 'visible animated fadeIn',
//         offset: 100
//     });
// });


function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

$(document).ready(function () {
   $(".services-logo").hide().each(function() {
       $(".s1").delay(1000).fadeIn(1000);
       $(".s2").delay(1200).fadeIn(1000);
       $(".s3").delay(1400).fadeIn(1000);
       $(".s4").delay(1600).fadeIn(1000);
   });
//    $('ani').addClass("hidden-ani").viewportChecker({
//        classToAdd: 'visible-ani animated fadeIn',
//        offset: 100
//    });
});






