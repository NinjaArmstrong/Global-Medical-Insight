# Delayed News Update Script
# Waits for 1 hour to allow API rate limits to reset, then runs the update.

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   Global Medical Insight - Delayed Update System" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Waiting 65 minutes (3900 seconds) to ensure full API recovery..." -ForegroundColor Yellow
Write-Host "PLEASE DO NOT CLOSE THIS WINDOW OR PUT THE PC TO SLEEP." -ForegroundColor Red

# Wait 65 minutes (extra 5 mins buffer)
$startTime = Get-Date
$endTime = $startTime.AddSeconds(3900)

# Progress bar loop
$totalSeconds = 3900
for ($i = 0; $i -lt $totalSeconds; $i++) {
    $remaining = $totalSeconds - $i
    $percent = ($i / $totalSeconds) * 100
    Write-Progress -Activity "Waiting for cooldown" -Status "$([math]::Round($remaining / 60)) minutes remaining..." -PercentComplete $percent
    Start-Sleep -Seconds 1
}

Write-Host ""
Write-Host "Cooldown complete. Starting update..." -ForegroundColor Green
Write-Host ""

# Run the update
npm run update-news

Write-Host ""
Write-Host "Process finished." -ForegroundColor Cyan
# Keep window open so user can see result in the morning
Read-Host "Press Enter to close this window..."
