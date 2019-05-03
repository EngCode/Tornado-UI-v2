//=====> Custom Scrollbar <======//
(function (scope) {
    'use strict';
    //==== Scroll By cs_dragging ====//
    var cs_dragging = false;
    var lastY = 0;

    //=====> Drag Scroll Start Point <=====//
    function cs_dragStart(event) {
        cs_dragging = true;
        this.style.pointerEvents = "none";
        this.style.userSelect = "none";

        lastY = event.clientY || event.clientY === 0 ? event.clientY : event.touches[0].clientY;
    }

    //=====> Drag Scroll While Dragging <=====//
    function cs_dragMove(event) {
        if (!cs_dragging) return;
        var clientY = event.clientY || event.clientY === 0 ? event.clientY : event.touches[0].clientY;
        this.scrollTop += (clientY - lastY) / this.scroll_pointer.scaling;
        lastY = clientY;
        event.preventDefault();
    }

    //=====> Drag Scroll End Point <=====//
    function cs_dragEnd(event) {
        cs_dragging = false;
        this.style.pointerEvents = "initial";
        this.style.userSelect = "initial";
    }

    //=====> Resize the Pointer Height on the Amount of Overflow <=====//
    function cs_updateSize(scrollable) {
        //====> Calculate Container the Width <=====//
        scrollable.style.width = "";
        scrollable.style.width = `calc(${ getComputedStyle(scrollable).width } + 0)`;

        var scroll_pointer = scrollable.scroll_pointer;
        var viewport = scrollable.getBoundingClientRect();
        var scrollHeight = scrollable.scrollHeight;
        var maxScrollTop = scrollHeight - viewport.height;
        var scroll_pointerHeight = Math.pow(viewport.height, 2) / scrollHeight;
        var maxTopOffset = viewport.height - scroll_pointerHeight;

        scroll_pointer.scaling = maxTopOffset / maxScrollTop;
        scroll_pointer.style.height = `${scroll_pointerHeight}px`;

        if (scrollable.isIOS) {
            scroll_pointer.nextElementSibling.style.marginTop = `-${scroll_pointerHeight}px`;
            var z = 1 - 1 / (1 + scroll_pointer.scaling);
            scroll_pointer.style.transform = `translateZ(${z}px) scale(${1 - z}) translateX(-0)`;
        } else {
            scroll_pointer.style.transform = `scale(${1 / scroll_pointer.scaling}) matrix3d(1, 0, 0, 0,0, 1, 0, 0,0, 0, 1, 0,0, 0, 0, -1) translateZ(${-2 + 1 - 1 / scroll_pointer.scaling}px)translateX(-0)`;
        }
    }

    //=====> Start Create the Scrollbar <=====//
    function makeCustomScrollbar(scrollable) {
        //=====> Movement Prespective <=====//
        scrollable.style.perspectiveOrigin = "top " + startDirection;
        scrollable.style.transformStyle = "preserve-3d";
        scrollable.style.perspective = "1px";
        //=====> Create a New Container <=====//
        var perspectiveCtr = document.createElement("div");
        perspectiveCtr.style.perspectiveOrigin = "top " + startDirection;
        perspectiveCtr.style.transformStyle = "preserve-3d";
        perspectiveCtr.style.width = "100%";
        //=====> Set the Position of the New Container <=====//
        perspectiveCtr.style.position = "absolute";
        perspectiveCtr.style.pointerEvents = "none";
        perspectiveCtr.classList.add("perspective-ctr");
        //=====> Create the Pointer Element <=====//
        while (scrollable.firstChild) perspectiveCtr.appendChild(scrollable.firstChild);
        scrollable.insertBefore(perspectiveCtr, scrollable.firstChild);
        var scroll_pointer = document.createElement("div");
        scroll_pointer.classList.add("scroll-pointer");
        scroll_pointer.style.pointerEvents = "initial";
        scroll_pointer.style.position = "absolute";
        scroll_pointer.style.transformOrigin = "top " + startDirection;
        scroll_pointer.style.top = "0";
        scroll_pointer.style.startDirection = "0";
        perspectiveCtr.insertBefore(scroll_pointer, perspectiveCtr.firstChild);
        scrollable.scroll_pointer = scroll_pointer;
        scrollable.perspectiveCtr = perspectiveCtr;

        //=====> We are on Safari, where we need to use the sticky trick! <=====//
        if (getComputedStyle(scrollable).webkitOverflowScrolling) {
            scrollable.isIOS = true;
            scroll_pointer.style.startDirection = "";
            scroll_pointer.style.endDirection = "100%";
            scroll_pointer.style.position = "-webkit-sticky";
            perspectiveCtr.style.perspective = "1px";
            perspectiveCtr.style.height = "";
            perspectiveCtr.style.width = "";
            perspectiveCtr.style.position = "";
            Array.from(scrollable.children)
                .filter(function (e) {
                    return e !== perspectiveCtr;
                })
                .forEach(function (e) {
                    perspectiveCtr.appendChild(e);
                });
        }

        //=====> Scrolling Events <=====//
        scrollable.scroll_pointer.addEventListener("mousedown", cs_dragStart.bind(scrollable), { passive: true });
        window.addEventListener("mousemove", cs_dragMove.bind(scrollable));
        window.addEventListener("mouseup", cs_dragEnd.bind(scrollable), { passive: true });
        scrollable.scroll_pointer.addEventListener( "touchstart",cs_dragStart.bind(scrollable), { passive: true});
        window.addEventListener("touchmove", cs_dragMove.bind(scrollable));
        window.addEventListener("touchend", cs_dragEnd.bind(scrollable), { passive: true });
        var f = function () { cs_updateSize(scrollable); };
        requestAnimationFrame(f);
        window.addEventListener("resize", f);
        return f;
    }

    window.addEventListener("load", function () {
        Array.from(document.querySelectorAll(".custom-scrollbar")).forEach(scrollable => {
            makeCustomScrollbar(scrollable);
            cs_updateSize(scrollable);
        });
    });
})(self);