const typeInput = document.querySelector('#type');
const nameInput = document.querySelector('#name');
const attributeInput = document.querySelector('#attribute');
const levelInput = document.querySelector('#level');
const pictureInput = document.querySelector('#picture');
const descriptionInput = document.querySelector('#description');
const atkInput = document.querySelector('#atk');
const defInput = document.querySelector('#def');
const createBtn = document.querySelector('button');

const cardPreview = document.querySelector('.card-preview');
const nameText = document.querySelector('#name-text');
const attrText = document.querySelector('#attr-text');
const starText = document.querySelector('#star-text');
const bigImg = document.querySelector('.big-img');
const descText = document.querySelector('#desc-text');
const atkText = document.querySelector('#atk-text');
const defText = document.querySelector('#def-text');

const starsSpace = document.querySelector('.stars');

class Card{
    constructor(type, name, attr, lvl, pic, desc, atk, def){
        this.type = type;
        this.name = name;
        this.attr = attr;
        this.lvl = lvl;
        this.pic = pic;
        this.desc = desc;
        this.atk = atk;
        this.def = def;
        
    }
}

class UI{
    changeCard(newCard){
        
        switch (newCard.type) {
            case 'monster':
                cardPreview.style.background = 'rgb(185, 141, 28)';
                break;
            
            case 'spell':
                cardPreview.style.background = 'rgb(58, 122, 58)';
                break;
            
            case 'trap':
                cardPreview.style.background = 'rgb(121, 61, 121)';
                break;
        }
        switch (newCard.attr) {
            case 'light':
                attrText.src = 'light.svg';
                break;
        
            case 'dark':
                attrText.src = 'dark.svg';
                break;

            case 'fire':
                attrText.src = 'fire.svg';
                break;

            case 'water':
                attrText.src = 'water.svg';
                break;

            case 'wind':
                attrText.src = 'wind.svg';
                break;
            
            case 'earth':
                attrText.src = 'earth.svg';
                break;
                    
            case 'divine':
                attrText.src = 'divine.svg';
                break;
        }
        const starArray = [];
             for (let i = 0; i < newCard.lvl; i++) {
                starArray.push(`<img src="star.svg" height="32px" width="32px" id="star-text">`);
             }
        cardPreview.innerHTML = `
        <div class="title"><h1 id="name-text">${newCard.name}</h1> <img src="${newCard.attr}.svg" width="32px" height="32px" id="attr-text"></div>
            <div class="stars">${starArray.join('')}</div>
            <img src="${newCard.pic}" class="big-img">
            <div class="description">
                <p id="desc-text">${newCard.desc}</p>
                <div class="stats">
                    ATK/<h2 id="atk-text">${newCard.atk}</h2>
                    DEF/<h2 id="def-text">${newCard.def}</h2>
                </div>
            </div>
        `;
    }
}

const createCard = (e) => {
    const cardType = typeInput.value;
    const cardName = nameInput.value;
    const cardAttribute = attributeInput.value;
    const cardLevel = levelInput.value;
    const cardPicture = pictureInput.value.replace(/^C:\\fakepath\\/i, '');
    const cardDescription = descriptionInput.value;
    const cardAtk = atkInput.value;
    const cardDef = defInput.value;
    const newCard = new Card(cardType, cardName, cardAttribute, cardLevel, cardPicture, cardDescription, cardAtk, cardDef);
    
    const ui = new UI();
    ui.changeCard(newCard);
    e.preventDefault();
}

createBtn.addEventListener('click', createCard);