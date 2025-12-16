// Data untuk Services dan Portfolio
const servicesData = [
    {
        title: "Web Development",
        description: "Building modern, responsive websites using latest technologies like React, Next.js, and TailwindCSS.",
        image: "assets/images/web-dev.jpg"
    },
    {
        title: "Backend Development", 
        description: "Creating robust server-side applications with Node.js, Express, and database management.",
        image: "assets/images/backend.jpg"
    },
    {
        title: "UI/UX Design",
        description: "Designing user-friendly interfaces with focus on user experience and modern design principles.",
        image: "assets/images/ui-ux.jpg"
    },
    {
        title: "Mobile App Development",
        description: "Building cross-platform mobile applications using React Native and Flutter.",
        image: "assets/images/mobile.jpg"
    },
    {
        title: "WhatsApp Bot Development",
        description: "Creating automated WhatsApp bots for business automation, customer service, and notifications.",
        image: "assets/images/whatsapp-bot.jpg"
    },
    {
        title: "Telegram Bot Development",
        description: "Building powerful Telegram bots with advanced features and integrations.",
        image: "assets/images/telegram-bot.jpg"
    }
];

<!-- Di dalam script.js, update portfolioData: -->
const portfolioData = [
    {
        title: "E-Commerce Website",
        description: "Full-stack e-commerce platform with payment integration and admin dashboard.",
        image: "assets/images/project1.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "react",
        link: "projects/ecommerce-website.html",  // Ganti dengan ini
        github: "#"
    },
    {
        title: "Task Management App",
        description: "Productive task management application with real-time updates and team collaboration.",
        image: "assets/images/project2.jpg",
        technologies: ["Vue.js", "Firebase", "TailwindCSS"],
        category: "vue",
        link: "projects/task-management-app.html",  // Ganti dengan ini
        github: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with beautiful UI and detailed forecasts.",
        image: "assets/images/project3.jpg",
        technologies: ["React", "API", "Chart.js", "CSS3"],
        category: "react",
        link: "projects/weather-dashboard.html",  // Ganti dengan ini
        github: "#"
    },
    {
        title: "REST API Service",
        description: "Scalable REST API with authentication, documentation, and rate limiting.",
        image: "assets/images/project4.jpg",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        category: "node",
        link: "projects/rest-api-service.html",  // Ganti dengan ini
        github: "#"
    },
    {
        title: "WhatsApp Business Bot",
        description: "Automated customer service bot for WhatsApp with AI-powered responses.",
        image: "assets/images/project5.jpg",
        technologies: ["Node.js", "WhatsApp API", "MongoDB", "Express"],
        category: "api",
        link: "https://wa.me/6289519141241",  // Ganti dengan ini
        github: "#"
    }
];

// Music Playlist Data
const playlistData = [
    {
        title: "K",
        artist: "Cigarettes After Sex",
        duration: "5:17",
        cover: "assets/images/music1.jpg",
        audio: "assets/music/cigarettes-after-sex-k.mp3"
    },
    {
        title: "Mr Loverman",
        artist: "Ricky Montgomery",
        duration: "3:36",
        cover: "assets/images/music2.jpg",
        audio: "assets/music/ricky-montgomery-mr-loverman.mp3"
    },
    {
        title: "Blue",
        artist: "Yungkai",
        duration: "3:41",
        cover: "assets/images/music3.jpg",
        audio: "assets/music/yungkai-blue.mp3"
    },
    {
        title: "Season",
        artist: "Wave To Earth",
        duration: "4:16",
        cover: "assets/images/music4.jpg",
        audio: "assets/music/w2e-season.mp3"
    },
    {
        title: "Creep",
        artist: "Radiohead",
        duration: "5:00",
        cover: "assets/images/music5.jpg",
        audio: "assets/music/radiohead-creep.mp3"
    }
];

// Telegram Bot Configuration
const TELEGRAM_BOT = {
    token: '7867723764:AAFiRKZpTEm35SbxXedThMdFc9rnqLbqRtk',
    adminId: '7411016617',
    apiUrl: 'https://api.telegram.org/bot'
};

// TypeWriter Effect
class TypeWriter {
    constructor(element, texts, speed = 100, delay = 3000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.delay = delay;
        this.currentTextIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.typeSpeed = speed;
        
        this.type();
    }
    
    type() {
        const current = this.texts[this.currentTextIndex];
        
        if (!this.isDeleting) {
            // Typing
            this.currentText = current.substring(0, this.currentText.length + 1);
            if (this.currentText === current) {
                this.isDeleting = true;
                this.typeSpeed = this.delay;
            }
        } else {
            // Deleting
            this.currentText = current.substring(0, this.currentText.length - 1);
            if (this.currentText === '') {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                this.typeSpeed = this.speed;
            }
        }
        
        this.element.textContent = this.currentText;
        
        setTimeout(() => this.type(), this.typeSpeed);
    }
}

// Music Player
class MusicPlayer {
    constructor() {
        this.audio = document.getElementById('audio-player');
        this.currentTrack = 0;
        this.isPlaying = false;
        
        // Elements
        this.playBtn = document.getElementById('play-btn');
        this.pauseBtn = document.getElementById('pause-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.volumeSlider = document.getElementById('volume-slider');
        this.progressFill = document.querySelector('.progress-fill');
        this.currentTimeEl = document.getElementById('current-time');
        this.totalTimeEl = document.getElementById('total-time');
        this.currentTitle = document.getElementById('current-title');
        this.currentArtist = document.getElementById('current-artist');
        this.currentCover = document.getElementById('current-cover');
        
        this.init();
    }
    
    init() {
        // Event Listeners
        this.playBtn.addEventListener('click', () => this.play());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('loadedmetadata', () => this.updateTotalTime());
        this.audio.addEventListener('ended', () => this.next());
        
        // Click on progress bar to seek
        const progressBar = document.querySelector('.progress-bar');
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            this.audio.currentTime = pos * this.audio.duration;
        });
        
        // Playlist items
        document.querySelectorAll('.play-track-btn').forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.playTrack(index);
            });
        });
        
        // Playlist item click
        document.querySelectorAll('.playlist-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                this.playTrack(index);
            });
        });
        
        // Set initial volume
        this.setVolume(50);
    }
    
    playTrack(index) {
        this.currentTrack = index;
        const track = playlistData[index];
        
        this.audio.src = track.audio;
        this.currentTitle.textContent = track.title;
        this.currentArtist.textContent = track.artist;
        this.currentCover.src = track.cover;
        
        // Update active playlist item
        document.querySelectorAll('.playlist-item').forEach((item, i) => {
            if (i === index) {
                item.classList.add('playing');
            } else {
                item.classList.remove('playing');
            }
        });
        
        this.play();
    }
    
    play() {
        if (!this.audio.src) {
            this.playTrack(0);
            return;
        }
        
        this.audio.play();
        this.isPlaying = true;
        this.playBtn.style.display = 'none';
        this.pauseBtn.style.display = 'flex';
    }
    
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.playBtn.style.display = 'flex';
        this.pauseBtn.style.display = 'none';
    }
    
    prev() {
        this.currentTrack = (this.currentTrack - 1 + playlistData.length) % playlistData.length;
        this.playTrack(this.currentTrack);
    }
    
    next() {
        this.currentTrack = (this.currentTrack + 1) % playlistData.length;
        this.playTrack(this.currentTrack);
    }
    
    setVolume(value) {
        this.audio.volume = value / 100;
    }
    
    updateProgress() {
        const current = this.audio.currentTime;
        const duration = this.audio.duration;
        
        if (duration) {
            const percent = (current / duration) * 100;
            this.progressFill.style.width = `${percent}%`;
            
            // Update time display
            this.currentTimeEl.textContent = this.formatTime(current);
        }
    }
    
    updateTotalTime() {
        if (this.audio.duration) {
            this.totalTimeEl.textContent = this.formatTime(this.audio.duration);
        }
    }
    
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
}

// Load Services
function loadServices() {
    const container = document.getElementById('services-container');
    
    servicesData.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service-card';
        serviceElement.innerHTML = `
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}" onerror="this.src='assets/images/placeholder.jpg'">
                <div class="service-image-overlay"></div>
            </div>
            
            <h3 class="service-title">${service.title}</h3>
            
            <p class="service-description">
                ${service.description}
            </p>
            
            <div class="service-link">
                <span>Learn More</span>
                <i class="fas fa-arrow-right"></i>
            </div>
        `;
        container.appendChild(serviceElement);
    });
}

// Load Portfolio
function loadPortfolio() {
    const container = document.getElementById('portfolio-container');
    
    portfolioData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'portfolio-item';
        projectElement.setAttribute('data-category', project.category);
        
        projectElement.innerHTML = `
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/images/placeholder.jpg'">
                <div class="portfolio-overlay">
                    ${project.link ? `
                    <a href="${project.link}" class="portfolio-link">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    ` : ''}
                    ${project.github ? `
                    <a href="${project.github}" class="portfolio-link github">
                        <i class="fab fa-github"></i>
                    </a>
                    ` : ''}
                </div>
            </div>

            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                
                <p class="portfolio-description">
                    ${project.description}
                </p>

                ${project.technologies ? `
                <div class="portfolio-technologies">
                    ${project.technologies.map(tech => `
                        <span class="technology-tag">${tech}</span>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        `;
        container.appendChild(projectElement);
    });
}

// Filter Portfolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(button => {
        if (button.getAttribute('data-filter') === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize Particles for Background - 16:9 Aspect Ratio
function initParticles() {
    if (window.tsParticles) {
        // Main background particles - optimized for 16:9
        window.tsParticles.load("particles-background", {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            particles: {
                color: {
                    value: "#ff003c",
                },
                links: {
                    color: "#ff003c",
                    distance: 250,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 0.6,
                    straight: false,
                    direction: "none",
                },
                number: {
                    density: {
                        enable: true,
                        area: 1200,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.15,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        });

        // Hero section particles - 16:9 aspect ratio
        window.tsParticles.load("hero-particles", {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ff003c",
                },
                links: {
                    color: "#ff003c",
                    distance: 180,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                    direction: "none",
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        });
    }
}

// Download CV as JSON
function downloadCV() {
    const cvData = {
        name: "Bayu Anugraha",
        title: "Full Stack Developer & Creative Designer",
        age: 16,
        status: "High School Student",
        hobby: "Exploring New Things",
        email: "anugrahabayu4@gmail.com",
        phone: "+62 895 4061 78006",
        location: "Indonesia",
        website: "https://about.bayu.my.id",
        summary: "16-year-old passionate Web Developer with 2+ years of experience creating modern, responsive web applications. Specialized in full-stack development, UI/UX design, and bot development.",
        experience: [
            {
                position: "Full Stack Developer",
                company: "Freelance",
                period: "2025 - Present",
                description: "Developed and maintained web applications for various clients using React, Node.js, and MongoDB."
            },
            {
                position: "Web Developer",
                company: "Tech Solutions Inc.",
                period: "2024 - 2025",
                description: "Built responsive websites and implemented front-end features for client projects."
            }
        ],
        education: [
            {
                institution: "High School Student",
                year: "Present"
            }
        ],
        skills: [
            "JavaScript", "React", "Node.js", "MongoDB", "HTML/CSS",
            "UI/UX Design", "Git", "REST APIs", "Bot Development"
        ],
        projects: portfolioData.length,
        languages: ["English (Professional)", "Indonesian (Native)"],
        social: {
            github: "https://github.com/Hanckdad",
            telegram: "https://t.me/altheric",
            whatsapp: "https://wa.me/62895406178006"
        }
    };

    const jsonString = JSON.stringify(cvData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "MyCv.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert("CV downloaded as JSON file!");
}

// Send message to Telegram bot
async function sendToTelegramBot(name, email, subject, message) {
    try {
        const telegramMessage = `
📧 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📝 *Subject:* ${subject}
💬 *Message:*
${message}

📅 *Time:* ${new Date().toLocaleString()}
                `;

        const response = await fetch(`${TELEGRAM_BOT.apiUrl}${TELEGRAM_BOT.token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_BOT.adminId,
                text: telegramMessage,
                parse_mode: 'Markdown'
            })
        });

        const data = await response.json();
        return data.ok;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }

    // Portfolio filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterPortfolio(filter);
        });
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Send to Telegram bot
            const sent = await sendToTelegramBot(name, email, subject, message);
            
            if (sent) {
                alert('✅ Thank you for your message! I have received it via Telegram and will get back to you soon.');
            } else {
                alert('✅ Thank you for your message! I will get back to you soon.');
            }
            
            this.reset();
        });
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize TypeWriter
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const texts = ["Bayu Anugraha", "Web Developer", "Backend Developer", "Bot Developer"];
        new TypeWriter(typewriterElement, texts, 100, 3000);
    }
    
    // Set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Load services and portfolio
    loadServices();
    loadPortfolio();
    
    // Initialize particles
    initParticles();
    
    // Initialize music player
    const musicPlayer = new MusicPlayer();
    
    // Setup event listeners
    setupEventListeners();
});

// Make functions available globally
window.downloadCV = downloadCV;
window.scrollToSection = scrollToSection;
