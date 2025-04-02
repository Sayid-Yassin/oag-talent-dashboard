import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from '@/components/ui/input';
import { CalendarDays, User, LogOut, PlusCircle, Search, FileText, Calendar, BarChart2, Settings } from 'lucide-react';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('meetings');

  const sections = {
    meetings: <Meetings />,
    candidates: <Candidates />,
    tasks: <Tasks />,
    goals: <Goals />,
    reports: <Reports />,
    calendar: <CalendarView />,
    profile: <Profile />,
  };

  return (
    <div className="grid grid-cols-5 min-h-screen">
      {/* Sidebar */}
      <div className="col-span-1 bg-gray-100 p-4 space-y-4">
        <div className="flex items-center gap-2">
          <User /> <span>Jane Doe</span>
        </div>
        <Button variant="ghost" onClick={() => setActiveSection('meetings')}>Meetings</Button>
        <Button variant="ghost" onClick={() => setActiveSection('candidates')}>Candidates</Button>
        <Button variant="ghost" onClick={() => setActiveSection('tasks')}>Tasks</Button>
        <Button variant="ghost" onClick={() => setActiveSection('goals')}>Goals</Button>
        <Button variant="ghost" onClick={() => setActiveSection('reports')}><BarChart2 className="mr-2 h-4 w-4" /> Reports</Button>
        <Button variant="ghost" onClick={() => setActiveSection('calendar')}><Calendar className="mr-2 h-4 w-4" /> Calendar</Button>
        <Button variant="ghost" onClick={() => setActiveSection('profile')}><Settings className="mr-2 h-4 w-4" /> Profile</Button>
        <Button variant="ghost" className="mt-10 text-red-600">
          <LogOut className="mr-2" /> Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="col-span-4 p-6 space-y-4">
        {sections[activeSection]}
      </div>
    </div>
  );
}

function Meetings() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Upcoming Meetings</h2>
        <div className="space-y-2">
          <MeetingItem time="3:15 - 3:45" title="Mini Soman; Mean stack developer; 4th phase interview" />
          <MeetingItem time="9:00 - 9:30" title="Strategic Review – Auditor General" />
          <MeetingItem time="10:30 - 11:00" title="Digitalisation Update – ICT Manager" />
        </div>
      </CardContent>
    </Card>
  );
}

function MeetingItem({ time, title }) {
  return (
    <div className="border p-3 rounded-lg shadow-sm">
      <p className="text-sm text-gray-600">{time}</p>
      <p className="font-medium">{title}</p>
    </div>
  );
}

function Candidates() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Candidates</h2>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Candidate
          </Button>
        </div>
        <Input placeholder="Search candidates..." className="mb-4" />
        <CandidateItem name="Mini Soman" role="Mean Stack Developer" status="4th phase interview" />
      </CardContent>
    </Card>
  );
}

function CandidateItem({ name, role, status }) {
  return (
    <div className="border p-3 rounded-lg mb-2 shadow-sm">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-600">{role} – {status}</p>
    </div>
  );
}

function Tasks() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <TaskItem title="IS Audit Manual" dateRange="22/04/2025 - 28/04/2025" department="ICT" />
        <TaskItem title="Training Programme" dateRange="22/04/2025 - 28/06/2025" department="HR" />
      </CardContent>
    </Card>
  );
}

function TaskItem({ title, dateRange, department }) {
  return (
    <div className="border p-3 rounded-lg mb-2 shadow-sm">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-600">{dateRange} | {department}</p>
    </div>
  );
}

function Goals() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Organisational Goals</h2>
        <GoalItem title="Digitalised Audits and New Audit Streams" status="Planning" department="ICT & IS Audit Department" />
        <GoalItem title="Strong Governance, Leadership, and Ethics" status="In Process" department="Internal Audit Department" />
      </CardContent>
    </Card>
  );
}

function GoalItem({ title, status, department }) {
  return (
    <div className="border p-3 rounded-lg mb-2 shadow-sm">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-600">{status} | {department}</p>
    </div>
  );
}

function Reports() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Reports</h2>
        <p className="text-gray-700">No reports uploaded yet. Coming soon!</p>
      </CardContent>
    </Card>
  );
}

function CalendarView() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Calendar</h2>
        <p className="text-gray-700">Your upcoming schedule and meeting plan will appear here.</p>
      </CardContent>
    </Card>
  );
}

function Profile() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <p className="text-gray-700">Edit your personal info, change password, or update preferences.</p>
      </CardContent>
    </Card>
  );
}
