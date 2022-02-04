window.addEventListener('load', function(){
    const diaDaSemana = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sabado'
    ]
    const Mes = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    const dateTime = new Date();
    var time = document.getElementById('date');
    var month = document.getElementById('month');
    
    time.innerText = getTime(dateTime);
    month.innerText = getDate(dateTime);
    
    setInterval(() =>{
        const dateTime = new Date();
        time.innerText = getTime(dateTime);
        month.innerText = getDate(dateTime);
    }, 500)

    function getTime(dateTime){
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
        return (hours < 10 ? "0" +hours : hours) + ':' + (minutes < 10 ? "0" + minutes : minutes)+ ':' + (seconds < 10 ? "0" + seconds : seconds);
    }
    function getDate(dateTime){
        return diaDaSemana[dateTime.getDay()] + " - " + dateTime.getDate() + " de " + Mes[dateTime.getMonth()];
    }
})