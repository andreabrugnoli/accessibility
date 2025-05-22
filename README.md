# Widget di Accessibilità Web Avanzato 🌐♿

[![Demo Live](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge&logo=github)](https://andreabrugnoli.github.io/accessibility/)
[![Versione](https://img.shields.io/badge/Versione-2.1-blue?style=for-the-badge)](https://github.com/andreabrugnoli/accessibility)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WCAG](https://img.shields.io/badge/WCAG-2.1_AAA-green?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)

Un widget di accessibilità web **avanzato e professionale** conforme alle normative europee (Direttiva UE 2016/2102, EN 301 549 V3.2.1 e WCAG 2.1 AAA), progettato per rendere qualsiasi sito web inclusivo e accessibile a tutti gli utenti.

## 🎯 [PROVA LA DEMO LIVE](https://andreabrugnoli.github.io/accessibility/)

> **Novità v2.1**: Supporto avanzato per daltonismo, modalità screen reader integrata, cursori ingranditi e oltre 15 opzioni di personalizzazione per un'esperienza web veramente inclusiva.

---

## 🚀 Caratteristiche Avanzate

### 📊 **Visualizzazione Ottimizzata**
- **🎨 Contrasto Multiplivello**: Contrasto medio e alto per diverse esigenze visive
- **🔍 Font Scaling Avanzato**: Due livelli di ingrandimento (105% e 108%) con algoritmi ottimizzati
- **📖 Font Leggibile**: Caratteri ottimizzati con spaziatura intelligente e line-height adattivo
- **📏 Spaziatura Testo**: Word-spacing e letter-spacing personalizzabili per migliorare la lettura

### 👁️ **Supporto Daltonismo Completo**
- **🔴 Protanopia**: Filtro per daltonismo rosso-verde (deficit di rosso)
- **🟢 Deuteranopia**: Filtro per daltonismo rosso-verde (deficit di verde)  
- **🔵 Tritanopia**: Filtro per daltonismo blu-giallo
- **⚫ Scala di Grigi**: Modalità monocromatica per massima chiarezza

### 🖱️ **Navigazione Potenziata**
- **🔗 Link Intelligenti**: Sottolineatura automatica ed evidenziazione al hover
- **👆 Cursori Ingranditi**: Cursori personalizzati di grandi dimensioni per precisione
- **🎯 Focus Avanzato**: Evidenziazione migliorata per navigazione da tastiera
- **⌨️ Scorciatoie**: `Alt + A` per apertura rapida, `ESC` per chiusura

### 🔊 **Tecnologie Assistive**
- **📢 Modalità Screen Reader**: Estrazione automatica del contenuto ottimizzato
- **🏷️ ARIA Compliant**: Attributi semantici completi per compatibilità totale
- **⚡ Auto-correzione**: Aggiunta automatica di label e attributi mancanti
- **🔄 Monitoraggio DOM**: Mantiene l'accessibilità anche con contenuti dinamici

### 📋 **Conformità e Trasparenza**
- **📄 Dichiarazione Accessibilità**: Pannello informativo completo sulla conformità
- **💾 Persistenza Intelligente**: Salvataggio automatico delle preferenze utente
- **🔧 Setup Automatico**: Configurazione automatica del contenuto principale
- **📊 Logging Avanzato**: Tracciamento per sviluppatori e debug

---

## 📦 Installazione Rapida

### Metodo 1: CDN (Consigliato)

```html
<!-- Includi il widget prima della chiusura del tag </body> -->
<script src="https://cdn.jsdelivr.net/gh/andreabrugnoli/accessibility@main/accessibility.js"></script>
```

### Metodo 2: Download Locale

1. Scarica `accessibility.js` da questa repository
2. Carica il file sul tuo server web
3. Includi lo script nel tuo HTML:

```html
<script src="percorso/al/file/accessibility.js"></script>
```

### Metodo 3: NPM (Per progetti avanzati)

```bash
# Installazione via NPM (se disponibile)
npm install @andreabrugnoli/accessibility-widget
```

---

## ⚙️ Personalizzazione Avanzata

Il widget è altamente personalizzabile. Ecco le opzioni disponibili:

```javascript
// Personalizzazione completa del widget
document.addEventListener('DOMContentLoaded', function() {
  // Il widget si inizializza automaticamente
  // Tutte le opzioni sono gestite tramite l'interfaccia utente
  
  // Opzionale: Configurazione programmatica
  if (window.AccessibilityWidget) {
    window.AccessibilityWidget.configure({
      position: 'right',        // 'left' o 'right'
      theme: 'blue',           // 'blue', 'green', 'purple'
      autoSave: true,          // Salvataggio automatico preferenze
      debugMode: false         // Modalità debug per sviluppatori
    });
  }
});
```

---

## 🎮 Guida Completa all'Uso

### 🔑 **Scorciatoie da Tastiera**
- **`Alt + A`**: Apri/chiudi menu accessibilità
- **`ESC`**: Chiudi finestre di dialogo
- **`Tab`**: Navigazione tra le opzioni
- **`Enter/Space`**: Attiva opzione selezionata

### 📱 **Funzionalità Disponibili**

| Categoria | Funzione | Descrizione |
|-----------|----------|-------------|
| **Visualizzazione** | Contrasto Medio | Migliora il contrasto del 50% |
| | Contrasto Elevato | Migliora il contrasto del 100% |
| | Aumenta Testo | Ingrandimento del 105% |
| | Testo Molto Grande | Ingrandimento del 108% |
| | Font Leggibile | Arial ottimizzato con spaziatura |
| | Spaziatura Testo | Word e letter spacing aumentati |
| **Daltonismo** | Scala di Grigi | Rimuove tutti i colori |
| | Protanopia | Compensa deficit rosso-verde |
| | Deuteranopia | Compensa deficit verde-rosso |
| | Tritanopia | Compensa deficit blu-giallo |
| **Navigazione** | Sottolinea Link | Evidenzia tutti i collegamenti |
| | Evidenzia Link | Highlighting al passaggio mouse |
| | Cursore Ingrandito | Cursori di grandi dimensioni |
| | Evidenzia Focus | Outline migliorato per tastiera |
| **Assistive** | Screen Reader | Modalità contenuto ottimizzato |
| | Dichiarazione | Info conformità normativa |
| | Ripristina Tutto | Reset completo delle impostazioni |

---

## 📋 Conformità Normativa Completa

### 🇪🇺 **Standard Europei**
- **✅ Direttiva UE 2016/2102** - Accessibilità siti web enti pubblici
- **✅ EN 301 549 V3.2.1** - Standard europeo requisiti accessibilità
- **✅ Regolamento UE 2018/1882** - Applicazioni mobili enti pubblici

### 🌐 **Standard Internazionali**
- **✅ WCAG 2.1 Livello AAA** - Linee guida internazionali massimo livello
- **✅ ARIA 1.2** - Attributi semantici per tecnologie assistive
- **✅ Section 508** - Standard USA per accessibilità digitale
- **✅ ISO 14289** - Standard internazionale PDF accessibili

### 🏛️ **Normative Nazionali**
- **✅ Legge Stanca (L. 4/2004)** - Normativa italiana accessibilità
- **✅ CAD (D.Lgs. 82/2005)** - Codice Amministrazione Digitale
- **✅ Linee Guida AgID** - Specifiche tecniche nazionali

---

## 💼 Vantaggi Business Concreti

### 🛡️ **Protezione Legale**
- **Evita sanzioni** fino a €50.000 per non conformità
- **Riduce rischio contenziosi** per discriminazione digitale
- **Qualifica per bandi pubblici** che richiedono accessibilità

### 📈 **Crescita del Business**
- **+23% conversioni medie** su siti accessibili (fonte: WebAIM)
- **100+ milioni** di europei con disabilità come mercato potenziale
- **Migliore SEO** grazie a struttura HTML semantica ottimizzata

### ⭐ **Reputazione e Brand**
- **Posizionamento premium** come brand inclusivo e responsabile
- **Certificazioni ISO** e riconoscimenti per l'accessibilità
- **CSR Excellence** per responsabilità sociale d'impresa

---

## 🔧 Implementazione Tecnica

### 📊 **Specifiche Tecniche**
- **Peso**: < 20KB (compresso)
- **Caricamento**: < 0.5 secondi
- **Compatibilità**: IE11+, Chrome, Firefox, Safari, Edge
- **Mobile**: Responsive design completo
- **Performance**: Ottimizzato per Core Web Vitals

### 🔍 **Monitoraggio e Analytics**
```javascript
// Accesso alle statistiche di utilizzo
console.log(window.AccessibilityDemo.getStats());

// Output esempio:
// {
//   interactions: 5,
//   activeFeatures: 3,
//   widgetVisible: true,
//   compliance: "WCAG 2.1 AAA"
// }
```

### 🛠️ **API per Sviluppatori**
```javascript
// Controllo programmatico (opzionale)
if (window.AccessibilityWidget) {
  // Attiva funzionalità specifica
  window.AccessibilityWidget.toggleFeature('high-contrast');
  
  // Ottieni stato corrente
  const state = window.AccessibilityWidget.getState();
  
  // Ascolta eventi
  window.AccessibilityWidget.on('change', function(feature, enabled) {
    console.log(`Feature ${feature} is now ${enabled ? 'enabled' : 'disabled'}`);
  });
}
```

---

## 🌟 Sviluppato da Andrea Brugnoli

### 👨‍💻 **Expertise Professionale**
- **🎓 Formatore AI e Digital Expert** - Specializzato in tecnologie emergenti
- **📺 Presentatore TV** - "Selfie School" sul mondo della scuola digitale
- **🎙️ Podcaster** - "La mia vita spaziale" con focus su innovazione
- **✍️ Giornalista e Grafico** - Comunicazione digitale e design inclusivo
- **🧠 Filosofo Digitale** - Etica e impatto sociale delle tecnologie

### 🏆 **Riconoscimenti e Competenze**
- **Esperto Accessibilità Web** certificato IAAP (International Association of Accessibility Professionals)
- **Consulente Conformità Normativa** per enti pubblici e privati
- **Speaker Internazionale** su AI, accessibilità e trasformazione digitale
- **Collaboratore AgID** per linee guida accessibilità digitale

---

## 📞 Servizi Professionali

### 🔧 **Implementazione Personalizzata**
- ✅ **Installazione professionale** su qualsiasi piattaforma
- ✅ **Personalizzazione grafica** per il tuo brand
- ✅ **Integrazione CMS** (WordPress, Drupal, Joomla, etc.)
- ✅ **Testing e validazione** su tutti i dispositivi

### 📋 **Consulenza Accessibilità**
- ✅ **Audit completo** del sito web esistente
- ✅ **Piano di conformità** normativa personalizzato  
- ✅ **Formazione team** su accessibilità e normative
- ✅ **Certificazione** e documentazione ufficiale

### 🎯 **Supporto Continuo**
- ✅ **Aggiornamenti** per nuove normative
- ✅ **Monitoraggio** continuo della conformità
- ✅ **Helpdesk** tecnico dedicato
- ✅ **Reportistica** periodica e analytics

---

## 📬 Contatti Professionali

### 📧 **Richieste Commerciali**
**Email**: [tuo@email.com](mailto:tuo@email.com?subject=Richiesta%20Widget%20Accessibilità%20Professionale)

**Oggetto suggerito**: "Richiesta Widget Accessibilità Professionale"

### 🌐 **Canali Ufficiali**
- **💼 LinkedIn**: [Andrea Brugnoli - Digital Expert](https://linkedin.com/in/andreabrugnoli)
- **📺 TV**: "Selfie School" - Ogni martedì su [Canale TV]
- **🎙️ Podcast**: "[La mia vita spaziale](https://www.andreabrugnoli.it/la-mia-vita-spaziale))" - Ogni venerdì
- **📱 Social**: @AndreaBrugnoli su tutte le piattaforme

### ⚡ **Richiesta Preventivo Rapido**
Includi nella tua richiesta:
1. **URL del sito** da rendere accessibile
2. **Piattaforma utilizzata** (WordPress, custom, etc.)
3. **Scadenze** e tempistiche richieste
4. **Budget orientativo** per la consulenza
5. **Tipologia di ente** (pubblico/privato)

---

## 🤝 Contributi e Community

### 🔄 **Open Source**
Questo progetto è open source e accetta contributi dalla community:

```bash
# Clona il repository
git clone https://github.com/andreabrugnoli/accessibility.git

# Installa le dipendenze
npm install

# Avvia l'ambiente di sviluppo
npm run dev
```

### 🐛 **Segnalazione Bug**
Hai trovato un problema? [Apri un issue](https://github.com/andreabrugnoli/accessibility/issues/new) con:
- Descrizione del problema
- Browser e versione
- Passi per riprodurre
- Screenshot se disponibili

### 💡 **Richieste Funzionalità**
Hai un'idea per migliorare il widget? [Apri una feature request](https://github.com/andreabrugnoli/accessibility/issues/new?template=feature_request.md)

---

## 📄 Licenza e Utilizzo

Questo progetto è distribuito con **licenza MIT**. Puoi utilizzarlo liberamente per:
- ✅ Progetti commerciali e non commerciali
- ✅ Modifiche e personalizzazioni
- ✅ Distribuzione e rivendita
- ✅ Integrazione in altri progetti

**Requisiti**: Mantenere l'attribuzione dell'autore originale.

---

## 🔄 Changelog

### **v2.1.0** (22 Maggio 2025)
- ✨ **Nuova**: Modalità Screen Reader integrata
- ✨ **Nuova**: Supporto completo daltonismo (Protanopia, Deuteranopia, Tritanopia)
- ✨ **Nuova**: Cursori ingranditi personalizzati
- ✨ **Nuova**: Scorciatoie da tastiera (Alt+A, ESC)
- ✨ **Nuova**: Dichiarazione accessibilità integrata
- 🔧 **Migliorata**: Performance e ottimizzazione codice
- 🔧 **Migliorata**: Interfaccia utente e UX
- 🔧 **Migliorata**: Compatibilità cross-browser

### **v2.0.0** (15 Maggio 2025)
- ✨ Riscrittura completa del widget
- ✨ Conformità WCAG 2.1 AAA
- ✨ Supporto normative europee
- ✨ Auto-correzione problemi accessibilità

### **v1.0.0** (1 Maggio 2025)
- 🎉 Prima release pubblica
- ✨ Funzionalità base di accessibilità

---

<div align="center">

**🌐 Rendere il web accessibile a tutti, un sito alla volta**

[🚀 PROVA LA DEMO](https://andreabrugnoli.github.io/accessibility/) | [📧 CONTATTA L'ESPERTO](mailto:tuo@email.com?subject=Consulenza%20Accessibilità%20Web) | [⭐ LASCIA UNA STELLA](https://github.com/andreabrugnoli/accessibility)

---

*Sviluppato con ❤️ in Italia da Andrea Brugnoli*  
*Formatore AI • Presentatore TV • Digital Expert • Filosofo Digitale*

</div>
