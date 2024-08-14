# Template-nextjs-14
this is a template repo for setting up dev environment for nextjs 14

**Following steps are for the configuration of nextjs, eslint, scss:**

* install and configure nextjs manuelly
    ```console
    npm install next@latest react@latest react-dom@
    ```
* install other packages
    ```console
    npm install --save-dev sass eslint eslint-config-airbnb eslint-config-next
    ```

* define npm commands in package.json
    ```json
    {
        "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "next lint"
        }
    }
    ```

* create file jsconfig.json under root
    - Absolute Imports and Module Path Aliases
        ```json
            {
                "compilerOptions": {
                    "baseUrl": "src/",
                    "paths": {
                        "@/styles/*": ["styles/*"],
                        "@/components/*": ["components/*"]
                    }
                }
            }
        ```

* create file next.config.js under root
    - enable scss
        ```js
            const path = require('path')
            module.exports = {
                sassOptions: {
                    includePaths: [path.join(__dirname, 'styles')],
                },
            }
            
        ```

* create file .eslintrc.json under root
    - set lint configuration
        ```json
            {
                "extends": [
                    "airbnb",
                    "airbnb/hooks",
                    "next/core-web-vitals"
                ],
                "rules": {
                    "jsx-quotes": ["error", "prefer-single"],
                    "max-len": ["error", { "code": 300 }],
                    "import/no-unresolved": "off",
                    "import/extensions": [ "error", "ignorePackages", { "": "never" } ]
                }
            }            
        ```

* create following files from root and set content (see files)
    - src/app/layout.jsx (import global.scss)
    - src/app/page.jsx
    - src/components/button/button.jsx
    - src/components/button/button.module.scss
    - src/styles/global.scss (import normalize.css)
    - public/img/next.svg


* create .gitignore with following patterns
    ```console
        .next
        .node_modules
    ```

**Following steps are for configuration of Storybooks:**
* install storybook
    ```console
    npx storybook@latest init
    ```
* remove mdx-pattern and onboarding-addon in .storybook/main.js
* remove stories folder under src
* create story for button
    - src/components/button/button.stories.js