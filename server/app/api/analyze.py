from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.engine import extract_text_from_file, analyze_profile
import time

router = APIRouter()

@router.post("/analyze")
async def analyze_transcript(file: UploadFile = File(...)):
    if not file.filename.endswith(('.pdf', '.jpg', '.jpeg', '.png')):
        raise HTTPException(status_code=400, detail="Format non supporté")
    
    start_time = time.time()
    
    content = await file.read()
    
    # 1. Extraction (OCR)
    text = await extract_text_from_file(content, file.filename)
    
    # 2. Analyse (IA Logic)
    result = analyze_profile(text)
    
    # Simulation de temps de calcul (pour l'effet UI)
    process_time = time.time() - start_time
    if process_time < 2:
        import asyncio
        await asyncio.sleep(2)
        
    return result
