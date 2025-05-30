// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Reviews Slider
const reviews = [
    {
        name: "Sarah Johnson",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        text: "Our agent was incredible throughout our entire home buying process.",
        rating: 5
    },
    {
        name: "Michael Thompson",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        text: "Selling our family home of 25 years was emotional, but our agent handled everything professionally.",
        rating: 5
    },
    {
        name: "Jennifer Davis",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        text: "The market analysis provided was detailed and accurate.",
        rating: 5
    }
];

const reviewsTrack = document.querySelector('.reviews-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Create review cards
reviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
        <img src="${review.image}" alt="${review.name}" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 1rem;">
        <h3>${review.name}</h3>
        <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
        <p>${review.text}</p>
    `;
    reviewsTrack.appendChild(reviewCard);
});

// Slider controls
function updateSlider() {
    reviewsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, reviews.length - 1);
    updateSlider();
});

// Properties Grid
const properties = [
    {
      image: "src/pics/115.png",
      title: "Elegant New Construction",
      price: "$699,999",
      location: "115 Roman Ln, Hawthorn Woods, IL 60047",
      beds: 3,
      baths: 2.5,
      sqft: 2500
    },
    {
      image: "src/pics/156.png",
      title: "Modern New Build",
      price: "$749,999",
      location: "156 Roman Ln, Hawthorn Woods, IL 60047",
      beds: 4,
      baths: 4,
      sqft: 2754
    },
    {
      image: "src/pics/4585.png",
      title: "Expansive Estate",
      price: "$1,250,000",
      location: "4585 Patricia Dr, Long Grove, IL 60047",
      beds: 6,
      baths: 6,
      sqft: 7364,
    },
    {
      image: "src/pics/2103.png",
      title: "Charming Suburban Home",
      price: "$1,850,000",
      location: "2103 N 2653 Rd, Merseilles, IL",
      beds: 8,
      baths: 12,
      sqft: 12548,
    },
    {
        image: "src/pics/235.png",
        title: "Spacious Family Home",
        price: "$525,000",
        location: "235 E Baltusrol Dr, Vernon Hills, IL 60061",
        beds: 5,
        baths: 3.5,
        sqft: 3311
    },
    {
      image: "src/pics/437.png",
      title: "Charming Brick Ranch",
      price: "$279,954",
      location: "437 E Pine Hurst Drive, IL",
      beds: 4,
      baths: 2,
      sqft: 2170
    },
    {
        image: "src/pics/41.png",
        title: "Updated Apartment",
        price: "$136,708",
        location: "41 N Mayfield Ave APT F, Chicago, IL 60644",
        beds: 3,
        baths: 1.5,
        sqft: 1800
    },
    {
        image: "src/pics/1318.png",
        title: "Historic Urban Home",
        price: "$316,395",
        location: "1318 S Claremont Ave, Chicago, IL 60608",
        beds: 3,
        baths: 1.5,
        sqft: 1496    
    },
    {
      image: "src/pics/6073.png",
      title: "Spacious Bungalow",
      price: "$183,800",
      location: "6037 S May St, Chicago, IL 60621",
      beds: 4,
      baths: 1,
      sqft: 1300
    },
    {
      image: "src/pics/7825.png",
      title: "Classic Chicago Home",
      price: "$242,051",
      location: "7825 S Lowe Ave, Chicago, IL 60620",
      beds: 6,
      baths: 3,
      sqft: 2648
    },
    {
      image: "src/pics/8051.png",
      title: "Renovated City Residence",
      price: "$106,465",
      location: "8051 S Saginaw Ave, Chicago, IL",
      beds: 4,
      baths: 1,
      sqft: 1260
    }
  ];
  

const propertiesGrid = document.querySelector('.properties-grid');

// Create property cards
properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card';
    propertyCard.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="property-image">
        <div class="property-content">
            <h3>${property.title}</h3>
            <p class="price">${property.price}</p>
            <p class="location">${property.location}</p>
            <div class="details">
                <span>${property.beds} beds</span> • 
                <span>${property.baths} baths</span> • 
                <span>${property.sqft} sqft</span>
            </div>
        </div>
    `;
    propertiesGrid.appendChild(propertyCard);
});