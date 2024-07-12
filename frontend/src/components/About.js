import React from 'react';

const About = () => {
  const aboutStyles = {
    container: {
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '2rem auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#ffcc00',
    },
    description: {
      fontSize: '1.25rem',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={aboutStyles.container}>
      <h2 style={aboutStyles.title}>About EmpireFood</h2>
      <p style={aboutStyles.description}>
        Welcome to <strong>EmpireFood</strong>, your go-to destination for delicious meals delivered right to your doorstep. Whether you're craving a quick snack or a gourmet feast, we've got you covered.
      </p>
      <p style={aboutStyles.description}>
        Our platform allows you to easily log in with your credentials and order a wide variety of foods from different cuisines. From local favorites to international delights, EmpireFood brings you an extensive menu to satisfy all your cravings. We pride ourselves on offering fresh, high-quality ingredients in every dish, ensuring a delightful dining experience every time.
      </p>
      <p style={aboutStyles.description}>
        At EmpireFood, we believe in the convenience of online food ordering combined with exceptional customer service. Our user-friendly interface makes it simple for you to browse through our menu, select your favorite dishes, and place your order in just a few clicks. We also offer a range of payment options for a seamless transaction process.
      </p>
      <p style={aboutStyles.description}>
        Join our community of food lovers today and explore the delicious world of EmpireFood. Whether you're ordering for yourself, your family, or hosting a gathering, we are here to serve you the best food with just a few clicks. Experience the joy of effortless food ordering and enjoy mouth-watering meals with EmpireFood.
      </p>
    </div>
  );
};

export default About;
