import { Network, Radio, Wifi, Signal } from 'lucide-react';

const courses = [
  {
    icon: <Network className="h-8 w-8" />,
    title: 'Communication Networks',
    description: 'Fundamentals of networks and communication protocols'
  },
  {
    icon: <Radio className="h-8 w-8" />,
    title: 'Radio Systems',
    description: 'Principles of radio transmission and wireless technologies'
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: 'Wireless Technologies',
    description: 'WiFi, Bluetooth and mobile communications'
  },
  {
    icon: <Signal className="h-8 w-8" />,
    title: 'Signal Processing',
    description: 'Analysis and processing of digital signals'
  }
];

export function CourseSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {courses.map((course, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="text-indigo-600 mb-4">{course.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
        </div>
      ))}
    </div>
  );
}