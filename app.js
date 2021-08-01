const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// ------hide all sections except active

// (() => {
//   const sections = document.querySelectorAll(".section");
//   sections.forEach((section) => {
//     if (!section.classList.contains("active")) {
//       section.classList.add("hide");
//     }
//   });
// })();

//
const dayNight = document.querySelector(".day_night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("light");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("light")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



(function(){



  const buttons = document.querySelectorAll('.filter-btn')
  const storeItems = document.querySelectorAll('.store-item')

  buttons.forEach((button)=> {
      button.addEventListener('click', (e) => {
          e.preventDefault()
          const filter = e.target.dataset.filter
          console.log(filter)
          
          storeItems.forEach((item)=> {
            console.log(item.classList)
              if (filter === 'all'){
                  item.style.display = 'block'
              } else {
                  if (item.classList.contains(filter)){

                      item.style.display = 'block'
                  } else {
                      item.style.display = 'none'
                  }
              }
          })
      })
  })

})();


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}





$(function () {


  $('.animate-slide').animatedHeadline({
      animationType: 'slide'
  });


});


subForm = document.getElementById('contact-form')


subForm.addEventListener('submit',function sendMail(event){
  event.preventDefault()
  const tempParams = {
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    phone:document.getElementById('phone').value,
    message:document.getElementById('message').value,
  }

  emailjs.send('service_orc56vd','template_spwc6xa',tempParams).then(function(res){
    console.log('successful',res.status)
  })
})


