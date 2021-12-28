function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dcDKSfum5/model.json', modelReady);
}

function modelReady() {
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("rick_roll_intensifies").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("rick_roll_grade").innerHTML = 'Accuracy' + (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("rick_roll_intensifies").style.color = "rgb("+ random_number_r +","+ random_number_g +", "+ random_number_b +")";
    document.getElementById("rick_roll_grade").style.color = "rgb("+ random_number_r +","+ random_number_g +", "+ random_number_b +")";

    img = document.getElementById('lime_sus');
    img1 = document.getElementById('cyan_sus');
    img2 = document.getElementById('red_sus');
    img3 = document.getElementById('green_sus');

    if (results[0].label == "woof") {
        img.src = 'doge gif.gif';
        img1.src = 'cate.jpg';
        img2.src = 'lione.jpg';
        img3.src - 'cowe.jpg';
    } else if (results[0].label == "meow") {
        img.src = 'doge.jpg';
        img1.src = 'cate gif.gif';
        img2.src = 'lione.jpg';
        img3.src = 'cowe.jpg';
    } else if (results[0].label == "roar") {
        img.src = 'doge.jpg';
        img1.src = 'cate.jpg';
        img2.src = 'lione gif.gif';
        img3.src = 'cowe.jpg';
    } else {
        img.src = 'doge.jpg';
        img1.src = 'cate.jpg';
        img2.src = 'lione.jpg';
        img3.src = 'cowe gif.gif';
    }
}
}