# ♻️ Safai Saathi — Smart Daily Garbage Collection Tracker for Lucknow

> **"A cleaner Lucknow, one collection at a time."**  
> **"साफ़ लखनऊ, हमारी ज़िम्मेदारी"**  
> A production-ready civic-tech web platform for Lucknow, Uttar Pradesh. Built with Next.js 15+ App Router, TypeScript, Tailwind CSS, Leaflet OpenStreetMap, Recharts, and Supabase PostgreSQL.

---

## 📌 Project Overview

In urban residential localities across Indian cities, municipal waste collection tippers arrive at unpredictable morning times. Residents frequently miss the vehicle, causing waste accumulation and sanitation hazards, while civic bodies lack objective data on route completion and grievance resolution.

**Safai Saathi** provides a centralized, zero-hardware digital operating system:
1. **Citizens**: Live Leaflet GIS vehicle tracking, dynamic doorstep ETAs, ward collection schedules, and photo-enabled grievance reporting with 4-step resolution timelines.
2. **Sanitation Drivers**: Mobile-first cockpit to view scheduled route stops, mark door-to-door checkpoints complete, and report roadside breakdowns.
3. **Municipal Administrators**: Fleet command center with real-time multi-vehicle map, Recharts analytics, staff directory, locality management, and automated grievance triage.

---

## ✨ Key Features

### 🏡 Citizen Portal (`/`, `/dashboard`, `/track`, `/schedule`, `/report`, `/complaints`)
- **"Will My Garbage Be Collected Today?"**: Immediate high-visibility answer card with scheduled window (`8:30 AM – 10:30 AM`), assigned truck registration, and real-time route progress bar.
- **Live Vehicle GIS Tracking (`/track`)**: Interactive Leaflet + OpenStreetMap displaying animated vehicle movement, doorstep distance & ETA countdown, completed vs remaining route polylines, and checkpoint markers.
- **Ward Locality Selector**: Instant schedules across representative Lucknow localities: *Indira Nagar, Gomti Nagar, Aliganj, Hazratganj, Mahanagar, Alambagh, Rajajipuram, Jankipuram, Chinhat, Aashiana*.
- **Grievance Reporting (`/report`)**: Upload photo proof, automatic browser GPS geolocation coordinate capture, Zod validation, and automated tracking code generation (`SS-2026-XXXXX`).
- **Step-by-Step Grievance Timeline (`/complaints`)**:
  - `✓ Complaint Submitted`
  - `✓ Complaint Assigned`
  - `● Field Verification (In Progress)`
  - `○ Resolution & Closure`

### 📱 Driver Mobile Cockpit (`/driver`)
- High-contrast, mobile-first interface for sanitation drivers.
- Shift route overview (`Indira Nagar – Route 04`, 18 Stops, 11 Completed, 7 Remaining).
- Interactive stop checklist with one-tap `Mark Collection Complete` updating live progress in real-time.
- One-touch emergency button: `Report Breakdown / Obstruction`.

### 📊 Municipal Admin Command Center (`/admin/*`)
- **Overview Desk (`/admin`)**: 6 KPI cards (128 Localities, 42 Vehicles, 1,284 Today's Collections, 1,067 Completed, 84 Pending Grievances, 1,204 Resolved) with trend percentage badges.
- **Live Fleet Map (`/admin/live-map`)**: Full-screen GIS tracking of all 42 municipal vehicles with status filters (`Active`, `Delayed`, `Offline`) and telemetry drawers.
- **Cleanliness Analytics (`/admin/analytics`)**: Recharts daily collection line charts, grievance bar charts, and ward performance leaderboards.
- **CRUD Operations**: Complete management tables for Vehicles (`/admin/vehicles`), Localities (`/admin/localities`), and Workers (`/admin/workers`).

### 🚀 Zero-Setup Demo Fallback Layer
- If Supabase credentials are not provided initially, Safai Saathi automatically runs in **Zero-Setup Demo Mode** using local persistent state.
- **1-Click Test Login Accounts** for viva and project evaluation:
  - 👤 **Citizen**: `citizen@safaaisaathi.demo`
  - 🚛 **Driver**: `driver@safaaisaathi.demo`
  - 🛡️ **Admin**: `admin@safaaisaathi.demo`
  - 👷 **Worker**: `worker@safaaisaathi.demo`

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | Next.js 15+ (App Router), React 19, TypeScript |
| **Styling & UI** | Tailwind CSS, Lucide React icons, Framer Motion |
| **Maps & GIS** | Leaflet.js + OpenStreetMap (CartoDB Positron / OSM tiles) — *100% Free, Zero Google Maps API fees* |
| **Data Visualization** | Recharts (Responsive Line & Bar charts) |
| **Backend & APIs** | Next.js Server Components, API routes, Server Actions |
| **Database & Auth** | Supabase PostgreSQL, Row-Level Security (RLS) policies |
| **Validation** | Zod Schema Validation |
| **PWA Support** | Web App Manifest (`manifest.ts`), Mobile Bottom Bar |

---

## 📦 Local Development Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/YOUR_USERNAME/safai-saathi.git
cd safai-saathi
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*(Note: If left empty, Safai Saathi runs out-of-the-box in Demo Mode with persistent local storage).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Database Schema & Supabase Setup

To connect to a live Supabase instance:
1. Create a new project at [supabase.com](https://supabase.com).
2. Go to **SQL Editor** and run the SQL migration file located at:
   ```
   supabase/migrations/20260822_safai_saathi_schema.sql
   ```
3. Run the seed data script:
   ```
   supabase/seed.sql
   ```
4. Copy your `Project URL` and `anon key` to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

---

## ☁️ Production Build & Vercel Deployment

### Build Locally
```bash
npm run build
npm start
```

### Deploy to Vercel (1-Click)
1. Push this repository to GitHub.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your `safai-saathi` repository.
4. Add environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (or deploy in Demo Mode).
5. Click **Deploy**!

---

## 📜 Academic & Civic Disclaimer

Safai Saathi is an independent civic-tech engineering prototype developed for Lucknow, Uttar Pradesh. It is aligned with the goals of **Swachh Bharat Mission (SBM 2.0)** and **UN SDG 11 (Sustainable Cities)**. All municipal schedules and GPS coordinates shown in Demo Mode simulate representative Lucknow residential wards.
