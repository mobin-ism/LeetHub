function longestCommonPrefix(strs: string[]): string {
    let similarity = 0
    strs.sort()
    for (let i=0; i<strs[0].length; i++) {
      for(let j=1; j<strs.length; j++){
          if(strs[j][i] != strs[0][i]){
            return strs[0].substr(0, similarity)
          }
      }
      similarity++
    }
    
    return similarity ? strs[0].substr(0, similarity) : ""
};