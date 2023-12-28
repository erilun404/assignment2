const gamePlay = 
{
    prologue: 
`Prologue: 
Sweden around 1920th.You and your friends Anna, Kalle and Johanna are invited to the Nordic Museum to listen to what has been found from an excavation of an old grave.
You are all interested in archeology but you are also interested in mystical and occult things! And has previously been involved in solving various occult scenarios, with great luck!`,
    prologueTwo:
`While there, you learn that they have found gold and a box with some strange occult symbols of a trident! Amazing! Found here in a grave in Sweden, incredible! 
How did it end up here! In a few weeks it will be shown to the public!`,
    atTheMuseum: 
`The museum:
While you are there you start to talk with some different people. You meet:
Elise 18 years: She is the child of Artur Evans and Ann Bernadsson. Elise health has been deteriorating since the last 10 years.
Arthur Evans: the archaeologist who found the box, when he digger out the box in a grave 10 years ago. He is not keen on lending out the box to the museum.
Ann Bernadsson: She is worried about her child feeling so bad.
Theodor Brant: An major of the military. His the one taking care of the exclusive exhibition.`,
    atTheMuseumPartTwo:
`After a while you and your fellow friends hear Arthur screaming at the major:
I WANT IT back, it is my property. 
This outburst will trigger Elises health and will make her faint. The ambulance will arrive shortly and she will be taken to the hospital.`,
    scenarioWorried: 
`You are worried about Elise, and especially Kalle who took a liking to her during the short time they spoke to each other. You also learn that Elise's mother is worried, as she is not allowed to talk to her. You decide to help Ann get Elise out.
You have done this before! Anna becomes very happy and tells her that Elise is at Långbro hospital.`, 
    hospital:
`You go and visit her in the hospital. When you arrive at the hospital, you ask to see Elise.
While you are waiting for the nurse to let you in, you hear strange screams from inside one of the halls. And you smell a strange smell of seaweed and musty water.
After a while you will be told that you are not welcome to visit. You think they are giving a poor excuse for not letting you in.`,
    insideInfo:
`Through a colleague of Anna's, you learn that Elise has changed her doctor to Dr. Mild, his name eludes him, he is not of the kind nature. 
He has unorthodox methods to help people, but since Elise has given her consent that he will cure her. We can't do anything, right?`,
    scenarioMild: 
`You have found out that Dr. Mild lives in villa Hagtorn in Mälarhöjden. You decide to go there by tram, outside you decide to take different roles to try to get into the house. Anna and Johanna walk towards the house. Kalle and you sneak into the garage.`,
    gotoHouse: 
`You and your friends decide to go in after dark, you sneak up to the house and manage to get in. You find some hats that you put on your head, why? Because they are nice hats, of course!
Once inside, you split up to start looking for Elise.`,
    failGame:
`You failed the mission!`,
    sanityGoDown: 
`You failed the mission what you seen made your sanity go down, what you seen took a toll on you, and you end up in hospital! Will you ever recover again?`,
    tribute: 
`Thanks for visit the game! I would like to make a tribute to my fellow roleplaying group and the session we played, those are the inspiration of this game!`
}

const choiceOfWay = 
{
    garage: 
`You sneak into the garage with Kalle, you've dressed up as a gardener, so as not to attract any attention. You look around the room for something to use:`,
    successWindow: 
`You hear them talking about some who are at the front door.
-Some gynecologist is looking for Elise, they apparently had an appointment.
- No, they are not allowed in, absolutely not!
-What do I do?
-Just drive them away, they won't know anything about her and what we're doing here! You sneak back to the garage and out to the road to meet the others`,
    failWindow: 
`Anna and Johanna seem to have failed to enter the house. You move back to the garage and out to the road. You meet everyone outside.`,
    goBasement: 
`You go down to the basement. When you go down, it's dark and you smell seaweed and water. 
You recognize the smell, it's the same you smelled in the hospital and from the rooms where people were screaming! 
You slowly go down the stairs…
You see something big longing away in the room, it looks like a big tank with water in it, you also see some jars on a shelf`,
    failTank: 
`You get closer and hear splashing, and there is some movement there. It's a strange creature that looks like half human, half fish! 
You've never seen anything so strange before and you feel a cold core running down your spine. 
You become petrified and can't move, you lie down in the fetal position and cant move.`,
    failJars: 
`You walk up to the cans and take a closer look! You see it's human parts in some kind of liquid. 
A cold chill runs down your spine and you become as if petrified and cannot move. You lie down in the fetal position and cant get out.`,
    goUpStairs: 
`You go upstairs, creep along the corridor. You will see several doors leading to different rooms. You discover that in two of them someone are snoring.
Which room do you want to go in?`,
    failUpStairs: 
`You go into the wrong room and are discovered by the person who is sleeping there. 
In a panic, you and your fellow friends run outside and jump into the taxi that is waiting for you outside. Now how will things go for Elise!`,
    successUpStairs: 
`You see Elise lying there sleeping. You try to wake her up, but she seems difficult to wake up. 
Finally she wakes up, she is disoriented and doesn't really know where she is. You all help to get her out without anyone waking up. A taxi is waiting for you outside. 
Elise mutters about someone who needs rescuing from the basement. But you want out as soon as possible. 
You get out and Elise is saved! You made it! 
Elise returns home unharmed to her mother and your mission is complete.`
}

const randomItem = ["nail scissor", "spade", "lader"]

const showPrologue = () => {
     alert(gamePlay.prologue);
     alert(gamePlay.prologueTwo);
}
showPrologue();

let startGame = () => {
    let endSession = false;
    while (!endSession) {
        let userChoice = prompt("start game?").toLocaleLowerCase();
        if (userChoice === "yes") {
            playGame();
        }else if (userChoice === "no") {
           endSession = true;
            alert(gamePlay.tribute)
        }else {
            alert("you must answer yes or no!");
        }
    }
}

let userName;
const playGame = () => {
    while(!userName) {
        userName = prompt("Enter your name");
        if (!userName) {
            alert("you must write something!");
        }
    }
  
    alert(`Welcome ${userName} to the Mystery of Elise`);
        
    openingDialog();
    getRandomItem();
    sneakWindow();
    alert(gamePlay.gotoHouse);

    let upDown = insideHouse();
    if(upDown === "up") {
        alert(choiceOfWay.goUpStairs);
        let upStairs = upstairs();
        if(upStairs === "right") {
            alert(choiceOfWay.successUpStairs);
            alert(gamePlay.tribute)
        }else if(upStairs === "left") {
            alert(choiceOfWay.failUpStairs);
            alert(gamePlay.failGame)
            alert(gamePlay.tribute)
        }
    }if(upDown === "down") {
        alert(choiceOfWay.goBasement)
        let choiceBasement = basement();
        if(choiceBasement === "jars") {
            alert(choiceOfWay.failJars);
            alert(gamePlay.sanityGoDown)
            alert(gamePlay.tribute)
        }else if(choiceBasement === "tank") {
            alert(choiceOfWay.failTank)
            alert(gamePlay.sanityGoDown)
            alert(gamePlay.tribute)
        }
    }
}

const openingDialog = () => {
    alert(gamePlay.atTheMuseum)
    alert(gamePlay.atTheMuseumPartTwo)
    alert(gamePlay.scenarioWorried)
    alert(gamePlay.hospital)
    alert(gamePlay.insideInfo)
    alert(gamePlay.scenarioMild)
    alert(choiceOfWay.garage)
}

const getRandomItem = () => {
    let item = randomItem[Math.floor(Math.random() * randomItem.length )];
    alert(`You find a ${item} and goes out in the garden and start to work`)
}

const sneakWindow = () => {
    let hasChosen = false
    while(!hasChosen) {
        let window = prompt("Do you want to sneak at window, yes or no?").toLocaleLowerCase();  
        if(window === "yes") {
            hasChosen = true;
            alert(choiceOfWay.successWindow)
        }else if(window === "no") {
            hasChosen = true;
            alert(choiceOfWay.failWindow)
        }else{
            alert("You must write Yes or No")
        }
    }
}
 
const insideHouse = () => {
    let upDownHouse = false
    while(!upDownHouse) {
        let wayHouse = prompt("Do you want to go up, or down to the basement?").toLocaleLowerCase();
        if(wayHouse === "up") {
            upDownHouse = true;
            return("up")
        }else if(wayHouse === "down") {
            upDownHouse = true;
            return("down")
        }else {
            alert("Choose between up or down")
        }
    }
}

const upstairs = () => {
    let wayRightLeft = false
    while(!wayRightLeft) {
        let wayUpstairs = prompt ("Do you want to go to the left room or the right one?").toLocaleLowerCase();
        if(wayUpstairs === "right") {
            wayRightLeft = true;
            return("right")
        }else if(wayUpstairs === "left") {
            wayRightLeft = true;
            return("left")
        }else {
            alert("Choose between right or left!")
        }
    }
}

const basement = () => {
    let tankJars = false
    while(!tankJars) {
        let wayBasement = prompt("Do you want to go to the `tank`, or to the `jars`?").toLocaleLowerCase();
        if(wayBasement === "tank") {
            tankJars = true;
            return("tank")
        }else if(wayBasement === "jars") {
            tankJars = true;
            return("jars")
        }else {
            alert("Choose between tank or jars")
        }
    }
}

startGame();

