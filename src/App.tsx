// File: src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Step 1: Import AuthProvider
import Layout from './components/Layout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './components/auth/ProfilePage';
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
      <AuthProvider>
        <Routes>
          {/* Routes without Layout */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* Routes with Layout */}
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<HomePage />} />
            <Route path="philosophy" element={<PhilosophyPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="research" element={<ResearchPage />} />

            {/* Protected Routes (require login) */}
            <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="showroom" element={<ProtectedRoute><ShowroomPage /></ProtectedRoute>} />
            <Route path="services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
            <Route path="roi-calculator" element={<ProtectedRoute><ROICalculatorPage /></ProtectedRoute>} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
