const quotes = [
    { text: "I have a lot of growing up to do. I realized that the other day inside my fort.", author: "Zach Galifianakis" },
    { text: "Today you are You, that is truer than true. There is no one alive who is Youer than You.", author: "Dr. Seuss" },
    { text: "It is better to have loved & lost than never to have loved at all.", author: "Alfred Tennyson" },
    { text: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.", author: "Harvey Fierstein" },
    { text: "Life is a long lesson in humility.", author: "James M. Barrie" },
    { text: "In real life, I assure you, there is no such thing as algebra.", author: "Fran Lebowitz" },
    { text: "Let us sacrifice our today so that our children can have a better tomorrow.", author: "Dr. A.P.J. Abdul Kalam" },
  ];
  
  const bgColors = [
    "#F08080", 
    "#FFA07A", 
    "#FA8072", 
    "#CD5C5C", 
    "#E9967A",
    "#FF7F50",
  ];
  
  let index = 0;
  
  function showQuote(i) 
  {
    const quote = quotes[i];
    document.getElementById("quoteText").textContent = `"${quote.text}"`;
    document.getElementById("quoteAuthor").textContent = `- ${quote.author}`;
    document.body.style.backgroundColor = bgColors[i % bgColors.length];
  }
  
  showQuote(index);
  
  setInterval(() => {
    index = (index + 1) % quotes.length;
    showQuote(index);
  }, 4000);
  