function startclassify() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ziH0zvgCo/model.json", modelReady);
}

function modelReady() {
    console.log("Model is Ready")
    classifier.classify(getResults);
}

function getResults(error, results) {
    if (error){
        console.log("Error");
        window.alert("Error");
    }
    else if(results){
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("resultaccu").innerHTML = "Accuracy - " + Math.floor(results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result").style.color = "rgb(" + random_r + ", " + random_g + ", " + random_b + ")";
        document.getElementById("resultaccu").style.color = "rgb(" + random_r + ", " + random_g + ", " + random_b + ")";

        img = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        confident = results[0].label;

        if(confident == "Clapping"){
            img.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(confident == "Snap") {
            img.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(confident == "Mouse wheel") {
            img.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else {
            img.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}