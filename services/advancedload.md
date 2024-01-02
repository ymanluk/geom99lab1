# Advanced Library Loading in Google Maps examples

Note: This is an optional item to understand and only the simple API loading method will be tested on like:

```javascript
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
```

This is the Advanced library load alternative to the above one-line option and is reformatted for better readability and understanding. Note that this will be a simplified overview. The actual code should be referred to for full details:

```javascript
(g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async(f, n) => {
        await (a = m.createElement("script"));
        e.set('libraries', [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        e.set('callback', c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => h = n(Error(p + " could not load."));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a)
    }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})({ key: "YOUR_API_KEY", v: "weekly" });
```

This code dynamically loads the Google Maps JavaScript API. It constructs a URL with necessary parameters, creates a script element, sets the URL as the script's source, and then appends it to the document. It also handles potential errors and ensures the API loads only once.

## Further simplified version removing variables:

```javascript
(function (config) {
    var mapsAPI = window.google = window.google || {};
    mapsAPI.maps = mapsAPI.maps || {};
    var scriptLoaded = new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${config.key}&callback=${config.callback}`;
        script.onerror = () => reject(new Error("Google Maps API could not load."));
        document.head.appendChild(script);
        mapsAPI.maps.__ib__ = resolve;
    });

    if (mapsAPI.maps.importLibrary) {
        console.warn("Google Maps API only loads once. Ignoring:", config);
    } else {
        mapsAPI.maps.importLibrary = (libraryName) => scriptLoaded.then(() => {
            // Additional logic for library import
        });
    }
})({ key: "YOUR_API_KEY", callback: "yourCallbackFunction" });

```


For a complete understanding, it's best to refer directly to the [Google Maps Platform documentation](https://developers.google.com/maps/documentation/javascript/examples/map-simple#maps_map_simple-html).
