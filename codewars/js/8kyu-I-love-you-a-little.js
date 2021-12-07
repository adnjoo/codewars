// bp
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]
  
  function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
  }
  
  // shorter
  const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]
  
  // attempt
  const howMuchILoveYou = nbPetals => {
    const petals = ['I love you', 'a little', 'a lot', 'passionately','madly','not at all']
    return nbPetals % 6 == 0  ? petals[5] : petals[nbPetals % 6 - 1]
  }
  