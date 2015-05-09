
//Highlights an icon
function Img2(x) 
{
    var source;
    source = x.src;
    source = source.substring(0, source.length - 4);
    source = source + "2.png";
    x.src = source;
}
//Un-highlights an icon
function Img(x) 
{
    var source;
    source = x.src;
    source = source.substring(0, source.length - 5);
    source = source + ".png";
    x.src = source;
}

