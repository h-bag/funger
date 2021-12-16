function checkError() {
    document.querySelector("#popup-content").classList.remove("hidden");
    document.querySelector('#error-content').classList.add("hidden");
    return true;
}

browser.runtime.onMessage.addListener(checkError);