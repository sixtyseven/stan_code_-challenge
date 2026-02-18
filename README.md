## images implemented

1. home.jpg
1. home-loading.jpg

## scripts (Or check package.json scripts for reference.)

1. `install: npm run install`

   Note: React 19 currently has some compatibility issues with the Testing Library. To bypass these peer dependency conflicts, I used the `--legacy-peer-deps` flag during installation for this exercise."

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

1. Expanded Test Coverage: I plan to increase the unit test coverage to test more complex business logic and edge cases, ensuring higher code reliability.

1. Performance Auditing: I will perform a deep audit of useEffects to eliminate potential memory leaks and optimize rendering by preventing unnecessary re-renders.

1. Dependency Optimization: To move beyond a temporary fix, I will refine the project configuration to explicitly define the peer dependency tree or overwrite, replacing the need for the --legacy-peer-deps flag with a more stable, long-term solution.
