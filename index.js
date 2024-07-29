const sunIcon = document.querySelector(".change");
const moonIcon = document.querySelector(".change1");

let isDarkMode = false;

function toggleTheme() {
    if (isDarkMode) {
        document.documentElement.style.setProperty('--background-light', 'white');
        document.documentElement.style.setProperty('--background-dark', 'white');
        document.documentElement.style.setProperty('--btn-color', 'white');
        document.documentElement.style.setProperty('--box-background', 'white');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        document.documentElement.style.setProperty('--background-light', 'black');
        document.documentElement.style.setProperty('--background-dark', 'black');
        document.documentElement.style.setProperty('--btn-color', 'black');
        document.documentElement.style.setProperty('--box-background', 'black');
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
    isDarkMode = !isDarkMode;
}

sunIcon.addEventListener("click", toggleTheme);
moonIcon.addEventListener("click", toggleTheme);


const clickme = () => {
    const main = document.querySelector(".box");

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    const hrElement = document.createElement("hr");

    const user1 = document.querySelector(".user1").value;
    if (!user1) {
        return alert("Enter something");
    }

    const golf = document.createTextNode(user1);
    const ulElement = main.querySelector("ul") || document.createElement("ul");
    const liElement = document.createElement("li");

    
    liElement.appendChild(check);
    liElement.appendChild(golf);
    liElement.style.color = "darkgray";
    liElement.style.fontSize = "15px";

    if (ulElement.children.length === 0 ) {
        liElement.style.textDecoration = "line-through";
    }

    ulElement.appendChild(liElement);
    ulElement.appendChild(hrElement);

    if (!main.contains(ulElement)) {
        main.appendChild(ulElement);
    }

    main.style.display = "block";

    document.querySelector(".user1").value = '';
};


const k4 = document.querySelector(".k4");

k4.addEventListener("click", function () {
    const main = document.querySelector(".box");
    const ulElement = main.querySelector("ul");

    if (ulElement) {
        ulElement.innerHTML = '';
    }


    main.style.display = 'block';
});