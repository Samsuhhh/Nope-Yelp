import "./Carousel.css"

const Carousel = () => {

    // document.getElementById("outer3").addEventListener("click", toggleState3);

    function toggleState3() {
        let galleryView = document.getElementById("galleryView")
        let tilesView = document.getElementById("tilesView")
        let outer = document.getElementById("outer3");
        let slider = document.getElementById("slider3");
        let tilesContainer = document.getElementById("tilesContainer");
        if (slider.classList.contains("active")) {
            slider.classList.remove("active");
            outer.classList.remove("outerActive");
            galleryView.style.display = "flex";
            tilesView.style.display = "none";

            while (tilesContainer.hasChildNodes()) {
                tilesContainer.removeChild(tilesContainer.firstChild)
            }
        } else {
            slider.classList.add("active");
            outer.classList.add("outerActive");
            galleryView.style.display = "none";
            tilesView.style.display = "flex";

            for (let i = 0; i < imgObject.length - 1; i++) {
                let tileItem = document.createElement("div");
                tileItem.classList.add("tileItem");
                tileItem.style.background = "url(" + imgObject[i] + ")";
                tileItem.style.backgroundSize = "contain";
                tilesContainer.appendChild(tileItem);
            }
        };
    }

    let imgObject = [
        "https://placeimg.com/450/450/any",
        "https://placeimg.com/450/450/animals",
        "https://placeimg.com/450/450/architecture",
        "https://placeimg.com/450/450/nature",
        "https://placeimg.com/450/450/people",
        "https://placeimg.com/450/450/tech",
        "https://picsum.photos/id/1/450/450",
        "https://picsum.photos/id/8/450/450",
        "https://picsum.photos/id/12/450/450",
        "https://picsum.photos/id/15/450/450",
        "https://picsum.photos/id/5/450/450",
    ];

    let mainImg = 0;
    let prevImg = imgObject.length - 1;
    let nextImg = 1;

    function loadGallery() {

        let mainView = document.getElementById("mainView");
        mainView.style.background = "url(" + imgObject[mainImg] + ")";
        let leftView = document.getElementById("leftView");
        leftView.style.background = "url(" + imgObject[prevImg] + ")";

        let rightView = document.getElementById("rightView");
        rightView.style.background = "url(" + imgObject[nextImg] + ")";

        let linkTag = document.getElementById("linkTag")
        linkTag.href = imgObject[mainImg];

    };

    function scrollRight() {

        prevImg = mainImg;
        mainImg = nextImg;
        if (nextImg >= (imgObject.length - 1)) {
            nextImg = 0;
        } else {
            nextImg++;
        };
        loadGallery();
    };

    function scrollLeft() {
        nextImg = mainImg
        mainImg = prevImg;

        if (prevImg === 0) {
            prevImg = imgObject.length - 1;
        } else {
            prevImg--;
        };
        loadGallery();
    };

    document.getElementById("navRight");
    document.getElementById("navLeft");
    document.getElementById("rightView");
    document.getElementById("leftView");
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 37) {
            scrollLeft();
        } else if (e.keyCode === 39) {
            scrollRight();
        }
    });
    loadGallery();

    return (
        <body>
            <div id="container">
                <div id="toggleContainer">
                    <label>Carousel</label>
                    <div id="toggle">
                        <div onClick={toggleState3()} id="outer3">
                            <div id="slider3"></div>
                        </div>
                        <label>Tiles</label>
                    </div>
                </div>
                <div id="galleryView">
                    <div id="galleryContainer">
                        <div onClick={scrollLeft()} id="leftView"></div>
                        <button onClick={scrollLeft()} id="navLeft" class="navBtns"><i class="fas fa-arrow-left fa-3x"></i></button>
                        <a id="linkTag">
                            <div id="mainView"></div>
                        </a>
                        <div onClick={scrollRight()} id="rightView"></div>
                        <button onClick={scrollRight()} id="navRight" class="navBtns"><i class="fas fa-arrow-right fa-3x"></i></button>
                    </div>
                </div>
                <div id="tilesView">
                    <div id="tilesContainer"></div>
                </div>
            </div>
        </body>
    )
}

export default Carousel;