# Job Search Portal

A responsive **Job Search Portal** built with React.js as part of the **Lancrs Academy Frontend Practical Assessment**.

The application allows users to browse available job opportunities, search jobs by company or role, filter jobs by location and job type, view complete job details, and apply for jobs without duplicate applications.

---

## 📌 Project Overview

The Job Search Portal is a frontend-only React application designed to provide a simple and responsive job-search experience.

The application uses a local JavaScript dataset containing **30 job listings**. Job cards and search results are rendered dynamically from the dataset rather than being manually hard-coded.

### Key Features

* Browse all available jobs immediately
* Search jobs by:

  * Company name
  * Job role
* Case-insensitive search
* Filter jobs by:

  * Location
  * Job Type
* Search and filters work together
* Dynamic result count
* View complete job details in a modal
* Apply for jobs
* Prevent duplicate applications
* Clearly display `Applied` state
* Reset search and filters
* Meaningful empty state when no jobs match
* Responsive design for desktop, tablet, and mobile
* Reusable React components
* Local dataset separated from UI components

---

## 🛠️ Technology Stack

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **HTML5**
* **CSS3**

---

## 📂 Project Structure

```text
job-search-portal/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchFilters.jsx
│   │   ├── JobCard.jsx
│   │   ├── JobDetails.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── data/
│   │   └── jobs.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🧩 Component Architecture

The application is divided into reusable React components.

### `App.jsx`

The main application component.

It manages:

* Search state
* Location filter state
* Job type filter state
* Selected job state
* Applied jobs state
* Job filtering logic
* Reset functionality
* Opening and closing the job details modal

---

### `Header.jsx`

Provides the main navigation/header of the application.

Includes:

* Job Search Portal branding
* Jobs navigation
* About navigation

---

### `SearchFilters.jsx`

Handles the job search and filtering interface.

Users can:

* Search by company or role
* Select a location
* Select a job type
* Reset all filters

---

### `JobCard.jsx`

Displays individual job information dynamically.

Each card contains:

* Company
* Job role
* Location
* Salary
* Job type
* Work mode
* Experience
* Skills
* View Details button
* Apply button

---

### `JobDetails.jsx`

Displays complete information about the selected job in a responsive modal.

Includes:

* Company
* Role
* Location
* Salary
* Job type
* Work mode
* Experience
* Skills
* Job description
* Apply button

---

### `EmptyState.jsx`

Displayed when no jobs match the current search/filter combination.

It provides:

* Clear feedback to the user
* Reset Filters button

---

## 📊 Job Dataset

The job listings are stored separately in:

```text
src/data/jobs.js
```

The application contains **30 job records** supplied as part of the assessment.

Each job contains information such as:

```javascript
{
  id: 1,
  company: "Nexora Labs",
  role: "Frontend Developer",
  location: "Kolkata",
  type: "Full Time",
  mode: "Onsite",
  salary: "₹3-5 LPA",
  experience: "0-1 Years",
  skills: ["React", "JavaScript", "CSS"],
  description: "Build responsive user interfaces, reusable React components, and integrate frontend features for Nexora Labs."
}
```

The job cards are generated dynamically using JavaScript array mapping.

No job cards are manually hard-coded in the UI.

---

## 🔎 Search Functionality

Users can search for jobs using:

* Company name
* Job role

The search is **case-insensitive**.

For example:

```text
react
```

can match roles such as:

```text
React Developer
React Intern
Junior Frontend Engineer
```

The search is performed dynamically against the supplied job dataset.

---

## 🎯 Filtering

The application supports filtering by:

### Location

Examples:

* Kolkata
* Bengaluru
* Hyderabad
* Pune
* Chennai
* Noida
* Mumbai
* Gurugram
* Remote

### Job Type

Examples:

* Full Time
* Internship

The location and job type filters can be combined with the search field.

For example:

```text
Search: React
Location: Kolkata
Job Type: Full Time
```

The application returns only jobs satisfying **all selected conditions**.

---

## 🔢 Result Count

The application dynamically displays the number of jobs matching the current search and filters.

Examples:

```text
30 jobs found
```

or:

```text
1 job found
```

The result count updates automatically whenever the search or filters change.

---

## 📄 Job Details

Users can select **View Details** on any job card.

A responsive modal displays the complete job information, including:

* Company
* Role
* Location
* Salary
* Job type
* Work mode
* Experience
* Skills
* Description

The modal can be closed using the close button or by clicking outside the modal.

---

## 📨 Apply Functionality

Users can apply for a job using the **Apply** button.

After applying:

```text
Apply
```

changes to:

```text
Applied ✓
```

The application state is maintained using React state.

Duplicate applications are prevented by checking whether the job has already been applied for.

The same applied state is also reflected inside the job details modal.

---

## 🚫 Empty State

When no jobs match the current search and filter combination, the application displays a meaningful empty state.

Example:

```text
No jobs found

We couldn't find any jobs matching your current
search and filter criteria. Try changing your
search or filters.

[Reset Filters]
```

This provides a clear way for users to recover from an empty result.

---

## 🔄 Reset Functionality

The **Reset Filters** button clears:

* Search text
* Location filter
* Job type filter

The complete job list is then displayed again.

---

## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

The job cards use a responsive grid layout:

```text
Mobile   → 1 column
Tablet   → 2 columns
Desktop  → 3 columns
```

The interface is designed to avoid horizontal overflow and maintain usability on smaller screens.

---

## ⚛️ React Implementation

The project follows React component-based architecture.

Reusable components are used instead of placing the entire interface inside a single component.

React state is used for:

* Search
* Filters
* Selected job
* Applied jobs

The job list is rendered dynamically using:

```javascript
jobs.map(...)
```

Filtering is performed using:

```javascript
jobs.filter(...)
```

This keeps the UI data-driven and reusable.

---

## 🔗 Application Data Flow

The basic application flow is:

```text
jobs.js
   ↓
App.jsx
   ↓
Search & Filter Logic
   ↓
Filtered Jobs
   ↓
JobCard Components
   ↓
View Details / Apply
```

For job details:

```text
JobCard
   ↓
Selected Job
   ↓
JobDetails Modal
```

For applications:

```text
Apply Button
   ↓
React State
   ↓
Applied ✓
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project

```bash
cd job-search-portal
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite, usually:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🧪 Testing Checklist

The following functionality was tested:

* [x] Application starts successfully
* [x] Jobs appear immediately
* [x] All 30 job records are displayed
* [x] Search by company works
* [x] Search by role works
* [x] Search is case-insensitive
* [x] Location filtering works
* [x] Job Type filtering works
* [x] Search and filters work together
* [x] Result count updates dynamically
* [x] View Details works
* [x] Job details display correctly
* [x] Apply button works
* [x] Applied state is displayed
* [x] Duplicate applications are prevented
* [x] Empty state works
* [x] Reset Filters works
* [x] Responsive layout works
* [x] Production build completes successfully

---

## 📋 Assessment Requirement Mapping

| Assessment Requirement        | Implementation                       |
| ----------------------------- | ------------------------------------ |
| React.js                      | React + Vite                         |
| Responsive job portal         | Tailwind CSS responsive layout       |
| Show jobs immediately         | Local `jobs.js` dataset              |
| Search by company             | Implemented                          |
| Search by role                | Implemented                          |
| Case-insensitive search       | Implemented                          |
| Location filter               | Implemented                          |
| Additional filter             | Job Type filter                      |
| Combined search + filters     | Implemented using intersection logic |
| Dynamic job cards             | `jobs.map()`                         |
| Supplied dataset              | `src/data/jobs.js`                   |
| Company                       | Displayed                            |
| Role                          | Displayed                            |
| Location                      | Displayed                            |
| Salary                        | Displayed                            |
| Job Type                      | Displayed                            |
| Work Mode                     | Displayed                            |
| Experience                    | Displayed                            |
| Skills                        | Displayed                            |
| View complete details         | Details modal                        |
| Apply functionality           | Implemented                          |
| Applied state                 | Implemented                          |
| Prevent duplicate application | Implemented                          |
| Result count                  | Implemented                          |
| Empty state                   | Implemented                          |
| Reset functionality           | Implemented                          |
| Reusable components           | Implemented                          |
| Responsive UI                 | Implemented                          |
| No backend required           | Local frontend implementation        |

---

## 💡 Design Approach

The interface uses a clean professional job-portal design with:

* Dark hero section
* White content cards
* Blue primary actions
* Clear typography
* Rounded cards
* Responsive grid layout
* Simple filtering controls
* Accessible form labels
* Clear application states

The goal was to keep the interface simple, professional, and easy to evaluate while focusing on the required functionality.

---

## 🔐 Data & Backend

This is a **frontend-only assessment project**.

No backend or external API is required.

Job data is stored locally in:

```text
src/data/jobs.js
```

Application state is maintained using React state during the current session.

No authentication, database, or server-side application process is required for this assessment.

---

## 🌐 Deployment

Live Demo:

```text
<YOUR_DEPLOYED_URL>
```

GitHub Repository:

```text
<YOUR_GITHUB_REPOSITORY_URL>
```

Replace the placeholders above with your actual deployment and repository URLs before submission.

---

## 👤 Author

**Parna Das**

Frontend / MERN Stack Developer

### Technologies & Skills

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* REST APIs
* Node.js
* Express.js
* MongoDB
* Git & GitHub

---

## 📌 Assessment

This project was developed as part of the:

**Lancrs Academy – Frontend Practical Assessment**

### Project

**Job Search Portal**

### Technology

**React.js**

### Focus Areas

* React component architecture
* State management
* Search and filtering
* Dynamic rendering
* User interactions
* Responsive UI
* Clean and maintainable frontend code

---

## 📄 License

This project was created for educational and assessment purposes.
