/**
 * 为组价增加install方法
 * @param {*} main 
 * @param {*} extra 
 * @returns 
 */
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

/**
 * 定义安装所有组件集合install， app.use触发安装组价集合，每个组件都会触发install方法
 * @param {*} components 
 * @returns 
 */
export const makeInstaller = (components = []) => {
  const install = (app) => {
    console.log(components)
    components.forEach((c) => app.use(c))
  }
  return {
    install,
  }
}
