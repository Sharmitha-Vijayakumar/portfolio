// --- Project Data ---
const projectsData = {
  'sales-forecasting': {
    title: 'Sales Forecasting for Business Development',
    subtitle: 'Predictive Growth Modeling',
    description: 'Developed comprehensive sales forecasting solution using advanced time-series analysis and machine learning algorithms. This interactive Power BI dashboard provides real-time insights into sales trends, seasonal patterns, and future projections with 92% accuracy.',
    results: [
      '✓ Achieved 92% forecast accuracy using ARIMA and Prophet models',
      '✓ Reduced planning cycle time by 60% through automated reporting',
      '✓ Identified $2M in revenue opportunities through trend analysis',
      '✓ Enabled proactive inventory management saving $500K annually'
    ],
    tech: ['Power BI', 'Python', 'Time Series Analysis', 'DAX', 'SQL Server', 'Azure ML'],
    githubUrl: 'https://github.com/sharmitha-analytics/sales-forecasting',
    dataSources: 'Kaggle Store Sales dataset, company historical data, external market indicators',
    detailsHtmlUrl: 'amazon_sales_dashboard.html'
  },
  'executive-dashboard': {
    title: 'Construction Executive Dashboards for Leadership',
    subtitle: 'Strategic Data Visualization',
    description: 'Created real-time executive dashboards that aggregate data from multiple sources to provide C-suite leaders with actionable insights. Features drill-through capabilities, what-if analysis, and automated alerting.',
    results: [
      '✓ Reduced executive reporting time from 2 days to 2 hours',
      '✓ Integrated 15+ data sources into unified dashboard',
      '✓ Enabled real-time decision making with <5 minute data refresh',
      '✓ Improved strategic alignment across departments by 40%'
    ],
    tech: ['Power BI', 'Tableau', 'SQL', 'DAX', 'Power Query', 'Real-time Analytics'],
    powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNDY0NzI0YmFkYjI3ZmE3ZjQwMjEtOTg3OS00YzM4LWE4ZjAtIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
    githubUrl: 'https://github.com/sharmitha-analytics/executive-dashboard',
    dataSources: 'SQL Server databases, REST APIs, Excel reports, SharePoint lists'
  },
  'data-quality': {
    title: 'Data Quality & Integration Pipeline',
    subtitle: 'ETL Process Optimization',
    description: 'Designed and implemented comprehensive data quality monitoring system with automated ETL pipelines. The dashboard provides real-time visibility into data quality metrics and pipeline performance.',
    results: [
      '✓ Improved data accuracy by 30% through automated validation',
      '✓ Reduced data processing time by 50% with optimized ETL',
      '✓ Achieved 99.5% data pipeline uptime with monitoring alerts',
      '✓ Saved 20 hours/week in manual data quality checks'
    ],
    tech: ['Power BI', 'SQL Server', 'Python', 'Azure Data Factory', 'Power Query', 'ETL'],
    powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiOTg3OS1mYTdmNDAyMS00YzM4LWE4ZjAtNDY0NzI0YmFkYjI3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
    githubUrl: 'https://github.com/sharmitha-analytics/data-quality-pipeline',
    dataSources: 'Multiple database systems, flat files, API endpoints, streaming data',
    detailsHtmlUrl: 'data_quality_dashboard.html'
  },
  'energy-analytics': {
    title: 'Energy Analytics for Smart Apartments',
    subtitle: 'IoT Data Analysis & Optimization',
    description: 'Developed IoT-powered energy monitoring system for 250-unit apartment complex. Processes real-time sensor data to identify consumption patterns and recommend optimization strategies.',
    results: [
      '✓ Reduced energy consumption by 30% across 250 units',
      '✓ Saved residents average of $150/month on utility bills',
      '✓ Processed 10M+ IoT data points daily with 99.9% uptime',
      '✓ Identified and fixed 85% of energy wastage sources'
    ],
    tech: ['Power BI', 'Python', 'IoT Hub', 'Time-Series Analysis', 'TensorFlow', 'Azure Stream Analytics'],
    powerbiUrl: '', // If you have a Power BI URL, add it here
    githubUrl: 'https://github.com/Sharmitha-Vijayakumar',
    dataSources: 'This dashboard and accompanying analysis use a synthetic, globally representative dataset modeled on public industry reports from GSMA, IEA, ITU, and others.',
    detailsHtmlUrl: 'iot-energy-dashboard.html'
  },
  'tower-reliability': {
    title: 'Mobile Tower Reliability Modeling',
    subtitle: 'Infrastructure Downtime Prediction',
    description: 'Built predictive maintenance models for telecommunications infrastructure using historical failure data and environmental factors. Provides early warning systems and maintenance scheduling.',
    results: [
      '✓ Reduced infrastructure downtime from 40% to 10%',
      '✓ Saved $3M annually in emergency maintenance costs',
      '✓ Improved network reliability score by 35 points',
      '✓ Predicted 87% of failures 48 hours in advance'
    ],
    tech: ['Power BI', 'R', 'Python', 'Machine Learning', 'Predictive Analytics', 'SQL'],
    githubUrl: 'https://github.com/sharmitha-analytics/tower-reliability',
    dataSources: 'Historical maintenance logs, weather data, sensor readings, network performance metrics',
    detailsHtmlUrl: 'mobile-tower.html'
  },
  'customer-segmentation': {
    title: 'Promotion/Market Segmentation',
    subtitle: 'Advanced Customer Clustering',
    description: 'Performed advanced customer segmentation using clustering algorithms to identify distinct customer groups. Interactive dashboard allows dynamic exploration of segments with real-time filtering.',
    results: [
      '✓ Identified 3 high-value growth segments with 85% accuracy',
      '✓ Increased marketing ROI by 45% through targeted campaigns',
      '✓ Improved customer retention by 25% with personalized strategies',
      '✓ Generated $1.5M in new revenue from untapped segments'
    ],
    tech: ['Power BI', 'Python', 'K-means Clustering', 'SQL', 'Scikit-learn', 'DAX'],
    powerbiUrl: '', // If you have a Power BI URL, add it here
    githubUrl: 'https://github.com/Sharmitha-Vijayakumar',
    dataSources: 'CRM data, transaction history, Kaggle Mall Customer dataset, demographic data',
    detailsHtmlUrl: 'customer_segmentation_dashboard.html'
  },
  'covid-data-story': {
    title: 'COVID-19 Data Story: Mortality & Economic Impact',
    subtitle: 'Statistical Analysis & Interactive Dashboard',
    description: 'Comprehensive analytical journey through pandemic data, revealing critical insights about mortality trends and economic disruption across sectors using advanced statistical techniques and interactive visualizations.',
    results: [
      '✓ Modeled mortality trends across 50+ countries',
      '✓ Quantified economic impact by sector and region',
      '✓ Built interactive dashboard for real-time exploration',
      '✓ Provided actionable recommendations for policymakers'
    ],
    tech: ['Power BI', 'Python', 'Statistical Modeling', 'Data Storytelling', 'DAX'],
    powerbiUrl: '', // Add Power BI URL if available
    githubUrl: 'https://github.com/Sharmitha-Vijayakumar',
    dataSources: 'WHO, World Bank, Johns Hopkins, Oxford COVID-19 Tracker',
    detailsHtmlUrl: 'covid-data-story-dashboard.html'
  },
  'indian-students-abroad': {
    title: 'Indian Students Abroad Analytics',
    subtitle: 'Global Migration, Forecasting & Economic Impact',
    description: 'Comprehensive dashboard analyzing 1.8M+ Indian students abroad, $50B+ annual spend, migration trends, policy impacts, and predictive forecasting across 18+ countries (2020–2025).',
    results: [
      '✓ 1.8M+ students tracked across 18+ countries',
      '✓ $50.2B annual global expenditure analyzed',
      '✓ 94% trend prediction accuracy using time-series models',
      '✓ Policy impact quantified for Canada, UK, USA, Germany',
      '✓ Interactive dashboard with migration flows and economic breakdown'
    ],
    tech: ['Power BI', 'Python', 'Time Series Forecasting', 'Statistical Modeling', 'Dashboard', 'SVG Visualization'],
    powerbiUrl: '', // Add Power BI URL if available
    githubUrl: 'https://github.com/Sharmitha-Vijayakumar',
    dataSources: 'Government Immigration Data, University Reports, Consulting Firms',
    detailsHtmlUrl: 'indian-students-abroad-dashboard.html'
  }
};

// --- Page Management Functions (unchanged) ---
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageName).classList.add('active');
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.classList.remove('active');
    if (link.textContent.toLowerCase() === pageName) {
      link.classList.add('active');
    }
  });
  window.scrollTo(0, 0);
}

function filterProjects(category) {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project-card');
  pills.forEach(pill => {
    pill.classList.remove('active');
    if (pill.textContent.toLowerCase().includes(category) || (category === 'all' && pill.textContent === 'All')) {
      pill.classList.add('active');
    }
  });
  let visibleCount = 0;
  cards.forEach(card => {
    if (category === 'all' || card.dataset.tags.includes(category)) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  document.querySelector('.project-count').textContent = `${visibleCount} of 8 projects`;
}

function searchProjects(query) {
  const cards = document.querySelectorAll('.project-card');
  let visibleCount = 0;
  cards.forEach(card => {
    const title = card.querySelector('.project-title').textContent.toLowerCase();
    const description = card.querySelector('.project-description').textContent.toLowerCase();
    const tags = card.dataset.tags;
    if (title.includes(query.toLowerCase()) || description.includes(query.toLowerCase()) || tags.includes(query.toLowerCase())) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  document.querySelector('.project-count').textContent = `${visibleCount} of 8 projects`;
}

// --- Project Detail Modal ---

function openProjectDetail(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  // Open custom dashboards for project 1, 2, 3, 4, 6, and covid-data-story
  if (projectId === 'sales-forecasting' && project.detailsHtmlUrl) {
    window.open('amazon_sales_dashboard.html', '_blank');
    return;
  }
  if (projectId === 'executive-dashboard') {
    window.open('construction_executive_dashboard.html', '_blank');
    return;
  }
  if (projectId === 'data-quality' && project.detailsHtmlUrl) {
    window.open('data_quality_dashboard.html', '_blank');
    return;
  }
  if (projectId === 'energy-analytics' && project.detailsHtmlUrl) {
    window.open('iot-energy-dashboard.html', '_blank');
    return;
  }
  if (projectId === 'customer-segmentation' && project.detailsHtmlUrl) {
    window.open('customer_segmentation_dashboard.html', '_blank');
    return;
  }
  if (projectId === 'covid-data-story' && project.detailsHtmlUrl) {
    window.open('covid-data-story-dashboard.html', '_blank');
    return;
  }
  if (projectId === 'indian-students-abroad' && project.detailsHtmlUrl) {
    window.open('indian-students-abroad-dashboard.html', '_blank');
    return;
  }

  // Regular modal opening logic for other projects
  document.getElementById('modalTitle').textContent = project.title || '';
  document.getElementById('modalSubtitle').textContent = project.subtitle || '';
  document.getElementById('modalDescription').textContent = project.description || '';
  // Results
  const resultsHtml = (project.results || []).map(result => `<li>${result}</li>`).join('');
  if (document.getElementById('modalResults')) {
    document.getElementById('modalResults').innerHTML = resultsHtml ? `<ul>${resultsHtml}</ul>` : '';
  }
  // Tech
  if (document.getElementById('modalTech')) {
    document.getElementById('modalTech').innerHTML = (project.tech || []).map(tech => `<span>${tech}</span>`).join(' ');
  }

  // Dashboard logic
  const powerbiEmbed = document.getElementById('powerbiEmbed');
  const htmlEmbed = document.getElementById('htmlEmbed');
  if (projectId === 'tower-reliability' && project.detailsHtmlUrl) {
    if (powerbiEmbed) powerbiEmbed.style.display = 'none';
    if (htmlEmbed) {
      htmlEmbed.style.display = 'block';
      htmlEmbed.src = project.detailsHtmlUrl;
    }
  } else {
    if (powerbiEmbed) {
      powerbiEmbed.style.display = 'block';
      powerbiEmbed.src = project.powerbiUrl;
    }
    if (htmlEmbed) htmlEmbed.style.display = 'none';
  }

  // GitHub link
  if (document.getElementById('githubLink')) {
    document.getElementById('githubLink').href = project.githubUrl || '#';
    document.getElementById('githubLink').style.display = project.githubUrl ? 'inline-flex' : 'none';
  }

  // Show the modal
  if (document.getElementById('projectModal')) {
    document.getElementById('projectModal').classList.add('active');
  }
}

function closeModal() {
  if (document.getElementById('projectModal')) {
    document.getElementById('projectModal').classList.remove('active');
  }
}

// --- Mobile Menu and Responsive Features ---
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navPanel = document.querySelector('.nav-panel');

    hamburger.addEventListener('click', () => {
        navPanel.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navPanel.contains(e.target) && !hamburger.contains(e.target)) {
            navPanel.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Handle dashboard graph responsiveness
    const resizeGraph = () => {
        const container = document.querySelector('.graph-container');
        if (container) {
            // Add your graph resize logic here
            // Example: chart.resize();
        }
    };

    window.addEventListener('resize', resizeGraph);
    resizeGraph();
});

// Mobile Navigation Functions
function toggleMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger-menu');
    
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
}

function closeMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger-menu');
    
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileNav();
    }
});

// Handle image loading optimization
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
});

// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    
    mobileMenu.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    
    // Manage focus trap
    if (mobileMenu.classList.contains('active')) {
        trapFocus(mobileMenu);
    }
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    
    mobileMenu.classList.remove('active');
    body.style.overflow = '';
}

// Focus trap functionality
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable.focus();

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    });
}

// Update active menu item
function updateMobileMenuActive(pageName) {
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.textContent.trim().toLowerCase() === pageName) {
            link.classList.add('active');
        }
    });
}

// Update existing showPage function
const originalShowPage = showPage;
showPage = function(pageName) {
    originalShowPage(pageName);
    updateMobileMenuActive(pageName);
    closeMobileMenu();
};

// Event Listeners
document.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    
    if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// --- Project Card Image Slideshow ---
function startProjectSlideshows() {
    document.querySelectorAll('.project-image.slideshow').forEach(container => {
        const images = JSON.parse(container.getAttribute('data-images'));
        if (!images || images.length < 2) return;
        let idx = 0;
        const imgEl = container.querySelector('.slide-img');
        setInterval(() => {
            idx = (idx + 1) % images.length;
            imgEl.src = images[idx];
        }, 5000); // changed from 1000 to 5000 ms (5 seconds)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    startProjectSlideshows();
});

function setupFilters() {
    ['projectFilter', 'timeFilter', 'categoryFilter'].forEach(filterId => {
        const el = document.getElementById(filterId);
        if (el) {
            el.addEventListener('change', function() {
                console.log(`Filter ${filterId} changed to: ${this.value}`);
                // Here you would implement actual filtering logic
                updateDashboard();
            });
        }
    });
}

// Update all GitHub and LinkedIn links globally
document.addEventListener('DOMContentLoaded', () => {
  // Update GitHub links
  document.querySelectorAll('a[href*="github.com"]').forEach(link => {
    link.href = 'https://github.com/Sharmitha-Vijayakumar';
  });
  // Update LinkedIn links
  document.querySelectorAll('a[href*="linkedin.com"]').forEach(link => {
    link.href = 'https://www.linkedin.com/in/sharmitha-vijayakumar/';
  });
});

// Contact form EmailJS submission


document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS (replace with your actual user ID)
    emailjs.init('N0E5cUwqZMYgZnvf8'); // <-- Your EmailJS user ID

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        // Remove any inline onsubmit attribute to avoid conflicts
        contactForm.removeAttribute('onsubmit');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Disable submit button and show loading
            const submitBtn = contactForm.querySelector('button[type="submit"], input[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            // Use your provided template ID
            emailjs.sendForm('service_ak3a8ad', 'template_oggofll', contactForm)
                .then(() => {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }, (error) => {
                    alert('Failed to send message: ' + error.text);
                })
                .finally(() => {
                    // Re-enable submit button
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Send';
                    }
                });
        });
    }
});
