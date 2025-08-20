# قطاف | Qotaf

**Arabic-first crowdsourcing platform for collecting plastic bottles in Algeria**

معاً نجمع القوارير البلاستيكية لمساعدة الجزائر - Together we collect plastic bottles to help Algeria

## 🌟 Features

- **RTL by default** - Arabic-first with English toggle
- **Mobile-first responsive design** - Beautiful on all devices  
- **Role-based access** - Citizen, Volunteer, Association, Sports Facility, Public
- **Mock backend ready** - Complete mock services and data
- **Accessible UI** - WCAG AA compliant components
- **Open source** - Built for the community

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build
```

## 🎨 Design System

The entire visual identity is derived from the Qotaf logo:
- **Primary Green**: `hsl(123 46% 34%)` - من الشعار
- **Accent Blue**: `hsl(199 89% 48%)` - من الشعار  
- **Arabic Typography**: Cairo font family
- **Rounded corners**: Soft, approachable design
- **Semantic tokens**: All colors defined in design system

## 🏗️ Architecture

```
src/
├── components/
│   ├── ui/           # Shadcn components + enhanced variants
│   ├── qotaf/        # App-specific components
│   └── layout/       # Navigation, footer
├── contexts/         # Language & app state
├── lib/             # Utilities & i18n
├── services/        # Mock API services
└── pages/           # Route components
```

## 🌐 Internationalization

- **Default**: Arabic (RTL)  
- **Toggle**: English (LTR)
- **Semantic keys**: Extensible translation system
- **Direction aware**: Components adapt to RTL/LTR

## 📱 Core Flows (Implemented)

### ✅ Landing Page
- Hero with clear value proposition
- National KPI cards with mock data
- Feature showcase  
- Role selection interface
- Call-to-action sections

### ✅ Components Ready
- `Logo` - Adaptive size variants
- `KPICard` - Statistics display
- `RoleSelector` - User role selection
- `RequestCard` - Pickup request display
- `StatusChip` - Request status indicators  
- `MapPlaceholder` - Ready for Leaflet integration
- `QRCodePlaceholder` - Ready for QR generation

### 🔄 Next Steps (Mock APIs Ready)
- Role-based dashboards
- Authentication flow
- Map integration (Leaflet + OpenStreetMap)
- QR code generation/scanning
- Real-time updates

## 🎯 User Roles

1. **مواطن (Citizen)** - Store bottles, request pickup
2. **متطوع (Volunteer)** - Accept nearby requests  
3. **جمعية (Association)** - Collection point management
4. **منشأة رياضية (Sports Facility)** - Bulk contributions
5. **عام (Public)** - View stats and leaderboard

## 🛠️ Tech Stack

- **Framework**: React + Vite + TypeScript
- **Styling**: TailwindCSS + Custom Design System
- **Components**: Shadcn/ui (enhanced)
- **State**: React Context + Mock Services
- **Icons**: Lucide React
- **Fonts**: Cairo (Google Fonts)

## 🌍 Environment Setup

Create `.env.local` for future integrations:

```bash
# Maps (future)
VITE_MAPBOX_TOKEN=your_token_here

# API (future)  
VITE_API_BASE_URL=https://api.qotaf.org

# QR Generation (future)
VITE_QR_SERVICE_URL=your_service_here
```

## 🤝 Contributing

This is an open-source project for Algeria. Contributions welcome!
📖 To understand the community vision, principles, and governance model of Qotaf, please see the [Founding Document] (./Founding_document.md)

## 📄 License

Open source - Built with ❤️ for Algeria
