function scrollObserver(section, toAffect, typeOfDisplay) {
  const option = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        toAffect.style.display = typeOfDisplay;
      } else {
        toAffect.style.display = "none";
      }
    });
  }, option);
  observer.observe(section);
}

scrollObserver(
  document.querySelector(".slimTop"),
  document.querySelector(".logo"),
  "flex"
);

function slowScroll(element, target) {
  element.onscroll = () => {
    const scrolltoTop = document.scrollingElement.scrollTop;

    const xvalue = "center";
    const scrollFactor = 0.3;
    const yValue = scrolltoTop * scrollFactor;
    target.style.backgroundPosition = xvalue + " " + yValue + "px";
  };
}

// slowScroll(document.querySelector("body"), document.querySelector(".section1"));
