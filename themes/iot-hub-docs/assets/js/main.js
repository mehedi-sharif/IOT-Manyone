// main script
(function () {
  "use strict";

  // toggle sidebar
  const navToggle = document.getElementById("nav-toggle");
  const overlay = document.querySelector(".overlay");
  const sidebarMenu = document.querySelector(".sidebar-menu");

  navToggle?.addEventListener("click", () => {
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    sidebarMenu.style.left = "0";
  });

  overlay?.addEventListener("click", () => {
    overlay.style.opacity = "";
    overlay.style.visibility = "";
    sidebarMenu.style.left = "-100%";
    navToggle.checked = false;
  });

  // TableOfContents
  const toc = document.querySelector("#TableOfContents a");
  if (toc !== null) {
    new ScrollMenu("#TableOfContents a", {
      duration: 50,
      activeOffset: 110,
      scrollOffset: 110,
    })
  }

  // code-block
  const codeBlocks = document.querySelectorAll(".code-block");
  if (codeBlocks.length !== 0) {
    codeBlocks.forEach((block) => {
      let code = block.querySelector("code");
      let codeBlockTitle = block.querySelector(".code-block-title");
      let language = code.className;
      language = language.replace("language-", "");
      codeBlockTitle.innerText = language;

      const pre = block.querySelector("pre");
      const codeBlockAction = block.querySelector(".code-block-action");
      const preHeight = pre.offsetHeight;
      if (preHeight > 420) {
        block.classList.add("expandable");
      } else {
        codeBlockAction.remove();
      }

      codeBlockAction.addEventListener("click", () => {
        block.classList.toggle("expanded");
      });

      const copyCodeButton = block.querySelector("[data-action='copy']");
      copyCodeButton.addEventListener("click", async () => {
        await copyCode(block, copyCodeButton);
      });
      async function copyCode(block, copyCodeButton) {
        let code = block.querySelector("code");
        let text = code.innerText;
        await navigator.clipboard.writeText(text);
        copyCodeButton.querySelector("span").innerText = "copied!";
        copyCodeButton.querySelector("svg").style.display = "none";
        setTimeout(() => {
          copyCodeButton.querySelector("span").innerText = "";
          copyCodeButton.querySelector("svg").style.display = "";
        }, 1500);
      }

    });
  }

  // data-clipboard-text copy to clipboard
  const copyButtons = document.querySelectorAll("[data-clipboard-text]");

  if (copyButtons.length !== 0) {
    copyButtons.forEach((button) => {
      let buttonClick = false;
      button.addEventListener("click", () => {
        buttonClick = true;
        let text = button.getAttribute("data-clipboard-text");
        let URL = window.location.href;
        navigator.clipboard.writeText(URL.replace(/#.*$/, "") + text);
        button.querySelector(".copied").style.display = "inline";
        button.querySelector(".fa-link").style.display = "none";
      });

      button.parentNode.addEventListener("mouseover", () => {
        button.style.display = "inline";
      });

      button.parentNode.addEventListener("mouseout", () => {
        if (!buttonClick) {
          button.style.display = "none";
        } else {
          setTimeout(() => {
            button.style.display = "none";
            buttonClick = false;
            button.querySelector(".copied").style.display = "none";
            button.querySelector(".fa-link").style.display = "inline";
          }, 1500);
        }
      });

    });
  }

  // ####################### Testimonial Slider #########################
  // new Swiper(".testimonial-slider", {
  //   spaceBetween: 24,
  //   loop: true,
  //   pagination: {
  //     el: ".testimonial-slider-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //     },
  //   },
  // });
})();
