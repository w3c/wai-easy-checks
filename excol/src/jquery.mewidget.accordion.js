/**
 * Accordion Plugin
 * 
 * @package meWidgets
 * @author Mandana Eibegger
 *          with support from eGovMon Project and 
 *          W3C/WAI Education and Outreach Working Group (EOWG)
 *          see http://www.schoener.at/mewidgets/ for more information
 * @version v0.9 (17 Feb 2012)
 * 
 * Implements a simple accordion.
 * Extends $.fn.panelwrapper
 *  
 */

(function( $ ){

    var $parent = $.fn.panelwrapper;
    
    var $this = $.fn.accordion = function( options ) {
        return this.each(function(){
            $this.init($(this), options);
        });

    };

    $.extend(true, $this, $parent, {

        /**
         * Initialize the accordion
         * @param jQuery Object accordionWrapper
         *        the jQuery Object of the element which wraps the accordion
         * @param options Map of property-value pairs to set
         * @param extensionPlugin
         *        An instance of the jQuery plugin that extends the simple accordion
         **/
        init : function( accordionWrapper, options, extensionPlugin ) {

            if ( extensionPlugin ) {
                // merge settings
                $.extend( $this.settings, extensionPlugin.settings );
                $this = extensionPlugin;
            }

            $parent.init(accordionWrapper, options, $this);
            $this.initPanels(accordionWrapper);
            $this.initControls(accordionWrapper);
            
        },

        initPanels : function ( accordionWrapper ) {

            var headers = accordionWrapper
                        .find('.' + $this.settings.head);
            // the body is the next element to the header; remove the headers that
            // are within the body (= other widget)
            headers.next().each( function () {
                headers = headers.not($(this).find('.' + $this.settings.head));
            });
            var loadMethod = 'append';
            if (accordionWrapper.hasClass($this.settings.loadControl))
                loadMethod = 'load';
            else if (accordionWrapper.hasClass($this.settings.prependControl))
                loadMethod = 'prepend';
            headers
                .each( function() {     // set the panels (head-body groups)
                    var head = $(this);
                    var body = head.next().first();
                    $this.addPanel(head, body, accordionWrapper);
                });
                
            var panelControls = accordionWrapper.metools('classSetting', $this.settings.loadSpecPrefix);
            if (!panelControls)
                panelControls = $this.settings.panelControls;
            $this.prepareHeaders(headers,
                                 panelControls,
                                 loadMethod);
        },

        initControls : function ( accordionWrapper ) {
            var wrapperId = accordionWrapper.attr('id');
            var controlClass = '.'+$this.settings.controlsPrefix+wrapperId;
            
            accordionWrapper.data('accordion', {'controls' :
            
                $(controlClass)
                    .each( function () {
                        
                        var control = $(this);
                        var assignedWidgets = control.data('accordionControl') ?
                                                control.data('accordionControl').widgets :
                                                false;

                        if (!assignedWidgets)
                            control
                                .data('accordionControl', $.extend(control.data('accordionControl'), {'widgets' : accordionWrapper}))
                                .metools('loadFile',
                                    '',
                                    $this.controlsLoaded,
                                    '',
                                    {'translate':false});
                                    
                        else {  // already initialised (happens if one control element control multiple widgets)
                            control.data('accordionControl').widgets = assignedWidgets.add(accordionWrapper);
                            if (control.find('.'+$this.settings.controlExpand).length)  // already loaded
                                $this.assignControls(this);
                        }
                    })});

        },

        controlsLoaded : function ( controlElement ) {
            // replace content vars in loaded expansion buttons and add onclick eventhandlers
            var control = $(controlElement);
            var controledWidgets = control.data('accordionControl').widgets;
            control
                .metools('replaceContentVars', controledWidgets.prev(), true) // replaced vars content must be in in directly preceding element of accordion
                .metools('replaceContentVars', controledWidgets, true);     // or in accordion
            
            // get alternative image srces
            var widget = controledWidgets.data('panelWrapperWidget');
            control.data('accordionControl').expandSrc = control.find('.'+$this.settings.controlExpand+' img').attr('src');
            control.data('accordionControl').expandSrcDisabled = control.find('.'+$this.settings.controlExpand+' .'+widget.panel.settings.buttonSrcDisabled).attr('title');
            control.data('accordionControl').collapseSrc = control.find('.'+$this.settings.controlCollapse+' img').attr('src');
            control.data('accordionControl').collapseSrcDisabled = control.find('.'+$this.settings.controlCollapse+' .'+widget.panel.settings.buttonSrcDisabled).attr('title');
            // remove alternative image definitions 
            control
                .find('.'+widget.panel.settings.buttonSrcDisabled)
                    .remove();
            
            $this.assignControls(controlElement);
        },
        
        assignControls : function ( controlElement ) {
                
            var control = $(controlElement);
            var widgets = control.data('accordionControl').widgets;
            var initialisedWidgets = control.data('accordionControl').initialisedWidgets;
            if (!initialisedWidgets) initialisedWidgets = $();
            var uninitialisedWidgets = widgets.not(initialisedWidgets);
            control.data('accordionControl').initialisedWidgets = initialisedWidgets.add(uninitialisedWidgets);
            
            control
                .find('.'+$this.settings.controlExpand).each ( function () {
                        var expandAll = $(this);
                        uninitialisedWidgets.each( function () {
                            var uninitialisedWidget = $(this);
                            expandAll.click( function () {
                                $this.expandPanels(uninitialisedWidget.data('collapsedPanels'));
                            });
                        });
                    })
                .end()
                .find('.'+$this.settings.controlCollapse).each ( function () {
                        var collapseAll = $(this);
                        uninitialisedWidgets.each( function () {
                            var uninitialisedWidget = $(this);
                            collapseAll.click( function () {
                                $this.collapsePanels(uninitialisedWidget.data('expandedPanels'));
                            });
                        });
                    });

            $this.handleControls(control);
        },

        handleControls : function ( controls ) {
            if (controls!=undefined && controls.length) {
                var expandedPanelsNum = 0;
                var collapsedPanelsNum = 0;
                controls.each( function () {
                    var control = $(this);
                    var widgets = control.data('accordionControl').widgets;
                    widgets.each( function () {
                        expandedPanelsNum += $(this).data('expandedPanels').length;
                        collapsedPanelsNum += $(this).data('collapsedPanels').length;
                    });
                    
                });
                if (expandedPanelsNum) {
                    controls.each( function () {
                        var control = $(this);
                        var collapseButton = control.find('.'+$this.settings.controlCollapse);
                        collapseButton.attr('disabled', null);
                        if (control.data('accordionControl').collapseSrc)
                            collapseButton.find('img').attr('src', control.data('accordionControl').collapseSrc);
                    });
                } else {
                    controls.each( function () {
                        var control = $(this);
                        var collapseButton = control.find('.'+$this.settings.controlCollapse);
                        collapseButton.attr('disabled', 'disabled');
                        if (control.data('accordionControl').collapseSrcDisabled)
                            collapseButton.find('img').attr('src', control.data('accordionControl').collapseSrcDisabled);
                    });
                }
                if (collapsedPanelsNum) {
                    controls.each( function () {
                        var control = $(this);
                        var expandButton = control.find('.'+$this.settings.controlExpand);
                        expandButton.attr('disabled', null);
                        if (control.data('accordionControl').expandSrc)
                            expandButton.find('img').attr('src', control.data('accordionControl').expandSrc);
                    });
                } else {
                    controls.each( function () {
                        var control = $(this);
                        var expandButton = control.find('.'+$this.settings.controlExpand);
                        expandButton.attr('disabled', 'disabled');
                        if (control.data('accordionControl').expandSrcDisabled)
                            expandButton.find('img').attr('src', control.data('accordionControl').expandSrcDisabled);
                    });
                }
            }
        },

        expandStarted : function ( params ) {
            var head = params[0];
            var wrapper = head.data('panel').tab.data('tabSettings').wrapper;
            $this.handleControls(wrapper.data('accordion').controls);
        },
        collapseStarted : function ( params ) {
            var head = params[0];
            var wrapper = head.data('panel').tab.data('tabSettings').wrapper;
            $this.handleControls(wrapper.data('accordion').controls);
        },

        disableSelected : function ( selectedTabToDisable, wrapper ) {
            
            var enabledPanels = wrapper.data('panels');
            if (!enabledPanels.length)
                wrapper.data('accordion').controls.hide();
            
            $parent.disableSelected(selectedTabToDisable, wrapper);
        },
        
        resetEnabledPanels : function ( wrapper, selectedTabToDisable ) {
            
            var enabledPanels = wrapper.data('panels');
            if (enabledPanels.length)
                wrapper.data('accordion').controls.show();
            
            $parent.resetEnabledPanels(wrapper, selectedTabToDisable);
        }
        
    });


})( jQuery );

