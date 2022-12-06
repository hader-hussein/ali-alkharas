const currentabout = location.href; 
const menuitemabout = document.querySelectorAll('.navber-index .nav-item .nav-link');
 const menulengthabout = menuitemabout.length
for (let j = 0; j<menulengthabout; j++){
 if(menuitemabout[j].href === currentabout) {
  menuitemabout[j].className = "active" 
    }
}
///
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
///////////
////file////
updateList = function() {
  var input = document.getElementById('file');
  var output = document.getElementById('fileList');
  var children = "";
  for (var i = 0; i < input.files.length; ++i) {
      children +=  '<li>'+ input.files.item(i).name + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
  }
  output.innerHTML = children;
}

 ///
 $('.content-slider-articles .owl-carousel').owlCarousel({
  autoplay:false,
autoplayTimeout:5000,
autoplayHoverPause:false,
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
  
});
/////
$('.owl-carousel').owlCarousel({
  autoplay:false,
autoplayTimeout:5000,
autoplayHoverPause:false,
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
  
});
$( ".owl-prev").html("<img src='./assets/img/Icon-left-r.png'>");
 $( ".owl-next").html("<img src='./assets/img/arrow-right.png'>");
 /***/

 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
 
  var element = document.getElementById("myDIV");
   element.classList.toggle("show");
   document.getElementById("myDropdown").classList.toggle("show");
   
//   if( element.classList.contains("show"))
//   {
// alert("hadeeer");
//     element.classList.remove("show");
//   }


}
/****/
let switcherList = document.querySelectorAll(".table-top li");
switcherList.forEach((li)=>{
  li.addEventListener("click",removeActive);

})
function removeActive(){
  switcherList.forEach((li)=>{
    li.classList.remove("activ-link");
    this.classList.add("activ-link");
  })
}