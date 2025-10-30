document.addEventListener("DOMContentLoaded", function() {

    const cpfInput = document.querySelector("#cpf");
    const cepInput = document.querySelector("#cep");
    const telefoneInput = document.querySelector("#telefone");

    if (cpfInput) {
        cpfInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, ""); 
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = value.slice(0, 14); 
        });
    }

    if (cepInput) {
        cepInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, "");
            value = value.replace(/^(\d{5})(\d)/, "$1-$2");
            e.target.value = value.slice(0, 9);
        });
    }

    if (telefoneInput) {
        telefoneInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, "");
            value = value.replace(/^(\d{2})(\d)/, "($1) $2");
            value = value.replace(/(\d{5})(\d)/, "$1-$2");
            e.target.value = value.slice(0, 15);
        });
    }

    const btnMobile = document.getElementById("btn-mobile");
    const mainNav = document.getElementById("main-nav");

    if (btnMobile && mainNav) {
        btnMobile.addEventListener("click", function() {
            
            mainNav.classList.toggle("active");

            const isExpanded = mainNav.classList.contains("active");
            btnMobile.setAttribute("aria-expanded", isExpanded);

            if (isExpanded) {
                btnMobile.setAttribute("aria-label", "Fechar menu");
            } else {
                btnMobile.setAttribute("aria-label", "Abrir menu");
            }
        });
    }

});