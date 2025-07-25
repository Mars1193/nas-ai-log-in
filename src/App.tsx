// File: src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import Layout and Auth
import Layout from './components/Layout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
// Import all page components with correct paths
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './components/auth/ProfilePage'; // <-- CORRECTED PATH
import DashboardPage from './pages/DashboardPage';
import ShowroomPage from './pages/ShowroomPage';
import ServicesPage from './pages/ServicesPage';
import ROICalculatorPage from './pages/ROICalculatorPage';
import PhilosophyPage from './pages/PhilosophyPage';
import ContactPage from './pages/ContactPage';
import ResearchPage from './pages/ResearchPage';
import AuthCallback from './pages/AuthCallback';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* Routes with Layout */}
        <Route path="/" element={<Layout />}>
                    {/* Public Routes */}
          <Route index element={<HomePage />} />
          <Route path="showroom" element={<ShowroomPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="roi-calculator" element={<ROICalculatorPage />} />
          <Route path="philosophy" element={<PhilosophyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="research" element={<ResearchPage />} />

          {/* Protected Routes (require login) */}
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
