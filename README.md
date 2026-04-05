# Where In The World

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Mock Service Worker](https://img.shields.io/badge/Mock_Service_Worker-FF6A00?style=for-the-badge&logo=mockserviceworker&logoColor=white)](https://mswjs.io)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3e54a3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![PerfectPixel](https://img.shields.io/badge/PerfectPixel-F56C94?style=for-the-badge)](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonecod/dkaagdgjmgdmbnecmcefdhjekcoceebi)
![Image → Code](https://img.shields.io/badge/Image%20→%20Code-6a1b9a?style=for-the-badge&labelColor=2e003e&logoColor=white)
![Semantic HTML](https://img.shields.io/badge/Semantic%20HTML-ff9800?style=for-the-badge)
![Accessible](https://img.shields.io/badge/Accessibility-A11Y-0052cc?style=for-the-badge)
![Responsive Design](https://img.shields.io/badge/Responsive%20Design-2196F3?style=for-the-badge&logo=responsive&logoColor=white)
![Mobile First](https://img.shields.io/badge/Mobile%20First-14532D?style=for-the-badge&logo=responsive&logoColor=white)
![Dynamic Content](https://img.shields.io/badge/Dynamic%20Content-673ab7?style=for-the-badge)
![Theme Toggle](https://img.shields.io/badge/Theme%20Toggle-121212?style=for-the-badge&logo=adjust&logoColor=white)
[![Fetch API](https://img.shields.io/badge/REST%20Countries%20API-1976d2?style=for-the-badge)](https://restcountries.com/)
[![Google Lighthouse](https://img.shields.io/badge/Lighthouse-00B0FF?style=for-the-badge&logo=lighthouse&logoColor=white)](/docs/downloads/lighthouse-performance-report.pdf)

![Status](https://img.shields.io/badge/status-complete-brightgreen)
![Learning Path](https://img.shields.io/badge/learning%20path-month%2011-blue)
![Views](https://visitor-badge.laobi.icu/badge?page_id=CodingWithJiro.frontend-mentor-where-in-the-world&left_text=repo%20views)

## Where In The World - Searh Countries Powered By REST Countries API

A fully responsive country explorer built with React and TypeScript, featuring dynamic data fetching, URL-driven filtering, and comprehensive testing using MSW.

| _Mobile Preview (375x812)_                                  | _Desktop Preview (1440x960)_                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------- |
| ![Mobile](/public/img/site-preview-mobile_375x812.png)      | ![Desktop](/public/img/site-preview-desktop_1440x960.png)      |
| ![Mobile](/public/img/site-preview-mobile-dark_375x812.png) | ![Desktop](/public/img/site-preview-desktop-dark_1440x960.png) |

---

## Overview

This project is a production-style implementation of the **[REST Countries API](https://restcountries.com/)** which allows users to explore countries by name, filter by region, and view detailed country information including borders, currencies, and languages.

It emphasizes clean data flow, URL-driven state management using React Router, and robust testing using Mock Service Worker (MSW) to simulate real API behavior.

Created as part of the building challenges from **[Frontend Mentor](https://www.frontendmentor.io/)**.

---

## Live Demo

You can check out the live website **[here](https://where-in-the-world-fm-jiro.netlify.app/)**

---

## Features

- Browse all countries with dynamic data fetched from the **[REST Countries API](https://restcountries.com/)**
- Search countries with debounced, case-insensitive input
- Filter countries by region with toggleable dropdown
- URL-based state management for persistent search and filters using **[React Router](https://reactrouter.com/)**
- Detailed country pages with dynamic routing (`/country/:code`)
- Navigate between countries via border country links
- Light/Dark theme toggle with system preference detection and persistence
- Optimized rendering using derived state and memoization
- Clean architecture using service layer, formatter utilities, and custom hooks
- Full UI state handling (loading, error, empty, success)
- Comprehensive testing with Vitest, React Testing Library, and MSW
- Accessibility improvements including semantic structure, ARIA attributes, and keyboard navigation
- Fully responsive layout with mobile-first design

---

## Tech Stack

**Libraries & Frameworks:** [<img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" />](https://react.dev/)
[<img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind%20CSS-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8" />](https://tailwindcss.com/)
[<img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white" />](https://reactrouter.com/)

**Core Technologies:** [<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />](https://developer.mozilla.org/en-US/docs/Web/HTML)
[<img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />](https://developer.mozilla.org/en-US/docs/Web/CSS)
[<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />](https://www.typescriptlang.org/)
[<img alt="Markdown" src="https://img.shields.io/badge/-Markdown-000000?style=flat-square&logo=markdown&logoColor=white" />](https://www.markdownguide.org/)

**Tooling & Testing:** [<img alt="Vite" src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=FFD62E" />](https://vitejs.dev/)
[<img alt="Vitest" src="https://img.shields.io/badge/-Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white" />](https://vitest.dev/)
[<img alt="React Testing Library" src="https://img.shields.io/badge/-React%20Testing%20Library-E33332?style=flat-square&logo=testing-library&logoColor=white" />](https://testing-library.com/docs/react-testing-library/intro/)
[<img alt="Mock Service Worker" src="https://img.shields.io/badge/-Mock%20Service%20Worker-FF6A00?style=flat-square&logo=mockserviceworker&logoColor=white" />](https://mswjs.io)

**Platforms & Deployment:** [<img alt="Git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />](https://git-scm.com/)
[<img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" />](https://github.com/)
[<img alt="Netlify" src="https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" />](https://www.netlify.com/)
[<img alt="VS Code" src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" />](https://code.visualstudio.com/)

---

## Development Workflow

This project uses a **[feature-based branching workflow](https://github.com/CodingWithJiro/frontend-mentor-where-in-the-world/network)** with descriptive commits and **[structured pull requests](https://github.com/CodingWithJiro/frontend-mentor-where-in-the-world/pulls?q=is%3Apr+is%3Aclosed)**, mirroring professional team collaboration practices:

[![Network Graph](/public/img/network-graph.png)](https://github.com/CodingWithJiro/frontend-mentor-where-in-the-world/network)

---

## Performance Report

[![Lighthouse Report Preview](public/img/lighthouse-report.png)](docs/downloads/lighthouse-performance-report.pdf)

A **Google Lighthouse** audit was conducted on the final version of this project. You can view the **[full report here](docs/downloads/lighthouse-performance-report.pdf)**.

---

## How to Run

Open a terminal and type:

```bash
git clone https://github.com/CodingWithJiro/frontend-mentor-where-in-the-world.git
cd frontend-mentor-where-in-the-world
npm install
npm run dev
```

---

## Testing

Open a terminal and type:

```bash
npm test
```

---

## What I Learned

- Structured a scalable React application using separation of concerns (API layer, hooks, utilities, UI)
- Strengthened TypeScript fundamentals including generics, shared types, and strict typing for props and state
- Learned to design clean data transformation layers to convert complex API responses into UI-ready data
- Implemented URL-driven state management using `useSearchParams` for persistence and better UX
- Understood how to design filtering pipelines combining multiple conditions (search + region)
- Improved performance using derived state and `useMemo` where appropriate
- Built reusable and accessible UI components with proper semantic HTML and ARIA practices
- Gained deeper understanding of React Router including nested routes, dynamic routing, and navigation patterns
- Learned how to handle async data flows with proper loading, error, and empty states
- Practiced debouncing and syncing UI state with URL state
- Implemented real-world testing strategies using Vitest and React Testing Library
- Mastered API mocking using Mock Service Worker (MSW) for integration testing
- Learned how to simulate full async UI lifecycles and edge cases in tests
- Improved debugging skills for async rendering and state issues
- Developed a stronger understanding of frontend architecture and maintainability

---

## Author

Created by **Elmar Chavez**

Month/Year: **February - March 2026**

Journey: **11<sup>th</sup> - 12<sup>th</sup>** month of being a _frontend developer_.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elmar-chavez/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chavezelmar03@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CodingWithJiro)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/CodingWithJiro)
[![daily.dev](https://img.shields.io/badge/daily.dev-171717?style=for-the-badge&logo=daily.dev&logoColor=38BDF8)](https://app.daily.dev/elmarchavez)
[![dev.to](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=00C7B7)](https://dev.to/codingwithjiro)
