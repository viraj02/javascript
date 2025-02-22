// Find duplicate characters

function findDuplicates(str) {
	if (!str || typeof str !== 'string') return '';

	const duplicateCharFreq = {};
  
  const destruStr = [...str.toLowerCase()];
	
  destruStr.forEach(s => {
  	if (duplicateCharFreq[s]) {
    	duplicateCharFreq[s]++;
    } else {
    	duplicateCharFreq[s] = 1;
    }
  });
  
  return duplicateCharFreq;
  
}

let duplicateFreq = findDuplicates('Helloh World');
console.log(duplicateFreq);
