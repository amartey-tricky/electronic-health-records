# Electronic Health Records (EHR) System

## Overview

This Electronic Health Records (EHR) system is designed for a small clinic to manage patient information, medical records, diagnostics, lab results, and prescriptions. It integrates various roles including reception, doctors, nurses, lab technicians, pharmacists, administrators, and cashiers.

## Technology Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Zod for validation
- React Hook Form
- Drizzle ORM for database operations
- bcrypt for password hashing
- JSON Web Tokens (JWT) for authentication

## Main Features

- User authentication and role-based access control
- Admin-only signup and user management
- Patient management
- Medical records management
- Lab test requests and results
- Prescription management
- Inventory management
- Appointment scheduling
- Payment Processing
- Fee management for services and lab tests
- Symptom search across patients

## Role-Based Functionality

### Administrators
- Create and manage user accounts for all roles
- Generate reports
- Manage procurement requests
- Generate financial reports (daily, monthly, yearly)
- Manage hospital fees, drug prices, and lab test fees
- Manage medication inventory
- Manage all payments

### Reception
- Enroll new patients
- View and manage patient list
- Create new sessions for patient visits

### Doctors
- View patient sessions
- Access and update medical records
- Write notes for patients
- Upload files (PDF, JPG, PNG) to doctors' notes
- Record vital signs (weight, temperature, blood pressure, pulse) for all patients
- View nurses' notes
- Request lab tests
- Write prescriptions
- View lab results
- Search symptoms across patients

### Nurses
- View patient sessions
- Add nurses' notes to patient records
- Record vital signs (weight, temperature, blood pressure, pulse) for all patients
- View doctors' notes

### Lab Technicians
- View lab test requests
- Update lab test status (start test, complete test)
- Upload lab test results (PDF, JPG, PNG)

### Pharmacists
- View prescriptions
- Update prescription status (prepare, mark as ready, dispense)

### Cashiers
- View pending payments
- Confirm payments from patients
- See total amount owed for pending payments

## Detailed Functionality

### User Management and Authentication
- Admin-only signup page for creating the first administrator account
- Administrators can create and manage user accounts for all roles
- Users can log in and are redirected to their role-specific dashboard
- JSON Web Tokens (JWT) used for maintaining user sessions

### Patient Management
- Add new patients with personal and contact information
- View and update patient details
- Search and filter patient list

### Medical Records
- Create and update medical records for each patient visit (session)
- Include symptoms, diagnosis, treatment plans, and notes
- Separate sections for doctors' and nurses' notes
- Record vital signs (weight, temperature, blood pressure, pulse) for all patients
- Upload and store files (PDF, JPG, PNG) in doctors' notes

### Lab Tests
- Doctors can request lab tests for patients
- Lab technicians can view pending requests
- Update test status (pending, in-progress, completed)
- Upload and store test results (PDF, JPG, PNG)
- Doctors can view test results

### Prescriptions
- Doctors can write prescriptions for patients
- Pharmacists can view and manage prescriptions
- Update prescription status (pending, preparing, ready, dispensed)

### Appointment Scheduling
- Book appointments for patients with specific doctors
- View and manage appointment calendar
- Prevent double-booking of time slots

### Payment Processing
- Payments are automatically created for requested services
- Administrators manage and update payment statuses
- Patients must pay before receiving services, lab tests, or medications

### Fee Management
- Administrators can create and manage fees for hospital services
- Administrators can create and manage fees for lab tests
- Administrators can set and update drug prices

### Inventory Management
- Administrators manage medication inventory
- Set reorder levels for automatic procurement requests
- Manage stock levels and expiration dates

### Reporting
- Generate various reports (e.g., patient visits, lab tests, prescriptions)
- Analytics dashboard for administrators
- Financial reports for different time periods (daily, monthly, yearly)

### Symptom Search
- Doctors and administrators can search for symptoms across all patients
- View patient history related to specific symptoms

## Security Features
- Role-based access control
- Secure authentication system using JWT
- Password hashing using bcrypt
- Data encryption for sensitive information
- Audit logs for system actions

## Future Enhancements
- Integration with external systems (e.g., insurance, pharmacies)
- Mobile app for patients to access their records and appointments
- Telemedicine capabilities for remote consultations
- Advanced analytics and machine learning for predictive health insights
- Automated billing and invoicing system
- Integration with accounting software

## Getting Started

### Prerequisites

To run the project, you will need the following:

- Bun

### Installation

```Bash
bun install
```

### Running the Application

```Bash
bun run dev
```

This will start the application in development mode, and you can access it at http://localhost:3000/

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
