(function() {
    'use strict';
  
    // ============================================================================
    // TYPE DEFINITIONS
    // ============================================================================
  
    /**
     * @typedef {Object} MousePosition
     * @property {number} clientX - X coordinate relative to viewport
     * @property {number} clientY - Y coordinate relative to viewport
     */
  
    /**
     * @typedef {Object} ComponentInfo
     * @property {Element} element - DOM element with UIComponent properties
     * @property {string} filename - Component filename
     * @property {string} line - Source line number
     * @property {string} path - Full source path
     * @property {number} [level] - Optional hierarchy level for parent components
     */
  
    /**
     * @typedef {Object} TreeNode
     * @property {string} id - Unique node identifier
     * @property {Element} element - DOM element
     * @property {string} filename - Component filename
     * @property {string} line - Source line number
     * @property {string} path - Full source path
     * @property {TreeNode[]} children - Child nodes
     * @property {TreeNode|null} parent - Parent node
     * @property {boolean} expanded - Whether node is expanded
     * @property {number} level - Depth level in tree
     */
  
    /**
     * @typedef {Object} Position
     * @property {number} left - Left position in pixels
     * @property {number} top - Top position in pixels
     * @property {number} width - Width in pixels
     * @property {number} height - Height in pixels
     */
  
    /**
     * @typedef {Object} TooltipPosition
     * @property {number} left - Left position in pixels
     * @property {number} top - Top position in pixels
     */
  
    /**
     * @typedef {Object} OverlayRect
     * @property {number} left - Left position
     * @property {number} top - Top position
     * @property {number} right - Right position
     * @property {number} bottom - Bottom position
     * @property {number} width - Width
     * @property {number} height - Height
     */
  
    /**
     * @typedef {Object} DevtoolsOptions
     * @property {boolean} enableKeyboardNavigation - Enable keyboard navigation
     * @property {boolean} viewportVisibilityFilter - Filter tree nodes based on viewport visibility
     * @property {boolean} initialIsOpen - Open devtools panel by default when page loads
     */
  
    /**
     * @typedef {Object} DevtoolsConfig
     * @property {string} [preferredIDE] - Preferred IDE protocol
     * @property {boolean} [viewportVisibilityFilter] - Filter tree nodes based on viewport visibility
     * @property {boolean} [initialIsOpen] - Open devtools panel by default when page loads
     * @property {Partial<DevtoolsOptions>} [options] - Devtools options
     */
  
    /**
     * @callback StateObserver
     * @param {string} type - Type of state change
     * @param {*} data - Change data
     */
  
    /**
     * @callback NodeCallback
     * @param {TreeNode} node - Tree node
     */
  
    // ============================================================================
    // UICOMPONENT DEVTOOLS PROPERTY CONSTANTS
    // ============================================================================
  
    /**
     * UIComponent Devtools Property Constants
     *
     * Centralized definition of all UIComponent devtools property names.
     * This provides a single point of maintenance when property names need to be updated.
     * @readonly
     * @enum {string}
     */
    const DEVTOOLS_PROPERTIES = {
      /** Source path property for UIComponent elements */
      SCALA_SOURCE_PATH: '__scalasourcepath',
  
      /** Filename property for UIComponent elements */
      SCALA_FILENAME: '__scalafilename',
  
      /** Source line property for UIComponent elements */
      SCALA_SOURCE_LINE: '__scalasourceline'
    };
  
    /**
     * Helper functions for UIComponent property access
     * @namespace PropertyAccessor
     */
    const PropertyAccessor = {
      /**
       * Check if element has the source path property
       * @memberof PropertyAccessor
       * @param {Element} element - Element to check
       * @returns {boolean} True if element has source path property
       */
      hasSourcePath(element) {
        return Object.hasOwn(element, DEVTOOLS_PROPERTIES.SCALA_SOURCE_PATH);
      },
  
      /**
       * Get source path from element
       * @memberof PropertyAccessor
       * @param {Element} element - Element to get source path from
       * @returns {string|undefined} Source path or undefined
       */
      getSourcePath(element) {
        return /** @type {any} */ (element)[DEVTOOLS_PROPERTIES.SCALA_SOURCE_PATH];
      },
  
      /**
       * Get filename from element
       * @memberof PropertyAccessor
       * @param {Element} element - Element to get filename from
       * @returns {string|undefined} Filename or undefined
       */
      getFilename(element) {
        return /** @type {any} */ (element)[DEVTOOLS_PROPERTIES.SCALA_FILENAME];
      },
  
      /**
       * Get source line from element
       * @memberof PropertyAccessor
       * @param {Element} element - Element to get source line from
       * @returns {string|undefined} Source line or undefined
       */
      getSourceLine(element) {
        return /** @type {any} */ (element)[DEVTOOLS_PROPERTIES.SCALA_SOURCE_LINE];
      },
  
      /**
       * Check if element has all required devtools properties
       * @memberof PropertyAccessor
       * @param {Element} element - Element to validate
       * @returns {boolean} True if element has all required properties
       */
      hasAllProperties(element) {
        return Boolean(this.getSourcePath(element) && this.getFilename(element) && this.getSourceLine(element));
      }
    };
  
    // ============================================================================
    // CSS CUSTOM PROPERTIES INJECTION
    // ============================================================================
  
    /**
     * Inject CSS custom properties for devtools styling
     * @function injectDevtoolsCSSVariables
     * @returns {void}
     */
    function injectDevtoolsCSSVariables() {
      // Check if styles are already injected
      if (document.getElementById('devtools-css-variables')) {
        return;
      }
  
      const style = document.createElement('style');
      style.id = 'devtools-css-variables';
      style.textContent = `
        :root {
          /* Devtools Colors - Primary Theme (Blue) */
          --devtools-primary-color: #007bff;
          --devtools-primary-bg-light: rgba(0, 123, 255, 0.12);
          --devtools-primary-bg-medium: rgba(0, 123, 255, 0.18);
          --devtools-primary-shadow-light: rgba(0, 123, 255, 0.25);
          --devtools-primary-shadow-medium: rgba(0, 123, 255, 0.35);
  
          /* Devtools Colors - Neutral */
          --devtools-white: white;
          --devtools-white-semi: rgba(255, 255, 255, 0.6);
          --devtools-white-medium: rgba(255, 255, 255, 0.7);
          --devtools-white-strong: rgba(255, 255, 255, 0.85);
          --devtools-white-border: rgba(255, 255, 255, 0.25);
          --devtools-gray-light: #ccc;
          --devtools-gray-medium: #888;
          --devtools-black-overlay: rgba(0, 0, 0, 0.92);
          --devtools-black-overlay-strong: rgba(20, 20, 20, 0.95);
          --devtools-black-shadow-light: rgba(0, 0, 0, 0.1);
          --devtools-black-shadow-medium: rgba(0, 0, 0, 0.15);
          --devtools-black-shadow-strong: rgba(0, 0, 0, 0.2);
          --devtools-black-shadow-heavy: rgba(0, 0, 0, 0.3);
          --devtools-black-shadow-max: rgba(0, 0, 0, 0.4);
          --devtools-black-shadow-ultra: rgba(0, 0, 0, 0.5);
  
          /* Devtools Spacing */
          --devtools-element-offset: 6px;
          --devtools-tooltip-margin: 10px;
          --devtools-tooltip-padding: 10px 14px;
          --devtools-tooltip-padding-large: 12px 16px;
          --devtools-tooltip-translate-offset: 4px;
          --devtools-extra-info-tooltip-margin: 4px;
          --devtools-extra-info-tooltip-margin-bottom: 8px;
          --devtools-extra-info-tooltip-min-width: 200px;
  
          /* Devtools Border Radius */
          --devtools-border-radius: 6px;
          --devtools-border-radius-large: 8px;
  
          /* Devtools Z-Index */
          --devtools-overlay-z-index: 9999;
          --devtools-tooltip-z-index: 10000;
          --devtools-extra-info-tooltip-z-index: 10001;
  
          /* Devtools Typography */
          --devtools-font-size: 12px;
          --devtools-font-size-small: 11px;
          --devtools-font-family: ui-monospace, 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
          --devtools-line-height: 1.4;
  
          /* Devtools Borders */
          --devtools-border-width: 2px;
          --devtools-border-width-thick: 3px;
          --devtools-border-width-thin: 1px;
  
          /* Devtools Effects */
          --devtools-backdrop-blur: blur(8px);
          --devtools-scale-hover: 1.02;
          --devtools-scale-normal: 1;
          --devtools-scale-entrance: 0.95;
  
          /* Devtools Animations */
          --devtools-transition-fast: 0.1s;
          --devtools-transition-normal: 0.15s;
          --devtools-transition-slow: 0.2s;
          --devtools-transition-ultra-slow: 0.25s;
          --devtools-easing-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --devtools-easing-out: ease-out;
  
          /* Devtools Box Shadows */
          --devtools-shadow-overlay: 0 0 0 1px var(--devtools-white-semi), 0 4px 16px var(--devtools-primary-shadow-light), 0 2px 8px var(--devtools-black-shadow-light);
          --devtools-shadow-overlay-hover: 0 0 0 1px var(--devtools-white-medium), 0 6px 20px var(--devtools-primary-shadow-medium), 0 3px 12px var(--devtools-black-shadow-medium);
          --devtools-shadow-tooltip: 0 4px 20px var(--devtools-black-shadow-max), 0 2px 8px var(--devtools-black-shadow-strong);
          --devtools-shadow-extra-info-tooltip: 0 8px 32px var(--devtools-black-shadow-heavy);
  
          /* Devtools Performance */
          --devtools-throttle-delay: 50;
          --devtools-debounce-delay: 100;
  
          /* Component Tree View - Modern Dark Mode Design */
          --tree-panel-width: 400px;
          --tree-panel-height: 600px;
          --tree-panel-max-height: 600px;
          --tree-panel-min-height: 400px;
          --tree-panel-min-width: 300px;
          --tree-panel-bg: #0d1117;
          --tree-panel-border: none;
          --tree-panel-shadow: 0 16px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(240, 246, 252, 0.1);
          --tree-panel-border-radius: 8px;
          --tree-panel-z-index: 10001;
          --tree-panel-backdrop-filter: blur(8px);
          --component-tree-panel-opacity: 0.95;
  
          /* Modern Header Styling */
          --tree-header-height: 44px;
          --tree-header-bg: #161b22;
          --tree-header-border-bottom: none;
          --tree-header-padding: 0 20px;
          --tree-header-backdrop-filter: blur(8px);
  
          /* Modern Close Button */
          --tree-close-button-size: 28px;
          --tree-close-button-hover-bg: rgba(240, 246, 252, 0.08);
          --tree-close-button-active-bg: rgba(240, 246, 252, 0.12);
          --tree-close-button-border-radius: 6px;
  
          /* Modern Scrollbar */
          --tree-scrollbar-width: 8px;
          --tree-scrollbar-track-bg: transparent;
          --tree-scrollbar-thumb-bg: rgba(240, 246, 252, 0.2);
          --tree-scrollbar-thumb-hover-bg: rgba(240, 246, 252, 0.3);
          --tree-scrollbar-border-radius: 4px;
  
          /* Dark Mode Colors */
          --tree-text-color: #f0f6fc;
          --tree-text-secondary-color: #8b949e;
          --tree-text-muted-color: #6e7681;
          --tree-component-name-color: #79c0ff;
          --tree-text-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
          --tree-text-font-size: 13px;
  
          /* Tree Node Styling */
          --tree-node-height: 28px;
          --tree-node-padding: 4px 12px;
          --tree-node-indent: 20px;
          --tree-node-hover-bg: rgba(240, 246, 252, 0.06);
          --tree-node-selected-bg: rgba(56, 139, 253, 0.15);
          --tree-node-selected-border: rgba(56, 139, 253, 0.4);
          --tree-node-border-radius: 6px;
          --tree-node-transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  
          /* Tree Icon Styling */
          --tree-icon-color: #8b949e;
          --tree-icon-hover-color: #f0f6fc;
          --tree-icon-size: 12px;
  
          /* Draggable and Resizable Styling */
          --tree-drag-cursor: move;
          --tree-resize-handle-size: 8px;
          --tree-resize-handle-color: rgba(240, 246, 252, 0.1);
          --tree-resize-handle-hover-color: rgba(240, 246, 252, 0.2);
          --tree-drag-opacity: 0.8;
  
          /* Legacy compatibility */
          --devtools-tree-hover-bg: var(--tree-node-hover-bg);
          --devtools-text-color: var(--tree-text-color);
          --devtools-text-color-inverse: #0d1117;
          --devtools-border-radius-small: var(--tree-node-border-radius);
          --devtools-shadow-selection: 0 0 0 1px var(--tree-node-selected-border);
        }
      `;
  
      document.head.appendChild(style);
    }
  
    // Inject CSS variables immediately when script loads
    injectDevtoolsCSSVariables();
  
    // ============================================================================
    // PERSISTENT STORAGE CLASS
    // ============================================================================
  
    /**
     * Centralized localStorage operations with automatic JSON serialization and error handling
     * @class PersistentStorage
     */
    class PersistentStorage {
      /**
       * Get a value from localStorage with automatic JSON parsing
       * @param {string} key - Storage key
       * @param {*} defaultValue - Default value if key doesn't exist or parsing fails
       * @returns {*} Parsed value or default value
       */
      static get(key, defaultValue = null) {
        try {
          const item = window.localStorage.getItem(key);
          if (item === null) {
            return defaultValue;
          }
          return JSON.parse(item);
        } catch (error) {
          console.warn(`Error reading from localStorage key "${key}":`, error);
          return defaultValue;
        }
      }
  
      /**
       * Set a value in localStorage with automatic JSON serialization
       * @param {string} key - Storage key
       * @param {*} value - Value to store
       * @returns {boolean} True if successful, false otherwise
       */
      static set(key, value) {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch (error) {
          console.warn(`Error writing to localStorage key "${key}":`, error);
          return false;
        }
      }
  
      /**
       * Remove a value from localStorage
       * @param {string} key - Storage key
       * @returns {boolean} True if successful, false otherwise
       */
      static remove(key) {
        try {
          window.localStorage.removeItem(key);
          return true;
        } catch (error) {
          console.warn(`Error removing localStorage key "${key}":`, error);
          return false;
        }
      }
  
      /**
       * Check if a key exists in localStorage
       * @param {string} key - Storage key
       * @returns {boolean} True if key exists, false otherwise
       */
      static has(key) {
        try {
          return window.localStorage.getItem(key) !== null;
        } catch (error) {
          console.warn(`Error checking localStorage key "${key}":`, error);
          return false;
        }
      }
  
      /**
       * Get a string value from localStorage (for backward compatibility)
       * @param {string} key - Storage key
       * @param {string} defaultValue - Default value if key doesn't exist
       * @returns {string} String value or default value
       */
      static getString(key, defaultValue = '') {
        try {
          const item = window.localStorage.getItem(key);
          return item !== null ? item : defaultValue;
        } catch (error) {
          console.warn(`Error reading string from localStorage key "${key}":`, error);
          return defaultValue;
        }
      }
  
      /**
       * Set a string value in localStorage (for backward compatibility)
       * @param {string} key - Storage key
       * @param {string} value - String value to store
       * @returns {boolean} True if successful, false otherwise
       */
      static setString(key, value) {
        try {
          window.localStorage.setItem(key, value);
          return true;
        } catch (error) {
          console.warn(`Error writing string to localStorage key "${key}":`, error);
          return false;
        }
      }
    }
  
    // ============================================================================
    // CONSTANTS AND CONFIGURATION
    // ============================================================================
  
    /** @type {string} Local storage key for preferred IDE protocol */
    const PREFER_IDE_KEY = "devtools_prefer_ide_protocol";
  
    /** @type {string} Currently preferred IDE protocol */
    const PREFER_IDE_PROTOCOL = PersistentStorage.getString(PREFER_IDE_KEY, "github");
  
    /** @type {string} Local storage key for viewport visibility filter setting */
    const VIEWPORT_VISIBILITY_FILTER_KEY = "devtools_viewport_visibility_filter";
  
    /** @type {string} Local storage key for initial panel open setting */
    const INITIAL_IS_OPEN_KEY = "devtools_initial_is_open";
  
    /**
     * Editor protocol mappings for different IDEs
     * @readonly
     * @enum {string}
     */
    const EDITOR_PROTOCOL = {
      "idea": "idea://open?file=",
      "vscode": "vscode://file/",
      "cursor": "cursor://file/",
      "windsurf": "windsurf://file/",
      "github": "https://github.com/",
    };

    /*
    idea://open?file=/home/runner/work/webawesome-laminar/webawesome-laminar/doc/src/doc/views/docs/ButtonView.scala&line=15
    https://github.com/nguyenyou/webawesome-laminar/blob/main/doc/src/doc/views/docs/ButtonView.scala#L15
    */
  
    /** @type {number} Throttle delay for mouse move events in milliseconds */
    const MOUSEMOVE_THROTTLE_DELAY = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--devtools-throttle-delay')) || 50;
  
    /** @type {number} Debounce delay for rapid state changes in milliseconds */
    const DEBOUNCE_DELAY = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--devtools-debounce-delay')) || 100;
  
    /**
     * State management class with observer pattern for reactive updates
     * @class DevtoolsState
     */
    class DevtoolsState {
      /**
       * Create a new DevtoolsState instance
       * @constructor
       */
      constructor() {
        /** @type {boolean} Whether Alt key is currently pressed */
        this.altPressed = false;
  
        /** @type {Element|null} Currently targeted element */
        this.currentTargetElement = null;
  
        /** @type {Element|null} Previously targeted element */
        this.lastTargetElement = null;
  
        /** @type {MousePosition} Current mouse position */
        this.currentMousePosition = { clientX: 0, clientY: 0 };
  
        /** @type {boolean} Whether keyboard navigation is active */
        this.keyboardNavigationActive = false;
  
        /** @type {Element|null} Currently selected element in keyboard navigation */
        this.keyboardSelectedElement = null;
  
        /** @type {Element|null} Currently selected element from tree view */
        this.treeSelectedElement = null;
  
        /** @type {boolean} Whether tree view selection is active */
        this.treeSelectionActive = false;
  
        /** @type {Set<StateObserver>} Set of observer functions for state changes */
        this.observers = new Set();
      }
  
      /**
       * Subscribe to state changes
       * @param {StateObserver} callback - Function to call on state changes
       * @returns {Function} Unsubscribe function
       */
      subscribe(callback) {
        this.observers.add(callback);
        return () => this.observers.delete(callback);
      }
  
      /**
       * Notify all observers of state changes
       * @param {string} type - Type of change
       * @param {*} data - Change data
       * @returns {void}
       */
      notify(type, data) {
        this.observers.forEach(callback => {
          try {
            callback(type, data);
          } catch (error) {
            console.error('Error in state observer:', error);
          }
        });
      }
  
      /**
       * Reset all state to initial values
       * @returns {void}
       */
      reset() {
        this.altPressed = false;
        this.currentTargetElement = null;
        this.lastTargetElement = null;
        this.currentMousePosition = { clientX: 0, clientY: 0 };
        this.keyboardNavigationActive = false;
        this.keyboardSelectedElement = null;
        this.treeSelectedElement = null;
        this.treeSelectionActive = false;
  
        this.resetCursor();
        this.notify('reset', {});
      }
  
      /**
       * Set keyboard navigation mode and update visual state
       * @param {boolean} active - Whether keyboard navigation should be active
       * @returns {void}
       */
      setKeyboardNavigationActive(active) {
        this.keyboardNavigationActive = active;
  
        if (!active) {
          this.keyboardSelectedElement = null;
        }
      }
  
      /**
       * Set tree selection active state
       * @param {boolean} active - Whether tree selection is active
       * @returns {void}
       */
      setTreeSelectionActive(active) {
        if (this.treeSelectionActive !== active) {
          this.treeSelectionActive = active;
          this.notify('treeSelectionActiveChanged', { active });
        }
      }
  
      /**
       * Set tree selected element
       * @param {Element|null} element - Selected element from tree view
       * @returns {void}
       */
      setTreeSelectedElement(element) {
        if (this.treeSelectedElement !== element) {
          this.treeSelectedElement = element;
          this.notify('treeSelectionChanged', { element });
        }
      }
  
      /**
       * Set the currently selected element for keyboard navigation
       * @param {Element|null} element - Element to select for keyboard navigation
       * @returns {void}
       */
      setKeyboardSelectedElement(element) {
        const previousElement = this.keyboardSelectedElement;
        this.keyboardSelectedElement = element;
  
        if (element) {
          this.keyboardNavigationActive = true;
        }
  
        if (previousElement !== element) {
          this.notify('keyboardSelectionChanged', { element, previousElement });
        }
      }
  
      /**
       * Update current mouse position
       * @param {number} clientX - X coordinate relative to viewport
       * @param {number} clientY - Y coordinate relative to viewport
       * @returns {void}
       */
      updateMousePosition(clientX, clientY) {
        this.currentMousePosition.clientX = clientX;
        this.currentMousePosition.clientY = clientY;
        this.notify('mousePositionChanged', { clientX, clientY });
      }
  
      /**
       * Set Alt key pressed state and update cursor
       * @param {boolean} pressed - Whether Alt key is pressed
       * @returns {void}
       */
      setAltPressed(pressed) {
        const wasPressed = this.altPressed;
        this.altPressed = pressed;
        document.body.style.cursor = pressed ? "crosshair" : "";
  
        if (wasPressed !== pressed) {
          this.notify('altKeyChanged', { pressed });
        }
      }
  
  
  
      /**
       * Reset cursor to default
       * @returns {void}
       */
      resetCursor() {
        document.body.style.cursor = "";
      }
  
      /**
       * Set current target element
       * @param {Element|null} element - Element to set as current target
       * @returns {void}
       */
      setCurrentTargetElement(element) {
        const previousElement = this.currentTargetElement;
        this.currentTargetElement = element;
  
        if (previousElement !== element) {
          this.notify('targetElementChanged', { element, previousElement });
        }
      }
  
  
  
  
    }
  
    /**
     * Style management class for CSS custom properties and styling configurations
     * @class StyleManager
     */
    class StyleManager {
      /**
       * Create a new StyleManager instance
       * @constructor
       * @param {string} [componentType='default'] - Type of component for styling context
       */
      constructor(componentType = 'default') {
        /** @type {string} Component type for styling context */
        this.componentType = componentType;
  
        /** @type {Map<string, string>} Cache for CSS property values */
        this.cache = new Map();
      }
  
      /**
       * Get CSS custom property value with caching
       * @param {string} propertyName - CSS custom property name (without --)
       * @returns {string} Property value
       */
      getCSSProperty(propertyName) {
        const fullName = `--devtools-${propertyName}`;
  
        if (this.cache.has(fullName)) {
          return this.cache.get(fullName) || '';
        }
  
        const value = getComputedStyle(document.documentElement).getPropertyValue(fullName);
        this.cache.set(fullName, value);
        return value;
      }
  
      /**
       * Get overlay styles for unified styling approach
       * @param {string} [state='normal'] - Visual state: 'normal', 'hover', or 'active'
       * @returns {Object<string, string>} Style object with CSS properties
       */
      getOverlayStyles(state = 'normal') {
        /** @type {Object<string, string>} Base styles for overlay */
        const baseStyles = {
          position: "fixed",
          pointerEvents: "auto",
          display: "block",
          boxSizing: "border-box",
          cursor: "pointer",
          willChange: "transform, box-shadow",
        };
  
        return {
          ...baseStyles,
          backgroundColor: (state === 'hover' || state === 'active')
            ? this.getCSSProperty('primary-bg-medium')
            : this.getCSSProperty('primary-bg-light'),
          border: `${this.getCSSProperty('border-width')} dashed ${this.getCSSProperty('primary-color')}`,
          borderRadius: this.getCSSProperty('border-radius'),
          boxShadow: (state === 'hover' || state === 'active')
            ? this.getCSSProperty('shadow-overlay-hover')
            : this.getCSSProperty('shadow-overlay'),
          zIndex: this.getCSSProperty('overlay-z-index'),
          transition: `all ${this.getCSSProperty('transition-normal')} ${this.getCSSProperty('easing-smooth')}`,
          transform: (state === 'hover' || state === 'active')
            ? `scale(${this.getCSSProperty('scale-hover')})`
            : 'scale(var(--devtools-scale-normal))',
        };
      }
  
      /**
       * Get tooltip styles for unified styling approach
       * @returns {Object<string, string>} Style object with CSS properties
       */
      getTooltipStyles() {
        /** @type {Object<string, string>} Base styles for tooltip */
        const baseStyles = {
          position: "fixed",
          pointerEvents: "none",
          color: this.getCSSProperty('white'),
          padding: this.getCSSProperty('tooltip-padding'),
          borderRadius: this.getCSSProperty('border-radius'),
          fontSize: this.getCSSProperty('font-size'),
          fontFamily: this.getCSSProperty('font-family'),
          whiteSpace: "nowrap",
          zIndex: this.getCSSProperty('tooltip-z-index'),
          display: "block",
          boxSizing: "border-box",
          transition: `all ${this.getCSSProperty('transition-slow')} ${this.getCSSProperty('easing-smooth')}`,
          backdropFilter: this.getCSSProperty('backdrop-blur'),
          lineHeight: this.getCSSProperty('line-height'),
          willChange: "transform, opacity",
          opacity: "1",
          transform: "translateY(0)",
        };
  
        return {
          ...baseStyles,
          backgroundColor: this.getCSSProperty('black-overlay'),
          border: `${this.getCSSProperty('border-width-thin')} solid ${this.getCSSProperty('white-border')}`,
          boxShadow: this.getCSSProperty('shadow-tooltip'),
        };
      }
  
      /**
       * Clear style cache (useful when CSS properties change)
       * @returns {void}
       */
      clearCache() {
        this.cache.clear();
      }
    }
  
    /**
     * Overlay management class responsible for overlay creation, positioning, and visual effects
     * @class OverlayManager
     */
    class OverlayManager {
      /**
       * Create a new OverlayManager instance
       * @constructor
       * @param {DevtoolsState} state - State management instance
       */
      constructor(state) {
        /** @type {DevtoolsState} State management instance */
        this.state = state;
  
        /** @type {StyleManager} Style management instance */
        this.styleManager = new StyleManager('overlay');
  
        /** @type {HTMLDivElement|null} Overlay DOM element */
        this.element = null;
  
        /** @type {boolean} Whether overlay is currently visible */
        this.isVisible = false;
  
        /** @type {Function} Unsubscribe function for state changes */
        this.unsubscribe = this.state.subscribe((type, data) => {
          this.handleStateChange(type, data);
        });
      }
  
      /**
       * Handle state changes
       * @param {string} type - Change type
       * @param {*} data - Change data
       * @returns {void}
       */
      handleStateChange(type, data) {
        switch (type) {
          case 'reset':
            this.hide();
            break;
  
          case 'targetElementChanged':
            // Only show overlay if not in tree selection mode or if this is a tree selection
            if (data.element && (!this.state.treeSelectionActive || this.state.treeSelectedElement === data.element)) {
              this.show(data.element);
            } else if (!this.state.treeSelectionActive) {
              this.hide();
            }
            break;
  
          case 'treeSelectionChanged':
            if (data.element) {
              this.show(data.element);
            } else {
              this.hide();
            }
            break;
  
          case 'treeSelectionActiveChanged':
            if (!data.active && !this.state.currentTargetElement) {
              this.hide();
            }
            break;
        }
      }
  
      /**
       * Create overlay element if it doesn't exist
       * @returns {HTMLDivElement} Overlay element
       */
      createElement() {
        if (this.element) {
          return this.element;
        }
  
        const div = document.createElement("div");
  
        // Apply base styles
        const baseStyles = this.styleManager.getOverlayStyles('normal');
        Object.assign(div.style, baseStyles);
        div.style.display = "none";
  
        // Add event listeners
        this.addEventListeners(div);
  
        document.body.appendChild(div);
        this.element = div;
        return div;
      }
  
      /**
       * Add event listeners to overlay element
       * @param {HTMLDivElement} element - Overlay element
       * @returns {void}
       */
      addEventListeners(element) {
        element.addEventListener("mouseenter", () => {
          this.applyHoverState();
        });
  
        element.addEventListener("mouseleave", () => {
          this.removeHoverState();
        });
  
        element.addEventListener("click", (event) => {
          this.handleClick(event);
        });
      }
  
      /**
       * Show overlay for target element
       * @param {Element} targetElement - Element to highlight
       * @returns {void}
       */
      show(targetElement) {
        if (!targetElement) {
          this.hide();
          return;
        }
  
        // Validate required properties
        if (!PropertyAccessor.hasAllProperties(targetElement)) {
          this.hide();
          return;
        }
  
        this.createElement();
  
        // Calculate and apply position
        const targetRect = targetElement.getBoundingClientRect();
        const position = this.calculatePosition(targetRect);
        this.applyPosition(position);
  
        // Determine visual state based on selection type
        let visualState = 'normal';
        if (this.state.treeSelectionActive && this.state.treeSelectedElement === targetElement) {
          visualState = 'active';
        } else if (this.state.keyboardNavigationActive && this.state.keyboardSelectedElement === targetElement) {
          visualState = 'active';
        } else if (this.state.currentTargetElement === targetElement) {
          visualState = 'hover';
        }
  
        // Apply styling based on state
        const styles = this.styleManager.getOverlayStyles(visualState);
        if (this.element) {
          Object.assign(this.element.style, styles);
        }
  
        this.isVisible = true;
      }
  
      /**
       * Hide overlay with smooth animation
       * @returns {void}
       */
      hide() {
        if (!this.element || !this.isVisible) {
          return;
        }
  
        const transitionDuration = this.styleManager.getCSSProperty('transition-normal') || '0.15s';
        this.element.style.transition = `opacity ${transitionDuration} ${this.styleManager.getCSSProperty('easing-out')}, transform ${transitionDuration} ${this.styleManager.getCSSProperty('easing-out')}`;
        this.element.style.opacity = "0";
        this.element.style.transform = `scale(${this.styleManager.getCSSProperty('scale-entrance')})`;
  
        const timeoutMs = parseFloat(transitionDuration) * 1000;
        setTimeout(() => {
          if (this.element) {
            this.element.style.display = "none";
            this.element.style.opacity = "1";
            this.element.style.transform = 'scale(var(--devtools-scale-normal))';
            this.element.style.transition = `all ${this.styleManager.getCSSProperty('transition-normal')} ${this.styleManager.getCSSProperty('easing-smooth')}`;
          }
        }, timeoutMs);
  
        this.isVisible = false;
      }
  
      /**
       * Calculate overlay position with bounds checking
       * @param {DOMRect} targetRect - Target element bounds
       * @returns {Position} Position object with left, top, width, height
       */
      calculatePosition(targetRect) {
        const offset = parseInt(this.styleManager.getCSSProperty('element-offset')) || 6;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
  
        const left = targetRect.left - offset;
        const top = targetRect.top - offset;
        const width = targetRect.width + offset * 2;
        const height = targetRect.height + offset * 2;
  
        // Ensure overlay stays within viewport bounds
        const adjustedLeft = Math.max(0, Math.min(left, viewportWidth - width));
        const adjustedTop = Math.max(0, Math.min(top, viewportHeight - height));
        const adjustedWidth = Math.min(width, viewportWidth - adjustedLeft);
        const adjustedHeight = Math.min(height, viewportHeight - adjustedTop);
  
        return {
          left: adjustedLeft,
          top: adjustedTop,
          width: adjustedWidth,
          height: adjustedHeight,
        };
      }
  
      /**
       * Apply position to overlay element
       * @param {Position} position - Position object with coordinates and dimensions
       * @returns {void}
       */
      applyPosition(position) {
        if (!this.element) return;
  
        Object.assign(this.element.style, {
          left: `${position.left}px`,
          top: `${position.top}px`,
          width: `${position.width}px`,
          height: `${position.height}px`,
          display: "block",
        });
      }
  
      /**
       * Apply hover/active state styling
       * @returns {void}
       */
      applyHoverState() {
        if (!this.element) return;
  
        const styles = this.styleManager.getOverlayStyles('hover');
        Object.assign(this.element.style, {
          backgroundColor: styles.backgroundColor,
          boxShadow: styles.boxShadow,
          transform: styles.transform,
        });
      }
  
      /**
       * Remove hover/active state styling
       * @returns {void}
       */
      removeHoverState() {
        if (!this.element) return;
  
        const styles = this.styleManager.getOverlayStyles('normal');
        Object.assign(this.element.style, {
          backgroundColor: styles.backgroundColor,
          boxShadow: styles.boxShadow,
          transform: styles.transform,
        });
      }
  
  
  
      /**
       * Handle overlay click events
       * @param {MouseEvent} event - Click event
       * @returns {void}
       */
      handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
  
        try {
          const targetElement = this.state.currentTargetElement;
  
          if (targetElement && PropertyAccessor.hasSourcePath(targetElement)) {
            const sourcePath = PropertyAccessor.getSourcePath(targetElement);
            const sourceLine = PropertyAccessor.getSourceLine(targetElement);
  
            if (sourcePath) {
              openFileAtSourcePath(sourcePath, sourceLine);
              this.state.reset();
            } else {
              console.warn("No source path found for the clicked element");
            }
          } else {
            console.warn("No source path found for the clicked element");
          }
        } catch (error) {
          console.error("Error handling overlay click:", error);
        }
      }
  
      /**
       * Cleanup resources
       * @returns {void}
       */
      destroy() {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
  
        if (this.element) {
          this.element.remove();
          this.element = null;
        }
  
        this.isVisible = false;
      }
    }
  
    /**
     * Tooltip management class for main tooltip functionality
     * @class TooltipManager
     */
    class TooltipManager {
      /**
       * Create a new TooltipManager instance
       * @constructor
       * @param {DevtoolsState} state - State management instance
       */
      constructor(state) {
        /** @type {DevtoolsState} State management instance */
        this.state = state;
  
        /** @type {StyleManager} Style management instance */
        this.styleManager = new StyleManager('tooltip');
  
        /** @type {HTMLDivElement|null} Main tooltip DOM element */
        this.mainTooltip = null;
  
        /** @type {boolean} Whether main tooltip is visible */
        this.isMainVisible = false;
  
        /** @type {Function} Unsubscribe function for state changes */
        this.unsubscribe = this.state.subscribe((type, data) => {
          this.handleStateChange(type, data);
        });
      }
  
      /**
       * Handle state changes
       * @param {string} type - Change type
       * @param {*} data - Change data
       * @returns {void}
       */
      handleStateChange(type, data) {
        switch (type) {
          case 'reset':
            this.hideMain();
            break;
          case 'targetElementChanged':
            if (data.element) {
              this.showMain(data.element);
            } else {
              this.hideMain();
            }
            break;
        }
      }
  
      /**
       * Get clean component name derived from filename
       * @param {string} filename - Component filename
       * @returns {string} Clean component name
       */
      getComponentDisplayName(filename) {
        if (!filename) return 'Unknown';
        // Extract clean component name from filename only
        return filename.replace(/\.(scala|js|ts)$/, '');
      }
  
      /**
       * Create main tooltip element
       * @returns {HTMLDivElement} Tooltip element
       */
      createMainElement() {
        if (this.mainTooltip) {
          return this.mainTooltip;
        }
  
        const tooltip = document.createElement("div");
  
        // Apply base styles
        const styles = this.styleManager.getTooltipStyles();
        Object.assign(tooltip.style, styles);
        tooltip.style.display = "none";
        tooltip.style.opacity = "0";
        tooltip.style.transform = `translateY(${this.styleManager.getCSSProperty('tooltip-translate-offset')})`;
  
        document.body.appendChild(tooltip);
        this.mainTooltip = tooltip;
        return tooltip;
      }
  
      /**
       * Show main tooltip for target element
       * @param {Element} targetElement - Target element
       * @returns {void}
       */
      showMain(targetElement) {
        if (!targetElement) {
          this.hideMain();
          return;
        }
  
        const scalafilename = PropertyAccessor.getFilename(targetElement);
        const scalasourceline = PropertyAccessor.getSourceLine(targetElement);
  
        if (!scalafilename) {
          this.hideMain();
          return;
        }
  
        this.createMainElement();
  
        // Build tooltip content using clean component name only
        const componentName = this.getComponentDisplayName(scalafilename);
  
        // Update content and styles
        if (this.mainTooltip) {
          this.mainTooltip.textContent = `${componentName}:${scalasourceline}`;
          const styles = this.styleManager.getTooltipStyles();
          Object.assign(this.mainTooltip.style, styles);
        }
  
        // Position tooltip
        this.positionMainTooltip();
  
        this.animateMainIn();
        this.isMainVisible = true;
      }
  
      /**
       * Hide main tooltip
       * @returns {void}
       */
      hideMain() {
        if (!this.mainTooltip || !this.isMainVisible) {
          return;
        }
  
        // Fade out animation
        this.mainTooltip.style.opacity = "0";
        this.mainTooltip.style.transform = `translateY(${this.styleManager.getCSSProperty('tooltip-translate-offset')})`;
  
        const transitionDuration = this.styleManager.getCSSProperty('transition-normal') || '0.15s';
        const timeoutMs = parseFloat(transitionDuration) * 1000;
  
        setTimeout(() => {
          if (this.mainTooltip) {
            this.mainTooltip.style.display = "none";
          }
        }, timeoutMs);
  
        this.isMainVisible = false;
      }
  
      /**
       * Position main tooltip relative to overlay
       * @returns {void}
       */
      positionMainTooltip() {
        if (!this.mainTooltip || !this.state.currentTargetElement) return;
  
        // Make visible to measure dimensions
        this.mainTooltip.style.display = "block";
        const tooltipRect = this.mainTooltip.getBoundingClientRect();
  
        // Get target element position
        const targetRect = this.state.currentTargetElement.getBoundingClientRect();
        const offset = parseInt(this.styleManager.getCSSProperty('element-offset')) || 6;
  
        // Create overlay rect for positioning
        const overlayRect = {
          left: targetRect.left - offset,
          top: targetRect.top - offset,
          right: targetRect.right + offset,
          bottom: targetRect.bottom + offset,
          width: targetRect.width + offset * 2,
          height: targetRect.height + offset * 2,
        };
  
        // Calculate position
        const position = this.calculateTooltipPosition(overlayRect, tooltipRect.width, tooltipRect.height);
  
        // Apply position
        Object.assign(this.mainTooltip.style, {
          left: `${position.left}px`,
          top: `${position.top}px`,
        });
      }
  
      /**
       * Calculate optimal tooltip position
       * @param {OverlayRect} overlayRect - Overlay rectangle with positioning data
       * @param {number} tooltipWidth - Tooltip width in pixels
       * @param {number} tooltipHeight - Tooltip height in pixels
       * @returns {TooltipPosition} Position object with left and top coordinates
       */
      calculateTooltipPosition(overlayRect, tooltipWidth, tooltipHeight) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const margin = parseInt(this.styleManager.getCSSProperty('tooltip-margin')) || 10;
  
        // Position strategies in order of preference
        const strategies = [
          // Bottom center
          {
            left: overlayRect.left + overlayRect.width / 2 - tooltipWidth / 2,
            top: overlayRect.bottom + margin,
          },
          // Top center
          {
            left: overlayRect.left + overlayRect.width / 2 - tooltipWidth / 2,
            top: overlayRect.top - tooltipHeight - margin,
          },
          // Right center
          {
            left: overlayRect.right + margin,
            top: overlayRect.top + overlayRect.height / 2 - tooltipHeight / 2,
          },
          // Left center
          {
            left: overlayRect.left - tooltipWidth - margin,
            top: overlayRect.top + overlayRect.height / 2 - tooltipHeight / 2,
          },
        ];
  
        // Find first strategy that fits
        for (const position of strategies) {
          if (this.isPositionWithinViewport(position, tooltipWidth, tooltipHeight, margin)) {
            return position;
          }
        }
  
        // Fallback position
        return {
          left: Math.max(margin, Math.min(
            overlayRect.left + overlayRect.width / 2 - tooltipWidth / 2,
            viewportWidth - tooltipWidth - margin
          )),
          top: Math.max(margin, Math.min(
            overlayRect.bottom + margin,
            viewportHeight - tooltipHeight - margin
          ))
        };
      }
  
      /**
       * Check if position fits within viewport
       * @param {TooltipPosition} position - Position object with left and top properties
       * @param {number} width - Element width in pixels
       * @param {number} height - Element height in pixels
       * @param {number} margin - Margin from edges in pixels
       * @returns {boolean} True if position fits within viewport
       */
      isPositionWithinViewport(position, width, height, margin) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
  
        return (
          position.left >= margin &&
          position.top >= margin &&
          position.left + width <= viewportWidth - margin &&
          position.top + height <= viewportHeight - margin
        );
      }
  
      /**
       * Animate main tooltip entrance
       * @returns {void}
       */
      animateMainIn() {
        if (!this.mainTooltip) return;
  
        // Start with entrance state
        this.mainTooltip.style.opacity = "0";
        this.mainTooltip.style.transform = `translateY(${this.styleManager.getCSSProperty('tooltip-translate-offset')})`;
  
        // Animate to visible state
        requestAnimationFrame(() => {
          if (this.mainTooltip) {
            this.mainTooltip.style.opacity = "1";
            this.mainTooltip.style.transform = "translateY(0)";
          }
        });
      }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      /**
       * Cleanup resources
       */
      destroy() {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
  
        if (this.mainTooltip) {
          this.mainTooltip.remove();
          this.mainTooltip = null;
        }
  
        this.isMainVisible = false;
      }
    }
  
    /**
     * Viewport visibility utility class for detecting which elements are currently visible
     * @class ViewportVisibilityDetector
     */
    class ViewportVisibilityDetector {
      /**
       * Create a new ViewportVisibilityDetector instance
       * @constructor
       */
      constructor() {
        /** @type {Map<Element, boolean>} Cache for element visibility status */
        this.visibilityCache = new Map();
  
        /** @type {number|null} Throttle timeout ID */
        this.throttleTimeoutId = null;
  
        /** @type {number} Throttle delay in milliseconds */
        this.throttleDelay = 100;
  
        /** @type {IntersectionObserver|null} Intersection observer for efficient visibility detection */
        this.intersectionObserver = null;
  
        /** @type {Map<Element, boolean>} Intersection observer results cache */
        this.intersectionCache = new Map();
  
        /** @type {boolean} Whether to use intersection observer for better performance */
        this.useIntersectionObserver = 'IntersectionObserver' in window;
      }
  
      /**
       * Check if an element is currently visible in the viewport
       * @param {Element} element - Element to check
       * @returns {boolean} True if element is visible in viewport
       */
      isElementInViewport(element) {
        if (!element || !element.getBoundingClientRect) {
          return false;
        }
  
        try {
          const rect = element.getBoundingClientRect();
          const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
          // Check if element is completely outside viewport
          if (rect.bottom <= 0 || rect.top >= viewportHeight ||
              rect.right <= 0 || rect.left >= viewportWidth) {
            return false;
          }
  
          // Check if element has any visible area (not zero-sized)
          if (rect.width <= 0 || rect.height <= 0) {
            return false;
          }
  
          // Element is at least partially visible
          return true;
        } catch (error) {
          console.warn('Error checking element viewport visibility:', error);
          return false;
        }
      }
  
      /**
       * Check if an element is fully visible in the viewport
       * @param {Element} element - Element to check
       * @returns {boolean} True if element is fully visible in viewport
       */
      isElementFullyInViewport(element) {
        if (!element || !element.getBoundingClientRect) {
          return false;
        }
  
        try {
          const rect = element.getBoundingClientRect();
          const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= viewportHeight &&
            rect.right <= viewportWidth &&
            rect.width > 0 &&
            rect.height > 0
          );
        } catch (error) {
          console.warn('Error checking element full viewport visibility:', error);
          return false;
        }
      }
  
      /**
       * Get visibility status for an element with caching
       * @param {Element} element - Element to check
       * @param {boolean} [useCache=true] - Whether to use cached results
       * @returns {boolean} True if element is visible in viewport
       */
      getElementVisibility(element, useCache = true) {
        // Use intersection observer cache if available
        if (this.useIntersectionObserver && this.intersectionCache.has(element)) {
          return this.intersectionCache.get(element) || false;
        }
  
        if (useCache && this.visibilityCache.has(element)) {
          return this.visibilityCache.get(element) || false;
        }
  
        const isVisible = this.isElementInViewport(element);
        this.visibilityCache.set(element, isVisible);
        return isVisible;
      }
  
      /**
       * Initialize intersection observer for efficient visibility tracking
       * @param {Element[]} elements - Elements to observe
       * @returns {void}
       */
      initializeIntersectionObserver(elements) {
        if (!this.useIntersectionObserver || this.intersectionObserver) {
          return;
        }
  
        this.intersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              this.intersectionCache.set(entry.target, entry.isIntersecting);
            });
          },
          {
            root: null, // Use viewport as root
            rootMargin: '0px',
            threshold: 0 // Trigger when any part becomes visible
          }
        );
  
        // Observe all elements
        elements.forEach(element => {
          if (this.intersectionObserver) {
            this.intersectionObserver.observe(element);
          }
        });
      }
  
      /**
       * Update intersection observer with new elements
       * @param {Element[]} elements - New elements to observe
       * @returns {void}
       */
      updateIntersectionObserver(elements) {
        if (!this.useIntersectionObserver || !this.intersectionObserver) {
          return;
        }
  
        // Disconnect and reconnect with new elements
        this.intersectionObserver.disconnect();
        this.intersectionCache.clear();
  
        elements.forEach(element => {
          if (this.intersectionObserver) {
            this.intersectionObserver.observe(element);
          }
        });
      }
  
      /**
       * Clear the visibility cache
       * @returns {void}
       */
      clearCache() {
        this.visibilityCache.clear();
        this.intersectionCache.clear();
      }
  
      /**
       * Update visibility cache for multiple elements
       * @param {Element[]} elements - Array of elements to update
       * @returns {void}
       */
      updateVisibilityCache(elements) {
        elements.forEach(element => {
          const isVisible = this.isElementInViewport(element);
          this.visibilityCache.set(element, isVisible);
        });
      }
  
      /**
       * Get all visible elements from a list
       * @param {Element[]} elements - Array of elements to filter
       * @returns {Element[]} Array of visible elements
       */
      filterVisibleElements(elements) {
        return elements.filter(element => this.getElementVisibility(element, false));
      }
  
      /**
       * Throttled cache update function
       * @param {Element[]} elements - Elements to update
       * @param {Function} [callback] - Optional callback after update
       * @returns {void}
       */
      throttledUpdateCache(elements, callback) {
        if (this.throttleTimeoutId) {
          clearTimeout(this.throttleTimeoutId);
        }
  
        this.throttleTimeoutId = setTimeout(() => {
          this.updateVisibilityCache(elements);
          if (callback) {
            callback();
          }
          this.throttleTimeoutId = null;
        }, this.throttleDelay);
      }
  
      /**
       * Check if any part of an element is visible, including checking parent visibility
       * @param {Element} element - Element to check
       * @returns {boolean} True if element or any parent is visible
       */
      isElementOrParentVisible(element) {
        let currentElement = /** @type {Element|null} */ (element);
  
        while (currentElement && currentElement !== document.body) {
          if (this.isElementInViewport(currentElement)) {
            return true;
          }
          currentElement = currentElement.parentElement;
        }
  
        return false;
      }
  
      /**
       * Cleanup resources
       * @returns {void}
       */
      destroy() {
        if (this.throttleTimeoutId) {
          clearTimeout(this.throttleTimeoutId);
          this.throttleTimeoutId = null;
        }
  
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
        }
  
        this.clearCache();
      }
    }
  
    /**
     * Keyboard navigation class for component tree traversal and navigation logic
     * @class KeyboardNavigator
     */
    class KeyboardNavigator {
      /**
       * Create a new KeyboardNavigator instance
       * @constructor
       * @param {DevtoolsState} state - State management instance
       * @param {OverlayManager} overlayManager - Overlay management instance
       */
      constructor(state, overlayManager) {
        /** @type {DevtoolsState} State management instance */
        this.state = state;
  
        /** @type {OverlayManager} Overlay management instance */
        this.overlayManager = overlayManager;
  
        /** @type {Function} Unsubscribe function for state changes */
        this.unsubscribe = this.state.subscribe((type, data) => {
          this.handleStateChange(type, data);
        });
      }
  
      /**
       * Handle state changes
       * @param {string} type - Change type
       * @param {*} data - Change data
       * @returns {void}
       */
      handleStateChange(type, data) {
        switch (type) {
          case 'reset':
            // Navigation state is already reset in DevtoolsState
            break;
          case 'keyboardSelectionChanged':
            if (data.element) {
              this.updateSelection(data.element);
            }
            break;
        }
      }
  
      /**
       * Handle keyboard navigation in a specific direction
       * @param {'up'|'down'|'left'|'right'} direction - Navigation direction
       * @returns {void}
       */
      navigate(direction) {
        let targetElement = null;
        const currentElement = this.state.keyboardSelectedElement || this.state.currentTargetElement;
  
        if (!currentElement) {
          // No current element, start with first top-level component
          const topLevel = this.findTopLevelComponents();
          if (topLevel.length > 0) {
            targetElement = topLevel[0];
          } else {
            return;
          }
        } else {
          switch (direction) {
            case 'up':
              targetElement = this.navigateToParent(currentElement);
              break;
            case 'down':
              targetElement = this.navigateToFirstChild(currentElement);
              break;
            case 'left':
              targetElement = this.navigateToPreviousSibling(currentElement);
              break;
            case 'right':
              targetElement = this.navigateToNextSibling(currentElement);
              break;
          }
        }
  
        if (targetElement) {
          this.state.setKeyboardSelectedElement(targetElement);
          this.state.setCurrentTargetElement(targetElement);
        }
      }
  
      /**
       * Handle Enter key to open selected component file
       * @returns {void}
       */
      openSelectedFile() {
        const targetElement = this.state.keyboardSelectedElement || this.state.currentTargetElement;
  
        if (!targetElement) {
          return;
        }
  
        const scalasourcepath = PropertyAccessor.getSourcePath(targetElement);
        const scalasourceline = PropertyAccessor.getSourceLine(targetElement);
  
        if (!scalasourcepath) {
          return;
        }
  
        try {
          openFileAtSourcePath(scalasourcepath, scalasourceline);
          this.state.reset();
        } catch (error) {
          console.error("Error opening file from keyboard navigation:", error);
        }
      }
  
      /**
       * Update selection and overlay position
       * @param {Element} element - Selected element
       * @returns {void}
       */
      updateSelection(element) {
        this.state.setCurrentTargetElement(element);
      }
  
  
  
      /**
       * Navigate to parent component (with cycling)
       * @param {Element} currentElement - Current element
       * @returns {Element|null} Parent component or deepest if at root
       */
      navigateToParent(currentElement) {
        if (!currentElement) return null;
  
        const parent = this.findParentComponent(currentElement);
        if (parent) {
          return parent;
        } else {
          // At root level, cycle to the deepest component
          return this.findDeepestComponent();
        }
      }
  
      /**
       * Navigate to first child component (with cycling)
       * @param {Element} currentElement - Current element
       * @returns {Element|null} First child or first component if no children
       */
      navigateToFirstChild(currentElement) {
        if (!currentElement) return null;
  
        const children = this.findChildComponents(currentElement);
        if (children.length > 0) {
          return children[0];
        } else {
          // No children, cycle to first component
          return this.findFirstComponent();
        }
      }
  
      /**
       * Navigate to next sibling (with cycling)
       * @param {Element} currentElement - Current element
       * @returns {Element|null} Next sibling
       */
      navigateToNextSibling(currentElement) {
        if (!currentElement) return null;
        const allSiblings = this.getAllSiblingsIncludingCurrent(currentElement);
        return this.getNextSibling(currentElement, allSiblings);
      }
  
      /**
       * Navigate to previous sibling (with cycling)
       * @param {Element} currentElement - Current element
       * @returns {Element|null} Previous sibling
       */
      navigateToPreviousSibling(currentElement) {
        if (!currentElement) return null;
        const allSiblings = this.getAllSiblingsIncludingCurrent(currentElement);
        return this.getPreviousSibling(currentElement, allSiblings);
      }
  
      /**
       * Find immediate parent component
       * @param {Element} currentElement - Current element
       * @returns {Element|null} Parent component
       */
      findParentComponent(currentElement) {
        let element = currentElement.parentElement;
  
        while (element && element !== document.body) {
          if (PropertyAccessor.hasSourcePath(element)) {
            return element;
          }
          element = element.parentElement;
        }
  
        return null;
      }
  
      /**
       * Find direct child components
       * @param {Element} currentElement - Current element
       * @returns {Element[]} Child components
       */
      findChildComponents(currentElement) {
        /** @type {Element[]} */
        const children = [];
        const walker = document.createTreeWalker(
          currentElement,
          NodeFilter.SHOW_ELEMENT,
          {
            acceptNode: function(node) {
              if (node === currentElement) {
                return NodeFilter.FILTER_SKIP;
              }
  
              const elementNode = /** @type {Element} */ (node);
              if (PropertyAccessor.hasSourcePath(elementNode)) {
                return NodeFilter.FILTER_ACCEPT;
              }
  
              return NodeFilter.FILTER_SKIP;
            }
          }
        );
  
        let node;
        while (node = walker.nextNode()) {
          const elementNode = /** @type {Element} */ (node);
  
          // Only include direct children
          let ancestor = elementNode.parentElement;
          let isDirectChild = true;
  
          while (ancestor && ancestor !== currentElement) {
            if (PropertyAccessor.hasSourcePath(ancestor)) {
              isDirectChild = false;
              break;
            }
            ancestor = ancestor.parentElement;
          }
  
          if (isDirectChild) {
            children.push(elementNode);
          }
        }
  
        return children;
      }
  
      /**
       * Find all sibling components including current
       * @param {Element} currentElement - Current element
       * @returns {Element[]} All siblings including current
       */
      getAllSiblingsIncludingCurrent(currentElement) {
        const parent = this.findParentComponent(currentElement);
        if (!parent) {
          return this.findTopLevelComponents();
        }
  
        return this.findChildComponents(parent);
      }
  
      /**
       * Find all top-level components
       * @returns {Element[]} Top-level components
       */
      findTopLevelComponents() {
        /** @type {Element[]} */
        const topLevel = [];
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_ELEMENT,
          {
            acceptNode: function(node) {
              const elementNode = /** @type {Element} */ (node);
              if (PropertyAccessor.hasSourcePath(elementNode)) {
                // Check if has parent with source path
                let parent = elementNode.parentElement;
                while (parent && parent !== document.body) {
                  if (PropertyAccessor.hasSourcePath(parent)) {
                    return NodeFilter.FILTER_REJECT;
                  }
                  parent = parent.parentElement;
                }
                return NodeFilter.FILTER_ACCEPT;
              }
              return NodeFilter.FILTER_SKIP;
            }
          }
        );
  
        let node;
        while (node = walker.nextNode()) {
          const elementNode = /** @type {Element} */ (node);
          topLevel.push(elementNode);
        }
  
        return topLevel;
      }
  
      /**
       * Get all components in depth-first order
       * @returns {Element[]} All components
       */
      getAllComponentsInOrder() {
        /** @type {Element[]} */
        const components = [];
  
        /**
         * @param {Element} element - Element to traverse
         */
        const traverseDepthFirst = (element) => {
          if (PropertyAccessor.hasSourcePath(element)) {
            components.push(element);
          }
  
          const children = this.findChildComponents(element);
          for (const child of children) {
            traverseDepthFirst(child);
          }
        };
  
        const topLevel = this.findTopLevelComponents();
        for (const component of topLevel) {
          traverseDepthFirst(component);
        }
  
        return components;
      }
  
      /**
       * Find deepest component in tree
       * @returns {Element|null} Deepest component
       */
      findDeepestComponent() {
        const allComponents = this.getAllComponentsInOrder();
        return allComponents.length > 0 ? allComponents[allComponents.length - 1] : null;
      }
  
      /**
       * Find first component in tree
       * @returns {Element|null} First component
       */
      findFirstComponent() {
        const allComponents = this.getAllComponentsInOrder();
        return allComponents.length > 0 ? allComponents[0] : null;
      }
  
      /**
       * Get next sibling with cycling
       * @param {Element} currentElement - Current element
       * @param {Element[]} siblings - Sibling elements
       * @returns {Element|null} Next sibling
       */
      getNextSibling(currentElement, siblings) {
        if (siblings.length === 0) return null;
  
        const currentIndex = siblings.indexOf(currentElement);
        if (currentIndex === -1) return siblings[0];
  
        return siblings[(currentIndex + 1) % siblings.length];
      }
  
      /**
       * Get previous sibling with cycling
       * @param {Element} currentElement - Current element
       * @param {Element[]} siblings - Sibling elements
       * @returns {Element|null} Previous sibling
       */
      getPreviousSibling(currentElement, siblings) {
        if (siblings.length === 0) return null;
  
        const currentIndex = siblings.indexOf(currentElement);
        if (currentIndex === -1) return siblings[siblings.length - 1];
  
        return siblings[(currentIndex - 1 + siblings.length) % siblings.length];
      }
  
      /**
       * Cleanup resources
       */
      destroy() {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
      }
    }
  
    /**
     * Event management class for centralized event listener management and cleanup
     * @class EventManager
     */
    class EventManager {
      /**
       * Create a new EventManager instance
       * @constructor
       * @param {DevtoolsSystem} devtoolsSystem - Devtools system instance
       */
      constructor(devtoolsSystem) {
        this.devtoolsSystem = devtoolsSystem;
        this.listeners = new Map();
        this.throttledHandlers = new Map();
        this.debouncedHandlers = new Map();
  
        this.initializeEventListeners();
      }
  
      /**
       * Initialize all event listeners with performance optimizations
       */
      initializeEventListeners() {
        // Keyboard event listeners
        this.addListener(window, "keydown", this.handleKeyDown.bind(this));
        this.addListener(window, "keyup", this.handleKeyUp.bind(this));
  
        // Window focus management
        this.addListener(window, "blur", this.handleWindowBlur.bind(this));
  
        // Mouse movement with optimized throttling
        const optimizedMouseMove = this.createThrottledHandler(
          this.handleMouseMove.bind(this),
          MOUSEMOVE_THROTTLE_DELAY
        );
        this.addListener(window, "mousemove", optimizedMouseMove);
  
        // Scroll handling
        this.addListener(window, "scroll", () => {
          if (this.devtoolsSystem.state.altPressed) {
            this.devtoolsSystem.overlay.hide();
          }
        }, { passive: true });
  
        // Resize handling
        const debouncedResize = this.createDebouncedHandler(() => {
          if (this.devtoolsSystem.state.currentTargetElement && this.devtoolsSystem.state.altPressed) {
            this.devtoolsSystem.state.setCurrentTargetElement(this.devtoolsSystem.state.currentTargetElement);
          }
        }, DEBOUNCE_DELAY);
        this.addListener(window, "resize", debouncedResize, { passive: true });
      }
  
      /**
       * Add event listener with cleanup tracking
       * @param {EventTarget} target - Event target
       * @param {string} type - Event type
       * @param {Function} handler - Event handler
       * @param {Object} [options={}] - Event options
       * @returns {void}
       */
      addListener(target, type, handler, options = {}) {
        target.addEventListener(type, /** @type {EventListenerOrEventListenerObject} */ (handler), options);
  
        const key = `${target.constructor.name}-${type}`;
        if (!this.listeners.has(key)) {
          this.listeners.set(key, []);
        }
        this.listeners.get(key).push({ target, type, handler, options });
      }
  
      /**
       * Create throttled handler with caching
       * @param {Function} handler - Original handler
       * @param {number} delay - Throttle delay
       * @returns {Function} Throttled handler
       */
      createThrottledHandler(handler, delay) {
        const key = `${handler.name}-${delay}`;
        if (this.throttledHandlers.has(key)) {
          return this.throttledHandlers.get(key);
        }
  
        const throttledHandler = throttle(handler, delay);
        this.throttledHandlers.set(key, throttledHandler);
        return throttledHandler;
      }
  
      /**
       * Create debounced handler with caching
       * @param {Function} handler - Original handler
       * @param {number} delay - Debounce delay
       * @returns {Function} Debounced handler
       */
      createDebouncedHandler(handler, delay) {
        const key = `${handler.name}-${delay}`;
        if (this.debouncedHandlers.has(key)) {
          return this.debouncedHandlers.get(key);
        }
  
        const debouncedHandler = debounce(handler, delay);
        this.debouncedHandlers.set(key, debouncedHandler);
        return debouncedHandler;
      }
  
      /**
       * Handle keydown events
       * @param {KeyboardEvent} event - Keyboard event
       */
      handleKeyDown(event) {
        // Handle Alt + Arrow key combinations for keyboard navigation
        if (event.altKey && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
          switch (event.key) {
            case "ArrowUp":
              event.preventDefault();
              this.devtoolsSystem.keyboard.navigate('up');
              return;
            case "ArrowDown":
              event.preventDefault();
              this.devtoolsSystem.keyboard.navigate('down');
              return;
            case "ArrowLeft":
              event.preventDefault();
              this.devtoolsSystem.keyboard.navigate('left');
              return;
            case "ArrowRight":
              event.preventDefault();
              this.devtoolsSystem.keyboard.navigate('right');
              return;
          }
        }
  
        // Handle Enter key for opening selected component
        if (event.key === "Enter" && this.devtoolsSystem.state.altPressed &&
            this.devtoolsSystem.state.keyboardNavigationActive) {
          event.preventDefault();
          this.devtoolsSystem.keyboard.openSelectedFile();
          return;
        }
  
        if (event.key === "Alt" && !this.devtoolsSystem.state.altPressed) {
          // Alt key pressed - clear component tree selection to prevent conflicts
          if (this.devtoolsSystem.treeView && this.devtoolsSystem.treeView.isVisible) {
            this.devtoolsSystem.treeView.clearSelection();
          }
  
          // Alt key pressed - trigger overlay at current mouse position
          this.devtoolsSystem.state.setAltPressed(true);
  
          // Create synthetic mouse event with current position
          const syntheticMouseEvent = {
            clientX: this.devtoolsSystem.state.currentMousePosition.clientX,
            clientY: this.devtoolsSystem.state.currentMousePosition.clientY
          };
  
          // Always render overlay and show tooltip when Alt is pressed
          this.renderDevtoolsOverlay(/** @type {MouseEvent} */ (syntheticMouseEvent));
  
          // Force overlay to show even if target element hasn't changed
          const targetElement = this.getTargetElementAtPosition(/** @type {MouseEvent} */ (syntheticMouseEvent));
          if (targetElement) {
            this.devtoolsSystem.overlay.show(targetElement);
  
            // Force main tooltip to show even if target element hasn't changed
            // This enables Alt key re-triggering on the same element
            this.devtoolsSystem.tooltip.showMain(targetElement);
          }
  
  
        }
      }
  
      /**
       * Handle keyup events
       * @param {KeyboardEvent} event - Keyboard event
       */
      handleKeyUp(event) {
        if (event.key === "Alt") {
          this.devtoolsSystem.state.setAltPressed(false);
          this.devtoolsSystem.state.setKeyboardNavigationActive(false);
          this.devtoolsSystem.overlay.hide();
          this.devtoolsSystem.tooltip.hideMain();
        }
      }
  
      /**
       * Handle window blur events
       */
      handleWindowBlur() {
        this.devtoolsSystem.state.reset();
      }
  
      /**
       * Handle mouse move events
       * @param {MouseEvent} event - Mouse event
       */
      handleMouseMove(event) {
        // Always update mouse position
        this.devtoolsSystem.state.updateMousePosition(event.clientX, event.clientY);
  
        if (this.devtoolsSystem.state.altPressed) {
  
  
          // Switch to mouse mode if in keyboard mode
          const wasKeyboardMode = this.devtoolsSystem.state.keyboardNavigationActive;
          if (this.devtoolsSystem.state.keyboardNavigationActive) {
            this.devtoolsSystem.state.setKeyboardNavigationActive(false);
          }
  
          // Use RAF throttling for smooth updates
          rafThrottle(() => {
            this.renderDevtoolsOverlay(event);
  
            // Force re-render if switching from keyboard mode
            if (wasKeyboardMode && this.devtoolsSystem.state.currentTargetElement) {
              this.devtoolsSystem.state.setCurrentTargetElement(this.devtoolsSystem.state.currentTargetElement);
            }
          })();
        } else {
          this.devtoolsSystem.overlay.hide();
  
        }
      }
  
      /**
       * Render devtools overlay based on mouse position
       * @param {MouseEvent|null} mouseEvent - Mouse event
       */
      renderDevtoolsOverlay(mouseEvent) {
        if (!mouseEvent) {
          this.devtoolsSystem.overlay.hide();
          return;
        }
  
        const targetElement = this.getTargetElementAtPosition(mouseEvent);
        this.devtoolsSystem.state.setCurrentTargetElement(targetElement);
      }
  
      /**
       * Get target element at mouse position
       * @param {MouseEvent} mouseEvent - Mouse event
       * @returns {Element|null} Target element
       */
      getTargetElementAtPosition(mouseEvent) {
        const elementsAtPoint = document.elementsFromPoint(
          mouseEvent.clientX,
          mouseEvent.clientY
        );
  
        for (const element of elementsAtPoint) {
          const devtoolsElement = findDevtoolsElement(element);
          if (devtoolsElement) {
            return devtoolsElement;
          }
        }
  
        return null;
      }
  
  
  
      /**
       * Cleanup all event listeners
       */
      destroy() {
        this.listeners.forEach((listenerList) => {
          listenerList.forEach((/** @type {{target: EventTarget, type: string, handler: Function, options: Object}} */ { target, type, handler, options }) => {
            target.removeEventListener(type, /** @type {EventListenerOrEventListenerObject} */ (handler), options);
          });
        });
  
        this.listeners.clear();
        this.throttledHandlers.clear();
        this.debouncedHandlers.clear();
      }
    }
  
    /**
     * Component Tree View class for displaying hierarchical component structure
     *
     * Features:
     * - Keyboard shortcut activation: Alt + Shift
     * - Hierarchical tree display of UIComponent elements
     * - Keyboard navigation (arrow keys, Enter, Escape)
     * - Collapsible/expandable tree nodes
     * - Responsive design for different screen sizes
     * - Performance optimizations (lazy loading, caching, throttling)
     * - Real-time updates when components change
     *
     * Integration:
     * - Leverages DevtoolsSystem for component discovery and overlay functionality
     * - Maintains consistency with existing keyboard navigation patterns
     * - Follows established CSS custom property conventions
     *
     * Usage:
     * - Press Alt + Shift to open/close the tree view
     * - Use arrow keys to navigate within the tree
     * - Press Enter to open component files
     */
    /**
     * Component Tree View class for displaying hierarchical component structure
     * @class ComponentTreeView
     */
    class ComponentTreeView {
      /**
       * Create a new ComponentTreeView instance
       * @constructor
       * @param {DevtoolsSystem} devtoolsSystem - Devtools system instance
       */
      constructor(devtoolsSystem) {
        /** @type {DevtoolsSystem} */
        this.devtoolsSystem = devtoolsSystem;
  
        /** @type {boolean} */
        this.isVisible = false;
  
        /** @type {TreeNode[]|null} */
        this.treeData = null;
  
        /** @type {Set<string>} */
        this.expandedNodes = new Set();
  
        /** @type {string|null} */
        this.selectedNodeId = null;
  
        // Subscribe to state changes for synchronization
        /** @type {Function} Unsubscribe function for state changes */
        this.unsubscribe = this.devtoolsSystem.state.subscribe((type, data) => {
          this.handleStateChange(type, data);
        });
  
        /** @type {HTMLDivElement|null} */
        this.panelElement = null;
  
        /** @type {HTMLDivElement|null} */
        this.treeContainer = null;
  
        /** @type {HTMLDivElement|null} */
        this.headerElement = null;
  
        /** @type {HTMLButtonElement|null} */
        this.settingsButton = null;
  
        /** @type {HTMLButtonElement|null} */
        this.refreshButton = null;
  
        /** @type {HTMLDivElement|null} */
        this.settingsPanel = null;
  
        /** @type {boolean} */
        this.settingsPanelVisible = false;
  
        /** @type {ViewportVisibilityDetector} */
        this.viewportDetector = new ViewportVisibilityDetector();
  
        /** @type {Function|null} */
        this.throttledViewportRefresh = null;
  
        /** @type {Map<string, any>} */
        this.nodeCache = new Map();
  
        // Draggable state
        /** @type {boolean} */
        this.isDragging = false;
  
        /** @type {{startX: number, startY: number, startLeft: number, startTop: number}|null} */
        this.dragState = null;
  
        // Resizable state
        /** @type {boolean} */
        this.isResizing = false;
  
        /** @type {{startX: number, startY: number, startWidth: number, startHeight: number, startLeft: number, startTop: number, direction: string}|null} */
        this.resizeState = null;
  
        /** @type {Map<string, string>} */
        this.renderCache = new Map();
  
        /** @type {string|null} */
        this.lastComponentsHash = null;
  
        /** @type {Function|null} */
        this.throttledRefresh = null;
  
        /** @type {number|null} */
        this.animationFrameId = null;
  
        /** @type {IntersectionObserver|null} */
        this.intersectionObserver = null;
  
        /** @type {number|null} */
        this.resizeTimeout = null;
  
        // Bind methods
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTreeKeyDown = this.handleTreeKeyDown.bind(this);
        this.handleTreeItemClick = this.handleTreeItemClick.bind(this);
        this.close = this.close.bind(this);
  
        // Initialize performance optimizations
        this.initializePerformanceOptimizations();
  
        // Initialize keyboard shortcut listener
        this.initializeKeyboardShortcut();
  
        // Initialize window resize handler
        this.handleWindowResize = this.handleWindowResize.bind(this);
        window.addEventListener('resize', this.handleWindowResize);
      }
  
      /**
       * Handle state changes for synchronization
       * @param {string} type - Change type
       * @param {*} data - Change data
       * @returns {void}
       */
      handleStateChange(type, data) {
        switch (type) {
          case 'targetElementChanged':
            // Synchronize tree selection with hovered element when Alt is pressed
            if (data.element && this.devtoolsSystem.state.altPressed) {
              this.syncTreeSelectionWithHover(data.element);
            }
            break;
          case 'reset':
            // Clear tree selection when devtools is reset
            if (this.isVisible) {
              this.clearSelection();
            }
            break;
        }
      }
  
      /**
       * Initialize performance optimizations
       */
      initializePerformanceOptimizations() {
        // Create throttled refresh function
        this.throttledRefresh = this.throttle(() => {
          this.refreshTreeIfNeeded();
        }, 250);
  
        // Set up intersection observer for lazy loading
        if ('IntersectionObserver' in window) {
          this.intersectionObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  this.loadNodeContent(entry.target);
                }
              });
            },
            { threshold: 0.1 }
          );
        }
  
        // Listen for DOM mutations to detect component changes
        if ('MutationObserver' in window) {
          this.mutationObserver = new MutationObserver(() => {
            if (this.throttledRefresh) {
              this.throttledRefresh();
            }
          });
        }
      }
  
      /**
       * Initialize keyboard shortcut listener for Alt+Shift
       */
      initializeKeyboardShortcut() {
        document.addEventListener('keydown', this.handleKeyDown);
      }
  
      /**
       * Throttle function execution
       * @param {Function} func - Function to throttle
       * @param {number} delay - Delay in milliseconds
       * @returns {Function} Throttled function
       */
      throttle(func, delay) {
        /** @type {number|undefined} */
        let timeoutId;
        let lastExecTime = 0;
  
        return (/** @type {any[]} */ ...args) => {
          const currentTime = Date.now();
  
          if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
          } else {
            if (timeoutId !== undefined) {
              clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
              func.apply(this, args);
              lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
          }
        };
      }
  
      /**
       * Generate hash for components to detect changes
       * @param {ComponentInfo[]} components - Component array
       * @returns {string} Hash string
       */
      generateComponentsHash(components) {
        return components
          .map(comp => `${comp.filename}:${comp.line}:${comp.path}`)
          .join('|');
      }
  
      /**
       * Check if tree needs refresh and refresh if needed
       */
      refreshTreeIfNeeded() {
        if (!this.isVisible) return;
  
        const components = this.devtoolsSystem.getAllComponents();
        const currentHash = this.generateComponentsHash(components);
  
        if (currentHash !== this.lastComponentsHash) {
          this.lastComponentsHash = currentHash;
          this.refreshTree();
        }
      }
  
      /**
       * Load content for a tree node (lazy loading)
       * @param {Element} nodeElement - Node element to load
       */
      loadNodeContent(nodeElement) {
        const nodeId = /** @type {HTMLElement} */ (nodeElement).dataset.nodeId;
        if (!nodeId || this.renderCache.has(nodeId)) return;
  
        const node = this.findNodeById(nodeId);
        if (!node) return;
  
        // Mark as loaded
        this.renderCache.set(nodeId, 'loaded');
  
        // Load additional metadata if needed
        this.loadNodeMetadata(node, nodeElement);
      }
  
      /**
       * Load additional metadata for a node
       * @param {TreeNode} _node - Tree node (unused for now)
       * @param {Element} nodeElement - Node DOM element
       * @returns {void}
       */
      loadNodeMetadata(_node, nodeElement) {
        // This could load additional information like component props,
        // file size, last modified date, etc.
        // For now, we'll just ensure the element is properly initialized
  
        const htmlElement = /** @type {HTMLElement} */ (nodeElement);
        if (!htmlElement.dataset.loaded) {
          htmlElement.dataset.loaded = 'true';
  
          // Add any additional lazy-loaded content here
          // For example, component statistics, dependencies, etc.
        }
      }
  
      /**
       * Handle keyboard shortcut for opening tree view
       * @param {KeyboardEvent} event - Keyboard event
       */
      handleKeyDown(event) {
        // Alt + Shift combination
        if (event.altKey && event.shiftKey && !event.metaKey && !event.ctrlKey) {
          event.preventDefault();
          this.toggle();
        }
      }
  
      /**
       * Get saved panel position from localStorage
       * @returns {{x: number, y: number}} Position object with x and y coordinates
       */
      getSavedPosition() {
        const position = PersistentStorage.get('componentTreePanel.position');
  
        // Validate position values
        if (position && typeof position.x === 'number' && typeof position.y === 'number' &&
            position.x >= 0 && position.y >= 0 &&
            position.x < window.innerWidth && position.y < window.innerHeight) {
          return position;
        }
  
        // Return default position (top-right with 8px offset)
        return {
          x: window.innerWidth - 400 - 8,
          y: 8
        };
      }
  
      /**
       * Save panel position to localStorage
       * @param {number} x - X coordinate
       * @param {number} y - Y coordinate
       */
      savePosition(x, y) {
        PersistentStorage.set('componentTreePanel.position', { x, y });
      }
  
      /**
       * Get saved panel size from localStorage
       * @returns {{width: number, height: number}} Size object with width and height
       */
      getSavedSize() {
        const size = PersistentStorage.get('componentTreePanel.size');
  
        // Validate size values with min/max constraints
        if (size && typeof size.width === 'number' && typeof size.height === 'number' &&
            size.width >= 300 && size.height >= 400 &&
            size.width <= window.innerWidth && size.height <= window.innerHeight) {
          return size;
        }
  
        // Return default size
        return {
          width: 400,
          height: 600
        };
      }
  
      /**
       * Save panel size to localStorage
       * @param {number} width - Panel width
       * @param {number} height - Panel height
       */
      saveSize(width, height) {
        PersistentStorage.set('componentTreePanel.size', { width, height });
      }
  
      /**
       * Toggle tree view visibility
       */
      toggle() {
        if (this.isVisible) {
          this.hide();
        } else {
          this.show();
        }
      }
  
      /**
       * Show the component tree view
       */
      show() {
        if (this.isVisible) return;
  
        try {
          this.buildTreeData();
          this.initializeTreeState();
          this.createPanel();
          this.renderTree();
          this.positionPanel();
  
          // Add React DevTools-style entrance animation
          this.animateEntrance();
  
          this.isVisible = true;
  
          // Start monitoring for changes
          this.startChangeMonitoring();
  
        // Start viewport monitoring if filter is enabled
        if (this.devtoolsSystem.options.viewportVisibilityFilter) {
          this.startViewportMonitoring();
          this.initializeViewportOptimizations();
        }
  
          // Handle edge cases
          this.handleEdgeCases();
  
          // Focus the tree for keyboard navigation with slight delay
          setTimeout(() => {
            if (this.treeContainer) {
              this.treeContainer.focus();
            }
          }, 200);
        } catch (error) {
          console.error('Error showing component tree view:', error);
          this.hide();
        }
      }
  
      /**
       * Start monitoring for component changes
       */
      startChangeMonitoring() {
        if (this.mutationObserver) {
          this.mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-source-path', DEVTOOLS_PROPERTIES.SCALA_SOURCE_PATH]
          });
        }
      }
  
      /**
       * Stop monitoring for component changes
       */
      stopChangeMonitoring() {
        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
        }
      }
  
      /**
       * Hide the component tree view with React DevTools-style exit animation
       */
      hide() {
        if (!this.isVisible) return;
  
        // Stop monitoring changes
        this.stopChangeMonitoring();
  
        // Stop viewport monitoring
        this.stopViewportMonitoring();
  
        // Deactivate tree selection mode
        this.devtoolsSystem.state.setTreeSelectionActive(false);
        this.devtoolsSystem.state.setTreeSelectedElement(null);
  
        // Cancel any pending animations
        if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
          this.animationFrameId = null;
        }
  
        // Clean up drag and resize state
        this.cleanupDragAndResize();
  
        // Animate exit
        this.animateExit(() => {
          if (this.panelElement) {
            this.panelElement.remove();
            this.panelElement = null;
            this.treeContainer = null;
            this.headerElement = null;
          }
  
          // Reset settings panel state when panel is hidden
          this.settingsPanel = null;
          this.settingsButton = null;
          this.refreshButton = null;
          this.settingsPanelVisible = false;
          // Remove any lingering click outside listener
          document.removeEventListener('click', this.handleClickOutsideSettings, true);
  
          this.isVisible = false;
          this.selectedNodeId = null;
  
          // Clear caches
          this.renderCache.clear();
  
          // Hide any active overlays
          this.devtoolsSystem.hideAll();
        });
      }
  
      /**
       * Close the tree view (same as hide but can be called from UI)
       */
      close() {
        this.hide();
      }
  
      /**
       * Build hierarchical tree data from components
       */
      buildTreeData() {
        const components = this.devtoolsSystem.getAllComponents();
        const currentHash = this.generateComponentsHash(components);
  
        // Use cached data if available and unchanged
        if (this.lastComponentsHash === currentHash && this.treeData) {
          return;
        }
  
        this.lastComponentsHash = currentHash;
        this.treeData = this.buildHierarchy(components);
  
        // Clear render cache when tree data changes
        this.renderCache.clear();
  
        // Update viewport optimizations if enabled
        if (this.devtoolsSystem.options.viewportVisibilityFilter) {
          this.updateViewportOptimizations();
        }
      }
  
      /**
       * Build component hierarchy from flat component list
       * @param {ComponentInfo[]} components - Flat list of components
       * @returns {TreeNode[]} Hierarchical tree structure
       */
      buildHierarchy(components) {
        const nodeMap = new Map();
        /** @type {TreeNode[]} */
        const rootNodes = [];
  
        // Create tree nodes for each component
        components.forEach((comp, index) => {
          const node = {
            id: `node-${index}`,
            element: comp.element,
            filename: comp.filename,
            line: comp.line,
            path: comp.path,
            children: [],
            parent: null,
            expanded: false,
            level: 0
          };
          nodeMap.set(comp.element, node);
        });
  
        // Build parent-child relationships
        components.forEach(comp => {
          const node = nodeMap.get(comp.element);
          const parentElement = this.findParentComponent(comp.element);
  
          if (parentElement && nodeMap.has(parentElement)) {
            const parentNode = nodeMap.get(parentElement);
            node.parent = parentNode;
            node.level = parentNode.level + 1;
            parentNode.children.push(node);
          } else {
            // This is a root node
            rootNodes.push(node);
          }
        });
  
        // Sort children by DOM order for consistent display
        this.sortNodesByDOMOrder(rootNodes);
  
        return rootNodes;
      }
  
      /**
       * Find parent component element using existing keyboard navigator logic
       * @param {Element} element - Child element
       * @returns {Element|null} Parent component element
       */
      findParentComponent(element) {
        return this.devtoolsSystem.keyboard.findParentComponent(element);
      }
  
      /**
       * Sort tree nodes by their DOM order recursively
       * @param {TreeNode[]} nodes - Array of tree nodes to sort
       * @returns {void}
       */
      sortNodesByDOMOrder(nodes) {
        // Sort by DOM position
        nodes.sort((a, b) => {
          const position = a.element.compareDocumentPosition(b.element);
          if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
            return -1;
          } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
            return 1;
          }
          return 0;
        });
  
        // Recursively sort children
        nodes.forEach(node => {
          if (node.children.length > 0) {
            this.sortNodesByDOMOrder(node.children);
          }
        });
      }
  
      /**
       * Get clean component name derived from filename
       * @param {TreeNode} node - Tree node
       * @returns {string} Clean component name
       */
      getComponentDisplayName(node) {
        // Extract clean component name from filename only
        const filename = node.filename || 'Unknown';
        return filename.replace(/\.(scala|js|ts)$/, '');
      }
  
  
  
      /**
       * Flatten tree structure for linear navigation
       * @param {TreeNode[]|null} [nodes] - Root nodes
       * @param {TreeNode[]} [result] - Accumulator for flattened nodes
       * @returns {TreeNode[]} Flattened array of visible nodes
       */
      flattenVisibleNodes(nodes = this.treeData, result = []) {
        if (!nodes) return result;
        nodes.forEach(node => {
          result.push(node);
          if (node.expanded && node.children.length > 0) {
            this.flattenVisibleNodes(node.children, result);
          }
        });
        return result;
      }
  
      /**
       * Create the main panel element
       */
      createPanel() {
        // Get saved position and size
        const savedPosition = this.getSavedPosition();
        const savedSize = this.getSavedSize();
  
        // Create main panel container
        this.panelElement = document.createElement('div');
        this.panelElement.style.cssText = `
          position: fixed;
          left: ${savedPosition.x}px;
          top: ${savedPosition.y}px;
          width: ${savedSize.width}px;
          height: ${savedSize.height}px;
          min-width: var(--tree-panel-min-width);
          min-height: var(--tree-panel-min-height);
          background: var(--tree-panel-bg);
          border-radius: var(--tree-panel-border-radius);
          box-shadow: var(--tree-panel-shadow);
          z-index: var(--tree-panel-z-index);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: var(--tree-text-font-family);
          font-size: var(--tree-text-font-size);
          backdrop-filter: var(--tree-panel-backdrop-filter);
          -webkit-backdrop-filter: var(--tree-panel-backdrop-filter);
          transform: scale(0.95);
          opacity: 0;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        `;
  
        // Create header (draggable)
        const header = document.createElement('div');
        header.style.cssText = `
          height: var(--tree-header-height);
          background: var(--tree-header-bg);
          padding: var(--tree-header-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          backdrop-filter: var(--tree-header-backdrop-filter);
          -webkit-backdrop-filter: var(--tree-header-backdrop-filter);
          border-radius: var(--tree-panel-border-radius) var(--tree-panel-border-radius) 0 0;
          position: relative;
          cursor: var(--tree-drag-cursor);
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        `;
  
        // Store reference to header for dragging
        this.headerElement = header;
  
        // Create title
        const title = document.createElement('div');
        title.textContent = 'Laminar DevTools';
        title.style.cssText = `
          font-weight: 600;
          color: var(--tree-text-color);
          font-size: 14px;
          letter-spacing: -0.01em;
          margin: 0;
          line-height: 1.4;
        `;
  
        // Create header controls container
        const headerControls = document.createElement('div');
        headerControls.style.cssText = `
          display: flex;
          align-items: center;
          gap: 4px;
        `;
  
        // Create settings button
        const settingsButton = document.createElement('button');
        settingsButton.title = 'Settings';
        settingsButton.style.cssText = `
          width: var(--tree-close-button-size);
          height: var(--tree-close-button-size);
          border: none;
          background: transparent;
          color: var(--tree-text-secondary-color);
          font-size: 16px;
          line-height: 1;
          font-weight: 400;
          cursor: pointer;
          border-radius: var(--tree-close-button-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--tree-node-transition);
          opacity: 0.8;
          font-family: var(--tree-text-font-family);
          padding: 0;
          margin: 0;
        `;
        const settingsIcon = document.createElement('span');
        settingsIcon.innerHTML = '⚙';
        settingsIcon.style.cssText = `
          position: relative;
          font-size: 20px;
          top: -1px;
        `
        settingsButton.appendChild(settingsIcon);
  
        // Settings button hover effects
        settingsButton.addEventListener('mouseenter', () => {
          settingsButton.style.background = 'var(--tree-close-button-hover-bg)';
          settingsButton.style.opacity = '1';
          settingsButton.style.color = 'var(--tree-text-color)';
        });
  
        settingsButton.addEventListener('mouseleave', () => {
          settingsButton.style.background = 'transparent';
          settingsButton.style.opacity = '0.7';
          settingsButton.style.color = 'var(--tree-text-secondary-color)';
        });
  
        settingsButton.addEventListener('mousedown', () => {
          settingsButton.style.background = 'var(--tree-close-button-active-bg)';
        });
  
        settingsButton.addEventListener('mouseup', () => {
          settingsButton.style.background = 'var(--tree-close-button-hover-bg)';
        });
  
        // Store reference to settings button
        this.settingsButton = settingsButton;
  
        // Add settings button click handler
        settingsButton.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleSettingsPanel();
        });
  
        // Create refresh button
        const refreshButton = document.createElement('button');
        refreshButton.title = 'Refresh component tree';
  
        // Create refresh icon element that will be animated
        const refreshIcon = document.createElement('span');
        refreshIcon.innerHTML = '↻';
        refreshIcon.style.cssText = `
          display: inline-block;
          transition: transform 0.3s ease;
        `;
        refreshButton.appendChild(refreshIcon);
        refreshButton.style.cssText = `
          width: var(--tree-close-button-size);
          height: var(--tree-close-button-size);
          border: none;
          background: transparent;
          color: var(--tree-text-secondary-color);
          font-size: 16px;
          line-height: var(--tree-close-button-size);
          font-weight: 400;
          cursor: pointer;
          border-radius: var(--tree-close-button-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--tree-node-transition);
          opacity: 0.8;
          font-family: var(--tree-text-font-family);
        `;
  
        // Refresh button hover effects
        refreshButton.addEventListener('mouseenter', () => {
          refreshButton.style.background = 'var(--tree-close-button-hover-bg)';
          refreshButton.style.opacity = '1';
          refreshButton.style.color = 'var(--tree-text-color)';
        });
  
        refreshButton.addEventListener('mouseleave', () => {
          refreshButton.style.background = 'transparent';
          refreshButton.style.opacity = '0.7';
          refreshButton.style.color = 'var(--tree-text-secondary-color)';
        });
  
        refreshButton.addEventListener('mousedown', () => {
          refreshButton.style.background = 'var(--tree-close-button-active-bg)';
        });
  
        refreshButton.addEventListener('mouseup', () => {
          refreshButton.style.background = 'var(--tree-close-button-hover-bg)';
        });
  
        // Store reference to refresh button
        this.refreshButton = refreshButton;
  
        // Add refresh button click handler
        refreshButton.addEventListener('click', (e) => {
          e.stopPropagation();
          this.performFullRefresh();
        });
  
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '✕';
        closeButton.style.cssText = `
          width: var(--tree-close-button-size);
          height: var(--tree-close-button-size);
          border: none;
          background: transparent;
          color: var(--tree-text-secondary-color);
          font-size: 14px;
          position: relative;
          top: 1px;
          line-height: var(--tree-close-button-size);
          font-weight: 400;
          cursor: pointer;
          border-radius: var(--tree-close-button-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--tree-node-transition);
          opacity: 0.8;
          font-family: var(--tree-text-font-family);
        `;
  
        closeButton.addEventListener('mouseenter', () => {
          closeButton.style.background = 'var(--tree-close-button-hover-bg)';
          closeButton.style.opacity = '1';
          closeButton.style.color = 'var(--tree-text-color)';
        });
  
        closeButton.addEventListener('mouseleave', () => {
          closeButton.style.background = 'transparent';
          closeButton.style.opacity = '0.7';
          closeButton.style.color = 'var(--tree-text-secondary-color)';
        });
  
        closeButton.addEventListener('mousedown', () => {
          closeButton.style.background = 'var(--tree-close-button-active-bg)';
        });
  
        closeButton.addEventListener('mouseup', () => {
          closeButton.style.background = 'var(--tree-close-button-hover-bg)';
        });
  
        closeButton.addEventListener('click', this.close);
  
        // Create React DevTools-style tree container
        this.treeContainer = document.createElement('div');
        this.treeContainer.tabIndex = 0; // Make focusable for keyboard navigation
        this.treeContainer.style.cssText = `
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 12px 12px 12px 8px;
          outline: none;
          scroll-behavior: smooth;
          background: var(--tree-panel-bg);
          position: relative;
          margin: 0;
        `;
  
        // Add custom scrollbar styling
        this.treeContainer.style.cssText += `
          scrollbar-width: thin;
          scrollbar-color: var(--tree-scrollbar-thumb-bg) var(--tree-scrollbar-track-bg);
        `;
  
        // Add webkit scrollbar styles for better cross-browser support
        const scrollbarStyle = document.createElement('style');
        scrollbarStyle.textContent = `
          .devtools-tree-container::-webkit-scrollbar {
            width: var(--tree-scrollbar-width);
          }
          .devtools-tree-container::-webkit-scrollbar-track {
            background: var(--tree-scrollbar-track-bg);
            border-radius: var(--tree-scrollbar-border-radius);
          }
          .devtools-tree-container::-webkit-scrollbar-thumb {
            background: var(--tree-scrollbar-thumb-bg);
            border-radius: var(--tree-scrollbar-border-radius);
          }
          .devtools-tree-container::-webkit-scrollbar-thumb:hover {
            background: var(--tree-scrollbar-thumb-hover-bg);
          }
          .devtools-tree-container::-webkit-scrollbar-corner {
            background: transparent;
          }
        `;
  
        // Only add if not already present
        if (!document.getElementById('devtools-tree-scrollbar-styles')) {
          document.head.appendChild(scrollbarStyle);
        }
  
        // Add keyboard event listener
        this.treeContainer.addEventListener('keydown', this.handleTreeKeyDown);
  
        // Assemble the header controls
        headerControls.appendChild(refreshButton);
        headerControls.appendChild(settingsButton);
        headerControls.appendChild(closeButton);
  
        // Assemble the panel
        header.appendChild(title);
        header.appendChild(headerControls);
        this.panelElement.appendChild(header);
        this.panelElement.appendChild(this.treeContainer);
  
        // Add keyboard shortcuts info
        // this.addKeyboardShortcutsInfo();
  
        // Add resize handles
        this.addResizeHandles();
  
        // Add drag and resize event listeners
        this.addDragAndResizeListeners();
  
        // Add to document
        document.body.appendChild(this.panelElement);
      }
  
      /**
       * Render the tree structure
       */
      renderTree() {
        if (!this.treeContainer || !this.treeData) return;
  
        // Clear existing content
        this.treeContainer.innerHTML = '';
  
        // Render root nodes
        if (this.treeContainer) {
          this.treeData.forEach(node => {
            this.renderTreeNode(node, this.treeContainer);
          });
        }
  
        // If no components found or no visible components, show a Refresh Tree button instead
        if (this.treeData.length === 0 || this.treeContainer.children.length === 0) {
          const refreshButton = document.createElement('button');
          refreshButton.textContent = 'Refresh Tree';
  
          refreshButton.style.cssText = `
            padding: 8px 14px;
            margin: 32px auto;
            display: block;
            background: var(--tree-close-button-hover-bg);
            color: var(--tree-text-color);
            border: 1px solid var(--tree-close-button-active-bg);
            border-radius: var(--tree-node-border-radius);
            cursor: pointer;
            font-size: 13px;
            font-family: var(--tree-text-font-family);
            transition: background 0.15s ease, border-color 0.15s ease;
          `;
  
          refreshButton.addEventListener('mouseenter', () => {
            refreshButton.style.background = 'var(--tree-close-button-active-bg)';
          });
  
          refreshButton.addEventListener('mouseleave', () => {
            refreshButton.style.background = 'var(--tree-close-button-hover-bg)';
          });
  
          refreshButton.addEventListener('click', () => {
            this.performFullRefresh();
          });
  
          const refreshButtonContainer = document.createElement('div');
          refreshButtonContainer.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          `;
          refreshButtonContainer.appendChild(refreshButton);
          this.treeContainer.appendChild(refreshButtonContainer);
        }
      }
  
      /**
       * Render a single tree node and its children
       * @param {TreeNode} node - Tree node to render
       * @param {Element|null} container - Container element
       * @returns {void}
       */
      renderTreeNode(node, container) {
        if (!container) return;
  
        // Check viewport visibility filter
        if (this.devtoolsSystem.options.viewportVisibilityFilter) {
          const isVisible = this.viewportDetector.isElementInViewport(node.element);
          if (!isVisible) {
            // Skip rendering this node if it's not visible in viewport
            return;
          }
        }
  
        // Create simple node element
        const nodeElement = document.createElement('div');
        nodeElement.dataset.nodeId = node.id;
        nodeElement.style.cssText = `
          display: flex;
          align-items: center;
          min-height: var(--tree-node-height);
          padding: var(--tree-node-padding);
          margin: 1px 8px;
          padding-left: calc(${node.level * 20}px + 12px);
          cursor: pointer;
          user-select: none;
          font-family: var(--tree-text-font-family);
          font-size: var(--tree-text-font-size);
          line-height: 1.4;
          color: var(--tree-text-color);
          border-radius: var(--tree-node-border-radius);
          transition: var(--tree-node-transition);
          position: relative;
        `;
  
        // Add enhanced hover effects for visual feedback only (no overlay interactions)
        nodeElement.addEventListener('mouseenter', () => {
          if (this.selectedNodeId !== node.id) {
            nodeElement.style.background = 'var(--tree-node-hover-bg)';
          }
        });
  
        nodeElement.addEventListener('mouseleave', () => {
          if (this.selectedNodeId !== node.id) {
            nodeElement.style.background = 'transparent';
            nodeElement.style.transform = 'translateX(0)';
          }
        });
  
        // Add click handler
        nodeElement.addEventListener('click', (e) => {
          e.stopPropagation();
          this.handleTreeItemClick(e);
        });
  
        // Create simple expand/collapse triangle (only for nodes with children)
        const expandIcon = document.createElement('span');
        expandIcon.style.cssText = `
          width: var(--tree-icon-size);
          height: var(--tree-icon-size);
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--tree-icon-color);
          font-size: 10px;
          flex-shrink: 0;
          font-family: var(--tree-text-font-family);
          transition: var(--tree-node-transition);
          border-radius: 2px;
        `;
  
        if (node.children.length > 0) {
          expandIcon.innerHTML = '▶';
          expandIcon.style.cursor = 'pointer';
          expandIcon.style.transform = node.expanded ? 'rotate(90deg)' : 'rotate(0deg)';
  
          expandIcon.addEventListener('mouseenter', () => {
            expandIcon.style.color = 'var(--tree-icon-hover-color)';
            expandIcon.style.background = 'rgba(240, 246, 252, 0.08)';
          });
  
          expandIcon.addEventListener('mouseleave', () => {
            expandIcon.style.color = 'var(--tree-icon-color)';
            expandIcon.style.background = 'transparent';
          });
  
          expandIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleNodeExpansion(node);
          });
        } else {
          // Empty space for leaf nodes to maintain alignment
          expandIcon.innerHTML = '';
          expandIcon.style.cursor = 'default';
        }
  
        // Create simple text content - just the component name
        const componentName = this.getComponentDisplayName(node);
        const nameElement = document.createElement('span');
        nameElement.style.cssText = `
          color: var(--tree-component-name-color);
          font-weight: 400;
          flex: 1;
          transition: var(--tree-node-transition);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `;
        nameElement.textContent = componentName;
  
        // Assemble node - just expand icon and component name
        nodeElement.appendChild(expandIcon);
        nodeElement.appendChild(nameElement);
  
        // Add to container
        container.appendChild(nodeElement);
  
        // Render children if expanded
        if (node.expanded && node.children.length > 0) {
          node.children.forEach(child => {
            this.renderTreeNode(child, container);
          });
        }
      }
  
  
  
      /**
       * Toggle expansion state of a tree node
       * @param {TreeNode} node - Tree node to toggle
       * @returns {void}
       */
      toggleNodeExpansion(node) {
        if (node.children.length === 0) return;
  
        const wasExpanded = node.expanded;
        node.expanded = !node.expanded;
  
        // Update expanded nodes set
        if (node.expanded) {
          this.expandedNodes.add(node.id);
        } else {
          this.expandedNodes.delete(node.id);
        }
  
        // Animate the expansion/collapse
        this.animateNodeToggle(node, wasExpanded);
      }
  
      /**
       * Animate node expansion/collapse
       * @param {TreeNode} node - Tree node
       * @param {boolean} _wasExpanded - Previous expansion state (unused)
       * @returns {void}
       */
      animateNodeToggle(node, _wasExpanded) {
        // Cancel any existing animation
        if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
        }
  
        // Find the node element
        const nodeElement = this.treeContainer?.querySelector(`[data-node-id="${node.id}"]`);
        if (!nodeElement) {
          this.renderTree();
          return;
        }
  
        // Update the expand icon immediately
        const expandIcon = nodeElement.querySelector('.devtools-tree-expand-icon');
        if (expandIcon) {
          expandIcon.innerHTML = node.expanded ? '▼' : '▶';
          const htmlExpandIcon = /** @type {HTMLElement} */ (expandIcon);
          htmlExpandIcon.style.transform = node.expanded ? 'rotate(0deg)' : 'rotate(-90deg)';
          htmlExpandIcon.style.transition = 'transform 0.2s ease';
        }
  
        // Use requestAnimationFrame for smooth rendering
        this.animationFrameId = requestAnimationFrame(() => {
          this.renderTree();
          this.animationFrameId = null;
        });
      }
  
      /**
       * Expand all nodes in the tree
       * @returns {void}
       */
      expandAll() {
        if (this.treeData) {
          this.forEachNode(this.treeData, (/** @type {TreeNode} */ node) => {
            if (node.children.length > 0) {
              node.expanded = true;
              this.expandedNodes.add(node.id);
            }
          });
          this.renderTree();
        }
      }
  
      /**
       * Collapse all nodes in the tree
       * @returns {void}
       */
      collapseAll() {
        if (this.treeData) {
          this.forEachNode(this.treeData, (/** @type {TreeNode} */ node) => {
            node.expanded = false;
            this.expandedNodes.delete(node.id);
          });
          this.renderTree();
        }
      }
  
      /**
       * Apply function to each node in the tree
       * @param {TreeNode[]} nodes - Tree nodes
       * @param {NodeCallback} fn - Function to apply
       * @returns {void}
       */
      forEachNode(nodes, fn) {
        nodes.forEach(node => {
          fn(node);
          if (node.children.length > 0) {
            this.forEachNode(node.children, fn);
          }
        });
      }
  
      /**
       * Find tree node by ID
       * @param {string} nodeId - Node ID to find
       * @returns {TreeNode|null} Found node or null
       */
      findNodeById(nodeId) {
        let found = null;
        if (this.treeData) {
          this.forEachNode(this.treeData, (node) => {
            if (node.id === nodeId) {
              found = node;
            }
          });
        }
        return found;
      }
  
      /**
       * Find tree node by DOM element
       * @param {Element} element - DOM element to find
       * @returns {TreeNode|null} Found node or null
       */
      findNodeByElement(element) {
        let found = null;
        if (this.treeData) {
          this.forEachNode(this.treeData, (node) => {
            if (node.element === element) {
              found = node;
            }
          });
        }
        return found;
      }
  
      /**
       * Synchronize tree selection with hovered element
       * @param {Element} element - DOM element that is being hovered
       * @returns {void}
       */
      syncTreeSelectionWithHover(element) {
        // Only sync if tree view is visible and Alt key is pressed
        if (!this.isVisible || !this.devtoolsSystem.state.altPressed) {
          return;
        }
  
        // Find the corresponding tree node
        const node = this.findNodeByElement(element);
        if (!node) {
          return;
        }
  
        // Expand parent nodes to ensure the target node is visible
        this.expandPathToNode(node);
  
        // Select the node with hover sync flag to avoid overlay conflicts
        this.selectNode(node, true);
      }
  
      /**
       * Expand all parent nodes to make a node visible
       * @param {TreeNode} targetNode - Node to make visible
       * @returns {void}
       */
      expandPathToNode(targetNode) {
        let currentNode = targetNode.parent;
        let needsRerender = false;
  
        // Walk up the tree and expand all parent nodes
        while (currentNode) {
          if (!currentNode.expanded) {
            currentNode.expanded = true;
            this.expandedNodes.add(currentNode.id);
            needsRerender = true;
          }
          currentNode = currentNode.parent;
        }
  
        // Re-render the tree if any nodes were expanded
        if (needsRerender) {
          this.renderTree();
        }
      }
  
      /**
       * Validate and adjust panel position if needed (e.g., after window resize)
       */
      positionPanel() {
        if (!this.panelElement) return;
  
        const panel = this.panelElement;
        const rect = panel.getBoundingClientRect();
        const viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        };
  
        let needsAdjustment = false;
        let newLeft = rect.left;
        let newTop = rect.top;
        let newWidth = rect.width;
        let newHeight = rect.height;
  
        // Ensure panel is within viewport bounds
        if (rect.right > viewport.width) {
          newLeft = viewport.width - rect.width;
          needsAdjustment = true;
        }
        if (rect.bottom > viewport.height) {
          newTop = viewport.height - rect.height;
          needsAdjustment = true;
        }
        if (rect.left < 0) {
          newLeft = 0;
          needsAdjustment = true;
        }
        if (rect.top < 0) {
          newTop = 0;
          needsAdjustment = true;
        }
  
        // Ensure panel size constraints
        const minWidth = 300;
        const minHeight = 400;
        if (rect.width < minWidth) {
          newWidth = minWidth;
          needsAdjustment = true;
        }
        if (rect.height < minHeight) {
          newHeight = minHeight;
          needsAdjustment = true;
        }
  
        // Apply adjustments if needed
        if (needsAdjustment) {
          panel.style.left = `${newLeft}px`;
          panel.style.top = `${newTop}px`;
          panel.style.width = `${newWidth}px`;
          panel.style.height = `${newHeight}px`;
  
          // Save the adjusted position and size
          this.savePosition(newLeft, newTop);
          this.saveSize(newWidth, newHeight);
        }
      }
  
      /**
       * Animate React DevTools-style entrance
       */
      animateEntrance() {
        if (!this.panelElement) return;
  
        const panel = this.panelElement;
  
        // Set initial state for entrance animation
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(-8px) scale(0.98)';
        panel.style.transition = `
          opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        `;
  
        // Trigger entrance animation
        requestAnimationFrame(() => {
          panel.style.opacity = 'var(--component-tree-panel-opacity)';
          panel.style.transform = 'translateY(0) scale(1)';
        });
      }
  
      /**
       * Animate React DevTools-style exit
       * @param {Function} callback - Callback to execute after animation
       */
      animateExit(callback) {
        if (!this.panelElement) {
          callback();
          return;
        }
  
        const panel = this.panelElement;
  
        // Set exit animation
        panel.style.transition = `
          opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
          transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)
        `;
  
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(-4px) scale(0.99)';
  
        // Execute callback after animation
        setTimeout(callback, 150);
      }
  
      /**
       * Handle keyboard navigation within the tree
       * @param {KeyboardEvent} event - Keyboard event
       */
      handleTreeKeyDown(event) {
        const visibleNodes = this.flattenVisibleNodes();
        if (visibleNodes.length === 0) return;
  
        let currentIndex = -1;
        if (this.selectedNodeId) {
          currentIndex = visibleNodes.findIndex(node => node.id === this.selectedNodeId);
        }
  
        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();
            this.navigateUp(visibleNodes, currentIndex);
            break;
  
          case 'ArrowDown':
            event.preventDefault();
            this.navigateDown(visibleNodes, currentIndex);
            break;
  
          case 'ArrowLeft':
            event.preventDefault();
            this.navigateLeft(visibleNodes, currentIndex);
            break;
  
          case 'ArrowRight':
            event.preventDefault();
            this.navigateRight(visibleNodes, currentIndex);
            break;
  
          case 'Enter':
          case ' ':
            event.preventDefault();
            this.activateSelectedNode();
            break;
  
          case 'Escape':
            event.preventDefault();
            if (this.selectedNodeId) {
              // First escape clears selection
              this.clearSelection();
            } else {
              // Second escape closes tree view
              this.hide();
            }
            break;
  
          case 'Home':
            event.preventDefault();
            this.selectNode(visibleNodes[0]);
            break;
  
          case 'End':
            event.preventDefault();
            this.selectNode(visibleNodes[visibleNodes.length - 1]);
            break;
  
          case 'c':
          case 'C':
            // Clear selection
            event.preventDefault();
            this.clearSelection();
            break;
  
          case 'Delete':
          case 'Backspace':
            // Alternative clear selection shortcuts
            event.preventDefault();
            this.clearSelection();
            break;
        }
      }
  
      /**
       * Navigate up in the tree
       * @param {TreeNode[]} visibleNodes - Array of visible nodes
       * @param {number} currentIndex - Current selection index
       * @returns {void}
       */
      navigateUp(visibleNodes, currentIndex) {
        if (currentIndex > 0) {
          this.selectNode(visibleNodes[currentIndex - 1]);
        } else if (visibleNodes.length > 0) {
          // Wrap to last item
          this.selectNode(visibleNodes[visibleNodes.length - 1]);
        }
      }
  
      /**
       * Navigate down in the tree
       * @param {TreeNode[]} visibleNodes - Array of visible nodes
       * @param {number} currentIndex - Current selection index
       * @returns {void}
       */
      navigateDown(visibleNodes, currentIndex) {
        if (currentIndex < visibleNodes.length - 1) {
          this.selectNode(visibleNodes[currentIndex + 1]);
        } else if (visibleNodes.length > 0) {
          // Wrap to first item
          this.selectNode(visibleNodes[0]);
        }
      }
  
      /**
       * Navigate left in the tree (collapse or go to parent)
       * @param {TreeNode[]} visibleNodes - Array of visible nodes
       * @param {number} currentIndex - Current selection index
       * @returns {void}
       */
      navigateLeft(visibleNodes, currentIndex) {
        if (currentIndex === -1) return;
  
        const currentNode = visibleNodes[currentIndex];
  
        if (currentNode.expanded && currentNode.children.length > 0) {
          // Collapse current node
          this.toggleNodeExpansion(currentNode);
        } else if (currentNode.parent) {
          // Go to parent node
          this.selectNode(currentNode.parent);
        }
      }
  
      /**
       * Navigate right in the tree (expand or go to first child)
       * @param {TreeNode[]} visibleNodes - Array of visible nodes
       * @param {number} currentIndex - Current selection index
       * @returns {void}
       */
      navigateRight(visibleNodes, currentIndex) {
        if (currentIndex === -1) return;
  
        const currentNode = visibleNodes[currentIndex];
  
        if (currentNode.children.length > 0) {
          if (!currentNode.expanded) {
            // Expand current node
            this.toggleNodeExpansion(currentNode);
          } else {
            // Go to first child
            this.selectNode(currentNode.children[0]);
          }
        }
      }
  
      /**
       * Activate the currently selected node (expand/collapse or open file)
       */
      activateSelectedNode() {
        if (!this.selectedNodeId) return;
  
        const node = this.findNodeById(this.selectedNodeId);
        if (!node) return;
  
        if (node.children.length > 0) {
          // Toggle expansion for nodes with children
          this.toggleNodeExpansion(node);
        } else {
          // Open file for leaf nodes
          this.openNodeFile(node);
        }
      }
  
      /**
       * Select a tree node
       * @param {TreeNode} node - Node to select
       * @param {boolean} [fromHoverSync=false] - Whether this selection is from hover synchronization
       * @returns {void}
       */
      selectNode(node, fromHoverSync = false) {
        if (!node) return;
  
        // Update selection
        const previousId = this.selectedNodeId;
        this.selectedNodeId = node.id;
  
        // Update visual selection in tree
        this.updateNodeSelection(previousId, node.id);
  
        // Scroll tree node into view
        this.scrollNodeIntoView(node.id);
  
        // Show overlay for the selected element with tree selection mode
        // Skip overlay update if this is from hover synchronization to avoid conflicts
        if (!fromHoverSync) {
          this.devtoolsSystem.showOverlayForElement(node.element, true);
        }
  
        // Optionally scroll the actual DOM element into view
        this.scrollElementIntoView(node.element);
      }
  
      /**
       * Update visual selection state
       * @param {string|null} previousId - Previous selected node ID
       * @param {string|null} currentId - Current selected node ID
       * @returns {void}
       */
      updateNodeSelection(previousId, currentId) {
        // Remove previous selection
        if (previousId && this.treeContainer) {
          const prevElement = this.treeContainer.querySelector(`[data-node-id="${previousId}"]`);
          if (prevElement) {
            const htmlPrevElement = /** @type {HTMLElement} */ (prevElement);
            htmlPrevElement.style.background = 'transparent';
            htmlPrevElement.style.transform = 'translateX(0)';
            htmlPrevElement.style.boxShadow = 'none';
  
            // Reset component name color
            const nameElement = htmlPrevElement.querySelector('.devtools-tree-name');
            if (nameElement) {
              const htmlNameElement = /** @type {HTMLElement} */ (nameElement);
              htmlNameElement.style.color = 'var(--tree-component-name-color)';
              htmlNameElement.style.fontWeight = '400';
            }
          }
        }
  
        // Add current selection with modern dark mode highlighting
        if (currentId && this.treeContainer) {
          const currentElement = this.treeContainer.querySelector(`[data-node-id="${currentId}"]`);
          if (currentElement) {
            const htmlCurrentElement = /** @type {HTMLElement} */ (currentElement);
            htmlCurrentElement.style.background = 'var(--tree-node-selected-bg)';
            htmlCurrentElement.style.boxShadow = '0 0 0 1px var(--tree-node-selected-border)';
  
            // Highlight component name
            const nameElement = htmlCurrentElement.querySelector('.devtools-tree-name');
            if (nameElement) {
              const htmlNameElement = /** @type {HTMLElement} */ (nameElement);
              htmlNameElement.style.color = 'var(--tree-text-color)';
              htmlNameElement.style.fontWeight = '500';
            }
          }
        }
      }
  
      /**
       * Scroll node into view
       * @param {string} nodeId - Node ID to scroll to
       * @returns {void}
       */
      scrollNodeIntoView(nodeId) {
        if (this.treeContainer) {
          const nodeElement = this.treeContainer.querySelector(`[data-node-id="${nodeId}"]`);
          if (nodeElement) {
            nodeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest'
            });
          }
        }
      }
  
      /**
       * Scroll actual DOM element into view if not visible
       * @param {Element} element - DOM element to scroll to
       * @param {Object} [options] - Scroll options
       * @param {boolean} [options.force=false] - Force scroll even if element is visible
       * @param {string} [options.behavior='smooth'] - Scroll behavior
       * @param {string} [options.block='center'] - Vertical alignment
       * @param {string} [options.inline='center'] - Horizontal alignment
       * @returns {void}
       */
      scrollElementIntoView(element, options = {}) {
        if (!element) return;
  
        const {
          force = false,
          behavior = 'smooth',
          block = 'center',
          inline = 'center'
        } = options;
  
        // Check if element is in viewport
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
        // Add some margin to consider element "visible" even if partially off-screen
        const margin = 50;
        const isVisible = (
          rect.top >= -margin &&
          rect.left >= -margin &&
          rect.bottom <= viewportHeight + margin &&
          rect.right <= viewportWidth + margin
        );
  
        // Scroll if element is not visible or if forced
        if (!isVisible || force) {
          try {
            element.scrollIntoView({
              behavior: /** @type {ScrollBehavior} */ (behavior),
              block: /** @type {ScrollLogicalPosition} */ (block),
              inline: /** @type {ScrollLogicalPosition} */ (inline)
            });
          } catch (error) {
            // Fallback for older browsers
            element.scrollIntoView(true);
          }
        }
      }
  
      /**
       * Open file for a tree node
       * @param {TreeNode} node - Tree node
       * @returns {void}
       */
      openNodeFile(node) {
        if (!node.path || !node.line) return;
  
        try {
          // Use the existing openFileAtSourcePath function
          openFileAtSourcePath(node.path, node.line);
          // Optionally close the tree view after opening file
          // this.hide();
        } catch (error) {
          console.error('Error opening file from tree view:', error);
        }
      }
  
  
  
      /**
       * Handle click on tree items
       * @param {MouseEvent} event - Mouse event
       * @returns {void}
       */
      handleTreeItemClick(event) {
        if (!event.target) return;
        const nodeElement = /** @type {Element} */ (event.target).closest('[data-node-id]');
        if (!nodeElement) return;
  
        const nodeId = /** @type {HTMLElement} */ (nodeElement).dataset.nodeId;
        if (!nodeId) return;
  
        const node = this.findNodeById(nodeId);
        if (!node) return;
  
        // Select the node
        this.selectNode(node);
  
        // Handle different click behaviors
        if (event.detail === 2) {
          // Double click - open file
          this.openNodeFile(node);
        } else if (event.shiftKey) {
          // Shift click - toggle expansion
          if (node.children.length > 0) {
            this.toggleNodeExpansion(node);
          }
        } else {
          // Single click - just select and show overlay
          // Already handled by selectNode above
        }
      }
  
  
  
      /**
       * Clear tree selection
       * @returns {void}
       */
      clearSelection() {
        if (this.selectedNodeId) {
          // Update visual selection
          this.updateNodeSelection(this.selectedNodeId, null);
          this.selectedNodeId = null;
        }
  
        // Deactivate tree selection mode
        this.devtoolsSystem.state.setTreeSelectionActive(false);
        this.devtoolsSystem.state.setTreeSelectedElement(null);
      }
  
      /**
       * Initialize tree with some default expansions
       */
      initializeTreeState() {
        // Expand root nodes by default
        if (this.treeData && this.treeData.length > 0) {
          this.treeData.forEach(node => {
            if (node.children.length > 0) {
              node.expanded = true;
              this.expandedNodes.add(node.id);
            }
          });
        }
      }
  
      /**
       * Handle window resize events
       */
      handleWindowResize() {
        if (this.isVisible && this.panelElement) {
          // Throttle resize handling
          if (this.resizeTimeout !== null) {
            clearTimeout(this.resizeTimeout);
          }
          this.resizeTimeout = setTimeout(() => {
            this.positionPanel();
          }, 150);
        }
      }
  
      /**
       * Update tree when components change
       */
      refreshTree() {
        if (!this.isVisible) return;
  
        const wasExpanded = new Set(this.expandedNodes);
        const selectedId = this.selectedNodeId;
  
        // Rebuild tree data
        this.buildTreeData();
  
        // Restore expansion states
        if (this.treeData) {
          this.forEachNode(this.treeData, (node) => {
            if (wasExpanded.has(node.id)) {
              node.expanded = true;
              this.expandedNodes.add(node.id);
            }
          });
        }
  
        // Re-render
        this.renderTree();
  
        // Restore selection if possible
        if (selectedId && this.findNodeById(selectedId)) {
          this.selectedNodeId = selectedId;
          this.updateNodeSelection(null, selectedId);
        }
      }
  
      /**
       * Perform a complete refresh of the component tree
       * Clears all cached data and rebuilds the tree from scratch
       * @returns {void}
       */
      performFullRefresh() {
        if (!this.isVisible) return;
  
        try {
          // Clear all caches and state
          this.clearAllCaches();
  
          // Reset tree state
          this.treeData = null;
          this.lastComponentsHash = '';
          this.expandedNodes.clear();
          this.selectedNodeId = null;
  
          // Clear selection state
          this.clearSelection();
  
          // Force rebuild of tree data
          this.buildTreeData();
  
          // Initialize with default expansions
          this.initializeTreeState();
  
          // Re-render the tree
          this.renderTree();
  
          // Update viewport optimizations if enabled
          if (this.devtoolsSystem.options.viewportVisibilityFilter) {
            this.updateViewportOptimizations();
          }
  
          // Add visual feedback for the refresh action
          this.showRefreshFeedback();
  
        } catch (error) {
          console.error('Error performing full refresh:', error);
        }
      }
  
      /**
       * Clear all caches used by the component tree
       * @returns {void}
       */
      clearAllCaches() {
        // Clear tree-specific caches
        this.nodeCache.clear();
        this.renderCache.clear();
  
        // Clear viewport detector caches
        if (this.viewportDetector) {
          this.viewportDetector.clearCache();
        }
  
        // Clear devtools system caches if available
        if (this.devtoolsSystem.overlay && this.devtoolsSystem.overlay.styleManager) {
          this.devtoolsSystem.overlay.styleManager.clearCache();
        }
  
        if (this.devtoolsSystem.tooltip && this.devtoolsSystem.tooltip.styleManager) {
          this.devtoolsSystem.tooltip.styleManager.clearCache();
        }
      }
  
      /**
       * Show visual feedback for refresh action
       * @returns {void}
       */
      showRefreshFeedback() {
        if (!this.refreshButton) return;
  
        // Find the refresh icon within the button
        const refreshIcon = this.refreshButton.querySelector('.devtools-tree-refresh-icon');
        if (!refreshIcon) return;
  
        // Add a single 360-degree clockwise rotation animation to only the refresh icon
        const htmlRefreshIcon = /** @type {HTMLElement} */ (refreshIcon);
  
        // Reset to starting position without transition
        htmlRefreshIcon.style.transition = 'none';
        htmlRefreshIcon.style.transform = 'rotate(0deg)';
  
        // Force a reflow to ensure the reset is applied
        htmlRefreshIcon.offsetHeight;
  
        // Apply the rotation animation
        htmlRefreshIcon.style.transition = 'transform 0.3s ease';
        htmlRefreshIcon.style.transform = 'rotate(360deg)';
  
        // After animation completes, reset to 0deg without transition (360deg = 0deg visually)
        setTimeout(() => {
          if (htmlRefreshIcon) {
            htmlRefreshIcon.style.transition = 'none';
            htmlRefreshIcon.style.transform = 'rotate(0deg)';
  
            // Restore the transition for future animations
            setTimeout(() => {
              if (htmlRefreshIcon) {
                htmlRefreshIcon.style.transition = 'transform 0.3s ease';
              }
            }, 10);
          }
        }, 300);
      }
  
      /**
       * Add keyboard shortcuts info to the tree panel
       */
      addKeyboardShortcutsInfo() {
        if (!this.treeContainer) return;
  
        const shortcutsInfo = document.createElement('div');
        shortcutsInfo.style.cssText = `
          padding: 12px 16px;
          background: rgba(240, 246, 252, 0.03);
          font-size: 11px;
          color: var(--tree-text-muted-color);
          line-height: 1.4;
          border-radius: 0 0 var(--tree-panel-border-radius) var(--tree-panel-border-radius);
          margin-top: auto;
        `;
  
        shortcutsInfo.innerHTML = `
          <div style="margin-bottom: 4px;"><strong>Keyboard shortcuts:</strong></div>
          <div>↑↓ Navigate • ←→ Expand/Collapse • Enter Open • Esc Close</div>
        `;
  
        if (this.panelElement) {
          this.panelElement.appendChild(shortcutsInfo);
        }
      }
  
      /**
       * Add resize handles to the panel
       */
      addResizeHandles() {
        if (!this.panelElement) return;
  
        // Create a single bottom-right resize control
        const handle = document.createElement('div');
        handle.className = "devtools-tree-resize-handle"
        handle.dataset.direction = 'bottom-right';
  
        // Style: curved L-shape line with extra gap, thicker & lighter border for visibility
        handle.style.cssText = `
          position: absolute;
          width: 18px;
          height: 18px;
          right: 6px;               /* gap from outer edge */
          bottom: 6px;              /* gap from outer edge */
          cursor: se-resize;
          background: transparent;
          box-sizing: border-box;
          border-right: 2px solid rgba(240, 246, 252, 0.2);
          border-bottom: 2px solid rgba(240, 246, 252, 0.2);
          border-bottom-right-radius: var(--tree-panel-border-radius);
          pointer-events: auto;
          transition: border-color 0.15s ease;
        `;
  
        // Hover feedback – make even lighter / brighter
        handle.addEventListener('mouseenter', () => {
          handle.style.borderRightColor = 'rgba(240, 246, 252, 0.85)';
          handle.style.borderBottomColor = 'rgba(240, 246, 252, 0.85)';
        });
        handle.addEventListener('mouseleave', () => {
          handle.style.borderRightColor = 'rgba(240, 246, 252, 0.2)';
          handle.style.borderBottomColor = 'rgba(240, 246, 252, 0.2)';
        });
  
        this.panelElement.appendChild(handle);
      }
  
      /**
       * Add drag and resize event listeners
       */
      addDragAndResizeListeners() {
        if (!this.panelElement || !this.headerElement) return;
  
        // Dragging functionality
        this.headerElement.addEventListener('mousedown', (event) => {
          this.handleDragStart(/** @type {MouseEvent} */ (event));
        });
  
        // Resizing functionality
        const resizeHandles = this.panelElement.querySelectorAll('.devtools-tree-resize-handle');
        resizeHandles.forEach(handle => {
          handle.addEventListener('mousedown', (event) => {
            this.handleResizeStart(/** @type {MouseEvent} */ (event));
          });
        });
  
        // Global mouse events (bound to document for better tracking)
        document.addEventListener('mousemove', (event) => {
          this.handleMouseMove(/** @type {MouseEvent} */ (event));
        });
        document.addEventListener('mouseup', (event) => {
          this.handleMouseUp(/** @type {MouseEvent} */ (event));
        });
      }
  
      /**
       * Handle drag start
       * @param {MouseEvent} event - Mouse event
       */
      handleDragStart(event) {
        // Only allow dragging from header, not from close button
        if (event.target && event.target instanceof Element &&
            event.target.closest('.devtools-tree-close-button')) {
          return;
        }
  
        event.preventDefault();
        event.stopPropagation();
  
        if (!this.panelElement) return;
  
        this.isDragging = true;
        const rect = this.panelElement.getBoundingClientRect();
  
        this.dragState = {
          startX: event.clientX,
          startY: event.clientY,
          startLeft: rect.left,
          startTop: rect.top
        };
  
        // Add visual feedback
        this.panelElement.style.opacity = 'var(--tree-drag-opacity)';
        document.body.style.cursor = 'var(--tree-drag-cursor)';
        document.body.style.userSelect = 'none';
      }
  
      /**
       * Handle resize start
       * @param {MouseEvent} event - Mouse event
       */
      handleResizeStart(event) {
        event.preventDefault();
        event.stopPropagation();
  
        if (!this.panelElement || !event.target || !(event.target instanceof HTMLElement)) return;
  
        this.isResizing = true;
        const rect = this.panelElement.getBoundingClientRect();
        const direction = event.target.dataset.direction || '';
  
        this.resizeState = {
          startX: event.clientX,
          startY: event.clientY,
          startWidth: rect.width,
          startHeight: rect.height,
          startLeft: rect.left,
          startTop: rect.top,
          direction: direction
        };
  
        // Add visual feedback
        document.body.style.cursor = event.target.style.cursor || 'default';
        document.body.style.userSelect = 'none';
      }
  
      /**
       * Handle mouse move for dragging and resizing
       * @param {MouseEvent} event - Mouse event
       */
      handleMouseMove(event) {
        if (this.isDragging && this.dragState) {
          this.handleDrag(event);
        } else if (this.isResizing && this.resizeState) {
          this.handleResize(event);
        }
      }
  
      /**
       * Handle mouse up to end dragging or resizing
       * @param {MouseEvent} _event - Mouse event (unused)
       */
      handleMouseUp(_event) {
        if (this.isDragging) {
          this.endDrag();
        } else if (this.isResizing) {
          this.endResize();
        }
      }
  
      /**
       * Handle dragging movement
       * @param {MouseEvent} event - Mouse event
       */
      handleDrag(event) {
        if (!this.panelElement || !this.dragState) return;
  
        const deltaX = event.clientX - this.dragState.startX;
        const deltaY = event.clientY - this.dragState.startY;
  
        let newLeft = this.dragState.startLeft + deltaX;
        let newTop = this.dragState.startTop + deltaY;
  
        // Constrain to viewport
        const rect = this.panelElement.getBoundingClientRect();
        const maxLeft = window.innerWidth - rect.width;
        const maxTop = window.innerHeight - rect.height;
  
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));
  
        this.panelElement.style.left = `${newLeft}px`;
        this.panelElement.style.top = `${newTop}px`;
      }
  
      /**
       * Handle resizing movement
       * @param {MouseEvent} event - Mouse event
       */
      handleResize(event) {
        if (!this.panelElement || !this.resizeState) return;
  
        const deltaX = event.clientX - this.resizeState.startX;
        const deltaY = event.clientY - this.resizeState.startY;
        const direction = this.resizeState.direction;
  
        let newWidth = this.resizeState.startWidth;
        let newHeight = this.resizeState.startHeight;
        let newLeft = this.resizeState.startLeft;
        let newTop = this.resizeState.startTop;
  
        // Handle width changes
        if (direction.includes('right')) {
          newWidth = this.resizeState.startWidth + deltaX;
        } else if (direction.includes('left')) {
          newWidth = this.resizeState.startWidth - deltaX;
          newLeft = this.resizeState.startLeft + deltaX;
        }
  
        // Handle height changes
        if (direction.includes('bottom')) {
          newHeight = this.resizeState.startHeight + deltaY;
        } else if (direction.includes('top')) {
          newHeight = this.resizeState.startHeight - deltaY;
          newTop = this.resizeState.startTop + deltaY;
        }
  
        // Apply constraints
        const minWidth = 300;
        const minHeight = 400;
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
  
        newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
        newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));
  
        // Adjust position if we hit minimum size constraints
        if (direction.includes('left') && newWidth === minWidth) {
          newLeft = this.resizeState.startLeft + this.resizeState.startWidth - minWidth;
        }
        if (direction.includes('top') && newHeight === minHeight) {
          newTop = this.resizeState.startTop + this.resizeState.startHeight - minHeight;
        }
  
        // Ensure panel doesn't go outside viewport
        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - newWidth));
        newTop = Math.max(0, Math.min(newTop, window.innerHeight - newHeight));
  
        this.panelElement.style.width = `${newWidth}px`;
        this.panelElement.style.height = `${newHeight}px`;
        this.panelElement.style.left = `${newLeft}px`;
        this.panelElement.style.top = `${newTop}px`;
      }
  
      /**
       * End dragging operation
       */
      endDrag() {
        if (!this.isDragging || !this.panelElement) return;
  
        this.isDragging = false;
  
        // Save position to localStorage
        const rect = this.panelElement.getBoundingClientRect();
        this.savePosition(rect.left, rect.top);
  
        // Remove visual feedback
        this.panelElement.style.opacity = 'var(--component-tree-panel-opacity)';
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
  
        this.dragState = null;
      }
  
      /**
       * End resizing operation
       */
      endResize() {
        if (!this.isResizing || !this.panelElement) return;
  
        this.isResizing = false;
  
        // Save size to localStorage
        const rect = this.panelElement.getBoundingClientRect();
        this.saveSize(rect.width, rect.height);
  
        // Remove visual feedback
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
  
        this.resizeState = null;
      }
  
      /**
       * Clean up drag and resize state and event listeners
       */
      cleanupDragAndResize() {
        // Reset drag state
        if (this.isDragging) {
          this.isDragging = false;
          this.dragState = null;
        }
  
        // Reset resize state
        if (this.isResizing) {
          this.isResizing = false;
          this.resizeState = null;
        }
  
        // Reset document styles
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
  
        // Note: We don't remove the global event listeners here because they're
        // shared across all instances and will be cleaned up when the class is destroyed
      }
  
      /**
       * Handle edge cases and error recovery
       */
      handleEdgeCases() {
        // Handle case where no components are found
        if (!this.treeData || this.treeData.length === 0) {
          console.warn('ComponentTreeView: No components found');
          return;
        }
  
        // Handle case where DOM elements are removed
        this.forEachNode(this.treeData, (node) => {
          if (!document.contains(node.element)) {
            console.warn('ComponentTreeView: Component element no longer in DOM', node);
          }
        });
  
        // Handle case where panel is positioned off-screen
        if (this.panelElement) {
          const rect = this.panelElement.getBoundingClientRect();
          if (rect.left < 0 || rect.top < 0 ||
              rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
            this.positionPanel();
          }
        }
      }
  
      /**
       * Toggle settings panel visibility
       * @returns {void}
       */
      toggleSettingsPanel() {
        if (this.settingsPanelVisible) {
          this.hideSettingsPanel();
        } else {
          this.showSettingsPanel();
        }
      }
  
      /**
       * Show settings panel
       * @returns {void}
       */
      showSettingsPanel() {
        if (!this.settingsPanel) {
          this.createSettingsPanel();
        }
  
        if (this.settingsPanel) {
          this.settingsPanel.style.display = 'block';
          this.settingsPanelVisible = true;
  
          // Add click outside listener to close panel
          setTimeout(() => {
            document.addEventListener('click', this.handleClickOutsideSettings, true);
          }, 0);
        }
      }
  
      /**
       * Hide settings panel
       * @returns {void}
       */
      hideSettingsPanel() {
        if (this.settingsPanel) {
          this.settingsPanel.style.display = 'none';
          this.settingsPanelVisible = false;
          document.removeEventListener('click', this.handleClickOutsideSettings, true);
        }
      }
  
      /**
       * Handle click outside settings panel
       * @param {MouseEvent} event - Click event
       * @returns {void}
       */
      handleClickOutsideSettings = (event) => {
        const target = /** @type {Node} */ (event.target);
        if (this.settingsPanel && !this.settingsPanel.contains(target) &&
            this.settingsButton && !this.settingsButton.contains(target)) {
          this.hideSettingsPanel();
        }
      }
  
      /**
       * Create settings panel
       * @returns {void}
       */
      createSettingsPanel() {
        if (this.settingsPanel) {
          return;
        }
  
        this.settingsPanel = document.createElement('div');
        this.settingsPanel.style.cssText = `
          position: absolute;
          top: calc(var(--tree-header-height) - 2px);
          right: 16px;
          background: var(--tree-panel-bg);
          border: 1px solid rgba(240, 246, 252, 0.1);
          border-radius: var(--tree-node-border-radius);
          box-shadow: var(--tree-panel-shadow);
          padding: 12px;
          min-width: 220px;
          z-index: calc(var(--tree-panel-z-index) + 1);
          display: none;
          font-family: var(--tree-text-font-family);
          font-size: var(--tree-text-font-size);
        `;
  
        // Create IDE selection setting
        const ideSelectionContainer = document.createElement('div');
        ideSelectionContainer.style.cssText = `
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        `;
  
        const ideSelectionLabel = document.createElement('div');
        ideSelectionLabel.textContent = 'IDE';
        ideSelectionLabel.title = 'Select your preferred IDE for opening source files';
        ideSelectionLabel.style.cssText = `
          color: var(--tree-text-color);
          font-size: 12px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        `;
  
        const ideSelectionDropdown = document.createElement('select');
        ideSelectionDropdown.name = "preferredIDE";
        ideSelectionDropdown.style.cssText = `
          background: var(--tree-panel-bg);
          border: 1px solid rgba(240, 246, 252, 0.2);
          border-radius: 4px;
          color: var(--tree-text-color);
          font-size: 11px;
          padding: 4px 8px;
          cursor: pointer;
          min-width: 80px;
        `;
  
        // Add IDE options
        const ideOptions = [
          { value: 'idea', label: 'IntelliJ IDEA' },
          { value: 'vscode', label: 'VS Code' },
          { value: 'cursor', label: 'Cursor' },
          { value: 'windsurf', label: 'Windsurf' },
          { value: 'github', label: 'GitHub' }
        ];
  
        ideOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          optionElement.selected = option.value === PREFER_IDE_PROTOCOL;
          ideSelectionDropdown.appendChild(optionElement);
        });
  
        // Add change handler for IDE selection
        ideSelectionDropdown.addEventListener('change', (e) => {
          const selectedIDE = /** @type {HTMLSelectElement} */ (e.target).value;
          if (EDITOR_PROTOCOL[/** @type {keyof typeof EDITOR_PROTOCOL} */ (selectedIDE)]) {
            PersistentStorage.setString(PREFER_IDE_KEY, selectedIDE);
            // Note: The preference will take effect on next page load or when openFileAtSourcePath is called
          }
        });
  
        ideSelectionLabel.appendChild(ideSelectionDropdown);
        ideSelectionContainer.appendChild(ideSelectionLabel);
        this.settingsPanel.appendChild(ideSelectionContainer);
  
        // Create initial is open setting
        const initialIsOpenContainer = document.createElement('div');
        initialIsOpenContainer.style.cssText = `
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        `;
  
        const initialIsOpenLabel = document.createElement('label');
        initialIsOpenLabel.textContent = 'Open by default';
        initialIsOpenLabel.title = 'Automatically open the devtools panel when the page loads';
        initialIsOpenLabel.style.cssText = `
          color: var(--tree-text-color);
          font-size: 12px;
          cursor: pointer;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        `;
  
        const initialIsOpenToggle = document.createElement('input');
        initialIsOpenToggle.type = 'checkbox';
        initialIsOpenToggle.checked = this.devtoolsSystem.options.initialIsOpen;
        initialIsOpenToggle.style.cssText = `
          margin-left: 8px;
          cursor: pointer;
          appearance: auto;
        `;
  
        // Add change handler for initial is open toggle
        initialIsOpenToggle.addEventListener('change', (e) => {
          const enabled = /** @type {HTMLInputElement} */ (e.target).checked;
          this.devtoolsSystem.options.initialIsOpen = enabled;
          PersistentStorage.setString(INITIAL_IS_OPEN_KEY, enabled.toString());
        });
  
        initialIsOpenLabel.appendChild(initialIsOpenToggle);
        initialIsOpenContainer.appendChild(initialIsOpenLabel);
        this.settingsPanel.appendChild(initialIsOpenContainer);
  
        // Add to panel
        if (this.panelElement) {
          this.panelElement.appendChild(this.settingsPanel);
        }
      }
  
      /**
       * Start viewport monitoring for real-time updates
       * @returns {void}
       */
      startViewportMonitoring() {
        if (!this.devtoolsSystem.options.viewportVisibilityFilter) {
          return;
        }
  
        // Throttled refresh function for viewport changes
        this.throttledViewportRefresh = this.throttle(() => {
          if (this.isVisible && this.devtoolsSystem.options.viewportVisibilityFilter) {
            // Use intersection observer cache if available, otherwise clear cache
            if (!this.viewportDetector.useIntersectionObserver) {
              this.viewportDetector.clearCache();
            }
            this.renderTree();
          }
        }, 150);
  
        // Add scroll listener to window and all scrollable elements
        this.addScrollListeners();
  
        // Add resize listener
        window.addEventListener('resize', /** @type {EventListener} */ (this.throttledViewportRefresh));
      }
  
      /**
       * Stop viewport monitoring
       * @returns {void}
       */
      stopViewportMonitoring() {
        if (this.throttledViewportRefresh) {
          window.removeEventListener('resize', /** @type {EventListener} */ (this.throttledViewportRefresh));
          this.removeScrollListeners();
          this.throttledViewportRefresh = null;
        }
      }
  
      /**
       * Add scroll listeners to detect viewport changes
       * @returns {void}
       */
      addScrollListeners() {
        if (!this.throttledViewportRefresh) return;
  
        // Listen to window scroll
        window.addEventListener('scroll', /** @type {EventListener} */ (this.throttledViewportRefresh), { passive: true });
  
        // Listen to scroll events on scrollable containers
        document.addEventListener('scroll', /** @type {EventListener} */ (this.throttledViewportRefresh), { passive: true, capture: true });
      }
  
      /**
       * Remove scroll listeners
       * @returns {void}
       */
      removeScrollListeners() {
        if (this.throttledViewportRefresh) {
          window.removeEventListener('scroll', /** @type {EventListener} */ (this.throttledViewportRefresh));
          document.removeEventListener('scroll', /** @type {EventListener} */ (this.throttledViewportRefresh), { capture: true });
        }
      }
  
      /**
       * Update viewport monitoring when filter setting changes
       * @param {boolean} enabled - Whether viewport filtering is enabled
       * @returns {void}
       */
      updateViewportMonitoring(enabled) {
        if (enabled && this.isVisible) {
          this.startViewportMonitoring();
          this.initializeViewportOptimizations();
        } else {
          this.stopViewportMonitoring();
        }
      }
  
      /**
       * Initialize viewport optimizations using intersection observer
       * @returns {void}
       */
      initializeViewportOptimizations() {
        if (!this.devtoolsSystem.options.viewportVisibilityFilter || !this.treeData) {
          return;
        }
  
        // Collect all elements from tree data
        /** @type {Element[]} */
        const elements = [];
        this.forEachNode(this.treeData, (node) => {
          elements.push(node.element);
        });
  
        // Initialize intersection observer for efficient visibility tracking
        this.viewportDetector.initializeIntersectionObserver(elements);
      }
  
      /**
       * Update viewport optimizations when tree data changes
       * @returns {void}
       */
      updateViewportOptimizations() {
        if (!this.devtoolsSystem.options.viewportVisibilityFilter || !this.treeData) {
          return;
        }
  
        // Collect all elements from updated tree data
        /** @type {Element[]} */
        const elements = [];
        this.forEachNode(this.treeData, (node) => {
          elements.push(node.element);
        });
  
        // Update intersection observer with new elements
        this.viewportDetector.updateIntersectionObserver(elements);
      }
  
      /**
       * Cleanup resources
       */
      destroy() {
        this.hide();
  
        // Hide settings panel and clean up
        this.hideSettingsPanel();
        if (this.settingsPanel) {
          this.settingsPanel.remove();
          this.settingsPanel = null;
        }
  
        // Unsubscribe from state changes
        if (this.unsubscribe) {
          this.unsubscribe();
        }
  
        document.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('resize', this.handleWindowResize);
  
        // Clean up performance optimization resources
        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
          this.mutationObserver = null;
        }
  
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
        }
  
        if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
          this.animationFrameId = null;
        }
  
        if (this.resizeTimeout) {
          clearTimeout(this.resizeTimeout);
          this.resizeTimeout = null;
        }
  
        // Clear all caches
        this.nodeCache.clear();
        this.renderCache.clear();
        this.throttledRefresh = null;
  
        // Stop viewport monitoring
        this.stopViewportMonitoring();
  
        // Clean up viewport detector
        if (this.viewportDetector) {
          this.viewportDetector.destroy();
        }
      }
    }
  
    /**
     * Main DevtoolsSystem class that orchestrates all components
     * @class DevtoolsSystem
     */
    class DevtoolsSystem {
      /**
       * Create a new DevtoolsSystem instance
       * @constructor
       * @param {Partial<DevtoolsOptions>} [options={}] - Configuration options
       */
      constructor(options = {}) {
        /** @type {DevtoolsState} State management instance */
        this.state = new DevtoolsState();
  
        /** @type {OverlayManager} Overlay management instance */
        this.overlay = new OverlayManager(this.state);
  
        /** @type {TooltipManager} Tooltip management instance */
        this.tooltip = new TooltipManager(this.state);
  
        /** @type {KeyboardNavigator} Keyboard navigation instance */
        this.keyboard = new KeyboardNavigator(this.state, this.overlay);
  
        /** @type {EventManager} Event management instance */
        this.events = new EventManager(this);
  
        /** @type {ComponentTreeView} Component tree view instance */
        this.treeView = new ComponentTreeView(this);
  
        /** @type {DevtoolsOptions} Configuration options */
        this.options = {
          enableKeyboardNavigation: true,
          viewportVisibilityFilter: getViewportVisibilityFilter(),
          initialIsOpen: getInitialIsOpen(),
          ...options
        };
  
        // Initialize system
        this.initialize();
      }
  
      /**
       * Initialize the devtools system
       * @returns {void}
       */
      initialize() {
        // CSS variables are already injected at module load
        // Event listeners are already set up by EventManager
  
        // Auto-open panel if initial is open setting is enabled
        if (this.options.initialIsOpen) {
          // Use a small delay to ensure DOM is ready and avoid blocking initialization
          setTimeout(() => {
            this.treeView.show();
          }, 2000);
        }
      }
  
      /**
       * Get current system status
       * @returns {Object} Status information object
       */
      getStatus() {
        return {
          altPressed: this.state.altPressed,
          keyboardNavigationActive: this.state.keyboardNavigationActive,
          currentTarget: this.state.currentTargetElement ? {
            filename: PropertyAccessor.getFilename(this.state.currentTargetElement),
            line: PropertyAccessor.getSourceLine(this.state.currentTargetElement),
            path: PropertyAccessor.getSourcePath(this.state.currentTargetElement)
          } : null,
          overlayVisible: this.overlay.isVisible,
          tooltipVisible: this.tooltip.isMainVisible
        };
      }
  
      /**
       * Programmatically trigger overlay for element
       * @param {Element} element - Target element
       * @param {boolean} [isTreeSelection=false] - Whether this is from tree selection
       * @returns {void}
       */
      showOverlayForElement(element, isTreeSelection = false) {
        if (!element || !PropertyAccessor.hasSourcePath(element)) {
          console.warn('Invalid element for overlay');
          return;
        }
  
        if (isTreeSelection) {
          this.state.setTreeSelectionActive(true);
          this.state.setTreeSelectedElement(element);
        } else {
          this.state.setCurrentTargetElement(element);
        }
      }
  
      /**
       * Hide all overlays and reset state
       * @returns {void}
       */
      hideAll() {
        this.state.reset();
      }
  
      /**
       * Enable/disable keyboard navigation
       * @param {boolean} enabled - Whether to enable keyboard navigation
       * @returns {void}
       */
      setKeyboardNavigationEnabled(enabled) {
        this.options.enableKeyboardNavigation = enabled;
        if (!enabled && this.state.keyboardNavigationActive) {
          this.state.setKeyboardNavigationActive(false);
        }
      }
  
      /**
       * Get all components in the current page
       * @returns {ComponentInfo[]} Array of component information
       */
      getAllComponents() {
        return this.keyboard.getAllComponentsInOrder()
          .map(element => ({
            element,
            filename: PropertyAccessor.getFilename(element),
            line: PropertyAccessor.getSourceLine(element),
            path: PropertyAccessor.getSourcePath(element)
          }))
          .filter(info => info.filename && info.line && info.path)
          .map(info => ({
            element: info.element,
            filename: /** @type {string} */ (info.filename),
            line: /** @type {string} */ (info.line),
            path: /** @type {string} */ (info.path)
          }));
      }
  
      /**
       * Navigate to specific component by path and line
       * @param {string} filename - File name
       * @param {string} line - Line number as string
       * @returns {boolean} True if component found and navigated to
       */
      navigateToComponent(filename, line) {
        const components = this.getAllComponents();
        const target = components.find(comp =>
          comp.filename === filename && comp.line === line
        );
  
        if (target) {
          this.state.setKeyboardSelectedElement(target.element);
          this.state.setCurrentTargetElement(target.element);
          return true;
        }
  
        return false;
      }
  
      /**
       * Export current configuration
       * @returns {Object} Configuration object
       */
      exportConfig() {
        return {
          preferredIDE: PersistentStorage.getString(PREFER_IDE_KEY, "idea"),
          viewportVisibilityFilter: getViewportVisibilityFilter(),
          initialIsOpen: getInitialIsOpen(),
          options: { ...this.options }
        };
      }
  
      /**
       * Import configuration
       * @param {DevtoolsConfig} config - Configuration object
       * @returns {void}
       */
      importConfig(config) {
        if (config.preferredIDE && EDITOR_PROTOCOL[/** @type {keyof typeof EDITOR_PROTOCOL} */ (config.preferredIDE)]) {
          PersistentStorage.setString(PREFER_IDE_KEY, config.preferredIDE);
        }
  
        if (typeof config.viewportVisibilityFilter === 'boolean') {
          PersistentStorage.setString(VIEWPORT_VISIBILITY_FILTER_KEY, config.viewportVisibilityFilter.toString());
          this.options.viewportVisibilityFilter = config.viewportVisibilityFilter;
        }
  
        if (typeof config.initialIsOpen === 'boolean') {
          PersistentStorage.setString(INITIAL_IS_OPEN_KEY, config.initialIsOpen.toString());
          this.options.initialIsOpen = config.initialIsOpen;
        }
  
        if (config.options) {
          Object.assign(this.options, config.options);
        }
      }
  
      /**
       * Cleanup and destroy the devtools system
       * @returns {void}
       */
      destroy() {
        // Cleanup all managers
        this.events.destroy();
        this.overlay.destroy();
        this.tooltip.destroy();
        this.keyboard.destroy();
        this.treeView.destroy();
  
        // Reset state
        this.state.reset();
  
        console.log('DevtoolsSystem destroyed');
      }
    }
  
    // ============================================================================
    // UTILITY FUNCTIONS
    // ============================================================================
  
    /**
     * Throttle function to limit how often a function can be called
     * @param {Function} fn - Function to throttle
     * @param {number} delay - Minimum delay between calls in milliseconds
     * @returns {Function} Throttled function
     */
    function throttle(fn, delay) {
      let lastCall = 0;
      return (/** @type {any[]} */ ...args) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCall = now;
          fn(...args);
        }
      };
    }
  
    /**
     * Debounce function to delay execution until after calls have stopped
     * @param {Function} fn - Function to debounce
     * @param {number} delay - Delay in milliseconds
     * @returns {Function} Debounced function
     */
    function debounce(fn, delay) {
      /** @type {number|undefined} */
      let timeoutId;
      return (/** @type {any[]} */ ...args) => {
        if (timeoutId !== undefined) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    }
  
    /**
     * Request animation frame throttle for smooth animations
     * @param {Function} fn - Function to throttle
     * @returns {Function} RAF-throttled function
     */
    function rafThrottle(fn) {
      /** @type {number|null} */
      let rafId = null;
      return (/** @type {any[]} */ ...args) => {
        if (rafId === null) {
          rafId = requestAnimationFrame(() => {
            fn(...args);
            rafId = null;
          });
        }
      };
    }
  
  
  
    /**
     * Open file at source path using configured IDE protocol
     * @param {string} sourcePath - Path to the source file
     * @param {string} [sourceLine] - Optional line number to navigate to
     * @returns {void}
     */
    function openFileAtSourcePath(sourcePath, sourceLine) {
      // Get current IDE preference dynamically
      const currentIDE = PersistentStorage.getString(PREFER_IDE_KEY, "github");
      
      let uri;
      if (currentIDE === "github") {
        // Handle GitHub transformation
        // Remove the prefix path and construct GitHub URL
        const relativePath = sourcePath.replace('/home/runner/work/webawesome-laminar/webawesome-laminar/', '');
        uri = `https://github.com/nguyenyou/webawesome-laminar/blob/main/${relativePath}`;
        if (sourceLine) {
          uri += `#L${sourceLine}`;
        }
      } else {
        // Handle other IDEs
        uri = `${EDITOR_PROTOCOL[/** @type {keyof typeof EDITOR_PROTOCOL} */ (currentIDE)]}${sourcePath}`;
        if(sourceLine) {
          if(currentIDE === "idea") {
            uri += `&line=${sourceLine}`;
          } else {
            uri += `:${sourceLine}`;
          }
        }
      }
      window.open(uri, "_blank");
    }
  
    /**
     * Find the nearest parent element with Scala source path information
     * @param {Element} startElement - Element to start searching from
     * @returns {Element|null} Element with source path property or null
     */
    function findDevtoolsElement(startElement) {
      let element = /** @type {Element|null} */ (startElement);
  
      // Traverse up the DOM tree to find an element with source path property
      while (element && element !== document.body) {
        if (PropertyAccessor.hasSourcePath(element)) {
          return element;
        }
        element = /** @type {HTMLElement} */ (element).parentElement;
      }
  
      return null;
    }
  
    /**
     * Get the configured viewport visibility filter setting
     * @returns {boolean} Whether to filter tree nodes based on viewport visibility
     */
    function getViewportVisibilityFilter() {
      const stored = PersistentStorage.getString(VIEWPORT_VISIBILITY_FILTER_KEY, "false");
      return stored === "true";
    }
  
    /**
     * Get the configured initial panel open setting
     * @returns {boolean} Whether to open devtools panel by default when page loads
     */
    function getInitialIsOpen() {
      const stored = PersistentStorage.getString(INITIAL_IS_OPEN_KEY, "false");
      return stored === "true";
    }
  
    // ============================================================================
    // INITIALIZATION
    // ============================================================================
  
    /**
     * Initialize the new class-based devtools system
     * @returns {void}
     */
    function initializeDevtoolsSystem() {
      try {
        new DevtoolsSystem({
          enableKeyboardNavigation: true
        });
  
        console.log('✅ Laminar Devtools initialized');
      } catch (error) {
        console.error('❌ Failed to initialize Lamianr Devtools:', error);
        throw error; // Don't fallback, let the error be visible
      }
    }
  
    // Initialize the new system
    initializeDevtoolsSystem();
  
  })();
  