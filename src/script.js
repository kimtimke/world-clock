setInterval(function () {
  let athensElement = document.querySelector("#athens");
  let athensDateElement = athensElement.querySelector(".date");
  let athensTimeElement = athensElement.querySelector(".time");
  let athensTime = moment().tz("Europe/Athens");

  athensDateElement.innerHTML = moment().format("MMMM Do YYYY");
  athensTimeElement.innerHTML = athensTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}, 1000);

function updateOlsoTime() {
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss[<small>]A[</small>]");
}

updateOlsoTime();
setInterval(updateOlsoTime, 1000);
