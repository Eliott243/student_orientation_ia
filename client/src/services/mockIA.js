// Simule un délai de traitement IA (3 secondes)
export const analyzeTranscript = async (file) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_RESULT);
        }, 3500);
    });
};

const MOCK_RESULT = {
    studentId: "std_12345",
    profile: {
        softSkills: [
            { name: "rigor", score: 85, color: "#10b981" }, // Green
            { name: "criticalThinking", score: 90, color: "#8b5cf6" }, // Purple
            { name: "communication", score: 75, color: "#f59e0b" }, // Amber
            { name: "creativity", score: 60, color: "#3b82f6" }, // Blue
            { name: "leadership", score: 40, color: "#ef4444" }  // Red
        ],
        academicTrend: "rising"
    },
    recommendations: [
        {
            id: 1,
            field: "law", // Key for translation
            matchScore: 92,
            tags: ["logic", "verbal"],
            careers: ["lawyer", "magistrate", "corporateJurist"],
            description: "lawDesc"
        },
        {
            id: 2,
            field: "economics",
            matchScore: 84,
            tags: ["math", "analysis"],
            careers: ["financialAnalyst", "consultant"],
            description: "economicsDesc"
        },
        {
            id: 3,
            field: "computerScience",
            matchScore: 78,
            tags: ["logic", "problemSolving"],
            careers: ["softwareEngineer", "dataScientist"],
            description: "csDesc"
        }
    ]
};
