// Service Details Data (Defined globally so functions can access it)
const serviceDetails = {
    'flat': {
        title: 'Flat Cleaning',
        image: 'image/flat-cleaning.jpg',
        description: 'Our comprehensive flat cleaning service is designed to maintain the cleanliness and hygiene of your apartment. We understand that every flat is unique, and we tailor our services to meet your specific needs.',
        price: '₹3,500 - ₹4,000',
        features: [
            'Thorough dusting and vacuuming',
            'Kitchen and bathroom deep cleaning',
            'Floor mopping and polishing',
            'Window and glass cleaning',
            'Furniture cleaning and polishing',
            'Regular maintenance schedules available'
        ],
        benefits: [
            'Professional and reliable service',
            'Customized cleaning plans',
            'Eco-friendly cleaning products',
            'Trained and experienced staff',
            'Flexible scheduling options'
        ]
    },
    'duplex': {
        title: 'Duplex Cleaning',
        image: 'image/duplex-cleaning.jpg',
        description: 'Our specialized duplex cleaning service ensures that every level of your home receives the attention it deserves. We handle the unique challenges of multi-level cleaning with precision and care.',
        price: '₹10,000 - ₹20,000',
        features: [
            'Multi-level cleaning expertise',
            'Staircase and landing cleaning',
            'High ceiling and fan cleaning',
            'Comprehensive floor care',
            'Detailed room-by-room cleaning',
            'Regular maintenance programs'
        ],
        benefits: [
            'Efficient multi-level cleaning',
            'Professional equipment handling',
            'Thorough attention to detail',
            'Customized cleaning schedules',
            'Experienced cleaning specialists'
        ]
    },
    'villa': {
        title: 'Villa Cleaning',
        image: 'image/villa-cleaning.jpg',
        description: 'Our villa cleaning service is designed for larger properties that require special attention. We provide comprehensive cleaning solutions that maintain the luxury and comfort of your villa.',
        price: '₹20,000 - ₹35,000',
        features: [
            'Complete villa cleaning',
            'Outdoor area maintenance',
            'Pool area cleaning',
            'Garden maintenance',
            'High-end surface care',
            'Regular maintenance programs'
        ],
        benefits: [
            'Luxury property expertise',
            'Comprehensive cleaning solutions',
            'Professional staff training',
            'Premium cleaning products',
            'Flexible scheduling options'
        ]
    },
    'bathroom': {
        title: 'Bathroom Cleaning',
        image: 'image/bathroom-cleaning.jpg',
        description: 'Our specialized bathroom cleaning service ensures a hygienic and fresh environment. We use professional-grade products and techniques to maintain the highest standards of cleanliness.',
        price: '₹600 - ₹1,200',
        features: [
            'Deep sanitization',
            'Tile and grout cleaning',
            'Fixture polishing',
            'Mold and mildew removal',
            'Glass shower cleaning',
            'Regular maintenance available'
        ],
        benefits: [
            'Hygienic environment',
            'Professional-grade cleaning',
            'Preventive maintenance',
            'Eco-friendly products',
            'Expert staff'
        ]
    },
    'glass': {
        title: 'Glass Cleaning',
        image: 'image/glass-cleaning.jpg',
        description: 'Our professional glass cleaning service ensures streak-free, crystal-clear windows and glass surfaces. We use specialized equipment and techniques for perfect results.',
        price: '',
        features: [
            'Streak-free cleaning',
            'High-rise window cleaning',
            'Glass door maintenance',
            'Mirror polishing',
            'Hard water stain removal',
            'Regular maintenance programs'
        ],
        benefits: [
            'Crystal-clear results',
            'Professional equipment',
            'Safety-focused approach',
            'Regular maintenance',
            'Expert technicians'
        ]
    },
    'sofa': {
        title: 'Sofa Cleaning',
        image: 'image/sofa-cleaning.jpg',
        description: 'Our professional sofa cleaning service restores your furniture to its original beauty. We use advanced cleaning techniques and eco-friendly products for optimal results.',
        price: '₹350 per seat',
        features: [
            'Deep fabric cleaning',
            'Stain removal',
            'Odor elimination',
            'Leather care',
            'Upholstery protection',
            'Regular maintenance available'
        ],
        benefits: [
            'Restored appearance',
            'Extended furniture life',
            'Improved indoor air quality',
            'Professional results',
            'Convenient service'
        ]
    },
    'water-tank': {
        title: 'Water Tank Cleaning',
        image: 'image/water-tank-cleaning.jpg',
        description: 'Our water tank cleaning service ensures clean and safe water storage. We follow strict protocols to maintain hygiene and prevent contamination.',
        price: '₹1,500',
        features: [
            'Complete tank cleaning',
            'Sediment removal',
            'Disinfection',
            'Inspection services',
            'Maintenance programs',
            'Documentation provided'
        ],
        benefits: [
            'Safe water storage',
            'Preventive maintenance',
            'Professional service',
            'Regular monitoring',
            'Health compliance'
        ]
    },
    'commercial': {
        title: 'Commercial Cleaning',
        image: 'image/commercial-cleaning.jpg',
        description: 'Our commercial cleaning service is designed for businesses of all sizes. We provide professional cleaning solutions that maintain a clean and productive work environment.',
        price: '',
        features: [
            'Office cleaning',
            'Retail space maintenance',
            'Common area cleaning',
            'Restroom maintenance',
            'Floor care',
            'Regular maintenance programs'
        ],
        benefits: [
            'Professional service',
            'Flexible scheduling',
            'Trained staff',
            'Quality assurance',
            'Cost-effective solutions'
        ]
    },
    'industrial': {
        title: 'Industrial Cleaning',
        image: 'image/industrial-cleaning.png',
        description: 'Our industrial cleaning service handles the unique challenges of industrial facilities. We provide comprehensive cleaning solutions that meet industry standards.',
        price: '',
        features: [
            'Factory cleaning',
            'Warehouse maintenance',
            'Equipment cleaning',
            'Floor maintenance',
            'Safety compliance',
            'Regular maintenance programs'
        ],
        benefits: [
            'Industry expertise',
            'Safety-focused approach',
            'Professional equipment',
            'Regular maintenance',
            'Cost-effective solutions'
        ]
    }
};

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing components...');

    // Initialize preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.transition = 'opacity 0.5s ease';
            preloader.style.opacity = '0';
            setTimeout(function() {
                if (preloader.style.display !== 'none') {
                preloader.style.display = 'none';
                    document.body.classList.add('loaded');
                }
            }, 500);
        });

        // Fallback in case load event doesn't fire
         setTimeout(function() {
            if (preloader.style.display !== 'none') {
                     preloader.style.display = 'none';
                     document.body.classList.add('loaded');
            }
        }, 3000);
    }

    // Initialize service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            if (serviceId && serviceDetails[serviceId]) {
                showServiceDetails(serviceId);
            }
        });
    });

    // Initialize modal close button
    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    const modal = document.querySelector('.service-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Initialize chatbot
    initializeChatbot();
    console.log('Chatbot initialized');

    // Initialize custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (cursor && cursorFollower) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let followerX = 0;
        let followerY = 0;

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animate() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;

            requestAnimationFrame(animate);
        }

        animate();

        const hoverElements = document.querySelectorAll('a, button, .service-card, .client-card, input, select, textarea, .close-modal, .option-btn, .send-btn, .chatbot-toggle');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // Initialize scroll reveal animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Initialize client carousel
    initializeClientCarousel();

    console.log('All initializations complete.');
});

// Service modal functions
function showServiceDetails(serviceId) {
    const modal = document.querySelector('.service-modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !modalContent) return;

    // Show loading state
    modalContent.innerHTML = `
        <div class="loading-state">
            <div class="spinner"></div>
            <p>Loading service details...</p>
        </div>
    `;
    
    // Show modal with proper classes
    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Simulate loading delay for better UX
    setTimeout(() => {
        const service = serviceDetails[serviceId];
        if (service) {
            modalContent.innerHTML = `
                <span class="close-modal">&times;</span>
                <div class="service-details">
                    <h2>${service.title}</h2>
                    ${service.price ? `<div class='service-price'>${service.price}</div>` : ''}
                    <div class="service-image">
                        <img src="${service.image}" alt="${service.title}" loading="lazy">
                    </div>
                    <p class="description">${service.description}</p>
                    <div class="features-section">
                        <h3>Features</h3>
                        <ul>
                            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="benefits-section">
                        <h3>Benefits</h3>
                        <ul>
                            ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="book-service-btn" onclick="showBookingForm('${serviceId}')">Book This Service</button>
                </div>
            `;

            // Initialize close button event listener after content is updated
            const closeModalBtn = modalContent.querySelector('.close-modal');
            if (closeModalBtn) {
                closeModalBtn.addEventListener('click', closeModal);
            }
        }
    }, 500);
}

// Add new booking form function
function showBookingForm(serviceId) {
    const modal = document.querySelector('.service-modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <span class="close-modal">&times;</span>
        <div class="booking-form">
            <h2>Book ${serviceDetails[serviceId].title}</h2>
            <form id="bookingForm" onsubmit="handleBookingSubmit(event, '${serviceId}')">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required>
                </div>
                <div class="form-group">
                    <label for="message">Additional Notes</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" class="submit-booking">Submit Booking</button>
            </form>
        </div>
    `;
}

// Add booking submission handler
async function handleBookingSubmit(event, serviceId) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const bookingData = Object.fromEntries(formData.entries());
    
    // Add loading state
    const submitButton = form.querySelector('.submit-booking');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Processing...';
    submitButton.disabled = true;

    try {
        // Prepare WhatsApp message
        const service = serviceDetails[serviceId];
        const message = `New Service Booking Request:
Service: ${service.title}
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Preferred Date: ${bookingData.date}
Additional Notes: ${bookingData.message || 'None'}`;

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp URL with the phone number
        const whatsappUrl = `https://wa.me/9949191912?text=${encodedMessage}`;
        
        // Store the current window reference
        const currentWindow = window;
        
        // Open WhatsApp in a new tab and store the reference
        const whatsappWindow = window.open(whatsappUrl, '_blank');
        
        // Wait a moment to ensure the window opens
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Close modal
            closeModal();
            
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1000);
        
    } catch (error) {
        console.error('Error processing booking:', error);
        alert('Sorry, there was an error processing your booking. Please try again later.');
        // Reset button state in case of error
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

function closeModal() {
    const modal = document.querySelector('.service-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Form validation functions
function setupFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
        
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });

    // Update form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        e.stopPropagation();
        
        const formData = new FormData(form);
        if (validateForm(formData)) {
            submitForm(formData);
        }
        return false;
    });

    // Prevent form reset on submit
    form.addEventListener('reset', function(e) {
        e.preventDefault();
        return false;
    });
}

function validateField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    if (!errorElement) return;

    let isValid = true;
    let errorMessage = '';

    switch (field.id) {
        case 'name':
            isValid = field.value.trim().length >= 2;
            errorMessage = 'Name must be at least 2 characters long';
            break;
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
            errorMessage = 'Please enter a valid email address';
            break;
        case 'phone':
            isValid = /^\d{10}$/.test(field.value.trim());
            errorMessage = 'Please enter a valid 10-digit phone number';
            break;
        case 'service':
            isValid = field.value !== '';
            errorMessage = 'Please select a service';
            break;
        case 'message':
            isValid = field.value.trim().length >= 10;
            errorMessage = 'Message must be at least 10 characters long';
            break;
    }

    if (!isValid) {
        errorElement.textContent = errorMessage;
        field.classList.add('error');
        errorElement.classList.add('show');
    } else {
        errorElement.textContent = '';
        field.classList.remove('error');
        errorElement.classList.remove('show');
    }

    return isValid;
}

function validateForm(formData) {
    let isValid = true;
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input, textarea, select');
    const submitButton = form.querySelector('button[type="submit"]');

    // Disable submit button during validation
    submitButton.disabled = true;
    submitButton.classList.add('loading');

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    // Re-enable submit button after validation
    submitButton.disabled = !isValid;
    submitButton.classList.remove('loading');

    return isValid;
}

async function submitForm(formData) {
    const form = document.querySelector('.contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');

    try {
        // Disable submit button during submission
        submitButton.disabled = true;
        submitButton.classList.add('loading');

        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success message
        successMessage.classList.add('show');
        successMessage.textContent = 'Thank you for your inquiry! We will get back to you soon.';
        
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);

    } catch (error) {
        // Show error message
        errorMessage.classList.add('show');
        errorMessage.textContent = 'An error occurred. Please try again later.';
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 5000);
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

// Chatbot functionality
function initializeChatbot() {
    try {
        // Get all chatbot elements
        const elements = {
            container: document.querySelector('.chatbot-container'),
            toggle: document.querySelector('.chatbot-toggle'),
            close: document.querySelector('.close-chatbot'),
            messages: document.querySelector('.chatbot-messages'),
            input: document.querySelector('.chatbot-input input'),
            sendBtn: document.querySelector('.chatbot-input .send-btn'),
            optionBtns: document.querySelectorAll('.option-btn')
        };

        // Validate all required elements exist
        for (const [key, element] of Object.entries(elements)) {
            if (!element && key !== 'optionBtns') {
                throw new Error(`Required chatbot element not found: ${key}`);
            }
        }

        // Initialize chatbot state
        const chatbotState = {
            isOpen: false,
            lastMessageTime: 0,
            messageDelay: 600, // Delay between messages in ms
        };

        // Toggle chatbot visibility
        function toggleChatbot() {
            chatbotState.isOpen = !chatbotState.isOpen;
            elements.container.classList.toggle('active');
            if (chatbotState.isOpen) {
                elements.input.focus();
            }
        }

        // Add event listeners
        elements.toggle.addEventListener('click', toggleChatbot);
        elements.close.addEventListener('click', () => {
            chatbotState.isOpen = false;
            elements.container.classList.remove('active');
        });

        // Handle message sending
        async function sendMessage() {
            const message = elements.input.value.trim();
            if (!message) return;

            // Add user message
            addMessage(message, 'user');
            elements.input.value = '';
            elements.input.focus();

            // Add typing indicator
            const typingIndicator = addTypingIndicator();

            // Process message with delay
            setTimeout(() => {
                typingIndicator.remove();
                handleUserMessage(message);
            }, chatbotState.messageDelay);
        }

        // Add typing indicator
        function addTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot typing';
            typingDiv.innerHTML = '<p>Typing...</p>';
            elements.messages.appendChild(typingDiv);
            elements.messages.scrollTop = elements.messages.scrollHeight;
            return typingDiv;
        }

        // Event listeners for sending messages
        elements.sendBtn.addEventListener('click', sendMessage);
        elements.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });

        // Handle option buttons
        elements.optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const option = btn.getAttribute('data-option');
                if (option) {
                    handleOptionClick(option);
                }
            });
        });

        console.log('Chatbot initialized successfully');
    } catch (error) {
        console.error('Error initializing chatbot:', error);
    }
}

// Add message to chat
function addMessage(message, sender) {
    try {
        const chatbotMessages = document.querySelector('.chatbot-messages');
        if (!chatbotMessages) {
            throw new Error('Chatbot messages container not found');
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const p = document.createElement('p');
        p.innerHTML = message;
        
        messageDiv.appendChild(p);
        chatbotMessages.appendChild(messageDiv);
        
        // Smooth scroll to bottom
        chatbotMessages.scrollTo({
            top: chatbotMessages.scrollHeight,
            behavior: 'smooth'
        });

    } catch (error) {
        console.error('Error adding message:', error);
    }
}

// Handle option button clicks
function handleOptionClick(option) {
    try {
        let response = '';
        switch (option) {
            case 'services':
                response = 'We offer the following services:<br>' +
                    '• Flat Cleaning<br>' +
                    '• Duplex Cleaning<br>' +
                    '• Villa Cleaning<br>' +
                    '• Bathroom Cleaning<br>' +
                    '• Glass Cleaning<br>' +
                    '• Sofa Cleaning<br>' +
                    '• Water Tank Cleaning<br>' +
                    '• Commercial Cleaning<br>' +
                    '• Industrial Cleaning';
                break;
            case 'pricing':
                response = 'Our pricing varies based on the service and property size. Would you like a free quote for a specific service?';
                break;
            case 'contact':
                response = 'You can reach us at:<br>' +
                    'Phone: [Your Phone Number]<br>' +
                    'Email: [Your Email]<br>' +
                    'Address: [Your Address]<br>' +
                    'Or fill out our contact form above for a quick response.';
                break;
            case 'hours':
                response = 'Our business hours are:<br>' +
                    'Monday to Friday: 8:00 AM - 8:00 PM<br>' +
                    'Saturday: 9:00 AM - 6:00 PM<br>' +
                    'Sunday: Closed';
                break;
            default:
                response = 'I apologize, but I don\'t have information about that option. How else can I help you?';
        }

        if (response) {
            setTimeout(() => {
                addMessage(response, 'bot');
            }, 500);
        }
    } catch (error) {
        console.error('Error handling option click:', error);
    }
}

// Handle user messages
function handleUserMessage(message) {
    try {
        const lowerMessage = message.toLowerCase();
        let response = '';

        // Common patterns
        const patterns = {
            greeting: /\b(hello|hi|hey|good\s*(morning|afternoon|evening))\b/i,
            service: /\b(service|clean(ing)?)\b/i,
            price: /\b(price|cost|rate|quote)\b/i,
            contact: /\b(contact|reach|call|email|phone)\b/i,
            thanks: /\b(thank|thanks)\b/i,
            book: /\b(book|schedule|appointment)\b/i,
            time: /\b(when|time|hours|open)\b/i
        };

        if (patterns.greeting.test(lowerMessage)) {
            response = 'Hello! How can I assist you with our cleaning services today?';
        } else if (patterns.service.test(lowerMessage)) {
            response = 'We offer various cleaning services including Flat, Duplex, Villa, Bathroom, Glass, Sofa, Water Tank, Commercial, and Industrial cleaning. Which service would you like to know more about?';
        } else if (patterns.price.test(lowerMessage)) {
            response = 'Our pricing varies depending on the service and property size. Would you like a free quote for a specific service?';
        } else if (patterns.contact.test(lowerMessage)) {
            response = 'You can reach us at:<br>' +
                'Phone: [Your Phone Number]<br>' +
                'Email: [Your Email]<br>' +
                'Address: [Your Address]<br>' +
                'Or fill out our contact form above for a quick response.';
        } else if (patterns.thanks.test(lowerMessage)) {
            response = 'You\'re welcome! Is there anything else you\'d like to know about our services?';
        } else if (patterns.book.test(lowerMessage)) {
            response = 'Great! To schedule a cleaning service, you can either:<br>' +
                '1. Fill out our contact form above<br>' +
                '2. Call us directly at [Your Phone Number]<br>' +
                '3. Email us at [Your Email]<br>' +
                'What would be most convenient for you?';
        } else if (patterns.time.test(lowerMessage)) {
            response = 'Our business hours are:<br>' +
                'Monday to Friday: 8:00 AM - 8:00 PM<br>' +
                'Saturday: 9:00 AM - 6:00 PM<br>' +
                'Sunday: Closed';
        } else {
            response = `I understand you're asking about "${message}". To better assist you, would you like to know about our:<br>` +
                '• Services<br>' +
                '• Pricing<br>' +
                '• Business Hours<br>' +
                '• Contact Information';
        }

        setTimeout(() => {
            addMessage(response, 'bot');
        }, 600);

    } catch (error) {
        console.error('Error handling user message:', error);
        addMessage('I apologize, but I encountered an error. Please try again or contact us directly.', 'bot');
    }
}

// Make functions globally accessible
window.showServiceDetails = showServiceDetails;
window.closeModal = closeModal;
window.validateField = validateField;
window.validateForm = validateForm;
window.submitForm = submitForm;

// Add client carousel functionality
function initializeClientCarousel() {
    const carousel = document.querySelector('.clients-carousel');
    const track = document.querySelector('.clients-track');
    if (!carousel || !track) return;

    // Clone the client cards for infinite scroll
    const cards = track.querySelectorAll('.client-card');
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Set up animation
    let animationFrame;
    let isPaused = false;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    function animate() {
        if (!isPaused) {
            scrollPosition += scrollSpeed;
            track.style.transform = `translateX(-${scrollPosition}px)`;

            // Reset position when reaching the end
            if (scrollPosition >= track.scrollWidth / 2) {
                scrollPosition = 0;
            }
        }
        animationFrame = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    carousel.addEventListener('mouseleave', () => {
        isPaused = false;
    });

    // Clean up animation on page unload
    window.addEventListener('unload', () => {
        cancelAnimationFrame(animationFrame);
    });
} 
