//https://teachablemachine.withgoogle.com/models/bzf_6jNT6/

function readImage() {
    // verificar se existe algum arquivo
    if (this.files && this.files[0]) {
        // cria um novo objeto de FileReader
        var file = new FileReader()
        file.onload = function (e) {
            document.getElementById("preview").src = e.target.result;
        }
    }
    file.readAsDataURL(this.files[0]);
}

document.getElementById("img-input").addEventListener("change", readImage, false);

console.log('versão ml5: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bzf_6jNT6/model.json', modeloCarregado);
function modeloCarregado(){
    console.log('Deu certo!')
}

function checar(){
    img = document.getElementById("preview")
    classifier.classify(img, gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("resultado").innerHTML = results[0].label;
        document.getElementById("precisao").innerHTML = results[0].confidence.toFixed(2);
    }
}
