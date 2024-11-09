import React from 'react';
import { BookOpen, Video, MessageSquare, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    name: 'Interactive Courses',
    description: 'Engage with dynamic content designed to enhance your learning experience.',
    icon: BookOpen,
  },
  {
    name: 'Live Sessions',
    description: 'Join real-time classes and workshops with industry experts.',
    icon: Video,
  },
  {
    name: 'Community Support',
    description: 'Connect with peers and mentors in our vibrant learning community.',
    icon: MessageSquare,
  },
  {
    name: 'Certifications',
    description: 'Earn recognized certificates upon course completion.',
    icon: Award,
  },
  {
    name: 'Flexible Learning',
    description: 'Learn at your own pace with 24/7 access to course materials.',
    icon: Clock,
  },
  {
    name: 'Expert Instructors',
    description: 'Learn from industry professionals with real-world experience.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools and resources you need to excel in your learning journey.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute -top-3 -left-3">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 pt-4">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}