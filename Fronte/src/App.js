import React, { useState } from 'react';
import { 
  Home, 
  Book, 
  Users, 
  User, 
  LogIn, 
  UserPlus,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X
} from 'lucide-react';
import Accueil from './Component/Home/Home';
import CoursesPage from './Component/Courses/Courses';
import Logine from "./Component/Login/Login"
import SingUp from './Component/SingUp/SingUp'
import Teacher from './Component/Teachers/Teacher';
import { About } from './Component/AboutUs/AboutUs';




// Mock components for demonstration
const Homes = () => <div className="p-4"><Accueil/></div>;
const Courses = () => <div className="p-4"><CoursesPage/></div>;
const AboutUs = () => <div className="p-4"><About/></div>;
const Teachers = () => <div className="p-4"><Teacher/></div>;
const Login = () => <div className="p-4"><Logine/></div>;
const SingUpe = () => <div className="p-4"><SingUp/></div>;

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('/');
  
  const menuItems = [
    { path: "/", label: "Home", icon: Home, component: Homes },
    { path: "/courses", label: "Courses", icon: Book, component: Courses },
    { path: "/about", label: "About Us", icon: Users, component: AboutUs },
    { path: "/teachers", label: "Teacher", icon: User, component: Teachers },
    { path: "/login", label: "Sign In", icon: LogIn, component: Login },
    { path: "/signup", label: "Sign Up", icon: UserPlus, component: SingUpe }
  ];

  const CurrentComponent = menuItems.find(item => item.path === currentPage)?.component || Homes;

  return (
    <div className="flex">
      {/* Sidebar */}
      <div 
        className={`fixed h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out
          ${isOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Logo */}
        <div className="p-5 text-center">
          {isOpen ? (
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full mb-2" > 
                  <img src='/image/Logo.png'/>
              </div>
              <span>Techskills Learning Institute</span>
            </div>
          ) : (
            <div className="font-sans font-bold">
              <div className="w-8 h-8 rounded-full mx-auto">
              <img src='/image/Logo.png'/>
              </div>
              <span>T.S.L</span>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-10 top-3 bg-gray-900 text-white p-2 rounded-r cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Menu Items */}
        <nav className="mt-5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.path}
                onClick={() => setCurrentPage(item.path)}
                className={`flex items-center ml-3 p-4 cursor-pointer hover:bg-gray-800 transition-colors
                  ${currentPage === item.path ? 'bg-gray-800' : ''}
                `}
              >
                <Icon size={20} className={isOpen ? 'mr-4' : ''} />
                {isOpen && <span>{item.label}</span>}
              </div>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div 
          className={`absolute bottom-5 w-full flex ${
            isOpen ? 'justify-around' : 'justify-center'
          } gap-2 px-3`}
        >
          <Facebook size={20} className="cursor-pointer hover:text-blue-500" />
          <Instagram size={20} className="cursor-pointer hover:text-pink-500" />
          <Linkedin size={20} className="cursor-pointer hover:text-blue-700" />
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out p-12
          ${isOpen ? 'ml-64' : 'ml-20'}`}
      >
        <CurrentComponent />
      </div>
    </div>
  );
};

export default App;