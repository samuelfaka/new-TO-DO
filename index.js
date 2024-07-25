// const clickme = () => {
//     const main = document.querySelector(".box");
//     const input = document.querySelector(".in2").value;
//     const box = document.querySelector(".box");
//     box.style.display ="block"
    
//     if (!input) {
//         return alert('Enter something');
//     }
    
//     const liElement = document.createElement("li");
//     liElement.textContent = input;
//     liElement.style.color = "black";
//     liElement.style.fontSize = "15px";
//     liElement.style.gap = "20px"
//     liElement.style.marginBottom = "5px";
    
//     const hrElement = document.createElement("hr");
//     hrElement.style.width = "24vw";
    
//     let ulElement = document.querySelector(".box ul");
//     if (!ulElement) {
//         ulElement = document.createElement("ul");
//         document.querySelector(".box").appendChild(ulElement);
//     }
    
//     ulElement.appendChild(liElement);
//     ulElement.appendChild(hrElement);
//     main.appendChild(ulElement)
    
//     document.querySelector(".in2").value = '';
    
//     document.querySelector(".box").style.display = "flex";
// };

const change = document.querySelector(".change");
const sec = document.querySelector(".sec");
const box = document.querySelector(".box");
const both = document.querySelector(".both");
const btn = document.querySelector(".btn");
const user1 = document.querySelector(".user1")

let isBlack = false;

change.addEventListener("click", function () {
    if (isBlack) {
        user1.style.background = "white";
        sec.style.background = "white";
        box.style.background = "white";
        both.style.background = "white";
        btn.style.background = "white";
    } else {
        user1.style.background = "black";
        sec.style.background = "black";
        box.style.background = "black";
        both.style.background = "black";
        btn.style.background = "black";
    }
    isBlack = !isBlack;
});

const clickme = () => {
    const main = document.querySelector(".box");

    const check = document.createElement("input");
    check.setAttribute("type", "radio");

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