# 🚀 Inova PMS - Performance Management System

<p align="center">
  <a href="https://github.com/MN-987/innovaDigits-PMS-Backend">
    <img src="https://github.com/MN-987/innovaDigits-PMS-Backend/assets/77201700/92762fe9-bb5b-40d1-88d8-39d871d7b393" alt="Inova PMS Logo" width="200">
  </a>
</p>

<h1 align="center">innovaDigits - Performance Management System</h1>

<p align="center">
  <strong>A comprehensive backend API for employee performance management and tracking</strong>
  <br/>
  <em>Built with Node.js, Express.js, and MongoDB</em>
</p>

<p align="center">
  <a href="https://drive.google.com/file/d/1YRIIYZ9wgHaYmxiFmwRMVGV0T_ySeYaG/view?usp=sharing">
    <img src="https://img.shields.io/badge/📺-View%20Demo-blue?style=for-the-badge" alt="View Demo">
  </a>
  <a href="https://github.com/MN-987/innovaDigits-PMS-Backend/issues">
    <img src="https://img.shields.io/badge/🐛-Report%20Bug-red?style=for-the-badge" alt="Report Bug">
  </a>
  <a href="https://github.com/MN-987/innovaDigits-PMS-Backend/issues">
    <img src="https://img.shields.io/badge/💡-Request%20Feature-green?style=for-the-badge" alt="Request Feature">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/downloads/MN-987/innovaDigits-PMS-Backend/total?style=flat-square" alt="Downloads">
  <img src="https://img.shields.io/github/contributors/MN-987/innovaDigits-PMS-Backend?color=dark-green&style=flat-square" alt="Contributors">
  <img src="https://img.shields.io/github/issues/MN-987/innovaDigits-PMS-Backend?style=flat-square" alt="Issues">
  <img src="https://img.shields.io/github/license/MN-987/innovaDigits-PMS-Backend?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=flat-square" alt="Node.js Version">
  <img src="https://img.shields.io/badge/MongoDB-6+-green?style=flat-square" alt="MongoDB Version">
</p> 

## 📋 Table Of Contents

* [🎯 About the Project](#about-the-project)
  * [Key Features](#key-features)
  * [Core Modules](#core-modules)
  * [Architecture Overview](#architecture-overview)
* [🛠️ Built With](#built-with)
* [🚀 Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Environment Configuration](#environment-configuration)
* [📖 API Documentation](#api-documentation)
  * [Authentication](#authentication)
  * [API Endpoints](#api-endpoints)
* [🔧 Usage](#usage)
  * [Running the Server](#running-the-server)
  * [Testing the API](#testing-the-api)
* [📁 Project Structure](#project-structure)
* [🗺️ Roadmap](#roadmap)
* [🤝 Contributing](#contributing)
* [📄 License](#license)
* [👥 Authors](#authors)
* [🙏 Acknowledgements](#acknowledgements)

## 🎯 About The Project

![Screen Shot](https://github.com/MN-987/innovaDigits-PMS-Backend/assets/77201700/cc633a3e-8905-436b-888f-832aaee94042)

### What is innovaDigits-PMS?

**Inova PMS** is a comprehensive Performance Management System backend API designed to align employees' individual goals and performance with organizational objectives. This system provides the foundational infrastructure for tracking, evaluating, and improving employee performance across teams and departments.

The backend serves as the core engine for a larger PMS platform being developed by [innovaDigits](https://www.linkedin.com/company/innovadigits), one of Egypt's leading software development companies.

📋 **[View Complete Project Documentation](https://docs.google.com/document/d/1jdSpmqHTuhSN8UX0D9KCESG0CKYVQKGDcXFIBCZKM5I/edit)**

### Key Features

✨ **Comprehensive Performance Tracking**
- Employee performance evaluation and monitoring
- Goal setting and progress tracking
- Team performance analytics
- Competency-based assessments

🔐 **Robust Authentication & Authorization**
- JWT-based authentication
- Role-based access control
- Secure password hashing with bcrypt
- Session management with cookies

📊 **Advanced Feedback System**
- Multi-directional feedback collection
- Performance review cycles
- Real-time feedback tracking
- Metadata-driven feedback forms

🏢 **Team & User Management**
- Hierarchical team structures
- User role management
- Department organization
- Employee onboarding workflows

### Core Modules

The project is architected around three primary modules:

#### 1. 👥 **Users & Teams Module**
- User registration, authentication, and profile management
- Team creation and member assignment
- Role-based permissions and access control
- User hierarchy and reporting structures

#### 2. 🎯 **Competencies Module**
- Skill and competency framework management
- Competency assessments and ratings
- Performance level definitions
- Career development pathways

#### 3. 📝 **Feedback Module**
- 360-degree feedback collection
- Performance review workflows
- Feedback analytics and reporting
- Custom feedback forms and templates

### Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend App  │    │   Mobile App    │    │  Admin Panel    │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   REST API      │
                    │  (Express.js)   │
                    └─────────┬───────┘
                              │
                    ┌─────────────────┐
                    │   MongoDB       │
                    │   Database      │
                    └─────────────────┘
```

> **⚠️ Important Note:** To utilize the Feedback or Competency modules, proper API calls must be made to the Users and Teams modules first to establish the necessary relationships and permissions. 

## 🛠️ Built With

This project is built using modern, industry-standard technologies:

### Core Technologies
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[Express.js](https://expressjs.com/)** - Fast, unopinionated web framework
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database for flexible data storage
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling for Node.js

### Authentication & Security
- **[JSON Web Tokens (JWT)](https://jwt.io/)** - Secure authentication mechanism
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - Password hashing and salt generation
- **[cookie-parser](https://www.npmjs.com/package/cookie-parser)** - Cookie parsing middleware

### Validation & Utilities
- **[Joi](https://joi.dev/)** - Object schema validation
- **[UUID](https://www.npmjs.com/package/uuid)** - Unique identifier generation
- **[http-status-codes](https://www.npmjs.com/package/http-status-codes)** - HTTP status code constants

### Communication
- **[Nodemailer](https://nodemailer.com/)** - Email sending capabilities
- **[SendGrid](https://sendgrid.com/)** - Email delivery service integration

### Development Tools
- **[Nodemon](https://nodemon.io/)** - Development server with auto-restart
- **[dotenv](https://www.npmjs.com/package/dotenv)** - Environment variable management
- **[CORS](https://www.npmjs.com/package/cors)** - Cross-Origin Resource Sharing

### API Features
- RESTful API design principles
- JSON-based request/response format
- Comprehensive error handling
- Input validation and sanitization
- Role-based access control
- Pagination and filtering support

## 🚀 Getting Started

Follow these steps to get the Inova PMS backend running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **[Node.js](https://nodejs.org/)** (v18.0 or higher)
- **[npm](https://www.npmjs.com/)** (v8.0 or higher) - comes with Node.js
- **[MongoDB](https://www.mongodb.com/)** (v6.0 or higher) - local installation or MongoDB Atlas account
- **[Git](https://git-scm.com/)** - for version control

Check your installations:
```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MN-987/innovaDigits-PMS-Backend.git
   cd innovaDigits-PMS-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```
   
   Add the following environment variables to your `.env` file:
   ```env
   # Server Configuration
   PORT=6000
   NODE_ENV=development
   
   # Database Configuration
   DB_URL=mongodb://localhost:27017/inova-pms
   # For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/inova-pms
   
   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRES_IN=7d
   
   # Email Configuration (Optional)
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=noreply@innovapms.com
   
   # CORS Configuration
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start MongoDB**
   
   If using local MongoDB:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Windows
   net start MongoDB
   
   # On Linux
   sudo systemctl start mongod
   ```

5. **Run the application**
   ```bash
   # Development mode with auto-restart
   npm start
   
   # Or directly with node
   node app.js
   ```

6. **Verify the installation**
   
   The server should start on `http://localhost:6000`. You should see:
   ```
   Example app listening on port 6000!
   DB Connected ....
   ```

### Environment Configuration

#### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `6000` |
| `DB_URL` | MongoDB connection string | `mongodb://localhost:27017/inova-pms` |
| `JWT_SECRET` | Secret key for JWT signing | `your_super_secret_key` |
| `JWT_EXPIRES_IN` | JWT token expiration time | `7d` |

#### Optional Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `SENDGRID_API_KEY` | SendGrid API key for emails | - |
| `FROM_EMAIL` | Default sender email | - |
| `FRONTEND_URL` | Frontend application URL | `http://localhost:3000` |

## 📖 API Documentation

The Inova PMS API follows RESTful principles and provides comprehensive endpoints for managing users, teams, competencies, and feedback.

### Base URL
```
http://localhost:6000/api/v1
```

### Authentication

Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:

```bash
Authorization: Bearer <your_jwt_token>
```

To obtain a token, use the authentication endpoints:

```bash
# Login
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}
```

### API Endpoints

#### 🔐 Authentication Routes (`/api/v1/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/register` | Register new user | ❌ |
| `POST` | `/login` | User login | ❌ |
| `POST` | `/logout` | User logout | ✅ |
| `POST` | `/refresh` | Refresh JWT token | ✅ |
| `POST` | `/forgot-password` | Request password reset | ❌ |
| `POST` | `/reset-password` | Reset password | ❌ |

#### 👥 User Routes (`/api/v1/user`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all users | ✅ |
| `GET` | `/:id` | Get user by ID | ✅ |
| `PUT` | `/:id` | Update user | ✅ |
| `DELETE` | `/:id` | Delete user | ✅ (Admin) |
| `GET` | `/profile` | Get current user profile | ✅ |
| `PUT` | `/profile` | Update current user profile | ✅ |

#### 🏢 Team Routes (`/api/v1/teams`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all teams | ✅ |
| `POST` | `/` | Create new team | ✅ (Admin) |
| `GET` | `/:id` | Get team by ID | ✅ |
| `PUT` | `/:id` | Update team | ✅ (Admin) |
| `DELETE` | `/:id` | Delete team | ✅ (Admin) |
| `POST` | `/:id/members` | Add team member | ✅ (Admin) |
| `DELETE` | `/:id/members/:userId` | Remove team member | ✅ (Admin) |

#### 🎯 Competency Routes (`/api/v1/competency`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all competencies | ✅ |
| `POST` | `/` | Create competency | ✅ (Admin) |
| `GET` | `/:id` | Get competency by ID | ✅ |
| `PUT` | `/:id` | Update competency | ✅ (Admin) |
| `DELETE` | `/:id` | Delete competency | ✅ (Admin) |

#### 📊 Level Routes (`/api/v1/levels`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all levels | ✅ |
| `POST` | `/` | Create level | ✅ (Admin) |
| `GET` | `/:id` | Get level by ID | ✅ |
| `PUT` | `/:id` | Update level | ✅ (Admin) |
| `DELETE` | `/:id` | Delete level | ✅ (Admin) |

#### 📝 Feedback Routes (`/api/v1/feedback`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all feedback | ✅ |
| `POST` | `/` | Create feedback | ✅ |
| `GET` | `/:id` | Get feedback by ID | ✅ |
| `PUT` | `/:id` | Update feedback | ✅ |
| `DELETE` | `/:id` | Delete feedback | ✅ |

#### 📂 Category Routes (`/api/v1/category`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all categories | ✅ |
| `POST` | `/` | Create category | ✅ (Admin) |
| `GET` | `/:id` | Get category by ID | ✅ |
| `PUT` | `/:id` | Update category | ✅ (Admin) |
| `DELETE` | `/:id` | Delete category | ✅ (Admin) |

### Example API Calls

#### Register a new user
```bash
curl -X POST http://localhost:6000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "role": "employee"
  }'
```

#### Create a new team
```bash
curl -X POST http://localhost:6000/api/v1/teams \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_jwt_token>" \
  -d '{
    "name": "Development Team",
    "description": "Software development team",
    "department": "Engineering"
  }'
```

#### Submit feedback
```bash
curl -X POST http://localhost:6000/api/v1/feedback \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_jwt_token>" \
  -d '{
    "receiverId": "user_id_here",
    "competencyId": "competency_id_here",
    "rating": 4,
    "comments": "Great work on the project!",
    "feedbackType": "peer"
  }'
```

## 🔧 Usage

### Running the Server

1. **Development Mode** (with auto-restart)
   ```bash
   npm start
   ```

2. **Production Mode**
   ```bash
   NODE_ENV=production node app.js
   ```

### Testing the API

You can test the API using various tools:

#### Using cURL
```bash
# Health check
curl http://localhost:6000/api/v1/auth/health

# Login
curl -X POST http://localhost:6000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

#### Using Postman
1. Import the API collection (if available)
2. Set the base URL to `http://localhost:6000/api/v1`
3. Configure authentication with JWT tokens

#### Using Thunder Client (VS Code Extension)
1. Install Thunder Client extension
2. Create a new collection
3. Add requests for each endpoint

### Common Use Cases

#### 1. User Onboarding Flow
```javascript
// 1. Register user
POST /api/v1/auth/register

// 2. Assign to team
POST /api/v1/teams/:teamId/members

// 3. Set up competencies
GET /api/v1/competency

// 4. Initial performance assessment
POST /api/v1/feedback
```

#### 2. Performance Review Cycle
```javascript
// 1. Get team members
GET /api/v1/teams/:teamId

// 2. Collect feedback for each member
POST /api/v1/feedback

// 3. Generate performance reports
GET /api/v1/feedback?receiverId=:userId

// 4. Update competency levels
PUT /api/v1/competency/:id
```

## 📁 Project Structure

```
inova-pms/
├── 📄 app.js                     # Application entry point
├── 📄 package.json               # Dependencies and scripts
├── 📄 package-lock.json          # Dependency lock file
├── 📄 .env                       # Environment variables (create this)
├── 📄 README.md                  # Project documentation
├── 📄 LICENSE                    # MIT License
│
├── 📁 config/                    # Configuration files
│   └── 📄 dbConnection.js        # MongoDB connection setup
│
├── 📁 routes/                    # API route definitions
│   ├── 📄 index.routes.js        # Main router and middleware setup
│   ├── 📄 auth.routes.js         # Authentication routes
│   ├── 📄 user.routes.js         # User management routes
│   ├── 📄 team.routes.js         # Team management routes
│   ├── 📄 competency.routes.js   # Competency routes
│   ├── 📄 feedback.routes.js     # Feedback routes
│   ├── 📄 category.routes.js     # Category routes
│   └── 📄 level.routes.js        # Level routes
│
├── 📁 controller/                # Business logic controllers
│   ├── 📄 auth.controller.js     # Authentication logic
│   ├── 📄 user.controller.js     # User management logic
│   ├── 📄 team.controller.js     # Team management logic
│   ├── 📄 competency.controller.js # Competency logic
│   ├── 📄 feedback.controller.js # Feedback logic
│   ├── 📄 category.controller.js # Category logic
│   └── 📄 level.controller.js    # Level logic
│
├── 📁 service/                   # Service layer (business logic)
│   ├── 📄 auth.service.js        # Authentication services
│   ├── 📄 user.service.js        # User services
│   ├── 📄 team.service.js        # Team services
│   ├── 📄 competency.service.js  # Competency services
│   ├── 📄 feedback.service.js    # Feedback services
│   ├── 📄 category.service.js    # Category services
│   └── 📄 level.service.js       # Level services
│
├── 📁 data/                      # Database models (Mongoose schemas)
│   ├── 📄 user.model.js          # User schema
│   ├── 📄 team.model.js          # Team schema
│   ├── 📄 competency.model.js    # Competency schema
│   ├── 📄 feedback.model.js      # Feedback schema
│   ├── 📄 feedback.metadata.model.js # Feedback metadata schema
│   ├── 📄 category.model.js      # Category schema
│   └── 📄 level.model.js         # Level schema
│
├── 📁 middleware/                # Custom middleware
│   ├── 📁 auth/                  # Authentication middleware
│   │   ├── 📄 isAuthenticated.js # JWT verification
│   │   └── 📄 isSuperAdmin.js    # Admin role verification
│   └── 📁 validator/             # Input validation middleware
│       ├── 📄 validation.js      # General validation utilities
│       ├── 📄 user.validator.js  # User input validation
│       ├── 📄 team.validator.js  # Team input validation
│       ├── 📄 competency.validator.js # Competency validation
│       ├── 📄 feedback.validator.js # Feedback validation
│       ├── 📄 category.validator.js # Category validation
│       └── 📄 level.validators.js # Level validation
│
└── 📁 util/                      # Utility functions
    ├── 📄 errorClass.js          # Custom error classes
    ├── 📄 errorHandling.js       # Global error handling
    └── 📄 feedbackTest.js        # Feedback testing utilities
```

### Key Directories Explained

#### `/routes` - API Route Definitions
Contains Express.js route definitions that map HTTP requests to controller functions. Each module has its own route file for better organization.

#### `/controller` - Request Handlers
Contains the main business logic for handling HTTP requests. Controllers process the request, call appropriate services, and return responses.

#### `/service` - Business Logic Layer
Contains the core business logic separated from HTTP concerns. Services handle data processing, validation, and communication with the database.

#### `/data` - Database Models
Contains Mongoose schemas that define the structure of documents in MongoDB collections. These models handle data validation and relationships.

#### `/middleware` - Custom Middleware
Contains reusable middleware functions for authentication, authorization, and input validation that can be applied to routes.

#### `/util` - Utility Functions
Contains helper functions, error handling utilities, and other reusable code that doesn't fit into other categories.

## 🗺️ Roadmap

### Current Features ✅
- ✅ User authentication and authorization
- ✅ Team management system
- ✅ Competency framework
- ✅ Feedback collection and management
- ✅ Role-based access control
- ✅ Input validation and error handling
- ✅ RESTful API design

### Upcoming Features 🚧

#### Phase 1 - Core Enhancements
- [ ] **Performance Analytics Dashboard**
  - Comprehensive performance metrics
  - Visual charts and reports
  - Trend analysis over time
  
- [ ] **Advanced Reporting System**
  - Custom report generation
  - PDF export functionality
  - Scheduled reports via email
  
- [ ] **Notification System**
  - Real-time notifications
  - Email alerts for performance reviews
  - Custom notification preferences

#### Phase 2 - Advanced Features
- [ ] **Goal Setting & Tracking**
  - SMART goals framework
  - Progress tracking
  - Goal alignment with company objectives
  
- [ ] **360-Degree Feedback Enhancement**
  - Multi-source feedback collection
  - Anonymous feedback options
  - Peer nomination system
  
- [ ] **Performance Review Workflows**
  - Automated review cycles
  - Approval workflows
  - Performance improvement plans

#### Phase 3 - Integration & Scaling
- [ ] **Third-party Integrations**
  - HR Information Systems (HRIS)
  - Single Sign-On (SSO)
  - Calendar applications
  
- [ ] **Advanced Analytics**
  - Machine learning insights
  - Predictive analytics
  - Performance forecasting
  
- [ ] **Mobile Application**
  - Native iOS/Android apps
  - Offline functionality
  - Push notifications

#### Phase 4 - Enterprise Features
- [ ] **Multi-tenant Architecture**
  - Organization isolation
  - Custom branding
  - Configurable workflows
  
- [ ] **Advanced Security**
  - Two-factor authentication
  - Audit logging
  - Data encryption at rest
  
- [ ] **API Rate Limiting & Monitoring**
  - Request throttling
  - API usage analytics
  - Performance monitoring

### Known Issues 🐛
See the [open issues](https://github.com/MN-987/innovaDigits-PMS-Backend/issues) for a list of known bugs and feature requests.

### Contributing to the Roadmap
Have ideas for new features? We'd love to hear from you!
- 💡 [Request a feature](https://github.com/MN-987/innovaDigits-PMS-Backend/issues/new?template=feature_request.md)
- 🐛 [Report a bug](https://github.com/MN-987/innovaDigits-PMS-Backend/issues/new?template=bug_report.md)
- 💬 [Join the discussion](https://github.com/MN-987/innovaDigits-PMS-Backend/discussions)

## 🤝 Contributing

We welcome contributions from the community! Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Ways to Contribute

🐛 **Report Bugs**
- Use our [bug report template](https://github.com/MN-987/innovaDigits-PMS-Backend/issues/new?template=bug_report.md)
- Include detailed steps to reproduce the issue
- Provide environment information

💡 **Suggest Features**
- Use our [feature request template](https://github.com/MN-987/innovaDigits-PMS-Backend/issues/new?template=feature_request.md)
- Explain the feature and its benefits
- Consider the impact on existing functionality

📝 **Improve Documentation**
- Fix typos and grammatical errors
- Add examples and clarifications
- Translate documentation

🔧 **Submit Code**
- Fix bugs and implement features
- Improve performance and security
- Add tests and improve coverage

### Development Guidelines

#### Code Style
- Follow JavaScript ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Maintain consistent indentation (2 spaces)

#### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add user profile update endpoint
fix: resolve JWT token validation issue
docs: update API documentation
test: add unit tests for auth service
refactor: improve error handling structure
```

#### Testing
- Write unit tests for new features
- Ensure all existing tests pass
- Test API endpoints with various inputs
- Verify error handling scenarios

### Creating A Pull Request

1. **Fork the Project**
   ```bash
   git clone https://github.com/your-username/innovaDigits-PMS-Backend.git
   cd innovaDigits-PMS-Backend
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or for bug fixes
   git checkout -b fix/bug-description
   ```

3. **Set up development environment**
   ```bash
   npm install
   cp .env.example .env  # Configure your environment
   ```

4. **Make your changes**
   - Write your code following the style guidelines
   - Add tests for new functionality
   - Update documentation as needed

5. **Test your changes**
   ```bash
   npm test
   npm start  # Verify the server runs correctly
   ```

6. **Commit your Changes**
   ```bash
   git add .
   git commit -m 'feat: add amazing feature'
   ```

7. **Push to the Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

8. **Open a Pull Request**
   - Use our [pull request template](https://github.com/MN-987/innovaDigits-PMS-Backend/blob/main/.github/pull_request_template.md)
   - Provide a clear description of changes
   - Link related issues
   - Request reviews from maintainers

### Pull Request Guidelines

✅ **Before submitting:**
- [ ] Code follows the project's style guidelines
- [ ] Self-review of your code has been performed
- [ ] Comments have been added to hard-to-understand areas
- [ ] Documentation has been updated accordingly
- [ ] Tests have been added/updated and pass
- [ ] No new warnings or errors are introduced

📋 **Pull Request checklist:**
- [ ] Clear, descriptive title
- [ ] Detailed description of changes
- [ ] Screenshots/GIFs for UI changes
- [ ] Breaking changes are documented
- [ ] Related issues are linked

### Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://github.com/MN-987/innovaDigits-PMS-Backend/blob/main/CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

### Questions or Need Help?

- 💬 [Start a discussion](https://github.com/MN-987/innovaDigits-PMS-Backend/discussions)
- 📧 Contact the maintainers
- 📖 Check existing documentation and issues

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

```
MIT License

Copyright (c) 2024 Mostafa Nasser & innovaDigits Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[Full license text in LICENSE file]
```

**What this means:**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No liability or warranty provided

## 👥 Authors

### Core Team

**Mostafa Nasser** - *Lead Developer & Project Maintainer*
- 🐙 GitHub: [@MN-987](https://github.com/MN-987)
- 💼 LinkedIn: [Connect with Mostafa](https://linkedin.com/in/mostafa-nasser)
- 📧 Email: [Contact](mailto:contact@innovadigits.com)

### innovaDigits Team
**innovaDigits** - *Software Development Company*
- 🌐 Website: [innovaDigits](https://www.innovadigits.com)
- 💼 LinkedIn: [innovaDigits Company](https://www.linkedin.com/company/innovadigits)
- 🏢 Location: Egypt

### Contributors

We appreciate all contributors who have helped make this project better! 🎉

- [View all contributors](https://github.com/MN-987/innovaDigits-PMS-Backend/graphs/contributors)

**Want to see your name here?** Check out our [Contributing Guidelines](#contributing) and submit your first pull request!

## 🙏 Acknowledgements

We'd like to thank the following resources and communities that made this project possible:

### Technology & Frameworks
- **[Express.js](https://expressjs.com/)** - Fast, unopinionated web framework for Node.js
- **[MongoDB](https://www.mongodb.com/)** - The database for modern applications
- **[Mongoose](https://mongoosejs.com/)** - Elegant MongoDB object modeling for Node.js
- **[JSON Web Tokens](https://jwt.io/)** - Industry standard for secure authentication

### Development Tools
- **[Node.js](https://nodejs.org/)** - JavaScript runtime built on Chrome's V8 engine
- **[Nodemon](https://nodemon.io/)** - Utility that monitors for changes and restarts server
- **[Postman](https://www.postman.com/)** - API development and testing platform
- **[Visual Studio Code](https://code.visualstudio.com/)** - Source code editor

### Learning Resources
- **[MDN Web Docs](https://developer.mozilla.org/)** - Comprehensive web development documentation
- **[Node.js Documentation](https://nodejs.org/docs/)** - Official Node.js documentation
- **[MongoDB University](https://university.mongodb.com/)** - Free online courses for MongoDB

### Open Source Community
- **[GitHub](https://github.com/)** - Development platform and version control
- **[npm](https://www.npmjs.com/)** - Package manager for Node.js
- **[Stack Overflow](https://stackoverflow.com/)** - Developer community and Q&A platform

### Inspiration & Design
- **[REST API Design](https://restfulapi.net/)** - Best practices for RESTful API design
- **[The Twelve-Factor App](https://12factor.net/)** - Methodology for building SaaS applications
- **[Semantic Versioning](https://semver.org/)** - Versioning scheme for software

### Special Thanks
- **innovaDigits Team** - For providing the vision and requirements for this project
- **Open Source Contributors** - For their valuable contributions and feedback
- **Developer Community** - For continuous learning and knowledge sharing

---

<p align="center">
  <strong>Made with ❤️ by the innovaDigits Team</strong>
  <br/>
  <em>Building the future of performance management, one commit at a time.</em>
</p>

<p align="center">
  <a href="#-inova-pms---performance-management-system">⬆️ Back to top</a>
</p>
