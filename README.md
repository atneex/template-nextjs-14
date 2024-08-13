# Template-nextjs-14
this is a template repo for setting up dev environment for nextjs 14

**Following steps are done:**

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
                    "import/extensions": [ "error", "ignorePackages", { "": "never" } ],
                    "import/no-unresolved": "off",
                    "import/no-extraneous-dependencies": "off",
                    "import/prefer-default-export": "off",
                    "no-use-before-define": "off",
                    "max-len": ["error", { "code": 300 }],
                    "no-unused-expressions": "off"
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


