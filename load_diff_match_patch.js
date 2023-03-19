export function loadDiffMatchPatch() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'diff_match_patch.js';
    script.onload = () => {
      console.log('diff_match_patch.js loaded');
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
