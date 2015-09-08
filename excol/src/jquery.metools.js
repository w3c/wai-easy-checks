/**
 * meTools
 * 
 * Useful tools
 * 
 * @package meWidgets
 * @author Mandana Eibegger
 *          with support from eGovMon Project and 
 *          W3C/WAI Education and Outreach Working Group (EOWG)
 *          see http://www.schoener.at/mewidgets/ for more information
 * @version v0.9 (17 Feb 2012)
 * 
 */

(function( $, $this ){
    
    // initialise the plugin
    $this = $.fn.metools = function ( method ) {
        if ($.isFunction($this[method])) {
            var args = Array.prototype.slice.call(arguments, 1);
            return $this[method].apply(this, args);
        } else {
            $.error( 'Tool ' +  method + ' does not exist on jQuery.metools' );
            return this;
        }
    };

    $.extend($this, {

        /**
         * Returns the variable part of a given class name.
         *
         * With this you can assign values to variables within your HTML code.
         * The idea is, that you can dynamically specify settings by assigning
         * classes to elements.
         *
         * The class name consists of any prefix you specify that identifies
         * this class as a settings-class (the vaiable name) and a string that
         * identifies the value (the variable value).
         * The class names have to be valid ([a-zA-Z0-9_-]*)
         * This function returns the value for a given variable name.
         *
         * @example <div id='myContainer' class='actionOnClick_changeColor'>...</div>
         * @desc HTML snippet: in the HTML code you define, that an onclick on
         * the element leads to a color change
         * @example var actionOnClick = $('#myContainer').metools('classSetting', 'actionOnClick_');
         *          alert(actionOnClick);
         * @desc JS snippet: at runtime find the element and get the action. The
         * example will output 'changeColor'
         *
         * @param classname String prefix of the class (variable name)
         * @param findall Bool return all values
         * @return Array array of values (if findall=true)
         * @return String value of the variable
         * @return Bool false if classname could not be found
         *
         */
        classSetting : function( classname, findall ) {

            if (this.length > 0) {

                var reg = new RegExp(classname+"[a-zA-Z0-9_-]*","g");
                var classes = this.attr('class');
                if (classes) {
                    var variableClasses = classes.match(reg);

                    if (variableClasses) {
                        for (var i = 0; i < variableClasses.length; ++i)
                            variableClasses[i] = variableClasses[i].substr(classname.length);

                        if (findall)
                            return variableClasses;
                        else if (variableClasses)
                            return variableClasses[0];
                    }
                }
            }
            return false;

        },

        focusableElements : function ( param1, param2 ) {

            var returnAll;
            var options = {};
            if (typeof(param1)=='boolean')
                returnAll = param1;
            else if (typeof(param1)=='object')
                options = param1;
            if (typeof(param2)=='object')
                options = param2;

            var settings = {
                'focusableElements' : 'a,frame,iframe,label,input,select,textarea,button' //,*[tabindex]'
            }
            if ( options.focusableElements )
                settings.focusableElements += ',' + options.focusableElements;

            var focusableElements = $(this).find(settings.focusableElements);
            
            // have to find elements with set tabindex manually because IE7
            // does not support css attribute selectors correctly (*[tabindex] 
            // returns all elements)
            var tabindexedElements = $(this).find('*').map( function () {
                    if ($(this).attr('tabindex'))
                        return this;
                });
            
            focusableElements = focusableElements.add(tabindexedElements);
            
            if (returnAll)
                return focusableElements;
            else
                return focusableElements
                        .not('*[tabindex=-1]');
//                        .filter(':visible,:enabled');
        },

        /**
         * loadFile(defaultFile, fnOnSuccess, fnOnSuccessAll, options)
         * loadFile(defaultFile, fnOnSuccess, options)
         * loadFile(defaultFile, options)
         * loadFile(fnOnSuccess, fnOnSuccessAll, options)
         * loadFile(fnOnSuccess, options)
         * loadFile(options)
        **/
        loadFile : function (defaultFile, fnOnSuccess, fnOnSuccessAll, options) {
            var classToFileTranslations = {
                '_-_' : '.',    // replace '_-_' by '.'
                '_--_' : '/'    // replace '_--_' by '/'
            };
            var settings = {
                'loadSpecPrefix' : 'f_fileToLoad_',    // class-name that identifies
                'classToFileTranslations' : classToFileTranslations,
                'translate' : true,
                'loadMethod' : 'append' // [load|append|prepend|prependTo]; if [prependTo] 
                                        // if loadMethod=prependTo, the element the file is loaded for (this) can have data('prependFileTo', jQueryObjectOfElementToPrependTo)
            };
            if (defaultFile && typeof(defaultFile)!='string') {
                if (typeof(defaultFile)=='function')
                    fnOnSuccess = defaultFile;
                else
                    options = defaultFile;
                defaultFile = '';
            }
            if (fnOnSuccess && typeof(fnOnSuccess)!='function') {
                options = fnOnSuccess;
                fnOnSuccess = '';
            }
            if (fnOnSuccessAll && typeof(fnOnSuccessAll)!='function') {
                options = fnOnSuccessAll;
                fnOnSuccessAll = '';
            }
            
            if ( options )
                $.extend( settings, options );

            var specialElements = this;
            if (defaultFile) {
                // special = all files that have their own specific file assigned
                specialElements = this.filter('*[class*=' + settings.loadSpecPrefix + ']');
                $this.doLoad.apply(this.not(specialElements),
                                   Array($this.translate(defaultFile,
                                                         settings.classToFileTranslations),
                                         fnOnSuccess,
                                         fnOnSuccessAll,
                                         settings));
            }
            specialElements.each(function () {
                var $element = $(this);
                var file = '';
                var fileSpec = $this.classSetting.apply($element, 
                                                                Array(settings.loadSpecPrefix));
                if (settings.translate) // filename is set by the class-name directly
                    file = $this.translate(fileSpec,
                                           settings.classToFileTranslations);
                else    // filename is set in a variable that is referenced by the class-name
                    file = eval(fileSpec);
                if (file) {
                    $this.doLoad.apply($element,
                                       Array(file,
                                             fnOnSuccess,
                                             fnOnSuccessAll));
                }
            });


            return this;
        },

        // if file ends on .json get jsonp is used (for cross domain loading)
        doLoad : function ( file, fnOnSuccess, fnOnSuccessAll, settings ) {
            var elementsNum = this.length;
            var elementsLoaded = 0;
            var loadMethod = "append";
            if (settings && settings!=undefined && settings.loadMethod)
                loadMethod = settings.loadMethod;
            var elements = this;
            
            var json = (file.substr(file.length-5)==".json");
            var request = $.ajax({
                type: "GET", // specify the type expicitly, for requests to work locally (in chrome type is undefined locally)
                url: file,
                dataType: (json ? "jsonp" :  "html"), // specify the data type explicitly to solve problems when loading local files (thanks to http://pupunzi.open-lab.com/2011/04/24/jquery-1-5-2-ajax-module-and-local-files-issue/ for the hint)
                error: function(jqXHR, textStatus, errorThrown) {console.log("Error loading "+file, jqXHR, textStatus, errorThrown);},
                success: function(data) {
                            if (json)
                                data=data.html;
                            if (loadMethod == "load")
                                elements.html(data);
                            else if (loadMethod == "append")
                                elements.append(data);
                            else if (loadMethod == "prepend")
                                elements.prepend(data);
                            else if (loadMethod == "prependTo")
                                elements.each( function () {
                                    var prependFileTo = $(this).data('prependFileTo') ?
                                                            $(this).data('prependFileTo') :
                                                            $(this);
                                    prependFileTo.before(data);
                                    $(this).data('prependFileTo', '');
                                });

                            if (fnOnSuccess)
                                elements.each( function () {
                                    fnOnSuccess($(this));
                                });
                            if (fnOnSuccessAll)
                                fnOnSuccessAll(elements);
                        }
            });
            return this;
        },

        translate : function ( text, translations ) {
            for (var translatable in translations) {
                var reg = new RegExp(translatable,"g");
                text = text.replace(reg, translations[translatable]);
            }
            return text;
        },

        // replace content var by set value or by value of variable
        replaceContentVars : function ( contentPool, options ) {

            var settings = {
                'variablePlaceholderPrefix' : 'f_expandVar_',    // class-name that identifies
                'variableIndicatorPrefix' : 'f_expandVarSet_',
                'variableAttributes' : Array('title', 'alt', 'value')
            };
            var preserveUnreplacedVars = false;
            if ( options ) {
                if (typeof(options)=='boolean')
                    preserveUnreplacedVars = true;
                else
                    $.extend( settings, options );
            }

            // replace all elements with the class 'f_expandVar_SOMETHING'
            // by a copy of the content of the element with the class 'f_expandVarSet_SOMETHING'
            this.find('*[class*=' + settings.variablePlaceholderPrefix + ']')
                .each(function() {

                    var varname = $this.classSetting.apply($(this), Array(settings.variablePlaceholderPrefix));

                    // possibly add the element itself to the pool
                    var addToPool;
                    if (contentPool.hasClass(settings.variableIndicatorPrefix + varname))
                        addToPool = contentPool;
                    
                    // get the value from the class variable
                    var replaceBy = contentPool
                                        .find('.' + settings.variableIndicatorPrefix + varname)
                                        .add(addToPool)
                                            .html();
                    if (!replaceBy) {
                        try {
                            replaceBy = eval(varname);  // try to get the value from the variable
                        } catch (e) {}
                    }
                    if (replaceBy || !preserveUnreplacedVars)
                        $(this).replaceWith(replaceBy);
                });

            // replace 'f_expandVar_SOMETHING' in attribute-values by the
            // values of the element with the class 'f_expandVarSet_SOMETHING'

            // set the attributes to check
            var atbAr = settings.variableAttributes;
            for (var i = 0; i < atbAr.length; ++i) {
                var dynamicElements = this.find('*['+atbAr[i]+'*=' + settings.variablePlaceholderPrefix + ']');
                if (this.is('*['+atbAr[i]+'*=' + settings.variablePlaceholderPrefix + ']'))
                    dynamicElements = dynamicElements.add(this);
                dynamicElements.each(function() {
                        // get the variable name
                        var aval = $(this).attr(atbAr[i]);
                        if (aval) {
                            var reg = new RegExp(settings.variablePlaceholderPrefix + '[a-zA-Z0-9_-]*');
                            var vars = aval.match(reg);
                            var varname = vars[0].substr(settings.variablePlaceholderPrefix.length);

                            // get the value from the class variable
                            var aval0 = contentPool
                                            .find('.' + settings.variableIndicatorPrefix + varname)
                                                .first()
                                                    .text();
                            if (!aval0) {
                                try {
                                    aval0 = eval(varname);  // try to get the value from the variable
                                } catch (e) {}
                            }
                            if (aval0 || !preserveUnreplacedVars) {
                                // replace the variable by the value
                                reg = new RegExp(vars[0],"g");
                                aval = aval.replace(reg, aval0);
                            }

                            $(this).attr(atbAr[i], aval);
                        }
                    });
            }

            return this;

        },

        // makes the java script method 'apply' chainable
        apply : function ( fn, args ) {
            var application = fn || function (){};
            args = Array.prototype.slice.call(arguments, 1);
            return this.each( function() {
                application.apply(this, args);
            });

        },

        loadCSS : function ( fname, mediaStr ) {
            var styleAttribs = {type: 'text/css', 
                                href: fname+'?anticache='+Math.floor(Math.random()*999999), 
                                rel: 'stylesheet'};
            if (mediaStr)
                $.extend(styleAttribs, {media: mediaStr});
            $(document.createElement('link'))
                .attr(styleAttribs)
                .appendTo($('head'));
        },
        
        // virtual buffer updater to work around some screen reader bugs
        // based on a scripty by Artur Ortega, based on article by Gez Lemon and Steve Faulkner
        // http://juicystudio.com/article/improving-ajax-applications-for-jaws-users.php
        /**
         * Updates the screen reader's virtual buffer to indicate
         * that content has changed.
         * @return {Void}
         */
        updateVirtualBuffer : function () {
            if (!$this.bufferUpdater) {
                $this.bufferUpdater = $('<input type="hidden" value="1" />');
                $('body').append($this.bufferUpdater);
            }
            $this.bufferUpdater.attr('value', $this.bufferUpdater.val()==1 ? 0 : 1);
        }


    });


})( jQuery );

$.fn.reverse = [].reverse;