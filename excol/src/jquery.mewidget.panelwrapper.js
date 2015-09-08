/**
 * PanelWrapper Object
 *
 * Basic Object for objects consisting of groups of panels (e.g. accordion, tablist)
 * 
 * @package meWidgets
 * @author Mandana Eibegger
 *          with support from eGovMon Project and 
 *          W3C/WAI Education and Outreach Working Group (EOWG)
 *          see http://www.schoener.at/mewidgets/ for more information
 * @version v0.9 (17 Feb 2012)
 * 
 * Implements basic functionality for groups of panels
 *
 * saves the following data
 *   - wrapper.data('panels') - array(Map representation of panel Panel Object)
 *   - head.data('panel').panelnum - consecutive number of the panel
 *   
 * @uses $.fn.panel
 */

(function( $, $this ){

    // standard initialisation of plugin with public methods
    $this = $.fn.panelwrapper = function ( method ) {
        if ($.isFunction($this[method])) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                $this[method].apply($(this), args);
            });
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.panelWrapper' );
            return this;
        }
    };

    // define the plugin
    $.extend($this, {

        panel : $.fn.panel,

        settings : {
          'head' : 'f_panelHead',    // class-name that identifies the head
          'expander' : 'f_expanderWrapper',    // class-name that identifies
          'buttonExpand' : 'f_expand',      // class name that identifies the expand-button
          'buttonCollapse' : 'f_collapse',      // class name that identifies the collapse-button
          'body' : 'f_panelBody',   // class-name that identifies the body
          'panelControls' : '', // path to the file holding the "expand/collapse this section" buttons, if you set the filename by options
          'loadSpecPrefix' : 'f_fileToLoad_',    // (overrides panelControls) variable class of the panel wrapper to set the file to load the expansion buttons - the value is the name of the variable, which holds the filename-string
          'triggerShown' : 'f_triggerShown', // optional class name of elements within body - if set, an 'onshown' event is triggered on those elements, once body->show is finished
          'controlsPrefix' : 'f_controls_',    // optional variable class of an element that should hold the controls (for instance expand/collapse all for accordion); the value must be the id of the accordion wrapper element // !! handling must be done by the child class !!
          'controlExpand' : 'f_controlsExpand',    // class-name that identifies the the control (=widget control button - eg 'expand all') to expand
          'controlCollapse' : 'f_controlsCollapse',    // class-name that identifies the the control (=widget control button - eg 'expand all') to collapse
          'loadControl' : 'f_loadControl', // optional class of the expander or wrapper element - defines, that the expand-buttons are loaded into the expand-wrapper container (default is append)
          'prependControl' : 'f_prependControl', // optional class of the expander or wrapper element - defines, that the loaded expand-buttons are inserted as first element of the head (default is append)
          'widgetLoadedCSS' : '',     // filename-string; needed because 
                                        // 1) the initial state of the widget should be defined in a css loaded at the beginning to prevent page jumps 
                                        // 2) this initialisation should be reverted after the widget is prepared because of old browsers (opera 9) not accepting inline display:block, if display:hidden is set in a stylesheet
                                        // 1 & 2 should be handled globaly (for all widgets) by the page
                                        // 3) loading of expansion buttons and following initialisation of panels runs in parallel and might take longer than the rest of the initialisation, so it is necessary to wait for the revert until the widget is initialised fully -> the plugin loads the CSS
          'widgetLoadedCSSMedia' : '',     // media for which the widgetLoadedCSS is loaded
          'nestedWidget' : 'f_nestedWidget' // class name that identifies a nested widget in the panel (so that functionalities don't interfere)
        },

        /**
         * Initialize the Panel Wrapper
         *
         * @param jQuery Object wrapper
         *        the jQuery Object of the element which wraps the panels
         * @param options
         *        Map of property-value pairs to set - extends the basic settings
         * @param extensionPlugin
         *        The jQuery plugin that extends the Panel Wrapper
         *
         * @example init('.accordionWrapper', {'head':'accordionHead',''body':'accordionBody'}, $.fn.accordion);
         */
        init : function( wrapper, options, extensionPlugin ) {

            if ( extensionPlugin ) {
                // merge settings
                $.extend( $this.settings, extensionPlugin.settings );
                $this = extensionPlugin;
            }

            // merge options with default settings
            if ( options ) {
                $.extend( $this.settings, options );
            }

            
            // remember the wrapper element
            wrapper
            // initialize the array to save the panels in the wrapper element
                .data('panelWrapperWidget', $this)
                .data('panels', $())    // save the available panels
                .data('expandedPanels', $())
                .data('collapsedPanels', $())
                .data('disabledPanels', $())  // saves the panels which are not available
            // listen to the actionStarted and actionEnded events of the panels
            // (if an action is started on a panel (e.g. expand/collapse), this
            // might need action on other panels )
                .bind('actionStarted', {'status' : 'started'}, $this.handlePanels)
                .bind('actionEnded', {'status' : 'ended'}, $this.handlePanels)
                .bind('elementshidden', $this.disablePanels)   // event that can be triggered from outside, to disable panels
                .bind('elementsshown', $this.enablePanels);   // event that can be triggered from outside, to enable panels
            
            $this.handleKeyboardNaviSwitch(wrapper);

        },

        /**
         * Add a panel to the the wrapper (head-body-tupel)
         * Saves the panel and the panel number
         * 
         * @param jQuery Object head
         * @param jQuery Object body
         */
        addPanel : function ( head, body, wrapper ) {
            $this.panel.apply(head, ['init', body, wrapper, $this.settings]);

            // add element to panels
            var panels = wrapper.data('panels');
            head.data('panel').panelnum = panels.length;
            panels = panels.add( head.data('panel') );
            wrapper.data('panels', panels);

            // add element to expanded panels
            if (head.data('panel').tab.data('tabSettings').expanded) {
                var expandedPanels = wrapper.data('expandedPanels');
                expandedPanels = expandedPanels.add( head.data('panel') );
                wrapper.data('expandedPanels', expandedPanels);
            } else {    // add element to collapsed panels
                var collapsedPanels = wrapper.data('collapsedPanels');
                collapsedPanels = collapsedPanels.add( head.data('panel') );
                wrapper.data('collapsedPanels', collapsedPanels);
            }
        },

        prepareHeaders : function ( headers, fileSpec, loadMethod ) {
            if (typeof(headers) == 'string') {  // method applyed -> adjust arguments;
                loadMethod = fileSpec;
                fileSpec = headers;
                headers = this;
            }
            
            headers
                .bind('expandedByHashChange', $this.expandedByHashChange);
/*                .find('a').each( function () {
                    if ($(this).attr('href')!=undefined && $(this).attr('href')) {
                        $(this).bind('click', $this.panel.stopPropagationForLinksInTab);
                    }
                }); */
            // the file-name can either be specified in a variable (eval(fileSpec) ) or directly
            var defaultFile;
            try {
                defaultFile = eval(fileSpec);   // fileSpec is a variable holding the path to the file
            } catch ( error ) {
            }
            if (typeof(defaultFile)=="undefined")   // can't put this into the catch clause, because IE evals 'http://bla' without exception (result=undefined)
                defaultFile = fileSpec ? fileSpec : '';  // fileSpec is the path to the file
            if (defaultFile) {     // load file
                var loadTo = headers;
                if (loadMethod == 'load') 
                    loadTo = headers
                                .find('.' + $this.settings.expander)  // find expander wrapper
                                    .not(':has(' + $this.settings.buttonExpand + ')')   // remove the buttons that already have button-elements
                                        .not(':has(' + $this.settings.buttonCollapse + ')');
                                        
                loadTo
                    .metools('loadFile',
                             defaultFile,
                             $this.expansionButtonLoaded,
                             $this.initialisationFinished,
                             {'translate':false, 'loadMethod':loadMethod});
                             
            } else {    // no file to load - initialise immediately
                headers.each( function () {
                    var tabSettings = $(this).data('panel').tab.data('tabSettings');
                    $this.panel.initPanel(tabSettings);
                });
                $this.initialisationFinished(headers);
            }

        },

        // this.expansionButtonLoaded(expander)
        expansionButtonLoaded : function ( element ) { // hide the button at first
            $this.panel.expansionButtonLoaded.apply($(element));
        },
        
        initialisationFinished : function ( headers ) { 
            var wrapper = headers.eq(0).data('panel').tab.data('tabSettings').wrapper;
            var settings = wrapper.data('panelSettings');
            // load css
            if (settings.widgetLoadedCSS) {
                $.fn.metools.loadCSS(settings.widgetLoadedCSS, settings.widgetLoadedCSSMedia);
            }
        },
        
        /**
         * Event handler for the actionStarted and actionEnded events.
         * Calls the handling functions for the expand/collapse started/ended events
         */
        handlePanels : function (event) {
            var action = arguments[1];
            var paramsToPass = Array.prototype.slice.call(arguments, 2);

            var expandedPanels, head, wrapper, widget;
            head = paramsToPass[0];
            wrapper = head.data('panel').tab.data('tabSettings').wrapper;
            widget = wrapper.data('panelWrapperWidget');
            if (action == 'expand') {
                if (event.data.status == 'started') {
                    // add to expanded panels
                    expandedPanels = wrapper.data('expandedPanels');
                    expandedPanels = expandedPanels.add( head.data('panel') );
                    wrapper.data('expandedPanels', expandedPanels);
                    // remove from collapsed panels
                    var collapsedPanels = widget.removePanel(wrapper.data('collapsedPanels'), head.data('panel'));
                    wrapper.data('collapsedPanels', collapsedPanels);

                    widget.expandStarted(paramsToPass);

                } else if (event.data.status == 'ended')
                    widget.expandedFully(paramsToPass);
                
            } else if (action == 'collapse') {

                if (event.data.status == 'started') {
                    // add to collapsed panels
                    collapsedPanels = wrapper.data('collapsedPanels');
                    collapsedPanels = collapsedPanels.add( head.data('panel') );
                    wrapper.data('collapsedPanels', collapsedPanels);
                    // remove from expanded panels
                    expandedPanels = wrapper.data('expandedPanels');
                    expandedPanels = widget.removePanel(wrapper.data('expandedPanels'), head.data('panel'));
                    //expandedPanels = expandedPanels.not( head.data('panel') );
                    wrapper.data('expandedPanels', expandedPanels);

                    widget.collapseStarted(paramsToPass);
                    
                } else if (event.data.status == 'ended') {
                    widget.collapsedFully(paramsToPass);
                }
                
            }
            event.stopPropagation();
        },

        removePanel : function ( jObjectPanelMapList, panelMap ) {
            jObjectPanelMapList.each ( function () {
                var same = true;
                for (var key in panelMap) {
                    if (this[key][0]!=panelMap[key][0]) {
                        same = false;
                        break;
                    }
                }
                if (same)
                    jObjectPanelMapList = jObjectPanelMapList.not($(this));
            });
            return jObjectPanelMapList;
        },

        collapsePanels : function ( jObjectPanelMapList, headNoCollapse ) {
            jObjectPanelMapList.each ( function () {
                if (headNoCollapse==undefined
                        || headNoCollapse[0]!=this.head[0])
                    this.tab.trigger('collapse');
            });
        },

        expandPanels : function ( jObjectPanelMapList ) {
            jObjectPanelMapList.each ( function () {
                this.tab.trigger('expand');
            });
        },
        
        disablePanels : function ( event, disabledElements ) {
            
            var wrapper = $(this);
            var widget = wrapper.data('panelWrapperWidget');
            var enabledPanels = wrapper.data('panels');
            var disabledPanels = wrapper.data('disabledPanels');
            var selectedToDisable = $();  // tab of selected panel which is disabled
            var enabledNum = 0;
            
            enabledPanels.each( function () {  // check enabled panels
                var tab = this.tab;
                
                if (widget.panelDisabledByElements(tab, wrapper, disabledElements)) {    // panel is disabled
                    
                    enabledPanels = enabledPanels.not($(this));
                    disabledPanels = disabledPanels.add($(this));
                    widget.panel.disableTab(tab);
                    
                    if (tab.data('tabSettings').selected)     // disabled panel is selected
                        selectedToDisable = tab;
                    
                } else {
                    if (!this.panelnumOrig && this.panelnumOrig!==0)    // save the original panel number
                        this.panelnumOrig = this.panelnum;
                    this.panelnum = enabledNum; // reset the panel numbers
                    enabledNum++;
                }
            });
            wrapper
                .data('panels', enabledPanels)
                .data('disabledPanels', disabledPanels);
                
            if (selectedToDisable.length) {   // selected panel is disabled
                widget.disableSelected(selectedToDisable, wrapper);
            }
            
        },

        enablePanels : function ( event, enabledElements ) {
            var wrapper = $(this);
            var widget = wrapper.data('panelWrapperWidget');
            var enabledPanels = wrapper.data('panels');
            var disabledPanels = wrapper.data('disabledPanels');
            
            if (disabledPanels.length) {    // disabled panels exist
                var wereAllDisabled = (enabledPanels.length==0);
                disabledPanels.each( function () {  // check disabled panels
                    var tab = this.tab;

                    if (widget.panelEnabledByElements(tab, wrapper, enabledElements)) {    // panel is enabled
                        enabledPanels = enabledPanels.add($(this));
                        disabledPanels = disabledPanels.not($(this));
                        widget.panel.enableTab(tab);
                    }                    
                });
                enabledPanels = widget.orderPanels(enabledPanels);
                wrapper
                    .data('panels', enabledPanels)
                    .data('disabledPanels', disabledPanels);
                    
                if (wereAllDisabled)
                    widget.resetEnabledPanels(wrapper);
                else {
                    var selected = widget.getSelectedTab(wrapper);
                    if (selected.data('tabSettings').selectedByDefault) {   // currently selected panel is selected by default
                        widget.resetDefaultEnabled(wrapper, selected);
                    }
                }
            
            }
        },

        orderPanels : function ( jObjectPanelMapList ) {    // bring the panels into the right order (specified by panelnumOrig)
            var ordered = new Array();
            jObjectPanelMapList.each( function () {     // sort elements according to original number
                if (!this.panelnumOrig && this.panelnumOrig!==0)    // save the original panel number
                    this.panelnumOrig = this.panelnum;
                ordered[this.panelnumOrig] = this;
            });
            var ret = $();
            var enabledNum = 0;
            while (ordered.length) {
                var panel = ordered.shift();
                if (panel) {
                    panel.panelnum = enabledNum;
                    enabledNum++;
                    ret = ret.add(panel);
                }
            }
            return ret;
        },

        getSelectedTab : function ( wrapper ) {
            var selected = $();
            wrapper.data('panels')
                        .each( function () {
                            if (this.tab.data('tabSettings').selected) {
                                selected = this.tab;
                            }
                        });
            return selected;
        },
        
        panelDisabledByElements : function ( tab, wrapper, disabledElements ) {
            var isDisabled = false; 
            if (disabledElements.index(tab)!=-1)   // the tab is in the disabled elements list
                isDisabled = true;
            else {
                disabledElements.has(tab)  // possibly disabling elements (contain tab)
                    .each( function () {
                        if (wrapper.has(this))  // the disabling element is within the wrapper
                            isDisabled = true;
                    });
            }
            return isDisabled;
        },
        
        panelEnabledByElements : function ( tab, wrapper, enabledElements ) {
            var isEnabled = false; 
            if (enabledElements.index(tab)!=-1)   // the tab is in the enabled elements list
                isEnabled = true;
            else {
                enabledElements.has(tab)  // possibly enabling elements (contain tab)
                    .each( function () {
                        if (wrapper.has(this))  // the enabling element is within the wrapper
                            isEnabled = true;
                    });
            }
            return isEnabled;
        },
        
        disableSelected : function ( selectedTabToDisable, wrapper ) {
            var widget = wrapper.data('panelWrapperWidget');
            widget.panel.deactivateTab(selectedTabToDisable);
            widget.resetEnabledPanels(wrapper, selectedTabToDisable);
        },
        
        resetEnabledPanels : function ( wrapper, selectedTabToDisable ) {
            var widget = wrapper.data('panelWrapperWidget');
            var enabledPanels = wrapper.data('panels');
            if (enabledPanels.length) {   // default element is selected, if the selected element is hidden
                var nextSelected = widget.getNextSelected(wrapper, selectedTabToDisable);
                widget.panel.activateTab(nextSelected.tab, nextSelected.selectAsDefault);
            }
        },
        
        // return the tab of the panel that should be selected next 
        // can be relative to a tab (for instance in a tree the default selected relative to a node could be its parent (if a noder is disabled))
        // return first tab
        getNextSelected : function ( wrapper, selected ) {
            return {
                    'tab' : wrapper.data('panels')[0].tab,
                    'selectAsDefault' : true
                   };
        },

        // if the currently selected panel was selected by default, select the new default panel (after a change of dis/enabled panels
        resetDefaultEnabled : function ( wrapper, selected ) {
            var widget = wrapper.data('panelWrapperWidget');
            widget.panel.deactivateTab(selected);
            widget.resetEnabledPanels(wrapper, selected); // -> set default (1st element is selected) again
        },
        
        isDisabled : function ( wrapper, tab ) {
            var isDisabled = false
            wrapper.data('disabledPanels').each( function () {
                    if (this.tab[0] == tab[0]) {
                        isDisabled = true
                        return false;
                    }
                });
            return isDisabled;
        },

        /**
         * Dummy functions
         * Implement these in an extension of the Panel Wrapper to handle the
         * expand states accordingly.
         * Called from the event handlers of actionStarted and actionEnded
         */
        expandStarted : function ( params ) {var head = params[0];},
        expandedFully : function ( params ) {var head = params[0];},
        collapseStarted : function ( params ) {var head = params[0];},
        collapsedFully : function ( params ) {var head = params[0];},
        expandedByHashChange : function ( event ) {},


        // listen to the keyboard navi switch - remove after testing
        handleKeyboardNaviSwitch : function ( wrapper ) {
            $('input:radio[name=f_keyboardNavi]').live('change', {wrapper: wrapper}, $this.switchKeyboardNavi);
        },
        /**
         * Dummy function
         * Implement this in an extension of the Panel Wrapper to handle the
         * change of the keyboard navi.
         */
        switchKeyboardNavi : function ( event ) {var wrapper = event.data.wrapper;}

    });


})( jQuery );



