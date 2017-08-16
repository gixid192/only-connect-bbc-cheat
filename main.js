// answers //summary answer
// groups //4 rows answer
// stopTheClock(); //no timer


const menu = document.querySelector('#menu');
const beginBtn = document.querySelector('#overlay');

const appendCheatBtn = () => {
    const cheatDiv = document.createElement('div');

    menu.style.top = '50px';
    cheatDiv.style.margin = "20px auto";

    menu.appendChild(cheatDiv);

    const noTimer = document.createElement('p');
    const revealRow = document.createElement('p');
    const revealSummary = document.createElement('p');
    

    noTimer.textContent = 'Stop Timer';
    noTimer.id = 'noTimer';

    revealRow.textContent = 'Reveal Row';
    revealRow.id = 'revealRow';

    revealSummary.textContent = 'Reveal Summary';
    revealSummary.id = 'revealSummary';
    
    const styleBtn = "color: #deadbeef; margin-right: 20px; display: inline-block; font-weight: 600; cursor: pointer";
    noTimer.style.cssText = styleBtn;
    revealRow.style.cssText = styleBtn;
    revealSummary.style.cssText = styleBtn;

    cheatDiv.appendChild(noTimer);
    cheatDiv.appendChild(revealRow);
    cheatDiv.appendChild(revealSummary);

}
const revealRow = () => {
    const colors = ["red", "blue", "green", "yellow"];
    groups.map( (group,key) => {
        group.map(number => {
            elm = document.querySelector('#tile' + number);
            elm.style.color = colors[key];
        })
    })
}

const revealSummary = () => {
    const ianswers = answers.map(arr => arr[0]);
    groups.map( (group,key) => {
        group.map(number => {
            elm = document.querySelector('#tile' + number);
            txt = elm.textContent;
            elm.innerHTML = txt + '<br>' + ianswers[key];
        })
    })
}
const initListener = () => {
    menu.addEventListener('click', function(e){
        const target = e.target;
        const elID = target.id;
        if(target.getAttribute('clicked')){
            return;
        }
        target.setAttribute('clicked',1);
        switch (elID){
            case "noTimer":
                stopTheClock();
                break;
            case "revealRow":
                revealRow();
                break;
            case "revealSummary":
                revealSummary();
                break;
            default: return;
        }
    })
}

const waitFor = setInterval(function(){
    if(beginBtn.style.display){
        clearInterval(waitFor);
        appendCheatBtn();
        initListener();
    }
}, 1000);
