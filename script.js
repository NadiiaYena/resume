
const photo = document.querySelector('.photo-block');

fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
        
            
            if (data.country_name === 'Ukraine') {
                console.log(data.country_name)
               
                photo.style.display = 'flex';
            }
        })
        .catch(error => {
            return null
           
        });



const scrollToTopBtn = document.getElementById('scrollToTop');


window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = 'block'; 
  } else {
    scrollToTopBtn.style.display = 'none'; 
  }
};


scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};
