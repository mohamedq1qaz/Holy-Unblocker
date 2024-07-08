/* -----------------------------------------------
/* Authors: QuiteAFancyEmerald
/* GNU Affero General Public License v3.0: https://www.gnu.org/licenses/agpl-3.0.en.html
/* Card Shimmer Mouse Follow Script
/* ----------------------------------------------- */

// Function declarations
//  Track the cursor position with respect to the top left of the card.
//  The "this" keyword gets the element that invoked the event listener.
const handleMouseMove = element => {
  element.addEventListener("mousemove", e => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
  });
},

//  Reset the cursor tracking variables when the cursor leaves the card.
handleMouseLeave = element => {
  element.addEventListener("mouseleave", () => {
    this.style.setProperty("--mouse-x", `50%`);
    this.style.setProperty("--mouse-y", `50%`);
  });
};

// Query and add event listeners
const shimmerEffects = document.querySelectorAll(".box-card");

//  Attach CSS variables, mouse-x and mouse-y, to elements that will be
//  given shimmer effects, by adding or modifying the style attribute.
//  CSS calculates and renders the actual shimmer effect from there.
shimmerEffects.forEach(handleMouseMove);
shimmerEffects.forEach(handleMouseLeave);
