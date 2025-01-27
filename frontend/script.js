function input_pswd(id_input, id_img) {
    input = document.getElementById(id_input);
    img = document.getElementById(id_img);

    if (input.type == "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
    
    return;
}