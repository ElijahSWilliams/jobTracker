export type Jobs = {
    id: string;
    company: string;
    position: string;
    status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected' | 'Saved';
}

export const initialJobs: Jobs[] = [
    {
        id: "1",
        company: "Google",
        position: "Frontend Developer",
        status: "Applied",
    },
    {
        id: "2",
        company: "Amazon",
        position: "UI Engineer",
        status: "Interviewing",
    },
    {
        id: "3",
        company: "Meta",
        position: "React Developer",
        status: "Offer",
    },
    {
        id: "4",
        company: "Netflix",
        position: "Full Stack Engineer",
        status: "Rejected",
    },
    {
        id: "4",
        company: "Target",
        position: "Full Stack Engineer",
        status: "Saved",
    },
    {
        id: "4",
        company: "Walmart",
        position: "Full Stack Engineer",
        status: "Offer",
    }
];