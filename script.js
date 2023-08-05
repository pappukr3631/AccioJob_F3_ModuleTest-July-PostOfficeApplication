const currentIp = localStorage.getItem("currentIp");
console.log(currentIp);
let latitude;
let longitude;

async function getIPDetails() {
    // api = https://ipinfo.io/${IP}/geo
    let response = await fetch(`https://ipinfo.io/${currentIp}?token=30dd7efacbc702`);
    let result = await response.json();
    console.log(result);

    const coordinate = result.loc;
    let arr = coordinate.split(",");
    latitude = parseFloat(arr[0]);
    longitude = parseFloat(arr[1]);

    //IP Details
    let ipContainer = document.getElementById("ip");
    ipContainer.innerText += currentIp;
    let lat = document.getElementById("lat");
    lat.innerText += latitude;
    let long = document.getElementById("long");
    long.innerText += longitude;
    let city = document.getElementById("city");
    city.innerText += result.city;
    let org = document.getElementById("org");
    org.innerText += result.org;
    let region = document.getElementById("region");
    region.innerText += result.region;
    let hostname = document.getElementById("hostname");


    updateMap();
}

getIPDetails();


function updateMap() {
    // "https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed"
    const map = document.getElementsByTagName("iframe")[0];
    map.src = `https://maps.google.com/maps?q=${latitude}, ${longitude}&x=15&output=embed`;
    console.log(map);
}

