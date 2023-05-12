let lavadora = {
    power: false,
    waterLevel: 2,
    washingLevel: 1,
    washingTime: 15,
    blush: 1,
    wash: false,
};

const errorMessage = () => window.alert("La lavadora debe estar encendida")
const defaultColor = ( arrClases = [] ) => {
    arrClases.forEach( item => {
        if ( item.classList.contains("bg-primary") ){
            item.classList.remove("bg-primary");
            item.classList.add("bg-secondary");
        };
    });
}

const btnOnOff = document.querySelector("#btnOnOff");
btnOnOff.addEventListener("click", () => {
    const bgOnOff = document.querySelector("#bgOnOff");
    const bgw2 = document.querySelector("#bgWL2");
    const bgWhL1 = document.querySelector("#bgWhL1");

    if (!lavadora.power) {
        lavadora.power = true;
        bgOnOff.classList.remove("bg-secondary");
        bgOnOff.classList.add("bg-primary");

        bgw2.classList.remove("bg-secondary");
        bgw2.classList.add("bg-primary");


        const arrFirstCol = document.querySelectorAll(".bgWLc");
        arrFirstCol[3].classList.remove("bg-secondary");
        arrFirstCol[3].classList.add("bg-primary");

        const arrSecCol = document.querySelectorAll(".bgWhLc");
        arrSecCol[2].classList.remove("bg-secondary");
        arrSecCol[2].classList.add("bg-primary")

        const arrBgTW = document.querySelectorAll(".bgTW");
        arrBgTW[3].classList.remove("bg-secondary");
        arrBgTW[3].classList.add("bg-primary");

        const arrBW = document.querySelectorAll(".bgW");
        arrBW[2].classList.remove("bg-secondary");
        arrBW[2].classList.add("bg-primary")

    } else if (lavadora.power) {
        
        bgOnOff.classList.remove("bg-primary");
        bgOnOff.classList.add("bg-secondary");

        const arrFirstCol = document.querySelectorAll(".bgWLc");
        defaultColor(arrFirstCol);

        const arrSecCol = document.querySelectorAll(".bgWhLc");
        defaultColor(arrSecCol);

        const arrBgTW = document.querySelectorAll(".bgTW");
        defaultColor(arrBgTW);

        const arrBW = document.querySelectorAll(".bgW");
        defaultColor(arrBW);

        lavadora = {
            power: false,
            waterLevel: 2,
            washingLevel: 1,
            washingTime: 15,
            blush: 1,
            wash: false,
        };
    }
});

const btnWl = document.querySelector("#btnWl");
btnWl.addEventListener("click", () => {
    lavadora.waterLevel = lavadora.waterLevel + 1;
    console.log(lavadora.waterLevel)
    const bgW1 = document.querySelector("#bgWL1");
    const bgw2 = document.querySelector("#bgWL2");
    const bgw3 = document.querySelector("#bgWL3");
    const bgw4 = document.querySelector("#bgWL4");
    const bgw5 = document.querySelector("#bgWL5");
    if (lavadora.power) {
        if (lavadora.waterLevel == 6) {
            lavadora.waterLevel = 1;
        }

        console.log(lavadora.waterLevel)
        switch (lavadora.waterLevel) {
            case 1:
                bgw5.classList.remove("bg-primary");
                bgw5.classList.add("bg-secondary");

                bgW1.classList.remove("bg-secondary");
                bgW1.classList.add("bg-primary");

                break;
            case 2:
                bgW1.classList.remove("bg-primary");
                bgW1.classList.add("bg-secondary");

                bgw2.classList.remove("bg-secondary");
                bgw2.classList.add("bg-primary");

                break;
            case 3:
                bgw2.classList.remove("bg-primary");
                bgw2.classList.add("bg-secondary");

                bgw3.classList.remove("bg-secondary");
                bgw3.classList.add("bg-primary");


                break;
            case 4:
                bgw3.classList.remove("bg-primary");
                bgw3.classList.add("bg-secondary");

                bgw4.classList.remove("bg-secondary");
                bgw4.classList.add("bg-primary");
                break;

            case 5:
                bgw4.classList.remove("bg-primary");
                bgw4.classList.add("bg-secondary");

                bgw5.classList.remove("bg-secondary");
                bgw5.classList.add("bg-primary");

                break;

            default:
                lavadora.waterLevel = 1;
                break;
        }
    } else {
        errorMessage()
    }
});

const btmWhL = document.querySelector("#btmWhL")
btmWhL.addEventListener("click", () => {
    if (lavadora.power) {

        lavadora.washingLevel += 1;

        const bgWhL3 = document.querySelector("#bgWhL3");
        const bgWhL2 = document.querySelector("#bgWhL2");
        const bgWhL1 = document.querySelector("#bgWhL1");

        if (lavadora.washingLevel == 4) lavadora.washingLevel = 1;

        console.log(lavadora.washingLevel)
        switch (lavadora.washingLevel) {
            case 1:
                bgWhL3.classList.remove("bg-primary");
                bgWhL3.classList.add("bg-secondary");

                bgWhL1.classList.remove("bg-secondary");
                bgWhL1.classList.add("bg-primary");
                break;
            case 2:
                bgWhL1.classList.remove("bg-primary");
                bgWhL1.classList.add("bg-secondary");

                bgWhL2.classList.remove("bg-secondary");
                bgWhL2.classList.add("bg-primary");
                break;
            case 3:
                bgWhL2.classList.remove("bg-primary");
                bgWhL2.classList.add("bg-secondary");

                bgWhL3.classList.remove("bg-secondary");
                bgWhL3.classList.add("bg-primary");
                break;
            default:
                lavadora.washingLevel = 1;
        }

    } else {
        errorMessage();
    }
});

const btnTWL = document.querySelector("#btnTWL");
btnTWL.addEventListener("click", () => {
    if (lavadora.power) {
        const arrBgTW = document.querySelectorAll(".bgTW");
        lavadora.washingTime += 5;
        if (lavadora.washingTime === 35) lavadora.washingTime = 10;
        let position = 0;
        switch (lavadora.washingTime) {
            case 10:
                position = 4;
                break;
            case 15:
                position = 3;
                break;
            case 20:
                position = 2;
                break;
            case 25:
                position = 1;
                break;
            case 30:
                position = 0;
                break;
        }
        if (position === 4) {
            arrBgTW[0].classList.remove("bg-primary");
            arrBgTW[0].classList.add("bg-secondary");

            arrBgTW[position].classList.remove("bg-secondary");
            arrBgTW[position].classList.add("bg-primary");
        } else {
            arrBgTW[position + 1].classList.remove("bg-primary");
            arrBgTW[position + 1].classList.add("bg-secondary");

            arrBgTW[position].classList.remove("bg-secondary");
            arrBgTW[position].classList.add("bg-primary");
        }
    }
    else {
        errorMessage();
    }
});

const btnB = document.querySelector("#btnB");
btnB.addEventListener("click", () => {
    if (lavadora.power) {
        lavadora.blush += 1;
        if ( lavadora.blush == 4 ) lavadora.blush = 1;
        const arrBW = document.querySelectorAll(".bgW");
        let position = 0;

        switch (lavadora.blush) {
            case 3:
                position = 0;
                break;
            case 2:
                position = 1;
                break;
            case 1:
                position = 2;
                break;
        }

        if ( position === 2 ){
            arrBW[0].classList.remove("bg-primary");
            arrBW[0].classList.add("bg-secondary");

            arrBW[position].classList.remove("bg-secondary");
            arrBW[position].classList.add("bg-primary");
        }else{
            arrBW[position + 1].classList.remove("bg-primary");
            arrBW[position + 1].classList.add("bg-secondary");

            arrBW[position].classList.remove("bg-secondary");
            arrBW[position].classList.add("bg-primary");
        }
    } else {
        errorMessage();
    }
});

const  btnWash = document.querySelector("#btnWash");
btnWash.addEventListener("click", () => {
    if ( lavadora.power ){
        btnWl.disabled = true;
        btmWhL.disabled = true;
        btnTWL.disabled = true;
        btnB.disabled = true;

        btnOnOff.classList.remove("btn-secondary");
        btnOnOff.classList.add("btn-success");

        document.querySelector(".wash").classList.remove("bg-secondary");
        document.querySelector(".wash").classList.add("bg-info");
        
    }else{
        errorMessage()
    }
})