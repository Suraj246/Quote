function generate() {
  var quotes = {
    "- Mother Teresa":
      '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
    "- Franklin D. Roosevelt":
      '"When you reach the end of your rope, tie a knot in it and hang on."',
    "- Margaret Mead":
      '"Always remember that you are absolutely unique. Just like everyone else."',
    "- Robert Louis Stevenson":
      '"Dont judge each day by the harvest you reap but by the seeds that you plant."',
    "- Nelson Mandela":
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    "- Walt Disney":
      '"The way to get started is to quit talking and begin doing. "',
  };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;

  document.getElementById("author").innerHTML = author;
}
