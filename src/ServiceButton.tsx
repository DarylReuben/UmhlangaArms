import './ServiceButton.css';

type ServiceButtonProps = {
  label: string;
};

const ServiceButton = ({ label }: ServiceButtonProps) => (
  <button className="service-btn">
    <span className="service-btn-text">{label}</span>
  </button>
);

export default ServiceButton; 