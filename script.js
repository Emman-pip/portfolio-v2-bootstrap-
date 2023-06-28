function scrollObserver(section, toAffect, typeOfDisplay) {
  const option = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        console.log("inter");
        toAffect.style.display = typeOfDisplay;
      } else {
        console.log("!inters");
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
