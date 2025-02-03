function input_pswd(id_input, id_img) {
    input = document.getElementById(id_input);
    img = document.getElementById(id_img);

    if (input.type == "password") {
        input.type = "text"
        img.style.backgroundImage = 'url("../imagens/eye-open-svgrepo-com.png")';
    } else {
        input.type = "password"
        img.style.backgroundImage = 'url("../imagens/pswd_desmarcado.png")';
    }
    
    return;
}