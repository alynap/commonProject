document.addEventListener('DOMContentLoaded', function () { 
    // For reduced motion
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
        var allGif = document.querySelectorAll('*');
        allGif.forEach(function (element) {
            element.classList.add('noAnimation');
        });
    }

    // For lucy
    const images = [
        'images/Lucy_upsidedown.JPG',
        'images/Lucy_sleeping.JPG',
        'images/Lucy_sleepingpt2.JPG',
        'images/Lucy_laying.JPG',
    ];

    let currentImageIndex = 0;
    const luimg = document.querySelector('.luimg');
    const prevButton = luimg.querySelector('#prev');
    const nextButton = luimg.querySelector('#next');

    function changeImage(direction) {
        currentImageIndex += direction;

        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        const imgElements = luimg.querySelectorAll('img');
        imgElements[currentImageIndex].style.display = 'block';

        for (let i = 0; i < imgElements.length; i++) {
            if (i !== currentImageIndex) {
                imgElements[i].style.display = 'none';
            }
        }
    }
    prevButton.addEventListener('click', () => {
        changeImage(-1);
    });

    nextButton.addEventListener('click', () => {
        changeImage(1);
    });

    var sleeping = document.querySelector('.sleeping');
    var food = document.querySelector('.food');
    var bed = document.querySelector('.bed');
    var sleepingHover = document.querySelector('.sleepingHover');
    var foodHover = document.querySelector('.foodHover');
    var bedHover = document.querySelector('.bedHover');
    sleepingHover.style.display = 'none';
    foodHover.style.display = 'none';
    bedHover.style.display = 'none';
    sleeping.addEventListener('mouseover', function () {
        if (!sleeping.classList.contains('noAnimation')) {
             sleepingHover.style.display = 'block';
        }
    });
    sleeping.addEventListener('mouseout', function () {
        sleepingHover.style.display = 'none';
    });
    food.addEventListener('mouseover', function () {
        if (!food.classList.contains('noAnimation')) {
            foodHover.style.display = 'block';
        }
    });
    food.addEventListener('mouseout', function () {
        foodHover.style.display = 'none';
    });
    bed.addEventListener('mouseover', function () {
        if (!bed.classList.contains('noAnimation')) {
            bedHover.style.display = 'block';
        }
    });
    bed.addEventListener('mouseout', function () {
        bedHover.style.display = 'none';
    });



    // For Rosie
    const imagesR = [
        'images/rosie_sleeping.jpg',
        'images/rosie_blanket.jpg',
        'images/rosie_table.jpg',
        'images/rosie_towel.jpg'
    ];
    let currentImageIndexR = 0;
    const roimg = document.querySelector('.roimg');
    const prevButtonR = roimg.querySelector('#prev1');
    const nextButtonR = roimg.querySelector('#next1');

    function changeImageR(direction) {
    currentImageIndexR += direction;

    if (currentImageIndexR < 0) {
        currentImageIndexR = imagesR.length - 1;
    } else if (currentImageIndexR >= imagesR.length) {
        currentImageIndexR = 0;
    }

    const imgElementsR = roimg.querySelectorAll('img');
    imgElementsR[currentImageIndexR].style.display = 'block';

    for (let i = 0; i < imgElementsR.length; i++) {
        if (i !== currentImageIndexR) {
            imgElementsR[i].style.display = 'none';
        }
    }
    }

    prevButtonR.addEventListener('click', () => {
        changeImageR(-1);
    });

    nextButtonR.addEventListener('click', () => {
        changeImageR(1);
    });
   

    var treats = document.querySelector('.treats');
    var fetch = document.querySelector('.fetch');
    var cuddles = document.querySelector('.cuddles');
    var treatHover = document.querySelector('.treatHover');
    var fetchHover = document.querySelector('.fetchHover');
    var cuddleHover = document.querySelector('.cuddleHover');
    treatHover.style.display = 'none';
    fetchHover.style.display = 'none';
    cuddleHover.style.display = 'none';
    treats.addEventListener('mouseover', function () {
        if (!treats.classList.contains('noAnimation')) {
            treatHover.style.display = 'block';
        }
    });
    treats.addEventListener('mouseout', function () {
        treatHover.style.display = 'none';
    });
    fetch.addEventListener('mouseover', function () {
        if (!fetch.classList.contains('noAnimation')) {
            fetchHover.style.display = 'block';
        }
    });
    fetch.addEventListener('mouseout', function () {
        fetchHover.style.display = 'none';
    });
    cuddles.addEventListener('mouseover', function () {
        if (!cuddles.classList.contains('noAnimation')) {
            cuddleHover.style.display = 'block';
        }
    });
    cuddles.addEventListener('mouseout', function () {
        cuddleHover.style.display = 'none';
    });


    // For Honey
    const imagesH = [
        'images/honey_sleeping.jpeg',
        'images/honey_rock.jpeg',
        'images/honey_swimming.jpeg',
        'images/honey_smiling.jpeg',
    ];
    
    let currentImageIndexH = 0;
    const honimg = document.querySelector('.honimg');
    const prevButtonH = honimg.querySelector('#prev2');
    const nextButtonH = honimg.querySelector('#next2');
    
    function changeImageH(direction) {
        currentImageIndexH += direction;
    
        if (currentImageIndexH < 0) {
            currentImageIndexH = imagesH.length - 1;
        } else if (currentImageIndexH >= imagesH.length) {
            currentImageIndexH = 0;
        }
    
        const imgElementsH = honimg.querySelectorAll('img');
        imgElementsH[currentImageIndexH].style.display = 'block';
    
        for (let i = 0; i < imgElementsH.length; i++) {
            if (i !== currentImageIndexH) {
                imgElementsH[i].style.display = 'none';
            }
        }
    }
   
    prevButtonH.addEventListener('click', () => {
        changeImageH(-1);
    });
    
    nextButtonH.addEventListener('click', () => {
        changeImageH(1);
    });

    var rocks = document.querySelector('.rocks');
    var foodHon = document.querySelector('.foodHon');
    var attention = document.querySelector('.attention');
    var rocksHover = document.querySelector('.rocksHover');
    var foodHonHover = document.querySelector('.foodHonHover');
    var attentionHover = document.querySelector('.attentionHover');
    attentionHover.style.display = 'none';
    rocksHover.style.display = 'none';
    foodHonHover.style.display = 'none';
    rocks.addEventListener('mouseover', function () {
        if (!rocks.classList.contains('noAnimation')) {
            rocksHover.style.display = 'block';
        }
    });
    rocks.addEventListener('mouseout', function () {
        rocksHover.style.display = 'none';
    });
    foodHon.addEventListener('mouseover', function () {
        if (!foodHon.classList.contains('noAnimation')) {
            foodHonHover.style.display = 'block';
        }
    });
    foodHon.addEventListener('mouseout', function () {
        foodHonHover.style.display = 'none';
    });
    attention.addEventListener('mouseover', function () {
        if (!attention.classList.contains('noAnimation')) {
            attentionHover.style.display = 'block';
        }
    });
    attention.addEventListener('mouseout', function () {
        attentionHover.style.display = 'none';
    });


    // For Sofie
    const imagesS = [
        'images/sofie2.JPG',
        'images/sofie3.JPG',
        'images/sofie4.JPG',
        'images/sofie5.JPG',
    ];
    
    let currentImageIndexS = 0;
    const soimg = document.querySelector('.soimg');
    const prevButtonS = soimg.querySelector('#prev3');
    const nextButtonS = soimg.querySelector('#next3');
    
    function changeImageS(direction) {
        currentImageIndexS += direction;
    
        if (currentImageIndexS < 0) {
            currentImageIndexS = imagesS.length - 1;
        } else if (currentImageIndexS >= imagesS.length) {
            currentImageIndexS = 0;
        }
    
        const imgElementsS = soimg.querySelectorAll('img');
        imgElementsS[currentImageIndexS].style.display = 'block';
    
        for (let i = 0; i < imgElementsS.length; i++) {
            if (i !== currentImageIndexS) {
                imgElementsS[i].style.display = 'none';
            }
        }
    }
    
    prevButtonS.addEventListener('click', () => {
        changeImageS(-1);
    });
    
    nextButtonS.addEventListener('click', () => {
        changeImageS(1);
    });

    var eggs = document.querySelector('.eggs');
    var peanut = document.querySelector('.peanut');
    var bacon = document.querySelector('.bacon');
    var eggsHover = document.querySelector('.eggsHover');
    var peanutHover = document.querySelector('.peanutHover');
    var baconHover = document.querySelector('.baconHover');
    eggsHover.style.display = 'none';
    peanutHover.style.display = 'none';
    baconHover.style.display = 'none';
    eggs.addEventListener('mouseover', function () {
        if (!eggs.classList.contains('noAnimation')) {
            eggsHover.style.display = 'block';
        }
    });
    eggs.addEventListener('mouseout', function () {
        eggsHover.style.display = 'none';
    });
    peanut.addEventListener('mouseover', function () {
        if (!peanut.classList.contains('noAnimation')) {
            peanutHover.style.display = 'block';
        }
    });
    peanut.addEventListener('mouseout', function () {
        peanutHover.style.display = 'none';
    });
    bacon.addEventListener('mouseover', function () {
        if (!bacon.classList.contains('noAnimation')) {
            baconHover.style.display = 'block';
        }
    });
    bacon.addEventListener('mouseout', function () {
        baconHover.style.display = 'none';
    });

    
    // For Finn
    const imagesF = [
        'images/Finn_Shlumped.PNG',
        'images/Finn_Kitten.jpg',
        'images/Finn_GOAT.PNG',
        'images/Finn_Goldenhr.PNG',
    ];
    
    let currentImageIndexF = 0;
    const finnimg = document.querySelector('.finnimg');
    const prevButtonF = finnimg.querySelector('#prev4');
    const nextButtonF = finnimg.querySelector('#next4');
    
    function changeImageF(direction) {
        currentImageIndexF += direction;
    
        if (currentImageIndexF < 0) {
            currentImageIndexF = imagesF.length - 1;
        } else if (currentImageIndexF >= imagesF.length) {
            currentImageIndexF = 0;
        }
    
        const imgElementsF = finnimg.querySelectorAll('img');
        imgElementsF[currentImageIndexF].style.display = 'block';
    
        for (let i = 0; i < imgElementsF.length; i++) {
            if (i !== currentImageIndexF) {
                imgElementsF[i].style.display = 'none';
            }
        }
    }
    
    prevButtonF.addEventListener('click', () => {
        changeImageF(-1);
    });
    
    nextButtonF.addEventListener('click', () => {
        changeImageF(1);
    });

    var treatfinn = document.querySelector('.treatfinn');
    var rubs = document.querySelector('.rubs');
    var cardboard = document.querySelector('.cardboard');
    var treatfinnHover = document.querySelector('.treatFinnHover');
    var rubsHover = document.querySelector('.rubsHover');
    var cardboardHover = document.querySelector('.cardboardHover');
    treatfinnHover.style.display = 'none';
    rubsHover.style.display = 'none';
    cardboardHover.style.display = 'none';
    treatfinn.addEventListener('mouseover', function () {
        if (!treatfinn.classList.contains('noAnimation')) {
            treatfinnHover.style.display = 'block';
        }
    });
    treatfinn.addEventListener('mouseout', function () {
        treatfinnHover.style.display = 'none';
    });
    rubs.addEventListener('mouseover', function () {
        if (!rubs.classList.contains('noAnimation')) {
            rubsHover.style.display = 'block';
        }
    });
    rubs.addEventListener('mouseout', function () {
        rubsHover.style.display = 'none';
    });
    cardboard.addEventListener('mouseover', function () {
        if (!cardboard.classList.contains('noAnimation')) {
            cardboardHover.style.display = 'block';
        }
    });
    cardboard.addEventListener('mouseout', function () {
        cardboardHover.style.display = 'none';
    });

});