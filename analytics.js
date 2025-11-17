// Web Vitals Monitoring
// Optionnel : à intégrer avec votre service d'analytics (Google Analytics, Plausible, etc.)

function sendToAnalytics(metric) {
  // Exemple d'intégration avec Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Exemple d'intégration avec Plausible
  if (typeof plausible !== 'undefined') {
    plausible('Web Vital', {
      props: {
        metric: metric.name,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      },
    });
  }
  
  // Log pour développement (désactiver en production)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Web Vital:', metric.name, metric.value);
  }
}

// Mesurer les Core Web Vitals
function measureWebVitals() {
  // LCP - Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    sendToAnalytics({
      name: 'LCP',
      value: lastEntry.renderTime || lastEntry.loadTime,
      id: lastEntry.id,
    });
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // FID - First Input Delay
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      sendToAnalytics({
        name: 'FID',
        value: entry.processingStart - entry.startTime,
        id: entry.name,
      });
    });
  }).observe({ entryTypes: ['first-input'] });

  // CLS - Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    sendToAnalytics({
      name: 'CLS',
      value: clsValue,
      id: 'cls',
    });
  }).observe({ entryTypes: ['layout-shift'] });

  // FCP - First Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        sendToAnalytics({
          name: 'FCP',
          value: entry.startTime,
          id: entry.name,
        });
      }
    });
  }).observe({ entryTypes: ['paint'] });

  // TTFB - Time to First Byte
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      if (entry.responseStart > 0) {
        sendToAnalytics({
          name: 'TTFB',
          value: entry.responseStart - entry.requestStart,
          id: entry.name,
        });
      }
    });
  }).observe({ entryTypes: ['navigation'] });
}

// Initialiser le monitoring
if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  measureWebVitals();
}

