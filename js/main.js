// https://gist.github.com/lovasoa/11357947

const amulets = ["If you can't write poems,\nwrite me",
                   "DON'T WORRY.",
                   "A BLACK CROW ON THE CHEST OF A GOLDFINCH.\nIT'S WINTER IN NORWAY.",
                   "I WON'T FORGET\nI LOVE TO FISH,\nA KIND OF THERAPY.",
                   "Nailed seven scales;\nthe dragonfly fell asleep.",
                   "The forest has\nthe beauty of a\nwarrior culture",
                   "THE CLOUDS ARE PARTING;\nA SUDDEN MOON",
                   "if you can play it, as i play it now, you can take it.",
                   "BECAUSE I TOO AM WRITING FOR A LIVING I TOO FEEL HUMBLED",
                   "Sailing on the ice, a pearl-white goose and an anemone.",
                   "In the morning\nI dreamed of cows\nand I woke up\nthinking of cows",
                   "My head is suffused\nwith a pale light.",
                   "I see a single\nleaf\non the tree.",
                   "POEM OF THE NIGHT: I AM THE LUCKIEST MAN ALIVE!",
                   "TO MYSELF:\nYOU MUST LEARN TO LIVE\nWITH FEWER WISHES"
                   ]

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

amulets.forEach(amulet => { console.log(sha256(amulet)); });