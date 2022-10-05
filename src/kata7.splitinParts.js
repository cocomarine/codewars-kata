var splitInParts = function(s, partLength){
  
    let newStr = "";
    
    for(let i = 0; i < s.length; i+=partLength) {
      newStr += s.substring(i, i + partLength) + " ";
    }
      
    return newStr.trim();
  }