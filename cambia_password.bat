@echo off
chcp 65001 >nul
echo ========================================================
echo   Cambio Password Utente Windows 'J' per Rete Locale
echo ========================================================
echo.
echo Puoi digitare una nuova password a tua scelta, oppure
echo premere direttamente INVIO per usare come password: 11secrets
echo.
set "NEWPASS="
set /p "NEWPASS=Digita la password desiderata (oppure premi INVIO per '11secrets'): "
if "%NEWPASS%"=="" set "NEWPASS=11secrets"

echo.
echo Impostazione password in corso per l'utente J...
net user J %NEWPASS%

if %errorlevel% neq 0 (
    echo.
    echo [ERRORE] Devi eseguire questo file come Amministratore!
    echo Fai clic destro sul file -> "Esegui come amministratore".
) else (
    echo.
    echo ========================================================
    echo   PASSWORD IMPOSTATA CON SUCCESSO!
    echo ========================================================
    echo.
    echo Credenziali da usare dal tuo PC Fisso:
    echo   - Nome utente: J
    echo   - Password:   %NEWPASS%
    echo.
    echo Percorso da aprire su Esplora File (Win + R):
    echo   \\192.168.1.73\11secrets
    echo ========================================================
)
echo.
pause
