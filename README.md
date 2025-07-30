# Smart Goal Planner

A comprehensive financial goal planning application built using React JS and JSON Server as a demonstration for students learning full-stack web development.

By **Your Name**

## Description

This is a full-stack financial goal planning application built using React JS for the frontend and JSON Server for the backend API. The app demonstrates modern web development concepts including React components, state management, REST API integration, and responsive design. Users can create financial goals, track their progress, make deposits, and manage their savings objectives with visual progress indicators and deadline tracking.

## Screenshot

![Smart Goal Planner Screenshot](./public/goal-planner-screenshot.png)

## Features

- Goal Management: Create, read, update, and delete financial goals
- Progress Tracking: Visual progress bars showing savings progress
- Deposit System: Add money to specific goals and track contributions
- Deadline Management: Set target dates and receive warnings for urgent goals
- Overview Dashboard: Comprehensive summary of all goals and savings
- Status Indicators: Visual alerts for urgent and overdue goals
- Category Organization: Organize goals by different categories
- Real-time Updates: Dynamic content updates without page refreshes
- Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
- Modern UI/UX: Clean and intuitive user interface

## How to Use

### Requirements

- A computer, tablet, or phone
- Access to the internet
- A modern web browser
- Node.js (version 18 or higher) for local development

### Local Development

#### Installation Process

1. Clone this repository using:

   ```bash
   git clone https://github.com/yourusername/smart-goal-planner.git
   ```

   or by downloading a ZIP file of the code.

2. Navigate to the project directory:

   ```bash
   cd smart-goal-planner
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the JSON Server (backend):

   ```bash
   npm run server
   ```

5. In a new terminal, start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` for the frontend
7. The JSON Server API will be running on `http://localhost:3001`

## Technologies Used

- Frontend:
  - React JS (v18.2.0)
  - JavaScript (ES6+)
  - CSS3
  - HTML5

- Backend:
  - JSON Server
  - Node.js

- Development Tools:
  - Vite (v5.0.0) for build tooling
  - ESLint for code linting
  - Git for version control

## API Endpoints

The JSON Server provides the following REST API endpoints:

- `GET /goals` - Retrieve all goals
- `GET /goals/:id` - Retrieve a specific goal
- `POST /goals` - Add a new goal
- `PATCH /goals/:id` - Update an existing goal (partial update)
- `DELETE /goals/:id` - Delete a goal

## Project Structure

```
smart-goal-planner/
├── public/
├── src/
│   ├── components/
│   │   ├── GoalCard.jsx
│   │   ├── GoalForm.jsx
│   │   └── Overview.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── db.json
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Features

### Add New Savings Goals
- Create goals with target amounts and deadlines
- Categorize goals for better organization
- Set realistic timelines for achievement

### Deposit Toward Individual Goals
- Add money to specific goals
- Track cumulative savings progress
- Update goal status automatically

### Track Progress via Visual Percentage Bars
- Visual representation of savings progress
- Color-coded status indicators
- Real-time progress updates

### Categorize Goals
- Organize goals by categories (Travel, Emergency, Electronics, etc.)
- Filter and sort by category
- Better goal management

### Delete Goals with Confirmation
- Remove unwanted goals safely
- Confirmation dialog prevents accidental deletion
- Clean goal management

### Overview Component
- Summary of total goals and savings
- Count of completed goals
- Urgent and overdue goal warnings
- Comprehensive dashboard view

## Purpose of Smart Goal Planner

### Personal Financial Organization
Users can break down their financial ambitions (like buying a laptop, saving for rent, etc.) into specific, trackable goals.

### Progress Tracking
By visualizing how much money has already been saved versus the target, users can stay motivated and aware of their progress.

### Accountability and Motivation
Seeing goals, deadlines, and deposits in one place encourages users to stay disciplined and stick to their financial plans.

### Practice for Developers
On the development side, it gives you a practical project to:
- Use React state and props
- Perform real CRUD operations using fetch and JSON Server
- Organize components logically in a frontend app

### Learning SMART Goals
The structure aligns with SMART goal planning:
- Specific: Each goal has a name
- Measurable: Progress is shown in percentages
- Achievable: Users decide realistic amounts
- Relevant: Goals are personally chosen
- Time-bound: Deadlines are added

## Future Enhancements

- Editable goal fields
- Sorting/filtering by deadline or category
- Dark mode support
- Mobile responsiveness improvements
- Data persistence with a real database
- User authentication and profiles
- Goal sharing and collaboration features
- Advanced analytics and reporting

## Support and Contact Details

If you have any questions, suggestions, or need assistance, please contact:

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

## License

MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
