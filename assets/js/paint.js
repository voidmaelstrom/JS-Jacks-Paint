let paintSet = document.querySelectorAll("img")
let colors = ['lime-green',
              'medium-brown',
              'royal-blue',
              'solid-black',
              'solid-cyan',
              'solid-purple',
              'solid-red',
              'solid-white',
              'solid-yellow']

colors.forEach(color => {
    paintSet.forEach(element => {
        if(element.currentSrc.includes(color)) {
            processColorAssign(color, element);
        }
    })
})

function processColorAssign(color, element) {
    let colorTextElem = document.getElementById("color");
    let priceTextElem = document.getElementById('ppg');

    switch (color) {
        case 'lime-green':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'lime-green'
                priceTextElem.textContent = '$14.99'
            });

            break;
        
        case 'medium-brown':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'medium-brown'
                priceTextElem.textContent = '$11.14'
            });

            break;

        case 'royal-blue':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'royal-blue'
                priceTextElem.textContent = '$22.99'
            });

            break;

        case 'solid-black':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'solid-black'
                priceTextElem.textContent = '$4.99'
            });

            break;

        case 'solid-cyan':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'solid-cyan'
                priceTextElem.textContent = '$8.22'
            });

            break;

        case 'solid-purple':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'solid-purple'
                priceTextElem.textContent = '$11.99'
            });

            break;

        case 'solid-red':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'solid-red'
                priceTextElem.textContent = '$13.42'
            });

            break;

        case 'solid-white':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'solid-white'
                priceTextElem.textContent = '$21.98'
            });

            break;

        case 'solid-yellow':

            element.addEventListener("mouseover", function(e){
                element.style.opacity = 0.5;
                colorTextElem.textContent = 'solid-yellow'
                priceTextElem.textContent = '$14.99'
            });

            break;

        default:

            break;
    }

    element.addEventListener("mouseout", function(e){
        element.style.opacity = 1;
    });
}