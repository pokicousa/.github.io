const posts = [
  {
    id: 1,
    quote: 'Büyük şeyler küçük şeylerin bir araya gelmesidir.',
    author: 'Van Gogh',
  },
  {
    id: 2,
    quote:
      'Açıklamalarla vaktini harcama. İnsanlar sadece duymak istediklerini duyarlar.',
    author: 'Paulo Coelho',
  },
  {
    id: 3,
    quote: 'Her bildiğini söyleme, her söylediğini bil.',
    author: 'Clavdius',
  },
  {
    id: 4,
    quote: 'Savaşın iyisi, barışın kötüsü yoktur.',
    author: 'Benjamin Franklin',
  },
  {
    id: 5,
    quote: 'Mutluluğu tatmanın tek çaresi, onu paylaşmaktır.',
    author: 'Byron',
  },
  {
    id: 6,
    quote: 'Hayatta hep mutlu olursam, Hayalini kuracak neyim kalır.',
    author: 'Dostoyevski',
  },
  {
    id: 7,
    quote:
      'İnsanların seni çok sevdiği zaman, onların işine en çok yaradığın zamandır',
    author: 'Bukowski',
  },
  {
    id: 8,
    quote:
      'Bir kalbi kırdıktan sonra gelen özür, doyduktan sonra sofraya gelen tuz gibidir. İhtiyaç kalmaz!',
    author: 'Pablo Neruda',
  },
  {
    id: 9,
    quote:
      'Ya susmak ya da suskunluktan daha kıymetli bir söz söylemek gerekir.',
    author: 'Pisagor',
  },
  {
    id: 10,
    quote: 'Gülmek için mutlu olmayı beklemeyin belki de gülmeden ölürsünüz.',
    author: 'Victor Hugo',
  },
  {
    id: 11,
    quote: 'Kendini yanlış hikayede bulursan ayrıl.',
    author: 'Mo Willems',
  },
];
// To keep the published post visible on a web page for 24 hours, you can store the post content along with a timestamp indicating when it was published. Then, you can check the timestamp whenever someone visits the web page to determine if the post is still valid (i.e., if it has been less than 24 hours since it was published). Here's an example of how you can modify the code to achieve this:

let currentPost = null;

function publishPost() {
  const currentDate = new Date();
  const postIndex = currentDate.getDate() % posts.length;
  // const randomPostIndex = Math.floor(Math.random() * postIndex);
  currentPost = {
    content: posts[postIndex],
    timestamp: currentDate.getTime(), // Store the timestamp when the post was published
  };
  // console.log('Publishing post: ', currentPost.content);
  // console.log(currentDate);
}

function displayPost() {
  // Check if there is a current post and if it has been less than 24 hours since it was published
  if (
    currentPost &&
    new Date().getTime() - currentPost.timestamp < 24 * 60 * 60 * 1000
  ) {
    // Display the current post on the web page
    document.getElementById('quote-text').textContent =
      currentPost.content.quote;
    document.getElementById('author').textContent = currentPost.content.author;
  } else {
    // If the post is no longer valid, publish a new post
    publishPost();
    displayPost(); // Update the displayed post
  }
}

// Call the displayPost function when the page loads to display the initial post
displayPost();

// Schedule the publishPost function to run every day at a specific time (for example, at 12:00 AM)
setInterval(function () {
  publishPost();
  displayPost(); // Update the displayed post
}, 24 * 60 * 60 * 1000); // Run every 24 hours
