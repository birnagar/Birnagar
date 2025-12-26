// assets/js/main.js

// 1. Configure Tailwind with Custom Animations
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    saffron: { 100: '#FFF5E1', 500: '#FF9933', 600: '#E67E22', 900: '#8E44AD' },
                    stone: { 50: '#FAFAF9', 800: '#292524' },
                    gold: '#D4AF37'
                },
                fontFamily: {
                    // sans: ['inter', 'sans-serif'],
                    // serif: ['Playfair Display', 'serif'],
                    // georgia: ['Georgia', 'serif'], // Added Georgia font
                    cinzel: ["Cinzel", 'serif'],
                    googleSans: ['Google Sans', 'sans-serif'], // Added Google Sans font  
                                },
                // UPDATED ANIMATION LOGIC
                animation: {
                    'marquee': 'marquee 40s linear infinite', 
                },
                keyframes: {
                    marquee: {
                        '0%': { transform: 'translateX(-50%)' }, // Start halfway (showing the second copy)
                        '100%': { transform: 'translateX(0%)' },  // Slide right to the start
                    }
                }
            }
        }
    };

// 2. Scroll Reveal Logic (The "Magic" Script)
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements with class 'reveal'
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

//     // 2. Mobile Menu Toggle Logic (Vanilla JS fallback if Alpine acts up)
// document.addEventListener('DOMContentLoaded', () => {
//     // Shared logic can go here
});

// 3. Countdown Timer Logic
    const openingDay = new Date('June 1, 2026 00:00:00').getTime();

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = openingDay - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days.toString().padStart(3, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(updateCountdown);
            document.getElementById("days").innerHTML = "000";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            // Optional: Display a "Grand Opening!" message
        }
    }, 1000);
