import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MembershipRegistration from './pages/MembershipRegistration.jsx'
import MemberDirectory from './pages/MemberDirectory.jsx'
import Activities from './pages/Activities.jsx'
import Attendance from './pages/Attendance.jsx'
import Penalties from './pages/Penalties.jsx'
import Announcements from './pages/Announcements.jsx'
import MemberView from './pages/MemberView.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="registration" element={<MembershipRegistration />} />
          <Route path="members" element={<MemberDirectory />} />
          <Route path="activities" element={<Activities />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="penalties" element={<Penalties />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="member-view" element={<MemberView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
