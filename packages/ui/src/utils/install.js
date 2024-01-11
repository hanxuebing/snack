export const withInstall = (
  main,
  extra = null
) => {
  main.install = app => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp
    }
  }
  return main
}

export const makeInstaller = (components = []) => {
  const install = (app) => {
    console.log(components)
    components.forEach((c) => app.use(c))
  }
  return {
    install,
  }
}
