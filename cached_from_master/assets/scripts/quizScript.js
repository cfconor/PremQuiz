//set maps for Quiz answers
//each entry is a key value pair with the key being the season played, value being the players and their relevant goals scored for that season
let goalScorers = new Map();

goalScorers.set(
    '2018', {"Mohamed Salah" : 22,
            "Sergio Aguero" : 21,
            "Eden Hazard" : 16,
            "Richarlison" : 13,
            "Harry Kane" : 17,
            "Jamie Vardy" : 18,
            "Pierre-Emerick Aubameyang" : 22},
);

goalScorers.set(
    '2017', {"Mohammed Salah" : 32,
            "Sergio Aguero" : 21,
            "Eden Hazard" : 12,
            "Raheem Sterling" : 18,
            "Harry Kane" : 30,
            "Jamie Vardy" : 20,
            "Pierre-Emerick Aubameyang" : 10},
);

goalScorers.set(
    '2010', {"Dimitar Berbatov" : 20,
            "Carlos Tevez" : 20,
            "Chicarito" : 13,
            "Robin van Persie" : 18,
            "DJ Campbell" : 13,
            "Andy Carroll" : 13,
            "Darren Bent" : 17},
);

goalScorers.set(
    '2012', {"Christian Benteke" : 20,
            "Gareth Bale" : 21,
            "Luis Suárez" : 23,
            "Robin van Persie" : 26,
            "Michu" : 18,
            "Romelu Lukaku" : 17},
);



//generate a random integer between min and max values
//taken from - https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//assign the players and questions, uses inputMap as the data to retrieve the players from, the ValToCompare is set to "goals" to choose goals, but can be later updated to choose other parameters in a future release 
function setQuestionAndPlayers(inputMap,ValToCompare) {
    let questionString;
    let playerAScore,playerBScore,playerCScore;
    let playerAName,playerBName,playerCName;

    
    let chosenPlayersIterable = chooseThreePlayers(inputMap);
    
    let outputMap = new Map();
    
    

    if(ValToCompare == "goals") {
        let playerSeasonData = goalScorers.get(chosenPlayersIterable[0]);
    
        playerAName = chosenPlayersIterable[1];
        playerBName = chosenPlayersIterable[2];
        playerCName = chosenPlayersIterable[3];

        playerAScore = playerSeasonData[playerAName];
        playerBScore = playerSeasonData[playerBName];
        playerCScore = playerSeasonData[playerCName];

        let seasonString = chosenPlayersIterable[0] + "-" + (parseInt(chosenPlayersIterable[0],10) + 1);

        questionString = `Who scored more goals in the ${seasonString} season of the Premier League?`;

        //assign values to outputMap
        outputMap.set("question",questionString);
        outputMap.set(playerAName,playerAScore);
        outputMap.set(playerBName,playerBScore);
        outputMap.set(playerCName,playerCScore);
    }

    
    return outputMap;
}
//choose 3 random players from the inputMap argument
function chooseThreePlayers(inputMap) {
    let mapItemCount = inputMap.size;
    let chosenKeyNum = getRndInteger(0,mapItemCount);
    let mapKeys = inputMap.keys();
    let chosenMapKey;

    let loopCounter = 0;
    for(key of mapKeys) {
        if(chosenKeyNum == loopCounter) {
            chosenMapKey = key;
            break;
        }
        else {
            loopCounter++;
        }
    }

    
    
    //create return array, with player names, and the season chosen for this question. the argument passed is the season, with the players list within that object
    let chosenPlayers = pickThree(inputMap.get(chosenMapKey));

    chosenPlayers.unshift(chosenMapKey);

    return chosenPlayers;
}

//from the inputIterable, extract all the players from a particular season and return three random players 
function pickThree(inputIterable) {
    let namesList = [];
    let chosenNameIndexes = [];
    let chosenNames = [];

    for(key in inputIterable) {
        namesList.push(key);
    }
    //while less than 3 players have been chosen
    while(chosenNameIndexes.length < 3) {
        let chosenIndex = getRndInteger(0,namesList.length);
        let alreadyPicked = chosenNameIndexes.includes(chosenIndex);

        if(alreadyPicked == false) {
            chosenNameIndexes.push(chosenIndex);
        }
    }

    for(loopCounter = 0; loopCounter < chosenNameIndexes.length;loopCounter++) {
        


        chosenNames.push(namesList[chosenNameIndexes[loopCounter]]);
    }
    return chosenNames;
}

//function to determine what player was selected and if it was the correct answer
function playerButtonClicked(divID,chosenPlayerName,otherPlayerA,otherPlayerB,questionPlayerMap) {
    let isCorrect;
    let chosenPlayerScore = questionPlayerMap.get(chosenPlayerName);
    let otherPlayerAScore = questionPlayerMap.get(otherPlayerA);
    let otherPlayerBScore = questionPlayerMap.get(otherPlayerB);


    if(chosenPlayerScore >= otherPlayerAScore && chosenPlayerScore >= otherPlayerBScore) {
        isCorrect = true;
        answerTrue = true;
        $(divID).addClass("btn-success");

        $("#questionInput").html(`Correct!<br>${chosenPlayerName}: ${chosenPlayerScore}`)

        currentScore++;
        $("#currentScore").html(currentScore);

        sessionStorage.setItem("currentScore", currentScore);

        enableButton("#nextQuestion");
        disableButton("#playerA");
        disableButton("#playerB");
        disableButton("#playerC");
        return isCorrect;
    } else if(chosenPlayerScore < otherPlayerAScore || chosenPlayerScore < otherPlayerBScore){
        isCorrect = false;
        
        $(divID).addClass("btn-danger");
        
        //show correct answer
        if(otherPlayerAScore == otherPlayerBScore) {
            //if both others were higher scores
            $(`button:contains('${otherPlayerA}')`).removeClass("btn-secondary").removeClass("btn-warning").addClass("btn-outline-success");
            $(`button:contains('${otherPlayerB}')`).removeClass("btn-secondary").removeClass("btn-warning").addClass("btn-outline-success");

            $("#questionInput").html(`Incorrect!<br>${otherPlayerA}: ${otherPlayerAScore}<br>${otherPlayerB}: ${otherPlayerBScore}`);


        }else if(otherPlayerAScore > otherPlayerBScore) {
            //if otherPlayerA is top score
            $(`button:contains('${otherPlayerA}')`).removeClass("btn-secondary").removeClass("btn-warning").addClass("btn-outline-success");

            $("#questionInput").html(`Incorrect!<br>${otherPlayerA}: ${otherPlayerAScore}`);

            

        } else {
            //if otherPlayerB is top score
            $(`button:contains('${otherPlayerB}')`).removeClass("btn-secondary").removeClass("btn-warning").addClass("btn-outline-success");

            $("#questionInput").html(`Incorrect!<br>${otherPlayerB}: ${otherPlayerBScore}`);
        }
        
        disableButton("#playerA");
        disableButton("#playerB");
        disableButton("#playerC");
        tryAgain();
        return isCorrect;
    } 
}

//enable the user to try again, changing the 'next question' to 'try again' and reseting the score 
function tryAgain() {
    enableButton("#nextQuestion");
    $("#nextQuestion").html("Try Again?");
    sessionStorage.setItem("currentScore", 0);
}

function disableButton(divID) {
    $(divID).attr("disabled","disabled");
}

function enableButton(divID) {
    $(divID).removeAttr("disabled");
}
//callback function to ensure that the while loop below waits for one of the player buttons to be clicked when a question is asked
function waitForClick(inputMap) {
    $("#playerA").click(function(){
        return playerButtonClicked("#playerA",$("#playerA").html(),$("#playerB").html(),$("#playerC").html(),inputMap);
    });

    $("#playerB").click(function(){
        return playerButtonClicked("#playerB",$("#playerB").html(),$("#playerA").html(),$("#playerC").html(),inputMap);
    });
    
    $("#playerC").click(function(){
        return playerButtonClicked("#playerC",$("#playerC").html(),$("#playerB").html(),$("#playerA").html(),inputMap);
    });
}

//controls the sequence of assignment and manipulation to the HTML 
function questionLoop(onClickCallback){
    let questionMap;


    //reset all player buttons
    $("#playerA").removeClass("btn-success btn-warning btn-outline-success");
    $("#playerB").removeClass("btn-success btn-warning btn-outline-success");
    $("#playerC").removeClass("btn-success btn-warning btn-outline-success");

    enableButton("#playerA");
    enableButton("#playerB");
    enableButton("#playerC");

    //assign the questionMap to contain the question, and the three player buttons that need to be assigned
    questionMap = setQuestionAndPlayers(goalScorers,"goals");
    
    let questionString = questionMap.get("question");
    questionMap.delete("question");
    
    let playerNames = questionMap.keys();

    $("#questionInput").html(questionString);
    $("#playerA").html(playerNames.next().value);
    $("#playerB").html(playerNames.next().value);
    $("#playerC").html(playerNames.next().value);

    answerTrue = onClickCallback(questionMap);
    //call function for each answer when clicked, then disable buttons
    

    currentScore = sessionStorage.getItem("currentScore");

    //log current score
    $("#currentScore").html(currentScore);
}


let currentScore = 0;
let answerTrue = true;
let username = new Date();

$( document ).ready(function() {
    while(answerTrue == true) {
        questionLoop(waitForClick);
    }

    $("#nextQuestion").click(function() {
        window.location.reload();
    });
});