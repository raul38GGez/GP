// Este arquivo DEVE ser incluído em todas as páginas que usam o dropdown dinâmico (inclusive home e editPerfil).

var token = localStorage.getItem("token");

if (!token) {
    Swal.fire({
        title: "Página restrita!",
        text: "Entre em uma conta para acessar essa página",
        icon: "error"
    }).then(() => {
        window.location.href = "login.html";
    });
}

var cargo = localStorage.getItem("cargo");

$(document).ready(function () {
    var token = localStorage.getItem("token");
    if (!token) {
        Swal.fire({
            title: "Página restrita!",
            text: "Entre em uma conta para acessar essa página",
            icon: "error"
        }).then(() => {
            window.location.href = "login.html";
        });
        return;
    }

    var cargo = localStorage.getItem("cargo");
    var dropdown = document.getElementById("dropdownMenu");
    if (!dropdown) {
        console.warn("dropdownMenu não está no DOM!");
        return;
    }

    // Monta o menu de acordo com o cargo
    if (cargo === 'ADM') {
        dropdown.innerHTML = `
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-user-pen"></i><a id="editPerfil" href="editPerfil.html">Perfil</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-clock"></i><a href="historicoAtividade.html">Meu Histórico</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-thumbtack"></i><a href="minhasReservas.html">Minhas Reservas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i style="padding-right: 7px; padding-left: 1px;" class="fa-solid fa-calendar-days"></i><a href="meusEmprestimos.html">Meus Empréstimos</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-user"></i><a href="GerenciarUsuarios.html">Gerenciar Usuários</a>
                </div>
            </li>
            <li class="menu-item" id="relatorios">
                <div class="item-relatorios">
                    <i class="fa-solid fa-file-export"></i>
                    <a href="javascript:void(0);" class="submenu-toggle">Relatórios</a>
                </div>
                <ul class="submenu">
                    <li class="submenu-item"><a id="relatorioMultas" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Multas</a></li>
                    <li class="submenu-item"><a id="relatorioLivros" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Livros</a></li>
                    <li class="submenu-item"><a id="relatorioUsuarios" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Usuários</a></li>
                    <li class="submenu-item"><a id="relatorioEmprestimos" href="#"><i class="fa-solid fa-file-export"></i>Relatório de Emprestimos</a></li>
                </ul>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-wallet"></i><a href="gerenciarMultas.html">Gerenciar Multas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-book"></i><a href="editLivros.html">Gerenciar Livros</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-sync-alt"></i><a href="ListagemReservas.html">Reservas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-bookmark"></i><a href="ListagemEmprestimos.html">Empréstimos</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-brands fa-pix"></i><a href="parametrizacao.html">Parametrizar pix</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
                </div>
            </li>
        `;
    } else if (cargo === 'Bibliotecario') {
        dropdown.innerHTML = `
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-user-pen"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-paperclip"></i><a href="historicoAtividade.html">Minhas Reservas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-sync-alt"></i><a href="meusEmprestimos.html">Meus Empréstimos</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-brands fa-pix"></i><a href="parametrizacao.html">Parametrizar pix</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
                </div>
            </li>
        `;
    } else {
        dropdown.innerHTML = `
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-user-pen"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-clock"></i><a href="historicoAtividade.html">Histórico de Reservas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-sync-alt"></i><a href="minhasReservas.html">Minhas Reservas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-calendar-days"></i><a href="meusEmprestimos.html">Meus Empréstimos</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
                </div>
            </li>
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
                </div>
            </li>
        `;
    }

    // Configuração do botão do menu principal
    function configurarDropdown(buttonId, menuId) {
        var button = document.getElementById(buttonId);
        var menu = document.getElementById(menuId);

        if (button && menu) {
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                menu.classList.toggle("show");
            });

            document.addEventListener("click", function (event) {
                if (!button.contains(event.target) && !menu.contains(event.target)) {
                    menu.classList.remove("show");
                }
            });
        }
    }
    configurarDropdown("menuButton", "dropdownMenu");

    // Os links de relatórios são atualizados
    function atualizarLinksRelatorios() {
        const linksRelatorios = {
            relatorioMultas: "/multas_relatorio",
            relatorioLivros: "/livros_relatorio",
            relatorioUsuarios: "/usuarios_relatorio",
            relatorioEmprestimos: "/emprestimos_relatorio"
        };
        for (let id in linksRelatorios) {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.href = `${typeof ipPython2 !== "undefined" ? ipPython2 : ""}${linksRelatorios[id]}`;
            }
        }
    }
    atualizarLinksRelatorios();
});

// DELEGAÇÃO UNIVERSAL PARA O SUBMENU DE RELATÓRIOS
// (Só precisa estar incluído em UM JS que é carregado em todas as páginas)
$(document).on('click', '#relatorios .submenu-toggle', function (e) {
    e.preventDefault();
    $('#relatorios .submenu').toggleClass('show');
});

// Função sair (pode ficar fora do ready)
function sair() {
    localStorage.clear();
    window.location.href = "login.html";
}