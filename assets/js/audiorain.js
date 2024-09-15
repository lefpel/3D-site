let audio = document.querySelector('audio')
let stop = document.querySelector('.button-start')
// Изначально меняем значение громкости
audio.volume = 0.6
let isPlay = true

stop.addEventListener('click',()=>{
    if (isPlay) {
        audio.pause()
        console.log('Остановили');
        isPlay = false
    } else {
        audio.play()
        console.log('Запустили');
        isPlay = true
    }
})