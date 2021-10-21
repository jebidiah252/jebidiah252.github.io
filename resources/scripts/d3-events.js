d3.select("body")
    .append("span")
    .attr("id", "img-span");

d3.select("span")
    .append("img")
    .attr("src", "resources/images/twitter.png")
    .attr("alt", "https://www.twitter.com")
    .attr("width", 100)
    .attr("height", 100)
    .attr("id", "twitter");

d3.select("span")
    .append("img")
    .attr("src", "resources/images/facebook.png")
    .attr("alt", "https://www.facebook.com")
    .attr("width", 100)
    .attr("height", 100)
    .attr("id", "facebook");

d3.select("span")
    .append("img")
    .attr("src", "resources/images/reddit.png")
    .attr("alt", "https://www.reddit.com")
    .attr("width", 100)
    .attr("height", 100)
    .attr("id", "reddit");

d3.select("span")
    .append("img")
    .attr("src", "resources/images/linkedin.png")
    .attr("alt", "https://www.linkedin.com")
    .attr("width", 100)
    .attr("height", 100)
    .attr("id", "linkedin");

d3.select("span")
    .append("img")
    .attr("src", "resources/images/instagram.png")
    .attr("alt", "https://www.instagram.com")
    .attr("width", 100)
    .attr("height", 100)
    .attr("id", "instagram");

d3.select("span")
    .on("mousemove", function(event) {
        d3.select("#div-3")
            .text("Mouse X: " + d3.pointer(event)[0] + ", Y: " + d3.pointer(event)[1]);
    })

for (let i = 1; i < 4; i++) {
    d3.select("body")
        .append("div")
        .attr("id", "div-" + i);
}



d3.selectAll("img")
    .on("mouseenter", function() {
        d3.select("#div-1")
            .text("In: " + this.id);
    })
    .on("mouseleave", function() {
        d3.select("#div-2")
            .text("Out: " + this.id);
    })
    .on("dblclick", function() {
        window.open(this.alt, "_blank");
    })
    .on("mousedown", function() {
        d3.select(this)
            .attr("height", 512)
            .attr("width", 512);
    })
    .on("mouseup", function() {
        d3.select(this)
            .attr("height", 100)
            .attr("width", 100);
    });