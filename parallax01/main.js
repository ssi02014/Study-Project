window.addEventListener("scroll", () => {
    let pageYOffset = window.pageYOffset + screen.height;

    // console.log(pageYOffset);

    //출력용
    document.querySelector('.PageYOffset').textContent = parseInt(pageYOffset);
    document.querySelector('.s1OT').textContent = document.querySelector('#section1').offsetTop;
    document.querySelector('.s2OT').textContent = document.querySelector('#section2').offsetTop;
    document.querySelector('.s3OT').textContent = document.querySelector('#section3').offsetTop;
    document.querySelector('.s4OT').textContent = document.querySelector('#section4').offsetTop;
    document.querySelector('.s5OT').textContent = document.querySelector('#section5').offsetTop;
    document.querySelector('.s6OT').textContent = document.querySelector('#section6').offsetTop;
    document.querySelector('.s7OT').textContent = document.querySelector('#section7').offsetTop;
    document.querySelector('.s8OT').textContent = document.querySelector('#section8').offsetTop;
    document.querySelector('.s9OT').textContent = document.querySelector('#section9').offsetTop;

    //출력용 - 레드용
    if( pageYOffset > document.querySelector('#section1').offsetTop) {
        document.querySelector('.s1OT').style.color = "red";
    } else {
        document.querySelector('.s1OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section2').offsetTop) {
        document.querySelector('.s2OT').style.color = "red";
    } else {
        document.querySelector('.s2OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section3').offsetTop) {
        document.querySelector('.s3OT').style.color = "red";
    } else {
        document.querySelector('.s3OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section4').offsetTop) {
        document.querySelector('.s4OT').style.color = "red";
    } else {
        document.querySelector('.s4OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section5').offsetTop) {
        document.querySelector('.s5OT').style.color = "red";
    } else {
        document.querySelector('.s5OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section6').offsetTop) {
        document.querySelector('.s6OT').style.color = "red";
    } else {
        document.querySelector('.s6OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section7').offsetTop) {
        document.querySelector('.s7OT').style.color = "red";
    } else {
        document.querySelector('.s7OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section8').offsetTop) {
        document.querySelector('.s8OT').style.color = "red";
    } else {
        document.querySelector('.s8OT').style.color = "black";
    }
    if( pageYOffset > document.querySelector('#section9').offsetTop) {
        document.querySelector('.s9OT').style.color = "red";
    } else {
        document.querySelector('.s9OT').style.color = "black";
    }

    //나타나기
    if( pageYOffset > document.querySelector('#section1').offsetTop){
        document.querySelector('#section1').classList.add("show");
    } else {
        document.querySelector('#section1').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section2').offsetTop){
        document.querySelector('#section2').classList.add("show");
    } else {
        document.querySelector('#section2').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section3').offsetTop){
        document.querySelector('#section3').classList.add("show");
    } else {
        document.querySelector('#section3').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section4').offsetTop){
        document.querySelector('#section4').classList.add("show");
    } else {
        document.querySelector('#section4').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section5').offsetTop){
        document.querySelector('#section5').classList.add("show");
    } else {
        document.querySelector('#section5').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section6').offsetTop){
        document.querySelector('#section6').classList.add("show");
    } else {
        document.querySelector('#section6').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section7').offsetTop){
        document.querySelector('#section7').classList.add("show");
    } else {
        document.querySelector('#section7').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section8').offsetTop){
        document.querySelector('#section8').classList.add("show");
    } else {
        document.querySelector('#section8').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section9').offsetTop){
        document.querySelector('#section9').classList.add("show");
    } else {
        document.querySelector('#section9').classList.remove("show");
    }
});