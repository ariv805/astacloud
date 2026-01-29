// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });
});

// Initialize Swiper for Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Initialize Swiper for Testimonials
let testimonialSwiper;

// Color gradients for services
const colorGradients = {
    blue: 'from-blue-500 to-blue-300',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-teal-500',
    orange: 'from-orange-500 to-red-500',
    red: 'from-red-500 to-pink-500'
};

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    if (currentTheme === 'dark') {
        themeIcon.setAttribute('data-lucide', 'moon');
    } else {
        themeIcon.setAttribute('data-lucide', 'sun');
    }
    lucide.createIcons();

    // Toggle theme
    themeToggle.addEventListener('click', function() {
        const theme = htmlElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'dark') {
            themeIcon.setAttribute('data-lucide', 'moon');
        } else {
            themeIcon.setAttribute('data-lucide', 'sun');
        }
        lucide.createIcons();
    });
});

// Data Management
const dataManager = {
    // Get products from localStorage
    getProducts: function() {
        const products = localStorage.getItem('astaCloudProducts');
        return products ? JSON.parse(products) : this.getDefaultProducts();
    },
    
    // Save products to localStorage
    saveProducts: function(products) {
        localStorage.setItem('astaCloudProducts', JSON.stringify(products));
        this.loadProducts();
        this.loadProductsToAdminTable();
        this.updateDashboardStats();
    },
    
    // Get services from localStorage
    getServices: function() {
        const services = localStorage.getItem('astaCloudServices');
        return services ? JSON.parse(services) : this.getDefaultServices();
    },
    
    // Save services to localStorage
    saveServices: function(services) {
        localStorage.setItem('astaCloudServices', JSON.stringify(services));
        this.loadServices();
        this.loadServicesToAdminTable();
        this.updateDashboardStats();
    },
    
    // Get domains from localStorage
    getDomains: function() {
        const domains = localStorage.getItem('astaCloudDomains');
        return domains ? JSON.parse(domains) : this.getDefaultDomains();
    },
    
    // Save domains to localStorage
    saveDomains: function(domains) {
        localStorage.setItem('astaCloudDomains', JSON.stringify(domains));
        this.loadDomains();
        this.loadDomainsToAdminTable();
        this.updateDashboardStats();
    },
    
    // Get testimonials from localStorage
    getTestimonials: function() {
        const testimonials = localStorage.getItem('astaCloudTestimonials');
        return testimonials ? JSON.parse(testimonials) : this.getDefaultTestimonials();
    },
    
    // Save testimonials to localStorage
    saveTestimonials: function(testimonials) {
        localStorage.setItem('astaCloudTestimonials', JSON.stringify(testimonials));
        this.loadTestimonials();
        this.loadTestimonialsToAdminTable();
        this.updateDashboardStats();
    },
    
    // Default products if localStorage is empty
    getDefaultProducts: function() {
        return [
            {
                id: 1,
                name: "Keyboard Mechanical",
                price: "Rp Rp 60.000 - 120.000",
                discount: 0,
                image: "https://image2url.com/r2/default/images/1769590450832-267ca8d1-7113-49e2-88cf-fd9668ec4143.webp",
                description: "Keyboard mechanical dengan switch blue yang nyaman untuk gaming dan mengetik"
            },
            {
                id: 2,
                name: "Mouse",
                price: "Rp  25.000 - 50.000",
                discount: 0,
                image: "https://image2url.com/r2/default/images/1769590491825-e14373da-c1f9-4cec-989d-cc0a7575ba68.jpg",
                description: "Mouse gaming dengan DPI tinggi dan desain ergonomis"
            },
            {
                id: 3,
                name: "Mouse Pad",
                price: "Rp 10.000 - 25.000",
                discount: 0,
                image: "https://image2url.com/r2/default/images/1769590524899-6f8d84e5-2d9a-4e0c-ba41-cea7612929dd.jpg",
                description: "Mouse pad ekstra besar dengan permukaan halus untuk presisi maksimal"
            },
            {
                id: 4,
                name: "Headset",
                price: "Rp 50.000 - 100.000",
                discount: 0,
                image: "https://image2url.com/r2/default/images/1769590563753-cfc769c6-2cd8-425b-805b-98e44a8ed1f0.png",
                description: "Headset gaming dengan kualitas suara jernih dan microphone noise-cancelling"
            },
            {
                id: 5,
                name: "Webcam HD",
                price: "Rp 80.000 - 150.000",
                discount: 0,
                image: "https://image2url.com/r2/default/images/1769590602521-c4f821d2-36f8-4147-98be-fb61ed011e17.jpg",
                description: "Webcam HD 1080p untuk video conference dan streaming"
            },
            {
                id: 5,
                name: "Temperglass",
                price: "Rp 10.000 - 15.000",
                discount: 0,
                image: "https://image2url.com/r2/default/images/1769696487732-ec9aa4d4-579b-42cf-b699-d633edee93e2.jpg",
                description: "Anti gores & benturan, jernih, sentuhan tetap halus."
            },
             {
                id: 6,
                name: "Casing all hp",
                price: "Rp 15.000 - 30.000",
                discount: 0,
                image: "https://image2url.com/r2/default/images/1769698102908-a6e57c86-9399-4f31-8258-6989aa743f52.jpg",
                description: "Casing standar, kualitas nggak sembarangan."
            },
        ];
    },
    
    // Default services if localStorage is empty
    getDefaultServices: function() {
        return [
            {
                id: 1,
                name: "Jasa Desain",
                price: "Rp 10.000 - 20.000",
                discount: 0,
                icon: "palette",
                color: "blue",
                description: "Desain poster, presentasi, dan tugas kreatif dengan hasil profesional"
            },
            {
                id: 2,
                name: "Jasa Edit Video",
                price: "Rp 20.000 - 50.000",
                discount: 0,
                icon: "video",
                color: "purple",
                description: "Editing video profesional untuk kebutuhan konten Anda"
            },
            {
                id: 3,
                name: "Pasang Tempered Glass",
                price: "Rp 5.000",
                discount: 0,
                icon: "smartphone",
                color: "green",
                description: "Pemasangan tempered glass profesional dan rapi"
            },
            {
                id: 4,
                name: "Jasa Reset HP",
                price: "Rp 20.000 - 40.000",
                discount: 0,
                icon: "refresh-cw",
                color: "orange",
                description: "Reset HP dengan aman dan data terjaga"
            },
            
        ];
    },
    
    // Default domains if localStorage is empty
    getDefaultDomains: function() {
        return [
            {
                id: 1,
                name: "Domain my.id",
                price: "Rp 15.000",
                discount: 0,
                type: "domain",
                storage: "-",
                bandwidth: "-",
                features: ["Gratis Access cloudflare", "Masa aktif 1 Tahun penuh", "Bebas request nama domain sesuai keinginan", "Cocok untuk nama server game,website,dll"]
            },
            {
                id: 2,
                name: "Domain xyz",
                price: "Rp 40.000",
                discount: 0,
                type: "domain",
                storage: "-",
                bandwidth: "-",
                features: ["Gratis Access cloudflare", "Masa aktif 1 Tahun penuh", "Bebas request nama domain sesuai keinginan", "Cocok untuk nama server game,website,dll"]
            },
            {
                id: 3,
                name: "Domain .online",
                price: "Rp 40.000",
                discount: 0,
                type: "domain",
                storage: "-",
                bandwidth: "-",
                features: ["Gratis Access cloudflare", "Masa aktif 1 Tahun penuh", "Bebas request nama domain sesuai keinginan", "Cocok untuk nama server game,website,dll"]
           },
            {
                id: 4,
                name: "Domain .store",
                price: "Rp 75.000",
                discount: 0,
                type: "domain",
                storage: "-",
                bandwidth: "-",
                features: ["Gratis Access cloudflare", "Masa aktif 1 Tahun penuh", "Bebas request nama domain sesuai keinginan", "Cocok untuk nama server game,website,dll"]
            },
            {
                id: 5,
                name: "Domain .Cloud",
                price: "Rp 40.000",
                discount: 0,
                type: "domain",
                storage: "-",
                bandwidth: "-",
                features: ["Gratis Access cloudflare", "Masa aktif 1 Tahun penuh", "Bebas request nama domain sesuai keinginan", "Cocok untuk nama server game,website,dll"]
            },
            {
                id: 6,
                name: "Domain .com",
                price: "Rp 184.000",
                discount: 0,
                type: "domain",
                storage: "-",
                bandwidth: "-",
                features: ["Gratis Access cloudflare", "Masa aktif 1 Tahun penuh", "Bebas request nama domain sesuai keinginan", "Cocok untuk nama server game,website,dll"]
             },
            {
                id: 7,
                name: "Domain .id",
                price: "Rp 230.000",
                discount: 0,
                type: "domain",
                storage: "-",
                bandwidth: "-",
                features: ["Gratis Access cloudflare", "Masa aktif 1 Tahun penuh", "Bebas request nama domain sesuai keinginan", "Cocok untuk nama server game,website,dll"]
            }
        ];
    },
    
    // Default testimonials if localStorage is empty
    getDefaultTestimonials: function() {
        return [
            {
                id: 1,
                name: "Rizki",
                rating: 5,
                image: "https://image2url.com/r2/default/images/1769698867694-69f9f4f4-813a-4d2f-9cc4-8ed8d5e52003.jpeg",
                company: "Pelanggan setia",
                text: "Pelayanan sangat memuaskan, produk berkualitas dan harga terjangkau. Saya sangat merekomendasikan ASTA CLOUD untuk kebutuhan teknologi Anda."
            },
            {
                id: 2,
                name: "Rama",
                rating: 5,
                image: "https://image2url.com/r2/default/images/1769698867694-69f9f4f4-813a-4d2f-9cc4-8ed8d5e52003.jpeg",
                company: "Pelanggan Jasa desain",
                text: "Jasa desain yang sangat profesional dan hasilnya melebihi ekspektasi. Proses pengerjaan cepat dan komunikasi yang baik. Terima kasih ASTA CLOUD!"
            },
            {
                id: 3,
                name: "Zidan",
                rating: 4.5,
                image: "https://image2url.com/r2/default/images/1769698867694-69f9f4f4-813a-4d2f-9cc4-8ed8d5e52003.jpeg",
                company: "Pelanggan Produk aksesoris komputer",
                text: "Keyboard mechanical yang saya beli sangat nyaman digunakan dan kualitasnya bagus. Harga juga lebih terjangkau dibanding toko lain. Recommended!"
            }
        ];
    },
    
    // Calculate discounted price
    calculateDiscountPrice: function(price, discount) {
        const numericPrice = parseInt(price.replace(/[^\d]/g, ''));
        const discountAmount = numericPrice * (discount / 100);
        const discountedPrice = numericPrice - discountAmount;
        return `Rp ${discountedPrice.toLocaleString('id-ID')}`;
    },
    
    // Load products to the website
    loadProducts: function() {
        const products = this.getProducts();
        const productsGrid = document.getElementById('productsGrid');
        
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow';
            productCard.setAttribute('data-aos', 'fade-up');
            productCard.setAttribute('data-aos-delay', (index + 1) * 100);
            
            let priceHTML = '';
            if (product.discount > 0) {
                const discountedPrice = this.calculateDiscountPrice(product.price, product.discount);
                priceHTML = `
                    <div class="mb-4">
                        <span class="original-price">${product.price}</span>
                        <span class="discount-price">${discountedPrice}</span>
                        <span class="discount-badge">-${product.discount}%</span>
                    </div>
                `;
            } else {
                priceHTML = `<div class="text-blue-600 font-bold text-lg mb-4">${product.price}</div>`;
            }
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" loading="lazy">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                    <p class="text-gray-600 mb-4">${product.description || 'Produk berkualitas tinggi dengan harga terjangkau'}</p>
                    ${priceHTML}
                    <button class="w-full bg-gradient-to-r from-blue-500 to-blue-300 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow" onclick="orderProduct('${product.name}')">Beli via WhatsApp</button>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
        
        // Reinitialize AOS for new content
        AOS.refresh();
    },
    
    // Load services to the website
    loadServices: function() {
        const services = this.getServices();
        const servicesGrid = document.getElementById('servicesGrid');
        
        if (!servicesGrid) return;
        
        servicesGrid.innerHTML = '';
        
        services.forEach((service, index) => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow';
            serviceCard.setAttribute('data-aos', 'fade-up');
            serviceCard.setAttribute('data-aos-delay', (index + 1) * 100);
            
            let priceHTML = '';
            if (service.discount > 0) {
                const discountedPrice = this.calculateDiscountPrice(service.price, service.discount);
                priceHTML = `
                    <div class="mb-4">
                        <span class="original-price">${service.price}</span>
                        <span class="discount-price">${discountedPrice}</span>
                        <span class="discount-badge">-${service.discount}%</span>
                    </div>
                `;
            } else {
                priceHTML = `<div class="text-${service.color}-600 font-bold mb-4">${service.price}</div>`;
            }
            
            serviceCard.innerHTML = `
                <div class="h-48 bg-gradient-to-r ${colorGradients[service.color]} flex items-center justify-center">
                    <i data-lucide="${service.icon}" class="w-16 h-16 text-white"></i>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${service.name}</h3>
                    <p class="text-gray-600 mb-4">${service.description}</p>
                    ${priceHTML}
                    <button class="w-full bg-gradient-to-r ${colorGradients[service.color]} text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow" onclick="orderService('${service.name}')">Pesan Sekarang</button>
                </div>
            `;
            
            servicesGrid.appendChild(serviceCard);
        });
        
        // Reinitialize Lucide icons
        lucide.createIcons();
        
        // Reinitialize AOS for new content
        AOS.refresh();
    },
    
    // Load domains to the website
    loadDomains: function() {
        const domains = this.getDomains();
        const domainGrid = document.getElementById('domainGrid');
        
        if (!domainGrid) return;
        
        domainGrid.innerHTML = '';
        
        domains.forEach((domain, index) => {
            const domainCard = document.createElement('div');
            domainCard.className = 'bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow';
            domainCard.setAttribute('data-aos', 'fade-up');
            domainCard.setAttribute('data-aos-delay', (index + 1) * 100);
            
            let priceHTML = '';
            if (domain.discount > 0) {
                const discountedPrice = this.calculateDiscountPrice(domain.price, domain.discount);
                priceHTML = `
                    <div class="mb-4">
                        <span class="original-price">${domain.price}/tahun</span>
                        <span class="discount-price">${discountedPrice}/tahun</span>
                        <span class="discount-badge">-${domain.discount}%</span>
                    </div>
                `;
            } else {
                priceHTML = `<div class="text-blue-600 font-bold text-lg mb-4">${domain.price}/tahun</div>`;
            }
            
            const typeIcon = domain.type === 'domain' ? 'globe' : domain.type === 'hosting' ? 'server' : 'package';
            
            domainCard.innerHTML = `
                <div class="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <i data-lucide="${typeIcon}" class="w-16 h-16 text-white"></i>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${domain.name}</h3>
                    <p class="text-gray-600 mb-2">
                        <i data-lucide="hard-drive" class="w-4 h-4 inline mr-1"></i> ${domain.storage} | 
                        <i data-lucide="wifi" class="w-4 h-4 inline mr-1"></i> ${domain.bandwidth}
                    </p>
                    <ul class="text-sm text-gray-600 mb-4">
                        ${domain.features.map(feature => `<li>✓ ${feature}</li>`).join('')}
                    </ul>
                    ${priceHTML}
                    <button class="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow" onclick="orderDomain('${domain.name}')">Pesan Sekarang</button>
                </div>
            `;
            
            domainGrid.appendChild(domainCard);
        });
        
        // Reinitialize Lucide icons
        lucide.createIcons();
        
        // Reinitialize AOS for new content
        AOS.refresh();
    },
    
    // Load testimonials to the website
    loadTestimonials: function() {
        const testimonials = this.getTestimonials();
        const testimonialsContainer = document.getElementById('testimonialsContainer');
        
        if (!testimonialsContainer) return;
        
        testimonialsContainer.innerHTML = '';
        
        testimonials.forEach((testimonial, index) => {
            const testimonialSlide = document.createElement('div');
            testimonialSlide.className = 'swiper-slide';
            
            // Generate star rating HTML
            let starsHTML = '';
            const fullStars = Math.floor(testimonial.rating);
            const hasHalfStar = testimonial.rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i data-lucide="star" class="w-4 h-4 fill-current"></i>';
            }
            
            if (hasHalfStar) {
                starsHTML += '<i data-lucide="star-half" class="w-4 h-4 fill-current"></i>';
            }
            
            testimonialSlide.innerHTML = `
                <div class="testimonial-card" data-aos="fade-up">
                    <div class="flex items-center mb-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full mr-4" loading="lazy">
                        <div>
                            <h4 class="font-semibold">${testimonial.name}</h4>
                            ${testimonial.company ? `<p class="text-sm text-gray-500">${testimonial.company}</p>` : ''}
                            <div class="flex text-yellow-400">
                                ${starsHTML}
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">"${testimonial.text}"</p>
                </div>
            `;
            
            testimonialsContainer.appendChild(testimonialSlide);
        });
        
        // Reinitialize Swiper and Lucide icons
        if (testimonialSwiper) {
            testimonialSwiper.destroy();
        }
        
        testimonialSwiper = new Swiper('.testimonialSwiper', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
        
        // Reinitialize Lucide icons
        lucide.createIcons();
        
        // Reinitialize AOS for new content
        AOS.refresh();
    },
    
    // Load products to admin table
    loadProductsToAdminTable: function() {
        const products = this.getProducts();
        const productsTableBody = document.getElementById('productsTableBody');
        
        if (!productsTableBody) return;
        
        productsTableBody.innerHTML = '';
        
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.discount}%</td>
                <td>${product.description ? product.description.substring(0, 50) + '...' : '-'}</td>
                <td>
                    <button class="edit-btn" onclick="editProduct(${product.id})">Edit</button>
                    <button class="delete-btn" onclick="dataManager.deleteProduct(${product.id})">Hapus</button>
                </td>
            `;
            productsTableBody.appendChild(row);
        });
    },
    
    // Load services to admin table
    loadServicesToAdminTable: function() {
        const services = this.getServices();
        const servicesTableBody = document.getElementById('servicesTableBody');
        
        if (!servicesTableBody) return;
        
        servicesTableBody.innerHTML = '';
        
        services.forEach(service => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${service.id}</td>
                <td>${service.name}</td>
                <td>${service.price}</td>
                <td>${service.discount}%</td>
                <td>${service.description ? service.description.substring(0, 50) + '...' : '-'}</td>
                <td>
                    <button class="edit-btn" onclick="editService(${service.id})">Edit</button>
                    <button class="delete-btn" onclick="dataManager.deleteService(${service.id})">Hapus</button>
                </td>
            `;
            servicesTableBody.appendChild(row);
        });
    },
    
    // Load domains to admin table
    loadDomainsToAdminTable: function() {
        const domains = this.getDomains();
        const domainsTableBody = document.getElementById('domainsTableBody');
        
        if (!domainsTableBody) return;
        
        domainsTableBody.innerHTML = '';
        
        domains.forEach(domain => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${domain.id}</td>
                <td>${domain.name}</td>
                <td>${domain.type}</td>
                <td>${domain.price}</td>
                <td>${domain.discount}%</td>
                <td>
                    <button class="edit-btn" onclick="editDomain(${domain.id})">Edit</button>
                    <button class="delete-btn" onclick="dataManager.deleteDomain(${domain.id})">Hapus</button>
                </td>
            `;
            domainsTableBody.appendChild(row);
        });
    },
    
    // Load testimonials to admin table
    loadTestimonialsToAdminTable: function() {
        const testimonials = this.getTestimonials();
        const testimonialsTableBody = document.getElementById('testimonialsTableBody');
        
        if (!testimonialsTableBody) return;
        
        testimonialsTableBody.innerHTML = '';
        
        testimonials.forEach(testimonial => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${testimonial.id}</td>
                <td>${testimonial.name}</td>
                <td>${testimonial.rating} Bintang</td>
                <td>${testimonial.text.substring(0, 50)}...</td>
                <td>
                    <button class="edit-btn" onclick="editTestimonial(${testimonial.id})">Edit</button>
                    <button class="delete-btn" onclick="dataManager.deleteTestimonial(${testimonial.id})">Hapus</button>
                </td>
            `;
            testimonialsTableBody.appendChild(row);
        });
    },
    
    // Add new product
    addProduct: function(product) {
        const products = this.getProducts();
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        
        products.push({
            id: newId,
            ...product
        });
        
        this.saveProducts(products);
    },
    
    // Update product
    updateProduct: function(id, updatedProduct) {
        const products = this.getProducts();
        const index = products.findIndex(product => product.id === id);
        
        if (index !== -1) {
            products[index] = { id, ...updatedProduct };
            this.saveProducts(products);
        }
    },
    
    // Delete product
    deleteProduct: function(id) {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            const products = this.getProducts();
            const filteredProducts = products.filter(product => product.id !== id);
            this.saveProducts(filteredProducts);
        }
    },
    
    // Add new service
    addService: function(service) {
        const services = this.getServices();
        const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
        
        services.push({
            id: newId,
            ...service
        });
        
        this.saveServices(services);
    },
    
    // Update service
    updateService: function(id, updatedService) {
        const services = this.getServices();
        const index = services.findIndex(service => service.id === id);
        
        if (index !== -1) {
            services[index] = { id, ...updatedService };
            this.saveServices(services);
        }
    },
    
    // Delete service
    deleteService: function(id) {
        if (confirm('Apakah Anda yakin ingin menghapus layanan ini?')) {
            const services = this.getServices();
            const filteredServices = services.filter(service => service.id !== id);
            this.saveServices(filteredServices);
        }
    },
    
    // Add new domain
    addDomain: function(domain) {
        const domains = this.getDomains();
        const newId = domains.length > 0 ? Math.max(...domains.map(d => d.id)) + 1 : 1;
        
        domains.push({
            id: newId,
            ...domain
        });
        
        this.saveDomains(domains);
    },
    
    // Update domain
    updateDomain: function(id, updatedDomain) {
        const domains = this.getDomains();
        const index = domains.findIndex(domain => domain.id === id);
        
        if (index !== -1) {
            domains[index] = { id, ...updatedDomain };
            this.saveDomains(domains);
        }
    },
    
    // Delete domain
    deleteDomain: function(id) {
        if (confirm('Apakah Anda yakin ingin menghapus paket ini?')) {
            const domains = this.getDomains();
            const filteredDomains = domains.filter(domain => domain.id !== id);
            this.saveDomains(filteredDomains);
        }
    },
    
    // Add new testimonial
    addTestimonial: function(testimonial) {
        const testimonials = this.getTestimonials();
        const newId = testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1;
        
        testimonials.push({
            id: newId,
            ...testimonial
        });
        
        this.saveTestimonials(testimonials);
    },
    
    // Update testimonial
    updateTestimonial: function(id, updatedTestimonial) {
        const testimonials = this.getTestimonials();
        const index = testimonials.findIndex(testimonial => testimonial.id === id);
        
        if (index !== -1) {
            testimonials[index] = { id, ...updatedTestimonial };
            this.saveTestimonials(testimonials);
        }
    },
    
    // Delete testimonial
    deleteTestimonial: function(id) {
        if (confirm('Apakah Anda yakin ingin menghapus testimoni ini?')) {
            const testimonials = this.getTestimonials();
            const filteredTestimonials = testimonials.filter(testimonial => testimonial.id !== id);
            this.saveTestimonials(filteredTestimonials);
        }
    },
    
    // Update dashboard statistics
    updateDashboardStats: function() {
        const products = this.getProducts();
        const services = this.getServices();
        const domains = this.getDomains();
        const testimonials = this.getTestimonials();
        
        const totalProductsElement = document.getElementById('totalProducts');
        const totalServicesElement = document.getElementById('totalServices');
        const totalDomainsElement = document.getElementById('totalDomains');
        const totalTestimonialsElement = document.getElementById('totalTestimonials');
        
        if (totalProductsElement) totalProductsElement.textContent = products.length;
        if (totalServicesElement) totalServicesElement.textContent = services.length;
        if (totalDomainsElement) totalDomainsElement.textContent = domains.length;
        if (totalTestimonialsElement) totalTestimonialsElement.textContent = testimonials.length;
    }
};

// Initialize data when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load initial data
    dataManager.loadProducts();
    dataManager.loadServices();
    dataManager.loadDomains();
    dataManager.loadTestimonials();
    dataManager.updateDashboardStats();
    
    // Set up form submissions
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const product = {
                name: document.getElementById('productName').value,
                price: document.getElementById('productPrice').value,
                discount: parseInt(document.getElementById('productDiscount').value) || 0,
                image: document.getElementById('productImage').value,
                description: document.getElementById('productDescription').value
            };
            
            dataManager.addProduct(product);
            this.reset();
            alert('Produk berhasil ditambahkan!');
        });
    }
    
    const addServiceForm = document.getElementById('addServiceForm');
    if (addServiceForm) {
        addServiceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const service = {
                name: document.getElementById('serviceName').value,
                price: document.getElementById('servicePrice').value,
                discount: parseInt(document.getElementById('serviceDiscount').value) || 0,
                icon: document.getElementById('serviceIcon').value,
                color: document.getElementById('serviceColor').value,
                description: document.getElementById('serviceDescription').value
            };
            
            dataManager.addService(service);
            this.reset();
            alert('Layanan berhasil ditambahkan!');
        });
    }
    
    const addDomainForm = document.getElementById('addDomainForm');
    if (addDomainForm) {
        addDomainForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const domain = {
                name: document.getElementById('domainName').value,
                price: document.getElementById('domainPrice').value,
                discount: parseInt(document.getElementById('domainDiscount').value) || 0,
                type: document.getElementById('domainType').value,
                storage: document.getElementById('domainStorage').value,
                bandwidth: document.getElementById('domainBandwidth').value,
                features: document.getElementById('domainFeatures').value.split(',').map(f => f.trim())
            };
            
            dataManager.addDomain(domain);
            this.reset();
            alert('Paket berhasil ditambahkan!');
        });
    }
    
    const addTestimonialForm = document.getElementById('addTestimonialForm');
    if (addTestimonialForm) {
        addTestimonialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const testimonial = {
                name: document.getElementById('testimonialName').value,
                rating: parseFloat(document.getElementById('testimonialRating').value),
                image: document.getElementById('testimonialImage').value,
                company: document.getElementById('testimonialCompany').value,
                text: document.getElementById('testimonialText').value
            };
            
            dataManager.addTestimonial(testimonial);
            this.reset();
            alert('Testimoni berhasil ditambahkan!');
        });
    }
    
    // Set up edit form submissions
    const editProductForm = document.getElementById('editProductForm');
    if (editProductForm) {
        editProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const id = parseInt(document.getElementById('editProductId').value);
            const product = {
                name: document.getElementById('editProductName').value,
                price: document.getElementById('editProductPrice').value,
                discount: parseInt(document.getElementById('editProductDiscount').value) || 0,
                image: document.getElementById('editProductImage').value,
                description: document.getElementById('editProductDescription').value
            };
            
            dataManager.updateProduct(id, product);
            closeModal('editProductModal');
            alert('Produk berhasil diperbarui!');
        });
    }
    
    const editServiceForm = document.getElementById('editServiceForm');
    if (editServiceForm) {
        editServiceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const id = parseInt(document.getElementById('editServiceId').value);
            const service = {
                name: document.getElementById('editServiceName').value,
                price: document.getElementById('editServicePrice').value,
                discount: parseInt(document.getElementById('editServiceDiscount').value) || 0,
                icon: document.getElementById('editServiceIcon').value,
                color: document.getElementById('editServiceColor').value,
                description: document.getElementById('editServiceDescription').value
            };
            
            dataManager.updateService(id, service);
            closeModal('editServiceModal');
            alert('Layanan berhasil diperbarui!');
        });
    }
    
    const editDomainForm = document.getElementById('editDomainForm');
    if (editDomainForm) {
        editDomainForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const id = parseInt(document.getElementById('editDomainId').value);
            const domain = {
                name: document.getElementById('editDomainName').value,
                price: document.getElementById('editDomainPrice').value,
                discount: parseInt(document.getElementById('editDomainDiscount').value) || 0,
                type: document.getElementById('editDomainType').value,
                storage: document.getElementById('editDomainStorage').value,
                bandwidth: document.getElementById('editDomainBandwidth').value,
                features: document.getElementById('editDomainFeatures').value.split(',').map(f => f.trim())
            };
            
            dataManager.updateDomain(id, domain);
            closeModal('editDomainModal');
            alert('Paket berhasil diperbarui!');
        });
    }
    
    const editTestimonialForm = document.getElementById('editTestimonialForm');
    if (editTestimonialForm) {
        editTestimonialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const id = parseInt(document.getElementById('editTestimonialId').value);
            const testimonial = {
                name: document.getElementById('editTestimonialName').value,
                rating: parseFloat(document.getElementById('editTestimonialRating').value),
                image: document.getElementById('editTestimonialImage').value,
                company: document.getElementById('editTestimonialCompany').value,
                text: document.getElementById('editTestimonialText').value
            };
            
            dataManager.updateTestimonial(id, testimonial);
            closeModal('editTestimonialModal');
            alert('Testimoni berhasil diperbarui!');
        });
    }
});

// Hide loader when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Admin mobile menu toggle
    const adminMenuToggle = document.getElementById('adminMenuToggle');
    const adminSidebar = document.getElementById('adminSidebar');

    if (adminMenuToggle) {
        adminMenuToggle.addEventListener('click', function() {
            adminSidebar.classList.toggle('active');
        });
    }
});

// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');

    // Close mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    if (menuToggle) menuToggle.classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reinitialize AOS for new content
    AOS.refresh();
}

// Show login page
function showLogin() {
    document.getElementById('mainWebsite').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminDashboard').classList.remove('active');
}

// Show main website
function showMainWebsite() {
    document.getElementById('mainWebsite').style.display = 'block';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').classList.remove('active');
}

// Show admin dashboard
function showAdminDashboard() {
    document.getElementById('mainWebsite').style.display = 'none';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').classList.add('active');
    
    // Load data to admin tables
    dataManager.loadProductsToAdminTable();
    dataManager.loadServicesToAdminTable();
    dataManager.loadDomainsToAdminTable();
    dataManager.loadTestimonialsToAdminTable();
    dataManager.updateDashboardStats();
    
    // Show dashboard section by default
    showAdminSection('dashboard');
}

// Show specific admin section
function showAdminSection(sectionId) {
    // Hide all admin sections
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const selectedSection = document.getElementById('admin' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1) + 'Section');
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    
    // Load data to tables if needed
    if (sectionId === 'products') {
        dataManager.loadProductsToAdminTable();
    } else if (sectionId === 'services') {
        dataManager.loadServicesToAdminTable();
    } else if (sectionId === 'domains') {
        dataManager.loadDomainsToAdminTable();
    } else if (sectionId === 'testimonials') {
        dataManager.loadTestimonialsToAdminTable();
    }
    
    // Close mobile menu
    if (window.innerWidth <= 768) {
        const adminSidebar = document.getElementById('adminSidebar');
        if (adminSidebar) adminSidebar.classList.remove('active');
    }
}

// Edit functions
function editProduct(id) {
    const products = dataManager.getProducts();
    const product = products.find(p => p.id === id);
    
    if (product) {
        document.getElementById('editProductId').value = product.id;
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductDiscount').value = product.discount || 0;
        document.getElementById('editProductImage').value = product.image;
        document.getElementById('editProductDescription').value = product.description || '';
        
        openModal('editProductModal');
    }
}

function editService(id) {
    const services = dataManager.getServices();
    const service = services.find(s => s.id === id);
    
    if (service) {
        document.getElementById('editServiceId').value = service.id;
        document.getElementById('editServiceName').value = service.name;
        document.getElementById('editServicePrice').value = service.price;
        document.getElementById('editServiceDiscount').value = service.discount || 0;
        document.getElementById('editServiceIcon').value = service.icon;
        document.getElementById('editServiceColor').value = service.color;
        document.getElementById('editServiceDescription').value = service.description;
        
        openModal('editServiceModal');
    }
}

function editDomain(id) {
    const domains = dataManager.getDomains();
    const domain = domains.find(d => d.id === id);
    
    if (domain) {
        document.getElementById('editDomainId').value = domain.id;
        document.getElementById('editDomainName').value = domain.name;
        document.getElementById('editDomainPrice').value = domain.price;
        document.getElementById('editDomainDiscount').value = domain.discount || 0;
        document.getElementById('editDomainType').value = domain.type;
        document.getElementById('editDomainStorage').value = domain.storage;
        document.getElementById('editDomainBandwidth').value = domain.bandwidth;
        document.getElementById('editDomainFeatures').value = domain.features.join(', ');
        
        openModal('editDomainModal');
    }
}

function editTestimonial(id) {
    const testimonials = dataManager.getTestimonials();
    const testimonial = testimonials.find(t => t.id === id);
    
    if (testimonial) {
        document.getElementById('editTestimonialId').value = testimonial.id;
        document.getElementById('editTestimonialName').value = testimonial.name;
        document.getElementById('editTestimonialRating').value = testimonial.rating;
        document.getElementById('editTestimonialImage').value = testimonial.image;
        document.getElementById('editTestimonialCompany').value = testimonial.company || '';
        document.getElementById('editTestimonialText').value = testimonial.text;
        
        openModal('editTestimonialModal');
    }
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication (in a real app, this would be server-side)
            if (username === 'astacloud@admin' && password === '@astacloud2026') {
                showAdminDashboard();
            } else {
                alert('Username atau password salah!');
            }
        });
    }
});

// Logout function
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        showMainWebsite();
    }
}

// Order functions
function orderService(serviceName) {
    const message = `Halo ASTA CLOUD, saya tertarik dengan layanan: ${serviceName}. Mohon informasikan detail lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6285815185245?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderProduct(productName) {
    const message = `Halo ASTA CLOUD, saya ingin membeli: ${productName}. Mohon informasikan ketersediaan dan cara pemesanannya.`;
    const whatsappUrl = `https://wa.me/6285815185245?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderDomain(domainName) {
    const message = `Halo ASTA CLOUD, saya tertarik dengan paket: ${domainName}. Mohon informasikan detail lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6285785944924?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});
