import GoogleMapEmbed from './GoogleMapEmbed';
import WhatsAppButton from './WhatsAppButton';

const ContactSection = () => (
  <div style={{padding: '3rem 0', textAlign: 'center'}}>
    <h2>Contact</h2>
    <p>Contact us at 064 577 6571</p>
    <p><strong>Address:</strong> 56 Pine Grove, Parkhill, Durban North</p>
    <GoogleMapEmbed />
    <WhatsAppButton />
  </div>
);

export default ContactSection; 