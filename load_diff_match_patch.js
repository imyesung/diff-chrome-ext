export function loadDiffMatchPatch() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'diff_match_patch.js';
    script.onload = () => {
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
