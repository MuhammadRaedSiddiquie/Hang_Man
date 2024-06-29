let display
let text
let hint
let str
let random
let word
let word2
let wordList = ['argentina', 'belgium', 'chile', 'finland', 'georgia','greenland','maldives','toronto','columbo','indonesia',
    'bookcase', 'couch', 'bench', 'wardrobe', 'stool','cabinet','drawer','cupboard','bench','dresser',
    'shrimp', 'steak', 'ramen', 'sushi', 'tacos','noodles','hotdog','sandwich','cheesecake','icecream','shawarma','donut','muffin']
let hintList = ['country', 'country', 'country', 'country', 'country','country', 'country', 'country', 'country', 'country',
    'furniture', 'furniture', 'furniture', 'furniture', 'furniture','furniture', 'furniture', 'furniture', 'furniture', 'furniture',
    'food', 'food', 'food', 'food', 'food',  'food', 'food', 'food', 'food', 'food',  'food', 'food', 'food']
let wordListMed=["propaganda","saniture","signature","embroidy","scenario","drizzle","alumunium","capachino","furiuos","submarine","lifeless","fumeable","flameable","trilogy","metroville","cementary","pronounciate","advocate","garderner","fairytale","accomplish","lightning"]
let wordListHar=[ "configuration", "improvidence","audacious","lieutenant","mischievous","enormity","handkerchief","phenomenon","worcestershire","anachronism","draconian","repository","venomuos","capricious","evocative","sufficient","fanatical","empowerness","toxicating"]
let keys
let chances
let guessed
let user
let ctx
let letter
let canvas
let index
let indexTwo
let difficultyEasy=false
let difficultyMed=false
let difficultyHard=false


function selDiff(){
    document.getElementById('playBtn').style.display="none";
    document.getElementById('selDifficulty').style.display="flex";
}
function playAgain() {
    if(difficultyEasy==true){
        if (index > -1) { // only splice array when item is found
            wordList.splice(index, 1); // 2nd parameter means remove one item only
        }
        if (indexTwo > -1) { // only splice array when item is found
            hintList.splice(indexTwo, 1); // 2nd parameter means remove one item only
        }
        document.getElementById('againContainer').style.display = 'none';
        textTwo.innerText = ""
        playGame();
        for (let l = 0; l < keys.length; l++) {
            keys[l].style.backgroundColor="#f2f9f1";
            text.innerText = '';
            console.log(str);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            chances = 0
            drawHangman2();
        }
    }
    else if(difficultyMed==true){
        if (index > -1) { // only splice array when item is found
            wordListMed.splice(index, 1); // 2nd parameter means remove one item only
        }
        document.getElementById('againContainer').style.display = 'none';
        textTwo.innerText = ""
        playGameMed();
        for (let l = 0; l < keys.length; l++) {
            keys[l].style.backgroundColor="#f2f9f1";
            text.innerText = '';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            chances = 0
            drawHangman2();
        }
    }
    else if(difficultyHard==true){
        if (index > -1) { // only splice array when item is found
            wordListHar.splice(index, 1); // 2nd parameter means remove one item only
        }
        document.getElementById('againContainer').style.display = 'none';
        textTwo.innerText = ""
        playGameHard();
        for (let l = 0; l < keys.length; l++) {
            keys[l].style.backgroundColor="#f2f9f1";
            text.innerText = '';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            chances = 0
            drawHangman2();
        }
    }
    
    }


function appendToDisplay(input) {

    userInput(input);
    logic();

}
function changeVis(num) {

    keys[num].style.backgroundColor="#d9dfd8"
}
function userInput(letter) {
    user = letter;

}
function logic() {



    if (guessed.includes(user)) {
        text.innerText = "This Letter Is Already Guessed"
    }
    else if (word.includes(user)) {
        guessed += user
        for (let j = 0; j < word.length; j++) {
            if (guessed.includes(word[j])) {


                if (j % 2 == 0) {

                    str = str.replaceAt(j, word[j])
                }
                else {
                    console.log("dash")
                }
                text.innerText = "Correct! You Guessed It Right"
                display.value = str

                if (str.includes("_")) {

                }
                else {
                    document.getElementById('againContainer').style.display = 'flex';
                    textTwo.innerText = "Congratulations!\n You Won"

                }



            }

            else {




            }

        }

    }
    else {
        text.innerText = "Wrong! Try Again"
        chances += 1
        drawHangman(chances)
    }

}
function drawHangman2() {

    canvas = document.getElementById("stickman");
    ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;

    // Base
    ctx.beginPath();
    ctx.moveTo(50, 280);
    ctx.lineTo(200, 280);
    ctx.stroke();

    // Left pole
    ctx.beginPath();
    ctx.moveTo(75, 280);
    ctx.lineTo(75, 50);
    ctx.stroke();

    // Top bar
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(150, 50);
    ctx.stroke();

    // Short vertical bar
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 80);
    ctx.stroke();
}
function drawHangman(chances) {

    switch (chances) {
        case 1:
            // Head
            ctx.beginPath();
            ctx.arc(150, 100, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2:
            // Body
            ctx.beginPath();
            ctx.moveTo(150, 120);
            ctx.lineTo(150, 200);
            ctx.stroke();
            break;
        case 3:
            // Left arm
            ctx.beginPath();
            ctx.moveTo(150, 140);
            ctx.lineTo(120, 170);
            ctx.stroke();
            break;
        case 4:
            // Right arm
            ctx.beginPath();
            ctx.moveTo(150, 140);
            ctx.lineTo(180, 170);
            ctx.stroke();
            break;
        case 5:
            // Left leg
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(120, 250);
            ctx.stroke();
            break;
        case 6:
            // Right leg
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(180, 250);
            ctx.stroke();
            document.getElementById('againContainer').style.display = 'flex';
            textTwo.innerText = "Oops! You Lost Try Again"
            break;
    }
}
function playGame() {
    difficultyEasy=true
    console.log("easy")
    document.getElementById('playContainer').style.display = 'none';
    display = document.getElementById('displayWord');
    text = document.getElementById('textMain')
    textTwo = document.getElementById('textSec')
    hint = document.getElementById('hintBox')
    str = "";
    random = Math.floor(Math.random() * wordList.length)
    word = wordList[random];
    word2 = wordList[random];
    word = word.split('').join(' ').toUpperCase()
    keys = document.getElementsByClassName('key')
    chances = 0
    guessed = ''
    user = ''
    index = wordList.indexOf(word2);
    indexTwo = wordList.indexOf(word2);

    String.prototype.replaceAt = function (index, char) {
        var a = this.split("");
        a[index] = char;
        return a.join("");
    }

    for (let m = 0; m < word.length; m++) {
        if (m % 2 == 0) {
            str += "_";
        }
        else {
            str += " ";
        }
    }

    hint.innerText = 'HINT:' + hintList[random].toUpperCase()
    display.value = str
    console.log(word)
    drawHangman2();
}
function playGameMed() {
    difficultyMed=true
    console.log("med")
    document.getElementById('playContainer').style.display = 'none';
    display = document.getElementById('displayWord');
    text = document.getElementById('textMain')
    textTwo = document.getElementById('textSec')
    hint = document.getElementById('hintBox')
    str = "";
    random = Math.floor(Math.random() * wordListMed.length)
    word = wordListMed[random];
    word2 = wordListMed[random];
    word = word.split('').join(' ').toUpperCase()
    keys = document.getElementsByClassName('key')
    chances = 0
    guessed = ''
    user = ''
    index = wordListMed.indexOf(word2);
    indexTwo = wordListMed.indexOf(word2);
    
    String.prototype.replaceAt = function (index, char) {
        var a = this.split("");
        a[index] = char;
        return a.join("");
    }

    for (let m = 0; m < word.length; m++) {
        if (m % 2 == 0) {
            str += "_";
        }
        else {
            str += " ";
        }
    }

    hint.innerText ='NO HINT AVAILABLE'
    display.value = str
    console.log(word)
    drawHangman2();
    
}
function playGameHard() {
    difficultyHard=true
    document.getElementById('playContainer').style.display = 'none';
    display = document.getElementById('displayWord');
    text = document.getElementById('textMain')
    textTwo = document.getElementById('textSec')
    hint = document.getElementById('hintBox')
    str = "";
    random = Math.floor(Math.random() * wordListHar.length)
    word = wordListHar[random];
    word2 = wordListHar[random];
    word = word.split('').join(' ').toUpperCase()
    keys = document.getElementsByClassName('key')
    chances = 0
    guessed = ''
    user = ''
    index = wordListHar.indexOf(word2);
    indexTwo = wordListHar.indexOf(word2);
    
    String.prototype.replaceAt = function (index, char) {
        var a = this.split("");
        a[index] = char;
        return a.join("");
    }

    for (let m = 0; m < word.length; m++) {
        if (m % 2 == 0) {
            str += "_";
        }
        else {
            str += " ";
        }
    }

    hint.innerText = 'NO HINT FOR THIS DIFFICULTY'
    display.value = str

    drawHangman2();
}

