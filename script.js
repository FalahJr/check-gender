const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
  const probabilityPercentage = probability * 100;

  let genderConvert;
  if (gender == "male") {
    genderConvert = "Cowok";
  } else {
    genderConvert = "Cewek";
  }

  const predictionText = `Hai ${name}, Aku coba tebak yaa, aku yakin ${probabilityPercentage}%,  Jenis kelamin kamu sepertinya ${genderConvert} ya...? :D  `;

  Swal.fire(predictionText);
}

async function predict() {
  const inputNameElement = document.getElementById("inputName");
  const firstName = inputNameElement.value;

  if (firstName.trim() === "") {
    Swal.fire("Silakan masukkan nama terlebih dahulu!");
    return;
  }

  const url = `${base_api}/?name=${firstName}&country_id=ID`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    showResult(result.name, result.gender, result.probability);
  } catch (error) {
    console.error("Error fetching data:", error);
    Swal.fire("Terjadi kesalahan saat mengambil data.");
  }
}
