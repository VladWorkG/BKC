const Telegram = document.getElementById('TelegramChannel');
Telegram.addEventListener('click', function () {
  window.location.href = "https://t.me/BoyKisserClicker";
});
const Boosty = document.getElementById('Boosty');
Boosty.addEventListener('click', function () {
  window.location.href = "https://boosty.to/boykisser_clicker";
});


var TotalKiss = 0;
var KissPerClick = 1;
var SoundForKissTimer = 0;

var Probuct1Price = 20
var Probuct1Quantity = 0;
const Probuct1Quantity1 = document.getElementById("Probuct1Quantity");

var Probuct2Price = 0;
var Probuct2Quantity = 0;

const SUM = document.getElementById('SUM'); // Сумма поцелуев
const KissPerClickStats = document.getElementById('KissPerClickStats'); // Сумма поцелуев за клик
KissPerClickStats.textContent = KissPerClick;


document.getElementById("closeBtn").addEventListener("click", function() {
  var modal = document.getElementById("modal");
  if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
  } else {
      modal.classList.add("hidden");
  }
  KissPerClickStats.textContent = KissPerClick;
});
document.getElementById("openBth").addEventListener("click", function() {
  var modal = document.getElementById("modal");
  if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
  } else {
      modal.classList.add("hidden");
  }

});









const UpButt = document.getElementById('UpButt');
UpButt.addEventListener('click', function () {
  if (TotalKiss >= Probuct1Price) {
    TotalKiss = TotalKiss - Probuct1Price;
    KissPerClick = KissPerClick + 1;
    Probuct1Quantity = Probuct1Quantity + 1;
  } else {

  }
  SUM.textContent = TotalKiss;
  Probuct1Quantity1.textContent = Probuct1Quantity;
});



const KissButt = document.getElementById('BoyFace'); //кнопка для поцелуев
KissButt.addEventListener('click', function () {
  if (SoundForKissTimer == 0) {
    audioKiss1.play()
    SoundForKissTimer = 1;
  } else if (SoundForKissTimer == 1) {
    audioKiss2.play()
    SoundForKissTimer = 2;
  } else {
    audioKiss3.play()
    SoundForKissTimer = 0;
  }

  document.getElementById('BoyFace').src = 'sprite/KISSED.png'; // Слушатель поцелуев
  setTimeout(function () {
    document.getElementById('BoyFace').src = 'sprite/NOTKISS.png';
  }, 200);
  TotalKiss = TotalKiss + KissPerClick;
  SUM.textContent = TotalKiss;
});












const audioKiss1 = new Audio();
audioKiss1.src = "audio/Kiss.1.mp3";
const audioKiss2 = new Audio();
audioKiss2.src = "audio/Kiss.2.mp3";
const audioKiss3 = new Audio();
audioKiss3.src = "audio/Kiss.3.mp3";

