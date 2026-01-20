from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SOSI Backend", version="1.0.0")

# Configuration CORS pour autoriser le frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "SOSI API is running", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

from app.api.analyze import router as analyze_router
app.include_router(analyze_router, prefix="/api", tags=["Analysis"])
