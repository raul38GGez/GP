// Função para montar o menu dinamicamente
function montarMenuDropdown() {
    var cargo = localStorage.getItem("cargo");
    var dropdown = document.getElementById("dropdownMenu");
    if (!dropdown) return;

    if (cargo === 'ADM') {
        dropdown.innerHTML = `
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fa-solid fa-user-pen"></i><a id="editPerfil" href="editPerfil.html">Perfil</a>
                </div>
            </li>
            <!-- ... outros itens ... -->
            <li class="menu-item" id="relatorios">
                <div class="item-relatorios">
                    <i class="fa-solid fa-file-export"></i>
                    <a href="#" class="submenu-toggle">Relatórios</a>
                </div>
                <ul class="submenu">
                    <li class="submenu-item"><a id="relatorioMultas" href="#">Relatório de Multas</a></li>
                    <li class="submenu-item"><a id="relatorioLivros" href="#">Relatório de Livros</a></li>
                    <li class="submenu-item"><a id="relatorioUsuarios" href="#">Relatório de Usuários</a></li>
                    <li class="submenu-item"><a id="relatorioEmprestimos" href="#">Relatório de Empréstimos</a></li>
                </ul>
            </li>
            <!-- ... outros itens ... -->
            <li class="menu-item">
                <div class="dropdown-linha">
                    <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
                </div>
            </li>
        `;
    }
    // ... opções para Bibliotecario e outros cargos ...
}

// Sempre monte o menu após o DOM estar pronto
$(document).ready(function () {
    montarMenuDropdown();

    // Botão do menu principal
    $("#menuButton").on("click", function (e) {
        e.stopPropagation();
        $("#dropdownMenu").toggleClass("show");
    });
    $(document).on("click", function (e) {
        if (!$(e.target).closest('.menu-container').length) {
            $("#dropdownMenu").removeClass("show");
        }
    });
});

// Delegação universal — isso funciona mesmo com menu dinâmico!
$(document).on('click', '#relatorios .submenu-toggle', function (e) {
    e.preventDefault();
    $('#relatorios .submenu').toggleClass('show');
});

// Função sair
function sair() {
    localStorage.clear();
    window.location.href = "login.html";
}