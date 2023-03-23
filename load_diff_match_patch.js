export function diff_match_patch(textA, textB) {
  console.log('Running diffCheck function');
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(textA, textB);
  dmp.diff_cleanupSemantic(diffs);
  return diffs;
}
