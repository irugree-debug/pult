const madinaInterface = document.getElementById("madina"),
    manualButton = document.getElementById("manual"),
    lightsButton = document.getElementById("lights"),
    airHornButton = document.getElementById("airhorn"),
    hotKeyButton = document.getElementById("hotkey");

madinaInterface.style.display = 'block';

window.addEventListener("keydown", (event) => {
    if(madinaInterface.style.display == 'block') {
        if(event.keyCode == 97) manualButton.classList.add("pult-button-active");
        if(event.keyCode == 98) lightsButton.classList.add("pult-button-active");
        if(event.keyCode == 99) airHornButton.classList.add("pult-button-active");
        if(event.keyCode == 100) hotKeyButton.classList.add("pult-button-active");
    }
});

window.addEventListener("keyup", (event) => {
    if(madinaInterface.style.display == 'block') {
        if(event.keyCode == 97) manualButton.classList.remove("pult-button-active");
        if(event.keyCode == 98) lightsButton.classList.remove("pult-button-active");
        if(event.keyCode == 99) airHornButton.classList.remove("pult-button-active");
        if(event.keyCode == 100) hotKeyButton.classList.remove("pult-button-active");
    }
});

function madinaShow(t, n, e, o) {
    madinaInterface.style = "display: block;";
    t && (manualButton.style = "background: green; box-shadow: 0px 0px 7px green;");
    n && (lightsButton.style = "background: green; box-shadow: 0px 0px 7px green;");
    e && (airHornButton.style = "background: green; box-shadow: 0px 0px 7px green;");
    o && (hotKeyButton.style = "background: green; box-shadow: 0px 0px 7px green;");
}

function madinaHide() {
    madinaInterface.style = "display: none;",
        manualButton.style = "",
        lightsButton.style = "",
        airHornButton.style = "",
        hotKeyButton.style = ""
}

cef.on("show-madina", (t, n, e, o) => {
    madinaShow(t, n, e, o);
});

cef.on("hide-madina", () => {
    madinaHide()
});
const madinaInterface = document.getElementById("madina"),
    manualButton = document.getElementById("manual"),
    lightsButton = document.getElementById("lights"),
    airHornButton = document.getElementById("airhorn"),
    hotKeyButton = document.getElementById("hotkey");

// Изначально скрываем (если в HTML не прописано)
madinaInterface.style.display = 'none';

// Функция, которую будет вызывать сервер
cef.on("pult:toggle", (state) => {
    madinaInterface.style.display = state ? 'block' : 'none';
});

window.addEventListener("keydown", (event) => {
    if(madinaInterface.style.display == 'block') {
        // 49-52 это клавиши 1, 2, 3, 4 (не на нумпаде)
        if(event.keyCode == 49) manualButton.classList.add("pult-button-active");
        if(event.keyCode == 50) lightsButton.classList.add("pult-button-active");
        if(event.keyCode == 51) airHornButton.classList.add("pult-button-active");
        if(event.keyCode == 52) hotKeyButton.classList.add("pult-button-active");
    }
});

window.addEventListener("keyup", (event) => {
    if(madinaInterface.style.display == 'block') {
        if(event.keyCode == 49) manualButton.classList.remove("pult-button-active");
        if(event.keyCode == 50) lightsButton.classList.remove("pult-button-active");
        if(event.keyCode == 51) airHornButton.classList.remove("pult-button-active");
        if(event.keyCode == 52) hotKeyButton.classList.remove("pult-button-active");
    }
});