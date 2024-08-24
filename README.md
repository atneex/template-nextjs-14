# Template-nextjs-14
this is a template repo for setting up the dev environment for nextjs 14

**Configure nextjs:**
* install and configure nextjs manuelly
    ```console
    npm install react@latest react-dom@latest next@latest
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
                        "@/components/*": ["components/*"],
                        "@/pages/*": ["pages/*"]
                    }
                }
            }
        ```

* create following files under root and set content (see files)
    - src/app/layout.js
    - src/app/page.js
    - src/components/button/button.js
    - public/img/next.svg


* create .gitignore with following patterns
    ```console
        .next
        .node_modules
    ```

**Configure EsLint:**
* install Lint
    ```console
    npm install --save-dev  eslint eslint-config-airbnb eslint-config-next
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
                    "import/extensions": ["error", "ignorePackages", {"": "never"}],
                    "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"]}]

                }
            }            
        ```

**Configure Style:**
* install scss normalize.css
    ```console
    npm install --save-dev sass
    npm install normalize.css
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
    
* create following files from root and set content (see files)
    - src/styles/global.scss (import normalize.css)
    - src/styles/variables.scss
    - src/styles/mixins.scss
    - src/components/button/button.module.scss

* import global.scss in src/app/layout.js
* configure colors, typography, breakpoint, max-width

**Configure Storybooks:**
* install storybook
    ```console
    npx storybook@latest init
    ```
* remove mdx-pattern and onboarding-addon in .storybook/main.js
* remove stories folder under src
* create story for button
    - src/components/button/button.stories.js (by the import of scss the extension must be written)

**Configure App Route:**
* create src/app/about/page.js

**Configure Project Line Ending**
* git
    ```console
        git config --global core.autocrlf false    
    ```
* vscode
    ```json
        {
            "files.eol": "\n"
        }        
    ```