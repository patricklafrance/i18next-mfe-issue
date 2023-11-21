# react-i18next-mfe-issue

To trigger the WARNING:

- Install the dependencies with `pnpm install`
- Start the development server with `pnpm dev`

In the console you should see the following WARNING:

```bash
WARNING in shared module react
No required version specified and unable to automatically determine one. Unable to find required version for "react" in description file (i18next-mfe-issue\node_modules\.pnpm\react-i18next@13.5.0_i18next@23.7.6_react-dom@18.2.0_react@18.2.0\node_modules\react-i18next\dist\es\package.json). It need to be in dependencies, devDependencies or peerDependencies.      
```

## Potential solution

Manually adding `react-i18next` react dependencies to `node_modules/react-i18next/dist/es/package.json` seems to remove the warning:

```json
{
    "type":"module",
    "version":"13.5.0",
    "devDependencies": {
        "react": "^16.14.0",
        "react-dom": "^16.14.0"
    },
    "peerDependencies": {
        "i18next": ">= 23.2.3",
        "react": ">= 16.8.0"
    },
    "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        },
        "react-native": {
          "optional": true
        }
    }
}
```
