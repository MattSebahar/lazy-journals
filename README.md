# lazy-journals
An AI backed modern journaling system to support productive daily updates.

This project is an in progress full-stack web application designed to be a centralized hub for managing and accelerating personal and professional growth. It combines journal-keeping with AI-powered suggestions to help a developer learn new skills, manage projects, find a job, and maintain a balanced personal life.

## Goals and Vision
This object has two main components, a journal, and an AI. It is meant to make journalling easy and worthwhile. There will be two journals, professional and a personal, each powered by AI to help find success where it matters most.

### The Technical Journal (TJ)
Focused on developing skills and seeking out new opportunites, this journal provides multiple routes for learning new things. Some capabilities are:
- Logging skills and technologies
- Tracking projects and suggesting improvements
- Managing the job market and applications

### TJ AI
The AI for this journal is focused on revealing your strengths and weaknesses. It shows where you are excelling to help you work through interviews, as well as weaknesses to improve on to better prepare you. It focuses on:
- Daily learning tasks (leetcode, youtube, etc.)
- Complimentary frameworks to the basic skills
- Current industry trends and news

  ### The Personal Journal (PJ)
  This is focused on ensureing devlopers get out into the real world once in a while. It supports keeping track of your daily activities to enable more to be fit in. It's main features are:
  - Hobby and activity trackers
  - To-do listings and priorities
  - Planning and reflection
 
  ### PJ AI
  The AI in this section is focused on keeping you moving. It attempts to ensure you are still engaged outside of work, and suggest new alternatives. This provides:
- Upcoming event reminders
- Novel activites, events and articles
- Wellbeing upkeep to keep motivation

## Stack & Architechture
This framework is focused on the AI aspect, with modern UI componenets for a responsive and clean appearance.

### Frontend - React
The frontend will be built entirely on react as it is incredibly popular and easy to improve. This framework offers others the chance to customize, and provides integration with many AI frameworks and efficient backends.

### Backend - Python w/ FastAPI
The choice of python is due to its AI development and ease to build a connection between data and react. It offers the services required to connect componenets as well as process the data as required.
- Restful API: A restul API will be built in order to handle the data communcation between the databases and services.
- Accounts: Personalized accounts can be made to customize their expereince on the site and must be utilized for processing
- CRUD: for journals, projects, job apps, etc.
- AI/ML Hosting: Provides the AI/ML models to power the website

### Database - PostgreSQL w/ SQLModel
SQL is such a powerful tool and combined with an ORM makes managing a large set of data with many catogories incredibly fast. Using SQLModel means python can easily interact with the data as needed and push to the user as needed.
- All users:  Each datapoint will contain their own set of unique entries
  --tech entries: skill, projects, suggestions
  --personal entries: to-dos, hobbies, news
  --job applications and projects

### APIs 
- NewsAPI.org: Both external data searches and APIs will provide news to models to provide recent updates for users
- Google/Youtube Data APIv3: Providing youtube videos for skill development or new hobbies will be accessed through google
- Google JSON search API - Searching based upon key words from journals will provide novel ideas realted to their writing.


## Learning Objectives / Help
This section is going to be deleted soon, but provides a routing for myself and those that follow notes/ideas for how to develope this site and the skills required.

### Roadmap
1. Bare Backend - Set up a simple fastAPI server that can handle some commands in python as this is the center of it all. 
2. Database - Set up a database to start storing the data and connect it with python so there is something to show.
3. Frontend - With data and processing, build something to provide visualize and access as an user
4. Real Processing - Start hooking up all of the componenents and providing valueable processing
5. AI/ML - With a dumb website, develope a seporate AI backbone that will power these tools
6. Integration - With a tested website and AI, building atop the barebones API to connect all peices
7. External APIs - Include more and more information and services for the website and models to work with

### Resources
Hopefully this turns into a real resources section that can help more the website rather than myself. Currently is a way to learn how to build everyhting this defines. 

Had AI do some sourcing, and took personal notes on top of that:
This is an excellent and well-defined project. Building a "profiled service" is the perfect way to combine these frameworks into a single, portfolio-worthy application.

Here is a temporary README.md file based on your vision. You can copy, paste, and commit this to your new GitHub repository to use as your project guide.

Personal Growth & Tech Career Hub
This project is a full-stack web application designed to be a centralized hub for managing and accelerating personal and professional growth. It combines journal-keeping with AI-powered suggestions to help a developer learn new skills, manage projects, find a job, and maintain a balanced personal life.

1. 🎯 Project Goals & Vision
The application is a profiled service, divided into two core components:

A. The Technical Journal
A growth-focused log for a tech career. Users can:

Log skills and technologies they are currently learning.

Track projects they are building, linking them to specific skills.

Manage job applications, saving postings, dates, and contacts.

🤖 The AI Assistant for this section will:

Analyze logged skills and suggest complementary frameworks or technologies (e.g., "You are learning React; you might want to explore Next.js for server-side rendering.").

Based on project descriptions, suggest relevant YouTube tutorials or small GitHub projects to support development.

Scan and summarize current tech industry trends and news to keep the user informed for interviews.

B. The Personal Journal
A lifestyle-focused log for personal well-being. Users can:

Log daily activities and personal hobbies.

Create to-do lists for daily tasks.

Mention upcoming events or plans.

🤖 The AI Assistant for this section will:

Parse entries and identify upcoming events to create reminders.

Use external search to suggest local events, new hobbies, or articles that complement the user's logged lifestyle (e.g., "You mentioned hiking; here are some trails near you.").

2. 💻 Application Stack & Architecture
This project will be built using a modern, AI-first stack.

Frontend (The UI): React

Will be used to build the entire user interface, including the dashboard, journal forms, to-do lists, and data visualizations.

Backend (The "Connector" & "Brain"): Python (FastAPI)

Will serve a complete REST API to handle all data.

Manages user accounts (registration, login, authentication).

Handles all CRUD (Create, Read, Update, Delete) operations for journal entries, projects, and job applications.

Hosts and serves the AI/ML models via its own API endpoints (e.g., /api/suggest-skill).

Database (The Memory): PostgreSQL

Will store all persistent data, including:

users (for authentication)

tech_entries (skills, projects, etc.)

personal_entries (hobbies, tasks, etc.)

job_applications

We will use SQLModel (built by the creator of FastAPI) to act as the ORM, making it easy to interact with the database using Python.

External APIs (The "World-Knowledge")

Tech News: NewsAPI.org or GNews will be used to fetch top headlines for "tech" keywords, which the backend will summarize.

Video Suggestions: Google/YouTube Data API v3 will be used to search for relevant tutorials based on keywords from the user's entries.

Lifestyle Suggestions: Google Custom Search JSON API will be used to find articles, events, or activities based on the user's personal journal.

3. 📚 Learning & Development Roadmap (How-To)
This section outlines the resources and workflow to build the project.

Recommended Workflow
Don't try to build it all at once. Follow these steps:

Backend First: Get a "Hello World" FastAPI server running.

Add Database: Connect FastAPI to your PostgreSQL database using SQLModel. Define your tables (User, TechEntry, etc.)

"Dumb" Frontend: Build the React app to simply fetch and display data (no ML). Create the forms and pages to prove the CRUD functionality works.

Add the "Brain": Train a simple model (or use a pre-trained one) in a separate Jupyter Notebook.

Integrate: Load your saved model into a new FastAPI endpoint and have React call it.

Add External APIs: Connect to the News/YouTube/Google APIs last to add the final layer of intelligence.

1. FastAPI (Your Backend API)
Primary Resource: [The Official FastAPI Documentation](https://fastapi.tiangolo.com/). This is the single best resource, work your way through the "Tutorial - User Guide."

Database (SQLModel): The creator of FastAPI also made [SQLModel](https://sqlmodel.tiangolo.com/), which combines SQLAlchemy and Pydantic. The official SQLModel tutorial will show you exactly how to connect to PostgreSQL.

Full Stack Template: After barebones, study the [Full Stack FastAPI Template](https://github.com/fastapi/full-stack-fastapi-template). A professional-grade project that sets up FastAPI, PostgreSQL, and React all at once.

Good Tutorial: ["Building Your First Full-Stack CRUD App with FastAPI and React.js"](https://dev.to/gilly7/building-your-first-full-stack-crud-app-with-fastapi-and-reactjs-3i1n) is a perfect guide for your first milestone.

2. React 
Primary Resource: The new [React.dev](https://react.dev/learn) Docs. The "Learn React" tutorial is the best, most modern way to learn. It covers Hooks (like useState and useEffect), which are essential for making API calls.

Connecting to an API: You'll need to learn how to make HTTP requests from React. You can use the built-in fetch function or a popular library like axios.

3. PostgreSQL 
Practical Tutorials: [Crunchy Data's Postgres Tutorials](https://www.crunchydata.com/developers/tutorials) offer practical, developer-focused guides.

Visual Tool: Download a free GUI tool like [pgAdmin](https://www.pgadmin.org/) or [DBeaver](https://dbeaver.io/). It makes visualizing your tables and data much easier.

4. AI / ML
For General ML : Start with [Scikit-learn's "Getting Started" Guide](https://scikit-learn.org/stable/getting_started.html). You'll learn the fundamental fit/predict pattern.

For NLP (like sentiment or keyword extraction): Use the [Hugging Face Transformers](https://huggingface.co/docs/transformers/index) library. Their documentation has a "Tasks" section that shows you how to load a pre-trained model for "Sentiment Analysis" or "Text Classification" in just a few lines of code.
