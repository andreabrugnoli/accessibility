# Widget di Accessibilità Web 🌐♿

Un widget di accessibilità web conforme alle normative europee (Direttiva UE 2016/2102 e normativa EN 301 549), progettato per rendere il tuo sito web più inclusivo e accessibile a tutti gli utenti.

## 🚀 Caratteristiche

- **Conformità normativa:** rispetta gli standard WCAG 2.1 AA e le direttive europee
- **Interfaccia intuitiva:** pulsante facilmente riconoscibile con icona universale di accessibilità
- **Personalizzazione del testo:** modifica delle dimensioni del font
- **Alto contrasto:** modalità che migliora la leggibilità per utenti ipovedenti
- **Supporto alla dislessia:** font specializzato (OpenDyslexic) per facilitare la lettura
- **Navigazione migliorata:** evidenziazione del cursore e dei link per facilitare l'orientamento
- **Persistenza delle preferenze:** salvataggio automatico delle impostazioni
- **Compatibilità:** funziona su tutti i browser moderni e dispositivi (mobile-responsive)
- **Conformità ARIA:** progettato per funzionare correttamente con screen reader

## 📦 Installazione

### Metodo 1: Inclusione Diretta

1. Scarica il file `accessibility.js` da questa repository
2. Carica il file sul tuo server web
3. Includi lo script nel tuo HTML appena prima della chiusura del tag `</body>`:

```html
<script src="percorso/al/file/accessibility.js"></script>
```

### Metodo 2: Utilizzo di CDN

```html
<script src="https://cdn.jsdelivr.net/gh/tuousername/accessibility-widget@latest/accessibility.js"></script>
```

Sostituisci `tuousername` con il tuo nome utente GitHub.

## ⚙️ Personalizzazione

Puoi personalizzare il widget modificando i parametri durante l'inizializzazione:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  window.accessibilityWidget = new AccessibilityWidget({
    position: 'right',       // 'left' o 'right'
    buttonColor: '#0066CC',  // Colore del pulsante
    iconColor: '#FFFFFF',    // Colore dell'icona
    zIndex: 9999            // z-index per controllare la sovrapposizione
  });
});
```

## 🔍 Demo

Una demo funzionante è disponibile [qui](#) (sostituisci con l'URL della tua demo).

## 📋 Conformità alle Normative

Questo widget di accessibilità è progettato per aiutare i siti web a conformarsi alle seguenti normative:

- **Direttiva UE 2016/2102** relativa all'accessibilità dei siti web e delle applicazioni mobili degli enti pubblici
- **EN 301 549** standard europeo per i requisiti di accessibilità
- **WCAG 2.1 livello AA** linee guida internazionali per l'accessibilità dei contenuti web

## 🤝 Contributi

I contributi sono benvenuti! Se desideri migliorare questo widget, sentiti libero di creare una pull request.

## 📄 Licenza

Questo progetto è distribuito con licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.

## 📞 Supporto

Per domande, problemi o richieste di assistenza, apri un issue su questa repository o contatta [tua@email.com](mailto:tua@email.com).