import React from 'react';
import { BookOpen, Clock, BarChart, Calendar, Settings, Search } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Introduction to AI & Machine Learning",
    progress: 65,
    nextLesson: "Neural Networks Basics",
    instructor: "Dr. Sarah Chen",
    duration: "2h 15m remaining"
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    progress: 42,
    nextLesson: "React Hooks Deep Dive",
    instructor: "Mark Thompson",
    duration: "3h 45m remaining"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Live Coding Session",
    time: "Today, 3:00 PM",
    type: "Workshop"
  },
  {
    id: 2,
    title: "AI Ethics Discussion",
    time: "Tomorrow, 2:00 PM",
    type: "Seminar"
  }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search courses, lessons, or resources..."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
            <div className="space-y-6">
              {courses.map(course => (
                <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                    <button className="btn-primary">Continue</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Analytics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Hours Learned</p>
                    <p className="text-2xl font-bold text-gray-900">24.5</p>
                  </div>
                  <Clock className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Courses</p>
                    <p className="text-2xl font-bold text-gray-900">4</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Certificates</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                  <BarChart className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.time}</p>
                    <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 btn-secondary">
              View Calendar
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg shadow-sm p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Join Live Session
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Submit Assignment
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Schedule Mentoring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}