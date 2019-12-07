

var myPeople = [];
var whites = [],
    blacks = [],
    asians = [],
    hispanics = [],
    multiracials = [],
    others = [];


var People = function (_year, _genre, _ethnicity, _position, _gender) {
    this.year = _year;
    this.genre = _genre;
    this.gender = _gender;
    this.ethnicity = _ethnicity;
    this.position = _position;
    this.bubbleSize = 10;

    //dots position 
    function f(x) {
        return x * x;
    }
    if (this.position < 21) {
        this.pos = createVector(50, this.position * 25);
    } else if (this.position < 41) {
        this.pos = createVector(70, this.position * 25 - 500);
    } else if (this.position < 61) {
        this.pos = createVector(90, this.position * 25 - 1000);
    } else if (this.position < 81) {
        this.pos = createVector(110, this.position * 25 - 1500);
    } else if (this.position < 101) {
        this.pos = createVector(130, this.position * 25 - 2000);
    } else if (this.position < 121) {
        this.pos = createVector(200, this.position * 25 - 2500);
    } else if (this.position < 141) {
        this.pos = createVector(220, this.position * 25 - 3000);
    } else if (this.position < 161) {
        this.pos = createVector(240, this.position * 25 - 3500);
    } else if (this.position < 181) {
        this.pos = createVector(260, this.position * 25 - 4000);
    } else if (this.position < 201) {
        this.pos = createVector(280, this.position * 25 - 4500);
    } else if (this.position < 221) {
        this.pos = createVector(350, this.position * 25 - 5000);
    } else if (this.position < 241) {
        this.pos = createVector(370, this.position * 25 - 5500);
    } else if (this.position < 261) {
        this.pos = createVector(390, this.position * 25 - 6000);
    } else if (this.position < 281) {
        this.pos = createVector(410, this.position * 25 - 6500);
    } else if (this.position < 301) {
        this.pos = createVector(430, this.position * 25 - 7000);
    } else if (this.position < 321) {
        this.pos = createVector(500, this.position * 25 - 7500);
    } else if (this.position < 341) {
        this.pos = createVector(520, this.position * 25 - 8000);
    } else if (this.position < 361) {
        this.pos = createVector(540, this.position * 25 - 8500);
    } else if (this.position < 381) {
        this.pos = createVector(560, this.position * 25 - 9000);
    } else if (this.position < 401) {
        this.pos = createVector(580, this.position * 25 - 9500);
    } else if (this.position < 421) {
        this.pos = createVector(650, this.position * 25 - 10000);
    } else if (this.position < 441) {
        this.pos = createVector(670, this.position * 25 - 10500);
    } else if (this.position < 461) {
        this.pos = createVector(690, this.position * 25 - 11000);
    } else if (this.position < 481) {
        this.pos = createVector(710, this.position * 25 - 11500);
    } else if (this.position < 501) {
        this.pos = createVector(730, this.position * 25 - 12000);
    } else if (this.position < 521) {
        this.pos = createVector(800, this.position * 25 - 12500);
    } else if (this.position < 541) {
        this.pos = createVector(820, this.position * 25 - 13000);
    } else if (this.position < 561) {
        this.pos = createVector(840, this.position * 25 - 13500);
    } else if (this.position < 581) {
        this.pos = createVector(860, this.position * 25 - 14000);
    } else if (this.position < 601) {
        this.pos = createVector(880, this.position * 25 - 14500);
    } else if (this.position < 621) {
        this.pos = createVector(950, this.position * 25 - 15000);
    } else if (this.position < 641) {
        this.pos = createVector(970, this.position * 25 - 15500);
    } else if (this.position < 661) {
        this.pos = createVector(990, this.position * 25 - 16000);
    } else if (this.position < 681) {
        this.pos = createVector(1010, this.position * 25 - 16500);
    } else if (this.position < 701) {
        this.pos = createVector(1030, this.position * 25 - 17000);
    } else if (this.position < 721) {
        this.pos = createVector(1100, this.position * 25 - 17500);
    } else if (this.position < 741) {
        this.pos = createVector(1120, this.position * 25 - 18000);
    } else if (this.position < 761) {
        this.pos = createVector(1140, this.position * 25 - 18500);
    } else if (this.position < 781) {
        this.pos = createVector(1160, this.position * 25 - 19000);
    } else if (this.position < 801) {
        this.pos = createVector(1180, this.position * 25 - 19500);
    } else if (this.position < 821) {
        this.pos = createVector(1250, this.position * 25 - 20000);
    } else if (this.position < 841) {
        this.pos = createVector(1270, this.position * 25 - 20500);
    } else if (this.position < 861) {
        this.pos = createVector(1290, this.position * 25 - 21000);
    } else if (this.position < 881) {
        this.pos = createVector(1310, this.position * 25 - 21500);
    } else if (this.position < 901) {
        this.pos = createVector(1330, this.position * 25 - 22000);
    } else if (this.position < 921) {
        this.pos = createVector(1400, this.position * 25 - 22500);
    } else if (this.position < 941) {
        this.pos = createVector(1420, this.position * 25 - 23000);
    } else if (this.position < 961) {
        this.pos = createVector(1440, this.position * 25 - 23500);
    } else if (this.position < 981) {
        this.pos = createVector(1460, this.position * 25 - 24000);
    } else if (this.position < 1001) {
        this.pos = createVector(1480, this.position * 25 - 24500);
    } else if (this.position < 1021) {
        this.pos = createVector(1550, this.position * 25 - 25000);
    } else if (this.position < 1041) {
        this.pos = createVector(1570, this.position * 25 - 25500);
    } else if (this.position < 1061) {
        this.pos = createVector(1590, this.position * 25 - 26000);
    } else if (this.position < 1081) {
        this.pos = createVector(1610, this.position * 25 - 26500);
    } else if (this.position < 1101) {
        this.pos = createVector(1630, this.position * 25 - 27000);
    }


let tempObject = this;

    $('#selector').change(function () {
        $('.key').hide();
        $('#' + $(this).val()).show();
        if ($(this).val() == "gender") {
           tempObject.assignGenderColors();
            console.log("Gender");
        } else if($(this).val() == "genre"){
           tempObject.assignGenreColors();
                 console.log("Genre");
        }else{
            tempObject.assignRaceColors();
                 console.log("ethnicity");
        }
    });

this.assignRaceColors();
    console.log("ethnicity");
}




People.prototype.assignRaceColors = function () {
    if (this.ethnicity == "White") {
        this.h = 32;
        this.s = 31;
        this.b = 98;
    } else if (this.ethnicity == "Asian") {
        this.h = 47;
        this.s = 100;
        this.b = 100;
    } else if (this.ethnicity == "Black") {
        this.h = 24;
        this.s = 68;
        this.b = 54;
    } else if (this.ethnicity == "Hispanic") {
        this.h = 19;
        this.s = 53;
        this.b = 93;
    } else if (this.ethnicity == "Multiracial") {
        this.h = 302;
        this.s = 62;
        this.b = 83;
    } else if (this.ethnicity == "MiddleEast") {
        this.h = 112;
        this.s = 37;
        this.b = 73;
    } else if (this.ethnicity == "American Aborigine" || this.ethnicity == "Other" || this.ethnicity == "unknown") {
        this.h = 0;
        this.s = 0;
        this.b = 47;
    } else { 
        this.h = 100;
        this.s = 100;
        this.b = 27;
    }
}



People.prototype.assignGenreColors = function () {
    if (this.genre == "Pop") {
        this.h = 0;
        this.s = 100;
        this.b = 82;
    } else if (this.genre == "Rap") {
        this.h = 108;
        this.s = 94;
        this.b = 53;
    } else if (this.genre == "R&B") {
        this.h = 16;
        this.s = 81;
        this.b = 86;
    } else if (this.genre == "Latin") {
        this.h = 212;
        this.s = 76;
        this.b = 73;
    } else if (this.genre == "Dance") {
        this.h = 306;
        this.s = 37;
        this.b = 96;
    } else if (this.genre == "Country") {
        this.h = 72;
        this.s = 61;
        this.b = 90;
    } else if (this.genre == "Rock") {
        this.h = 281;
        this.s = 100;
        this.b = 67;
    } else { 
        this.h = 100;
        this.s = 100;
        this.b = 27;
    }
}


People.prototype.assignGenderColors = function () {
    if (this.gender == "M") {
        this.h = 223;
        this.s = 83;
        this.b = 56;
    } else if (this.gender == "F") {
        this.h = 0;
        this.s = 65;
        this.b = 91;
    } else if (this.gender == "Mix") {
        this.h = 277;
        this.s = 83;
        this.b = 76;
    } else { 
        this.h = 100;
        this.s = 100;
        this.b = 27;
    }
}



People.prototype.isHovering = function () {
    var distance = dist(mouseX, mouseY, this.pos.x + width / 2, this.pos.y + height / 2);
    if (distance < this.bubbleSize / 2) {
        return true;
    } else {
        return false;
    }
};

People.prototype.display = function () {
    fill(this.h, this.s, this.b);
    ellipse(this.pos.x, this.pos.y, this.bubbleSize, this.bubbleSize);
}


//People.prototype.update = function () {
//    //make the bubble grow
//    if (this.tempBubbleSize < this.bubbleSize) {
//        this.tempBubbleSize += 1;
//    }
//    //when the bubble grows, you wanna make sure it doesn't touch/overlap with each other
//    //this code counts the distance between 2 bubbles & then makes an 'escaping' vector that changes the bubble position so that it moves avoiding other bubbles
//    for (var i = 0; i < myPeople.length; i++) {
//        var c = myPeople[i];
//        var distance = dist(this.pos.x, this.pos.y, c.pos.x, c.pos.y);
//        if (distance < (this.tempBubbleSize + c.tempBubbleSize) / 2 && distance > 0) {
//            var escape = createVector(this.pos.x - c.pos.x, this.pos.y - c.pos.y);
//            escape.normalize(); //this is where the magic happens :D it smoothes vector so it becomes less 'jumpy'
//            this.pos.x = this.pos.x + escape.x * 1;
//            this.pos.y = this.pos.y + escape.y * 1;
//        }
//    }
//};

People.prototype.hide = function () {
    this.bubbleSize = 10;
    this.alpha = 0.3;
    this.h = 0;
    this.s = 0;
    this.b = 0;
}

People.prototype.show = function (num) {
    this.bubbleSize = 10;
    this.alpha = 1.0;
    this.assignRaceColors();
}



//get data
function preload() {
    //load the datasets
    loadTable("data/billboard.csv", "header", gotData);
    //      $("#insideRing").addClass("full");
}

function gotData(table) {
    console.log("Total number of rows: " + table.getRowCount());
    for (var i = 0; i < table.getRowCount(); i++) {
        var row = table.getRow(i);

        var year = row.get("year");
        var genre = row.get("genre");
        var gender = row.get("gender");
        var ethnicity = row.get("ethnicity");
        var position = row.get("position");

        var p = new People(year, genre, ethnicity, position, gender);
        myPeople.push(p);

        if (p.ethnicity == "White") {
            whites.push(p);
        } else if (p.ethnicity == "Asian") {
            asians.push(p);
        } else if (p.ethnicity == "Black") {
            blacks.push(p);
        } else if (p.ethnicity == "Hispanic") {
            hispanics.push(p);
        } else if (p.ethnicity == "Multiracial") {
            multiracials.push(p);
//        } 
//        else if (p.ethnicity == "MiddleEast") {
//            middleeasterns.push(p);
        } else if (p.ethnicity == "American Aborigine" || p.ethnicity == "Other" || p.ethnicity == "unknown") {
            others.push(p);
        }

    }

}

function setup() {
    var canvas = createCanvas(window.innerWidth, 800);
    canvas.parent('mainCanvas');
    colorMode(HSB, 360, 100, 100, 1);
    zoom = 1.0;
    offset = createVector(0, 150);
    poffset = createVector(0, 0);
    smooth();
}

function draw() {
    background(0);

    push();
    translate(0, 0);
    // Use scale for 2D "zoom"
    scale(zoom);
    // The offset (note how we scale according to the zoom)
    translate(offset.x / zoom, offset.y / zoom);

    //uncomment this line if you want to make the orbit spins
    // rotate(frameCount*0.01);
    //    drawRadius();

    for (var i = 0; i < myPeople.length; i++) {
        myPeople[i].display();
    }
    //        if (myPeople[i].isHovering()) {
    //            console.log("hovering item #" + i);
    //            showTooltip(myPeople[i]);
    //            filterYear(myPeople[i], inside);
    //        }


        $("#all").click(function () {
            for (var i = 0; i < myPeople.length; i++) {
                myPeople[i].show(5);
            }
//            percentage = countPercentage(myPeople);
//            $("#insideRing").html("");
//            $("#insideRing").css("color", "#666");
//            $("#insideRing").css("border-color", "#666");
            selected = false;
        });
    
        $("#black").click(function () {
            hideAll();
            for (var i = 0; i < blacks.length; i++) {
                blacks[i].show(7);
            }
//            percentage = countPercentage(blacks);
//            $("#insideRing").html(percentage + "%");
//            $("#insideRing").css("color", "#8a522c");
//            $("#insideRing").css("border-color", "#8a522c");
            selected = true;
        });
    
        $("#asian").click(function () {
            hideAll();
            for (var i = 0; i < asians.length; i++) {
                asians[i].show(7);
            }
//            percentage = countPercentage(asians);
//            $("#insideRing").html(percentage + "%");
//            $("#insideRing").css("color", "#ffc800");
//            $("#insideRing").css("border-color", "#ffc800");
            selected = true;
        });
    

    
        $("#white").click(function () {
            hideAll();
            for (var i = 0; i < whites.length; i++) {
                whites[i].show(7);
            }
//            percentage = countPercentage(whites);
//            $("#insideRing").html(percentage + "%");
//            $("#insideRing").css("color", "#fad6ac");
//            $("#insideRing").css("border-color", "#fad6ac");
            selected = true;
        });
    
        $("#hispanic").click(function () {
            hideAll();
            for (var i = 0; i < hispanics.length; i++) {
                hispanics[i].show(7);
            }
//            percentage = countPercentage(hispanics);
//            $("#insideRing").html(percentage + "%");
//            $("#insideRing").css("color", "#00eaff");
//            $("#insideRing").css("border-color", "#00eaff");
            selected = true;
        });
    
        $("#middleeastern").click(function () {
            hideAll();
            for (var i = 0; i < middleeasterns.length; i++) {
                middleeasterns[i].show(7);
            }
//            percentage = countPercentage(middleeasterns);
//            $("#insideRing").html(percentage + "%");
//            $("#insideRing").css("color", "#3bd957");
//            $("#insideRing").css("border-color", "#3bd957");
            selected = true;
        });
    
        $("#multiracial").click(function () {
            hideAll();
            for (var i = 0; i < multiracials.length; i++) {
                multiracials[i].show(7);
            }
//            percentage = countPercentage(multiracials);
//            $("#insideRing").html(percentage + "%");
//            $("#insideRing").css("color", "#ff3984");
//            $("#insideRing").css("border-color", "#ff3984");
            selected = true;
        });
    
        $("#other").click(function () {
            hideAll();
            for (var i = 0; i < others.length; i++) {
                others[i].show(7);
            }
//            percentage = countPercentage(others);
//            $("#insideRing").html(percentage + "%");
//            $("#insideRing").css("color", "#777");
//            $("#insideRing").css("border-color", "#777");
            selected = true;
        });
    
        pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//function drawRadius() {
////    ellipseMode(CENTER);
//    for (var i = 1; i < yearIndex + 1; i++) {
//        noFill();
//        strokeWeight(0.5);
//        stroke(45, 0, 31);
//
//        //changing the scale number will affect the orbit (inner circle) radius
////        ellipse(0, 0, 7 * i + 80, 7 * i + 80);
//    }
//}

//function filterYear(obj, _inside) {
//    for (var i = 0; i < myPeople.length; i++) {
//        if (_inside) {
//            if (myPeople[i].movieYear == obj.movieYear) {
//                myPeople[i].show(5);
//            } else {
//                myPeople[i].hide();
//            }
//        } else {
//            myPeople[i].show(5);
//        }
//    }
//}

function hideAll() {
    for (var i = 0; i < myPeople.length; i++) {
        myPeople[i].hide();
    }
}

function countPercentage(ethnic) {
    return Math.round(ethnic.length / myPeople.length * 100 * 100) / 100;
}

//function showTooltip(obj) {
//    document.getElementById("tooltipPanel").innerHTML = "";
//
//    $("#insideRing").html(obj.movieYear);
//    if (obj.ethnicity == "White") {
//        $("#insideRing").css("color", "#fad6ac");
//        $("#insideRing").css("border-color", "#fad6ac");
//    } else if (obj.ethnicity == "Asian") {
//        $("#insideRing").css("color", "#ffc800");
//        $("#insideRing").css("border-color", "#ffc800");
//    } else if (obj.ethnicity == "Asian/Indian") {
//        $("#insideRing").css("color", "#ff8800");
//        $("#insideRing").css("border-color", "#ff8800");
//    } else if (obj.ethnicity == "Black") {
//        $("#insideRing").css("color", "#8a522c");
//        $("#insideRing").css("border-color", "#8a522c");
//    } else if (obj.ethnicity == "Hispanic") {
//        $("#insideRing").css("color", "#00eaff");
//        $("#insideRing").css("border-color", "#00eaff");
//    } else if (obj.ethnicity == "Multiracial") {
//        $("#insideRing").css("color", "#ff3984");
//        $("#insideRing").css("border-color", "#ff3984");
//    } else if (obj.ethnicity == "Middle Eastern") {
//        $("#insideRing").css("color", "#3bd957");
//        $("#insideRing").css("border-color", "#3bd957");
//    } else if (obj.ethnicity == "American Aborigine" || obj.ethnicity == "Other" || obj.ethnicity == "unknown") {
//        $("#insideRing").css("color", "#777");
//        $("#insideRing").css("border-color", "#777");
//    }

//    var newportrait = obj.pplPortrait.replace("http://ia.media-imdb.com/images/M/", "portraits/");
//    tooltip_pplPortrait = createImg(newportrait);
//    tooltip_pplPortrait.parent("tooltipPanel");
//    tooltip_pplPortrait.class("tooltip-pplPortrait");
//
//    tooltip_pplName = createP(obj.pplName);
//    tooltip_pplName.parent("tooltipPanel");
//    tooltip_pplName.class("tooltip-pplName");
//
//    tooltip_ethnicity = createP("<span style='color:#fff'>Ethnicity: </span>" + obj.ethnicity);
//    tooltip_ethnicity.parent("tooltipPanel");
//    tooltip_ethnicity.class("tooltip-ethnicity");
//}

// MOVIE PROPERTIES
//    var newthumb = obj.movieThumbnail.replace("http://ia.media-imdb.com/images/M/", "moviethumbs/");
//    tooltip_movieThumb = createImg(newthumb);
//    tooltip_movieThumb.parent("tooltipPanel");
//    tooltip_movieThumb.class("tooltip-movieThumb");
//
//    tooltip_movieTitle = createDiv("<span class='tooltip-movieTitle'>#" + obj.movieRank + " <a href='" + obj.movieLink + "' target='_blank'>" + obj.movieTitle + "</a></span><br/>Year: <span class='tooltip-movieYear'>" + obj.movieYear + "</span>" + "&nbsp;&nbsp;" + "Rating: <span class='tooltip-movieRating'>" + obj.movieRating + "</span><br/>Genre: <span class='tooltip-movieGenre'>" + obj.genre + "</span>");
//    tooltip_movieTitle.parent("tooltipPanel");
//    tooltip_movieTitle.class("tooltip-movieProperties");
//}
//
//function link(url, winName, options) {
//    winName && open(url, winName, options) || (location = url);
//}

// FOR PANNING - Store the mouse and the previous offset
//function mousePressed() {
//    mouse = createVector(mouseX, mouseY);
//    poffset.set(offset);
//    // when you click on each bubble, it will open up the link on browser
//    // for (var i = 0; i < myPeople.length; i++) {
//    // if (myPeople[i].isHovering()) {
//    // link(myPeople[i].pplLink, "_new");
//    // }
//    // }
//    record = true;
//}

//function keyPressed() {
//    if (keyCode === UP_ARROW) {
//        zoom += 0.1;
//    } else if (keyCode === DOWN_ARROW) {
//        zoom -= 0.1;
//    }
//}

// UNCOMMENT FOR ZOOM + PANNING
// function mouseWheel(event) {
//   // console.log(event.delta);
//   //move the square according to the vertical scroll amount
//   // zoom += event.delta;
//   if (event.delta >0) {
//     zoom += 0.1;
//   } else if (event.delta <0) {
//     zoom -= 0.1;
//   }
//   //uncomment to block page scrolling
//   return false;
// }

// Calculate the new offset based on change in mouse vs. previous offsey
// function mouseDragged() {
//   offset.x = mouseX - mouse.x + poffset.x;
//   offset.y = mouseY - mouse.y + poffset.y;
// }
//
//function mouseMoved() {
//    var distance = dist(mouseX, mouseY, width / 2, height / 2);
//    if (distance < width / 4 + 25) {
//        console.log(distance + " inside the ring");
//        inside = true;
//        // return true;
//    } else {
//        console.log(distance + " outside the ring");
//        inside = false;
//
//        if (selected == false) {
//            for (var i = 0; i < myPeople.length; i++) {
//                myPeople[i].show(5);
//            }
//            percentage = countPercentage(myPeople);
//            $("#insideRing").html("");
//            $("#insideRing").css("color", "#666");
//            $("#insideRing").css("border-color", "#666");
//        }
//        // return false;
//    }
//}
