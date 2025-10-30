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
});

document.addEventListener("DOMContentLoaded", function() {
            
            const steps = document.querySelectorAll(".step");
            const nextButton = document.querySelector(".btn-proximo");
            const form = document.querySelector("#cadastro-form");
            if (nextButton) {
                nextButton.addEventListener("click", () => {
                    const currentStep = steps[0];
                    const inputs = currentStep.querySelectorAll("input[required], select[required]");
                    let isValid = true;   
                    inputs.forEach(input => {
                        if (!input.checkValidity()) {
                            isValid = false;
                            input.reportValidity();
                        }
                    });
                    if (isValid) {
                        steps[0].classList.remove("active");
                        steps[1].classList.add("active");
                    }
                });
            }
        });