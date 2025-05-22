/**
 * Widget di Accessibilità Avanzato - Versione 2.1
 * Conforme alla Direttiva UE 2016/2102 e normativa EN 301 549
 * Sviluppato da Andrea Brugnoli
 */

// Inizializzazione del widget quando il DOM è caricato
document.addEventListener('DOMContentLoaded', function() {
  // Inserisci gli stili CSS direttamente nel documento
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    /* STILI BASE DEL WIDGET */
    .accessibility-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background-color: #0066cc;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .accessibility-widget:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    .accessibility-icon {
      width: 30px;
      height: 30px;
    }

    .accessibility-menu {
      position: fixed;
      bottom: 90px;
      right: 20px;
      background-color: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 5px 25px rgba(0,0,0,0.25);
      z-index: 9998;
      width: 300px;
      display: none;
      max-height: 80vh;
      overflow-y: auto;
      font-family: Arial, sans-serif;
    }

    .accessibility-menu h3 {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 18px;
      color: #0066cc;
      padding-bottom: 10px;
      border-bottom: 1px solid #e0e0e0;
    }

    .accessibility-option {
      margin: 12px 0;
    }

    .accessibility-option button {
      width: 100%;
      padding: 10px 12px;
      margin: 5px 0;
      border: none;
      border-radius: 6px;
      background-color: #f3f7fb;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 14px;
      color: #333;
      text-align: left;
      display: flex;
      align-items: center;
    }

    .accessibility-option button:hover {
      background-color: #e1ecf7;
    }

    .accessibility-option button:focus {
      outline: 2px solid #0066cc;
    }

    .button-icon {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      fill: #0066cc;
    }

    .option-category {
      font-weight: bold;
      margin-top: 15px;
      color: #555;
      font-size: 15px;
    }

    /* STILI PER LE OPZIONI DI ACCESSIBILITÀ */
    .contrast-high {
      filter: contrast(1.5) brightness(0.9);
    }

    .contrast-highest {
      filter: contrast(2) brightness(0.8);
    }

    .font-larger {
      font-size: 105% !important;
    }

    .font-larger *, .font-larger p, .font-larger div, .font-larger span, 
    .font-larger li, .font-larger h1, .font-larger h2, .font-larger h3, 
    .font-larger h4, .font-larger h5, .font-larger h6, .font-larger a, 
    .font-larger button, .font-larger input, .font-larger textarea, 
    .font-larger select, .font-larger label {
      font-size: 105% !important;
    }

    .font-largest {
      font-size: 108% !important;
    }

    .font-largest *, .font-largest p, .font-largest div, .font-largest span, 
    .font-largest li, .font-largest h1, .font-largest h2, .font-largest h3, 
    .font-largest h4, .font-largest h5, .font-largest h6, .font-largest a, 
    .font-largest button, .font-largest input, .font-largest textarea, 
    .font-largest select, .font-largest label {
      font-size: 108% !important;
    }

    .links-underlined a {
      text-decoration: underline !important;
      text-underline-offset: 3px !important;
    }

    .grayscale {
      filter: grayscale(1);
    }

    .protanopia {
      filter: url('#protanopia-filter');
    }

    .deuteranopia {
      filter: url('#deuteranopia-filter');
    }

    .tritanopia {
      filter: url('#tritanopia-filter');
    }

    .highlight-links a:hover, .highlight-links a:focus {
      background-color: #ff0 !important;
      color: #000 !important;
      outline: 2px solid #ff0 !important;
    }

    .readable-font {
      font-family: Arial, sans-serif !important;
      line-height: 1.6 !important;
      letter-spacing: 0.5px !important;
    }

    .readable-font *, .readable-font p, .readable-font div, .readable-font span, 
    .readable-font li, .readable-font h1, .readable-font h2, .readable-font h3, 
    .readable-font h4, .readable-font h5, .readable-font h6 {
      font-family: Arial, sans-serif !important;
      line-height: 1.6 !important;
    }

    .text-spacing {
      word-spacing: 3px !important;
      letter-spacing: 1px !important;
    }

    .text-spacing *, .text-spacing p, .text-spacing div, .text-spacing span, 
    .text-spacing li, .text-spacing h1, .text-spacing h2, .text-spacing h3, 
    .text-spacing h4, .text-spacing h5, .text-spacing h6 {
      word-spacing: 3px !important;
      letter-spacing: 1px !important;
    }

    .focus-visible *:focus,
    .focus-visible *:hover {
      outline: 3px solid #0066cc !important;
      outline-offset: 3px !important;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.4) !important;
      transition: outline 0.2s ease, box-shadow 0.2s ease !important;
    }

    .focus-visible button:focus, 
    .focus-visible a:focus, 
    .focus-visible input:focus, 
    .focus-visible select:focus, 
    .focus-visible textarea:focus,
    .focus-visible [tabindex]:focus,
    .focus-visible button:hover, 
    .focus-visible a:hover, 
    .focus-visible input:hover, 
    .focus-visible select:hover, 
    .focus-visible textarea:hover,
    .focus-visible [tabindex]:hover {
      background-color: rgba(0, 102, 204, 0.1) !important;
      text-decoration: underline !important;
    }

    .focus-visible a:hover, 
    .focus-visible button:hover, 
    .focus-visible [role="button"]:hover,
    .focus-visible [tabindex]:hover {
      cursor: pointer !important;
      outline: 3px solid #0066cc !important;
      outline-offset: 3px !important;
    }

    /* Screen reader only */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    /* STILI PER DICHIARAZIONE E OVERLAY */
    .accessibility-declaration {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 5px 35px rgba(0,0,0,0.3);
      z-index: 10000;
      width: 600px;
      max-width: 90vw;
      max-height: 80vh;
      overflow-y: auto;
    }

    .declaration-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
    }

    .declaration-content h2 {
      margin-top: 0;
      color: #0066cc;
    }

    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: #0066cc;
      color: white;
      padding: 10px;
      z-index: 10001;
      transition: top 0.3s;
    }

    .skip-link:focus {
      top: 0;
    }

    /* Overlay per modalità screen reader */
    .screen-reader-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      z-index: 10000;
      color: white;
      padding: 50px;
      font-size: 18px;
      overflow-y: auto;
    }

    .screen-reader-close {
      position: fixed;
      top: 15px;
      right: 15px;
      background: white;
      color: black;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }
  `;
  document.head.appendChild(styleElement);
  
  // Inserisci i filtri SVG per il daltonismo
  const svgFilters = document.createElement('div');
  svgFilters.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <filter id="protanopia-filter">
        <feColorMatrix type="matrix" values="0.567, 0.433, 0.000, 0, 0, 0.558, 0.442, 0.000, 0, 0, 0.000, 0.242, 0.758, 0, 0, 0, 0, 0, 1, 0"/>
      </filter>
      <filter id="deuteranopia-filter">
        <feColorMatrix type="matrix" values="0.625, 0.375, 0.000, 0, 0, 0.700, 0.300, 0.000, 0, 0, 0.000, 0.300, 0.700, 0, 0, 0, 0, 0, 1, 0"/>
      </filter>
      <filter id="tritanopia-filter">
        <feColorMatrix type="matrix" values="0.950, 0.050, 0.000, 0, 0, 0.000, 0.433, 0.567, 0, 0, 0.000, 0.475, 0.525, 0, 0, 0, 0, 0, 1, 0"/>
      </filter>
    </svg>
  `;
  document.body.appendChild(svgFilters);
  
  // Aggiungi il link "Salta al contenuto principale"
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Vai al contenuto principale';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Crea il widget principale
  const widget = document.createElement('div');
  widget.className = 'accessibility-widget';
  widget.id = 'accessibilityWidget';
  widget.setAttribute('role', 'button');
  widget.setAttribute('aria-label', 'Apri menu accessibilità');
  widget.setAttribute('tabindex', '0');
  widget.innerHTML = `
    <svg class="accessibility-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#0066cc"/>
      <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1.5" fill="none"/>
      <circle cx="12" cy="6" r="1.8" fill="white"/>
      <path d="M12 8v6" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M7 10.5h10" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M9 17l3-4.5 3 4.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>
  `;
  document.body.appendChild(widget);
  
  // Crea il menu di accessibilità
  const menu = document.createElement('div');
  menu.className = 'accessibility-menu';
  menu.id = 'accessibilityMenu';
  menu.setAttribute('role', 'dialog');
  menu.setAttribute('aria-label', 'Opzioni di accessibilità');
  menu.innerHTML = `
    <h3>Opzioni di Accessibilità</h3>
    
    <p class="option-category">Visualizzazione</p>
    
    <div class="accessibility-option">
      <button id="contrastToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" fill="#0066cc"/>
        </svg>
        Contrasto Medio
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="contrastHighToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#0066cc"/>
        </svg>
        Contrasto Elevato
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="fontIncrease">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" fill="#0066cc"/>
        </svg>
        Aumenta Testo
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="fontIncreaseLarge">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" fill="#0066cc"/>
        </svg>
        Testo Molto Grande
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="readableFontToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" fill="#0066cc"/>
        </svg>
        Font Leggibile
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="textSpacingToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14 4v7h7v-2h-5V4zM5 14h5v5h2v-7H5zm7-4V4h-2v7h7V9z" fill="#0066cc"/>
        </svg>
        Spaziatura Testo
      </button>
    </div>
    
    <p class="option-category">Daltonismo</p>
    
    <div class="accessibility-option">
      <button id="grayscaleToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v8h-2z" fill="#0066cc"/>
        </svg>
        Scala di Grigi
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="protanopiaToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" fill="#0066cc"/>
        </svg>
        Protanopia
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="deuteranopiaToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" fill="#0066cc"/>
        </svg>
        Deuteranopia
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="tritanopiaToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" fill="#0066cc"/>
        </svg>
        Tritanopia
      </button>
    </div>
    
    <p class="option-category">Navigazione</p>
    
    <div class="accessibility-option">
      <button id="linksUnderline">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" fill="#0066cc"/>
        </svg>
        Sottolinea Link
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="highlightLinksToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" fill="#0066cc"/>
        </svg>
        Evidenzia Link
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="cursorLargeToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7 2l0 14 3-3 3 5 2-1-3-5h5z" fill="#0066cc"/>
        </svg>
        Cursore Ingrandito
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="focusVisibleToggle">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#0066cc"/>
        </svg>
        Evidenzia Focus
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="screenReaderMode">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 17h6v-1.5H9V17zm0-7h6v-1.5H9V10zm-3 3.5h12v-1.5H6V13.5zm0 5.5h12v-1.5H6V19zM3 13.5h1.5v-1.5H3v1.5zm0 5.5h1.5v-1.5H3V19zM3 8h18v-3H3v3z" fill="#0066cc"/>
        </svg>
        Modalità Screen Reader
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="showDeclaration">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#0066cc"/>
        </svg>
        Dichiarazione Accessibilità
      </button>
    </div>
    
    <div class="accessibility-option">
      <button id="resetAll">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="#0066cc"/>
        </svg>
        Ripristina Tutto
      </button>
    </div>
  `;
  document.body.appendChild(menu);
  
  // Crea l'overlay per la modalità screen reader
  const screenReaderOverlay = document.createElement('div');
  screenReaderOverlay.className = 'screen-reader-overlay';
  screenReaderOverlay.id = 'screenReaderOverlay';
  screenReaderOverlay.innerHTML = `
    <button class="screen-reader-close" id="screenReaderClose">Chiudi (ESC)</button>
    <div id="screenReaderContent"></div>
  `;
  document.body.appendChild(screenReaderOverlay);
  
  // Crea il pannello della dichiarazione di accessibilità
  const declaration = document.createElement('div');
  declaration.className = 'accessibility-declaration';
  declaration.id = 'accessibilityDeclaration';
  declaration.innerHTML = `
    <button class="declaration-close" id="declarationClose">×</button>
    <div class="declaration-content">
      <h2>Dichiarazione di Accessibilità</h2>
      <p>Questo sito web si impegna a garantire l'accessibilità digitale per le persone con disabilità. Stiamo continuamente migliorando l'esperienza utente per tutti e applicando gli standard di accessibilità pertinenti.</p>
      
      <h3>Misure di Conformità</h3>
      <p>Questo sito web è stato progettato per essere conforme alle linee guida WCAG 2.1 Livello AA e alla Direttiva UE 2016/2102 sull'accessibilità dei siti web degli enti pubblici.</p>
      
      <h3>Funzionalità di Accessibilità Implementate</h3>
      <ul>
        <li>Widget di accessibilità personalizzato con numerose opzioni per adattare la visualizzazione</li>
        <li>Supporto per screen reader</li>
        <li>Navigazione da tastiera migliorata con evidenziazione del focus</li>
        <li>Supporto per diverse condizioni di daltonismo</li>
        <li>Opzioni per aumentare la leggibilità del contenuto</li>
        <li>Struttura HTML semantica</li>
        <li>Contrasto adeguato tra testo e sfondo</li>
        <li>Link "Salta al contenuto principale" per gli utenti di tastiera</li>
      </ul>
      
      <h3>Stato di Conformità</h3>
      <p>Questo sito è stato verificato internamente per la conformità alle linee guida WCAG 2.1 Livello AA. Ci impegniamo a effettuare verifiche periodiche e a migliorare continuamente l'accessibilità del nostro sito.</p>
      
      <h3>Contatti</h3>
      <p>Se riscontri problemi di accessibilità su questo sito web, ti invitiamo a contattarci. Puoi inviarci una e-mail all'indirizzo principale del sito.</p>
      
      <p>Questa dichiarazione è stata aggiornata il: 22 maggio 2025</p>
    </div>
  `;
  document.body.appendChild(declaration);
  
  // ========== FUNZIONI UTILITY ==========
  
  // Definizione URL cursori personalizzati
  const bigCursorUrl = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"%3E%3Ccircle cx="16" cy="16" r="8" fill="black" stroke="white" stroke-width="2"/%3E%3C/svg%3E';
  const bigPointerUrl = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"%3E%3Ccircle cx="16" cy="16" r="12" fill="black" stroke="white" stroke-width="2"/%3E%3C/svg%3E';
  
  // Elementi UI principali
  const accessibilityWidget = document.getElementById('accessibilityWidget');
  const accessibilityMenu = document.getElementById('accessibilityMenu');
  const accessibilityDeclaration = document.getElementById('accessibilityDeclaration');
  const declarationCloseBtn = document.getElementById('declarationClose');
  const screenReaderOverlayEl = document.getElementById('screenReaderOverlay');
  const screenReaderCloseBtn = document.getElementById('screenReaderClose');
  const screenReaderContent = document.getElementById('screenReaderContent');
  
  // Aggiungi ID al contenuto principale se non presente
  function setupMainContentId() {
    if (!document.getElementById('main-content')) {
      const main = document.querySelector('main') || 
                  document.querySelector('.main') || 
                  document.querySelector('.content') || 
                  document.querySelector('article');
      if (main) {
        main.id = 'main-content';
      } else {
        const possibleMain = document.querySelector('.container') || 
                            document.querySelector('.page-content') || 
                            document.querySelector('section');
        if (possibleMain) {
          possibleMain.id = 'main-content';
        }
      }
    }
  }
  
  // Gestione font size
  function applyFontSize(size) {
    if (size === 'larger') {
      document.body.classList.add('font-larger');
      document.body.classList.remove('font-largest');
    } else if (size === 'largest') {
      document.body.classList.add('font-largest');
      document.body.classList.remove('font-larger');
    } else {
      document.body.classList.remove('font-larger', 'font-largest');
    }
  }
  
  // Gestione apertura/chiusura menu
  function toggleMenu() {
    if (accessibilityMenu.style.display === 'block') {
      accessibilityMenu.style.display = 'none';
      accessibilityWidget.setAttribute('aria-expanded', 'false');
    } else {
      accessibilityMenu.style.display = 'block';
      accessibilityWidget.setAttribute('aria-expanded', 'true');
    }
  }
  
  // Estrazione contenuto pagina per modalità screen reader
  function extractPageContent() {
    const mainContent = document.getElementById('main-content') || document.body;
    const headings = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const paragraphs = mainContent.querySelectorAll('p');
    const links = mainContent.querySelectorAll('a');
    const images = mainContent.querySelectorAll('img');
    
    let content = '<h2>Contenuto della pagina in formato screen reader</h2>';
    
    // Aggiungi titoli
    if (headings.length > 0) {
      content += '<h3>Titoli</h3><ul>';
      headings.forEach(heading => {
        content += `<li>${heading.textContent.trim()} (${heading.tagName})</li>`;
      });
      content += '</ul>';
    }
    
    // Aggiungi blocchi di contenuto principale
    content += '<h3>Contenuto principale</h3>';
    paragraphs.forEach(p => {
      if (p.textContent.trim().length > 0) {
        content += `<p>${p.textContent.trim()}</p>`;
      }
    });
    
    // Aggiungi link
    if (links.length > 0) {
      content += '<h3>Link presenti nella pagina</h3><ul>';
      const processedUrls = new Set();
      links.forEach(link => {
        const url = link.href;
        const text = link.textContent.trim();
        if (text && url && !processedUrls.has(url)) {
          processedUrls.add(url);
          content += `<li>${text} - <a href="${url}" target="_blank">${url}</a></li>`;
        }
      });
      content += '</ul>';
    }
    
    // Aggiungi descrizioni immagini
    if (images.length > 0) {
      content += '<h3>Immagini</h3><ul>';
      images.forEach(img => {
        const alt = img.alt || 'Nessuna descrizione disponibile';
        content += `<li>Immagine: ${alt}</li>`;
      });
      content += '</ul>';
    }
    
    return content;
  }
  
  // Aggiorna stato pulsante (attivo/inattivo)
  function updateButtonStatus(button, isActive) {
    if (isActive) {
      button.style.backgroundColor = '#e1ecf7';
      button.style.borderLeft = '3px solid #0066cc';
    } else {
      button.style.backgroundColor = '';
      button.style.borderLeft = '';
    }
  }
  
  // Rimuovi filtri colore helper
  function removeColorFilters() {
    document.body.classList.remove('grayscale', 'protanopia', 'deuteranopia', 'tritanopia');
  }
  
  // Funzione per correggere problemi comuni di accessibilità
  function fixAccessibilityIssues() {
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    imagesWithoutAlt.forEach(img => {
      img.alt = '';
    });
    
    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach(element => {
      const id = element.id;
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (!label && !element.hasAttribute('aria-label')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'sr-only';
          const newLabel = document.createElement('label');
          newLabel.setAttribute('for', id);
          newLabel.textContent = `Campo ${element.type || 'input'}`;
          wrapper.appendChild(newLabel);
          element.parentNode.insertBefore(wrapper, element);
        }
      }
    });
  }
  
  // Aggiungi ARIA labels mancanti
  function addMissingAriaLabels() {
    const unlabeledButtons = document.querySelectorAll('button:not([aria-label])');
    unlabeledButtons.forEach(button => {
      if (!button.textContent.trim()) {
        const img = button.querySelector('img');
        if (img && img.alt) {
          button.setAttribute('aria-label', img.alt);
        } else if (button.classList.contains('close') || button.classList.contains('dismiss')) {
          button.setAttribute('aria-label', 'Chiudi');
        }
      }
    });
    
    const unlabeledInputs = document.querySelectorAll('input:not([aria-label])');
    unlabeledInputs.forEach(input => {
      const id = input.id;
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (!label && !input.hasAttribute('aria-label')) {
          if (input.placeholder) {
            input.setAttribute('aria-label', input.placeholder);
          } else if (input.type) {
            input.setAttribute('aria-label', `Campo ${input.type}`);
          }
        }
      } else if (input.placeholder) {
        input.setAttribute('aria-label', input.placeholder);
      }
    });
  }
  
  // ========== SETUP INIZIALE ==========
  
  setupMainContentId();
  accessibilityWidget.setAttribute('aria-expanded', 'false');
  accessibilityWidget.setAttribute('aria-controls', 'accessibilityMenu');
  
  // ========== EVENT LISTENERS ==========
  
  // Toggle menu apertura/chiusura
  accessibilityWidget.addEventListener('click', toggleMenu);
  accessibilityWidget.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
  
  // Mostra dichiarazione
  document.getElementById('showDeclaration').addEventListener('click', function() {
    accessibilityDeclaration.style.display = 'block';
  });
  
  // Chiudi dichiarazione
  declarationCloseBtn.addEventListener('click', function() {
    accessibilityDeclaration.style.display = 'none';
  });
  
  // Modalità Screen Reader
  document.getElementById('screenReaderMode').addEventListener('click', function() {
    const pageText = extractPageContent();
    screenReaderContent.innerHTML = pageText;
    screenReaderOverlayEl.style.display = 'block';
  });
  
  // Chiudi Modalità Screen Reader
  screenReaderCloseBtn.addEventListener('click', function() {
    screenReaderOverlayEl.style.display = 'none';
  });
  
  // Contrasto medio
  document.getElementById('contrastToggle').addEventListener('click', function() {
    document.body.classList.remove('contrast-highest');
    document.body.classList.toggle('contrast-high');
    updateButtonStatus(this, document.body.classList.contains('contrast-high'));
  });
  
  // Contrasto elevato
  document.getElementById('contrastHighToggle').addEventListener('click', function() {
    document.body.classList.remove('contrast-high');
    document.body.classList.toggle('contrast-highest');
    updateButtonStatus(this, document.body.classList.contains('contrast-highest'));
  });
  
  // Aumenta font
  document.getElementById('fontIncrease').addEventListener('click', function() {
    applyFontSize('larger');
    updateButtonStatus(this, document.body.classList.contains('font-larger'));
  });
  
  // Aumenta font grande
  document.getElementById('fontIncreaseLarge').addEventListener('click', function() {
    applyFontSize('largest');
    updateButtonStatus(this, document.body.classList.contains('font-largest'));
  });
  
  // Font leggibile
  document.getElementById('readableFontToggle').addEventListener('click', function() {
    document.body.classList.toggle('readable-font');
    updateButtonStatus(this, document.body.classList.contains('readable-font'));
  });
  
  // Spaziatura testo
  document.getElementById('textSpacingToggle').addEventListener('click', function() {
    document.body.classList.toggle('text-spacing');
    updateButtonStatus(this, document.body.classList.contains('text-spacing'));
  });
  
  // Sottolinea link
  document.getElementById('linksUnderline').addEventListener('click', function() {
    document.body.classList.toggle('links-underlined');
    updateButtonStatus(this, document.body.classList.contains('links-underlined'));
  });
  
  // Evidenzia link
  document.getElementById('highlightLinksToggle').addEventListener('click', function() {
    document.body.classList.toggle('highlight-links');
    updateButtonStatus(this, document.body.classList.contains('highlight-links'));
  });
  
  // Scala di grigi
  document.getElementById('grayscaleToggle').addEventListener('click', function() {
    removeColorFilters();
    document.body.classList.toggle('grayscale');
    updateButtonStatus(this, document.body.classList.contains('grayscale'));
  });
  
  // Protanopia
  document.getElementById('protanopiaToggle').addEventListener('click', function() {
    removeColorFilters();
    document.body.classList.toggle('protanopia');
    updateButtonStatus(this, document.body.classList.contains('protanopia'));
  });
  
  // Deuteranopia
  document.getElementById('deuteranopiaToggle').addEventListener('click', function() {
    removeColorFilters();
    document.body.classList.toggle('deuteranopia');
    updateButtonStatus(this, document.body.classList.contains('deuteranopia'));
  });
  
  // Tritanopia
  document.getElementById('tritanopiaToggle').addEventListener('click', function() {
    removeColorFilters();
    document.body.classList.toggle('tritanopia');
    updateButtonStatus(this, document.body.classList.contains('tritanopia'));
  });
  
  // Cursore grande
  document.getElementById('cursorLargeToggle').addEventListener('click', function() {
    document.body.classList.toggle('cursor-large');
    updateButtonStatus(this, document.body.classList.contains('cursor-large'));
    
    if (document.body.classList.contains('cursor-large')) {
      const oldStyle = document.getElementById('large-cursor-style');
      if (oldStyle) oldStyle.remove();
      
      const cursorStyle = document.createElement('style');
      cursorStyle.id = 'large-cursor-style';
      cursorStyle.textContent = `
        html, body, div, span, p, h1, h2, h3, h4, h5, h6 {
          cursor: url('${bigCursorUrl}'), auto !important;
        }
        
        a, button, [role="button"], [type="button"], [type="submit"],
        select, input[type="checkbox"], input[type="radio"], 
        .clickable, [tabindex]:not([tabindex="-1"]) {
          cursor: url('${bigPointerUrl}'), pointer !important;
        }
      `;
      document.head.appendChild(cursorStyle);
    } else {
      const cursorStyle = document.getElementById('large-cursor-style');
      if (cursorStyle) cursorStyle.remove();
    }
  });
  
  // Focus visibile
  document.getElementById('focusVisibleToggle').addEventListener('click', function() {
    document.body.classList.toggle('focus-visible');
    updateButtonStatus(this, document.body.classList.contains('focus-visible'));
  });
  
  // Ripristina tutto
  document.getElementById('resetAll').addEventListener('click', function() {
    applyFontSize('normal');
    
    const cursorStyle = document.getElementById('large-cursor-style');
    if (cursorStyle) cursorStyle.remove();
    
    document.body.classList.remove(
      'contrast-high',
      'contrast-highest',
      'font-larger',
      'font-largest',
      'links-underlined',
      'grayscale',
      'protanopia',
      'deuteranopia',
      'tritanopia',
      'cursor-large',
      'focus-visible',
      'readable-font',
      'text-spacing',
      'highlight-links'
    );
    
    const buttons = document.querySelectorAll('.accessibility-option button');
    buttons.forEach(button => {
      button.style.backgroundColor = '';
      button.style.borderLeft = '';
    });
  });
  
  // Navigazione da tastiera per il menu
  accessibilityMenu.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      accessibilityMenu.style.display = 'none';
      accessibilityWidget.setAttribute('aria-expanded', 'false');
      accessibilityWidget.focus();
    }
  });
  
  // Chiudi modalità screen reader con tasto ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (screenReaderOverlayEl.style.display === 'block') {
        screenReaderOverlayEl.style.display = 'none';
      }
      if (accessibilityDeclaration.style.display === 'block') {
        accessibilityDeclaration.style.display = 'none';
      }
    }
  });
  
  // Scorciatoia da tastiera Alt+A per aprire menu accessibilità
  document.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'a') {
      e.preventDefault();
      toggleMenu();
    }
  });
  
  // Esegui miglioramenti iniziali accessibilità
  setTimeout(() => {
    addMissingAriaLabels();
    fixAccessibilityIssues();
  }, 100);
  
  // Monitora modifiche DOM per mantenere accessibilità
  if (window.MutationObserver) {
    const observer = new MutationObserver(function(mutations) {
      addMissingAriaLabels();
      fixAccessibilityIssues();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // Aggiungi automaticamente un ID 'main-content' se mancante
  window.addEventListener('load', function() {
    setupMainContentId();
  });
  
  // Log stato accessibilità in console per sviluppatori
  console.log('🌐 Widget di Accessibilità inizializzato con successo - Versione 2.1');
  console.log('📧 Sviluppato da Andrea Brugnoli');
  console.log('⌨️ Scorciatoia: Alt+A per aprire il menu');
});
