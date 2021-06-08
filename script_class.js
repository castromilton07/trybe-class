const translate = () => {
  return new Promisse((resolve, reject) => {
    if(language === 'english') {
      const translatedWord = englishRordFor(word);
      resolve(translatedWord);
    } else {
      reject('Language not found in my brain, sorry :(');    }
  });
};

const execute = () => {
  translate('olá', 'english')
    .then((result) => console.log(result))
};

/* const execute = () => {
  translate('olá', 'korean')
    .then()
    .catch();
}; */

execute();