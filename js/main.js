/// List Menu
var toggleMenu = document.getElementById("toggle-menu");
var navList = document.getElementById("navList");
var tabLinks = document.querySelectorAll('#navList a');

toggleMenu.addEventListener("click",function(){
    if(navList.style.display == "flex"){
        navList.style.display="none"
    }else{
        navList.style.display="flex"
    }
})


// ////////////////////////////////////////////////////////////////
//Active Class
// Add click event listener to each tab link
tabLinks.forEach(function(tab) {
  tab.addEventListener('click', function() {
    // Remove 'active' class from all tabs
    tabLinks.forEach(function(tab) {
      tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    tab.classList.add('active');
  });
});

////////////////////////////////////////////////////////////////////////////
// Counter Item
var counterelem =document.getElementsByClassName("counter");
let counter = 0;
function setCounter(){
  counter++;
  for(var i=0 ;i<counterelem.length ; i++){
    counterelem[i].innerHTML=counter;
  }
  
  if(counter == 150){
    clearInterval(x);
  }
}
var x = setInterval(()=>{
  setCounter();
},10);
///////////////////////////////////////////////////////////////////////////////////
