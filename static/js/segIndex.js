document.addEventListener('DOMContentLoaded', function () {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var logoHeader = document.getElementById("logoHeader");

    function preencherMenu(html) {
        if (dropdownMenu) dropdownMenu.innerHTML = html;
    }

    // Sempre mostra só login e cadastro
    if (logoHeader) logoHeader.href = "home.html";
    preencherMenu(`
        <li class="menu-item">
            <div class="dropdown-linha">
                <i class="fa-solid fa-right-to-bracket"></i><a href="login.html">Login</a>
            </div>
        </li>
        <li class="menu-item">
            <div class="dropdown-linha">
                <i class="fa-solid fa-user-plus"></i><a href="cadastro.html">Cadastre-se</a>
            </div>
        </li>
    `);

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