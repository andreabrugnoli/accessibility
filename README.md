# Widget di Accessibilità Web 🌐♿

[![Demo Live](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge&logo=github)](https://andreabrugnoli.github.io/accessibility/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Un widget di accessibilità web conforme alle normative europee (Direttiva UE 2016/2102 e normativa EN 301 549), progettato per rendere il tuo sito web più inclusivo e accessibile a tutti gli utenti.

## 🎯 [PROVA LA DEMO LIVE](https://andreabrugnoli.github.io/accessibility/)

## 🚀 Caratteristiche

- **✅ Conformità normativa:** rispetta gli standard WCAG 2.1 AA e le direttive europee
- **🎨 Interfaccia intuitiva:** pulsante facilmente riconoscibile con icona universale di accessibilità
- **📝 Personalizzazione del testo:** modifica delle dimensioni del font (80% - 200%)
- **🌓 Alto contrasto:** modalità che migliora la leggibilità per utenti ipovedenti
- **📖 Supporto alla dislessia:** font specializzato (OpenDyslexic) per facilitare la lettura
- **🖱️ Navigazione migliorata:** evidenziazione del cursore e dei link per facilitare l'orientamento
- **💾 Persistenza delle preferenze:** salvataggio automatico delle impostazioni
- **📱 Compatibilità:** funziona su tutti i browser moderni e dispositivi (mobile-responsive)
- **🔊 Conformità ARIA:** progettato per funzionare correttamente con screen reader

## 📦 Installazione Rapida

### Metodo 1: Inclusione Diretta

```html
<!-- Aggiungi questo script prima della chiusura del tag </body> -->
<script src="https://cdn.jsdelivr.net/gh/andreabrugnoli/accessibility@main/accessibility.js"></script>
```

### Metodo 2: Download Locale

1. Scarica `accessibility.js` da questa repository
2. Carica il file sul tuo server web
3. Includi lo script nel tuo HTML:

```html
<script src="percorso/al/file/accessibility.js"></script>
```

## ⚙️ Personalizzazione

```javascript
// Personalizza il widget modificando i parametri
document.addEventListener('DOMContentLoaded', function() {
  window.accessibilityWidget = new AccessibilityWidget({
    position: 'right',       // 'left' o 'right'
    buttonColor: '#0066CC',  // Colore del pulsante
    iconColor: '#FFFFFF',    // Colore dell'icona
    zIndex: 9999            // z-index per controllare la sovrapposizione
  });
});
```

## 🎮 Come Funziona

1. **Cerca il pulsante blu** nell'angolo in basso a destra/sinistra dello schermo
2. **Clicca per aprire** il pannello di accessibilità
3. **Personalizza** la tua esperienza con le varie opzioni
4. **Le impostazioni vengono salvate** automaticamente per le future visite

### Funzionalità Disponibili:

| Funzione | Descrizione |
|----------|-------------|
| **A- / A+** | Diminuisce/aumenta la dimensione del testo |
| **Reset** | Ripristina la dimensione originale del testo |
| **Alto Contrasto** | Attiva modalità con contrasti elevati |
| **Font per Dislessia** | Utilizza OpenDyslexic per facilitare la lettura |
| **Evidenzia Cursore** | Rende più visibile il cursore del mouse |
| **Evidenzia Link** | Sottolinea e evidenzia tutti i collegamenti |
| **Ripristina Tutto** | Resetta tutte le impostazioni |

## 📋 Conformità alle Normative

Questo widget aiuta il tuo sito a conformarsi a:

- **🇪🇺 Direttiva UE 2016/2102** - Accessibilità dei siti web degli enti pubblici
- **📏 EN 301 549** - Standard europeo per i requisiti di accessibilità  
- **🌐 WCAG 2.1 livello AA** - Linee guida internazionali per l'accessibilità
- **🔊 ARIA Standards** - Compatibilità con tecnologie assistive

## 💼 Vantaggi per il Business

- **🛡️ Evita sanzioni** previste per la non conformità normativa
- **📈 Amplia il pubblico** raggiungendo utenti con diverse abilità  
- **⭐ Migliora la reputazione** del brand come attento all'inclusività
- **🔍 Ottimizza la SEO** grazie a una migliore struttura del codice
- **💰 Aumenta le conversioni** migliorando l'usabilità per tutti

## 🌟 Realizzato da Andrea Brugnoli

**Formatore sull'AI e Digital Expert** | **Presentatore TV "Selfie School"** | **Podcaster "La mia vita spaziale"**

Esperto in filosofia digitale e comunicazione, specializzato nella creazione di soluzioni web inclusive e conformi alle normative europee.

### 📞 Contatti Professionali

- **📧 Email:** [hello@andreabrugnoli.it](mailto:hello@andreabrugnoli.it)
- **💼 LinkedIn:** [Il tuo profilo LinkedIn]
- **🎙️ Podcast:** "La mia vita spaziale"
- **📺 TV:** Presentatore "Selfie School"

## 🤝 Supporto e Personalizzazione

Hai bisogno di implementare questo widget sul tuo sito o di personalizzazioni specifiche?

**Contattami per:**
- ✅ Implementazione professionale
- ✅ Personalizzazioni grafiche
- ✅ Consulenza sulla conformità normativa
- ✅ Formazione del team
- ✅ Audit di accessibilità completo

## 📄 Licenza

Questo progetto è distribuito con licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.

---

<div align="center">

**🌐 Rendere il web accessibile a tutti, un sito alla volta**

[🚀 PROVA LA DEMO](https://andreabrugnoli.github.io/accessibility/) | [📧 RICHIEDI PREVENTIVO](mailto:hello@andreabrugnoli.it?subject=Interesse%20Widget%20Accessibilità)

</div>
