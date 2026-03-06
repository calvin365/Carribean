# Caribbean Food Court Kobil - 3D Website

A stunning 3D website for Caribbean Food Court Kobil restaurant in Nairobi, featuring Spline 3D integration, Framer Motion animations, and interactive Google Maps.

## 🌴 Features

- **3D Spline Hero Section** - Interactive 3D experience
- **Framer Motion Animations** - Smooth scroll and hover effects
- **Google Maps Integration** - Interactive map showing exact restaurant location
- **Responsive Design** - Works on all devices
- **Caribbean Theme** - Vibrant orange/coral/gold gradient colors
- **Menu Showcase** - Display Caribbean specialties
- **Catering Services** - Event catering information
- **Contact Form** - Customer inquiry form
- **Click-to-Call** - Phone numbers ready to call

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Maps API Key (for map feature)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up Google Maps API Key:**

   a. Get your API key from: https://developers.google.com/maps/documentation/javascript/get-api-key
   
   b. Create a `.env` file in the root directory:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```
   
   Or edit the existing `.env` file with your key.

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173
```

## 🎨 Customization

### 3D Spline Scene

To customize the 3D scene in the hero section:

1. Go to [spline.design](https://spline.design/)
2. Create a tropical/Caribbean-themed 3D scene (palm trees, grill, food items)
3. Export your scene
4. Replace the `SPLINE_URL` in `src/App.jsx`:
   ```javascript
   const SPLINE_URL = "your-spline-scene-url.splinecode"
   ```

### Google Maps Location

The map is centered on Caribbean Food Court Kobil's location:
```javascript
center={{ lat: -1.3281942, lng: 36.892361 }}
```

Edit these coordinates in `src/App.jsx` if needed.

### Colors & Styling

Edit `src/App.css` and `src/index.css` to customize:
- Color gradients
- Spacing
- Typography
- Animations

### Content

All content is in `src/App.jsx`:
- Menu items and prices
- Business information
- Opening hours
- Contact details

## 📁 Project Structure

```
spline-website/
├── src/
│   ├── components/
│   │   └── MapView.jsx       # Google Maps component
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── .env                      # Environment variables (API keys)
├── .env.example              # Example env file
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **@splinetool/react-spline** - 3D Spline integration
- **Google Maps JavaScript API** - Interactive maps

## 📱 Sections

1. **Hero** - 3D scene with call-to-action buttons
2. **Menu** - Caribbean food specialties
3. **About** - Restaurant information and features
4. **Catering** - Event services and stats
5. **Gallery** - Food image placeholders
6. **Contact** - Form and contact information
7. **Map** - Interactive Google Map

## 🎯 To Deploy

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

### Deploy to hosting:
- **Vercel**: Connect GitHub repo or drag & drop build folder
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## 📞 Business Information

**Caribbean Food Court Kobil**
- 📍 First Floor, Catherine Ndereba Road, Airport Road (Embakasi North), Nairobi
- 📞 +254 705 001 002 / +254 722 421 237
- 🌐 www.caribbeancaterers.co.ke
- 🕐 Mon-Sat: 07:00 – 01:00, Sun: Closed

## 📄 License

This project is open source and available under the MIT License.

---

Made with 🧡 for Caribbean Food Court Kobil
"# Carribean" 
