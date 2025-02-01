# Project Structure

Typical Project Structure
├── /public                         # Public assets (images, icons, etc.)
│   ├── /images                     # Static images
│   ├── favicon.ico                 # Favicon
│   ├── robots.txt                  # SEO settings
│   └── manifest.json               # PWA manifest
│
├── /src                            # Source code (App Router structure)
│   ├── /app                        # Next.js App Router (route handlers & pages)
│   │   ├── /api                    # API routes (server functions)
│   │   │   ├── /auth               # Authentication API handlers
│   │   │   │   ├── route.js        # API for login, register, logout
│   │   │   ├── /budget             # Budget-related API routes
│   │   │   │   ├── route.js        # Handles budget CRUD operations
│   │   │   ├── /users              # User management API
│   │   │   │   ├── route.js        # Fetch user info
│   │   │   └── middleware.js       # Middleware functions for API auth
│   │   ├── /dashboard              # Protected dashboard route
│   │   │   ├── page.js             # Main dashboard page
│   │   ├── /budget                 # Budget page
│   │   │   ├── page.js             # Budget creation/view
│   │   ├── /auth                   # Auth pages (login, register)
│   │   │   ├── login
│   │   │   │   ├── page.js         # Login page
│   │   │   ├── register
│   │   │   │   ├── page.js         # Register page
│   │   ├── /layout.js              # Main layout file
│   │   ├── /globals.css            # Global styles
│   │   ├── /page.js                # Home page
│   │   └── /loading.js             # Loading state
│   │
│   ├── /components                 # Reusable UI components
│   │   ├── Navbar.js               # Navigation bar
│   │   ├── Sidebar.js              # Sidebar for dashboard
│   │   ├── BudgetForm.js           # Budget form component
│   │   ├── BudgetList.js           # Display saved budgets
│   │   ├── AuthForm.js             # Shared auth form component
│   │   ├── Button.js               # Reusable button component
│   │   ├── InputField.js           # Reusable input component
│   │   ├── Modal.js                # Generic modal component
│   │   ├── Toast.js                # Toast notifications
│   │   └── ProtectedRoute.js       # HOC for protected pages
│   │
│   ├── /styles                     # Component-specific styles (CSS/SCSS)
│   │   ├── navbar.css              # Styles for navbar
│   │   ├── dashboard.css           # Styles for dashboard
│   │   ├── auth.css                # Styles for authentication pages
│   │   └── budget.css              # Styles for budget pages
│   │
│   ├── /lib                        # Utility functions & helpers
│   │   ├── auth.js                 # JWT/Auth helper functions
│   │   ├── api.js                  # API request wrapper (fetch, axios)
│   │   ├── format.js               # Formatting utilities (currency, dates)
│   │   ├── validate.js             # Form validation functions
│   │   ├── constants.js            # Constants (API endpoints, roles)
│   │   └── logger.js               # Logging utility
│   │
│   ├── /helpers                    # Custom helper functions
│   │   ├── authHelper.js           # Authentication-related helpers (token parsing, encryption)
│   │   ├── budgetHelper.js         # Budget calculations and logic
│   │   ├── errorHelper.js          # Common error handling
│   │   ├── stringHelper.js         # String manipulation helpers
│   │   ├── mathHelper.js           # Math operations (percentages, rounding)
│   │   ├── dateHelper.js           # Date formatting and calculations
│   │   ├── fileHelper.js           # File upload/download helpers
│   │   └── responseHelper.js       # Standardized API responses
│   │
│   ├── /utils
│   │   ├── format.js               # Currency, date formatting
│   │   ├── math.js                 # Number rounding, percentage calculations
│   │   ├── string.js               # String manipulation functions
│   │   ├── validation.js           # Data validation functions
│   │
│   ├── /middleware                 # Middleware (Auth, API, Logging)
│   │   ├── authMiddleware.js       # Protects routes based on auth
│   │   ├── errorMiddleware.js      # Handles API errors
│   │   ├── rateLimiter.js          # Prevents abuse of APIs
│   │   ├── loggerMiddleware.js     # Logs API requests
│   │   └── corsMiddleware.js       # Handles CORS
│   │
│   ├── /context                    # React Context API for state management
│   │   ├── AuthContext.js          # Authentication context provider
│   │   ├── BudgetContext.js        # Budget state provider
│   │   ├── ThemeContext.js         # Theme settings provider
│   │   └── GlobalState.js          # Main global state manager
│   │
│   ├── /hooks                      # Custom React hooks
│   │   ├── useAuth.js              # Hook for authentication state
│   │   ├── useFetch.js             # Hook for API data fetching
│   │   ├── useBudget.js            # Hook for budget logic
│   │   ├── useToast.js             # Hook for showing notifications
│   │   └── useTheme.js             # Hook for dark/light mode
│   │
│   ├── /services                   # API Service Layer (Axios or Fetch)
│   │   ├── authService.js          # Handles login, logout, register
│   │   ├── budgetService.js        # Handles CRUD for budgets
│   │   ├── userService.js          # Fetch user details
│   │   └── apiClient.js            # Axios instance with base config
│   │
│   ├── /tests                      # Unit & Integration Tests
│   │   ├── components/             # Component tests
│   │   ├── pages/                  # Page-specific tests
│   │   ├── api/                    # API integration tests
│   │   ├── hooks/                  # Hook tests
│   │   ├── services/               # API service tests
│   │   ├── jest.setup.js           # Jest configuration
│   │   └── vitest.config.js        # Vitest configuration
│   │
│   ├── /config                     # Configuration files
│   │   ├── env.js                  # Handles environment variables
│   │   ├── database.js             # Database setup (if using Prisma, Firebase)
│   │   ├── authConfig.js           # Auth settings (JWT, OAuth)
│   │   ├── corsConfig.js           # CORS settings
│   │   └── loggerConfig.js         # Logger settings
│   │
├── .env                            # Environment variables
├── .gitignore                      # Git ignore settings
├── package.json                    # Project dependencies
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration (if used)
├── postcss.config.js               # PostCSS configuration
└── README.md                       # Project documentation
