/**
 * YMTA Dental Clinic - Central Configuration
 *
 * All editable business information lives here.
 * Update this file before public launch to reflect verified details.
 */

export const CLINIC = {
  name: 'YMTA Dental Clinic',
  tagline: 'Thoughtful dental care. Confident smiles.',
  supportingCopy:
    'Explore dental care for the whole family at YMTA Dental Clinic in B.K. Pudur, Coimbatore.',

  // Featured branch
  branch: {
    name: 'B.K. Pudur',
    area: 'Kuniyamuthur',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641008',
    fullAddress:
      'Palakkad-Coimbatore Road, opposite Apollo Pharmacy, Ramanujam Nagar, B.K. Pudur, Kuniyamuthur, Coimbatore, Tamil Nadu 641008',
    mapsQuery:
      'YMTA+Dental+Clinic+B.K.+Pudur+Kuniyamuthur+Coimbatore+Tamil+Nadu+641008',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=YMTA+Dental+Clinic+B.K.+Pudur+Kuniyamuthur+Coimbatore+Tamil+Nadu+641008',
  },

  // Contact
  phone: {
    primary: '+919482872744',
    primaryDisplay: '+91 94828 72744',
    /** Flag: Confirm this number's branch assignment before launch */
    additional: '+919486055049',
    additionalDisplay: '+91 94860 55049',
  },

  // Social
  social: {
    instagram: {
      handle: '@ymta_dental_clinic',
      url: 'https://www.instagram.com/ymta_dental_clinic/',
    },
    // WhatsApp: Enable only after clinic confirms the number accepts WhatsApp
    whatsapp: {
      enabled: false,
      number: '+919482872744',
    },
  },

  // Hours
  hours: {
    weekday: {
      days: 'Monday - Saturday',
      sessions: [
        { label: 'Morning', time: '9:00 AM - 2:00 PM' },
        { label: 'Evening', time: '4:00 PM - 9:00 PM' },
      ],
    },
    sunday: {
      days: 'Sunday',
      sessions: [{ label: 'Morning', time: '9:00 AM - 2:00 PM' }],
    },
  },

  /**
   * Google rating - snapshot value, not live.
   * Set `show` to false until verified for public launch.
   */
  rating: {
    show: true,
    value: 4.9,
    total: 5,
    reviewCount: 164,
    source: 'Google Reviews',
    verifiedForLaunch: false,
  },

  // Other branches - names only; no invented details
  otherBranches: ['Ukkadam', 'Sundarapuram', 'Madukkarai'],

  /**
   * Publication flags - set to true only when assets/integrations are ready
   */
  flags: {
    galleryApproved: true, // Patient images approved for display
    backendConnected: false, // Appointment submission service configured
    reviewsLinkVerified: false, // Google Reviews listing URL confirmed
    whatsappConfirmed: false,
  },
};

export const SERVICES = [
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    shortDescription:
      'Carefully performed root canal procedures to help relieve pain and preserve your natural tooth.',
    icon: 'Zap',
    image: '/images/service_root_canal.jpg',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Full-Mouth Restoration',
    shortDescription:
      'Replace missing teeth with implant-supported solutions tailored to your dental needs.',
    icon: 'Layers',
    image: '/images/service_implants.jpg',
  },
  {
    id: 'braces-aligners',
    title: 'Braces & Clear Aligners',
    shortDescription:
      'Orthodontic options for straighter teeth - from traditional braces to modern clear aligners.',
    icon: 'AlignCenter',
    image: '/images/service_braces.jpg',
  },
  {
    id: 'extractions',
    title: 'Tooth Extractions',
    shortDescription:
      'Safe, considered extractions when a tooth can no longer be preserved through other treatments.',
    icon: 'Shield',
    image: '/images/service_extraction.jpg',
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care & Routine Cleaning',
    shortDescription:
      'Regular checkups and cleanings to maintain healthy teeth and catch concerns early.',
    icon: 'Sparkles',
    image: '/images/service_preventive.jpg',
  },
  {
    id: 'pediatric-family',
    title: 'Pediatric & Family Dental Care',
    shortDescription:
      'Gentle, patient-focused dental care for children and the whole family.',
    icon: 'Heart',
    image: '/images/service_pediatric.jpg',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Afrin A',
    text: 'Very good service and very clear explanation was given by doctor and affordable',
  },
  {
    name: 'Akash',
    text: 'Treatment are really good and affortable price for beginners',
  },
  {
    name: 'Irshad Ahammed',
    text: 'The atmosphere is peaceful and the staffs are incredibly warm...',
    isExcerpt: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How do I request an appointment?',
    answer:
      'You can request an appointment through our online form or call us directly. After submitting your request, our team will contact you to confirm a convenient time.',
  },
  {
    question: 'Where is the B.K. Pudur branch located?',
    answer:
      'We are on the Palakkad-Coimbatore Road, opposite Apollo Pharmacy, in Ramanujam Nagar, B.K. Pudur, Kuniyamuthur, Coimbatore - Tamil Nadu 641008.',
  },
  {
    question: 'What are your opening hours?',
    answer:
      'Monday through Saturday we are open 9:00 AM to 2:00 PM and 4:00 PM to 9:00 PM. On Sundays, we are open 9:00 AM to 2:00 PM.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We provide root canal treatment, dental implants and full-mouth restoration, braces and clear aligners, tooth extractions, preventive care and routine cleaning, and pediatric and family dental care.',
  },
  {
    question: 'Do you treat children and families?',
    answer:
      'Yes. We offer gentle, patient-focused dental care for children as well as comprehensive care for the whole family.',
  },
  {
    question: 'How much do treatments cost?',
    answer:
      'Treatment recommendations and costs depend on a clinical assessment. We encourage you to schedule a consultation so we can discuss your needs and provide a clear treatment plan.',
  },
];
