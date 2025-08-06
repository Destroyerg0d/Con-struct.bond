# Con-struct.bond - SaaS Business Growth Platform

## 🚀 Project Overview

Con-struct.bond is a modern SaaS platform offering custom-built solutions and growth tools for small businesses. The platform includes websites, lead generation, social media marketing, and a fully automated call booking and scheduling system with admin controls, reminders, and Google Calendar sync.

## ✨ Features

### Core Functionality
- **Automated Booking System** - Seamless call scheduling with admin controls
- **Admin Dashboard** - Complete booking management with status updates
- **Email Notifications** - Automated confirmation and reminder emails
- **Google Calendar Integration** - Sync bookings with Google Calendar
- **Responsive Design** - Mobile-first approach with modern UI

### Technical Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Backend**: Supabase (Database + Auth + Functions)
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query
- **Icons**: Lucide React

### Business Features
- **Service Pages**: Custom websites, lead generation, social media, growth analytics
- **Company Pages**: About us, careers, press, our story
- **Legal Pages**: Privacy policy, terms of service, GDPR, cookie policy
- **Resources**: Blog, case studies, help center
- **Contact Forms**: Lead capture and inquiry management

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Destroyerg0d/Con-struct.bond.git

# Navigate to project directory
cd Con-struct.bond

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Manual Deployment
```bash
# Build the project
npm run build

# The dist folder contains your production-ready files
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── ...            # Custom components
├── pages/             # Page components
│   ├── company/       # Company pages
│   ├── legal/         # Legal pages
│   ├── resources/     # Resource pages
│   └── services/      # Service pages
├── integrations/      # External integrations
│   └── supabase/      # Supabase configuration
├── hooks/             # Custom React hooks
└── lib/               # Utility functions
```

## 🔧 Configuration

### Environment Variables
The project uses Supabase for backend services. Configuration is handled in `src/integrations/supabase/client.ts`.

### Database Schema
- **bookings**: Call booking management
- **admin_users**: Admin user management
- **contact_submissions**: Lead capture
- **business_hours**: Availability settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🎯 Portfolio Showcase

This project demonstrates:
- **Modern React Development** with TypeScript
- **Full-Stack Integration** with Supabase
- **Professional UI/UX** with shadcn/ui
- **Real Business Logic** with booking system
- **Scalable Architecture** with proper separation of concerns
- **Production-Ready** deployment configuration

---

Built with ❤️ for business growth and development
