// Project Pages JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const nav = document.querySelector('.project-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.98)';
            nav.style.backdropFilter = 'blur(15px)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Mock interface interactions
    const mockInterfaces = document.querySelectorAll('.mock-interface');
    
    mockInterfaces.forEach(mock => {
        const dots = mock.querySelectorAll('.mock-dot');
        
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                this.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });
    });
    
    // Screenshot gallery preview
    const screenshots = document.querySelectorAll('.screenshot-item');
    
    screenshots.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            openLightbox(imgSrc);
        });
    });
    
    // Tech tags animation
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 0, 60, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Feature items animation
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Lightbox function
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        backdrop-filter: blur(10px);
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 0.5rem;
        border: 2px solid rgba(255, 0, 60, 0.3);
        box-shadow: 0 0 50px rgba(255, 0, 60, 0.2);
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: rgba(255, 0, 60, 0.2);
        border: 1px solid rgba(255, 0, 60, 0.3);
        color: white;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255, 0, 60, 0.3)';
        closeBtn.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255, 0, 60, 0.2)';
        closeBtn.style.transform = 'scale(1)';
    });
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
    
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
}

// Add CSS for lightbox animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
    }
    
    .lightbox {
        animation: fadeIn 0.3s ease;
    }
    
    .lightbox img {
        animation: zoomIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes zoomIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);