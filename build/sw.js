if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let r = Promise.resolve();
      return (
        c[e] ||
          (r = new Promise(async (r) => {
            if ("document" in self) {
              const c = document.createElement("script");
              (c.src = e), document.head.appendChild(c), (c.onload = r);
            } else importScripts(e), r();
          })),
        r.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
          return c[e];
        })
      );
    },
    r = (r, c) => {
      Promise.all(r.map(e)).then((e) => c(1 === e.length ? e[0] : e));
    },
    c = { require: Promise.resolve(r) };
  self.define = (r, i, s) => {
    c[r] ||
      (c[r] = Promise.resolve().then(() => {
        let c = {};
        const o = { uri: location.origin + r.slice(1) };
        return Promise.all(
          i.map((r) => {
            switch (r) {
              case "exports":
                return c;
              case "module":
                return o;
              default:
                return e(r);
            }
          })
        ).then((e) => {
          const r = s(...e);
          return c.default || (c.default = r), c;
        });
      }));
  };
}
define("./sw.js", ["./workbox-d9851aed"], function (e) {
  "use strict";
  e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "./bundle.js", revision: "d5fac22f30635b419e8796c7fad1b55c" },
        {
          url: "./bundle.worker.js",
          revision: "5e79dc848f97005536cc48cc8dbc81c1",
        },
        { url: "./favicon.ico", revision: "c92b85a5b907c70211f4ec25e29a8c4a" },
        { url: "./index.html", revision: "023426e0bc86aaa10348c0b5a8eeece3" },
      ],
      {}
    );
});
//# sourceMappingURL=sw.js.map
