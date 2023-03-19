import { loadDiffMatchPatch } from './load_diff_match_patch.js';

async function init() {
  try {
    console.log('Loading diff_match_patch.js library...');
    await loadDiffMatchPatch();

    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM content loaded');
      const compareBtn = document.getElementById('compare-btn');
      const text1 = document.getElementById('text1');
      const text2 = document.getElementById('text2');
      const result = document.getElementById('result');

      function diffCheck(textA, textB) {
        console.log('Running diffCheck function');
        const dmp = new diff_match_patch();
        const diffs = dmp.diff_main(textA, textB);
        dmp.diff_cleanupSemantic(diffs);
        return diffs;
      }

      function createResultHtml(diffs) {
        console.log('Creating HTML result');
        const resultHtml = diffs.map(diff => {
          const type = diff[0];
          const text = diff[1];

          if (type === 1) {
            return `<ins style="background-color:#e6ffe6">${text}</ins>`;
          } else if (type === -1) {
            return `<del style="background-color:#ffe6e6">${text}</del>`;
          } else {
            return text;
          }
        });

        return resultHtml.join('');
      }

      compareBtn.addEventListener('click', () => {
        console.log('Compare button clicked');
        const differences = diffCheck(text1.value, text2.value);
        result.innerHTML = createResultHtml(differences);
      });
    });
  } catch (error) {
    console.error('Error loading diff_match_patch.js:', error);
  }
}

console.log('Initializing...');
init();
