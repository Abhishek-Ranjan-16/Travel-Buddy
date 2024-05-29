const populate = async (value, currency) => {
  let myStr = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_eEfK2pmR6rorSWnJpukEfhsoU3LyPMKRIZv5sosW&base_currency=" +
    currency;
  let response = await fetch(url);
  let rJson = await response.json();
  document.querySelector(".output").style.display = "block";

  for (let key of Object.keys(rJson["data"])) {
    myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${rJson["data"][key]["value"] * value}</td>
                    </tr> 
                `;
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(document.querySelector("input[id='quantity']").value);
  const currency = document.querySelector("select[id='currency']").value;
  populate(value, currency);
});

setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Date Selection Part
const now = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.getElementById("week").innerHTML = daysOfWeek[now.getDay()];
document.getElementById("date").innerHTML = now.getDate();
document.getElementById("month-year").innerHTML = `${
  month[now.getMonth()]
}, ${now.getFullYear()}`;
