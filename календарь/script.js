// текущая дата
const currentDate = new Date();

// месяцы в виде строки для отображения на странице
const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

// получаем элементы таблицы и кнопки переключения месяца
const calendar = document.getElementById("calendar");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

// форма добавления событий
const addEventForm = document.querySelector(".add-event-form");
const eventDateInput = document.getElementById("event-date");
const eventTimeInput = document.getElementById("event-time");
const eventTitleInput = document.getElementById("event-title");
const addEventButton = document.getElementById("add-event");
const errorMessage = document.getElementById("error-message");

// массив для хранения событий
let events = [];

// функция для отображения календаря
function showCalendar(date) {
  // удаляем старые ячейки из таблицы
  while (calendar.firstChild) {
    calendar.removeChild(calendar.firstChild);
  }

  // создаем заголовок с названием месяца и года
  const monthYearHeader = document.createElement("tr");
  const monthYearHeaderCell = document.createElement("th");
  monthYearHeaderCell.colSpan = 7;
  monthYearHeaderCell.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  monthYearHeader.appendChild(monthYearHeaderCell);
  calendar.appendChild(monthYearHeader);

  // создаем заголовок таблицы с днями недели
  const weekdaysRow = document.createElement("tr");
  for (let i = 0; i < 7; i++) {
    const weekdayCell = document.createElement("th");
    weekdayCell.textContent = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][i];
    weekdaysRow.appendChild(weekdayCell);
  }
  calendar.appendChild(weekdaysRow);

  // определяем первый день месяца и последний день месяца
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // создаем ячейки таблицы для каждого дня месяца
  let currentDayOfMonth = 1;
  for (let week = 0; currentDayOfMonth <= lastDayOfMonth.getDate(); week++) {
    const weekRow = document.createElement("tr");
    for (let weekday = 0; weekday < 7; weekday++) {
      const dayCell = document.createElement("td");
      if (weekday >= firstDayOfMonth.getDay() && currentDayOfMonth <= lastDayOfMonth.getDate()) {
        dayCell.textContent = currentDayOfMonth;
        dayCell.dataset.date = new Date(date.getFullYear(), date.getMonth(), currentDayOfMonth).toISOString().substr(0, 10);
        currentDayOfMonth++;
      }
      weekRow.appendChild(dayCell);
    }
    calendar.appendChild(weekRow);
  }

  // добавляем обработчики клика для ячеек таблицы
  const dayCells = document.querySelectorAll("td");
  dayCells.forEach((dayCell) => {
    dayCell.addEventListener("click", (event) => {
      const selectedDate = new Date(event.target.dataset.date);
      if (isNaN(selectedDate.getTime())) {
        errorMessage.textContent = "Выберите день из текущего месяца";
      } else {
        eventDateInput.value = selectedDate.toLocaleDateString("ru-RU");
        eventTimeInput.value = "";
        eventTitleInput.value = "";
        addEventForm.classList.add("show");
        }
        });
        });
    
        updateEventsArray();
}

// функция для обновления массива событий
function updateEventsArray() {
events = JSON.parse(localStorage.getItem("events")) || [];

// удаляем старые метки событий
const eventMarkers = document.querySelectorAll(".event-marker");
eventMarkers.forEach((marker) => marker.remove());
events.forEach((event) => {
    const eventDate = new Date(event.date);
    if (eventDate.getMonth() === currentMonth.getMonth() && eventDate.getFullYear() === currentMonth.getFullYear()) {
    const dayCell = document.querySelector(`td[data-date="${event.date}"]`);
    const eventMarker = document.createElement("div");
    eventMarker.classList.add("event-marker");
    eventMarker.style.backgroundColor = event.color;
    eventMarker.title = `${event.title} - ${event.time}`;
    dayCell.appendChild(eventMarker);
    }
    });
    }
    // обработчик клика для кнопки добавления события
addEventButton.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedDate = eventDateInput.value;
    const selectedTime = eventTimeInput.value;
    const selectedTitle = eventTitleInput.value;
    if (selectedDate === "" || selectedTime === "" || selectedTitle === "")
    {
    errorMessage.textContent = "Заполните все поля формы";
    }
     else 
     {
    const selectedColor = document.querySelector('input[name="color"]:checked').value;
    const eventObject = {
    date: selectedDate,
    time: selectedTime,
    title: selectedTitle,
    color: selectedColor,
    };
    events.push(eventObject);
    localStorage.setItem("events", JSON.stringify(events));
    addEventForm.classList.remove("show");
    updateEventsArray();
    }
    });
    
    // обработчики клика для кнопок переключения месяца
    const currentMonth = new Date();
    let displayedMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth());
    showCalendar(displayedMonth);
    
    prevMonthButton.addEventListener("click", () => {
    displayedMonth.setMonth(displayedMonth.getMonth() - 1);
    showCalendar(displayedMonth);
    });
    
    nextMonthButton.addEventListener("click", () => {
    displayedMonth.setMonth(displayedMonth.getMonth() + 1);
    showCalendar(displayedMonth);
    });
