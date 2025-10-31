function mostrarErro(inputElement, mensagem) {
    let errorSpan = inputElement.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains("error-message")) {
        errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        inputElement.insertAdjacentElement("afterend", errorSpan);
    }
    errorSpan.textContent = mensagem;
    inputElement.classList.add("input-error");
}

function limparErro(inputElement) {
    let errorSpan = inputElement.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains("error-message")) {
        errorSpan.textContent = "";
    }
    inputElement.classList.remove("input-error");
}

function validaEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function templateHome() {
    return `
    <section id="sobre">
        <img src="imagens/logofazbem.png" width="250" alt="Logo da ONG Faz Bem">
        <h1>Bem-vindo à Faz Bem</h1>
        <p class="missao">
            A Faz Bem é uma organização comprometida com a transformação social, por meio da solidariedade, educação e alimentação, nossos projetos atuam diretamente nas necessidades da comunidade, 
            com base em nossos valores de empatia, inclusão e desenvolvimento humano, seguimos construindo um futuro mais justo e solidário.
        </p>
        <img src="imagens/trabalhovoluntario.jpg" alt="Grupo de voluntários trabalhando juntos e sorrindo">
    </section>
    <section id="contato">
        <h2>Informações de Contato</h2>
        <p><span>Email:</span> fazbem.ong@gmail.com</p>
        <p><span>Telefone:</span> (41) 99873-4882.</p>
        <address>
            Rua Fictícia, 123 - São Paulo, SP
        </address>
    </section>
    `;
}

function templateProjetos() {
    return `
    <section id="sobre">
        <img src="imagens/logofazbem.png" width="250" alt="Logo da ONG Faz Bem">
        <h1>Nossos Projetos</h1>
        <p class="missao">
            A ONG Faz Bem tem como missão promover o bem-estar social e ambiental por meio de ações solidárias e educativas.
            Nossos projetos buscam envolver a comunidade em iniciativas que gerem impacto positivo e duradouro.
        </p>
    </section>
    <div class="projetos-container">
        <article class="projeto-card">
            <img src="imagens/trabalhonacozinha.jpg" alt="Voluntários trabalhando na cozinha comunitária">
            <h2>Projeto "Cozinha Comunitária"</h2>
            <p> O projeto Cozinha Comunitária garante acesso à alimentação saudável para pessoas em vulnerabilidade...</p>
        </article>
        <article class="projeto-card">
            <img src="imagens/voluntariosescolas.jpg" alt="Voluntários ajudando crianças em reforço escolar">
            <h2>Projeto "Reforço Escolar"</h2>
            <p> O projeto Reforço Escolar oferece suporte pedagógico a estudantes com dificuldades de aprendizagem...</p>
        </article>
    </div> 
    <section id="voluntariado" class="cta-secao">
        <h2>Seja um Voluntário</h2>
        <p>Você pode fazer a diferença! Nossos projetos dependem de pessoas como você.</p>
        <a href="#participe" class="cta-botao">Quero ser voluntário</a>
    </section>
    <section id="doacoes" class="cta-secao">
        <h2>Como Doar</h2>
        <p> Sua doação transforma vidas. Existem várias formas de contribuir...<br><br>
            <span>Via WhatsApp ou Pix:</span> (41) 99873-4882.<br><br>
            <span>Por e-mail:</span> fazbem.ong@gmail.com<br><br>
            Cada gesto de solidariedade faz a diferença. Junte-se a nós e ajude a espalhar o bem!</p>
        <a href="#participe" class="cta-botao">Fazer uma doação</a>
    </section>
    `;
}

function templateParticipe() {
    return `
    <section class="pagina-header">
        <h1>Participe!</h1>
        <p>Preencha o formulário abaixo para se cadastrar como voluntário ou doador.</p>
    </section>
    <form id="form-cadastro" novalidate>
        <fieldset>
            <legend>Dados Pessoais</legend>
            <div>
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome_completo" required>
            </div>
            <div>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="nascimento">Data de Nascimento:</label>
                <input type="date" id="nascimento" name="data_nascimento" required>
            </div>
            <div>
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" 
                       placeholder="123.456.789-00"
                       pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" 
                       title="Digite o CPF no formato: 123.456.789-00"
                       required>
            </div>
            <div>
                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone"
                       placeholder="(11) 98765-4321"
                       pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                       title="Digite o Telefone no formato: (11) 98765-4321"
                       required>
            </div>
        </fieldset>
        <fieldset>
            <legend>Endereço</legend>
            <div>
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep"
                       placeholder="12345-678"
                       pattern="\\d{5}-\\d{3}"
                       title="Digite o CEP no formato: 12345-678"
                       required>
            </div>
            <div>
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>
            </div>
            <div>
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>
            </div>
            <div>
                <label for="estado">Estado:</label>
                <select id="estado" name="estado" required>
                    <option value="">Selecione...</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
            </div>
        </fieldset>
        <button type="submit" class="cta-botao">Enviar Cadastro</button>
    </form>
    `;
}

function handleFormValidation(event) {
    event.preventDefault();
    let isValid = true;

    const nomeInput = document.querySelector("#nome");
    if (nomeInput.value.trim().length < 3) {
        isValid = false;
        mostrarErro(nomeInput, "O nome deve ter pelo menos 3 caracteres.");
    } else {
        limparErro(nomeInput);
    }

    const emailInput = document.querySelector("#email");
    if (!validaEmail(emailInput.value)) {
        isValid = false;
        mostrarErro(emailInput, "Por favor, insira um e-mail válido.");
    } else {
        limparErro(emailInput);
    }

    const cpfInput = document.querySelector("#cpf");
    if (cpfInput.value.length !== 14) {
        isValid = false;
        mostrarErro(cpfInput, "O CPF está incompleto.");
    } else {
        limparErro(cpfInput);
    }

    if (isValid) {
        console.log("Formulário válido. Enviando...");
        alert("Cadastro realizado com sucesso!");
        // event.target.submit(); 
    } else {
        console.log("Formulário inválido.");
    }
}

function applyInputMasks() {
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
}

document.addEventListener("DOMContentLoaded", function() {

    const btnMobile = document.getElementById("btn-mobile");
    const mainNav = document.getElementById("main-nav");
    const mainElement = document.querySelector("main");

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
    
    function closeMobileMenu() {
        if (mainNav.classList.contains("active")) {
            mainNav.classList.remove("active");
            btnMobile.setAttribute("aria-expanded", "false");
            btnMobile.setAttribute("aria-label", "Abrir menu");
        }
    }
    
    function ativarScriptsFormulario() {
        const formCadastro = document.querySelector("#form-cadastro");
        if (formCadastro) {
            formCadastro.addEventListener("submit", handleFormValidation);
        }
        applyInputMasks();
    }

    function carregarConteudo() {
        const hash = window.location.hash;
        closeMobileMenu();

        if (hash === "#projetos") {
            mainElement.innerHTML = templateProjetos();
        } else if (hash === "#participe") {
            mainElement.innerHTML = templateParticipe();
            ativarScriptsFormulario();
        } else {
            mainElement.innerHTML = templateHome();
        }
    }

    window.addEventListener("hashchange", carregarConteudo);
    carregarConteudo(); 

});