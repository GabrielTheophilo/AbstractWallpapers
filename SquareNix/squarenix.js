window.addEventListener('load', function(){
    const diaDaSemana = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const Mes = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
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
        return diaDaSemana[dateTime.getDay()] + " - " + Mes[dateTime.getMonth()]  + "  " + dateTime.getDate();
    }
})