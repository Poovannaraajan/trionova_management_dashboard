# Trionova Management Dashboard

A modern, responsive management dashboard application built with React, TypeScript, and Vite. This application serves as a comprehensive tool for tracking inventory, client details, and overall business metrics.

## Features

- **Overall Dashboard (Home)**: High-level overview featuring a dynamic Total Revenue Donut Chart (with internal percentage labels) and a Purchase Order Bar Chart. Includes interactive accordion sections for Client, Supplier, and Erection data.
- **Client Management**: A dedicated dashboard for managing client details, featuring a clean data table with checkboxes, dynamic status indications, and mock data for quick visualization.
- **Inventory Management**: Detailed inventory tracking system equipped with pagination, stock status badging (In Stock, Low Stock, Out of Stock), and a functional "Export CSV" feature to download the current mock inventory data.
- **Decentralized Styling Architecture**: Clean, modular vanilla CSS separated by components (`App.css`, `HomeDashboard.css`, `InventoryDashboard.css`) for easy maintenance and scalability.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Bundler**: Vite
- **Icons**: Lucide React
- **Charts**: Recharts
- **Styling**: Vanilla CSS (Modular Architecture)

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd trionova_management_dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Project Structure

- `/src/components`: Contains the main dashboard view components (`HomeDashboard.tsx`, `InventoryDashboard.tsx`, `ClientDashboard.tsx`) along with their respective CSS files.
- `/src/App.tsx`: The main shell of the application that manages the sidebar navigation state and routing.
- `/src/index.css`: Global styles, layout resets, and generic reusable UI components (like buttons, badges, and base table stylings).
