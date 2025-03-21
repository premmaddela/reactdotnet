# Weather Forecast App

A full-stack web application built with ASP.NET Core and React that displays weather forecasts. This project demonstrates how to create a modern web application with a .NET backend API and a React frontend.

<img width="1141" alt="Screenshot 2025-03-21 at 4 43 14 PM" src="https://github.com/user-attachments/assets/d1fb7b83-c7b6-45bd-9147-3fde744493b1" />

## Features

- ASP.NET Core backend with REST API
- React frontend with functional components and hooks
- Real-time weather forecast data (simulated)
- Responsive design with custom CSS
- CORS configuration for API access

## Technologies Used

### Backend
- ASP.NET Core 6.0
- C# Controllers
- REST API

### Frontend
- React
- JavaScript (ES6+)
- CSS3
- Fetch API for data retrieval

## Project Structure

├── Backend (.NET Core)
│   ├── Controllers/
│   │   └── SampleDataController.cs - Weather forecast API
│   ├── Models/
│   ├── Program.cs - Application configuration
│   └── appsettings.json - App settings
│
└── Frontend (React)
    ├── src/
    │   ├── components/
    │   │   ├── WeatherForecasts.js - Weather display component
    │   │   └── WeatherForecasts.css - Component styling
    │   ├── App.js - Main application component
    │   └── index.js - Application entry point
    └── public/
        └── index.html - HTML template

## Getting Started

### Prerequisites

- [.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository
git clone https://github.com/premmaddela/reactdotnet.git cd weather-forecast-app


2. Install backend dependencies
dotnet restore


3. Install frontend dependencies
cd ClientApp npm install


### Running the Application

1. Start the backend server
dotnet run


2. In a separate terminal, start the frontend development server
cd ClientApp npm start


3. Open your browser and navigate to:
- Frontend: http://localhost:3000
- Backend API: https://localhost:5001/api/SampleData/WeatherForecasts

## API Endpoints

- `GET /api/SampleData/WeatherForecasts` - Returns a list of weather forecasts

## Development

### Backend Development

The backend is built with ASP.NET Core. The main components are:

- `Program.cs` - Configures the application services and middleware
- `SampleDataController.cs` - Provides the weather forecast API endpoint

### Frontend Development

The React frontend uses functional components with hooks:

- `WeatherForecasts.js` - Fetches and displays weather data
- `App.js` - Main application component

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Microsoft for ASP.NET Core and React project templates
- The React team for their excellent frontend library
