// remove by name

val = window.prompt("Name: ");
c = document.getElementsByClassName("dZVZab");
for (let i = 0; i < c.length; i++) {
    e = c[i];
    let n = e.getElementsByClassName("gJItbc huI6Cb");
    if (n[0].innerText === val) {
        e.style = "display: none";
    }
}

// actual bookmarklet
/*
javascript:v=window.prompt("Name: ");c=document.getElementsByClassName("dZVZab");for(let i=0;i<c.length;i++){e=c[i];let n=e.getElementsByClassName("gJItbc huI6Cb");if(n[0].innerText===v){e.style="display: none";}}
*/

// remove by regex

v = window.prompt("Regex: ");
c = document.getElementsByClassName("dZVZab");
for (let i = 0; i < c.length; i++) {
    e = c[i];
    const t = e.getElementsByClassName("VSWCL qoXqmb j70YMc")[0].getElementsByTagName("span")[0].innerText
    if (t.match(v)) {
        e.style = "display: none";
    }
}

/*
javascript:v=window.prompt("Regex: ");c=document.getElementsByClassName("dZVZab");for(let i=0;i<c.length;i++){e=c[i];const t=e.getElementsByClassName("VSWCL qoXqmb j70YMc")[0].getElementsByTagName("span")[0].innerText;if(t.match(v)){e.style="display: none";}}
*/