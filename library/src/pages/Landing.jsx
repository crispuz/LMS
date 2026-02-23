import { BookOpen, Users, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-white text-gray-800">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b">
        <h1 className="text-xl font-bold">LMS</h1>
        <div className="space-x-6 hidden md:block">
          <Link to="/login" className="text-gray-600 hover:text-black">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Modern Library Management
          <br />
          <span className="text-blue-600">Made Simple</span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Manage books, members, circulation, and reports with a clean,
          powerful, and scalable system built for modern libraries.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Request Demo
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          <Feature
            icon={<BookOpen size={32} />}
            title="Book Management"
            desc="Add, edit, categorize and track books easily."
          />
          <Feature
            icon={<Users size={32} />}
            title="Member Management"
            desc="Manage users, roles and borrowing history."
          />
          <Feature
            icon={<BarChart3 size={32} />}
            title="Reports & Analytics"
            desc="Visual insights into borrowing trends."
          />
          <Feature
            icon={<Shield size={32} />}
            title="Secure & Reliable"
            desc="Role-based access and secure authentication."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h3 className="text-3xl font-semibold mb-12">
          How It Works
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <Step number="01" title="Register Members" />
          <Step number="02" title="Add Books" />
          <Step number="03" title="Issue & Track" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h3 className="text-3xl font-semibold">
          Ready to modernize your library?
        </h3>
        <p className="mt-4 text-blue-100">
          Start managing smarter today.
        </p>
        <Link
          to="/login"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        © {new Date().getFullYear()} LibraryMS. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div>
      <div className="text-blue-600 text-3xl font-bold">{number}</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
    </div>
  );
}