/**
 * BATA ZIMBABWE WEBSITE - SIMPLIFIED FOR BEGINNER DEVELOPERS
 * 
 * This JavaScript file contains basic functionality for the Bata Zimbabwe website.
 * It's designed to be easy to understand and modify by beginner developers.
 * 
 * MAIN FEATURES:
 * 1. Simple slideshow for hero section
 * 2. Mobile navigation menu
 * 3. Basic modal functionality
 * 4. Simple form handling
 * 
 * Each function is clearly commented and uses simple, readable code patterns.
 */

// Wait for the page to load completely before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Bata Zimbabwe website loaded successfully!');
    
    // Initialize all website features
    initSimpleSlideshow();
    initMobileMenu();
    initModal();
    initForms();
});

/**
 * SLIDESHOW FUNCTIONALITY
 * Simple slideshow for the hero section with previous/next buttons
 */
function initSimpleSlideshow() {
    console.log('Initializing slideshow...');
    
    // Get all slides and buttons
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    
    // If no slides found, exit function
    if (slides.length === 0) {
        console.log('No slides found');
        return;
    }
    
    let currentSlideIndex = 0; // Track which slide is currently shown
    
    // Function to show a specific slide
    function showSlide(slideIndex) {
        // Hide all slides
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        
        // Show the selected slide
        slides[slideIndex].classList.add('active');
        currentSlideIndex = slideIndex;
        
        console.log('Showing slide:', slideIndex + 1);
    }
    
    // Function to go to next slide
    function goToNextSlide() {
        let nextIndex = currentSlideIndex + 1;
        
        // If we're at the last slide, go back to the first
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        
        showSlide(nextIndex);
    }
    
    // Function to go to previous slide
    function goToPreviousSlide() {
        let prevIndex = currentSlideIndex - 1;
        
        // If we're at the first slide, go to the last
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        
        showSlide(prevIndex);
    }
    
    // Add click events to buttons
    if (nextButton) {
        nextButton.addEventListener('click', goToNextSlide);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', goToPreviousSlide);
    }
    
    // Show first slide initially
    showSlide(0);
    
    // Auto-advance slides every 5 seconds
    setInterval(goToNextSlide, 5000);
}

/**
 * MOBILE MENU FUNCTIONALITY
 * Simple toggle for mobile navigation menu
 */
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    
    const menuButton = document.getElementById('menuToggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!menuButton || !navMenu) {
        console.log('Menu elements not found');
        return;
    }
    
    // Function to toggle menu open/closed
    function toggleMenu() {
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            console.log('Menu opened');
        } else {
            console.log('Menu closed');
        }
    }
    
    // Add click event to menu button
    menuButton.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        // Check if click was outside menu and button
        if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
}

/**
 * MODAL FUNCTIONALITY
 * Simple modal (popup) handling for newsletter signup
 */
function initModal() {
    console.log('Initializing modal...');
    
    const modal = document.getElementById('newsletterModal');
    const closeButton = document.getElementById('closeModal');
    
    if (!modal) {
        console.log('Modal not found');
        return;
    }
    
    // Function to show modal
    function showModal() {
        modal.style.display = 'block';
        console.log('Modal shown');
    }
    
    // Function to hide modal
    function hideModal() {
        modal.style.display = 'none';
        console.log('Modal hidden');
    }
    
    // Show modal after 3 seconds (only once per session)
    if (!sessionStorage.getItem('modalShown')) {
        setTimeout(function() {
            showModal();
            sessionStorage.setItem('modalShown', 'true');
        }, 3000);
    }
    
    // Close modal when clicking X button
    if (closeButton) {
        closeButton.addEventListener('click', hideModal);
    }
    
    // Close modal when clicking outside it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });
}

/**
 * FORM HANDLING
 * Simple form submission handling with basic validation
 */
function initForms() {
    console.log('Initializing forms...');
    
    // Newsletter form in modal
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting normally
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simple email validation
            if (email && email.includes('@')) {
                alert('Thank you for subscribing! You will receive 15% off your first purchase.');
                emailInput.value = ''; // Clear the input
                document.getElementById('newsletterModal').style.display = 'none';
                console.log('Newsletter subscription:', email);
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Contact form (if exists)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const message = contactForm.querySelector('#message').value;
            
            // Simple validation
            if (name && email && email.includes('@') && message) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset(); // Clear all form fields
                console.log('Contact form submitted:', { name, email, message });
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
}

/**
 * UTILITY FUNCTIONS
 * Helper functions that can be used throughout the website
 */

// Simple function to show notifications
function showNotification(message, type) {
    type = type || 'info'; // Default to 'info' if no type specified
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(function() {
        document.body.removeChild(notification);
    }, 3000);
    
    console.log('Notification shown:', message);
}

// Simple function to check if element is visible on screen
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

console.log('Bata Zimbabwe JavaScript loaded successfully!');
    }

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = prompt('Enter search term:');
            if (searchTerm) {
                // Redirect to products page with search parameter
                window.location.href = `pages/products.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
}

// Shopping Cart functionality
function initializeShoppingCart() {
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.getElementById('cartClose');
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let cart = getCartFromStorage();

    function getCartFromStorage() {
        const stored = localStorage.getItem('bata_cart');
        return stored ? JSON.parse(stored) : [];
    }

    function saveCartToStorage() {
        localStorage.setItem('bata_cart', JSON.stringify(cart));
    }

    function updateCartDisplay() {
        if (cartCount) {
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }

        if (cartTotal) {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total.toFixed(2);
        }

        if (cartItems) {
            cartItems.innerHTML = '';
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            } else {
                cart.forEach((item, index) => {
                    const cartItemEl = document.createElement('div');
                    cartItemEl.className = 'cart-item';
                    cartItemEl.innerHTML = `
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>$${item.price}</p>
                        </div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn decrease" data-index="${index}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-index="${index}">+</button>
                            <button class="remove-item" data-index="${index}">🗑️</button>
                        </div>
                    `;
                    cartItems.appendChild(cartItemEl);
                });
            }
        }
    }

    function addToCart(productId, name, price) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: name,
                price: price,
                quantity: 1
            });
        }
        saveCartToStorage();
        updateCartDisplay();
        showNotification(`${name} added to cart!`);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCartToStorage();
        updateCartDisplay();
    }

    function updateQuantity(index, change) {
        if (cart[index]) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                saveCartToStorage();
                updateCartDisplay();
            }
        }
    }

    // Event listeners
    if (cartBtn && cartSidebar) {
        cartBtn.addEventListener('click', function() {
            cartSidebar.classList.add('open');
        });
    }

    if (cartClose && cartSidebar) {
        cartClose.addEventListener('click', function() {
            cartSidebar.classList.remove('open');
        });
    }

    if (cartSidebar) {
        cartSidebar.addEventListener('click', function(event) {
            if (event.target.classList.contains('increase')) {
                const index = parseInt(event.target.dataset.index);
                updateQuantity(index, 1);
            } else if (event.target.classList.contains('decrease')) {
                const index = parseInt(event.target.dataset.index);
                updateQuantity(index, -1);
            } else if (event.target.classList.contains('remove-item')) {
                const index = parseInt(event.target.dataset.index);
                removeFromCart(index);
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            // Redirect to checkout page or show checkout modal
            window.location.href = 'pages/checkout.html';
        });
    }

    // Add to cart buttons
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            event.preventDefault();
            const productId = event.target.dataset.productId;
            const productCard = event.target.closest('.product-card');
            const name = productCard.querySelector('h3').textContent;
            const priceText = productCard.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            
            addToCart(productId, name, price);
        }
    });

    // Initialize cart display
    updateCartDisplay();
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('newsletterModal');
    const closeModal = document.getElementById('closeModal');
    const newsletterForm = document.getElementById('newsletterForm');

    if (closeModal && modal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            
            // Simulate newsletter subscription
            setTimeout(() => {
                showNotification('Thank you for subscribing! Check your email for the discount code.');
                modal.style.display = 'none';
                localStorage.setItem('bata_newsletter_subscribed', 'true');
            }, 500);
        });
    }
}

// Cookie banner functionality
function initializeCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    if (!localStorage.getItem('bata_cookies_accepted') && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('bata_cookies_accepted', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    if (declineCookies) {
        declineCookies.addEventListener('click', function() {
            localStorage.setItem('bata_cookies_accepted', 'false');
            cookieBanner.classList.remove('show');
        });
    }
}

// Product filtering functionality
function initializeProductFilters() {
    const searchBox = document.querySelector('.search-box input');
    const categoryFilter = document.querySelector('select[name="category"]');
    const priceFilter = document.querySelector('select[name="price"]');
    const sizeFilter = document.querySelector('select[name="size"]');

    function filterProducts() {
        const products = document.querySelectorAll('.product-card');
        const searchTerm = searchBox ? searchBox.value.toLowerCase() : '';
        const selectedCategory = categoryFilter ? categoryFilter.value : '';
        const selectedPrice = priceFilter ? priceFilter.value : '';
        const selectedSize = sizeFilter ? sizeFilter.value : '';

        products.forEach(product => {
            const name = product.querySelector('h3').textContent.toLowerCase();
            const category = product.dataset.category || '';
            const price = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
            const sizes = product.dataset.sizes ? product.dataset.sizes.split(',') : [];

            let show = true;

            // Search filter
            if (searchTerm && !name.includes(searchTerm)) {
                show = false;
            }

            // Category filter
            if (selectedCategory && category !== selectedCategory) {
                show = false;
            }

            // Price filter
            if (selectedPrice) {
                const [min, max] = selectedPrice.split('-').map(p => parseFloat(p));
                if (max && (price < min || price > max)) {
                    show = false;
                } else if (!max && price < min) {
                    show = false;
                }
            }

            // Size filter
            if (selectedSize && !sizes.includes(selectedSize)) {
                show = false;
            }

            product.style.display = show ? 'block' : 'none';
        });
    }

    // Add event listeners
    if (searchBox) {
        searchBox.addEventListener('input', filterProducts);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }
    if (sizeFilter) {
        sizeFilter.addEventListener('change', filterProducts);
    }

    // Handle URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam && searchBox) {
        searchBox.value = searchParam;
        filterProducts();
    }
}

// Show modal for first-time visitors
function showModalOnFirstVisit() {
    const modal = document.getElementById('newsletterModal');
    const hasVisited = localStorage.getItem('bata_has_visited');
    const hasSubscribed = localStorage.getItem('bata_newsletter_subscribed');

    if (!hasVisited && !hasSubscribed && modal) {
        setTimeout(() => {
            modal.style.display = 'block';
            localStorage.setItem('bata_has_visited', 'true');
        }, 3000);
    }
}

// Utility functions
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#27ae60' : '#e74c3c',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '8px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        zIndex: '2000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#ddd';
        }
    });

    return isValid;
}

// Contact form functionality
document.addEventListener('submit', function(event) {
    if (event.target.classList.contains('contact-form')) {
        event.preventDefault();
        
        if (validateForm(event.target)) {
            // Simulate form submission
            const submitBtn = event.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you for your message! We will get back to you soon.');
                event.target.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        } else {
            showNotification('Please fill in all required fields.', 'error');
        }
    }
});

// Newsletter form functionality
document.addEventListener('submit', function(event) {
    if (event.target.classList.contains('footer-newsletter')) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Thank you for subscribing to our newsletter!');
            event.target.reset();
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(event) {
    if (event.target.getAttribute('href') && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Lazy loading for images (if needed)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    initializeLazyLoading();
}

// Handle window resize events
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: defer non-critical JavaScript
setTimeout(() => {
    // Initialize any non-critical features here
    console.log('Bata Zimbabwe website loaded successfully!');
}, 1000);