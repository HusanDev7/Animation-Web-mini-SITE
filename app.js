let btn = document.querySelector('.btn');
let titleRun = document.querySelector('.txt');

btn.addEventListener('mousemove', (e) => {
    const X = e.pageX - btn.offsetLeft;
    const Y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", `${X}px`);
    btn.style.setProperty("--y", `${Y}px`);
});

let fullText = titleRun.innerHTML

titleRun.innerHTML = ''

function RunText(x = 0) {

    titleRun.innerHTML = titleRun.innerHTML + fullText[x]

    x++
    console.log(fullText[x]);

    stop = setTimeout(() => {
        RunText(x)
    }, 200)

    if (x == 39) {
        clearTimeout(stop)
    }

}

RunText();


var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
})