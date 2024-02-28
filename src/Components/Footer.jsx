import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">Our Crypto Platform is dedicated to providing the best cryptocurrency trading experience for our users. With our intuitive interface, extensive coin listings, and powerful tools, you can trade, invest, and manage your crypto portfolio with ease. Join us on our mission to revolutionize the world of finance!</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: contact@ourcryptoplatform.com</p>
            <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-facebook">Facebook</i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-twitter">Twitter</i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-instagram">Instagram</i>
              </a>
            </div> 
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
