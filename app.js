function check(){
    let d_text = document.getElementById('dtxt');
    let text = document.getElementById('txt');

    let numb = document.getElementById('num').value;
    let d_numb = document.getElementById('d-num').value;

    let modulus = numb%d_numb;
    let number = numb/d_numb;

    if (modulus == 0){
        text.innerHTML = "Is Divisible";
        d_text.innerHTML = "After Divisibility: "+number;
    }

    else{
        text.innerHTML = "Isn't Divisible";
    }
}