import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from "./pages/HomePage";
import { ShowroomPage } from './pages/ShowroomPage';
import ServicesPage from './pages/ServicesPage';
import ROICalculatorPage from './pages/ROICalculatorPage';
import PhilosophyPage from './pages/PhilosophyPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFound from './pages/NotFound';
import ContactPage from './pages/ContactPage';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ProfilePage } from '@/components/auth/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;