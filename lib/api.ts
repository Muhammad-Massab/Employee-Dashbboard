import type { Employee } from "@/types/employee"

// Mock data for employees
const mockEmployees: Employee[] = [
  {
    id: 1001,
    name: "Alex Johnson",
    email: "alex.johnson@company.com",
    phone: "+1 (555) 123-4567",
    position: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    status: "Active",
    hireDate: "2020-03-15",
    experience: 8,
    salary: 125000,
    bonus: 15000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1988-05-12",
    address: "123 Tech Lane, San Francisco, CA 94107",
    education: [
      { degree: "M.S. Computer Science", institution: "Stanford University", year: "2014" },
      { degree: "B.S. Computer Science", institution: "UC Berkeley", year: "2012" },
    ],
    skills: ["JavaScript", "React", "Node.js", "GraphQL", "TypeScript", "AWS"],
    lastReview: "2023-01-15",
    nextReview: "2024-01-15",
    benefits: ["Health Insurance", "401(k)", "Stock Options", "Flexible Work Hours"],
    achievements: [
      { title: "Employee of the Month", date: "November 2023" },
      { title: "Led successful migration to microservices", date: "June 2023" },
      { title: "Reduced API response time by 40%", date: "March 2022" },
    ],
    activities: [
      { description: "Completed quarterly performance review", date: "3 days ago" },
      { description: "Submitted new feature proposal", date: "1 week ago" },
      { description: "Resolved critical production bug", date: "2 weeks ago" },
    ],
    documents: [
      { name: "Performance Review 2023.pdf", date: "Jan 15, 2023", size: "2.4 MB" },
      { name: "Employment Contract.pdf", date: "Mar 15, 2020", size: "1.8 MB" },
      { name: "Project Proposal - Q2 2023.docx", date: "Apr 05, 2023", size: "950 KB" },
    ],
    history: [
      {
        position: "Senior Software Engineer",
        department: "Engineering",
        period: "Mar 2020 - Present",
        description: "Leading development of core platform services and mentoring junior engineers.",
      },
      {
        position: "Software Engineer",
        department: "Product Development",
        period: "Jun 2017 - Mar 2020",
        description: "Developed and maintained key features for the company's flagship product.",
      },
    ],
  },
  {
    id: 1002,
    name: "Samantha Lee",
    email: "samantha.lee@company.com",
    phone: "+1 (555) 234-5678",
    position: "Product Manager",
    department: "Product",
    location: "New York, NY",
    status: "Active",
    hireDate: "2019-07-22",
    experience: 6,
    salary: 135000,
    bonus: 20000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1990-11-30",
    address: "456 Product Ave, New York, NY 10001",
    education: [
      { degree: "MBA", institution: "Columbia Business School", year: "2017" },
      { degree: "B.A. Economics", institution: "NYU", year: "2013" },
    ],
    skills: ["Product Strategy", "User Research", "Agile", "Roadmapping", "Data Analysis", "Wireframing"],
    lastReview: "2023-02-10",
    nextReview: "2024-02-10",
    benefits: ["Health Insurance", "401(k)", "Stock Options", "Education Stipend"],
    achievements: [
      { title: "Led product launch with 50k+ first-week users", date: "October 2023" },
      { title: "Increased user retention by 25%", date: "May 2023" },
      { title: "Product of the Year - Internal Awards", date: "December 2022" },
    ],
    activities: [
      { description: "Finalized Q3 product roadmap", date: "2 days ago" },
      { description: "Conducted user research session", date: "1 week ago" },
      { description: "Presented product metrics to executive team", date: "3 weeks ago" },
    ],
    documents: [
      { name: "Product Roadmap 2023.pdf", date: "Dec 10, 2022", size: "3.2 MB" },
      { name: "User Research Findings.pdf", date: "Sep 05, 2023", size: "5.7 MB" },
      { name: "Performance Review 2023.pdf", date: "Feb 10, 2023", size: "1.9 MB" },
    ],
    history: [
      {
        position: "Product Manager",
        department: "Product",
        period: "Jul 2019 - Present",
        description: "Managing the product lifecycle from conception to launch, working with cross-functional teams.",
      },
      {
        position: "Associate Product Manager",
        department: "Product",
        period: "Mar 2017 - Jul 2019",
        description: "Assisted in product development and gathered user feedback to improve product features.",
      },
    ],
  },
  {
    id: 1003,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    phone: "+1 (555) 345-6789",
    position: "UX Designer",
    department: "Design",
    location: "Seattle, WA",
    status: "Active",
    hireDate: "2021-02-10",
    experience: 5,
    salary: 110000,
    bonus: 10000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1992-08-15",
    address: "789 Design Blvd, Seattle, WA 98101",
    education: [
      { degree: "M.F.A. Design", institution: "Rhode Island School of Design", year: "2018" },
      { degree: "B.F.A. Graphic Design", institution: "Parsons School of Design", year: "2015" },
    ],
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
    lastReview: "2023-03-05",
    nextReview: "2024-03-05",
    benefits: ["Health Insurance", "401(k)", "Creative Software Stipend", "Flexible Work Hours"],
    achievements: [
      { title: "Redesigned core product increasing user engagement by 35%", date: "August 2023" },
      { title: "Created company-wide design system", date: "January 2023" },
      { title: "Design award for mobile app interface", date: "November 2022" },
    ],
    activities: [
      { description: "Completed user testing for new feature", date: "5 days ago" },
      { description: "Updated design system documentation", date: "2 weeks ago" },
      { description: "Presented design concepts to product team", date: "3 weeks ago" },
    ],
    documents: [
      { name: "Design System Documentation.pdf", date: "Jan 20, 2023", size: "8.5 MB" },
      { name: "User Testing Results Q2 2023.pdf", date: "Jun 15, 2023", size: "4.2 MB" },
      { name: "Performance Review 2023.pdf", date: "Mar 05, 2023", size: "1.7 MB" },
    ],
    history: [
      {
        position: "UX Designer",
        department: "Design",
        period: "Feb 2021 - Present",
        description: "Creating user-centered designs and improving the overall user experience of products.",
      },
      {
        position: "UI Designer",
        department: "Marketing",
        period: "Sep 2018 - Feb 2021",
        description: "Designed interfaces for marketing campaigns and company website.",
      },
    ],
  },
  {
    id: 1004,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    phone: "+1 (555) 456-7890",
    position: "Marketing Director",
    department: "Marketing",
    location: "Austin, TX",
    status: "Active",
    hireDate: "2018-09-05",
    experience: 10,
    salary: 145000,
    bonus: 25000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1985-04-22",
    address: "101 Market Street, Austin, TX 78701",
    education: [
      { degree: "MBA, Marketing", institution: "University of Texas", year: "2013" },
      { degree: "B.B.A. Marketing", institution: "Texas A&M University", year: "2008" },
    ],
    skills: ["Digital Marketing", "Brand Strategy", "Content Marketing", "SEO/SEM", "Analytics", "Team Leadership"],
    lastReview: "2023-04-12",
    nextReview: "2024-04-12",
    benefits: ["Health Insurance", "401(k)", "Stock Options", "Marketing Conference Budget"],
    achievements: [
      { title: "Increased marketing ROI by 40% year-over-year", date: "December 2023" },
      { title: "Led rebranding initiative that increased brand recognition by 30%", date: "July 2023" },
      { title: "Marketing Campaign of the Year - Industry Award", date: "March 2022" },
    ],
    activities: [
      { description: "Finalized Q4 marketing budget", date: "1 day ago" },
      { description: "Reviewed campaign performance metrics", date: "4 days ago" },
      { description: "Led marketing team strategy session", date: "2 weeks ago" },
    ],
    documents: [
      { name: "Marketing Strategy 2023.pptx", date: "Nov 30, 2022", size: "6.8 MB" },
      { name: "Campaign Performance Q3 2023.xlsx", date: "Oct 05, 2023", size: "2.3 MB" },
      { name: "Performance Review 2023.pdf", date: "Apr 12, 2023", size: "1.9 MB" },
    ],
    history: [
      {
        position: "Marketing Director",
        department: "Marketing",
        period: "Sep 2018 - Present",
        description: "Overseeing all marketing initiatives and leading a team of marketing professionals.",
      },
      {
        position: "Senior Marketing Manager",
        department: "Marketing",
        period: "Jun 2015 - Sep 2018",
        description: "Managed marketing campaigns and coordinated with external agencies.",
      },
      {
        position: "Marketing Manager",
        department: "Marketing",
        period: "Mar 2013 - Jun 2015",
        description: "Executed marketing strategies and analyzed campaign performance.",
      },
    ],
  },
  {
    id: 1005,
    name: "David Kim",
    email: "david.kim@company.com",
    phone: "+1 (555) 567-8901",
    position: "Data Scientist",
    department: "Data",
    location: "Chicago, IL",
    status: "Active",
    hireDate: "2020-11-15",
    experience: 7,
    salary: 130000,
    bonus: 15000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1989-12-03",
    address: "222 Data Drive, Chicago, IL 60601",
    education: [
      { degree: "Ph.D. Statistics", institution: "University of Chicago", year: "2016" },
      { degree: "M.S. Computer Science", institution: "University of Illinois", year: "2013" },
      { degree: "B.S. Mathematics", institution: "Northwestern University", year: "2011" },
    ],
    skills: ["Python", "R", "Machine Learning", "Deep Learning", "SQL", "Data Visualization", "Big Data"],
    lastReview: "2023-05-20",
    nextReview: "2024-05-20",
    benefits: ["Health Insurance", "401(k)", "Conference Budget", "Remote Work Option"],
    achievements: [
      { title: "Developed predictive model saving $2M annually", date: "September 2023" },
      { title: "Published research paper in leading data science journal", date: "April 2023" },
      { title: "Optimized data pipeline reducing processing time by 60%", date: "January 2022" },
    ],
    activities: [
      { description: "Completed model validation for new algorithm", date: "2 days ago" },
      { description: "Presented findings to executive team", date: "1 week ago" },
      { description: "Collaborated with engineering on data infrastructure", date: "3 weeks ago" },
    ],
    documents: [
      { name: "Predictive Model Documentation.pdf", date: "Sep 10, 2023", size: "7.2 MB" },
      { name: "Research Paper - Optimization Methods.pdf", date: "Apr 15, 2023", size: "3.8 MB" },
      { name: "Performance Review 2023.pdf", date: "May 20, 2023", size: "1.8 MB" },
    ],
    history: [
      {
        position: "Data Scientist",
        department: "Data",
        period: "Nov 2020 - Present",
        description: "Developing predictive models and analyzing large datasets to drive business decisions.",
      },
      {
        position: "Data Analyst",
        department: "Business Intelligence",
        period: "Jul 2016 - Nov 2020",
        description: "Analyzed business data and created reports to support strategic initiatives.",
      },
    ],
  },
  {
    id: 1006,
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    phone: "+1 (555) 678-9012",
    position: "HR Manager",
    department: "Human Resources",
    location: "Denver, CO",
    status: "Active",
    hireDate: "2019-04-18",
    experience: 9,
    salary: 115000,
    bonus: 12000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1987-07-14",
    address: "333 HR Avenue, Denver, CO 80202",
    education: [
      { degree: "M.S. Human Resources", institution: "Cornell University", year: "2014" },
      { degree: "B.A. Psychology", institution: "University of Colorado", year: "2010" },
    ],
    skills: [
      "Talent Acquisition",
      "Employee Relations",
      "Conflict Resolution",
      "Benefits Administration",
      "HRIS",
      "Training & Development",
    ],
    lastReview: "2023-06-15",
    nextReview: "2024-06-15",
    benefits: ["Health Insurance", "401(k)", "Professional Development", "Flexible Work Hours"],
    achievements: [
      { title: "Reduced employee turnover by 20%", date: "December 2023" },
      { title: "Implemented new HRIS system company-wide", date: "August 2023" },
      { title: "Developed diversity and inclusion program", date: "March 2022" },
    ],
    activities: [
      { description: "Conducted employee satisfaction survey", date: "1 week ago" },
      { description: "Finalized new benefits package", date: "2 weeks ago" },
      { description: "Led manager training workshop", date: "1 month ago" },
    ],
    documents: [
      { name: "Employee Handbook 2023.pdf", date: "Jan 05, 2023", size: "4.5 MB" },
      { name: "Benefits Overview 2023.pdf", date: "Jan 10, 2023", size: "2.7 MB" },
      { name: "Performance Review 2023.pdf", date: "Jun 15, 2023", size: "1.9 MB" },
    ],
    history: [
      {
        position: "HR Manager",
        department: "Human Resources",
        period: "Apr 2019 - Present",
        description:
          "Managing all HR functions including recruitment, employee relations, and benefits administration.",
      },
      {
        position: "HR Specialist",
        department: "Human Resources",
        period: "Sep 2015 - Apr 2019",
        description: "Handled employee relations issues and assisted with recruitment processes.",
      },
      {
        position: "HR Assistant",
        department: "Human Resources",
        period: "Jun 2014 - Sep 2015",
        description: "Provided administrative support to the HR department and assisted with onboarding.",
      },
    ],
  },
  {
    id: 1007,
    name: "James Taylor",
    email: "james.taylor@company.com",
    phone: "+1 (555) 789-0123",
    position: "Financial Analyst",
    department: "Finance",
    location: "Boston, MA",
    status: "Active",
    hireDate: "2021-08-03",
    experience: 6,
    salary: 105000,
    bonus: 10000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1991-02-28",
    address: "444 Finance Street, Boston, MA 02110",
    education: [
      { degree: "M.B.A. Finance", institution: "Boston University", year: "2017" },
      { degree: "B.S. Finance", institution: "Northeastern University", year: "2014" },
    ],
    skills: ["Financial Modeling", "Forecasting", "Budgeting", "Excel", "SQL", "PowerBI", "Risk Analysis"],
    lastReview: "2023-07-10",
    nextReview: "2024-07-10",
    benefits: ["Health Insurance", "401(k)", "Stock Options", "Professional Certification Support"],
    achievements: [
      { title: "Developed financial model saving $1.5M annually", date: "November 2023" },
      { title: "Streamlined budget process reducing cycle time by 30%", date: "July 2023" },
      { title: "Earned CFA certification", date: "May 2022" },
    ],
    activities: [
      { description: "Completed Q4 financial forecast", date: "3 days ago" },
      { description: "Presented budget variance analysis", date: "2 weeks ago" },
      { description: "Updated cash flow projections", date: "3 weeks ago" },
    ],
    documents: [
      { name: "Annual Budget 2023.xlsx", date: "Dec 15, 2022", size: "3.2 MB" },
      { name: "Q3 Financial Analysis.pptx", date: "Oct 10, 2023", size: "5.1 MB" },
      { name: "Performance Review 2023.pdf", date: "Jul 10, 2023", size: "1.7 MB" },
    ],
    history: [
      {
        position: "Financial Analyst",
        department: "Finance",
        period: "Aug 2021 - Present",
        description:
          "Analyzing financial data, preparing reports, and making recommendations to improve financial performance.",
      },
      {
        position: "Junior Financial Analyst",
        department: "Finance",
        period: "May 2018 - Aug 2021",
        description: "Assisted with financial reporting and analysis, budget preparation, and forecasting.",
      },
    ],
  },
  {
    id: 1008,
    name: "Lisa Martinez",
    email: "lisa.martinez@company.com",
    phone: "+1 (555) 890-1234",
    position: "Customer Success Manager",
    department: "Customer Success",
    location: "Miami, FL",
    status: "Active",
    hireDate: "2020-06-22",
    experience: 7,
    salary: 95000,
    bonus: 8000,
    avatar: "/placeholder.svg?height=400&width=400",
    birthDate: "1990-09-17",
    address: "555 Customer Lane, Miami, FL 33101",
    education: [{ degree: "B.A. Business Administration", institution: "University of Miami", year: "2013" }],
    skills: [
      "Customer Relationship Management",
      "Account Management",
      "Problem Solving",
      "Communication",
      "Salesforce",
      "Presentation",
    ],
    lastReview: "2023-08-05",
    nextReview: "2024-08-05",
    benefits: ["Health Insurance", "401(k)", "Wellness Program", "Remote Work Option"],
    achievements: [
      { title: "Achieved 95% customer retention rate", date: "December 2023" },
      { title: "Increased customer satisfaction score by 15%", date: "June 2023" },
      { title: "Developed new customer onboarding process", date: "February 2022" },
    ],
    activities: [
      { description: "Conducted quarterly business review with key client", date: "2 days ago" },
      { description: "Resolved escalated customer issue", date: "1 week ago" },
      { description: "Led customer success team meeting", date: "2 weeks ago" },
    ],
    documents: [
      { name: "Customer Success Playbook.pdf", date: "Mar 15, 2023", size: "4.8 MB" },
      { name: "Client Health Scorecard Q3 2023.xlsx", date: "Oct 05, 2023", size: "2.1 MB" },
      { name: "Performance Review 2023.pdf", date: "Aug 05, 2023", size: "1.8 MB" },
    ],
    history: [
      {
        position: "Customer Success Manager",
        department: "Customer Success",
        period: "Jun 2020 - Present",
        description:
          "Managing customer relationships, ensuring customer satisfaction, and driving retention and growth.",
      },
      {
        position: "Account Manager",
        department: "Sales",
        period: "Apr 2017 - Jun 2020",
        description: "Managed client accounts, identified upsell opportunities, and maintained client relationships.",
      },
      {
        position: "Customer Support Specialist",
        department: "Support",
        period: "Jan 2015 - Apr 2017",
        description: "Provided technical support and resolved customer issues.",
      },
    ],
  },
]

// Function to fetch employees
export async function fetchEmployees(): Promise<Employee[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Return mock data
  return mockEmployees
}
