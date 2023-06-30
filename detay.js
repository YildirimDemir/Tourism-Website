//******************************************** OTEL-DETAY-START **********************************************************/
window.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde yapılacak işlemler

    // Otel detay sayfasında gösterilecek olan divlerin başlangıçta gizli olduğunu varsayalım
    let hotel1Detay = document.getElementById('hotel-1-detay');
    let hotel2Detay = document.getElementById('hotel-2-detay');
    let hotel3Detay = document.getElementById('hotel-3-detay');
    let hotel4Detay = document.getElementById('hotel-4-detay');
    let hotel5Detay = document.getElementById('hotel-5-detay');

    // URL'den otel detay sayfasına verilen parametreyi alıyoruz
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let hotelId = urlParams.get('hotelId');

    // Gelen otelId'ye göre ilgili div'i gösteriyoruz
    if (hotelId === '1') {
        hotel1Detay.style.display = 'block';
        hotel2Detay.style.display = 'none';
        hotel3Detay.style.display = 'none';
        hotel4Detay.style.display = 'none';
        hotel5Detay.style.display = 'none';
    } else if (hotelId === '2') {
        hotel1Detay.style.display = 'none';
        hotel2Detay.style.display = 'block';
        hotel3Detay.style.display = 'none';
        hotel4Detay.style.display = 'none';
        hotel5Detay.style.display = 'none';
    } else if (hotelId === '3') {
        hotel1Detay.style.display = 'none';
        hotel2Detay.style.display = 'none';
        hotel3Detay.style.display = 'block';
        hotel4Detay.style.display = 'none';
        hotel5Detay.style.display = 'none';
    } else if (hotelId === '4') {
        hotel1Detay.style.display = 'none';
        hotel2Detay.style.display = 'none';
        hotel3Detay.style.display = 'none';
        hotel4Detay.style.display = 'block';
        hotel5Detay.style.display = 'none';
    } else if (hotelId === '5') {
        hotel1Detay.style.display = 'none';
        hotel2Detay.style.display = 'none';
        hotel3Detay.style.display = 'none';
        hotel4Detay.style.display = 'none';
        hotel5Detay.style.display = 'block';
    }
});
//******************************************** OTEL-DETAY-END **********************************************************/