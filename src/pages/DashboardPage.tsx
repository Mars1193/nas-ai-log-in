// File: src/pages/DashboardPage.tsx

import React from 'react';

import { useAuth } from '@/contexts/AuthContext';

import { motion } from 'framer-motion';

import { User, Cpu, BarChart2, Settings } from 'lucide-react';



const DashboardPage = () => {

const { user } = useAuth();



// Placeholder data for AI Employees

const aiEmployees = [

{ id: 1, name: 'AI Accountant', status: 'Active' },

{ id: 2, name: 'AI HR Manager', status: 'Idle' },

];



return (

<div className="container mx-auto px-4 py-8">

<motion.div

initial={{ opacity: 0, y: -20 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.5 }}

>

<div className="flex items-center space-x-4 rtl:space-x-reverse mb-10">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

<User className="w-8 h-8 text-white" />

</div>

<div>

<h1 className="text-2xl md:text-3xl font-bold">Welcome to your Dashboard</h1>

<p className="text-slate-400">{user?.email}</p>

</div>

</div>

</motion.div>



<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

{/* Main Content: AI Employee List */}

<div className="lg:col-span-2 space-y-6">

<h2 className="text-xl font-bold">My AI Employees</h2>

{aiEmployees.map((employee, index) => (

<motion.div

key={employee.id}

initial={{ opacity: 0, x: -50 }}

animate={{ opacity: 1, x: 0 }}

transition={{ duration: 0.5, delay: index * 0.1 }}

className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800 flex items-center justify-between"

>

<div className="flex items-center gap-4">

<Cpu className="w-8 h-8 text-cyan-400" />

<div>

<h3 className="font-bold text-lg">{employee.name}</h3>

<div className="flex items-center gap-2 mt-1">

<span className={`w-2 h-2 rounded-full ${employee.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>

<p className="text-sm text-slate-400">{employee.status}</p>

</div>

</div>

</div>

<button className="px-4 py-2 text-sm font-semibold bg-slate-700 hover:bg-slate-600 rounded-lg">Manage</button>

</motion.div>

))}

</div>



{/* Sidebar */}

<div className="space-y-6">

<h2 className="text-xl font-bold">Overview</h2>

<div className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800">

<h3 className="font-bold mb-4 flex items-center gap-2"><BarChart2 size={20}/> Performance</h3>

<p className="text-slate-400 text-sm">Performance metrics will be displayed here.</p>

</div>

<div className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800">

<h3 className="font-bold mb-4 flex items-center gap-2"><Settings size={20}/> Settings</h3>

<p className="text-slate-400 text-sm">Account settings and preferences.</p>

</div>

</div>

</div>

</div>

);

};



export default DashboardPage;