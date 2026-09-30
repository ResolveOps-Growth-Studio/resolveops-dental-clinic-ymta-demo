import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Layers, AlignCenter, Shield, Sparkles, Heart } from 'lucide-react';
import { SERVICES } from '../config/clinic';
import { useInView } from '../utils/hooks';
import './Services.css';

const ICON_MAP = {
  Zap, Layers, AlignCenter, Shield, Sparkles, Heart,
};

export default function Services() {
  const [ref, isVisible] = useInView();

  return (
    <section id="services" className="services section" ref={ref}>
      <div className="container">
        <div className={`services__header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Comprehensive dental care for every need.</h2>
          <p className="section-subtitle">
            From routine cleanings to advanced restorations — explore the treatments
            available at our B.K. Pudur clinic.
          </p>
        </div>

        <div className={`services__grid ${isVisible ? 'visible' : ''}`}>
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Sparkles;
            return (
              <div
                className="services__card"
                key={service.id}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services__card-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="services__card-content">
                    <div className="services__card-icon">
                      <Icon size={24} />
                    </div>
                  </div>
                )}
                <div className="services__card-content">
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-desc">{service.shortDescription}</p>
                  <Link
                    to={`/appointment?service=${encodeURIComponent(service.id)}`}
                    className="services__card-link"
                  >
                    Request Appointment
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
