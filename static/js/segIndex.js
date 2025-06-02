// dropdown.js
// Lógica para preencher e controlar o menu dropdown de acordo com o usuário

document.addEventListener('DOMContentLoaded', function () {
    var token = localStorage.getItem("token");
    var cargo = localStorage.getItem("cargo");
    var dropdownMenu = document.getElementById("dropdownMenu");
    var logoHeader = document.getElementById("logoHeader");

    // Função para limpar e preencher o menu
    function preencherMenu(html) {
        if (dropdownMenu) dropdownMenu.innerHTML = html;
    }

    // Visitante (nenhum token)
    if (!token) {
        if (logoHeader) logoHeader.href = "home.html";
        preencherMenu(`
            <li class="menu-item">
                <div>
                    <i class="fa-solid fa-right-to-bracket"></i><a href="login.html">Login</a>
                </div>
            </li>
            <li class="menu-item">
                <div>
                    <i class="fa-solid fa-user-plus"></i><a href="cadastro.html">Cadastre-se</a>
                </div>
            </li>
        `);
    }
    // ADM
    else if (cargo === 'ADM') {
        if (logoHeader) logoHeader.href = "home.html";
        preencherMenu(`
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
                    <i class="fas fa-user"></i><a href="GerenciarUsuarios.html"> Gerenciar Usuários</a>
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
        `);
    }
    // Bibliotecário
    else if (cargo === 'Bibliotecario') {
        if (logoHeader) logoHeader.href = "home.html";
        preencherMenu(`
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
        `);
    }
    // Cliente
    else {
        if (logoHeader) logoHeader.href = "home.html";
        preencherMenu(`
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
        `);
    }

    // Dropdown toggle
    var button = document.getElementById("menuButton");
    if (button && dropdownMenu) {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle("show");
        });
        document.addEventListener("click", function (event) {
            if (!button.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }
});

// Função sair (reutilizável em qualquer página)
function sair() {
    localStorage.clear();
    window.location.href = "login.html";
}