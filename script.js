let characters = [];

fetch("data/characters.json")
.then(response => response.json())
.then(data => {
    characters = data;
    renderHome();
});

function renderHome(){

    const home = document.getElementById("home");
    home.innerHTML = "";

    characters.forEach((c, index) => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${c.name}</h3>
        `;

        card.onclick = () => openCharacter(index);

        home.appendChild(card);
    });
}

function openCharacter(index){

    const c = characters[index];
    const page = document.getElementById("page");

    let html = `
        <button class="back" onclick="goBack()">← 返回角色列表</button>
        <h2>${c.name}</h2>

        <h3>技能介紹</h3>
    `;

    c.skills.forEach(skill => {
        html += `
            <div class="skill">
                <img src="${skill.img}" alt="技能圖片">
                <p>${skill.text}</p>
            </div>
        `;
    });

    html += `
        <h3>技能接法</h3>
        <div class="combo">
    `;

    c.combo.forEach(step => {
        html += `• ${step}<br>`;
    });

    html += `
        </div>
    `;

    page.innerHTML = html;

    document.getElementById("home").style.display = "none";
    page.style.display = "block";
}

function goBack(){
    document.getElementById("page").style.display = "none";
    document.getElementById("home").style.display = "grid";
}