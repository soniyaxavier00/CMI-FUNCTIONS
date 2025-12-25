
export type View = 'dashboard' | 'employees' | 'jobs' | 'performance' | 'assistant' | 'reports' | 'orgchart' | 'forms';

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  status: 'Active' | 'On Leave' | 'Remote' | 'On Shift';
  avatar: string;
  joinDate: string;
}

export interface InternalForm {
  id: string;
  title: string;
  category: 'Safety' | 'Production' | 'HR' | 'Finance';
  lastUsed: string;
  status: 'Required' | 'Optional';
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  applicants: number;
  status: 'Open' | 'Closed' | 'Draft';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
