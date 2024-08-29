import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthLayout, UnauthorizedLayout } from "./views/layouts/index.js";
import ProtectedRoute from "./shared/ProtectedRoute/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <ProtectedRoute>
              <AuthLayout />
            </ProtectedRoute>
          }
        />

        <Route path="/*" element={<UnauthorizedLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
