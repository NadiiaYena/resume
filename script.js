
const photo = document.querySelector('.photo-block');

fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            
            if (data.country_name === 'Ukraine') {
                console.log(data.country_name)
               
                photo.style.display = 'flex';
            }
        })
        .catch(error => {
            return null
            // console.error('Помилка при отриманні геолокації:', error);
        });


// Отримати елемент кнопки
const scrollToTopBtn = document.getElementById('scrollToTop');

// Відстежувати прокрутку сторінки
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = 'block'; // Показати кнопку, коли прокрутка більше 100px
  } else {
    scrollToTopBtn.style.display = 'none'; // Сховати кнопку, коли прокрутка менше 100px
  }
};

// Додати обробник події для прокрутки до верху
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавна прокрутка
  });
};
