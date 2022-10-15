
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({clicked: false});
  // let images = {
  //   pin : chrome.runtime.getURL("/images/Pin.png"),
  //   magnet: chrome.runtime.getURL("/images/magnet")
  // }
  // chrome.storage.sync.set({"img": images})
  // chrome.storage.sync.set({"key": false });
  // chrome.storage.sync.get("key",(click)=>{
  //   console.log(click)
  // })
});