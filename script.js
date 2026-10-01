/* ==========================================
   MENU MOBILE
========================================== */

const navToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {

    const menuAberto =
        navLinks.classList.toggle("open");

    navToggle.setAttribute(
        "aria-expanded",
        menuAberto
    );

    navToggle.textContent =
        menuAberto ? "×" : "☰";
});


/* Fechar menu ao clicar em um link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            navToggle.textContent = "☰";

        });

    });


/* ==========================================
   ANO AUTOMÁTICO
========================================== */

const year = document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* ==========================================
   MODAIS
========================================== */

const modalOverlay =
    document.getElementById("modalOverlay");

const modalContent =
    document.getElementById("modalContent");

const modalClose =
    document.getElementById("modalClose");


const modalData = {

    bullying: {

        title: "Como reconhecer o bullying?",

        body: `

            <p>
                Bullying envolve comportamentos de agressão
                ou humilhação que podem acontecer presencialmente
                ou no ambiente digital.
            </p>

            <ul>

                <li>
                    Apelidos ofensivos, insultos ou humilhações.
                </li>

                <li>
                    Ameaças, intimidação ou agressões.
                </li>

                <li>
                    Exclusão intencional e repetida de alguém.
                </li>

                <li>
                    Divulgação de conteúdos para constranger
                    outra pessoa.
                </li>

            </ul>

            <p style="margin-top:15px">

                Se algo está acontecendo com você ou com
                alguém próximo, procure uma pessoa adulta
                de confiança.

            </p>

        `
    },


    apoio: {

        title:
            "Você não precisa resolver tudo sozinho",

        body: `

            <p>

                Quando uma situação de bullying acontece,
                buscar apoio pode tornar mais fácil encontrar
                uma solução segura.

            </p>

            <ul>

                <li>
                    Escolha uma pessoa adulta em quem você confia.
                </li>

                <li>
                    Explique o que aconteceu e como isso está
                    afetando você.
                </li>

                <li>
                    Se tiver registros de situações online,
                    guarde as evidências.
                </li>

                <li>
                    Se a primeira pessoa não ajudar,
                    procure outra pessoa responsável.
                </li>

            </ul>

        `
    },


    online: {

        title:
            "Cuidados no ambiente digital",

        body: `

            <p>

                No cyberbullying, algumas atitudes simples
                podem ajudar a preservar sua segurança e
                facilitar a busca por apoio.

            </p>

            <ul>

                <li>
                    Não responda a provocações ou ameaças.
                </li>

                <li>
                    Bloqueie e denuncie perfis ou conteúdos
                    quando apropriado.
                </li>

                <li>
                    Guarde prints e outros registros importantes.
                </li>

                <li>
                    Converse com um adulto de confiança ou
                    responsável pela escola.
                </li>

            </ul>

        `
    }

};


/* Abrir modal */

document
    .querySelectorAll("[data-modal]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const data =
                modalData[
                    button.dataset.modal
                ];

            modalContent.innerHTML = `

                <h3>
                    ${data.title}
                </h3>

                ${data.body}

            `;

            modalOverlay.classList.add("active");

            modalOverlay.setAttribute(
                "aria-hidden",
                "false"
            );

            modalClose.focus();

        });

    });


/* Fechar modal */

function closeModal() {

    modalOverlay.classList.remove("active");

    modalOverlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


modalClose.addEventListener(
    "click",
    closeModal
);


/* Fechar clicando fora */

modalOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === modalOverlay
        ) {

            closeModal();

        }

    }
);


/* Fechar com ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* ==========================================
   TOAST / MENSAGEM
========================================== */

const toast =
    document.getElementById("toast");


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* ==========================================
   FORMULÁRIO
========================================== */

const form =
    document.getElementById("reportForm");


form.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        /* Verifica os campos */

        if (!form.checkValidity()) {

            form.reportValidity();

            return;

        }


        /* Mensagem */

        showToast(
            "Demonstração concluída. Nenhum dado foi enviado ou armazenado."
        );


        /* Limpa o formulário */

        form.reset();

    }
);