#!/bin/bash

echo "=== Testing Landing Page Integration ==="
echo ""

# Close Cursor to prevent it from being captured
osascript -e 'tell application "Cursor" to quit' 2>/dev/null || true
sleep 1

# Step 1: Navigate to landing page
echo "Step 1: Opening landing page..."
osascript << 'EOF1'
tell application "Safari"
    activate
    set bounds of window 1 to {0, 0, 1400, 900}
    open location "http://localhost:8080/index.html"
end tell
EOF1

sleep 4

# Take full page screenshot
screencapture -x test-screenshots/10-landing-full.png
echo "  ✓ Screenshot taken: 10-landing-full.png"

# Step 2: Scroll to products section
echo ""
echo "Step 2: Scrolling to products section..."
osascript << 'EOF2'
tell application "Safari"
    activate
    do JavaScript "document.getElementById('products').scrollIntoView({behavior: 'smooth', block: 'center'});" in document 1
end tell
EOF2

sleep 2
screencapture -x test-screenshots/11-products-section.png
echo "  ✓ Screenshot taken: 11-products-section.png"

# Step 3: Check nav bar link
echo ""
echo "Step 3: Checking navigation bar 'Produkty' link..."
osascript << 'EOF3'
tell application "Safari"
    activate
    set produktyLink to do JavaScript "document.querySelector('a[href=\"products.html\"]').href" in document 1
end tell
EOF3

sleep 1
screencapture -x test-screenshots/12-navbar.png
echo "  ✓ Screenshot taken: 12-navbar.png"

# Step 4: Test Laboratorní technika card click
echo ""
echo "Step 4: Clicking 'Laboratorní technika' card..."
osascript << 'EOF4'
tell application "Safari"
    activate
    do JavaScript "document.querySelector('a[href=\"products.html#lab\"]').click();" in document 1
end tell
EOF4

sleep 3
screencapture -x test-screenshots/13-after-lab-click.png
echo "  ✓ Screenshot taken: 13-after-lab-click.png"

# Step 5: Check URL
echo ""
echo "Step 5: Verifying URL after click..."
CURRENT_URL=$(osascript -e 'tell application "Safari" to return URL of document 1')
echo "  Current URL: $CURRENT_URL"

if [[ "$CURRENT_URL" == *"products.html#lab"* ]]; then
    echo "  ✅ SUCCESS: URL correctly navigated to products.html#lab"
else
    echo "  ❌ ISSUE: URL is not products.html#lab"
fi

# Step 6: Go back to landing page
echo ""
echo "Step 6: Going back to landing page..."
osascript << 'EOF5'
tell application "Safari"
    activate
    do JavaScript "history.back();" in document 1
end tell
EOF5

sleep 2
screencapture -x test-screenshots/14-back-to-landing.png
echo "  ✓ Screenshot taken: 14-back-to-landing.png"

# Step 7: Test navbar Produkty link
echo ""
echo "Step 7: Testing navbar 'Produkty' link..."
osascript << 'EOF6'
tell application "Safari"
    activate
    do JavaScript "document.querySelector('a[href=\"products.html\"]').scrollIntoView({block: 'center'});" in document 1
end tell
EOF6

sleep 1
screencapture -x test-screenshots/15-navbar-produkty.png
echo "  ✓ Screenshot taken: 15-navbar-produkty.png"

# Click navbar link
osascript << 'EOF7'
tell application "Safari"
    activate
    do JavaScript "document.querySelector('.nav-links a[href=\"products.html\"]').click();" in document 1
end tell
EOF7

sleep 3
screencapture -x test-screenshots/16-after-navbar-click.png
echo "  ✓ Screenshot taken: 16-after-navbar-click.png"

# Check final URL
FINAL_URL=$(osascript -e 'tell application "Safari" to return URL of document 1')
echo ""
echo "Step 8: Final URL check..."
echo "  Final URL: $FINAL_URL"

if [[ "$FINAL_URL" == *"products.html"* ]]; then
    echo "  ✅ SUCCESS: Navbar link correctly navigates to products.html"
else
    echo "  ❌ ISSUE: Navbar link does not navigate to products.html"
fi

echo ""
echo "=== Test Complete ==="
echo "All screenshots saved in test-screenshots/"
