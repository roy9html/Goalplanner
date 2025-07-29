# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## Features
 Add new savings goals with a target amount and deadline

 Deposit toward individual goals

 Track progress via visual percentage bars

 Categorize goals

 Delete goals with confirmation

 Overview component summarizes total goals, savings, and completed goals

## Technologies Used

React 

JSON Server 

JavaScript 

HTML & CSS 

## Future Enhancements
Editable goal fields 

Sorting/filtering by deadline or category

Dark mode support

Mobile responsiveness
##Method	Endpoint	Description
GET	/goals	Fetch all saved goals
POST	/goals	Add a new goal
PATCH	/goals/:id	Update a goal’s savedAmount
DELETE  /goals/:id	Delete a goal by ID

## Purpose of Goal Planner

Personal Financial Organization
Users can break down their financial ambitions (like buying a laptop, saving for rent, etc.) into specific, trackable goals.

Progress Tracking
By visualizing how much money has already been saved versus the target, users can stay motivated and aware of their progress.

Accountability & Motivation
Seeing goals, deadlines, and deposits in one place encourages users to stay disciplined and stick to their financial plans.

Practice for Developers
On the development side, it gives you a practical project to:

Use React state and props

Perform real CRUD operations using fetch and json-server

Organize components logically in a frontend app

Learning SMART Goals
Even though not explicitly stated, the structure aligns with SMART goal planning:

Specific: Each goal has a name

Measurable: Progress is shown in percentages

Achievable: Users decide realistic amounts

Relevant: Goals are personally chosen

Time-bound: Deadlines are added

