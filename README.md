## images implemented

1. home.jpg
1. home-loading.jpg

## scripts (Or check package.json scripts for reference.)

1. `install: npm run install`
1. `dev: npm run vite`
1. `lint: npm run lint`
1. `test: npm run test`
1. `build: npm run build`
1. `preview: npm run preview`

   Note: Preview the built codes, ensure you run the build command before the preview command.".

## How did you decide on the technical and architectural choices used as part of your solution?

1. Project Initialization: Thought I have extensive experience with Webpack and babel, I used Vite to initialize the application because of its intuitive initialisation, superior build speed, extensive documentation and strong community support .

1. State & Styling: For this technical exercise, I opted for React’s local state management (Hooks) and CSS to keep the application lightweight and focused on core requirements.

1. Component Architecture: I developed modular Header, MovieCard, and Carousel components to ensure code reusability, maintainability, and future scalability.

1. Testing Strategy: I implemented unit tests using Vitest and React Testing Library. This combination was chosen for its excellent developer experience and highly readable test cases.

1. Responsive Units: I utilized rem units for proportional scaling. This ensures the layout and typography adapt automatically to the user's root HTML font-size settings. Conversely, I used pixels (px) for fixed, static elements like borders and specific spacing.

## Are there any improvements you could make to your submission? What would you do differently if you were allocated more time?

1. Enhanced Navigation: I plan to implement 2D navigation (up, down, left and right keyboard control) on the Home page, the Header and the Carousel.

1. UI/UX Refinement: I would focus on polishing the UI and enhancing the fluidity of animations to ensure a more premium, high-performance user experience.

1. Component Documentation: I would integrate Storybook to document components in isolation, which facilitates easier testing and collaboration across the team. I might consider using styled-component library.

1. Expanded Test Coverage: I plan to increase the unit test coverage to test more thorough business logic and edge cases, ensuring higher code reliability.

1. Performance Auditing: I will perform a deep audit of useEffects to eliminate potential memory leaks and optimize rendering by preventing unnecessary re-renders.

1. Manual Testing: Test on different OS/devices/browsers to ensure the app works elegantly on all suporting devices (Current development environment is MacOS + Chrome (Version 144.0.7559.133 (Official Build) (arm64)))

1. Dependency Management: Periodically audit and upgrade dependencies to their latest stable versions to ensure security and performance.

1. Scalable Units: Refactor static px values to rem units where appropriate to improve scalability.
