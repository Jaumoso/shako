import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import tailwind from '@hyoban/eslint-plugin-tailwindcss'

// Get the directory name of the current module (eslint.config.js)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default antfu({
  stylistic: true,
  react: true,
  astro: true,
  ignores: ['README.md'],
}, tailwind.configs['flat/recommended'], {
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      // Construct an absolute path to your global.css
      config: path.resolve(__dirname, 'src/styles/global.css'),
    },
  },
})
