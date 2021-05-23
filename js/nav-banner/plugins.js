!function(i){"use strict";i.fn.emulateTransitionEnd=function(t){var n=!1,a=this;i(this).one("bsTransitionEnd",function(){n=!0});return setTimeout(function(){n||i(a).trigger(i.support.transition.end)},t),this},i(function(){i.support.transition=function(){var t=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var a in n)if(void 0!==t.style[a])return{end:n[a]};return!1}(),i.support.transition&&(i.event.special.bsTransitionEnd={bindType:i.support.transition.end,delegateType:i.support.transition.end,handle:function(t){return i(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(o){"use strict";function e(t){var n,a=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return o(a)}function r(i){return this.each(function(){var t=o(this),n=t.data("bs.collapse"),a=o.extend({},l.DEFAULTS,t.data(),"object"==typeof i&&i);!n&&a.toggle&&/show|hide/.test(i)&&(a.toggle=!1),n||t.data("bs.collapse",n=new l(this,a)),"string"==typeof i&&n[i]()})}var l=function(t,n){this.$element=o(t),this.options=o.extend({},l.DEFAULTS,n),this.$trigger=o('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};l.VERSION="3.3.6",l.TRANSITION_DURATION=350,l.DEFAULTS={toggle:!0},l.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},l.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&((t=n.data("bs.collapse"))&&t.transitioning))){var a=o.Event("show.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){n&&n.length&&(r.call(n,"hide"),t||n.data("bs.collapse",null));var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var e=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!o.support.transition)return e.call(this);var s=o.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",o.proxy(e,this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][s])}}}},l.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=o.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var a=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return o.support.transition?void this.$element[n](0).one("bsTransitionEnd",o.proxy(a,this)).emulateTransitionEnd(l.TRANSITION_DURATION):a.call(this)}}},l.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},l.prototype.getParent=function(){return o(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(o.proxy(function(t,n){var a=o(n);this.addAriaAndCollapsedClass(e(a),a)},this)).end()},l.prototype.addAriaAndCollapsedClass=function(t,n){var a=t.hasClass("in");t.attr("aria-expanded",a),n.toggleClass("collapsed",!a).attr("aria-expanded",a)};var t=o.fn.collapse;o.fn.collapse=r,o.fn.collapse.Constructor=l,o.fn.collapse.noConflict=function(){return o.fn.collapse=t,this},o(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var n=o(this);n.attr("data-target")||t.preventDefault();var a=e(n),i=a.data("bs.collapse")?"toggle":n.data();r.call(a,i)})}(jQuery),function(e){"use strict";var t={initialize:function(){this.event(),this.hoverDropdown(),this.navbarSticky(),this.navbarScrollspy()},event:function(){var t=e("nav.navbar.bootsnav");t.hasClass("navbar-sticky");t.hasClass("no-background")&&e(window).on("scroll",function(){770<e(window).scrollTop()?e(".navbar-fixed").removeClass("no-background"):e(".navbar-fixed").addClass("no-background")}),t.hasClass("navbar-transparent")&&e(window).on("scroll",function(){770<e(window).scrollTop()?e(".navbar-fixed").removeClass("navbar-transparent"):e(".navbar-fixed").addClass("navbar-transparent")}),e(".side .close-side").on("click",function(t){t.preventDefault(),e("nav.navbar.bootsnav > .side").removeClass("on"),e("body").removeClass("on-side")})},hoverDropdown:function(){var t=e("nav.navbar.bootsnav"),n=e(window).width(),a=e(window).height();t.find("ul.nav").data("in"),t.find("ul.nav").data("out");n<991?e(".navbar-toggle").each(function(){e(this).off("click"),e(this).on("click",function(){e(".tr-icon",this).toggleClass("ion-android-menu"),e(".tr-icon",this).toggleClass("ion-android-close"),i()})}):991<n&&(e(".scroller").css("height",a+"px"),e("nav.navbar.bootsnav .attr-nav").each(function(){}))},navbarSticky:function(){},navbarScrollspy:function(){}};e(document).ready(function(){t.initialize()}),e(window).on("resize",function(){})}(jQuery)