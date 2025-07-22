
# GoRent: A Smart Rental Management Platform

**GoRent** is a comprehensive, user-centric rental marketplace that streamlines renting and leasing of products, properties, and services. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), GoRent aims to revolutionize the rental industry with real-time availability, secure payments, scalability, and modern digital experiences for both renters and owners.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Future Scope](#future-scope)
- [Contributors](#contributors)
- [License](#license)

## Project Overview

GoRent addresses the inefficiencies of traditional, offline rental systems by offering a centralized and transparent platform for connecting renters and owners. Users can list, search, and book rentals of various categories, including property, vehicles, electronics, equipment, and more. The platform emphasizes **user-friendliness, security, scalability**, and **real-time interaction**, promoting the principles of a sustainable shared economy[1].

## Features

- **Centralized Listings** for a variety of rental categories (property, vehicles, equipment, etc.)
- **Advanced Search & Filtering** with real-time availability
- **Role-based Access:** Admin, Owner, Renter
- **Secure Registration & Authentication** using JWT
- **Integrated Payments:** Stripe (and future options)
- **Listing Management** with multimedia uploads and availability toggling
- **Booking System** with instant confirmation
- **User Dashboards** to manage listings, bookings, and history
- **Live Renter-Owner Communication:** Chat, messaging, and notifications
- **Feedback & Ratings** for accountability and transparency
- **Admin Panel** for platform management
- **Responsive Design** for both desktop and mobile users
- **IoT Integration** (future scope): Real-time asset tracking
- **Low-Cost Model:** Free basic listings and low fees

## Technology Stack

| Layer                     | Technology                                        |
|---------------------------|--------------------------------------------------|
| Frontend                  | React.js, Next.js, Tailwind CSS, Vite            |
| Backend                   | Node.js, Express.js                              |
| Database                  | MongoDB, Mongoose                                |
| Authentication            | JWT, bcrypt.js                                   |
| Payment Integration       | Stripe, Razorpay                                 |
| Real-Time Communication   | WebSocket                                        |
| Hosting/Deployment        | AWS EC2, Heroku                                  |
| Version Control           | Git, GitHub                                      |
| API Testing               | Postman                                          |

## System Architecture

- **Frontend:** Built with React.js and Next.js for modular, responsive UIs.
- **Backend:** RESTful APIs using Express.js; JWT-based authentication and role-based permissions.
- **Database:** MongoDB for user profiles, listings, bookings, reviews, and analytics.
- **Cloud Deployment:** AWS EC2 and MongoDB Atlas for global scalability and redundancy.
- **Security:** Encrypted storage, HTTPS, and robust data validation.

### Core Modules

- User management
- Rental listing and search
- Booking and payments
- Real-time chat and notifications
- Ratings, reviews, and analytics dashboard

## Screenshots

*(Replace these with actual screenshots from your running application)*

- Home Page
  <img width="770" height="756" alt="image" src="https://github.com/user-attachments/assets/548c441a-11e4-4b8d-8eec-8d82df41a400" />
- Login & Signup
  <img width="773" height="672" alt="image" src="https://github.com/user-attachments/assets/fdb95016-8ffd-40c8-9c15-c7fc8696d7d5" />

- Item List & Detail View
  <img width="725" height="682" alt="image" src="https://github.com/user-attachments/assets/44b37f0c-e83d-42d1-a095-ddd2c79493f7" />

- Checkout & Payment
  <img width="731" height="597" alt="image" src="https://github.com/user-attachments/assets/1e4ae88c-fabd-4030-b873-65fc746f7023" />

- User Dashboard
  <img width="716" height="563" alt="image" src="https://github.com/user-attachments/assets/619e4639-de80-4d3e-a55d-ad0e160cff2f" />


## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (Atlas recommended)
- Yarn (optional)

### Running Locally

```bash
# Clone the repo
git clone https://github.com/your-org/GoRent.git
cd GoRent

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Start backend (from server/)
npm run dev

# Start frontend (from client/)
npm run dev
```

- Configure environment variables as needed (MongoDB URI, JWT secrets, Stripe keys).

## Testing

GoRent uses **Jest** and **Mocha** for unit and integration testing, and **User Acceptance Testing (UAT)** was conducted with real users.

- Average page load: **1.7 seconds**
- API response times: **88%**
- Scalability tested for 1,000+ concurrent users

## Future Scope

- **AI & Machine Learning:** Personalized recommendations, predictive behavior, smart blocking, and activity categorization.
- **Mobile App:** Cross-platform support.
- **Blockchain:** Decentralized data storage and smart contracts for trustless rental agreements.
- **Gamification:** Achievements, challenges, community engagement.
- **Collaborative features:** Share productivity data or rental analytics with peers.
- **IoT Asset Tracking** and advanced analytics dashboards[1].

## Contributors

- Himanshu Bhadoria
- Abhishek Gupta
- Nand Kumar
- Akshat Verma
- Rajit Kumar

Guided by: **Dr. Awanish Kumar Mishra**

Affiliation: Maharana Institute of Professional Studies, Kanpur (Dr. APJ Abdul Kalam Technical University, Uttar Pradesh)

## License

This project is for academic demonstration purposes. Please refer to the repository LICENSE file for further details.

*Comments and contributions are welcome to help further enhance the GoRent platform.*

*For the full technical report, refer to the project documentation included with the repository.*

[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/83929718/a818eca3-a942-4d60-bd5b-4975d95d4c14/final-report2.pdf
