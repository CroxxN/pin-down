

$('#butOne').on("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['assets/jquery-3.6.1.min.js']
    });
    chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true},
    function: pinFun,


    });
  });

function pinFun(){
    $("BODY").on("click", (e)=>{
        console.log(e.pageX, e.pageY);
    })
};