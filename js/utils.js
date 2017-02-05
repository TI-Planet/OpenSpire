/*
 * object.watch polyfill from https://gist.github.com/eligrey/384583
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
// object.watch
if (!Object.prototype.watch)
{
    Object.defineProperty(Object.prototype, "watch", {
        enumerable: false
        , configurable: true
        , writable: false
        , value: function (prop, handler)
        {
            var
                oldval = this[prop]
                , newval = oldval
                , getter = function ()
                {
                    return newval;
                }
                , setter = function (val)
                {
                    oldval = newval;
                    return newval = handler.call(this, prop, oldval, val);
                }
                ;

            if (delete this[prop])
            { // can't watch constants
                Object.defineProperty(this, prop, {
                    get: getter
                    , set: setter
                    , enumerable: true
                    , configurable: true
                });
            }
        }
    });
}
// object.unwatch
if (!Object.prototype.unwatch)
{
    Object.defineProperty(Object.prototype, "unwatch", {
        enumerable: false
        , configurable: true
        , writable: false
        , value: function (prop)
        {
            var val = this[prop];
            delete this[prop]; // remove accessors
            this[prop] = val;
        }
    });
}


String.prototype.capitalizeFirstLetter = function ()
{
    return this.charAt(0).toUpperCase() + this.slice(1);
};


function initLuna(cb)
{
    window.Module = {};
    const loadlunajs = () => {
        const script = document.createElement('script');
        script.src = "luna.js";
        script.onload = cb;
        document.body.appendChild(script);
    };

    if (typeof WebAssembly !== "undefined")
    {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'luna.wasm', true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => { Module.wasmBinary = xhr.response; };
        xhr.onloadend = loadlunajs;
        xhr.send(null);
    } else {
        loadlunajs();
    }
}