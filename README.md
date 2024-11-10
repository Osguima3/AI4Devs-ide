# LTI - Applicant Tracking System (ATS)

## Project Overview
LTI is an Applicant Tracking System designed to optimize and transform the recruitment processes in small and medium-sized enterprises (SMEs). This system combines advanced automation tools, artificial intelligence, and real-time collaborative features to improve the efficiency of HR departments, accelerate selection processes, and enhance collaboration between recruiters and hiring managers.

## Key Features
- **AI for Initial Evaluation and Filtering**: Automatic scanning and analysis of resumes and LinkedIn profiles to filter candidates who meet essential requirements.
- **Real-Time Collaborative Chat**: Instant communication between recruiters and managers to discuss and evaluate candidates.
- **Performance Metrics**: Analytics dashboard for key metrics such as hiring times and process performance to continuously improve HR efficiency.
- **Data Integration**: Direct connection with LinkedIn for profile extraction and candidate contact, as well as integration with Odoo ERP for automating hiring administration and managing the entire candidate lifecycle.

## System Architecture
The system is composed of several modules:
- **Frontend**: User interfaces for recruiters, managers, and candidates.
- **Backend**: Business logic, data processing, and communication between components.
- **External Integrations**: LinkedIn API for profile data and Odoo ERP for hiring management.
- **Database**: Structured storage of candidate, user, interview, evaluation, and metric data.

## Installation
To install and run the project locally, follow these steps:
1. Clone the repository:
   ```
   git clone https://github.com/your-repo/lti-ats.git
   ```
2. Navigate to the project directory:
   ```
   cd lti-ats
   ```
3. Install dependencies for both frontend and backend:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Folder Structure
The project has the following general folder structure:

```
LTI/
├── backend/
│   ├── src/
│   │   ├── application/
│   │   ├── domain/
│   │   └── infrastructure/
│   │       └── config/
│   └── tests/
│       ├── integration/
│       └── unit/
├── docker-compose.yml
├── docs/
└── frontend/
    ├── public/
    └── src/
```

This structure follows Domain-Driven Design (DDD) principles and includes separate directories for application, domain, and infrastructure layers in the backend, as well as a clear separation of frontend and backend code.
