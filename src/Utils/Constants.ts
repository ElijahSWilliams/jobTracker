
export const baseURL = "http://localhost:3005"

export type Jobs = {
    id: string;
    company: string;
    position: string;
    dateAdded: string;
    location?: string; //optional field
    status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected' | 'Saved';
}

export type JobForm = {
    company: string;
    position: string;
    status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected' | 'Saved';
};

export const initialJobs: Jobs[] = [
    {
        id: "1",
        company: "Google",
        position: "Frontend Developer",
        status: "Applied",
        dateAdded: "7/7/26",
        location: "",
    },
    {
        id: "2",
        company: "Amazon",
        position: "UI Engineer",
        status: "Interviewing",
        dateAdded: "7/7/26",
        location: "",
    },
    {
        id: "3",
        company: "Meta",
        position: "React Developer",
        status: "Applied",
        dateAdded: "7/7/26",
        location: "",
    },
    {
        id: "4",
        company: "Netflix",
        position: "Full Stack Engineer",
        status: "Offer",
        dateAdded: "7/7/26",
        location: "",
    },
    {
        id: "5",
        company: "Target",
        position: "Full Stack Engineer",
        status: "Saved",
        dateAdded: "7/7/26",
        location: "",
    },
    {
        id: "6",
        company: "Walmart",
        position: "Full Stack Engineer",
        status: "Saved",
        dateAdded: "7/7/26",
        location: "",
    },
    /*     {
            id: "4",
            company: "Juno",
            position: "Full Stack Engineer",
            status: "Saved",
        },
        {
            id: "4",
            company: "Mars",
            position: "Full Stack Engineer",
            status: "Saved",
        } */
];