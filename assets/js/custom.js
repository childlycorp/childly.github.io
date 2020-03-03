window.addEventListener("scroll", progressBar);
function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

function onClickBackModal() {
  var modalElement = document.getElementById("back-modal");
  var subMenuElement = document.getElementById("sub-menu-bar");  
  var minigpoohubTextElement = document.getElementById("service-minigpoolhub-more-text");
  var dovewalletTextElement = document.getElementById("service-dovewallet-more-text");
  var careersTextElement = document.getElementById("careers-more-text");
  var navToggler = document.getElementById("navbar-toggler");

  modalElement.classList.remove("on");  
  subMenuElement.classList.remove("show");
  // minigpoohubTextElement.classList.remove("show");
  // dovewalletTextElement.classList.remove("show");
  // careersTextElement.classList.remove("show");
  navToggler.classList.remove("active");
}

function setBackModal() {
  var modalElement = document.getElementById("back-modal");
  modalElement.classList.add("on");
}

function subMenuToggle() {
  var element = document.getElementById("sub-menu-bar");
  var navToggler = document.getElementById("navbar-toggler");
  element.classList.toggle("show");

  if (!element.classList.contains("show"))
    setTimeout(() => {
      navToggler.classList.remove("active");
    }, 4);

  setBackModal();
}

function dovewalletMoreTextToggle() {
  var element = document.getElementById("service-dovewallet-more-text");
  element.classList.toggle("show");
}

function minigpoolhubMoreTextToggle() {
  var element = document.getElementById("service-minigpoolhub-more-text");
  element.classList.toggle("show");
}

function careersMoreTextToggle() {
  var element = document.getElementById("careers-more-text");
  element.classList.toggle("show");
}


var galleryImg1 = document.getElementById("gallery-img1");
var galleryImg2 = document.getElementById("gallery-img2");
var galleryImg3 = document.getElementById("gallery-img3");
var galleryImg4 = document.getElementById("gallery-img4");
var imgModal = document.getElementById("image-modal");
var imgContent = document.getElementById("image-modal-content");

galleryImg1.onclick = showImageModal;
galleryImg2.onclick = showImageModal;
galleryImg3.onclick = showImageModal;
galleryImg4.onclick = showImageModal;
imgModal.onclick = closeImageModal;

function showImageModal() {
  imgModal.classList.add("show");
  imgContent.src = this.src;
}

function closeImageModal() {
  imgModal.classList.remove("show");
}