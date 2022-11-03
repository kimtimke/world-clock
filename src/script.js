function updateTime() {
  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = moment().format("MMMM Do YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss[<small>] A[</small>]"
    );
  }

  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");
    let osloTime = moment().tz("Europe/Oslo");

    osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
    osloTimeElement.innerHTML = osloTime.format("h:mm:ss[<small>] A[</small>]");
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss[<small>] A[</small>]"
    );
  }

  let buenosairesElement = document.querySelector("#buenos-aires");
  if (buenosairesElement) {
    let buenosairesDateElement = buenosairesElement.querySelector(".date");
    let buenosairesTimeElement = buenosairesElement.querySelector(".time");
    let buenosairesTime = moment().tz("America/Argentina/Buenos_Aires");

    buenosairesDateElement.innerHTML = moment().format("MMMM Do YYYY");
    buenosairesTimeElement.innerHTML = buenosairesTime.format(
      "h:mm:ss[<small>] A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city d-sm-flex justify-content-between">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format(" A")}</small> </div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
