const btn = document.querySelector('button:first-of-type');
const bttn = document.querySelector('button:last-of-type');
const img = document.getElementById('image');

btn.addEventListener('click', () =>{
    alert("You're sooo ugly");
})

bttn.addEventListener('click', () =>{
    img.innerHTML = '<img src="https://cadenaser00.epimg.net/ser/imagenes/2020/06/01/radio_murcia/1591015955_870352_1591016675_noticia_normal_recorte1.jpg">';
})

