# Setup

## Table of Contents

- [Setup](#setup)
  - [Table of Contents](#table-of-contents)
  - [Next JS Setup](#next-js-setup)
  - [Testing](#testing)
  - [Page.js](#pagejs)
  - [Layout.js](#layoutjs)
  - [Jest Config](#jest-config)
  - [File Structure](#file-structure)

## Next JS Setup

- npx create-next-app@latest .

## Testing

- npm install *save-dev @testing-library/jest-dom @testing-library/*react @testing-library/user-event
- package.json -- add *"test": "jest"* in "scripts"

## Page.js

<!--
// src/app/page.js

import BoxList from "./boxes/BoxList";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">React Box App</h1>
      <BoxList />
    </div>
  );
}
-->

## Layout.js

<!--
// src/app/layout.js

import "./globals.css";

export const metadata = {
  title: "React Box App",
  description: "An app to dynamically add and remove boxes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
-->

## Jest Config



## File Structure

Boxes/
├── public/                     # Static assets (images, favicons, etc.)
│   ├── favicon.ico             # Favicon for the app
│   └── ...                     # Other public assets
├── src/
│   ├── __tests__/              # Test files
│   │   ├── BoxList.test.js     # Tests for BoxList component
│   │   ├── Box.test.js         # Tests for Box component
│   │   ├── NewBoxForm.test.js  # Tests for NewBoxForm component
│   │   └── ...                 # Other test files
│   ├── app/                    # App router directory for Next.js
│   │   ├── components/         # Reusable components
│   │   │   ├── boxes/          # Box-related components
│   │   │   │   ├── Box.js      # Individual Box component
│   │   │   ├── forms/          # Form components
│   │   │   │   ├── NewBoxForm.js # NewBoxForm component
│   │   ├── boxes/              # Feature-specific directory for BoxList
│   │   │   ├── BoxList.js      # Main component managing boxes
│   │   ├── layout.js           # Root layout for the app
│   │   ├── page.js             # Entry point of the app (renders BoxList)
│   │   ├── globals.css         # TailwindCSS global styles
│   │   └── ...                 # Other app-level files
│   ├── reportWebVitals.js      # Performance reporting file (optional)
├── .env.local                  # Environment variables for local development
├── .gitignore                  # Git ignore file
├── jest.config.js              # Jest configuration
├── next.config.js              # Next.js configuration
├── package.json                # Package dependencies and scripts
├── postcss.config.js           # PostCSS configuration (for TailwindCSS)
├── README.md                   # Documentation for the project
├── tailwind.config.js          # TailwindCSS configuration
└── tsconfig.json               # TypeScript configuration (if applicable)
