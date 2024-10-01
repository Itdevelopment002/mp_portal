import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Heading/Heading';
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin';
import AddNewEntry from './components/AddNewEntry/addNewEntry';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import ScanGallary from './components/ScanGallary/ScanGallary';
import AddNewGrievance from './components/AddNewGrievance/AddNewGrievance';
import AllGrievanceList from './components/AllGrievanceList/AllGrievanceList';
import Footer from './components/Footer/Footer';
import FooterAdmin from './components/FooterAdmin/FooterAdmin';
import Sidebar from './components/Sidebar/Sidebar';
import AddPersonalAssistant from "./components/AddPersonalAssistant/AddPersonalAssistant";
import CompletedGrievance from "./components/CompletedGrievance/CompletedGrievance";
import InProgressGrievance from "./components/InProgressGrievance/InProgressGrievance";
import RejectedGrievance from "./components/RejectedGrievance/RejectedGrievance";
import AddBoothNo from "./components/AddBoothNo/AddBoothNo";
import AddSubject from "./components/AddSubject/AddSubject";
import AddComplaintSender from "./components/AddComplaintSender/AddComplaintSender";
import AddAppStatus from "./components/AddApplicationStatus/AddApplicationStatus";
import AddWhatsAppGroup from "./components/AddWhatsAppGroup/AddWhatsAppGroup";
import AddUser from "./components/AddUser/AddUser";
import ViewApplication from './components/ViewApplication/ViewApplication';
import EditApplication from './components/EditApplication/EditApplication';
import AddTaluka from './components/AddTaluka/AddTaluka';


function Layout({ children }) {
  const location = useLocation(); 

  const getLayout = () => {
    const path = location.pathname;

    switch (path) {
      case '/login':
        return <>{children}</>;
      case '/dashboard':
      case '/add-new-entry':
      case '/scan-gallary':
      case '/add-new-grievance':
      case '/all-grievance-list':
      case '/completed-grievance':
      case '/in-progress-grievance':
      case '/rejected-grievance':
      case '/add-personal_assistance':
      case '/add-booth-number':
      case '/add-subject':
      case '/add-taluka':
      case '/add-complaint-sender':
      case '/add-app-status':
      case '/add-whatsapp-group':
      case '/add-user':
      case '/view-application/:id':
      case '/edit-application/:id':


        return (
          <>
            <HeaderAdmin />
            <div className="d-flex" style={{ minHeight: '100vh', flexDirection: 'column' }}>
              <div className="d-flex flex-grow-1">
                <Sidebar />
                <div className="content-wrapper flex-grow-1">{children}</div>
              </div>
              <FooterAdmin />
            </div>
          </>
        );
      case '/':
        return (
          <>
            <Header />
            <div className="content-wrapper">{children}</div>
            <Footer />
          </>
        );
      default:
        return <>{children}</>; 
    }
  };

  return <>{getLayout()}</>;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-new-entry" element={<AddNewEntry />} />
          <Route path="/scan-gallary" element={<ScanGallary />} />
          <Route path="/add-new-grievance" element={<AddNewGrievance />} />
          <Route path="/all-grievance-list" element={<AllGrievanceList />} />
          <Route path="/completed-grievance" element={<CompletedGrievance />} />
          <Route path="/in-progress-grievance" element={<InProgressGrievance />} />
          <Route path="/rejected-grievance" element={<RejectedGrievance />} />
          <Route path="/add-personal_assistance" element={<AddPersonalAssistant />} />
          <Route path="/add-booth-number" element={<AddBoothNo />} />
          <Route path="/add-subject" element={<AddSubject />} />
          <Route path="/add-taluka" element={<AddTaluka />} />
          <Route path="/add-complaint-sender" element={<AddComplaintSender />} />
          <Route path="/add-app-status" element={<AddAppStatus />} />
          <Route path="/add-whatsapp-group" element={<AddWhatsAppGroup />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/view-application/:id" element={<ViewApplication />} />
          <Route path="/edit-application/:id" element={<EditApplication />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

