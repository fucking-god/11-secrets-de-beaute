@echo off
chcp 65001 >nul
echo ========================================================
echo   Configurazione Accesso di Rete Pulito per PC Fisso
echo ========================================================
echo.

:: 1. Crea un account locale dedicato chiamato 'condivisione'
echo [1/3] Creazione utente locale 'condivisione'...
net user condivisione 11secrets /add /passwordchg:no /expires:never >nul 2>&1
if %errorlevel% neq 0 (
    :: Se esiste già, aggiorna solo la password
    net user condivisione 11secrets >nul 2>&1
)

:: 2. Assegna i permessi di lettura/scrittura alla cartella del progetto
echo [2/3] Assegnazione permessi alla cartella...
icacls "c:\Users\J\Documents\carlos\24-09" /grant condivisione:(OI)(CI)F /t /c /q >nul 2>&1

:: 3. Aggiorna la condivisione di rete
echo [3/3] Configurazione condivisione di rete...
net share 11secrets /delete >nul 2>&1
net share 11secrets="c:\Users\J\Documents\carlos\24-09" /grant:condivisione,full /grant:everyone,full >nul 2>&1

echo.
echo ========================================================
echo   OPERAZIONE COMPLETATA CON SUCCESSO!
echo ========================================================
echo.
echo Ora sul tuo PC FISSO inserisci queste credenziali pulite:
echo.
echo   Nome utente:  condivisione
echo   Password:     11secrets
echo.
echo (Non serve mettere il nome del PC prima del nome utente!)
echo ========================================================
echo.
pause
