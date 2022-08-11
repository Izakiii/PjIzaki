$(document).ready(function(){
	
  $(window).scroll(function(){
  	let xyz = $(this).scrollTop();
  		// console.log(xyz)

  		if(xyz >= 300){
  	   $(".navbar").addClass("navjs");
  }else{
     $(".navbar").removeClass("navjs")
  }
  });

  $(".propertieslists").click(function(){
   //console.log("hello mello");

   $(this).addClass("activeitems");
   $(this).siblings().removeClass("activeitems");


   let getvalue = $(this).attr("data-filter");
   
   if(getvalue === "all"){
      $(".filters").show("slide",1000);
   }else{
      $(".filters").hide('slide',500);
      $(".filters").not("."+getvalue).hide("slide",1000);
      $(".filters").filter("."+getvalue).show("slide",1000);
   }
  })

  lightbox.option({
      'resizeDuration': 400,
      'wrapAround': true,
      'maxWidth': 500
    })
  // $(".heart").dblclick(function(){
  //  $(".heart").css({
  //     "background-color":"red",
  //     "transform":"rotate(0deg)",

   // }) 
   // })

 
})
