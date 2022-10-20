let tab;

async function loadQuery() {
    [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['assets/jquery-3.6.1.min.js']
    });
    chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["assets/style.css"]
    });
}


loadQuery();

$('#butOne').on("click", async () => {
    console.log("Hello")
    console.log($().jquery);
    //let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        function: addPin
    });
});

$("#butSec").on("click", async () => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        function: removePin
    })
})

function addPin() {
    let clicked = false, currentScrollPos;
    if ($(".pinDownMagnet").length == 0) {
        $("BODY").on("click", (e) => {
            let pinElement = $("<img/>", {
                src: chrome.runtime.getURL("assets/images/pin.png"),
                class: 'pinDownPin',
                css: {
                    "top": `${e.pageY - 128}` + "px",
                    "left": `${e.pageX}` + "px"
                }
            })
            let magnetElement = $("<img />", {
                src: chrome.runtime.getURL("assets/images/magnet.png"),
                class: 'pinDownMagnet'
            });
            $("BODY").append(magnetElement, pinElement);
            $(".pinDownMagnet").on("click", (e) => {
                if (!clicked) {
                    currentScrollPos = $(document).scrollTop();
                    let pinOffSet = $(".pinDownPin").offset().top
                    $("html, BODY").animate({ scrollTop: pinOffSet, scrollLeft: 0 }, 500)
                } else {
                    $("html, BODY").animate({ scrollTop: (currentScrollPos), scrollLeft: 0 }, 500)
                    currentScrollPos = 0;
                }
                clicked = !clicked;
            })
            $("BODY").off();
        })
    }
}

function removePin() {
    $(".pinDownMagnet").remove();
    $(".pinDownPin").remove();
}