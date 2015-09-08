/**
 * meWidget Hashcontrol
 * 
 * Listen to hash change events and handle meWidget reactions
 * 
 * @package meWidgets
 * @author Mandana Eibegger
 *          with support from eGovMon Project and 
 *          W3C/WAI Education and Outreach Working Group (EOWG)
 *          see http://www.schoener.at/mewidgets/ for more information
 * @version v0.9 (17 Feb 2012)
 */

var hashcontrol = true;     // global var; states that the has hontrol is loaded (for widgets to test)

var resetHashTimeout = '';
var checkElementToResetHash = '';
function tryToResetHash ( element ) {   // wait for the element to be displayed fully
    if (element)
        checkElementToResetHash = element;
    else
        element = checkElementToResetHash;

    if (!isInAnimation(element)) {
        // scroll into view
        var elementPos = $(window.location.hash).offset();
        var viewportY1 = $(window).scrollTop();
        var viewportY2 = viewportY1+$(window).height();
        if (viewportY1>elementPos.top || elementPos.top>viewportY2)
            $(window).scrollTop(elementPos.top);
        
        window.location.hash = window.location.hash;    // set hash again to trigger page jump
    } else
        resetHashTimeout = window.setTimeout("tryToResetHash()", 50);
}

var resetIdTimeout = '';
function tryToResetId ( element ) {   // wait for the element to be displayed fully
    if (!isInAnimation(element))
        resetId(element);
    else
        resetIdTimeout = window.setTimeout(function () {
                                                tryToResetId(element);
                                            } , 50);
}

function isInAnimation ( element ) {
    return element.attr('style') && 
            (element.attr('style').indexOf('height')!=-1 ||
             element.attr('style').indexOf('width')!=-1);
}

// remove tabHashPrefix from id
function resetId ( elements ) {
    var tabHashPrefix = $('body').data('tabHashPrefix');    // possible prefix added to an id to prevent a page jump
    elements.each( function () {
        var element = $(this);
        var id = element.attr('id');
        if (id.indexOf(tabHashPrefix)!=-1)
            id = id.substr(tabHashPrefix.length);
        element.attr('id', id);
    });
}

$(document).ready( function() {
    /**
     * on hash-change the expand event is triggered on the element with the 
     * respective id; the triggerd event bubbles up (so that all panels from the 
     * element to the body are visible); if the event reaches the body, the hash 
     * is set again, so that the cursor jumps to the element (as long as the 
     * element is hidden the cursor can not jump there)
     */

    $('body').data('waitForExpand',0);  //number of elements which are in expansion

    // bind the hashchange event to the window object
    $(window).hashchange( function() {
        
        window.clearTimeout(resetHashTimeout);
        
        // on hashchange trigger the expand event on the element with the hash-id
        var tabHashPrefix = $('body').data('tabHashPrefix');    // possible prefix added to an id to prevent a page jump
        var hash = window.location.hash;
        var triggeredElement = $(hash);
        
        if (tabHashPrefix) {    // reset possibly renamed ids that are no longer relevant 
            var currentId = tabHashPrefix+hash.substr(1);
            var elements = $('*[id*='+tabHashPrefix+']').not('#'+currentId);
            resetId(elements);
        }
        
        if (triggeredElement.length)    // element with hash id found
            $(triggeredElement).trigger('expand', [true]);
        else if (tabHashPrefix) {   // possibly renamed id
            $('#'+currentId).trigger('expand', [true]);
        }
    });
    
    
    // bind the expand event to the body
    $('body')
        .bind('expand', function ( event, expandThroughHashChange ) {
        // if the expansion was triggered by a change of the hash, set the hash
        // again to trigger the jump
            if (expandThroughHashChange && typeof(expandThroughHashChange)=='boolean') {

                var tabHashPrefix = $('body').data('tabHashPrefix');    // possible prefix added to an id to prevent a page jump
                var hash = window.location.hash;
                var triggeredElement = $(hash);
                if (triggeredElement.length) {   // element with hash id found
                    tryToResetHash(triggeredElement);
                } else if (tabHashPrefix) {   // possibly renamed id
                    var id = tabHashPrefix+hash.substr(1);
                    if ($('#'+id))
                        tryToResetId($('#'+id));   // reset id
                }

            }
        });
});

