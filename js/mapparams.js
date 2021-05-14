ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [36.615768, 30.558509],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [36.615768, 30.558509]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Hotel Hilton',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            36.615768, 30.558509
        ], );

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([36.615768, 30.558509], {
            balloonContent: '<strong>серобуромалиновый</strong> цвет'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#0a223d'
        }))
}
