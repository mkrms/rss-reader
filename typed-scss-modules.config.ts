export const config = {
  exportType: 'default',
  nameFormat: 'none',
  implementation: 'sass',
  additionalData: `@use "src/public/styles/global.scss" as *;`,
  ignore: ['**/global.scss']
}