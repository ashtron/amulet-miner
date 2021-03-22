// https://gist.github.com/lovasoa/11357947
function byteLength(str) {
    // returns the byte length of an utf8 string
    var s = str.length;

    for (var i = str.length-1; i >= 0; i--) {
        const code = str.charCodeAt(i);

        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s+=2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }

    return s;
}

const sequences = ["8888", "88888", "888888", "8888888", "88888888", "888888888"];

function isAmulet(candidate) {
    if (byteLength(candidate) <= 64) {
        for (let i = 0; i < sequences.length; i++) {
            if (sha256(candidate).toString().includes(sequences[i])) return true;
        }
    }

    return false;
}

document.getElementById("mine-btn").addEventListener("click", event => {
    let text = document.getElementById("text-input").value;
    text = text.replaceAll(/\n\s+/g, "\n");

    const lines = text.split(/\n/);

    console.log(lines);

    const amulets = [];
    
    lines.forEach(candidate => { if (isAmulet(candidate)) amulets.push(candidate) });

    if (amulets.length > 0) {
        const amuletList = document.getElementById("mined-amulets");

        amulets.forEach(amulet => {
            const amuletListElement = document.createElement("li");
            amuletListElement.appendChild(document.createTextNode(`${amulet} (${sha256(amulet)})`));
            amuletList.appendChild(amuletListElement);
        });
    }
});