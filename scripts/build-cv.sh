#!/bin/sh
# Regenera los PDF que descarga el botón «Descargar CV». Requiere Google Chrome.
cd "$(dirname "$0")/.." || exit 1
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for pair in es-ES:ES en-GB:EN; do
  profile=$(mktemp -d)
  "$chrome" --headless=new --disable-gpu --no-pdf-header-footer \
    --accept-lang="${pair%%:*}" --lang="${pair%%:*}" --virtual-time-budget=5000 \
    --user-data-dir="$profile" --print-to-pdf="assets/David_Correa_CV_${pair##*:}.pdf" \
    "file://$PWD/index.html" 2>/dev/null
  rm -rf "$profile"
done
