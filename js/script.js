'use strict'

let inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset="UTF-8"');
    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200){
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            // console.log(request.response); 
        }else{
            inputUsd.value = 'Что то не так';
        }
    });

    //status - статус нашего запроса, например это 404 если ничего не найдено или 200 если все норм
    //statusText - это текстовое описание ответа от сервера
    //response - ответ от сервера типо главное 
    //readyState - текущее состояние нашего запроса
});