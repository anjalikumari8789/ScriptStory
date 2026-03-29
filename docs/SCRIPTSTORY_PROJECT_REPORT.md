# PROJECT REPORT

## On

# ScriptStory
## A MERN-Based Technical Blogging and Content Management Platform

### Submitted in partial fulfillment of the requirements for the award of the degree
### of
### Bachelor of Technology / Bachelor of Engineering
### in
### Computer Science and Engineering


Submitted By:

- Name: __________________________
- Enrollment No.: __________________________
- Roll No.: __________________________
- Class/Section: __________________________

Under the guidance of:

- Guide Name: Mr.XYZ
- Designation: __________________________
- Department: __________________________

Department of Computer Science and Engineering  
College/Institute Name: __________________________  
University: __________________________  
Session: 2025-26

---

# ACKNOWLEDGEMENT

I am using this opportunity to express my gratitude to everyone who supported me throughout the course of this project. I am thankful for their aspiring guidance and friendly advice during the project work. I am sincerely grateful to them for sharing their truthful and illuminating views on a number of issues related to the project. There are many who helped me with this project and I want to thank them all from the core of my heart.

I express my warm thanks to my respected head of the division Mr.XYZ, for allowing me to use the facilities available and also help me to coordinate my project.

Furthermore, I would also like to acknowledge with much appreciation the crucial role of faculty members on this occasion.

Last but not least, I would like to thank friends who helped me assemble the parts and gave suggestions about the project.

---

# CERTIFICATE

This is to certify that the project report entitled **"ScriptStory - A MERN-Based Technical Blogging and Content Management Platform"** is a bonafide work carried out by:

- Name: __________________________
- Enrollment No.: __________________________
- Roll No.: __________________________

in partial fulfillment for the award of degree in Computer Science and Engineering during the academic session 2025-26.

This work has been completed under the guidance and supervision of **Mr.XYZ** and has not been submitted elsewhere for any other degree or diploma to the best of our knowledge.

Guide Signature: __________________________  
Guide Name: Mr.XYZ  
Head of Department: __________________________  
Department Seal: __________________________  
Date: __________________________

---

# DECLARATION

I hereby declare that this project report entitled **"ScriptStory - A MERN-Based Technical Blogging and Content Management Platform"** is an original work carried out by me under the guidance of **Mr.XYZ**.

I further declare that this work has not been submitted in part or full to any other university/institute for the award of any degree or diploma.

Student Signature: __________________________  
Name: __________________________  
Enrollment No.: __________________________  
Date: __________________________

---

# ABSTRACT

The rapid expansion of web content has created a need for platforms that support structured publishing, editorial controls, audience interaction, and scalable operations. Traditional static websites do not provide sufficient support for role-based content moderation, dynamic filtering, and community participation. To address this need, the present project implements **ScriptStory**, a full-stack blogging and content management platform using the MERN stack.

ScriptStory enables registration and secure sign-in for users, role-based privileges for administrators, rich-text post creation and maintenance, public content discovery, and comment interaction with like/edit/delete operations. The system follows a modular architecture in which a React + Vite frontend consumes a RESTful Express API backed by MongoDB. Authentication is implemented with JWT tokens stored in HttpOnly cookies. Media upload for profile and post images is supported via Firebase Storage integration in the frontend workflow.

The project includes an admin dashboard for monitoring users, posts, and comments with monthly trend indicators. Search and filtering support includes category, keyword, ordering, and paginated loading. The backend offers controlled access for critical operations such as post management and administrative analytics. Local development and deployment are supported through environment-based configuration and Vercel-compatible setup.

The implemented platform demonstrates practical application of modern web engineering concepts, including component-driven UI, API-centric architecture, state persistence, role-based authorization, and deployment-readiness. ScriptStory can serve as a baseline for production-grade publishing solutions with future extensibility toward editorial workflows, richer analytics, and automated quality assurance.

---

# TABLE OF CONTENTS

1. Introduction  
2. Problem Statement  
3. Objectives  
4. Feasibility Study  
5. Scope of the Project  
6. Existing System  
7. Proposed System  
8. Requirement Analysis  
9. Technology Stack  
10. System Architecture  
11. Module-Wise Explanation  
12. Database Design  
13. API / Endpoints Overview  
14. UI/UX Flow and Role-Based Workflows  
15. Security and Validation  
16. Testing Strategy and Representative Test Cases  
17. Deployment and Local Setup Summary  
18. Project Timeline / Development Phases  
19. Advantages, Limitations, and Future Enhancements  
20. Conclusion  
21. Bibliography  
22. Appendix

---

# CHAPTER 1: INTRODUCTION

The software industry has shifted from monolithic, static websites toward modular and interactive platforms where content must be created, curated, searched, and discussed in real time. Blogging platforms are no longer limited to simple text publishing; they now require user identity management, editorial governance, media handling, and audience engagement features. ScriptStory has been developed in this context as a practical full-stack system demonstrating the design and implementation of a role-aware digital publishing platform.

ScriptStory is built using MongoDB, Express.js, React, and Node.js, with Vite as the frontend build tool. The architecture separates concerns between a RESTful backend API and a component-driven frontend interface. This separation enables maintainability, scalability, and straightforward deployment to cloud environments. The system supports both regular users and administrators with clearly defined privileges.

The project focuses on realistic functionality expected in modern publishing systems: secure authentication, role-based access control, rich content authoring, post discovery, comment threads, and dashboard analytics. Beyond feature implementation, the project also demonstrates engineering decisions such as HTTP cookie-based JWT session handling, route-level authorization, paginated retrieval patterns, and environment-specific configuration.

From an academic perspective, ScriptStory represents an end-to-end software engineering exercise involving requirement analysis, schema design, API implementation, frontend workflow design, integration testing by scenarios, and deployment-oriented configuration. It provides a suitable case study for applied web application development in a final-year project context.

---

# CHAPTER 2: PROBLEM STATEMENT

Many small teams, technical communities, and student initiatives require an online platform where curated knowledge can be published and discussed. Existing lightweight solutions often fail to provide integrated role management and moderation controls. On the other hand, large enterprise CMS platforms may be too complex or costly for educational and small-scale deployments.

The primary problem addressed by this project is the lack of a balanced blogging system that is both developer-friendly and functionally complete for role-based operations. Without proper role control, content quality and integrity can degrade due to unauthorized modifications. Without structured APIs and stateful UI interactions, user experience becomes inconsistent and difficult to maintain.

Manual content management approaches also lead to inefficiencies in publishing lifecycle management, comment moderation, and user data tracking. There is therefore a need for a centralized web application that supports controlled content operations and smooth public consumption.

ScriptStory solves this problem by implementing a robust MERN-based platform in which administrators can manage posts and monitor ecosystem data, while end users can browse posts and participate via comments in a controlled and authenticated manner.

---

# CHAPTER 3: OBJECTIVES

The major objectives of this project are as follows:

1. To design and implement a full-stack blog platform with clear separation between frontend and backend responsibilities.
2. To provide secure user authentication and cookie-based session handling.
3. To enforce role-based authorization such that only administrators can create, update, and delete blog posts.
4. To enable efficient public content discovery using search term filtering, category filters, ordering, and pagination.
5. To implement community interaction through comments with support for create, like/unlike, edit, and delete operations.
6. To provide an administrator dashboard showing key metrics for users, posts, and comments including recent monthly counts.
7. To support profile management with image upload integration and account lifecycle controls (update, signout, delete).
8. To ensure practical deployment compatibility and reproducible local setup.
9. To produce a maintainable codebase suitable for future enhancement in academic and production contexts.

---

# CHAPTER 4: FEASIBILITY STUDY

## 4.1 Technical Feasibility

The project is technically feasible due to the maturity and compatibility of the selected stack. React and Vite provide fast UI development with modern component architecture. Express.js and Node.js support lightweight REST API creation with middleware composition. MongoDB offers schema flexibility suitable for iterative development. Firebase Storage integration addresses media upload requirements without custom file-server complexity. All chosen technologies are widely documented and supported across development environments.

The implementation confirms feasibility through successful integration of major modules: authentication, post lifecycle, comment lifecycle, dashboard analytics, and role control.

## 4.2 Operational Feasibility

The system is operationally feasible for both administrators and regular users. The interface follows common interaction patterns: form-based sign-up/sign-in, dashboard tabs, list/detail views, and confirmation modals for destructive actions. This minimizes training effort and supports usability for non-expert users.

The platform also provides clear role behavior. Regular users can access public content and interact with comments, while administrators receive additional controls for governance and analytics.

## 4.3 Economic Feasibility

The project primarily relies on open-source technologies and free-tier friendly services, making development cost low. Infrastructure expenses are minimized by using cloud deployment models and managed services where applicable. As a college-level project, the cost-benefit ratio is favorable because the system demonstrates substantial engineering depth with limited financial overhead.

## 4.4 Schedule Feasibility

The scope is feasible within an academic semester by breaking work into modular phases: planning, backend development, frontend integration, dashboard implementation, testing, and documentation. The project structure reflects this phase-based progression.

---

# CHAPTER 5: SCOPE OF THE PROJECT

ScriptStory is designed as a role-based technical blogging application for web deployment. The project scope includes user onboarding, secure sign-in sessions, content publishing by admins, public browsing/search, and community comment interaction.

The implemented scope specifically covers:

1. Authentication and account lifecycle operations.
2. Administrator-controlled post creation, editing, and deletion.
3. Public post listing, post detail pages, category routing, and search interfaces.
4. Comment creation and moderation actions with per-user authorization checks.
5. Dashboard metrics and administrative listing pages for users, posts, and comments.
6. Cloud-ready deployment configuration for backend and frontend components.

The scope excludes advanced editorial workflows such as draft-review pipelines, multi-tenant organization support, SEO analytics, and automated test pipelines. These remain part of future enhancement potential.

---

# CHAPTER 6: EXISTING SYSTEM

In many informal blogging workflows, content is managed either by static websites or unstructured social platforms. Static approaches provide limited interactivity and require manual deployment for updates. Social media-driven publishing provides rapid posting but lacks full data ownership, role granularity, and customizable moderation logic.

Existing lightweight educational projects often include only CRUD operations without robust role checks, dashboard analytics, or integrated comment interaction. Some systems also avoid secure cookie-based session handling and expose authentication tokens in less secure patterns.

These limitations motivated the development of ScriptStory as a structured solution with dedicated backend authorization logic, persistent frontend state, modular UI, and practical deployment readiness.

---

# CHAPTER 7: PROPOSED SYSTEM

The proposed system is a full-stack application where the frontend acts as a client consuming REST APIs exposed by the backend. Users interact with a React interface, and all data operations are mediated by Express endpoints backed by MongoDB collections.

The system introduces two operational roles:

1. **Regular User**: Sign up/sign in, browse posts, search/filter posts, view post details, create comments, like/unlike comments, edit own comments, delete own comments, update own profile, and sign out.
2. **Administrator**: All user capabilities plus create/update/delete posts, view users list, manage user records, view/manage comments globally, and access dashboard analytics.

A middleware-based authorization model protects sensitive operations. JWT payload includes user id and admin flag, and route handlers enforce role constraints. This design ensures operational integrity while keeping API contracts straightforward.

---

# CHAPTER 8: REQUIREMENT ANALYSIS

## 8.1 Functional Requirements

1. User must be able to register with username, email, and password.
2. User must be able to sign in and receive authenticated session via cookie.
3. User must be able to sign out and clear session cookie.
4. User must be able to update profile fields and profile image.
5. User/account deletion must be supported with authorization checks.
6. Admin must be able to create blog posts with title, content, category, and image.
7. Admin must be able to update and delete owned posts.
8. All users must be able to view posts and retrieve post details.
9. Post retrieval must support filtering, searching, sorting, and pagination.
10. Authenticated users must be able to create comments.
11. Authenticated users must be able to like/unlike comments.
12. Comment owners and admins must be able to edit/delete comments.
13. Admin must be able to retrieve paginated user, post, and comment metrics.
14. Role-based dashboard views must be presented on frontend.

## 8.2 Non-Functional Requirements

1. **Usability**: UI should be simple, responsive, and role-aware.
2. **Performance**: Paginated API responses should limit payload size.
3. **Security**: Session token should be HttpOnly cookie; protected endpoints require token verification.
4. **Maintainability**: Modular folder structure for controllers, routes, models, components, and pages.
5. **Scalability**: Service-oriented API design should support additional modules.
6. **Portability**: Local setup and cloud deployment should be reproducible across environments.

---

# CHAPTER 9: TECHNOLOGY STACK

## 9.1 Backend

- Node.js (runtime)
- Express.js (web framework)
- MongoDB + Mongoose (data storage and object modeling)
- JWT (authentication token generation/verification)
- bcryptjs (password hashing)
- cookie-parser (cookie extraction)
- cors (cross-origin communication)
- dotenv (environment configuration)

## 9.2 Frontend

- React 18 (component-based UI)
- Vite (build/dev server)
- React Router DOM (routing)
- Redux Toolkit + redux-persist (state management and persistence)
- Flowbite React + Tailwind CSS (UI components and styling)
- React Quill (rich text editor)
- Firebase Storage SDK (media upload)
- react-circular-progressbar (upload progress visualization)
- moment (relative timestamps in comments)

## 9.3 Deployment and Tooling

- Vercel configuration for backend and frontend
- Nodemon for backend development reload
- Custom script to run API and client concurrently

---

# CHAPTER 10: SYSTEM ARCHITECTURE

## 10.1 Architectural Pattern

ScriptStory follows a **client-server architecture**:

1. React frontend issues HTTP requests.
2. Express backend validates requests, applies auth middleware, and executes controller logic.
3. Mongoose models read/write MongoDB documents.
4. Response payloads are returned as JSON.

## 10.2 Request Lifecycle

1. User action on frontend triggers API call.
2. CORS policy and cookies are applied.
3. Protected routes invoke token verification middleware.
4. Controller executes business logic and database operations.
5. API responds with entity data or standardized error object.
6. Frontend updates UI and persisted Redux state.

## 10.3 Key Middleware and Runtime Controls

- `connectMiddleware` establishes database connection before route handling.
- `verifyToken` validates JWT from `access_token` cookie.
- Centralized error middleware formats failed responses.
- Development runtime supports automatic port fallback when configured port is in use.

---

# CHAPTER 11: MODULE-WISE EXPLANATION

## 11.1 Authentication Module

- **Sign Up**: Accepts username, email, password; hashes password with bcrypt; stores user in MongoDB.
- **Sign In**: Validates credentials, signs JWT with `id` and `isAdmin`, stores token in HttpOnly cookie, returns user profile payload.
- **Sign Out**: Clears `access_token` cookie.

This module forms the foundation for role-based controls across all sensitive features.

## 11.2 User Management Module

- Profile updates with field-level checks (password length, username rules).
- Account deletion by owner or admin.
- Admin-only user listing with pagination and monthly onboarding metric.
- Public single-user retrieval for comment display metadata.

## 11.3 Post Management Module

- Admin-only create endpoint with slug generation.
- Filterable/paginated retrieval endpoint supporting category, slug, post id, user id, search term, and ordering.
- Admin-owned post update and delete operations.
- Frontend rich-text editor integration for post body.

## 11.4 Comment Management Module

- Authenticated comment creation with ownership check.
- Post-specific comment retrieval sorted by recent first.
- Like/unlike toggle with like counter.
- Owner-or-admin comment edit and delete operations.
- Admin endpoint for full comment listing with metrics.

## 11.5 Dashboard and Analytics Module

Admin dashboard aggregates:

- Total users, posts, comments.
- Last month users/posts/comments counts.
- Recent users, recent posts, recent comments preview tables.

This module helps monitor platform activity at a glance.

## 11.6 Search and Discovery Module

- Search page supports term, category, and sort controls.
- Query-string driven navigation enables shareable filtered URLs.
- Incremental loading through `startIndex` pagination.

## 11.7 UI State and Theme Module

- Redux state for user auth status and operation flags.
- Redux persistence for retaining session/theme across refresh.
- Light/dark theme toggle with provider wrapper.

## 11.8 Media Upload Module

- Profile and post images uploaded to Firebase Storage.
- Upload progress shown with circular progress indicator.
- Uploaded URL stored in corresponding MongoDB documents.

---

# CHAPTER 12: DATABASE DESIGN

## 12.1 Database Type

ScriptStory uses MongoDB (document database). Mongoose schemas define collection structures and constraints.

## 12.2 Entity: User

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique identifier (MongoDB generated) |
| `username` | String (required, unique) | Login/display identifier |
| `email` | String (required, unique) | Primary authentication email |
| `password` | String (required) | bcrypt-hashed password |
| `profilePicture` | String | URL of user avatar |
| `isAdmin` | Boolean (default false) | Role flag for privileged operations |
| `createdAt` / `updatedAt` | Date | Automatic audit timestamps |

## 12.3 Entity: Post

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique identifier |
| `userId` | String (required) | Author reference (user id as string) |
| `title` | String (required, unique) | Post title |
| `content` | String (required) | Rich text post content (HTML) |
| `image` | String | Post cover image URL |
| `category` | String | Classification label (`javascript`, `reactjs`, `nextjs`, etc.) |
| `slug` | String (required, unique) | URL-safe identifier |
| `createdAt` / `updatedAt` | Date | Automatic timestamps |

## 12.4 Entity: Comment

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique identifier |
| `content` | String (required) | Comment text body |
| `postId` | String (required) | Associated post id |
| `userId` | String (required) | Comment author id |
| `likes` | Array | List of user ids who liked comment |
| `numberOfLikes` | Number (default 0) | Cached like count |
| `createdAt` / `updatedAt` | Date | Automatic timestamps |

## 12.5 Relationship Notes

The schema uses denormalized references as string ids rather than Mongoose `ObjectId` refs with population. This simplifies query flexibility while placing relationship interpretation in controller logic.

---

# CHAPTER 13: API / ENDPOINTS OVERVIEW

Base URL pattern (local): `http://localhost:<port>/api`

## 13.1 Authentication Endpoints

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/auth/signup` | Public | Register new user |
| POST | `/auth/signin` | Public | Authenticate user and set cookie |

## 13.2 User Endpoints

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/user/test` | Public | API health check route |
| PUT | `/user/update/:userId` | Authenticated owner | Update user profile |
| DELETE | `/user/delete/:userId` | Owner/Admin | Delete account |
| POST | `/user/signout` | Public/session-aware | Clear auth cookie |
| GET | `/user/getusers` | Admin | Paginated users + metrics |
| GET | `/user/:userId` | Public | Fetch single user profile |

## 13.3 Post Endpoints

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/post/create` | Admin | Create post |
| GET | `/post/getposts` | Public | List/filter/search posts |
| DELETE | `/post/deletepost/:postId/:userId` | Admin owner | Delete post |
| PUT | `/post/updatepost/:postId/:userId` | Admin owner | Update post |

Supported query params for `/post/getposts`: `userId`, `category`, `slug`, `postId`, `searchTerm`, `startIndex`, `limit`, `order`.

## 13.4 Comment Endpoints

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/comment/create` | Authenticated | Create comment |
| GET | `/comment/getPostComments/:postId` | Public | Fetch comments for a post |
| PUT | `/comment/likeComment/:commentId` | Authenticated | Toggle like/unlike |
| PUT | `/comment/editComment/:commentId` | Owner/Admin | Edit comment |
| DELETE | `/comment/deleteComment/:commentId` | Owner/Admin | Delete comment |
| GET | `/comment/getcomments` | Admin | Paginated all comments + metrics |

## 13.5 Utility and Deployment Debug Endpoints

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/test` | Public | Service liveness check |
| GET | `/debug` | Public | Runtime env diagnostics |
| GET | `/debug-db` | Public | DB connectivity diagnostics |

---

# CHAPTER 14: UI/UX FLOW AND ROLE-BASED WORKFLOWS

## 14.1 Primary Route Map

- `/` Home page with introductory content and recent posts.
- `/about` Project overview page.
- `/search` Filtered post discovery interface.
- `/post/:postSlug` Post detail with comments.
- `/sign-in` / `/sign-up` Authentication pages.
- `/dashboard` Protected route for user dashboard tabs.
- `/create-post` and `/update-post/:postId` Admin-only routes.

## 14.2 Regular User Journey

1. Register account from sign-up page.
2. Sign in using email/password.
3. Browse home or search posts by category/keyword.
4. Open post detail and read content.
5. Add comment, like comments, edit/delete own comments.
6. Manage profile details and sign out.

## 14.3 Administrator Journey

1. Sign in with admin account.
2. Access dashboard with `dash`, `posts`, `users`, `comments`, `profile` tabs.
3. Publish new posts using rich editor and image upload.
4. Edit/delete owned posts.
5. View and moderate comments globally.
6. View user list and activity metrics.

## 14.4 UX Design Characteristics

- Responsive layout via Tailwind utility classes.
- Consistent UI controls using Flowbite components.
- Visual feedback for loading, modal confirmations, and operation outcomes.
- Query-string synchronized search form improving navigability and state recovery.
- Theme toggle support with persistent preference.

---

# CHAPTER 15: SECURITY AND VALIDATION

## 15.1 Authentication Security

1. Passwords are never stored in plaintext; bcrypt hashes are persisted.
2. JWT includes only minimal claims (`id`, `isAdmin`).
3. Token is stored in HttpOnly cookie to reduce direct script access.
4. Production mode enables `sameSite='none'` and `secure=true` for cross-site cookie support.

## 15.2 Authorization Controls

- `verifyToken` middleware protects sensitive endpoints.
- Route handlers validate ownership and role:
  - Post create/update/delete restricted to admin and matching user id.
  - User list and global comment list restricted to admin.
  - Comment edit/delete allowed for owner or admin.

## 15.3 Input Validation

- Backend checks required fields for signup/signin and post creation.
- Backend validates username/password constraints on profile update.
- Frontend validates comment length and form completeness in multiple flows.

## 15.4 Error Handling

- Standardized error payload returned by centralized Express error handler.
- Frontend displays API messages through alerts and fallback states.

## 15.5 Security Notes

- CORS is configured with explicit development and production origins.
- Credentialed requests are enabled to support cookie-based auth.
- Current implementation can be further strengthened with centralized schema validation and stricter sanitization for rich-text input.

---

# CHAPTER 16: TESTING STRATEGY AND REPRESENTATIVE TEST CASES

## 16.1 Testing Approach

The current codebase does not include an automated unit/integration test suite. Therefore, validation is executed using scenario-driven functional testing through browser interaction and API-level checks. This strategy verifies business flow correctness, role enforcement, and UI feedback behavior.

## 16.2 Test Coverage Areas

1. Authentication flow and session persistence.
2. Route-level authorization and access control.
3. Post CRUD behavior under admin constraints.
4. Search/filter/pagination behavior.
5. Comment lifecycle and moderation behavior.
6. Dashboard metric retrieval for admin.
7. Profile update and image upload flow.
8. API health and DB connectivity routes.

## 16.3 Representative Test Cases

| Test ID | Scenario | Input/Action | Expected Result |
|---|---|---|---|
| TC-01 | User signup success | Valid username, email, password | Account created; success response |
| TC-02 | User signin success | Correct email/password | HttpOnly cookie set; user data returned |
| TC-03 | Invalid signin | Wrong password | Error response with message |
| TC-04 | Unauthorized post creation | Non-admin token | 403 forbidden |
| TC-05 | Admin post creation | Valid admin session + post payload | Post saved and returned with slug |
| TC-06 | Post search by keyword | `searchTerm=react` | Matching posts returned |
| TC-07 | Comment create ownership check | Mismatch between body `userId` and token user | 403 forbidden |
| TC-08 | Comment like toggle | Repeated like request by same user | Like count increments then decrements |
| TC-09 | Admin comments listing | Admin session with `/comment/getcomments` | Paginated comments + metrics returned |
| TC-10 | Profile username invalid format | Username with spaces/invalid chars | Validation error message |
| TC-11 | Account deletion by owner | Authenticated user deletes own account | Account removed; user state cleared |
| TC-12 | Signout | POST signout | Cookie cleared; frontend logged out state |

## 16.4 Observed Quality Notes

- Search page includes robust `try/catch/finally` handling to avoid stuck loading state.
- A code-level issue exists in comment controller: `errorHandler` is referenced but not imported, which can fail certain error paths during runtime. This should be corrected in future maintenance.

---

# CHAPTER 17: DEPLOYMENT AND LOCAL SETUP SUMMARY

## 17.1 Local Setup Highlights

1. Install dependencies at root, `api`, and `client`.
2. Copy `.env.example` to `.env` and configure `MONGO`, `JWT_SECRET`.
3. Copy `client/.env.example` to `client/.env` and configure `VITE_BACKEND_URL`, `VITE_FIREBASE_API_KEY`.
4. Run backend (`npm run dev`) or both services (`npm run dev:all`).
5. If backend port auto-falls back from 3000, update frontend backend URL accordingly.
6. Use seed script (`npm run seed`) for sample users/posts.

## 17.2 Deployment Characteristics

- Backend includes Vercel serverless-compatible export (`export default app`) and route mapping in `api/vercel.json`.
- Frontend includes SPA rewrite configuration in `client/vercel.json`.
- CORS in production accepts configured domain list and Vercel app patterns.

## 17.3 Runtime Reliability Features

- Automatic backend port fallback when desired port is occupied.
- Dedicated debug endpoints for deployment diagnostics.
- DB connection middleware guards API routes requiring data access.

---

# CHAPTER 18: PROJECT TIMELINE / DEVELOPMENT PHASES

## 18.1 Phase-Wise Plan

1. **Phase 1: Problem Analysis and Requirement Gathering**  
   Identification of role-based blogging requirements, functional scope, and tech stack.

2. **Phase 2: System Design and Project Structuring**  
   Folder architecture creation for API routes/controllers/models and frontend pages/components.

3. **Phase 3: Backend Core Development**  
   Auth, user, post, and comment APIs; middleware; DB connection flow; environment setup.

4. **Phase 4: Frontend Core Development**  
   Routing, auth screens, dashboard shell, post and comment UI, state management integration.

5. **Phase 5: Feature Completion and Integration**  
   Search/filter, pagination, analytics cards, Firebase upload, role-guard routes.

6. **Phase 6: Local Setup Refinement and Seeding Utilities**  
   Setup documentation, seed data generation, concurrent run scripts.

7. **Phase 7: Validation and Documentation**  
   Scenario testing, limitation analysis, and final project report preparation.

## 18.2 Indicative Schedule (Academic Term)

- Weeks 1-2: Planning and requirement analysis.
- Weeks 3-5: Backend implementation.
- Weeks 6-9: Frontend implementation.
- Weeks 10-11: Integration and fixes.
- Weeks 12-13: Deployment configuration and validation.
- Weeks 14-16: Documentation and final submission preparation.

---

# CHAPTER 19: ADVANTAGES, LIMITATIONS, AND FUTURE ENHANCEMENTS

## 19.1 Advantages

1. End-to-end full-stack implementation with clean module separation.
2. Role-based controls for protected content operations.
3. Rich user engagement through comments and likes.
4. Dashboard-driven administrative visibility.
5. Search/filter/pagination enabling scalable content discovery.
6. Deployment-ready structure with environment-specific configuration.
7. Reusable architecture suitable for extension in academic or startup contexts.

## 19.2 Limitations

1. No automated unit/integration/end-to-end test suite included.
2. Comment schema/controller lacks centralized server-side length/content validation strategy.
3. No refresh token/session rotation mechanism for advanced auth hardening.
4. Current ownership model for post update/delete requires admin and userId matching same token identity.
5. Data relations are string-based rather than typed ObjectId references with population.
6. One controller file currently references an error utility without import in some code paths.

## 19.3 Future Enhancements

1. Add automated test coverage using Jest + Supertest (API) and Cypress/Playwright (UI).
2. Introduce schema-level validation middleware (e.g., zod/joi/express-validator).
3. Add draft/publish status workflow with editorial approval pipeline.
4. Add role extensions (editor, moderator, author) with policy matrix.
5. Implement notification subsystem for replies and post interactions.
6. Add full-text search indexing and recommendation strategies.
7. Add audit logs for moderation and critical operations.
8. Implement CI/CD with quality gates and security scanning.

---

# CHAPTER 20: CONCLUSION

ScriptStory successfully demonstrates the implementation of a modern, role-aware blogging platform using the MERN stack. The project satisfies core requirements for secure authentication, content lifecycle management, user interaction, and administrative control. Its modular architecture, practical API design, and responsive frontend workflow make it suitable as a comprehensive academic project and a strong foundation for real-world extension.

The developed system highlights how full-stack engineering principles can be applied to create a coherent product rather than isolated modules. Through integration of state management, role-based routing, media upload, and backend authorization, the application delivers a meaningful user experience while maintaining operational boundaries.

From a learning perspective, the project contributes significant exposure to software architecture decisions, controller-driven business logic, frontend-backend contract design, and deployment readiness. With planned enhancements in testing, validation, and observability, ScriptStory can evolve into a production-grade knowledge publishing platform.

---

# CHAPTER 21: BIBLIOGRAPHY

1. MongoDB Documentation. *MongoDB Manual*. https://www.mongodb.com/docs/
2. Express.js Documentation. *Express - Node.js web application framework*. https://expressjs.com/
3. React Documentation. *React Official Docs*. https://react.dev/
4. Node.js Documentation. *Node.js API Reference*. https://nodejs.org/docs/latest/api/
5. Redux Toolkit Documentation. *Redux Toolkit Official Docs*. https://redux-toolkit.js.org/
6. Vite Documentation. *Vite Guide*. https://vitejs.dev/guide/
7. Firebase Documentation. *Firebase for Web*. https://firebase.google.com/docs/web
8. Flowbite React Documentation. *Flowbite React Components*. https://flowbite-react.com/
9. Mongoose Documentation. *Mongoose ODM Guide*. https://mongoosejs.com/docs/
10. OWASP Foundation. *OWASP Top 10 Web Application Security Risks*. https://owasp.org/www-project-top-ten/

---

# CHAPTER 22: APPENDIX

## Appendix A: Project Directory Snapshot

- `api/` - Backend entry, routes, controllers, models, utilities.
- `client/` - Frontend application (pages, components, redux, styles).
- `scripts/` - Utility scripts for concurrent dev run and seed data.
- `docs/` - Documentation artifacts including this report.

## Appendix B: Important Environment Variables

### Backend `.env`

- `NODE_ENV`
- `PORT`
- `MONGO`
- `JWT_SECRET`

### Frontend `client/.env`

- `VITE_BACKEND_URL`
- `VITE_FIREBASE_API_KEY`

## Appendix C: Useful Commands

```bash
npm install
npm run dev:all
npm run dev
npm run seed
npm run build
```

## Appendix D: Seed Data Summary

- Total seeded users: 5
- Admin users: 1 (`admin@scriptstory.dev`)
- Regular users: 4
- Total seeded posts: 20
- Default seeded password: `Pass@123`

## Appendix E: API Health Checks

- `GET /api/test`
- `GET /api/debug`
- `GET /api/debug-db`

## Appendix F: Suggested Evidence for Submission Folder

1. Screenshots of sign-in, dashboard, create-post, post detail, and search pages.
2. Sample API responses for protected and public endpoints.
3. Local setup execution logs.
4. Deployment URLs and validation screenshots.

---

## End of Report
