/* progressbar start */
window.addEventListener("scroll", progressBar);
function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
/* progressbar end */

/* subMenuToggle */
function onClickBackModal() {
  var modalElement = document.getElementById("back-modal");
  var subMenuElement = document.getElementById("sub-menu-bar");
  var minigpoohubTextElement = document.getElementById(
    "service-minigpoolhub-more-text"
  );
  var dovewalletTextElement = document.getElementById(
    "service-dovewallet-more-text"
  );
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
  var navArea = document.querySelector('.navbar-area');  
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  if(winScroll < 20){
    navArea.classList.toggle('sticky');
  } 

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
/* subMenuToggle end  */

/* Gallery start */
var imgModal = document.getElementById("image-modal");
var imgContent = document.getElementById("image-modal-content");
var modalPrev = document.getElementById("image-modal-prev");
var modalNext = document.getElementById("image-modal-next");
var currentShowingImageId = undefined;
var galleryImages = document.querySelectorAll(".gallery-img");
var historyImages = document.querySelectorAll(".history-img");

historyImages.forEach(el => (el.onclick = showHistoryImageModal));
galleryImages.forEach(el => (el.onclick = showGalleryImageModal));
imgModal.onclick = closeImageModal;
imgContent.onclick = closeImageModal;

function showImageModal() {
  imgModal.classList.add("show");
  imgContent.src = this.src;
}

function showHistoryImageModal() {
  imgModal.classList.add("show");
  currentShowingImageId = parseInt(this.id.split("-")[2]);
  imgContent.src = this.src;

  modalPrev.onclick = onClickHistoryPrevBtn;
  modalNext.onclick = onClickHistoryNextBtn;
}

function showGalleryImageModal() {
  imgModal.classList.add("show");
  currentShowingImageId = parseInt(this.id.split("-")[2]);
  imgContent.src = this.src;

  modalPrev.onclick = onClickGalleryPrevBtn;
  modalNext.onclick = onClickGalleryNextBtn;
}

function closeImageModal() {
  imgModal.classList.remove("show");
  currentShowingImageId = undefined;
  modalPrev.onclick = undefined;
  modalNext.onclick = undefined;
}

function onClickHistoryPrevBtn(e) {
  e.stopPropagation();
  if (currentShowingImageId <= 1) return;

  var imgSrc = document.getElementById(
    `history-img-${currentShowingImageId - 1}`
  ).src;
  currentShowingImageId -= 1;
  imgContent.src = imgSrc;
  
}

function onClickHistoryNextBtn(e) {
  e.stopPropagation();
  if (currentShowingImageId >= 2) return;
  var imgSrc = document.getElementById(
    `history-img-${currentShowingImageId + 1}`
  ).src;
  currentShowingImageId += 1;
  imgContent.src = imgSrc;
  
}

function onClickGalleryPrevBtn(e) {
  e.stopPropagation();
  if (currentShowingImageId <= 1) return;

  var imgSrc = document.getElementById(
    `gallery-img-${currentShowingImageId - 1}`
  ).src;
  currentShowingImageId -= 1;
  imgContent.src = imgSrc;
  
}

function onClickGalleryNextBtn(e) {
  e.stopPropagation();
  if (currentShowingImageId >= 12) return;
  var imgSrc = document.getElementById(
    `gallery-img-${currentShowingImageId + 1}`
  ).src;
  currentShowingImageId += 1;
  imgContent.src = imgSrc;
  
}

/* Gallery end */
