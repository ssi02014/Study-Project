window.addEventListener('load', () => {

    let long; //경도
    let lat;  //위도
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.degree-section');
    const temperatureSpan = document.querySelector('.temperature span');
    

    /*
        geolocation: 장치의 위치 정보에 접근할 수 있는 Geolocation 객체를 반환
        geolocation.getCurrentPosition: 장치의 현재 위치를 조사한 후 GeolocationPosition 객체로 반환
    */

    if( navigator.geolocation ){
        navigator.geolocation.getCurrentPosition( position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //DarkSky Api 사용
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

            fetch( api )
            .then( response => {
                return response.json();
            })
            .then( data => {
                //temperature = data.currently.temperature
                console.log(data);
                const {temperature, summary, icon } = data.currently;

                //Set DOM Elements From the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;

                //Celsius 공식 
                let celsius = (temperature - 32) * (5 / 9);
                
                //Set Icon
                setIcon(icon, document.querySelector('.icon'));

                //Change temperature Celsius/Farenheit
                temperatureSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === 'F'){
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius);
                    } else {
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = temperature;
                    }
                });
            })
        });
    } 

    //skyIcon API 
    function setIcon(icon, iconID) {
        const skycons = new Skycons({ color: 'white'});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();

        return skycons.set(iconID, Skycons[currentIcon]);
    }
});