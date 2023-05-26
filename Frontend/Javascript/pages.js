const buttons = document.querySelectorAll('.biasButton');
const textArea = document.querySelectorAll('.buttonWrite')
const pressedButtons = [];
const headers = [document.getElementById('textHeader1'), document.getElementById('textHeader2'), document.getElementById('textHeader3')];

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (pressedButtons.length <= 3) {
            if (button.classList.contains('activeButton')) {
                button.classList.remove('activeButton');

                // button.removeChild(button.querySelector('.circle'));
                const index = pressedButtons.indexOf(button);
                if (index > -1) {
                    pressedButtons.splice(index, 1);
                    console.log(pressedButtons);
                }
            } else if (pressedButtons.length >= 0 && pressedButtons.length < 3) {
                button.classList.add('activeButton');
                // const circle = document.createElement('div');
                // circle.classList.add('circle');
                // console.log(pressedButtons);
                // circle.textContent = pressedButtons.length + 1;
                // console.log(circle);
                // button.appendChild(circle);
                // circle.style.top = button.offsetTop + 'px';
                // circle.style.left = button.offsetLeft + 'px';
                pressedButtons.push(button);

            }

            headers.forEach((header, index) => {
                header.innerHTML = pressedButtons[index] ? pressedButtons[index].innerHTML.replace(/<span.*<\/span>/, '') : "Selecteer een bias";
            });

        }
    });
});

const area = document.querySelectorAll('.buttonWrite');
let activeCount = 0;
const activeTextareas = [];

area.forEach((text) => {
    text.addEventListener('click', () => {

        // Add
        if (text.classList.contains('activeButton')) {
            text.classList.remove('activeButton');

            const index = activeTextareas.indexOf(text);
            if (index > -1) {
                activeTextareas.splice(index, 1);
            }
        } else if (text.value.length > 0 && text.value.trim() !== '')  {
            if ( activeTextareas.length <= 2 ) {
                text.classList.add('activeButton');

                activeTextareas.push(text);
            }
        }
        
    });
});

function buttonToArray(buttonId) {
    var explanationElement = document.getElementById('explanation');
    var explanationTitleElement = document.getElementById('explanationTitle');


    // Define the explanations for each button
    var explanations = {
        '1': 'Jan is recent junior medewerker van een advocatenkantoor geworden. In die tijd heeft hij een redelijk goede werkrelatie opgebouwd met zijn manager. Zijn manager is evenwichtig in het geven van feedback. Ze maakt verbeterpunten zeer concreet. Tegelijk geeft ze ook vaak complimenten. Hier werken betekent een hoge druk om projecten met grote waarde en scherpe deadlines te volbrengen. Vandaag opent Jan zijn mail. Een bericht van zijn manager: "Bel me." Jan denkt: "Nu is het mis.',
        '2': 'Bij een beroepsbeoefenaar is sprake van tunnelvisie indien de persoon voor de uitoefening van het beroep enkel kennis omarmt - bijvoorbeeld iets waarneemt - als dit een bestaande opvatting bevestigt [1]. Dit wordt ook wel de confirmation bias genoemd.',
        '3': 'Charlie is een slimme marketingspecialist bij een telecombedrijf. Haar heilige missie is anderen overtuigen van nut en noodzaak van marketingcampagnes. Haar staat van dienst is indrukwekkend. Ze heeft echter een terugkerend patroon ontdekt in haar werk. Haar gebruikelijke aanpak lijkt haar in de steek te laten. Ze houdt een praatje bij een klant en verlaat de zaal met het gevoel het geweldig gedaan te hebben. Om er later achter te komen dat haar idee niet heeft gewonnen. Als ze bij een van de managers feedback vraag is ze geschokt dat hij haar aanpak ondermaats vond.',
        '4': 'Mohammed werkt als docent Engels op een middelbare school. Hij kan goed overweg met zijn collega\'s. Zijn leerlingen vinden zijn lessen vaak boeiend en leerzaam. Toch is hij zelf niet zo tevreden over zijn werk. Op een dag raakt er een toetsformulier van een leerling kwijt. Daar baalt Mohammed van, "Verdorie, ik ben ook altijd zo\'n chaoot." Hij kijkt als eerste naar zichzelf, ondanks dat hij nog niet precies weet wat er met het formulier gebeurd is.',
        '5': 'Een overhaaste generalisatie, ook bekend als de "wet van de kleine aantallen" (de tegenhanger van de "wet van de grote aantallen"), "secundum quid" of "overgeneralisatie", is een drogreden waarbij een standpunt wordt beargumenteerd op basis van te weinig en niet-representatieve gegevens. Er wordt een algemene uitspraak gedaan aan de hand van meestal anekdotische bewijzen. In de statistiek gebruikt men daarom bepaalde regels om uitspraken te kunnen doen met een bepaalde significantie.',
        '6': 'Connie en haar collega, Conchita, kibbelen de laatste tijd op de werkvloer. Niets heftigs. Tenminste, in de ogen van Connie. Ze geeft slechts tips over de opmaak van een document, of over de manier waarop Conchita haar telefoon opneemt. "Daar spreek je elkaar toch op aan als helpdeskmedewerkers?" Het kibbelen is de afgelopen weken begonnen nadat Conchita een fout had gemaakt in het afhandelen van een klacht. Daardoor dreigt een grote klant van het bedrijf weg te lopen. Conchita trekt zich maar weinig aan van de \'tips\' van Connie. Daar reageert Connie fel op: "Conchita is gewoon onprofessioneel!',
        '7': 'Louise is een trotse medewerker van een softwarebedrijf. Collega\'s geven aan dat ze ambitieus, betrokken en uitgesproken is. In gesprek met een loopbaancoach vertelt ze dat ze zich in haar groei belemmerd voelt. Ze heeft het idee dat haar fysieke handicap ervoor zorgt dat ze benadeeld wordt bij interne sollicitaties. De loopbaancoach vraagt haar om iets over het laatste sollicitatiegesprek te vertellen. Louise vertelt dat het gesprek goed loopt. Tot twee leden van de sollicitatiecommissie fluisteren tegen elkaar. Die moeten haar wel aan het afschrijven zijn. De rest van het gesprek reageert ze bits en kortaf.',
        '8': 'Charlie is een slimme marketingspecialist bij een telecombedrijf. Haar heilige missie is anderen overtuigen van nut en noodzaak van marketingcampagnes. Haar staat van dienst is indrukwekkend. Ze heeft echter een terugkerend patroon ontdekt in haar werk. Haar gebruikelijke aanpak lijkt haar in de steek te laten. Ze houdt een praatje bij een klant en verlaat de zaal met het gevoel het geweldig gedaan te hebben. Om er later achter te komen dat haar idee niet heeft gewonnen. Als ze bij een van de managers feedback vraag is ze geschokt dat hij haar aanpak ondermaats vond.',
    };

    var selectedExplanation = explanations[buttonId];

    explanationElement.textContent = selectedExplanation;
}