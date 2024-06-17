const s = (o, n = null) => {
  if (o.install = (t) => {
    for (const l of [o, ...Object.values(n ?? {})])
      t.component(l.name, l);
  }, n)
    for (const [t, l] of Object.entries(n))
      o[t] = l;
  return o;
}, e = (o = []) => ({
  install: (t) => {
    console.log(o), o.forEach((l) => t.use(l));
  }
});
export {
  e as makeInstaller,
  s as withInstall
};
