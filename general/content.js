// embed a page
link = prompt("Link:");
document.getElementsByTagName("body")[0].innerHTML = `
<iframe src="${link}" style="border:none;position:fixed;inset:0;width:100vw;height:100vh"></iframe>`;
/*
javascript:link=prompt("Link:");document.getElementsByTagName("body")[0].innerHTML=`<iframe src="${link}" style="border:none;position:fixed;inset:0;width:100vw;height:100vh"></iframe>`;
*/
// delete body
document.getElementsByTagName("body")[0].innerHTML = "";
/*
javascript:document.getElementsByTagName("body")[0].innerHTML="";
*/
// delete EVERYTHING (should be no trace of anything except for localStorage and cookies)
Object.keys(window).forEach(e => {if (e !== "location") window[e] = undefined});
document.write("");
/*
javascript:Object.keys(window).forEach(e=>{if(e!=="location")window[e]=undefined});document.write("");
*/
// change background color
document.getElementsByTagName("body")[0].style.backgroundColor = prompt("Color:")
/*
javascript:document.getElementsByTagName("body")[0].style.backgroundColor=prompt("Color:")
*/