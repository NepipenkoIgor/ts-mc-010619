Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: true});

function deliveryMethod(): string {
    return 'overnight';
}

function shipWeight(): number {
    const el: HTMLElement | null = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    const result: number = parseInt(el.innerHTML);
    return isNaN(result) ? 0 : result;
}

function sendUpdates(emailAddr: string | string[]): void {
    /**
     * @param {string} addr
     */
    function sendEmail(_addr: string): void {
        if (shipWeight() > 100) {
            // tslint:disable-next-line
            console.log('WARNING: Oversize package');
        }
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
