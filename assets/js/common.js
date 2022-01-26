window.onload = start;

function initMenu() {
    const weekNodeList = Array.from(document.querySelectorAll("h2")).filter(
        (m) => m.innerText.includes("Week")
    );

    const menu = document.querySelector(".menu");

    const weekItemList = weekNodeList.map((m, i) => {
        const menuItem = document.createElement("a");
        menuItem.classList = `${i == 0 ? "active item" : "item"}`;
        menuItem.onclick = () => {
            m.parentElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            setTimeout(() => {
                $(m.parentElement).transition("bounce");
            }, 800);
            const menuItemNodeList = Array.from(
                document.querySelectorAll(".menu a")
            );
            menuItemNodeList.find((j) =>
                j.classList.contains("active")
            ).classList = "item";
            menuItemNodeList.find((j) => j.innerText == m.innerText).classList =
                "active item";
        };
        menuItem.appendChild(document.createTextNode(m.innerText));

        return menuItem;
    });

    weekItemList.forEach((m) => menu.appendChild(m));
}

function addCopyright() {
    const footerDiv = document.querySelector("footer div");
    const year = new Date().getFullYear();

    const copyright = document.createElement("p");
    copyright.innerHTML = `Copyright &copy; 2021-${year} Piotr Bogdan Placzek (20097618)`;

    footerDiv.appendChild(copyright);
}

function start() {
    initMenu();

    addCopyright();
}