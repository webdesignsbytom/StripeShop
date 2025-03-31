import {
  CompanyName,
  CompanyPhoneNumber,
  FACEBOOK_BUSINESS_URL,
  FULL_BUSINESS_URL,
  INSTAGRAM_BUSINESS_URL,
  LINKEDIN_BUSINESS_URL,
} from '../Constants';

// Home page
export const homePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: CompanyName,
  url: FULL_BUSINESS_URL,
  description: `${CompanyName} offers expert web and circuit design services in the UK.`,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${FULL_BUSINESS_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  sameAs: [
    `${FACEBOOK_BUSINESS_URL}`,
    `${INSTAGRAM_BUSINESS_URL}`,
    `${LINKEDIN_BUSINESS_URL}`,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `${CompanyPhoneNumber}`,
    contactType: 'Customer Service',
    areaServed: 'GB',
    availableLanguage: ['English'],
  },
};

export const homePageAdditionalMeta = [
  { property: 'og:title', content: `Welcome to ${CompanyName}` },
  {
    property: 'og:description',
    content:
      'Explore our simulations and tools for optimal gaming experiences.',
  },
  { property: 'og:image', content: `${FULL_BUSINESS_URL}/brand/logo.png` },
  { property: 'og:url', content: FULL_BUSINESS_URL },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Welcome to ${CompanyName}` },
  {
    name: 'twitter:description',
    content: 'Discover simulations and tools for optimal gaming experiences.',
  },
  { name: 'twitter:image', content: `${FULL_BUSINESS_URL}/brand/logo.png` },
];

// Blog Page
export const blogPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${CompanyName} Blog`,
  url: `${FULL_BUSINESS_URL}/blog`,
  description: `Read the latest articles, tips, and insights from ${CompanyName} on web and circuit design.`,
  publisher: {
    '@type': 'Organization',
    name: CompanyName,
    logo: {
      '@type': 'ImageObject',
      url: `${FULL_BUSINESS_URL}/brand/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${FULL_BUSINESS_URL}/blog`,
  },
  sameAs: [
    `${FACEBOOK_BUSINESS_URL}`,
    `${INSTAGRAM_BUSINESS_URL}`,
    `${LINKEDIN_BUSINESS_URL}`,
  ],
};

export const blogPageAdditionalMeta = [
  { property: 'og:title', content: `${CompanyName} Blog` },
  {
    property: 'og:description',
    content: 'Stay updated with our latest articles and insights.',
  },
  { property: 'og:image', content: `${FULL_BUSINESS_URL}/brand/logo.png` },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/blog` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `${CompanyName} Blog` },
  {
    name: 'twitter:description',
    content: 'Read the latest posts on web and circuit design from our experts.',
  },
  { name: 'twitter:image', content: `${FULL_BUSINESS_URL}/brand/logo.png` },
];

// Blog Post Page Structured Data
export const blogPostStructuredData = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description || `${CompanyName} offers expert web and circuit design insights.`,
  datePublished: post.date || new Date().toISOString(),
  dateModified: post.dateModified || new Date().toISOString(),
  author: {
    '@type': 'Person',
    name: post.author || `${CompanyName}`,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${FULL_BUSINESS_URL}/blog/${post.slug}`,
  },
  publisher: {
    '@type': 'Organization',
    name: CompanyName,
    logo: {
      '@type': 'ImageObject',
      url: `${FULL_BUSINESS_URL}/brand/logo.png`,
    },
  },
});

// Blog Post Page Meta Tags
export const blogPostAdditionalMeta = (post) => [
  { property: 'og:type', content: 'article' },
  { property: 'og:title', content: post.title },
  { property: 'og:description', content: post.description || '' },
  { property: 'og:image', content: post.image || `${FULL_BUSINESS_URL}/brand/logo.png` },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/blog/${post.slug}` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: post.title },
  { name: 'twitter:description', content: post.description || '' },
  { name: 'twitter:image', content: post.image || `${FULL_BUSINESS_URL}/brand/logo.png` },
];


// Forgot password
export const forgottenPasswordPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Reset Password',
  description: `Reset your password for your ${CompanyName} account.`,
  url: `${FULL_BUSINESS_URL}/forgotten-password`,
};

export const forgottenPasswordPageAdditionalMeta = [
  { property: 'og:title', content: `Reset Your Password - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Securely reset your ${CompanyName} account password.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/reset-password-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/forgotten-password` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Reset Your Password - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Follow the steps to securely reset your ${CompanyName} account password.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/reset-password-preview.jpg`,
  },
];

// Login
export const loginPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Login',
  description: `Log in to your ${CompanyName} account to access exclusive features.`,
  url: `${FULL_BUSINESS_URL}/login`,
};

export const loginPageAdditionalMeta = [
  { property: 'og:title', content: `Login - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Access your ${CompanyName} account to explore exclusive features and services.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/login-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/login` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Login - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Sign in to your ${CompanyName} account and unlock access to premium features.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/login-preview.jpg`,
  },
];

// Register
export const registerPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Register',
  description: `Create an account with ${CompanyName} to access exclusive features and services.`,
  url: `${FULL_BUSINESS_URL}/register`,
};

export const registerPageAdditionalMeta = [
  { property: 'og:title', content: `Register - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Sign up for a ${CompanyName} account to enjoy exclusive features and personalized services.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/register-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/register` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Register - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Join ${CompanyName} today and unlock access to premium features.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/register-preview.jpg`,
  },
];


// Maintenance
export const maintenancePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Maintenance Page',
  description: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back soon!`,
  url: `${FULL_BUSINESS_URL}/maintenance`,
};

export const maintenancePageAdditionalMeta = [
  { property: 'og:title', content: `We'll Be Back Soon - ${CompanyName}` },
  {
    property: 'og:description',
    content: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back shortly with exciting updates.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/maintenance-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/maintenance` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `We'll Be Back Soon - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back shortly with exciting updates.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/maintenance-preview.jpg`,
  },
];

// Policies page
export const termsAndPoliciesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms and Policies',
  description: `Explore the terms of service and privacy policies of ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/terms-and-policies`,
  mainEntity: {
    '@type': 'FAQPage',
    name: 'Terms and Policies FAQ',
    description: `Frequently asked questions about terms of service, privacy policies, and compliance at ${CompanyName}.`,
  },
};

export const termsAndPoliciesAdditionalMeta = [
  { property: 'og:title', content: `Terms and Policies - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Understand the terms of service, privacy policies, and compliance guidelines of ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/terms-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/terms-and-policies` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Terms and Policies - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Learn more about our terms of service, privacy policies, and compliance at ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/terms-preview.jpg`,
  },
];

// Error page
export const errorPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '404 Error Page',
  description: `The requested page could not be found on ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/404`,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${FULL_BUSINESS_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const errorPageAdditionalMeta = [
  { property: 'og:title', content: 'Page Not Found - 404' },
  {
    property: 'og:description',
    content: `Oops! The page you’re looking for isn’t here. Visit ${CompanyName} to find what you need.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/404-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/404` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Page Not Found - 404' },
  {
    name: 'twitter:description',
    content: `Oops! The page you’re looking for isn’t here. Visit ${CompanyName} to find what you need.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/404-preview.jpg`,
  },
];


// Contact page
export const contactPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: CompanyName,
    url: FULL_BUSINESS_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CompanyPhoneNumber,
      contactType: 'Customer Service',
      areaServed: 'GB',
      availableLanguage: ['English'],
    },
    sameAs: [
      FACEBOOK_BUSINESS_URL,
      INSTAGRAM_BUSINESS_URL,
      LINKEDIN_BUSINESS_URL,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${FULL_BUSINESS_URL}/brand/logo.png`,
    },
  },
};

export const contactPageAdditionalMeta = [
  { property: 'og:title', content: `Contact ${CompanyName}` },
  {
    property: 'og:description',
    content: `Reach out to ${CompanyName} for professional web and circuit design solutions. We're ready to discuss your projects and answer any questions.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/brand/contact-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/contact` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Contact ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Contact ${CompanyName} for expert web and circuit design services. Let's discuss your needs and find the best solution.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/brand/contact-preview.jpg`,
  },
];
