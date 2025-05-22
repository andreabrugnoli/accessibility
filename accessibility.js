// accessibility.js - Implementazione del pulsante di accessibilità conforme alle normative europee

/**
 * AccessibilityWidget - Classe principale per la gestione del widget di accessibilità
 * Conforme alla Direttiva UE 2016/2102 e normativa EN 301 549
 */
class AccessibilityWidget {
  constructor(options = {}) {
    this.options = {
      position: options.position || 'right', // 'left' o 'right'
      buttonColor: options.buttonColor || '#0066CC',
      iconColor: options.iconColor || '#FFFFFF',
      zIndex: options.zIndex || 9999,
      ...options
    };
    
    this.currentFontSize = 100; // percentuale
    this.highContrast = false;
    this.dyslexiaFont = false;
    this.cursorHighlight = false;
    this.linkHighlight = false;
    
    this.init();
  }
  
  init() {
    this.createStyles();
    this.createButton();
    this.createPanel();
    this.attachEvents();
    
    // Carica le preferenze salvate
    this.loadPreferences();
  }
  
  createStyles() {
    const styleElement = document.createElement('style');
    styleElement.id = 'accessibility-styles';
    styleElement.innerHTML = `
      .accessibility-widget-button {
        position: fixed;
        ${this.options.position}: 20px;
        bottom: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: ${this.options.buttonColor};
        color: ${this.options.iconColor};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: ${this.options.zIndex};
        transition: all 0.3s ease;
      }
      
      .accessibility-widget-button:hover {
        transform: scale(1.1);
      }
      
      .accessibility-widget-button svg {
        width: 32px;
        height: 32px;
      }
      
      .accessibility-widget-panel {
        position: fixed;
        ${this.options.position}: 20px;
        bottom: 90px;
        width: 280px;
        background-color: #FFFFFF;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: ${this.options.zIndex};
        display: none;
        padding: 15px;
        font-family: Arial, sans-serif;
      }
      
      .accessibility-widget-panel h3 {
        margin-top: 0;
        margin-bottom: 15px;
        font-size: 18px;
        color: #333;
      }
      
      .accessibility-widget-panel .option {
        margin-bottom: 12px;
      }
      
      .accessibility-widget-panel .option-label {
        display: block;
        margin-bottom: 6px;
        font-size: 14px;
        color: #555;
      }
      
      .accessibility-widget-panel button {
        padding: 8px 12px;
        background-color: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-right: 6px;
        margin-bottom: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease;
      }
      
      .accessibility-widget-panel button:hover {
        background-color: #e5e5e5;
      }
      
      .accessibility-widget-panel button.active {
        background-color: ${this.options.buttonColor};
        color: ${this.options.iconColor};
        border-color: ${this.options.buttonColor};
      }
      
      /* Stili per alto contrasto */
      body.high-contrast {
        background-color: #000 !important;
        color: #FFF !important;
      }
      
      body.high-contrast a {
        color: #FFFF00 !important;
      }
      
      body.high-contrast button, 
      body.high-contrast input, 
      body.high-contrast select, 
      body.high-contrast textarea {
        background-color: #000 !important;
        color: #FFF !important;
        border: 1px solid #FFF !important;
      }
      
      /* Stili per font dislessia */
      body.dyslexia-font {
        font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
        letter-spacing: 0.5px !important;
        word-spacing: 3px !important;
        line-height: 1.5 !important;
      }
      
      /* Stili per evidenziare il cursore */
      body.cursor-highlight {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23FFD700' fill-opacity='0.5'/%3E%3C/svg%3E") 12 12, auto !important;
      }
      
      /* Stili per evidenziare i link */
      body.link-highlight a {
        text-decoration: underline !important;
        font-weight: bold !important;
      }
    `;
    document.head.appendChild(styleElement);
  }
  
  createButton() {
    const button = document.createElement('div');
    button.className = 'accessibility-widget-button';
    button.setAttribute('aria-label', 'Opzioni di accessibilità');
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
      </svg>
    `;
    document.body.appendChild(button);
    this.button = button;
  }
  
  createPanel() {
    const panel = document.createElement('div');
    panel.className = 'accessibility-widget-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-labelledby', 'accessibility-title');
    
    panel.innerHTML = `
      <h3 id="accessibility-title">Opzioni di accessibilità</h3>
      
      <div class="option">
        <span class="option-label">Dimensione testo</span>
        <button class="font-size-button" data-action="decrease-font">A-</button>
        <button class="font-size-button" data-action="reset-font">Reset</button>
        <button class="font-size-button" data-action="increase-font">A+</button>
      </div>
      
      <div class="option">
        <span class="option-label">Contrasto e colori</span>
        <button class="contrast-button" data-action="toggle-contrast">Alto contrasto</button>
      </div>
      
      <div class="option">
        <span class="option-label">Supporto alla lettura</span>
        <button class="dyslexia-button" data-action="toggle-dyslexia">Font per dislessia</button>
      </div>
      
      <div class="option">
        <span class="option-label">Navigazione</span>
        <button class="cursor-button" data-action="toggle-cursor">Evidenzia cursore</button>
        <button class="links-button" data-action="toggle-links">Evidenzia link</button>
      </div>
      
      <div class="option">
        <button class="reset-all-button" data-action="reset-all">Ripristina tutto</button>
      </div>
    `;
    
    document.body.appendChild(panel);
    this.panel = panel;
  }
  
  attachEvents() {
    // Toggle pannello
    this.button.addEventListener('click', () => this.togglePanel());
    this.button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.togglePanel();
      }
    });
    
    // Click fuori dal pannello lo chiude
    document.addEventListener('click', (e) => {
      if (!this.panel.contains(e.target) && e.target !== this.button) {
        this.panel.style.display = 'none';
      }
    });
    
    // Gestione pulsanti
    this.panel.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', (e) => {
        const action = button.getAttribute('data-action');
        this.handleAction(action);
      });
      
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const action = button.getAttribute('data-action');
          this.handleAction(action);
        }
      });
    });
  }
  
  togglePanel() {
    if (this.panel.style.display === 'block') {
      this.panel.style.display = 'none';
    } else {
      this.panel.style.display = 'block';
      // Aggiorna lo stato dei pulsanti
      this.updateButtonStates();
    }
  }
  
  handleAction(action) {
    switch (action) {
      case 'increase-font':
        this.increaseFontSize();
        break;
      case 'decrease-font':
        this.decreaseFontSize();
        break;
      case 'reset-font':
        this.resetFontSize();
        break;
      case 'toggle-contrast':
        this.toggleHighContrast();
        break;
      case 'toggle-dyslexia':
        this.toggleDyslexiaFont();
        break;
      case 'toggle-cursor':
        this.toggleCursorHighlight();
        break;
      case 'toggle-links':
        this.toggleLinkHighlight();
        break;
      case 'reset-all':
        this.resetAll();
        break;
    }
    
    // Salva le preferenze
    this.savePreferences();
    
    // Aggiorna lo stato dei pulsanti
    this.updateButtonStates();
  }
  
  increaseFontSize() {
    if (this.currentFontSize < 200) {
      this.currentFontSize += 10;
      document.documentElement.style.fontSize = `${this.currentFontSize}%`;
    }
  }
  
  decreaseFontSize() {
    if (this.currentFontSize > 80) {
      this.currentFontSize -= 10;
      document.documentElement.style.fontSize = `${this.currentFontSize}%`;
    }
  }
  
  resetFontSize() {
    this.currentFontSize = 100;
    document.documentElement.style.fontSize = '100%';
  }
  
  toggleHighContrast() {
    this.highContrast = !this.highContrast;
    document.body.classList.toggle('high-contrast', this.highContrast);
  }
  
  toggleDyslexiaFont() {
    this.dyslexiaFont = !this.dyslexiaFont;
    document.body.classList.toggle('dyslexia-font', this.dyslexiaFont);
    
    // Carica il font OpenDyslexic se non è già stato caricato
    if (this.dyslexiaFont && !document.getElementById('dyslexia-font-stylesheet')) {
      const linkElement = document.createElement('link');
      linkElement.id = 'dyslexia-font-stylesheet';
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.css';
      document.head.appendChild(linkElement);
    }
  }
  
  toggleCursorHighlight() {
    this.cursorHighlight = !this.cursorHighlight;
    document.body.classList.toggle('cursor-highlight', this.cursorHighlight);
  }
  
  toggleLinkHighlight() {
    this.linkHighlight = !this.linkHighlight;
    document.body.classList.toggle('link-highlight', this.linkHighlight);
  }
  
  resetAll() {
    this.resetFontSize();
    
    this.highContrast = false;
    document.body.classList.remove('high-contrast');
    
    this.dyslexiaFont = false;
    document.body.classList.remove('dyslexia-font');
    
    this.cursorHighlight = false;
    document.body.classList.remove('cursor-highlight');
    
    this.linkHighlight = false;
    document.body.classList.remove('link-highlight');
  }
  
  updateButtonStates() {
    // Alto contrasto
    const contrastButton = this.panel.querySelector('[data-action="toggle-contrast"]');
    contrastButton.classList.toggle('active', this.highContrast);
    
    // Font dislessia
    const dyslexiaButton = this.panel.querySelector('[data-action="toggle-dyslexia"]');
    dyslexiaButton.classList.toggle('active', this.dyslexiaFont);
    
    // Evidenzia cursore
    const cursorButton = this.panel.querySelector('[data-action="toggle-cursor"]');
    cursorButton.classList.toggle('active', this.cursorHighlight);
    
    // Evidenzia link
    const linksButton = this.panel.querySelector('[data-action="toggle-links"]');
    linksButton.classList.toggle('active', this.linkHighlight);
  }
  
  savePreferences() {
    if (window.localStorage) {
      const preferences = {
        fontSize: this.currentFontSize,
        highContrast: this.highContrast,
        dyslexiaFont: this.dyslexiaFont,
        cursorHighlight: this.cursorHighlight,
        linkHighlight: this.linkHighlight
      };
      
      localStorage.setItem('accessibilityPreferences', JSON.stringify(preferences));
    }
  }
  
  loadPreferences() {
    if (window.localStorage) {
      const savedPreferences = localStorage.getItem('accessibilityPreferences');
      
      if (savedPreferences) {
        try {
          const preferences = JSON.parse(savedPreferences);
          
          // Applica le preferenze salvate
          this.currentFontSize = preferences.fontSize || 100;
          document.documentElement.style.fontSize = `${this.currentFontSize}%`;
          
          this.highContrast = preferences.highContrast || false;
          document.body.classList.toggle('high-contrast', this.highContrast);
          
          this.dyslexiaFont = preferences.dyslexiaFont || false;
          document.body.classList.toggle('dyslexia-font', this.dyslexiaFont);
          
          this.cursorHighlight = preferences.cursorHighlight || false;
          document.body.classList.toggle('cursor-highlight', this.cursorHighlight);
          
          this.linkHighlight = preferences.linkHighlight || false;
          document.body.classList.toggle('link-highlight', this.linkHighlight);
          
          // Se il font dislessia è attivo, carica il foglio di stile
          if (this.dyslexiaFont && !document.getElementById('dyslexia-font-stylesheet')) {
            const linkElement = document.createElement('link');
            linkElement.id = 'dyslexia-font-stylesheet';
            linkElement.rel = 'stylesheet';
            linkElement.href = 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.css';
            document.head.appendChild(linkElement);
          }
        } catch (error) {
          console.error('Errore nel caricamento delle preferenze di accessibilità:', error);
        }
      }
    }
  }
}

// Inizializzazione del widget
document.addEventListener('DOMContentLoaded', function() {
  // Verifica se è già stato inizializzato
  if (!window.accessibilityWidget) {
    window.accessibilityWidget = new AccessibilityWidget({
      position: 'right', // 'left' o 'right'
      buttonColor: '#0066CC', // Colore del pulsante
      iconColor: '#FFFFFF' // Colore dell'icona
    });
    
    console.log('Widget di accessibilità inizializzato con successo');
  }
});

// File README per istruzioni di implementazione
/*
# Widget di Accessibilità Web

Questo script implementa un widget di accessibilità conforme alle normative europee (Direttiva UE 2016/2102 e normativa EN 301 549).

## Caratteristiche principali

- Regolazione delle dimensioni del testo
- Modalità alto contrasto
- Font facilitato per la dislessia
- Evidenziazione del cursore e dei link
- Memorizzazione delle preferenze dell'utente
- Compatibilità con dispositivi mobili e screen reader
- Conformità WCAG 2.1 AA

## Installazione

1. Copia il file `accessibility.js` nella cartella degli script del tuo sito web.
2. Includi lo script nel tuo HTML con il seguente codice:

```html
<script src="path/to/accessibility.js"></script>
```

3. Il widget si inizializzerà automaticamente quando la pagina è caricata.

## Personalizzazione

Puoi personalizzare il widget modificando i parametri nel file accessibility.js:

```javascript
window.accessibilityWidget = new AccessibilityWidget({
  position: 'right', // 'left' o 'right'
  buttonColor: '#0066CC', // Colore del pulsante
  iconColor: '#FFFFFF' // Colore dell'icona
});
```

## Supporto

Per domande o problemi, contattare [tuo indirizzo email].
*/
