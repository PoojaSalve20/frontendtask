// document.querySelector('.menu-icon').addEventListener('click', function() {
//     document.querySelector('.nav-links').classList.toggle('active');
//     this.classList.toggle('close');
// });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');

  title.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordionItems.forEach(item => {
      item.classList.remove('active');
      item.querySelector('.accordion-content').style.display = 'none';
    });

    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.accordion-content').style.display = 'block';
    }
  });
});
document.getElementById('calculate').addEventListener('click', function() {
    const teamMembers = parseFloat(document.getElementById('teamMembers').value);
    const networkSize = parseFloat(document.getElementById('networkSize').value);
    const signalsPerContact = parseFloat(document.getElementById('signalsPerContact').value);
    const legitimateSignals = parseFloat(document.getElementById('legitimateSignals').value) / 100;
    const uniqueSignals = parseFloat(document.getElementById('uniqueSignals').value) / 100;
    const newSignals = parseFloat(document.getElementById('newSignals').value);
  
    const result = teamMembers * networkSize * signalsPerContact * legitimateSignals * uniqueSignals * newSignals;
    document.getElementById('output').textContent = 'Result: ' + result.toFixed(2);
  });
  
  document.getElementById('legitimateSignals').addEventListener('input', function() {
    document.getElementById('legitimateSignalsValue').textContent = this.value;
  });
  
  document.getElementById('uniqueSignals').addEventListener('input', function() {
    document.getElementById('uniqueSignalsValue').textContent = this.value;
  });
  function changeText(index) {
    const mainHeadings = ["Build More Relationships. Close More Deals. Automate Everything In Between. ", "Stop Wasting Hours On Outdated Spreadsheets And Clunky CRMs",  ];
    const subHeadings = ["The relationship intelligence & deal flow platform designed by ex-investors for  Venture Capital", "4Degrees platform helps you  eliminate busywork  and manage your deals and relationships effortlessly.",  ];
  
    const mainHeading = document.querySelector(".main-heading");
    const subHeading = document.querySelector(".sub-heading");
    const dots = document.querySelectorAll(".dot");
  
    mainHeading.textContent = mainHeadings[index];
    subHeading.textContent = subHeadings[index];
  
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
 
document.addEventListener("DOMContentLoaded", function() {
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = button.getAttribute('data-filter');
      filterPosts(category);
    });
  });

  // Search functionality
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  searchBtn.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      filterPostsBySearch(searchTerm);
  });

  function filterPostsBySearch(searchTerm) {
      const posts = document.querySelectorAll('.post');
      posts.forEach(post => {
          const title = post.querySelector('h2').textContent.toLowerCase();
          if (title.includes(searchTerm)) {
              post.style.display = 'block';
          } else {
              post.style.display = 'none';
          }
      });
  }


  // Function to filter posts by category
  function filterPosts(category) {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
      const postCategory = post.getAttribute('data-category');
      if (category === 'all' || postCategory === category) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  const postCards = document.querySelectorAll('.post');

  // Initially hide all cards except the first three
  for (let i = 3; i < postCards.length; i++) {
      postCards[i].style.display = 'none';
  }

  // Function to show next three cards
  loadMoreBtn.addEventListener('click', function() {
      for (let i = 3; i < postCards.length; i++) {
          if (postCards[i].style.display === 'none') {
              postCards[i].style.display = 'block';
          } else {
              // If all cards are displayed, hide the Load More button
              loadMoreBtn.style.display = 'none';
              break;
          }
      }
  });
});
document.getElementById("industries-link").addEventListener("click", function() {
  var dropdown = document.getElementById("industries-dropdown");
  if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
  } else {
      dropdown.style.display = "none";
  }
});
document.getElementById("product-link").addEventListener("click", function() {
  var dropdown = document.getElementById("product-dropdown");
  if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
  } else {
      dropdown.style.display = "none";
  }
});
