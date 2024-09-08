// AboutUs.jsx
import React from 'react';

const teamMembers = [
  {
    name: 'Shivam',
    role: 'Backend Developer',
    description: 'Shivam is our skilled backend developer who brings robust and scalable server-side solutions to the table. His expertise ensures that our application runs smoothly and efficiently, handling all the complex processes behind the scenes.',
    imgSrc: 'path/to/shivam-image.jpg' // Add appropriate image path
  },
  {
    name: 'Satendra Kumar Parteti',
    role: 'Lead Developer',
    description: 'Satendra is a 3rd-year IT student at Jabalpur Engineering College. He is passionate about full-stack development and has a keen interest in building responsive and interactive web applications.',
    imgSrc: '/path/to/satendra.jpg', // Replace with the path to your image
  },
  {
    name: 'Prashasst',
    role: 'AI/ML Expert',
    description: 'As our AI/ML expert, Prashasst is at the forefront of integrating advanced artificial intelligence and machine learning technologies into our project. His innovative algorithms and data-driven insights are key to delivering cutting-edge features.',
    imgSrc: 'path/to/prashasst-image.jpg' // Add appropriate image path
  },
  {
    name: 'Pranjal Tiwari',
    role: 'App Developer',
    description: 'Pranjay is our talented app developer, responsible for creating a user-friendly and engaging application. His skills in mobile and web development ensure that our platform is accessible and enjoyable for users across different devices.',
    imgSrc: 'path/to/pranjay-image.jpg' // Add appropriate image path
  },
  {
    "name": "Sarthak",
    "role": "Cloud Developer",
    "description": "Sarthak, our Cloud Developer, excels in designing and implementing cloud-based solutions. With a focus on Azure, he ensures our cloud infrastructure is secure, scalable, and optimized for performance.",
    "imgSrc": "path/to/sarthak-image.jpg" // Add appropriate image path
  },  
  {
    "name": "Shraddha",
    "role": "Inactive Member",
    "description": "Shradha is a team member who is currently not actively contributing to the project.",
    "imgSrc": "path/to/shradha-image.jpg" // Add appropriate image path
  }
  
  // Add additional team members here
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg hover:cursor-pointer hover:scale-105 transition-all border hover:border-black hover:shadow-2xl active:scale-95 flex flex-col  justify-center shadow-lg overflow-hidden">
              {/* <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{member.role}</h3>
                <p className="text-gray-800">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
