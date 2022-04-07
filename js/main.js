let container = document.querySelector('.container');
let apps = document.createElement('div');
apps.className = "app";
container.appendChild(apps);
let title = document.createElement('h1');
title.innerHTML = "AGE CALCULATOR";
apps.appendChild(title)
let inputGroup = document.createElement('div');
let label = document.createElement('label');
let inputText = document.createElement('input');
let btnSubmitAge = document.createElement('button');
let resultAgeCalculator = document.createElement('div');
inputText.type = "date";
inputText.className = "formInput";
inputGroup.setAttribute('class','input__group');
label.innerHTML = "Your Birthday";
btnSubmitAge.innerHTML = "Check Age";
btnSubmitAge.className = "buttonAge";
resultAgeCalculator.className = "resultAge";
resultAgeCalculator.innerHTML = "Wahh kosong nih..."
apps.appendChild(inputGroup);
inputGroup.appendChild(label);
inputGroup.appendChild(inputText);
inputGroup.appendChild(btnSubmitAge);
inputGroup.appendChild(resultAgeCalculator)

// manipulation data 
let smallDevice = window.matchMedia("(max-width : 320px)");
smallDevice.addListener(handleDeviceScreen)
function handleDeviceScreen (e){
    if(e.matches){
        window.alert('Mohon maaf, Apps ini tidak bisa diakses dilayar 320px');
        container.classList.toggle('smallDevice').innerHTML = "Mohon maaf, tidak bisa dibuka dilayar ukuran dilayar 320px"
    }else{
        document.querySelector('.smallDevice').classList.remove('smallDevice');
    }

}
let btnformInput = document.querySelector('.buttonAge');
btnformInput.addEventListener('click',() => {
let dateValue = new Date(document.querySelector('.formInput').value);
let dateValueNew = new Date();
let timeDeff = Math.abs(dateValueNew.getTime() - dateValue.getTime());
let diffDays = Math.ceil(timeDeff / (1000 * 3600 * 24));
document.querySelector('.resultAge').innerHTML = Math.round(diffDays / 365)  + " Tahun";
});