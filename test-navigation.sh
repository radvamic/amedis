#!/bin/bash

# Test script for navigating products.html and taking screenshots
# This script will open the page in Safari and navigate through the structure

BASE_URL="http://localhost:8080/products.html"
SCREENSHOT_DIR="test-screenshots"

# Create screenshot directory
mkdir -p "$SCREENSHOT_DIR"

echo "Starting navigation test..."

# Function to take screenshot with delay
take_screenshot() {
    local name=$1
    local delay=${2:-2}
    echo "Waiting ${delay}s before taking screenshot: $name"
    sleep $delay
    screencapture -x "$SCREENSHOT_DIR/$name"
    echo "Screenshot saved: $SCREENSHOT_DIR/$name"
}

# Function to open URL in Safari
open_url() {
    local url=$1
    echo "Opening: $url"
    osascript -e "tell application \"Safari\" to open location \"$url\""
    osascript -e "tell application \"Safari\" to activate"
}

# 1. Home view - should show two division cards (Lab and Medical)
echo "=== Step 1: Home/Landing View ==="
open_url "$BASE_URL"
take_screenshot "01-home-view.png" 3

# 2. Click on "Laboratorní technika" division
echo "=== Step 2: Laboratorní technika Division ==="
open_url "${BASE_URL}#lab"
take_screenshot "02-lab-division.png" 2

# 3. Click on a category (SCIEX LC-MS/MS systémy)
echo "=== Step 3: SCIEX LC-MS/MS systémy Category ==="
open_url "${BASE_URL}#lab/hmotnostni-spektometrie"
take_screenshot "03-category-view.png" 2

# 4. Click on a subcategory to see products
echo "=== Step 4: SCIEX ZenoTOF Subcategory ==="
open_url "${BASE_URL}#lab/hmotnostni-spektometrie/sciex-zenotof"
take_screenshot "04-subcategory-products.png" 2

# 5. Click on a product
echo "=== Step 5: Product Detail - SCIEX ZenoTOF 7600 ==="
open_url "${BASE_URL}#product/zenotof-7600-253"
take_screenshot "05-product-detail.png" 2

# 6. Test Medical division
echo "=== Step 6: Zdravotnická technika Division ==="
open_url "${BASE_URL}#medical"
take_screenshot "06-medical-division.png" 2

# 7. Medical category
echo "=== Step 7: Lineární urychlovače Category ==="
open_url "${BASE_URL}#medical/linearni-urychlovace"
take_screenshot "07-medical-category.png" 2

# 8. Medical product
echo "=== Step 8: Product Detail - Ethos ==="
open_url "${BASE_URL}#product/ethos-229"
take_screenshot "08-medical-product.png" 2

echo ""
echo "=== Navigation test complete! ==="
echo "Screenshots saved in: $SCREENSHOT_DIR"
echo ""
echo "To view screenshots:"
echo "  open $SCREENSHOT_DIR"
