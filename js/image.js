//June 9th 2017
//Tinsley Huo 
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    var images = {
        image: [
            {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 1'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 2'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 3'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 4'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 5'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 6'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 7'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 8'
            }
    , {
                src: 'https://source.unsplash.com/user/tinsleyfok/daily',
                alt: 'Project 9'
            }
  ]
    };

    // Show Modal Image 
    function onClick(element) {
        document.getElementById("img").src = element.src;
        document.getElementById("modal").style.display = "block";
    }

});