/**
 * Simple Panel object for use in the meWidgets
 * 
 * @package meWidgets
 * @author Mandana Eibegger
 *          with support from eGovMon Project and 
 *          W3C/WAI Education and Outreach Working Group (EOWG)
 *          see http://www.schoener.at/mewidgets/ for more information
 * @version v0.9 (17 Feb 2012)
 * 
 * Implements a simple panel consisting of
 *   - head
 *   - body
 *   - tab (element that triggers expand/collapse)
 */

(function( $, $this ){

    // initialise the plugin
    $this = $.fn.panel = function ( method ) {
        if ($.isFunction($this[method])) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.each(function(){
                $this[method].apply($(this), args);
            });
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.panel' );
            return this;
        }
    };

    $.extend($this, {
        
        // TODO: REMOVE UNUSED !!
        settings : {
          'head' : 'f_panelHead',    // class-name that identifies the head
          'expander' : 'f_expanderWrapper',    // class-name that identifies the wrapper element of the expansion buttons
          'expandSpeedPrefix' : 'f_expandSpeed_',    // optional variable class of the body or wrapper element to set the expansion speed - valid values are 'noanim' or any value valid for the jQuery hide()/show(() functions; if not set, the default speed is 'slow'
          'collapseSpeedPrefix' : 'f_collapseSpeed_',    // optional variable class of the body or wrapper element to set the collapse speed - valid values are 'noanim' or any value valid for the jQuery hide()/show(() functions; if not set, the default speed is 'slow'
          'slideAnim' : false, // slide Down/Up
          'buttonExpand' : 'f_expand',      // class name that identifies the expand-button
          'buttonCollapse' : 'f_collapse',      // class name that identifies the collapse-button
          'buttonSrcHover' : 'f_srcHover',  // class name of an optional element in the expand/collapse-buttons which has the hover image-src as title
          'buttonSrcFocus' : 'f_srcFocus',  // class name of an optional element in the expand/collapse-buttons which has the focus image-src as title
          'buttonSrcDisabled' : 'f_srcDisabled',  // class name of an optional element in the expand/collapse-buttons which has the button disabled image-src as title
          'moveButtonTitle' : false,    // if set to true, add the title of the visible button to the title of the tab
          'headIsTab' : 'f_headIsTab',    // optional class of the expander or wrapper element - defines, that the expand/collapse functionality is set to the whole head
          'headIsTabDefault' : false,   // boolean, defines if the head is the tab by default (you can use this option to set this for widgets (like ARIA accordion))
          'forceTabInHead' : false,   // boolean, 
          'tabCursor' : 'pointer',      // the style of the mouse cursor on the tab
          'panelStartClosed' : 'f_startClosed',  // optional class of the body element - defines, that the body is closed at the beginning (overrides panelStartClosedDefault)
          'panelStartOpen' : 'f_startOpen',  // optional class of the body element - defines that the body is open at the beginning (overrides panelStartClosedDefault)
          'panelStartClosedDefault' : false,  // boolean - defines, if the body is closed at the beginning
          'triggerShown' : 'f_triggerShown', // optional class name of elements within body - if set, an 'onshown' event is triggered on those elements, once body->show is finished
          'tabHashPrefix' : 'tab_', // prefix that is prepended to the hash to be able to deep-link to the widget, but prevent defualt jumps when interacting with the page (if the tab is an anchor link)
          'state' : {
              'disabled' : 'fs_disabled',   // class to add if a panel is disabled
              'hover' : 'fs_hover',
              'hoverInside' : 'fs_hoverinside',
              'focus' : 'fs_focus'
            },
          'nestedWidget' : 'f_nestedWidget' // class name that identifies a nested widget in the panel (so that functionalities don't interfere)
        },

        init : function ( body, wrapper, options, extensionPlugin ) {

            if ( extensionPlugin ) {
                // merge settings
                $.extend( $this.settings, extensionPlugin.settings );
                $this = extensionPlugin;
            }

            // merge options with default settings
            if ( options ) {
                $.extend( $this.settings, options );
            }
            
            $('body').data('tabHashPrefix', $this.settings.tabHashPrefix);  // save the prefix to the body element (needed for hashcontrol plugin)

            // define the tab (clickable area - can be the xpander element or the whole head)
            var head = $(this);
            var expanderElement = head.find('.' + $this.settings.expander).first();
            var headIsTab = ($this.settings.headIsTabDefault
                                || wrapper.hasClass($this.settings.headIsTab)
                                || expanderElement.hasClass($this.settings.headIsTab)
                                || expanderElement.length==0)
                            && !$this.settings.forceTabInHead;
            var tab = (headIsTab) ?
                        head :
                        expanderElement;

            // define the basic values necessary for expansion
            
            var startClosed = body.hasClass($this.settings.panelStartOpen) ?
                                false :
                                (body.hasClass($this.settings.panelStartClosed) ?
                                    true :
                                    $this.settings.panelStartClosedDefault);
                
                /*
                (typeof($this.settings.bodyStartClosed)=='boolean') ?
                                    $this.settings.bodyStartClosed :
                                    (body.hasClass($this.settings.bodyStartClosed)
                                        || (wrapper.hasClass($this.settings.bodyStartClosed)
                                            && !body.hasClass($this.settings.panelStartOpen)));
            */
            var expandSpeed = body.metools('classSetting',
                                     $this.settings.expandSpeedPrefix);
            if (expandSpeed === false)
                expandSpeed = wrapper.metools('classSetting',
                                     $this.settings.expandSpeedPrefix);
            if (expandSpeed === false) {
                expandSpeed = 'slow';
            } else if (expandSpeed == 'noanim')
                expandSpeed = '';
            var collapseSpeed = body.metools('classSetting',
                                     $this.settings.collapseSpeedPrefix);
            if (collapseSpeed === false)
                collapseSpeed = wrapper.metools('classSetting',
                                     $this.settings.collapseSpeedPrefix);
            if (collapseSpeed === false)
                collapseSpeed = 'slow';
            else if (collapseSpeed == 'noanim')
                collapseSpeed = '';

            var hashInPanel = $this.hashInPanel(head, body, headIsTab);
            var action = $this.getAction(head, body, headIsTab);
            
            var tabSettings = {'expanded' : (!startClosed || hashInPanel),
                               'expandedByHash' : hashInPanel,
                               'expandSpeed' : expandSpeed,
                               'collapseSpeed' : collapseSpeed,
                               'slideAnim' : $this.settings.slideAnim,
                               'mouseInside' : false,
//                             'headIsTab' : headIsTab,
                               'head' : head,
                               'action' : action,
                  //             'tab' : tab,
                               'body' : body,
                               'wrapper' : wrapper};
            tab
                // set the cursor of the tab
                .css('cursor', $this.settings.tabCursor)
                // bind the events of the tab
                .bind('click', tabSettings, $this.click)
                .bind('dblclick', tabSettings, $this.dblclick)
                .bind('mouseenter', tabSettings, $this.mouseenter)
                .bind('mouseleave', tabSettings, $this.mouseleave)
                .bind('mouseinside', tabSettings, $this.mouseinside)
                .bind('focus', tabSettings, $this.focus)
                .bind('blur', tabSettings, $this.blur)
                .bind('expand', tabSettings, $this.expand)
                .bind('collapse', tabSettings, $this.collapse)
                // save the tab settings in the tab
                .data('tabSettings', tabSettings);

            if (headIsTab)
                $this.initElementsInTab(tab);
            
            // also bind the expand and collapse methods to to the head and body,
            // so that the functions can be triggered easily for the panel
            var elements = headIsTab ?
                            body :
                            head.add(body);
            elements
                .bind('expand', tabSettings, $this.expand)
                .bind('collapse', tabSettings, $this.collapse);

            // save the panel elements in the head
            head.data('panel', {'head' : head,
                                'tab' : tab,
                                'body' : body});
                            
            wrapper.data('panelSettings',$.extend({},$this.settings));
                            
            return head;
        },
        
        initElementsInTab : function ( tab ) {
            var tabSettings = tab.data('tabSettings');
            $this.setTabElementInteraction(tab.metools('focusableElements', true), tabSettings);
        },
        
        setTabElementInteraction : function ( elements, tabSettings ) {
            elements.each(function () {
                var element = $(this);
                element.bind('blur', tabSettings, $this.blurInside);
                if (!element.is('a') || element.attr('href') || element.hasClass($this.settings.nestedWidget))
                    element
                        .bind('mouseenter', tabSettings, $this.mouseenterInside)
                        .bind('mouseleave', tabSettings, $this.mouseleaveInside)
                        .bind('click', $this.stopPropagationForElementsInTab)
                        .bind('dblclick', $this.stopPropagationForElementsInTab);
                else
                    element.bind('focus', tabSettings, $this.focus);
            });
            
        },

        getAction : function () {}, // dummy function - use this in classes that extend the panel to define a default action

        // expander-element.expansionButtonLoaded(wait==Bool == wait for all buttons to load)
        expansionButtonLoaded : function ( wait ) {
            var expander = this.hasClass($this.settings.expander) ?
                            this :
                            this.find('.'+$this.settings.expander);
            expander.children().hide();
            if (!wait) {
                $this.expansionButtonPrepare.apply(expander);
            }
        },

        // expander-element.expansionButtonPrepare();
        expansionButtonPrepare : function () {
            var expander = $(this).first();
            var head = expander.parents('.' + $this.settings.head).first();
            if (!head.length)
                head = expander.parent();
            var body = head.data('panel').body;
            var panelContent = head.add(body);

            var buttonExpand = expander
                                .find('.' + $this.settings.buttonExpand)
                                    .metools('replaceContentVars', panelContent); // replace content vars
            var expandSrcHover = buttonExpand.find('.'+$this.settings.buttonSrcHover).attr('title');
            var expandSrcFocus = buttonExpand.find('.'+$this.settings.buttonSrcFocus).attr('title');
                                
            var buttonCollapse = expander
                                .find('.' + $this.settings.buttonCollapse)
                                    .metools('replaceContentVars', panelContent); // replace content vars
            var collapseSrcHover = buttonCollapse.find('.'+$this.settings.buttonSrcHover).attr('title');
            var collapseSrcFocus = buttonCollapse.find('.'+$this.settings.buttonSrcFocus).attr('title');

            // remove alternative button definitions and show
            expander
                .find('.'+$this.settings.buttonSrcHover)
                    .remove()
                    .end()
                .find('.'+$this.settings.buttonSrcFocus)
                    .remove()
                    .end()
//                .metools('replaceContentVars', panelContent)
                .children()
                    .show();

            // save the buttons in the tab settings for easier handling in the future
            var tabSettings = $.extend(head.data('panel').tab.data('tabSettings'), 
                                       {'buttonExpand' : buttonExpand,
                                       'buttonCollapse' : buttonCollapse,
                                       'buttonExpandSrc' : buttonExpand.find('img').attr('src'),
                                       'buttonExpandSrcHover' : expandSrcHover,
                                       'buttonExpandSrcFocus' : expandSrcFocus,
                                       'buttonCollapseSrc' : buttonCollapse.find('img').attr('src'),
                                       'buttonCollapseSrcHover' : collapseSrcHover,
                                       'buttonCollapseSrcFocus' : collapseSrcFocus});
//            tabSettings.buttonExpand = expander.find('.' + $this.settings.buttonExpand);
//            tabSettings.buttonCollapse = expander.find('.' + $this.settings.buttonCollapse);

            // add focus to event to buttons (needed in case the head is not focusable)
            buttonExpand.add(buttonCollapse)
                .bind('focus', tabSettings, $this.focusButton)
                .bind('blur', tabSettings, $this.blurButton);

            $this.initPanel(tabSettings);
        },
        
        initPanel : function ( tabSettings ) {
            var initSettings = $.extend({}, tabSettings, {'initOnly' : true});
            if (tabSettings.expanded) {
                $this.expand(initSettings);
            } else {
                $this.collapse(initSettings);
            }
        },

        click : function ( event ) {
            $this.handleExpandStateChange(event);
        },
        
        dblclick : function () {},
        
        handleExpandStateChange : function ( event ) {
            if (event.data.expanded) {
                $this.collapse(event.data);
            } else {
                $this.expand(event.data);
                $this.hashControl(event);
            }
            if (typeof(event.preventBubble) == 'function') {
                event.preventBubble();
                event.stopPropagation();
            }
//            $this.hashControl(event);
            event.preventDefault();
        },
        
        hashControl : function ( event ) {
            var href = $(event.target).attr('href');
            if (href != undefined) {
                if (href[0]=='#') {
                    var hash = href.substr(1);
                    if (window.location.hash != href) {
                        if (typeof(hashcontrol)!='undefined' 
                                && hashcontrol)    // hashcontrol loaded
                            $(href).attr('id', $this.settings.tabHashPrefix+hash);  // hashcontrol will reset the id - add a prefix to the id to prevent a page jump
                        window.location.hash = href; //'#'+$this.settings.tabHashPrefix+hash;
                    }
                }
            }
        },

        expand : function ( settings, expandPathToRoot, alwaysAnim ) {
            if (settings.data != undefined) { // expand called by event trigger
                settings = settings.data;
            }
            
            if (expandPathToRoot) {
                settings.head.trigger('expandedByHashChange',[expandPathToRoot]);
            }
            if (settings.initOnly || settings.expanded=='undefined' || !settings.expanded) {
                settings.head.data('panel').tab.data('tabSettings').expanded = true;
                
                $this.expandStarted(settings);
                var expandSpeed = (settings.initOnly || (!alwaysAnim && expandPathToRoot)) ?    // if init or whole path is expanded, show without anim
                                    '' :
                                    settings.expandSpeed;
                settings.body.stop(false,true);
                if (settings.slideAnim)
                    settings.body.slideDown(expandSpeed,
                                   $this.expandedFully(settings));
               else
                    settings.body.show(expandSpeed,
                                   $this.expandedFully(settings));
                $this.toggleButtons(settings);
                
                if (settings.initOnly && settings.expandedByHash) { // set the hash again after displaying the element
                    window.location.hash = window.location.hash; //settings.expandedByHash;
                }
            } else if (settings.expanded && !expandPathToRoot) {
//                var hash = window.location.hash;
//                var id = $this.settings.tabHashPrefix+hash.substr(1);
//                $('#'+id).attr('id', hash.substr(1));   // reset id
            }
        },

        collapse : function ( settings ) {
            if (settings.data != undefined) {// collapse called by event trigger
            if (typeof(settings.stopPropagation) == 'function') {
                    settings.stopPropagation();
                }
                settings = settings.data;
            }
            if (settings.initOnly || settings.expanded=='undefined' || settings.expanded==true) {
                var doCollapse = (!settings.initOnly || !settings.expandedByHash);
                if (doCollapse) {
                    
//                    settings.expanded = false;
                    settings.head.data('panel').tab.data('tabSettings').expanded = false;
                    $this.collapseStarted(settings);
                    var collapseSpeed = (settings.initOnly || !settings.body.is(':visible')) ?  // if body is invisible, starting an animation will fail and the element will not be hidden!
                                        '' :
                                        settings.collapseSpeed;
                    settings.body.stop(false,true);
                    if (!settings.initOnly && settings.slideAnim)
                        settings.body.slideUp(collapseSpeed,
                                       $this.collapsedFully(settings));
                    else
                        settings.body.hide(collapseSpeed,
                                       $this.collapsedFully(settings));
                    $this.toggleButtons(settings);
                } else {
                    $this.expand(settings, true);
                }
            }
        },

        // check if the hash of the url is set as the id of an element in the panel (including the head and body elements)
        hashInPanel : function ( head, body, headIsTab ) {
            var hash = window.location.hash;
            if (hash) {
                if (body==undefined)
                    body = head.data('panel').body;
//                var panel = head.data('panel');
                if (hash.indexOf($this.settings.tabHashPrefix)==1)
                    hash = '#'+hash.substr($this.settings.tabHashPrefix.length+1);
                var parentElements = body.add(head);
                var referredElement = parentElements.find(hash)
                                        .add(parentElements.filter(hash));
                if (referredElement.length)
                    return hash;
            }
            return false;
        },

        // hide the unused button
        toggleButtons : function ( settings ) {
            if (settings.buttonExpand || settings.buttonCollapse) {
                var focusedElement = document.activeElement;
                var expanderElementPrev;
                var expanderElementNew;
                if (settings.expanded) {
                    if (settings.buttonExpand) {
                        expanderElementPrev = settings.buttonExpand;
                        settings.buttonExpand.hide();
                    }
                    if (settings.buttonCollapse) {
                        expanderElementNew = settings.buttonCollapse;
                        settings.buttonCollapse.show();
                    }
                } else {
                    if (settings.buttonCollapse) {
                        expanderElementPrev = settings.buttonCollapse;
                        settings.buttonCollapse.hide();
                    }
                    if (settings.buttonExpand) {
                        expanderElementNew = settings.buttonExpand;
                        settings.buttonExpand.show();
                    }
                }
                
                if ($this.settings.moveButtonTitle) {
                    var tab = settings.head.data('panel').tab;
                    if (expanderElementPrev.length) { // remove the added title (reset)
                        tab.attr('title', tab.data('title'));
                        expanderElementPrev.attr('title', expanderElementPrev.data('title'));
                    }
                    if (expanderElementNew.length) { // add the title of the active button to the tab

                        var tab = settings.head.data('panel').tab;
                        var title = tab.attr('title');
                        if (!title) title = '';
                        tab.data('title', title);  // save the original title of the tab

                        var activeTitle = expanderElementNew.attr('title');
                        if (!activeTitle) activeTitle = '';
                        expanderElementNew.data('title', activeTitle);    // save the original title of the active button

                        if (activeTitle)
                            tab.attr('title', title+activeTitle);   
                        expanderElementNew.attr('title', '');    // remove the title of the active button
                    }
                }
                
                if (expanderElementPrev.length &&
                        expanderElementPrev[0]==focusedElement) {  // expander has focus -> set focus to toggled element
                    expanderElementNew.focus();
                } else if (!expanderElementNew) {
                    settings.head.focus();
                } else if (focusedElement==settings.head.data('panel').tab[0]) {
                    $this.setButtonImgFocus(settings);
                }
            }
        },

        expandStarted : function ( settings ) {
            settings.head
                .add(settings.body)
                    .addClass('fs_expandStarted');
            if (!settings.initOnly) {
                settings.wrapper.trigger('actionStarted', ['expand', settings.head]);
            }
            $.fn.metools('updateVirtualBuffer');
        },

        expandedFully : function ( settings ) {
            // trigger an onshown event on elements - needed if adjustments have to be made, while the element is visible
            settings.body
                .find('.' + $this.settings.triggerShown)
                    .trigger('onshown');

            settings.head
                .add(settings.body)
                    .addClass('fs_expandedFully');
            
            if (!settings.initOnly)
                settings.wrapper.trigger('actionEnded', ['expand', settings.head]);
        },

        collapseStarted : function ( settings ) {
            settings.head
                .add(settings.body)
                    .removeClass('fs_expandedFully');

            if (!settings.initOnly)
                settings.wrapper.trigger('actionStarted', ['collapse', settings.head]);
        },

        collapsedFully : function ( settings ) {
//            settings.body.css('display','none');
            settings.head
                .add(settings.body)
                    .removeClass('fs_expandStarted');

            if (!settings.initOnly)
                settings.wrapper.trigger('actionEnded', ['collapse', settings.head]);
            $.fn.metools('updateVirtualBuffer');
        },

        mouseenter : function ( event, fromInside ) {
            var tab = event.data.head.data('panel').tab;
            if (!fromInside || tab.data('tabSettings').mouseInside) {
                tab.addClass($this.settings.state.hover)
                    .data('tabSettings').mouseInside = true;
                $this.setButtonImgHover(event.data);
            }
        
            event.stopPropagation();
        },
        
        mouseinside : function ( event ) {
            event.data.head.data('panel').tab.data('tabSettings').mouseInside = true;
        },

        mouseleave : function ( event, fromInside ) {
            var tab = event.data.head.data('panel').tab;
            
            tab.removeClass($this.settings.state.hover);
            
            var focusedElement = document.activeElement;
            if (tab[0]!=focusedElement)
                $this.resetButtonImg(tab);
            
            if (!fromInside)
                tab.data('tabSettings').mouseInside = false;
        },
        
        mouseenterInside : function ( event ) {
            var tab = event.data.head.data('panel').tab;
            tab.addClass($this.settings.state.hoverInside);
            tab.trigger('mouseleave', [true]);
        },

        mouseleaveInside : function ( event ) {
            var tab = event.data.head.data('panel').tab;
            tab.removeClass($this.settings.state.hoverInside);
            tab.trigger('mouseenter', [true]);
        },
        
        mouseover : function ( event ) {},
        mouseout : function ( event ) {},
        
        setButtonImgHover : function ( tabSettings ) {
            var hoverSrc = (tabSettings.expanded) ?
                                tabSettings.buttonCollapseSrcHover :
                                tabSettings.buttonExpandSrcHover;
            if (hoverSrc) {
                var activeBtn = (tabSettings.expanded) ?
                                    tabSettings.buttonCollapse :
                                    tabSettings.buttonExpand;
                activeBtn.find('img').attr('src', hoverSrc);
            }
        },
        
        setButtonImgFocus : function ( tabSettings ) {
            var focusSrc = (tabSettings.expanded) ?
                                tabSettings.buttonCollapseSrcFocus :
                                tabSettings.buttonExpandSrcFocus;
            if (focusSrc) {
                var activeBtn = (tabSettings.expanded) ?
                                    tabSettings.buttonCollapse :
                                    tabSettings.buttonExpand;
                activeBtn.find('img').attr('src', focusSrc);
            }
        },
        
        resetButtonImg : function ( tab ) {
            var src, activeBtn;
            if (tab.data('tabSettings').expanded) {
                src = tab.data('tabSettings').buttonCollapseSrc;
                activeBtn = tab.data('tabSettings').buttonCollapse;
            } else {
                src = tab.data('tabSettings').buttonExpandSrc;
                activeBtn = tab.data('tabSettings').buttonExpand;
            }
            if (src && !activeBtn.hasClass($this.settings.state.focus))
                activeBtn.find('img').attr('src', src);
        },

        focus : function ( event ) {
            var tab = event.data.head.data('panel').tab;
            tab.addClass($this.settings.state.focus);
            $this.setButtonImgFocus(tab.data('tabSettings'));
        },
        
        focusButton : function ( event ) {
            var button = $(this);
            button.addClass($this.settings.state.focus);
            $this.setButtonImgFocus(event.data);
        },
        
        blur : function ( event ) {
            var tab = event.data.head.data('panel').tab;
            tab.removeClass($this.settings.state.focus);
            if (!tab.hasClass($this.settings.state.hover))  // no focus and no mouseover
                $this.resetButtonImg(tab);
        },
        
        blurInside : function ( event ) {
            $this.blur(event);
        },
        
        blurButton : function ( event ) {
            var button = $(this);
            var tab = event.data.head.data('panel').tab;
            button.removeClass($this.settings.state.focus);
            if (!tab.hasClass($this.settings.state.hover))  // no focus and no mouseover
                $this.resetButtonImg(tab);
        },
        
        enableTab : function ( tab ) {
            tab.removeClass($this.settings.state.disabled);
        },
        disableTab : function ( tab ) {
            tab.addClass($this.settings.state.disabled);
        },

        stopPropagationForElementsInTab : function ( event ) {
            // stop propagation of click and enter of links within the tab
            var stopPropagation = (event.type == 'click' || event.type == 'dblclick');
            if (!stopPropagation) {
                if (!event.ctrlKey && !event.shiftKey && !event.altKey) {   
                    var code = (event.keyCode ? event.keyCode : event.which);
                    if ( code == KEY_ENTER )
                         stopPropagation = true
                }
            }
            if (stopPropagation)
                event.stopPropagation();
        }


    });

})( jQuery );

