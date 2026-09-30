import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { CLINIC } from '../config/clinic';
import { useInView, scrollToSection } from '../utils/hooks';
import './Hero.css';

export default function Hero() {
  const [ref, isVisible] = useInView();

  return (
    <section className="hero" ref={ref} aria-label="Welcome">
      <div className="hero__bg">
        <div className="hero__floating-bg">
          <img src="/images/service_root_canal.jpg" className="floating-img floating-img--1" alt="" aria-hidden="true" />
          <img src="/images/service_implants.jpg" className="floating-img floating-img--2" alt="" aria-hidden="true" />
          <img src="/images/service_braces.jpg" className="floating-img floating-img--3" alt="" aria-hidden="true" />
          <img src="/images/service_extraction.jpg" className="floating-img floating-img--4" alt="" aria-hidden="true" />
          <img src="/images/service_preventive.jpg" className="floating-img floating-img--5" alt="" aria-hidden="true" />
        </div>
      </div>

      <div className="container hero__inner hero__inner--centered">
        <div className={`hero__content ${isVisible ? 'visible' : ''}`}>
          <div className="hero__badge">
            {CLINIC.rating.show && (
              <span className="hero__rating">
                <Star size={14} fill="currentColor" />
                {CLINIC.rating.value} · {CLINIC.rating.reviewCount} reviews
              </span>
            )}
            <span className="hero__location">{CLINIC.branch.name}, {CLINIC.branch.city}</span>
          </div>

          <h1 className="hero__title">{CLINIC.tagline}</h1>
          <p className="hero__subtitle">{CLINIC.supportingCopy}</p>

          <div className="hero__actions">
            <Link to="/appointment" className="btn btn-primary btn-lg">
              Book an Appointment
              <ArrowRight size={18} />
            </Link>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => scrollToSection('services')}
            >
              Explore Treatments
            </button>
          </div>

          <div className="hero__hours">
            <span className="hero__hours-dot" />
            <span>Mon–Sat: 9 AM – 9 PM · Sun: 9 AM – 2 PM</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
