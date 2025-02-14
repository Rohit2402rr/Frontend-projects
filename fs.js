const testimonials = [
    { text: "This product changed my life! Highly recommend.", author: "Alice Johnson" },
    { text: "Fantastic customer service and a great experience!", author: "Michael Smith" },
    { text: "I am absolutely in love with this. Worth every penny!", author: "Sarah Williams" },
];

let index = 0;

const testimonialText = document.getElementById("testimonial-text");
const author = document.getElementById("author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Function to update testimonial
function updateTestimonial() {
    testimonialText.textContent = testimonials[index].text;
    author.textContent = `- ${testimonials[index].author}`;
}

// Event Listeners
prevBtn.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
});

// Initial Load
updateTestimonial();
