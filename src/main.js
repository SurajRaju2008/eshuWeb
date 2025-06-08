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
        name: "Anthony S",
        text: "Working with Eshu was an absolute pleasure. He is incredibly attentive, organized, and trulygoes above and beyond for his clients. His dedication to ensuring every detail is taken care of made the entire process seamless and stress-free. It’s rare to find someone who combines professionalism with such genuine care for his clients’ needs. I highly recommend Eshu to anyone looking for exceptional service and commitment.",
        rating: 5
    },
    {
        name: "Ani",
        text: "I cannot say enough good things about Eshu. He was always available to answer my questions, no matter how small, and made sure I felt informed and comfortable every step of the way. His work ethic is unmatched, and his ability to stay calm and composed in any situation is truly admirable. If you're looking for someone you can trust to put your needs first and deliver outstanding results, Eshu is the person you need.",
        rating: 5
    },
    {
        name: "Karunakar C",
        text: "What stood out most about Eshu was his incredible attention to detail and commitment to excellence. He genuinely listened to what I needed and worked tirelessly to ensure everything was perfect. His ability to communicate clearly and keep everything on track was amazing. It’s rare to find someone who cares as much about their work as Eshu does, and I’m so grateful for his help.",
        rating: 5
    },
    {
        name: "Jay",
        text: "From start to finish, Eshu was an absolute professional. He brought so much positive energy and determination to the table, making sure all my concerns were addressed promptly and effectively. His reliability and dedication to providing the best service possible truly made all the difference. I felt like I was his top priority throughout the entire process, and I couldn’t be happier with the results.",
        rating: 5
      },
      {
        name: "Sara",
        text: "Eshu is the epitome of professionalism and dedication. He worked incredibly hard to ensure everything was handled smoothly, always keeping my best interests in mind. What really impressed me was his ability to stay patient and understanding, even when challenges arose. His integrity and genuine passion for helping others shine through in everything he does. I wouldn’t hesitate to recommend Eshu to anyone looking for outstanding service and support.",
        rating: 5
      },
      {
        name: "Ruben",
        text: "The deal would not have gone through without Eshu. His commitment to ensuring everything worked out for all parties was truly remarkable. He even gave up part of his commission to make sure the deal closed smoothly. Eshu's selflessness, dedication, and unwavering focus on the bigger picture set him apart. I am beyond grateful for his hard work and generosity—he truly goes the extra mile for his clients.",
        rating: 5
      },
      {
        name: "Khushi",
        text: "I had an exceptional experience working with Eshu. From start to finish, Eshu was attentive, responsive, and he genuinely cared about understanding my needs. He took the time to walk me through every step of the process, making sure I felt comfortable and informed. His professionalism, combined with a personal touch, made the entire experience smooth and stress-free. I truly felt like he was on my side, and I highly recommend him to anyone looking for a reliable and supportive realtor to work with. He is a very hard worker!!",
        rating: 5
      },
      {
        name: "Krish",
        text: "Eshu is an outstanding realtor with an exceptional work ethic. He is always available, highly responsive, and genuinely committed to helping his clients find the perfect property. Eshu goes above and beyond to ensure every detail is taken care of, from start to finish. His professionalism, dedication, and knowledge of the real estate market are unmatched. Working with him is a seamless and enjoyable experience. Highly recommended!",
        rating: 5
      },
      {
        name: "Mayank",
        text: "Saieshwar is incredibly smart when it comes to navigating the real estate market. I highly recommend him.",
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
      title: "Charming Brick House",
      price: "$279,954",
      location: "437 Pine Lake Cir, Vernon Hills, IL 60061",
      beds: 3,
      baths: 3,
      sqft: 1800
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