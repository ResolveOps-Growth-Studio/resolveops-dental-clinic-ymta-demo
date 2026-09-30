import { CheckCircle, Calendar, MessageSquare, ShieldCheck } from 'lucide-react';
import { useInView } from '../utils/hooks';
import './Gallery.css';

const JOURNEY_STEPS = [
  {
    icon: Calendar,
    title: '1. Easy Booking',
    desc: 'Request an appointment online or call us directly. We’ll find a time that works for you.',
  },
  {
    icon: MessageSquare,
    title: '2. Thorough Consultation',
    desc: 'We listen to your concerns, examine your dental health, and explain every finding clearly.',
  },
  {
    icon: ShieldCheck,
    title: '3. Personalized Treatment',
    desc: 'You receive care tailored to your needs, focusing on comfort, aesthetics, and long-term health.',
  },
  {
    icon: CheckCircle,
    title: '4. Ongoing Care',
    desc: 'We support you with follow-ups and preventive advice to keep your smile bright and healthy.',
  },
];

export default function Gallery() {
  const [ref, isVisible] = useInView();

  return (
    <section id="gallery" className="journey section" ref={ref}>
      <div className="container">
        <div className={`journey__header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">Your Experience</span>
          <h2 className="section-title">The Patient Journey.</h2>
          <p className="section-subtitle">
            We’ve designed every step of your visit to be comfortable, transparent, and focused on your well-being.
          </p>
        </div>

        <div className={`journey__grid ${isVisible ? 'visible' : ''}`}>
          {JOURNEY_STEPS.map(({ icon: Icon, title, desc }, index) => (
            <div key={title} className="journey__step">
              <div className="journey__step-number">0{index + 1}</div>
              <div className="journey__step-icon">
                <Icon size={24} />
              </div>
              <h3 className="journey__step-title">{title}</h3>
              <p className="journey__step-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
