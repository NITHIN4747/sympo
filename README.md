# EEE Symposium 2025 - KSRCE

Official website for the EEE Symposium 2025 hosted by KSRCE.

## 🚀 Features

- Modern React 19 with Vite
- Responsive design with Tailwind CSS
- Component-based UI with Radix UI
- Form handling with React Hook Form
- Routing with React Router DOM
- Beautiful animations with Framer Motion
- Admin panel functionality
- Event registration system

## 📦 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Package Manager**: pnpm

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

## 🚀 Production Deployment

### Build for Production

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

### Deployment Options

#### 1. Static Hosting (Netlify, Vercel, GitHub Pages)

```bash
pnpm build
```

Upload the `dist` folder to your hosting provider.

#### 2. Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### 3. Node.js Server

```bash
# Install serve globally
npm install -g serve

# Serve the built app
serve -s dist -l 3000
```

## 📁 Project Structure

```
eee-symposium-app/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Radix UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── assets/           # Images and static files
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=EEE Symposium 2025
VITE_APP_DESCRIPTION=Official website for EEE Symposium 2025
```

### Build Configuration

The build is optimized for production with:
- Code splitting and lazy loading
- Minification and tree shaking
- Optimized bundle sizes
- Source maps disabled for production

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm start` - Start production server

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is proprietary software for KSRCE EEE Symposium 2025.

## 🤝 Contributing

For internal development only. Contact the development team for contributions.

---

**Built with ❤️ for EEE Symposium 2025** 