chrome.action.onClicked.addListener((tab) => {
    if($().jquery=='3.6.1'){
        return
    }
    else{chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['/assets/jquery-3.6.1.min.js']
    });
    console.log("Jquery loaded");
}
  });