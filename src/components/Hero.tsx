import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform your</span>
                <span className="block text-indigo-600">learning journey</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empower your educational experience with our comprehensive learning management system. Connect, collaborate, and achieve more together.
              </p>
              
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <p className="text-gray-500">500+ Courses</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <p className="text-gray-500">50k+ Students</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <p className="text-gray-500">Expert Instructors</p>
                </div>
              </div>
            </div>
          </main>
          
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Students collaborating"
            />
          </div>
        </div>
      </div>
    </div>
  );
}