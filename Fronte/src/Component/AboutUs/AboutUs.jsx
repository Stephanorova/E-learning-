
import { BookOpen, Users, Trophy } from 'lucide-react';
import { CourseSection } from './CourseSection';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
               Telecommunications Training
            </h1>
            <p className="text-xl text-gray-600">
               Excellence and innovation in telecommunications education
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Notre Programme</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
              Our telecommunications training offers a comprehensive and modern approach
              to communication technologies. We combine theory and practice to
              train the experts of tomorrow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Program</h3>
              <p className="text-gray-600">In-depth training covering all aspects of telecommunications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experts in the field</h3>
              <p className="text-gray-600">Experienced teachers and industry professionals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Trophy className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recognized Certification</h3>
              <p className="text-gray-600">Diploma recognized by professionals in the sector</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Our Specialized Courses</h2>
          <CourseSection />
        </div>
      </div>
      <footer style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"5rem"}}>
        © 2024 TechSkils Learning Institute. All right Reserved.
        <img src='/image/certificat.png' alt='' width='50px' />
      </footer>
    </div>
  );
}
