# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Booking.spec.ts >> BOOKING APPLICATION
- Location: tests\Booking.spec.ts:3:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.ovrtravels.com/index.html", waiting until "load"

```

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\Raju A\AppData\Local\ms-playwright\chromium_headless_shell-1243\chrome-headless-shell-win64\chrome-headless-shell.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,BlockOriginHeaderModificationOnRedirect,Translate,AutoDeElevate,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --disable-updater-scheduler --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=C:\Users\RAJUA~1\AppData\Local\Temp\playwright_chromiumdev_profile-NQkoZd --remote-debugging-pipe --no-startup-window
<launched> pid=20368
[pid=20368][err] [0918/215543.035:INFO:CONSOLE:2974] "Mixed Content: The page at 'https://www.ovrtravels.com/index.html' was loaded over HTTPS, but requested an insecure font 'http://cms.ticketsimply.com/fonts/glyphicons-halflings-regular.woff2'. This request has been blocked; the content must be served over HTTPS.", source: https://www.ovrtravels.com/index.html (2974)
[pid=20368][err] [0918/215543.039:INFO:CONSOLE:2974] "Mixed Content: The page at 'https://www.ovrtravels.com/index.html' was loaded over HTTPS, but requested an insecure font 'http://cms.ticketsimply.com/fonts/glyphicons-halflings-regular.woff'. This request has been blocked; the content must be served over HTTPS.", source: https://www.ovrtravels.com/index.html (2974)
[pid=20368][err] [0918/215543.040:INFO:CONSOLE:2974] "Mixed Content: The page at 'https://www.ovrtravels.com/index.html' was loaded over HTTPS, but requested an insecure font 'http://cms.ticketsimply.com/fonts/glyphicons-halflings-regular.ttf'. This request has been blocked; the content must be served over HTTPS.", source: https://www.ovrtravels.com/index.html (2974)
```