let pop_img = document.getElementById('pop_img');

pop_img.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: pinFun,
    });
        
  });

function pinFun(){
    
    
    chrome.storage.sync.get("clicked", ({clicked})=>{
        if(clicked){
            document.body.style.backgroundColor = '#fff000';
            chrome.storage.sync.set({clicked: false});
            console.log("if workd")
        }else{
            document.body.innerHTML += '<img src="chrome-extension://mgghjdkclnilmkagebecdmljbnimkcie/images/pin.png" id="img">';
            document.body.innerHTML += '<img src="chrome-extension://mgghjdkclnilmkagebecdmljbnimkcie/images/magnet.png" id="down">';
            chrome.storage.sync.set({clicked: true});
            document.getElementsByTagName("BODY")[0].addEventListener('click',(e)=>{
                posY = e.clientY;
                posX = e.clientX;
                let ele = document.getElementById('img')
                ele.style.width = "50px"
                ele.style.top = posY + "px"
                ele.style.left = posX + "px"
                console.log(posX,posY)
            })
        }
    })
    
}