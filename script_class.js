const translate = () => {
  return new Promise((resolve, reject) => {
    if(language === 'english') {
      const translatedWord = englishWordFor(word);
      resolve(translatedWord);
    } else {
      reject('Language not found in my brain, sorry :(');    }
  });
};

/* const execute = () => {
  translate('olá', 'english')
    .then((result) => console.log(result))
}; */

const execute = async () => {
  try {
  const translateWord = await translate('olá', 'english')
    console.log(translateWord); 
  } catch (error) {
    console.log(error);
  }
};

/* const execute = () => {
  translate('olá', 'korean')
    .then()
    .catch();
}; */

execute();