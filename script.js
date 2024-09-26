
const photo = document.querySelector('.photo-block');

fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            
            if (data.country_name === 'Ukraine') {
                console.log(data.country_name)
               
                photo.style.display = 'block';
            }
        })
        .catch(error => {
            return null
            // console.error('Помилка при отриманні геолокації:', error);
        });