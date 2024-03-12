// CONSTANTS (in pt)
const MIN_LAST_LINE_WIDTH = 40;
const MAX_LETTER_SPACING = 0.3;
const LETTER_SPACING_INCREMENT = 0.05;

// Get both <p> and <li> elements
const elements = Array.from(document.querySelectorAll('p,li'));

elements.forEach((element) => {
  const textEndSpan = document.createElement('span');
  textEndSpan.className = 'text-end';

  // add marks to the end of every paragraphs and list item
  element.appendChild(textEndSpan);
});

Prince.trackBoxes = true;
Prince.registerPostLayoutFunc(adjustLetterSpacing);

function adjustLetterSpacing() {
  let changed = false;

  elements.forEach((element) => {
    const elementBox = element.getPrinceBoxes()[0];
    // Skip paragraphs with only one line
    if (elementBox.h < 15) return;

    const textEnd = element.querySelector('span.text-end');
    if (!textEnd) return;

    const textEndBox = textEnd.getPrinceBoxes()[0];
    if (!textEndBox) return;

    if (!element.style.letterSpacing) element.style.letterSpacing = '0pt';
    const spacingInPt = parseFloat(element.style.letterSpacing);
    const lastLineWidth = textEndBox.x - elementBox.x;
    if (
      lastLineWidth < MIN_LAST_LINE_WIDTH &&
      spacingInPt < MAX_LETTER_SPACING
    ) {
      // increase letter spacing by `LETTER_SPACING_INCREMENT`
      element.style.letterSpacing =
        spacingInPt + LETTER_SPACING_INCREMENT + 'pt';

      changed = true;
    }
  });

  if (changed) {
    Prince.registerPostLayoutFunc(adjustLetterSpacing);
  }
}
