import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">About Us</h1>
      <p className="mt-4">
        Welcome to Steam! We are the ultimate destination for gaming enthusiasts. Our mission is to provide the best gaming experience to our users by offering a wide range of games, community features, and support.
      </p>
      <h3 className="mt-4">Our Story</h3>
      <p>
        Founded in 2003, Steam has grown to become the leading digital distribution platform for PC gaming. With millions of active users worldwide, we continuously strive to innovate and improve our services.
      </p>
      <h3 className="mt-4">Our Values</h3>
      <ul className="mt-2">
        <li><strong>Innovation:</strong> We embrace new ideas and technologies to bring the best gaming experience to our users.</li>
        <li><strong>Community:</strong> We believe in fostering a vibrant and inclusive community where gamers can connect and share their experiences.</li>
        <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do, and we are committed to providing excellent service and support.</li>
      </ul>
      <h3 className="mt-4">Contact Us</h3>
      <p>
        If you have any questions or feedback, feel free to reach out to us. You can contact our support team at <a href="mailto:support@steam.com">support@steam.com</a> or follow us on our social media channels.
      </p>
      <h3 className="mt-4">Follow Us</h3>
      <p>
        Stay updated with the latest news and updates from Steam:
      </p>
      <ul className="mt-2">
        <li><a href="https://www.facebook.com/Steam" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.twitter.com/Steam" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.instagram.com/Steam" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  );
}

export default AboutUs;
