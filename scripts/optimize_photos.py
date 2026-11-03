"""Prépare les photos de public/photos : WebP de 960 px maximum et vignettes de 600 px.

Déposez vos photos (.jpg, .png ou .webp) dans public/photos sous le nom <slug du produit>,
puis lancez : npm run photos (nécessite Python et Pillow : pip install pillow).
"""
from pathlib import Path
from PIL import Image, ImageOps

photos = Path(__file__).resolve().parent.parent / "public" / "photos"
thumbs = photos / "thumbs"
thumbs.mkdir(exist_ok=True)

for source in sorted(photos.iterdir()):
    if source.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        continue
    target = source.with_suffix(".webp")
    image = ImageOps.exif_transpose(Image.open(source)).convert("RGB")
    # Une photo déjà au bon format n'est pas réencodée, pour ne pas perdre en qualité.
    if source != target or max(image.size) > 960:
        full = image.copy()
        full.thumbnail((960, 960))
        full.save(target, "WEBP", quality=80, method=6)
        if source != target:
            source.unlink()
    thumb = thumbs / target.name
    if not thumb.exists() or thumb.stat().st_mtime < target.stat().st_mtime:
        image.thumbnail((600, 600))
        image.save(thumb, "WEBP", quality=72, method=6)

# Retire les vignettes dont la photo n'existe plus.
for thumb in thumbs.iterdir():
    if not (photos / thumb.name).exists():
        thumb.unlink()
