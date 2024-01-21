const domcontentloadedText = document.getElementById("domcontentloaded_text");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    domcontentloadedText.style.opacity = "0";
    setTimeout(() => {
      domcontentloadedText.style.display = "none";
    }, 200);
  }, 2000);
});
/* transform ayarla */
const farabiulderMain = document.getElementById("farabiulder_main_inner");
const farabiulderBubble = document.getElementById("farabiulder_bubble_inner");
const farabiulderShopify = document.getElementById("farabiulder_shopify_inner");
// const farabiulderInnerP = document.getElementById("farabiulder_inner_p"),
//   farabiulderInnerP2 = document.getElementById("farabiulder_inner_p_2"),
//   farabiulderInnerP3 = document.getElementById("farabiulder_inner_p_3");
farabiulderMain.addEventListener("mouseenter", () => {
  farabiulderBubble.style.backgroundColor = "rgba(255,255,255,0.6)";
  farabiulderBubble.style.backdropFilter = "blur(10px)";
  farabiulderShopify.style.backgroundColor = "rgba(255,255,255,0.6)";
  farabiulderShopify.style.backdropFilter = "blur(10px)";
});
farabiulderMain.addEventListener("mouseleave", () => {
  farabiulderBubble.style.backgroundColor = "transparent";
  farabiulderBubble.style.backdropFilter = "blur(0)";
  farabiulderShopify.style.backgroundColor = "transparent";
  farabiulderShopify.style.backdropFilter = "blur(0)";
});
farabiulderBubble.addEventListener("mouseenter", () => {
  farabiulderMain.style.backgroundColor = "rgba(255,255,255,0.6)";
  farabiulderMain.style.backdropFilter = "blur(10px)";
  farabiulderShopify.style.backgroundColor = "rgba(255,255,255,0.6)";
  farabiulderShopify.style.backdropFilter = "blur(10px)";
});
farabiulderBubble.addEventListener("mouseleave", () => {
  farabiulderMain.style.backgroundColor = "transparent";
  farabiulderMain.style.backdropFilter = "blur(0)";
  farabiulderShopify.style.backgroundColor = "transparent";
  farabiulderShopify.style.backdropFilter = "blur(0)";
});
farabiulderShopify.addEventListener("mouseenter", () => {
  farabiulderMain.style.backgroundColor = "rgba(255,255,255,0.6)";
  farabiulderMain.style.backdropFilter = "blur(10px)";
  farabiulderBubble.style.backgroundColor = "rgba(255,255,255,0.6)";
  farabiulderBubble.style.backdropFilter = "blur(10px)";
});
farabiulderShopify.addEventListener("mouseleave", () => {
  farabiulderMain.style.backgroundColor = "transparent";
  farabiulderMain.style.backdropFilter = "blur(0)";
  farabiulderBubble.style.backgroundColor = "transparent";
  farabiulderBubble.style.backdropFilter = "blur(0)";
});

farabiulderMain.addEventListener("click", () => {
  // domcontentloadedText.style.width = "33.333%";
  domcontentloadedText.style.opacity = "1";
  domcontentloadedText.style.display = "grid";
  // domcontentloadedText.style.top = "0";
  domcontentloadedText.style.zIndex = "1";
  setTimeout(() => {
    domcontentloadedText.style.opacity = "0";
    setTimeout(() => {
      domcontentloadedText.style.display = "none";
    }, 300);
  }, 2000);
});
farabiulderBubble.addEventListener("click", () => {
  // domcontentloadedText.style.width = "33.333%";
  domcontentloadedText.style.opacity = "1";
  domcontentloadedText.style.display = "grid";
  // domcontentloadedText.style.top = "0";
  domcontentloadedText.style.zIndex = "1";
  setTimeout(() => {
    domcontentloadedText.style.opacity = "0";
    setTimeout(() => {
      domcontentloadedText.style.display = "none";
    }, 300);
  }, 2000);
});
farabiulderShopify.addEventListener("click", () => {
  // domcontentloadedText.style.width = "33.333%";
  domcontentloadedText.style.opacity = "1";
  domcontentloadedText.style.display = "grid";
  // domcontentloadedText.style.top = "0";
  domcontentloadedText.style.zIndex = "1";
  setTimeout(() => {
    domcontentloadedText.style.opacity = "0";
    setTimeout(() => {
      domcontentloadedText.style.display = "none";
    }, 300);
  }, 2000);
});
