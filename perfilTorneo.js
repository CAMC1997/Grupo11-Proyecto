const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    })
}

//Arrays
var events = [
    {
        name: 'CS:GO Zombie',
        date: '2021-10-10',
        hour: '10:00',
        state: 'Terminado'
    },
    {
        name: 'CS:GO Competitivo',
        date: '2021-10-18',
        hour: '10:00',
        state: 'Iniciado'
    },
    {
        name: 'CS:GO Rush',
        date: '2021-10-20',
        hour: '10:00',
        state: 'Sin iniciar'
    },
    {
        name: 'L4D2 2v2',
        date: '2021-10-20',
        hour: '10:00',
        state: 'Sin iniciar'
    },
    {
        name: 'L4D2 4v4',
        date: '2021-10-25',
        hour: '08:00',
        state: 'Iniciado'
    }
];

var players = [
    {
        name: 'Player 1',
        email: 'Equipo',
        event: 'CS:GO Zombie'
    },
    {
        name: 'Player 2',
        email: 'Equipo',
        event: 'CS:GO Competitivo'
    },
    {
        name: 'Player 3',
        email: 'Equipo',
        event: 'CS:GO Rush'
    },
    {
        name: 'Player 4',
        email: 'Equipo',
        event: 'L4D2 2v2'
    },
    {
        name: 'Player 5',
        email: 'Equipo',
        event: 'L4D2 4v4'
    },
    {
        name: 'Player 6',
        email: 'Equipo',
        event: 'CS:GO Zombie'
    },
    {
        name: 'Player 7',
        email: 'Equipo',
        event: 'CS:GO Competitivo'
    },
    {
        name: 'Player 8',
        email: 'Equipo',
        event: 'CS:GO Rush'
    },
    {
        name: 'Player 9',
        email: 'Equipo',
        event: 'L4D2 2v2'
    },
    {
        name: 'Player 10',
        email: 'Equipo',
        event: 'L4D2 4v4'
    },
    {
        name: 'Player 11',
        email: 'Equipo',
        event: 'CS:GO Zombie'
    },
    {
        name: 'Player 12',
        email: 'Equipo',
        event: 'CS:GO Competitivo'
    },
    {
        name: 'Player 13',
        email: 'Equipo',
        event: 'CS:GO Rush'
    },
    {
        name: 'Player 14',
        email: 'Equipo',
        event: 'L4D2 2v2'
    },
    {
        name: 'Player 15',
        email: 'Equipo',
        event: 'L4D2 4v4'
    },
    {
        name: 'Player 16',
        email: 'Equipo',
        event: 'CS:GO Zombie'
    },
    {
        name: 'Player 17',
        email: 'Equipo',
        event: 'CS:GO Competitivo'
    },
    {
        name: 'Player 18',
        email: 'Equipo',
        event: 'CS:GO Rush'
    },
    {
        name: 'Player 19',
        email: 'Equipo',
        event: 'L4D2 2v2'
    },
    {
        name: 'Player 20',
        email: 'Equipo',
        event: 'L4D2 4v4'
    },
    {
        name: 'Player 21',
        email: 'Equipo',
        event: 'CS:GO Zombie'
    },
    {
        name: 'Player 22',
        email: 'Equipo',
        event: 'CS:GO Competitivo'
    }
]

//Funciones


function loadEvents() {
    var eventContainer = document.getElementById('container-event');
    var eventNavbar = document.getElementById('event-navbar');
    events.forEach(event => {
        //load state color
        var stateColor = '';
        if (event.state == 'Terminado') {
            stateColor = 'green';
        } else if (event.state == 'Iniciado') {
            stateColor = 'yellow';
        } else {
            stateColor = 'gray';
        }

        //load cards
        eventContainer.innerHTML += 
        `
        <div class="card shadow-sm">
            <div class="card-body row g-0">
                <div class="col-8">
                    <span id="date-event">${event.date}</span>
                    <h6 id="title-event">${event.name} (${event.hour})</h6>
                </div>
                <div class="col d-flex align-items-center justify-content-end">
                    <button class=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmModal">Ingresar</button>
                </div>
            </div>
        </div>
        `
        //load navbar

        eventNavbar.innerHTML += 
        `
        <div class="btn btn-light d-flex flex-column align-items-start">
            <p class="name-event-navbar m-0 fw-medium" style="font-size: 14px;">${event.name}</p>
            <div>
                <span class="indicator-event-navbar fw-normal" style="color: ${stateColor};">● </span>
                <span class="state-event-navbar fw-normal text-black-50 " style="font-size: 14px;">${event.state}</span>
            </div>
        </div>
        `
    });

    

}

loadEvents();
/*
function loadPlayer() {
    var table = document.getElementById('eventsTable');
    var tableBody = document.getElementById('eventsTableBody');

    for (var i = 0; i < events.length; i++) {
        var row = tableBody.insertRow(i);
        var cellName = row.insertCell(0);
        var cellDate = row.insertCell(1);
        var cellHour = row.insertCell(2);
        var cellState = row.insertCell(3);

        cellName.innerHTML = events[i].name;
        cellDate.innerHTML = events[i].date;
        cellHour.innerHTML = events[i].hour;
        cellState.innerHTML = events[i].state;
    }
}
*/