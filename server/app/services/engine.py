import random

async def extract_text_from_file(file_content: bytes, filename: str) -> str:
    """
    Simule une extraction OCR.
    Dans la V2, ici on appellera Tesseract ou Azure Vision.
    """
    print(f"Extracting text from {filename}...")
    
    # Simulation: Si le fichier est une image, on "voit" des mots clés
    # Si c'est un PDF, on retourne un faux bulletin structuré
    return """
    Bulletin Scolaire 2025-2026
    Mathématiques: 15/20 - Excellent travail, rigoureux.
    Physique: 12/20 - Des difficultés en méthode.
    Français: 16/20 - Plume très fine, esprit critique.
    Anglais: 14/20 - Participation active.
    Histoire: 17/20 - Passionné.
    Comportement: Élève curieux et dynamique, leader positif.
    """

def analyze_profile(text: str):
    """
    Analyse le texte extrait pour générer le JSON de résultats.
    """
    # Logique simple de mots-clés (Regex-like)
    scores = {
        "rigor": 50,
        "criticalThinking": 50,
        "communication": 50,
        "creativity": 50,
        "leadership": 50
    }
    
    if "rigoureux" in text or "méthode" in text: scores["rigor"] += 30
    if "critique" in text or "analyse" in text: scores["criticalThinking"] += 40
    if "Participation" in text or "oral" in text: scores["communication"] += 25
    if "leader" in text or "groupe" in text: scores["leadership"] += 35
    
    # Normalisation
    for k in scores: scores[k] = min(scores[k], 100)
    
    # Déduction des filières
    recommendations = []
    
    if scores["criticalThinking"] > 70 and scores["rigor"] > 60:
        recommendations.append({
            "id": 1,
            "field": "law",
            "matchScore": 92,
            "tags": ["logic", "verbal"],
            "careers": ["lawyer", "magistrate", "corporateJurist"],
            "description": "lawDesc"
        })
        
    recommendations.append({
        "id": 2,
        "field": "economics",
        "matchScore": 84,
        "tags": ["math", "analysis"],
        "careers": ["financialAnalyst", "consultant"],
        "description": "economicsDesc"
    })

    return {
        "studentId": "real_backend_123",
        "profile": {
            "softSkills": [
                {"name": "rigor", "score": scores["rigor"], "color": "#10b981"},
                {"name": "criticalThinking", "score": scores["criticalThinking"], "color": "#8b5cf6"},
                {"name": "communication", "score": scores["communication"], "color": "#f59e0b"},
                {"name": "creativity", "score": scores["creativity"], "color": "#3b82f6"},
                {"name": "leadership", "score": scores["leadership"], "color": "#ef4444"}
            ],
            "academicTrend": "rising"
        },
        "recommendations": recommendations
    }
