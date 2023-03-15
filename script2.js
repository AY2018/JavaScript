window.onload = () => {
  const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&";
  const header = document.getElementById('loader');
  let repetitions = 0;

  const interval = setInterval(() =>{
    header.innerText = header.dataset.titre.split("")
      .map((letter, index) => {
        if(index < repetitions){
          return header.dataset.titre[index];
        }
        return lettres[Math.floor(Math.random() * 25)];
      })
      .join("");

    if(repetitions >= header.dataset.titre.length) {
      clearInterval(interval);
    }
    repetitions += 1 / 3;
  }, 30);
};