var token = localStorage.getItem("token")
// var cargo = localStorage.getItem("cargo")   

if (!token) { //OBSERVAÇÃO PESSOAL! > Também da para fazer de maneira mais manual usando "token === undefined || token === null"
    Swal.fire({
        title: "Página restrita!",
        text: "Entre em uma conta para acessar essa página",
        icon: "error"
    }).then(() => {
        // Manda para a pagina de login caso o usuário não possua token, ou seja, caso o usuário não esteja logado
        window.location.href = "login.html"
    })
}

var cargo = localStorage.getItem("cargo")

console.log(cargo)

$(document).ready(function () {
    // Inicia o carrossel se presente
    if ($('.owl-carousel').length > 0) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsive: {
                0: { items: 1 },
                600: { items: 3 },
                1000: { items: 4 }
            }
        });
    }

    // Função genérica para lidar com qualquer botão/menu
    function configurarDropdown(buttonId, menuId) {

        var button = document.getElementById(buttonId);
        var menu = document.getElementById(menuId);

        if (button && menu) {
            // Abrir/fechar o menu quando clicar no botão
            button.addEventListener("click", function (event) {
                event.stopPropagation(); // Evita o fechamento imediato
                menu.classList.toggle("show");
            });

            // Fecha o menu quando clicar fora dele
            document.addEventListener("click", function (event) {
                if (!button.contains(event.target) && !menu.contains(event.target)) {
                    menu.classList.remove("show");
                }
            });
        }
    }
    // Aplica a função para os dois menus
    configurarDropdown("menuButton", "dropdownMenu");
});

function sair() {
    localStorage.clear(); // Remove todos os dados do localStorage
    window.location.href = "login.html"; // Redireciona para a página de login
}

// AQUI É O ADMINISTRADOR
if (cargo === 'ADM') {
    document.getElementById("logoHeader").href = "home.html"

    document.getElementById("dropdownMenu").innerHTML += `

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-user-pen"></i><a id="editPerfil" href="editPerfil.html">Perfil</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-clock"></i><a href="historicoAtividade.html">Meu Histórico</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-thumbtack"></i><a href="minhasReservas.html">Minhas Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i style="padding-right: 7px; padding-left: 1px;" 
                class="fa-solid fa-calendar-days"></i><a href="meusEmprestimos.html">Meus Empréstimos</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-user"></i><a href="GerenciarUsuarios.html"> Gerenciar
                        Usuários</a>
            </div>
        </li>

        <li class="menu-item" id="relatorios">
            <div class="item-relatorios">
                <i class="fa-solid fa-file-export"></i>
                <a href="javascript:void(0);" class="submenu-toggle">Relatórios</a>
            </div>
            <ul class="submenu">
                <li class="submenu-item" ><a id="relatorioMultas" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Multas</a></li>
                <li class="submenu-item"><a id="relatorioLivros" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Livros</a></li>
                <li class="submenu-item"><a id="relatorioUsuarios" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Usuários</a></li>
                <li class="submenu-item"><a id="relatorioEmprestimos" href="#"><i class="fa-solid fa-file-export"></i>Relatório de Emprestimos</a></li>
            </ul>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-wallet"></i><a href="gerenciarMultas.html">Gerenciar Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-book"></i><a href="editLivros.html">Gerenciar Livros</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sync-alt"></i><a href="ListagemReservas.html">Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-bookmark"></i><a href="ListagemEmprestimos.html">Empréstimos</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-brands fa-pix"></i><a href="parametrizacao.html">Parametrizar pix</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
            </div>
        </li>
    `;

    // AQUI É BIBLIOTECÁRIO
} else if (cargo === 'Bibliotecario') {
    document.getElementById("logoHeader").href = "home.html"

    document.getElementById("logo-site").innerHTML += `
        <a id="logoHeader" href="home.html"><img src="http://192.168.1.125:5000/static/uploads/logo/logo.png" alt="Logo"></a>
    `;

    document.getElementById("dropdownMenu").innerHTML += `

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-user-pen"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-paperclip"></i><a href="historicoAtividade.html">Minhas Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sync-alt"></i><a href="meusEmprestimos.html">Meus Empréstimos</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-brands fa-pix"></i><a href="parametrizacao.html">Parametrizar pix</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
            </div>
        </li>
    `;

}
    // AQUI É CLIENTE
 else {
    document.getElementById("logoHeader").href = "home.html"

    document.getElementById("dropdownMenu").innerHTML += `

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-user-pen"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-clock"></i><a href="historicoAtividade.html">Histórico de Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sync-alt"></i><a href="minhasReservas.html">Minhas Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-calendar-days"></i><a href="meusEmprestimos.html">Meus Empréstimos</a>
            </div>
        </li>

        
        <li class="menu-item">
            <div>
                <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
            </div>
        </li>
    `;
}

