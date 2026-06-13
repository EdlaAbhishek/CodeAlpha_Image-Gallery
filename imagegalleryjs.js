var images = document.querySelectorAll(".gallery img");

var lightbox = document.getElementById("lightbox");

var lightboxImage = document.getElementById("lightboxImage");

var currentIndex = 0;

function openLightBox(index)
{
    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImage.src = images[currentIndex].src;
}

function closeLightBox()
{
    lightbox.style.display = "none";
}

function nextImage()
{
    currentIndex++;

    if(currentIndex >= images.length)
    {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;
}

function previousImage()
{
    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;
}

function filterImages(category)
{
    var boxes = document.querySelectorAll(".image-box");

    for(var i=0;i<boxes.length;i++)
    {
        if(category === "all")
        {
            boxes[i].style.display = "block";
        }
        else
        {
            if(boxes[i].classList.contains(category))
            {
                boxes[i].style.display = "block";
            }
            else
            {
                boxes[i].style.display = "none";
            }
        }
    }
}

document.addEventListener("keydown", function(event){

    if(lightbox.style.display === "flex")
    {
        if(event.key === "ArrowRight")
        {
            nextImage();
        }

        if(event.key === "ArrowLeft")
        {
            previousImage();
        }

        if(event.key === "Escape")
        {
            closeLightBox();
        }
    }
});

lightbox.addEventListener("click", function(event){

    if(event.target === lightbox)
    {
        closeLightBox();
    }

});