function enviar_dados() {
    

    let name = document.getElementById("input_name");
    let email = document.getElementById("input_email");
    let password = document.getElementById("input_password");
    let confirm = document.getElementById("input_confirm");


    if(name.value !== '' && email.value !== '' && password !== '' && confirm !== ''){


        if(password.value == confirm.value){
            document.getElementById("form_register").submit();
        }
        else{
            alert("Erro! senhas nao coincidem!");
        }


    }


    else{
        alert("Um dos campos está vazio!");
    }


}