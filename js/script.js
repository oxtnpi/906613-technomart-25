var link = document.querySelector(".feedback-link");
var feedbackPopup = document.querySelector(".feedback-modal");
var modals = document.querySelectorAll(".modal");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackName = document.querySelector(".feedback-name");
var feedbackEmail = document.querySelector(".feedback-email");
var feedbackMessage = document.querySelector(".feedback-message");
var emailStorage = "";
var nameStorage = "";
var isStorageSupport = true;

function closeAllModals() {
    Array.prototype.forEach.call(modals, function (item) {
        if (item.classList.contains("modal-show")) {
            item.classList.remove("modal-show");
            feedbackPopup.classList.remove("modal-error");
        }
    });
}

try {
    emailStorage = localStorage.getItem("feedbackEmail");
    nameStorage = localStorage.getItem("feedbackName");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeAllModals();

    feedbackPopup.classList.add("modal-show");

    if (nameStorage) {
        feedbackName.value = nameStorage;
    }
    if (emailStorage) {
        feedbackEmail.value = emailStorage;
    }
setTimeout (function(){
    if (nameStorage && emailStorage) {
        feedbackMessage.focus();
    } else {
        feedbackName.focus();
    }
},700);
});


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeAllModals();

    mapPopup.classList.add("modal-show");
});

Array.prototype.forEach.call(modals,function (item) {
    item.addEventListener("click", function (evt) {

        if (evt.target.classList.contains("modal-close")) {
            evt.preventDefault();
            item.classList.remove("modal-show");
            feedbackPopup.classList.remove("modal-error");
        }
    });
});

feedbackForm.addEventListener("submit", function (evt) {

    if (!feedbackName.value ||
        !feedbackEmail.value || !feedbackMessage.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("feedbackName", feedbackName.value);
            localStorage.setItem("feedbackEmail", feedbackEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        closeAllModals();
    }
});

