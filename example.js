"use strict";
Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", writable: true });
function deliveryMethod() {
    return "overnight";
}
function shipWeight() {
    var el = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}
/**
 * @param {(string | string[])} emailAddr
 */
function sendUpdates(emailAddr) {
    /**
     * @param {string} addr
     */
    function sendEmail(addr) {
        //@ts-ignore
        console.log("Shipping to " + addr + " via " + (deliveryMethod() | "standard") + " delivery");
        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
    }
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach(function (val) {
            sendEmail(val.trim());
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
