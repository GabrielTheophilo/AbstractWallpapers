window.addEventListener('load', function(){
    const dayOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const Month = [
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
        return dayOfWeek[dateTime.getDay()] + " - " + Month[dateTime.getMonth()]  + "  " + dateTime.getDate();
    }
})